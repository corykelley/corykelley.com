import PostCard from '../components/PostCard';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';

export default function Home({ posts }) {
	return (
		<>
			<section className='w-[90%] max-w-screen-xl mx-auto mb-10'>
				<h1 className='text-5xl md:text-7xl font-bold mb-5 tracking-tight'>
					Hey, I'm Cory and I write code for the modern web.
				</h1>
				<p className='text-xl'>
					I have the honor of working on websites and applications for industry
					leaders, eCommerce power-houses, and all around cool folks. I write
					about those experiences here.
				</p>
			</section>
			<section className='w-[90%] max-w-screen-xl mx-auto'>
				<ul>
					{posts.map((post) => (
						<li key={post.filePath}>
							<Link
								as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
								href={`/posts/[slug]`}
							>
								<a>
									<PostCard
										title={post.data.title}
										description={post.data.description}
									/>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</>
	);
}

export function getStaticProps() {
	const posts = postFilePaths.map((filePath) => {
		const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
		const { content, data } = matter(source);

		return {
			content,
			data,
			filePath,
		};
	});

	return { props: { posts } };
}

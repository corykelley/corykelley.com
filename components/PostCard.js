export default function PostCard({ title, description }) {
	console.log(title, description);
	return (
		<article>
			<h3>{title}</h3>
			<p>{description}</p>
		</article>
	);
}

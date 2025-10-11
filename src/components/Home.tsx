import { useQuery } from '@tanstack/react-query'

export function Home() {
	const base_url = import.meta.env.DEV ? 'http://localhost:3000' : ''
	const { data, error, isLoading } = useQuery({
		queryKey: ['hello'],
		queryFn: () => fetch(`${base_url}/api/hello`).then((res) => res.text()),
	})
	return (
		<div>
			<h1>Home</h1>
			<article>
				{isLoading && <em>Loading...</em>}
				{error && <s>{error.message}</s>}
				{data && <b>{data}</b>}
				<br />
				<br />
				Built with <mark>dev.css</mark> and <mark>rsbuild</mark>.
			</article>
		</div>
	)
}

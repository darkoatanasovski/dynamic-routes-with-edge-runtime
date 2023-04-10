interface Params {
	params: { [key: string]: string };
}
export const revalidate = 7200;

export default async function Page({ params }: Params) {
	return (
		<div>
			<pre>{JSON.stringify(params, null, 2)}</pre>
		</div>
	);
}

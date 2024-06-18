'use client';

export const Wallets = ({ props }: { props: any }) => {
	return (
		<div>
			<h1>Wallets</h1>
			<p>{JSON.stringify(props, null, 4)}</p>
		</div>
	);
};

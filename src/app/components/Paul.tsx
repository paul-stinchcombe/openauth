'use client';

import { useAuthWidget } from '@aarc-xyz/auth-widget';
import { useEffect } from 'react';

export default function Paul() {
	const { openAuthWidget } = useAuthWidget();

	useEffect(() => {
		console.log('Auth widget mounted');
		if (window) openAuthWidget();
		return () => {
			console.log('Auth widget unmounted');
		};
	}, [window, openAuthWidget]);

	return (
		<div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'></main>
		</div>
	);
}

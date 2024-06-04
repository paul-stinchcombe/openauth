'use client';

import { useAuthWidget, useWallet } from '@aarc-xyz/auth-widget';
// import { useWalletManager } from '@aarc-xyz/wallet-manager';
import { useEffect } from 'react';

interface AuthConfig {
	Wallet?: (props: any) => JSX.Element;
	appearance: {
		logoUrl: string;
		themeColor: string;
		darkMode?: boolean;
	};
	callbacks: {
		onSuccess: (data: any) => void;
		onError: (data: any) => void;
		onClose: () => void;
		onOpen: () => void;
	};
	authMethods: string[];
	socialAuth: string[];
	aarc_api_key: string; //Get the API Key from the Aarc dashboard
}

const Wallets = ({ props }: { props: any }) => {
	return (
		<div>
			<h1>Wallets</h1>
		</div>
	);
};

export const config: AuthConfig = {
	Wallet: function Wallet(props: any) {
		console.log('props', props);
		return <Wallets {...props} />;
	},
	appearance: {
		logoUrl: 'https://dashboard.aarc.xyz/assets/AuthScreenLogo-CNfNjJ82.svg',
		themeColor: '#2D2D2D',
		darkMode: true,
	},
	callbacks: {
		onSuccess: (data: any) => {
			// setData(data)
			console.log(data);
			// setResult()
		},
		onError: (data: any) => {
			console.log('onError', data);
		},
		onClose: () => {
			console.log('onClose');
		},
		onOpen: () => {
			console.log('onOpen');
		},
	},
	authMethods: ['email', 'wallet'],
	socialAuth: ['google'],
	aarc_api_key: '5ec16172-e755-485d-a5de-df4693b70315',
};

export default function Home() {
	const { openAuthWidget } = useAuthWidget();

	useEffect(() => {
		console.log('Auth widget mounted');
		openAuthWidget();
		return () => {
			console.log('Auth widget unmounted');
		};
	}, []);

	return (
		<div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
			<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'></main>
		</div>
	);
}

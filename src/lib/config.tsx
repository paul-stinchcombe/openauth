'use client';

import { Wallets } from '@/app/components/Wallet';

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
			console.log('success: ', data);
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
	aarc_api_key: process.env.NEXT_PUBLIC_API_KEY ?? '',
};

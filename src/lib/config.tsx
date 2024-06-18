'use client';

export interface AuthConfig {
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
	chainId: number;
}

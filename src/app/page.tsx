'use client';

import { Provider } from '@aarc-xyz/auth-widget';
import Paul from './components/Paul';
import { AuthConfig } from '@/lib/config';
import { Wallets } from './components/Wallet';
import { useState } from 'react';

export default function Home() {
	const [user, setUser] = useState<any>(undefined);
	/*
[Log] success: 
Object

code: 200

data: Object

key: "1778353718c2c40b2a0b01d19359e19cc529a5fb712d347564483f340cb18db2"

user: {first_name: "Paul I", last_name: "KAMI", middle_name: "", primary_contact: "paul@kamiunlimited.com", profile_picture_url: "https://lh3.googleusercontent.com/a/ACg8ocJ3u0wALYg52_VGYp4IAl21jOlXpSlOfpqZoA0kxZbiOJ83Yw=s96-c", …}

wallet_address: "0xf95469467938E8175d6EDfefe15fFF7D972C4A5A"

Object Prototype

message: "success"

Object Prototype
*/
	const config: AuthConfig = {
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
				setUser(data);
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
		chainId: 1,
	};

	console.log('API KEY', config.aarc_api_key);
	return (
		<Provider config={config}>
			{!user && <Paul />}
			{user && (
				<div className='w-screen h-screen flex justify-center items-center'>
					<div className='w-fit h-fit p-8 shadow-lg flex flex-col items-center justify-center'>
						<img className='mb-4' src={user.data.user.profile_picture_url} />
						<h2>
							{user.data.user.first_name} {user.data.user.last_name}
						</h2>
						<h3>{user.data.user.primary_contact}</h3>
						<h3>Wallet: {user.data.wallet_address}</h3>
						<h4>Key: {user.data.key}</h4>
					</div>
				</div>
			)}
		</Provider>
	);
}

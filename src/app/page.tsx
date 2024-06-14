'use client';

import { Provider } from '@aarc-xyz/auth-widget';
import Paul from './components/Paul';
import { config } from '@/lib/config';

export default function Home() {
	return (
		<Provider config={config}>
			<Paul />
		</Provider>
	);
}

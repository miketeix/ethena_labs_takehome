'use client'

import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'

import { Bai_Jamjuree } from 'next/font/google'
import colors from './styles/colors'

import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';

import { createConfig, configureChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { mainnet } from 'viem/chains'

const jamjuree = Bai_Jamjuree({ 
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-jamjuree'
})

const appName = 'Ethena Labs Takehome';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const projectId = process.env.WC_PROJECT_ID || 'PLACEHOLDER';

const { wallets } = getDefaultWallets({
  appName,
  projectId,
  chains,
});

const demoAppInfo = {
  appName,
};

const connectors = connectorsForWallets(wallets);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jamjuree.className}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider theme={darkTheme({
            fontStack: 'system',
            borderRadius: 'medium',
            accentColor: colors.Blue400,
            accentColorForeground: colors.Gray500,
          })} appInfo={demoAppInfo} chains={chains}>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>      
      </body>
    </html>
  )
}

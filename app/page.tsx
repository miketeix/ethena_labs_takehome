'use client'
import { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

import TokenSelectModal from './components/TokenSelectModal';
import { fetchBalance } from '@wagmi/core'


export default function Home() {
  const [showModal, setShowModal ]= useState(false);
  const [selectedToken, setSelectedToken ]= useState({ symbol: '', iconUrl: '', name: '', address: ''});
  const { isConnected, address: connectedAddress } = useAccount();

  useEffect(() => {
    async function fetchData() {
      if (selectedToken.symbol && connectedAddress) {
        const { formatted, symbol } = await fetchBalance({
          address: connectedAddress,
          token: selectedToken.address as `0x${string}`,
        })
        console.log(`Connected user's "${symbol}" balance : `, formatted);
      }
    }
    fetchData();
  }, [selectedToken, connectedAddress]); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="absolute right-10 top-10" suppressHydrationWarning>
          <ConnectButton showBalance={false} accountStatus="avatar" chainStatus="name"/>
        </div>
        {
          showModal && <TokenSelectModal show={showModal} onHide={()=> setShowModal(false)} onSelect={setSelectedToken}/>
        }
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <div > 
                <button
                className={`rounded-md bg-blue-400 text-gray-600 text-xl px-3.5 py-2.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${selectedToken.symbol? '': 'hover:bg-blue-800'}`}
                  onClick={() => setShowModal(true)}
                >
                  {
                    selectedToken.symbol ? 
                      <div className="flex min-w-0 gap-x-4">
                                <img width="32" height="32" className="h-12 w-12 flex-none rounded-full bg-gray-50" src={selectedToken.iconUrl} alt={selectedToken.name} />
                                <div className="min-w-0 flex-auto">
                                  <p className="text-lg font-bold leading-6 text-white">{selectedToken.symbol}</p>
                                  <p className="mt-1 truncate text-xs leading-5 text-blue-800">{selectedToken.name}</p>
                                </div>
                              </div>
                      : "Select Token"
                  }
                </button>
            </div>
          </div>
         
        </div>
 

    </main>
  )
}

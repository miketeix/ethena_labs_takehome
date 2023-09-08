import { Fragment, useRef, useState, Dispatch, SetStateAction } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { tokenList } from '../static/tokens';
// import Image  from 'next/image';
import { AnimatePresence, motion } from 'framer-motion'

type tokenType = { symbol: string; iconUrl: string; name: string; address: `0x${string}`; };
type OnModalHideFunction = () => void;
export default function TokenSelectModal({ onHide, show: showModal, onSelect }: { onHide: OnModalHideFunction, show: boolean, onSelect: Dispatch<SetStateAction<tokenType>>}) {

  return (
    <AnimatePresence>
      {
        showModal &&
        (<Dialog 
          static
          open={showModal} 
          as={motion.div} 
          className="relative z-10" 
          onClose={onHide}
        >        
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">  
                <Dialog.Panel className=" bg-white relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                  <div className="bg-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-blue-100">
                          Select a token
                        </Dialog.Title>
                        <div className="mt-2">
                        <ul role="list" className="divide-y divide-blue-800">
                          { tokenList.map(({ symbol, name, iconUrl, address })=> (
                            <li key={symbol} className="flex justify-between gap-x-6 pl-4 py-5 hover:bg-blue-800 cursor-pointer " onClick={()=> { onSelect({ symbol, iconUrl, name, address}); onHide();}}>
                              <div className="flex min-w-0 gap-x-4">
                                <img width="64" height="64" className="h-12 w-12 flex-none rounded-full bg-gray-50" src={iconUrl} alt={name} />
                                <div className="min-w-0 flex-auto">
                                  <p className="text-lg font-bold leading-6 text-white-100">{symbol}</p>
                                  <p className="mt-1 truncate text-xs leading-5 text-blue-100">{name}</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul> 
                        </div>
                      </div>
                  </div>
                </Dialog.Panel>
            </div>
          </div>
        </Dialog>)}
    </AnimatePresence>
  )
}


import React from 'react';
import Header from '../components/Header';

import Link from 'next/link';
function Market() {
  return (
    <>
      <Header />
      <section className="h-screen max-w-7xl mx-auto mt-24 pb-28 overflow-hidden px-8">
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <h1 className='font-bold text-5xl'>Bem-vindes ao Mamacotrampo</h1>
            <h3 className='mt-4 font-thin text-xl	'>Onde mamacos encontram mamacos para trocar serviços por pix.</h3>
          </div>
          <div className='flex w-auto justify-end'>

            <button className="h-12 bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
              Publique um projeto
            </button>
          </div>
        </div>
        <div className='grid h-auto	items-center grid-cols-2 mt-28	gap-4'>
          <Link href="/projects">
            <div className='flex justify-center flex-col items-center hover:cursor-pointer hover:scale-110 ease-in duration-200	'>
              <img
                src="/contract.png"
                alt="Picture of the author"
                width={300}
              />
              <p className='text-center font-bold text-xl'>Encontre um projeto</p>
            </div>
          </Link>
          <Link href='/professionals'>
            <div className='flex justify-center flex-col items-center hover:cursor-pointer hover:scale-110 ease-in duration-200'>
              <img
                src="/peoples.png"
                alt="Picture of the author"
                width={300}
              />
              <p className='text-center font-bold text-xl'>Nossos mamacos</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Market;
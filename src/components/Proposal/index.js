import React from 'react';

import Lottie from 'react-lottie';
import * as animationData from '../../assets/lottie/monkey.json'

function Proposal({ title, description, category, subcategory }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <section className='flex flex-column justify-center mt-10'>
      <div className='bg-black/5 rounded-lg  w-4/12	p-8'>
        <div className='flex justify-between items-center	'>
          <p className='text-xl font-bold'>{title}</p>
          <div className='w-28'>
            <Lottie options={defaultOptions}
              height={100}
              width={130}
            />
          </div>

        </div>
        <div className='flex'>
          <p className='m-2'>Publicado há: 4h</p>
          <p className='m-2'>Prazo de Entrega: 10/09/2022</p>
          <p className='m-2'> Propostas Recebidas: 0</p>
        </div>
        <div className='flex flex-col mt-6	'>
          <strong className='mb-1'>Descrição:</strong>
          <p>
            {description}
          </p>
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <div>
            <p className='font-bold text-xs	'>
              Categoria: {category}
            </p>
            <p className='font-bold text-xs	'>
              Subcategoria: {subcategory}
            </p>
          </div>
          <div>
            <span className="bg-yellow-400 text-zinc-900 text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">O novo mamaco</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proposal;
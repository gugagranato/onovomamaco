import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// import { Container } from './styles';

function Login() {


  return (
      <section class="h-screen bg-hero bg-cover relative pt-10 pb-36 overflow-hidden">
        <div class="flex justify-center pb-20 w-full md:w-full p-6">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={230}
            height={80}
          />
        </div>
        <div class="relative z-10 container mx-auto px-4">
          <div class="flex flex-wrap -m-6">
            <div class="w-full md:w-1/2 p-6">
              <div class="md:max-w-xl">
                <h2 class="mb-3 font-heading font-bold text-neutral-900 text-6xl sm:text-7xl">Mamacos do trabalho</h2>
                <p class="mb-12 text-lg text-neutral-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p>
                <div class="flex flex-wrap -m-2 mb-6">
                  <div class="w-full p-2">
                    <input class="w-full px-5 py-3.5 text-neutral-900 placeholder-neutral-900 bg-white outline-none focus:ring-4 focus:ring-amber-400 border border-gray-200 rounded-lg" type="text" placeholder="Email address" name="email" />
                  </div>
                  <div class="w-full p-2">
                    <input class="w-full px-5 py-3.5 text-neutral-900 placeholder-neutral-900 bg-white outline-none focus:ring-4 focus:ring-amber-400 border border-gray-200 rounded-lg" type="password" placeholder="Password" name="password" />
                  </div>
                </div>
                <div class="flex flex-wrap -m-1.5 mb-8">
                  <div class="w-auto p-1.5">
                    <input class="w-4 h-4 checked:bg-blue-100" type="checkbox" />
                  </div>
                  <div class="flex-1 p-1.5">
                    <p class="text-neutral-900 text-sm">Mantenha-me conectado</p>
                  </div>
                </div>
                <div class="group relative md:max-w-max">
                  <div class="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300"></div>
                  <Link href="/market">
          
                  <button class="bg-yellow-400 p-1 w-full font-heading font-semibold text-xs text-gray-900 group-hover:text-white group-hover:bg-transparent border-2 border-amber-300 uppercase tracking-px overflow-hidden rounded-md">
                    <div class="relative p-5 px-20 bg-gradient-green overflow-hidden rounded-md">
                      <div class=" absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full transition ease-in-out duration-500"></div>
                      <p class="relative z-10">Login</p>
                    </div>
                  </button>
                  </Link> 
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-6 ">
              <div class="md:max-w-lg ml-auto">
                <div class="flex flex-wrap -m-6">
                  <div class="w-auto p-6">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login;
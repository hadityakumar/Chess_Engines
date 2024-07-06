import React from 'react'

const Footer = () => {
  return (
    <>
        <footer class="text-gray-600 body-font">
            <div class="container mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <img src="horse.svg" alt="horse" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" />
                <span class="ml-3 text-xl">Chess Engines</span>
            </a>
            <p class="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Chess Engines —
                <a href="https://www.linkedin.com/in/hadityakumar/" class="text-gray-300 ml-1 underline" rel="noopener noreferrer" target="_blank">hadityakumar</a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="https://github.com/hadityakumar" target="_blank" className="text-gray-500">
                    <img src="github.png" alt="" className='size-10' />
                </a>
            </span>
            </div>
        </footer>
                        
    </>
  )
}

export default Footer

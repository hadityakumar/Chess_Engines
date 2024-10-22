import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font mb-4">
        <div className="container mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
                src="horse.svg"
                alt="logo"
                width={32}
                height={32}
                className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                />
            <span className="ml-3 text-xl">Chess Engines</span>
          </a>
          <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-2">
            © 2024 Chess Engines —
            <a href="https://www.linkedin.com/in/hadityakumar/" className="text-gray-300 ml-1 underline" rel="noopener noreferrer" target="_blank">hadityakumar</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://github.com/hadityakumar" target="_blank" className="text-gray-500">

              <Image
                src="/github.png"
                alt="brand"
                width={32}
                height={32}
                className="size-10"
              />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;

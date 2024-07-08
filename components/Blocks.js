'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { usePageTitle } from '@/context/PageTitleContext.js';

const Blocks = () => {
    const { setPageTitle } = usePageTitle();
    const router = useRouter();
    const handleClick = (title, link) => {
        setPageTitle(title);
        router.push(`/${link}`)
    };

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        <div onClick={() => handleClick('Random Chess Engine', 'random')} className="cursor-pointer p-4 md:w-1/3 hover:shadow-2xl">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    src="/random_ai.png" 
                                    alt="Random Chess Engine" 
                                    width={500} 
                                    height={300} 
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-green-600 mb-1">Easy</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Random Chess Engine</h1>
                                    <p className="leading-relaxed mb-3 text-gray-600">Chess AI that randomly selects a move from all possible moves.</p>
                                    <div className="flex items-center flex-wrap">
                                        <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">PLAY NOW
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => handleClick('Trained ML Model', 'ml-model')} className="cursor-pointer p-4 md:w-1/3 hover:shadow-2xl">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    src="/mlchess.webp" 
                                    alt="Trained ML Model" 
                                    width={500} 
                                    height={300} 
                                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-yellow-800 mb-1">Medium</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Trained ML Model</h1>
                                    <p className="leading-relaxed mb-3 text-gray-600">ML Model that I trained on more than 50,000 matches.</p>
                                    <div className="flex items-center flex-wrap">
                                        <span href="/ml-model" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">PLAY NOW
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div onClick={() => handleClick('StockFish Chess Engine', 'stockfish')} className="cursor-pointer p-4 md:w-1/3 hover:shadow-2xl">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image 
                                    src="/stockfish.png" 
                                    alt="StockFish Chess Engine" 
                                    width={500} 
                                    height={300} 
                                    className="lg:h-48 md:h-36 w-full object-center object-contain"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-red-800 mb-1">Hard</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">StockFish Chess Engine</h1>
                                    <p className="leading-relaxed mb-3 text-gray-600">Integrated with one of the World's best Chess Engine - StockFish.</p>
                                    <div className="flex items-center flex-wrap">
                                        <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">PLAY NOW
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blocks

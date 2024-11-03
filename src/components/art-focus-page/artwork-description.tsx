'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function ArtworkDescription() {
    useEffect(() => { 
        const heartIcon = document.getElementById('heart-icon');
    
        if (heartIcon) { 
          let isFilled = false;
    
          heartIcon.addEventListener('click', () => {
            isFilled = !isFilled; 
    
            if (isFilled) {
              heartIcon.setAttribute('fill', '#AC4B36'); 
              heartIcon.setAttribute('stroke', '#AC4B36');
            } else {
              heartIcon.setAttribute('fill', 'none'); 
            }
          });
        }
      }, []);
    return (
        <>
            <section className='bg-white py-12 text-gray-700 sm:py-16 lg:py-20'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="imageetdescription flex flex-col lg:flex-row justify-between w-full h-auto content-center items-center">
                        <div className="lg:w-1/3">
                            <div className="imageart">
                                <Image
                                    width={400}
                                    height={500}
                                    src="/thom.jpg"
                                    alt="Image"
                                    objectFit="object-cover"
                                    className="group-hover:scale-125 transition-all duration-300 p-5 bg-light-pink" // Ajout de p-7 et bg-light-pink
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3 lg:ps-16 ps-8 pt-12 lg:pt-0">
                            <h2 className="text-3xl oleo-script-regular">Nom de l'oeuvre</h2>
                            <h3 >Nom de l'artiste</h3>
                            <p className='pb-5'>99€ TTC</p>
                            <p className="pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda animi officiis nesciunt neque aliquam, eum minus nostrum ipsam ratione, consectetur voluptate nobis optio quae porro laboriosam veniam cumque quis deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda animi officiis nesciunt neque aliquam, eum minus nostrum ipsam ratione, consectetur voluptate nobis optio quae porro laboriosam veniam cumque quis deserunt.</p>
                            <p>15x21 cm</p>
                            <p className='pb-5'><em>Papier Hahnemühle German Etching</em></p>
                            <div className='flex flex-row'>
                                <svg id="heart-icon" xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                <svg className='mx-4' xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
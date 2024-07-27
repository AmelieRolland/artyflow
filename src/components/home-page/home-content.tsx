import Image from 'next/image';

export default function HomeContent() {
    return (
        <>

            <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between">
                        <h3>PLUS RECENT</h3>

                        <div className="flex flex-row items-center ps-16">
                            <p className=" pe-3" >Affiner</p>
                            <svg width="18" height="17" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.375 1.5C13.3395 1.5 12.5 2.33947 12.5 3.375C12.5 4.41053 13.3395 5.25 14.375 5.25C15.4105 5.25 16.25 4.41053 16.25 3.375C16.25 2.33947 15.4105 1.5 14.375 1.5ZM11.3125 2.75C11.6021 1.3236 12.8632 0.25 14.375 0.25C15.8868 0.25 17.1479 1.3236 17.4375 2.75H20V4H17.4375C17.1479 5.4264 15.8868 6.5 14.375 6.5C12.8632 6.5 11.6021 5.4264 11.3125 4H0V2.75H11.3125ZM5.625 7.75C4.58947 7.75 3.75 8.58947 3.75 9.625C3.75 10.6605 4.58947 11.5 5.625 11.5C6.66053 11.5 7.5 10.6605 7.5 9.625C7.5 8.58947 6.66053 7.75 5.625 7.75ZM2.56251 9C2.85206 7.5736 4.11315 6.5 5.625 6.5C7.13685 6.5 8.39794 7.5736 8.68749 9H20V10.25H8.68749C8.39794 11.6764 7.13685 12.75 5.625 12.75C4.11315 12.75 2.85206 11.6764 2.56251 10.25H0V9H2.56251ZM14.375 14C13.3395 14 12.5 14.8395 12.5 15.875C12.5 16.9105 13.3395 17.75 14.375 17.75C15.4105 17.75 16.25 16.9105 16.25 15.875C16.25 14.8395 15.4105 14 14.375 14ZM11.3125 15.25C11.6021 13.8236 12.8632 12.75 14.375 12.75C15.8868 12.75 17.1479 13.8236 17.4375 15.25H20V16.5H17.4375C17.1479 17.9264 15.8868 19 14.375 19C12.8632 19 11.6021 17.9264 11.3125 16.5H0V15.25H11.3125Z" fill="black" />
                            </svg>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-12">
                        <article className="relative">
                            <div className=" overflow-hidden">
                                <Image
                                    width={600}
                                    height={800}
                                    src="/Suzanne.jpg"
                                    alt="Image"
                                    objectFit="cover"
                                    className="group-hover:scale-125 transition-all duration-300"
                                />
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="Nom de l'oeuvre" className="cursor-pointer">
                                            Nom de l'oeuvre
                                            <span className="absolute" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    <h3>
                                        <a href="" title="artist name">
                                            par Nom de l'artiste
                                        </a>
                                    </h3>

                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                                </div>
                            </div>
                        </article>

                        <article className="relative">
                            <div className=" overflow-hidden">
                                <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/Suzanne.jpg" alt="" />
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="Nom de l'oeuvre" className="cursor-pointer">
                                            Nom de l'oeuvre
                                            <span className="absolute" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    <h3>
                                        <a href="" title="artist name">
                                            par Nom de l'artiste
                                        </a>
                                    </h3>

                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                                </div>
                            </div>
                        </article>

                        <article className="relative">
                            <div className=" overflow-hidden">
                                <Image
                                    width={600}
                                    height={800}
                                    src="/Suzanne.jpg"
                                    alt="Image"
                                    objectFit="cover"
                                    className="group-hover:scale-125 transition-all duration-300"
                                />
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="Nom de l'oeuvre" className="cursor-pointer">
                                            Nom de l'oeuvre
                                            <span className="absolute" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    <h3>
                                        <a href="" title="artist name">
                                            par Nom de l'artiste
                                        </a>
                                    </h3>

                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                                </div>
                            </div>
                        </article>

                        <article className="relative">
                            <div className=" overflow-hidden">
                                <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/Suzanne.jpg" alt="" />
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="Nom de l'oeuvre" className="cursor-pointer">
                                            Nom de l'oeuvre
                                            <span className="absolute" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    <h3>
                                        <a href="" title="artist name">
                                            par Nom de l'artiste
                                        </a>
                                    </h3>

                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                                </div>
                            </div>
                        </article>

                        <article className="relative">
                            <div className=" overflow-hidden">
                                <Image
                                    width={600}
                                    height={800}
                                    src="/Suzanne.jpg"
                                    alt="Image"
                                    objectFit="cover"
                                    className="group-hover:scale-125 transition-all duration-300"
                                />
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="Nom de l'oeuvre" className="cursor-pointer">
                                            Nom de l'oeuvre
                                            <span className="absolute" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    <h3>
                                        <a href="" title="artist name">
                                            par Nom de l'artiste
                                        </a>
                                    </h3>

                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                                </div>
                            </div>
                        </article>

                        <article className="relative">
                            <div className=" overflow-hidden">
                                <img className="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="/Suzanne.jpg" alt="" />
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="Nom de l'oeuvre" className="cursor-pointer">
                                            Nom de l'oeuvre
                                            <span className="absolute" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    <h3>
                                        <a href="" title="artist name">
                                            par Nom de l'artiste
                                        </a>
                                    </h3>

                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                                </div>
                            </div>
                        </article>

                        <article className="relative">
                            <div className=" overflow-hidden">
                                <Image
                                    width={600}
                                    height={800}
                                    src="/Suzanne.jpg"
                                    alt="Image"
                                    objectFit="cover"
                                    className="group-hover:scale-125 transition-all duration-300"
                                />
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="Nom de l'oeuvre" className="cursor-pointer">
                                            Nom de l'oeuvre
                                            <span className="absolute" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    <h3>
                                        <a href="" title="artist name">
                                            par Nom de l'artiste
                                        </a>
                                    </h3>

                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                                </div>
                            </div>
                        </article>

                        <article className="relative">
                            <div className=" overflow-hidden">
                                <Image
                                    width={600}
                                    height={800}
                                    src="/Suzanne.jpg"
                                    alt="Image"
                                    objectFit="cover"
                                    className="group-hover:scale-125 transition-all duration-300"
                                />
                            </div>

                            <div className="mt-4 flex items-end justify-between">
                                <div className="">
                                    <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                                        <a href="#" title="Nom de l'oeuvre" className="cursor-pointer">
                                            Nom de l'oeuvre
                                            <span className="absolute" aria-hidden="true"></span>
                                        </a>
                                    </h3>
                                    <h3>
                                        <a href="" title="artist name">
                                            par Nom de l'artiste
                                        </a>
                                    </h3>

                                </div>

                                <div className="text-right">
                                    <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

        </>
    )


}                  
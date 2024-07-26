export default function Hero() {
    return (
        <>
            <form className="max-w-lg mx-auto lg:my-8">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-12 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ville, code postal..."
                        required
                    />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-md-pink hover:bg-light-pink focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2">Search</button>
                </div>
            </form>

            <section className="overflow-x-clip bg-light-pink w-full h-full">
                <div className="flex flex-col lg:flex-col mx-auto max-w-screen-xl lg:py-20 px-4 sm:px-6 lg:px-8 pt-16">

                    <svg className="absolute top-[-50px] right-[-200px] -z-5" width="800" height="1000" viewBox="0 0 390 505" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <rect x="-51" y="347.862" width="386.261" height="359.905" transform="rotate(-64.2356 -51 347.862)" fill="url(#pattern0_9_150)" />
                        <defs>
                            <pattern id="pattern0_9_150" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use href="#image0_9_150" transform="matrix(0.002 0 0 0.00214646 0 -0.0366149)" />
                            </pattern>
                            <image id="image0_9_150" width="500" height="500" href="data:image/png;base64,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" />
                        </defs>
                    </svg>

                    <h2 className="oleo-script-regular text-white text-4xl text-left mb-8 lg:mb-0">A la une</h2>


                    <div className="flex flex-col md:flex-row-reverse justify-between w-full h-auto content-center items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="relative z-50 h-full bg-gray-200">
                                <img className="w-full h-full object-cover" src="/ouQueTuSois.JPG" alt="" />
                            </div>
                        </div>
                        <div className="md:w-1/2 md:pe-8 h-full">
                            <h3>Nom de l'artiste</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda animi officiis nesciunt neque aliquam, eum minus nostrum ipsam ratione, consectetur voluptate nobis optio quae porro laboriosam veniam cumque quis deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda animi officiis nesciunt neque aliquam, eum minus nostrum ipsam ratione, consectetur voluptate nobis optio quae porro laboriosam veniam cumque quis deserunt.</p>
                            <div className="py-8">
                                <a className="bg-dark-pink py-3 px-6 rounded-full text-white" href="">Je découvre</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

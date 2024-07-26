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

            <section className="bg-light-pink w-full h-full">
                <div className="flex flex-col lg:flex-col mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-16">
                    <h2 className="text-left mb-8 lg:mb-0">A la une</h2>
                    <div className="flex flex-col md:flex-row-reverse justify-between w-full h-auto">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="h-full bg-gray-200">image</div>
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

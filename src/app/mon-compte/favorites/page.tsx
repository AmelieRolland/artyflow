import Image from 'next/image';

const Favorite = () => (
    <>
        <main >
            <section className='bg-white py-12 text-gray-700 sm:py-16 lg:py-12'>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
                    <h1 className='text-5xl oleo-script-regular'>Mes favoris</h1>
                    <h2 className='text-center pt-8 text-2xl'>Oh, non! vous n'avez pas encore de favoris :(</h2>
                    <p className='text-center text-xl pb-8'>Si vous souhaitez ajouter des oeuvres à vos favoris, rien de plus simple!
                        Cliquez sur le coeur juste sous l'oeuvre que vous souhaitez ajouter.
                    </p>
                    <Image
                        width={400}
                        height={500}
                        src="/howtolike.png"
                        alt="Image"
                        objectFit="cover"
                        className="group-hover:scale-125 transition-all duration-300 mx-auto" />
                </div>
            </section>
        </main>
    </>
)

export default Favorite;
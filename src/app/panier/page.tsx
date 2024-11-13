const Panier = () => (
  <>
    <main>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <h1 className="text-5xl oleo-script-regular">Mon panier</h1>
          <h2 className="text-center pt-8 text-2xl">
            Oh, non! Votre panier est vide :(
          </h2>
          <div className="py-8 text-center">
            <a
              className="leading-none bg-dark-pink hover:bg-pinker  pt-2 pb-3 px-6 rounded-full mx-auto text-white"
              href=""
            >
              Je commencer à explorer
            </a>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Panier;

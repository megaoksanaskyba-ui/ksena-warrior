export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen" id="main">
      {/* Skip link for keyboard users */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-3 py-2 rounded"
      >
        Skip to content
      </a>

      {/* HERO */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 id="hero-heading" className="text-6xl md:text-8xl font-bold tracking-widest">
          KSENA_WARRIOR
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300">Photography • Video • AI Content</p>

        <p className="mt-4 max-w-xl text-gray-400">
          Creating powerful visual stories through fashion, portraits and creative photography.
        </p>

        <div className="flex gap-5 mt-10">
          <a
            href="/contact"
            className="bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-white"
          >
            Book a session
          </a>

          <a
            href="/portfolio"
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-white"
          >
            Portfolio
          </a>
        </div>
      </section>

      {/* CONTENT START */}
      <div id="content" className="focus:outline-none">

        {/* ABOUT */}
        <section id="about" aria-labelledby="about-heading" className="py-24 px-8 max-w-6xl mx-auto">
          <h2 id="about-heading" className="text-4xl font-bold mb-8">
            About Ksena
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            Photographer and visual creator based in Germany. I create emotional portraits, fashion
            stories and modern content for brands and people.
          </p>
        </section>

        {/* SERVICES */}
        <section id="services" aria-labelledby="services-heading" className="py-24 px-8 bg-neutral-950">
          <h2 id="services-heading" className="text-4xl font-bold text-center mb-12">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="border border-neutral-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold">Photography</h3>
              <p className="mt-4 text-gray-400">Portrait, fashion and creative photoshoots.</p>
            </article>

            <article className="border border-neutral-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold">Video Content</h3>
              <p className="mt-4 text-gray-400">Reels, social media videos and storytelling.</p>
            </article>

            <article className="border border-neutral-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold">AI Photography</h3>
              <p className="mt-4 text-gray-400">Creative AI images and digital concepts.</p>
            </article>
          </div>
        </section>

        {/* WORKSHOP */}
        <section id="workshop" aria-labelledby="workshop-heading" className="py-24 px-8 text-center">
          <h2 id="workshop-heading" className="text-4xl font-bold">
            Frame It Workshop
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Learn photography, video creation, working with models and Instagram growth.
          </p>

          <a
            href="/workshops/frame-it"
            className="mt-8 inline-block bg-white text-black px-10 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          >
            Join Workshop
          </a>
        </section>

        {/* CONTACT */}
        <section id="contact" aria-labelledby="contact-heading" className="py-20 bg-neutral-950 text-center">
          <h2 id="contact-heading" className="text-4xl font-bold">
            Contact
          </h2>

          <p className="mt-5 text-gray-400">Instagram: <a href="https://instagram.com/ksena_warrior" className="underline">@ksena_warrior</a></p>
        </section>
      </div>
    </main>
  )
}

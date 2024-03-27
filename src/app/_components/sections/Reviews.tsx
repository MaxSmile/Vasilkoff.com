// src/app/_components/sections/Reviews.tsx
export default function Reviews() {
  return (
    <section className="py-24">
      <div className="text-center text-2xl font-bold text-gray-800 mb-10">
        What our customers say about us
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-shrink-0">
            <img
              src="/assets/reviews/neofytos-siakos.webp"
              alt="Neofytos Siakos"
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="text-lg text-gray-600 italic mb-4">
              “I have been working with Vasilkoff Ltd for a long time now and I am very happy with the professionalism and experience their team has. I strongly recommend them as we build a long lasting relationship based on trust”
            </div>
            <div className="font-semibold text-gray-800">Neofytos Siakos</div>
            <div>
              <a
                href="https://www.spindealsapp.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary hover:text-blue-700 transition-colors"
              >
                CEO of Spindeals App
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src="/assets/reviews/justin-farrell.webp"
              alt="Justin Farrell"
              className="rounded-full w-32 h-32 object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="text-lg text-gray-600 italic mb-4">
              I’ve challenged Vasilkoff several times over the past couple of years with a variety of projects. They have always pulled through for me and gone above and beyond to get the project done. It’s hard to find consistent quality work, Vasilkoff hits the nail on the head, every time. I wish I had found them a couple of years earlier.
            </div>
            <div className="font-semibold text-gray-800">Justin Farrell</div>
            <div>
              <a
                href="https://cowts.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-primary hover:text-blue-700 transition-colors"
              >
                CEO of Cowts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

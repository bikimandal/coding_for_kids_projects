export default function HtmlProject3() {
  return (
    <div className="w-full min-h-screen">
      {/* Main Background Gradient */}
      <div className="bg-gradient-to-r from-[#ff7f50] to-[#ff6347]">
        <header className="bg-gradient-to-r from-[#2d3436] to-[#1c1c1c] py-3">
          <h1 className="text-center text-white text-2xl sm:text-4xl md:text-3xl font-bold tracking-wide">
            The Images Gallery
          </h1>
        </header>

        <main className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-4 py-8">
          {/* Image Card 1 */}
          <div className="flex flex-col items-center bg-[#f8c291] border-4 border-[#e74c3c] text-center p-4 m-4 rounded-xl shadow-lg transform transition duration-300">
            <div>
              <img
                src="/assets/img-htmlproject3/family.jpg"
                alt="family"
                className="w-full h-80 sm:h-96 object-cover rounded-md shadow-md"
              />
            </div>
            <br />
            <div>
              <a href="/">
                <button className="bg-[#e74c3c] text-white py-2 px-12 rounded-md text-lg font-semibold tracking-wide shadow-md hover:bg-[#c0392b] transition duration-200 ease-in-out">
                  Human Society
                </button>
              </a>
            </div>
          </div>

          {/* Image Card 2 */}
          <div className="flex flex-col items-center bg-[#ff9ff3] border-4 border-[#8e44ad] text-center p-4 m-4 rounded-xl shadow-lg transform transition duration-300">
            <div>
              <img
                src="/assets/img-htmlproject3/animal.jpg"
                alt="Animal"
                className="w-full h-80 sm:h-96 object-cover rounded-md shadow-md"
              />
            </div>
            <br />
            <div>
              <a href="/">
                <button className="bg-[#8e44ad] text-white py-2 px-12 rounded-md text-lg font-semibold tracking-wide shadow-md hover:bg-[#9b59b6] transition duration-200 ease-in-out">
                  Animal kingdom
                </button>
              </a>
            </div>
          </div>

          {/* Image Card 3 */}
          <div className="flex flex-col items-center bg-[#f9ca24] border-4 border-[#f39c12] text-center p-4 m-4 rounded-xl shadow-lg transform transition duration-300">
            <div>
              <img
                src="/assets/img-htmlproject3/car1.jpg"
                alt="Car"
                className="w-full h-80 sm:h-96 object-cover rounded-md shadow-md"
              />
            </div>
            <br />
            <div>
              <a href="/">
                <button className="bg-[#f39c12] text-white py-2 px-12 rounded-md text-lg font-semibold tracking-wide shadow-md hover:bg-[#e67e22] transition duration-200 ease-in-out">
                  Cars Sanctuary
                </button>
              </a>
            </div>
          </div>

          {/* Image Card 4 */}
          <div className="flex flex-col items-center bg-[#7bed9f] border-4 border-[#16a085] text-center p-4 m-4 rounded-xl shadow-lg transform transition duration-300">
            <div>
              <img
                src="/assets/img-htmlproject3/space.jpg"
                alt="Space"
                className="w-full h-80 sm:h-96 object-cover rounded-md shadow-md"
              />
            </div>
            <br />
            <div>
              <a href="/">
                <button className="bg-[#16a085] text-white py-2 px-12 rounded-md text-lg font-semibold tracking-wide shadow-md hover:bg-[#1abc9c] transition duration-200 ease-in-out">
                  Space Exploration
                </button>
              </a>
            </div>
          </div>
        </main>

        {/* Paragraph section with a new background */}
        <div className="text-white text-lg sm:text-xl mx-4 sm:mx-12 md:mx-24 lg:mx-72 py-3 text-justify leading-relaxed">
          Human society has always been fascinated by space, leading to
          incredible advancements in space exploration. As we venture into the
          cosmos, the coexistence of animals and humans on Earth reminds us of
          our interconnectedness. Meanwhile, technology continues to evolve,
          with cars becoming more sophisticated, incorporating artificial
          intelligence and eco-friendly features. These advancements not only
          reflect our quest for innovation but also our responsibility towards
          the environment. As we look to the stars, our efforts on Earth must
          ensure a sustainable future for all inhabitants, balancing
          technological progress with the preservation of our planet's natural
          ecosystems.
        </div>

        <footer className="bg-gradient-to-r from-[#2d3436] to-[#1c1c1c] flex items-center justify-center text-white w-full text-xl py-3 mt-12">
          <p>&copy; 2024 Images Gallery Website</p>
        </footer>
      </div>
    </div>
  );
}

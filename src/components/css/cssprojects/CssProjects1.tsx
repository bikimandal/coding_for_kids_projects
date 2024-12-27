import headphone from "../../../assets/img/cssproject1/headphone.webp";

function CssProjects1() {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-center text-4xl font-bold mb-4 text-gray-950">
        E-commerce Product Page (CSS Project 1)
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-8">
          <img
            src={headphone}
            alt="Product"
            className="rounded-lg max-w-full h-auto shadow-xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4 text-teal-600">
            Stylish Headphones
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Experience the best sound quality with our stylish and comfortable
            headphones. Designed for music lovers and professionals, these
            headphones deliver clear, balanced audio for all your favorite
            tunes.
          </p>

          {/* Product Features */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Clear and balanced sound quality</li>
              <li>Comfortable design for long listening sessions</li>
              <li>Wireless with long battery life</li>
              <li>Available in multiple colors</li>
            </ul>
          </div>

          {/* Price */}
          <div className="text-red-600 text-2xl font-semibold mb-6">
            ₹860.00
          </div>

          {/* Buy Now Button */}
          <a
            href="#"
            className="inline-block text-center bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition duration-300 font-semibold shadow-md transform"
          >
            Buy Now
          </a>

          {/* Product Rating */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
            <p className="text-sm text-gray-600 mt-2">4.5/5 (200 Reviews)</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-center text-gray-600 text-sm">
        <p>&copy; 2024 RCLD. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CssProjects1;

function HtmlProject2() {
  return (
    <div className="p-4 max-w-full lg:max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-center text-4xl font-bold mb-4 text-gray-950">
        Invitaion Card (HTML Project 2)
      </h1>
      <h1 className="text-center text-3xl font-bold mb-4 text-teal-600">
        You're Invited to Join the Seminar on English Foundation Course!
      </h1>
      <h2 className="text-center text-xl mb-6 text-gray-800">
        Master the Basics of English with Us
      </h2>

      <div className="mb-6">
        <p className="text-lg text-gray-700">
          We are excited to invite you to our{" "}
          <strong>English Foundation Course</strong>, designed to help you
          strengthen your English language skills. Whether you're a beginner or
          looking to polish your basics, this course will provide the perfect
          foundation for your language learning journey.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Our course will cover essential grammar, vocabulary, writing skills,
          and speaking practice in a friendly and supportive environment. With
          engaging lessons and interactive activities, you’ll build confidence
          in using English in everyday situations.
        </p>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-xl font-semibold mb-2">Course Details</h3>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="p-2 font-medium text-gray-800">Course Name</td>
              <td className="p-2 text-gray-600">English Foundation Course</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium text-gray-800">Date</td>
              <td className="p-2 text-gray-600">December 22, 2024</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium text-gray-800">Time</td>
              <td className="p-2 text-gray-600">11:00 AM - 01:00 PM</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 font-medium text-gray-800">Location</td>
              <td className="p-2 text-gray-600">
                Surja sen Mancha (Near Housing)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Why Join?</h3>
        <p className="text-lg text-gray-700">
          This course is perfect for anyone looking to improve their English
          skills from the ground up. You’ll receive expert guidance, practice
          speaking, and learn grammar in a structured and engaging way.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          It’s a great opportunity to connect with fellow learners, gain
          confidence in speaking, and develop essential skills for success in
          English.
        </p>
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          className="bg-teal-500 outline-8 outline-black text-white px-6 py-3 rounded-lg hover:bg-teal-600 "
        >
          Confirm Your Enrollment
        </button>
      </div>
    </div>
  );
}

export default HtmlProject2;

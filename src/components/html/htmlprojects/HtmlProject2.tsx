function HtmlProject2() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <h2 className="text-center text-4xl font-serif text-gray-900 mb-8">
        Weekly Class Timetable
      </h2>

      <div className="overflow-x-auto px-4">
        <table className="w-full min-w-max mx-auto my-6 bg-white shadow-xl rounded-lg border border-gray-200">
          <thead>
            <tr className="text-white bg-gradient-to-r from-blue-500 to-indigo-600">
              <th className="border border-gray-300 py-3 px-4 text-center text-sm font-semibold">
                Day/Period
              </th>
              <th className="border border-gray-300 py-3 px-4 text-center text-xs">
                I<br />
                9:30-10:20
              </th>
              <th className="border border-gray-300 py-3 px-4 text-center text-xs">
                II
                <br />
                10:20-11:10
              </th>
              <th className="border border-gray-300 py-3 px-4 text-center text-xs">
                III
                <br />
                11:10-12:00
              </th>
              <th className="border border-gray-300 py-3 px-4 text-center text-xs bg-yellow-500 text-white">
                BREAK
                <br />
                12:00-12:40
              </th>
              <th className="border border-gray-300 py-3 px-4 text-center text-xs">
                IV
                <br />
                12:40-1:30
              </th>
              <th className="border border-gray-300 py-3 px-4 text-center text-xs">
                V<br />
                1:30-2:20
              </th>
              <th className="border border-gray-300 py-3 px-4 text-center text-xs">
                VI
                <br />
                2:20-3:10
              </th>
              <th className="border border-gray-300 py-3 px-4 text-center text-xs">
                VII
                <br />
                3:10-4:00
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition-colors">
              <th className="border border-gray-300 py-3 px-4 text-center font-semibold text-blue-600">
                Monday
              </th>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                English
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Mathematics
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Chemistry
              </td>
              <td
                className="border border-gray-300 py-3 px-4 text-center font-bold text-red-600"
                rowSpan={6}
              >
                LUNCH
              </td>
              <td
                className="border border-gray-300 py-3 px-4 text-center font-semibold bg-blue-600 text-white"
                colSpan={3}
              >
                Lab
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Physics
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <th className="border border-gray-300 py-3 px-4 text-center font-semibold text-blue-600">
                Tuesday
              </th>
              <td
                className="border border-gray-300 py-3 px-4 text-center font-semibold bg-blue-600 text-white"
                colSpan={3}
              >
                Lab
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Chemistry
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                English
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-semibold bg-purple-600 text-white">
                Library
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-semibold bg-purple-600 text-white">
                Sports
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <th className="border border-gray-300 py-3 px-4 text-center font-semibold text-blue-600">
                Wednesday
              </th>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Mathematics
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Physics
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                English
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Chemistry
              </td>
              <td
                className="border border-gray-300 py-3 px-4 text-center font-semibold bg-blue-600 text-white"
                colSpan={3}
              >
                Lab
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <th className="border border-gray-300 py-3 px-4 text-center font-semibold text-blue-600">
                Thursday
              </th>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Physics
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                English
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Chemistry
              </td>
              <td
                className="border border-gray-300 py-3 px-4 text-center font-semibold bg-blue-600 text-white"
                colSpan={3}
              >
                Lab
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Mathematics
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <th className="border border-gray-300 py-3 px-4 text-center font-semibold text-blue-600">
                Friday
              </th>
              <td
                className="border border-gray-300 py-3 px-4 text-center font-semibold bg-blue-600 text-white"
                colSpan={3}
              >
                Lab
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Mathematics
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Chemistry
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                English
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Physics
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <th className="border border-gray-300 py-3 px-4 text-center font-semibold text-blue-600">
                Saturday
              </th>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                English
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Chemistry
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-medium text-gray-700">
                Mathematics
              </td>
              <td
                className="border border-gray-300 py-3 px-4 text-center font-semibold bg-purple-600 text-white"
                colSpan={3}
              >
                Seminar
              </td>
              <td className="border border-gray-300 py-3 px-4 text-center font-semibold bg-purple-600 text-white">
                Sports
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HtmlProject2;

import "../../../assets/css/htmlproject1.css";

function HtmlProject1() {
  return (
    <div className="text-xl flex justify-center items-center flex-col p-4 md:p-10">
      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-8">
        Form Design(HTML Project 1)
      </h1>
      <form action="" className="w-full max-w-4xl my-10">
        <table className="w-full table-auto">
          <tbody>
            <tr>
              <td className="px-2 py-4">
                <label htmlFor="name" className="block">
                  <b>Name</b>
                </label>
              </td>
              <td className="px-2 py-4">:</td>
              <td className="px-2 py-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-2 border-black px-3 py-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4">
                <label htmlFor="address" className="block">
                  <b>Address</b>
                </label>
              </td>
              <td className="px-2 py-4">:</td>
              <td className="px-2 py-4">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border-2 border-black px-3 py-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4">
                <label htmlFor="class" className="block">
                  <b>Class</b>
                </label>
              </td>
              <td className="px-2 py-4">:</td>
              <td className="px-2 py-4">
                <select
                  name="class"
                  id="class"
                  className="border-2 border-black px-3 py-2 w-full"
                >
                  <option value="">I</option>
                  <option value="">II</option>
                  <option value="">III</option>
                  <option value="">IV</option>
                  <option value="">V</option>
                  <option value="">VI</option>
                  <option value="">VII</option>
                  <option value="">VIII</option>
                  <option value="">IX</option>
                  <option value="">X</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4">
                <label htmlFor="contact" className="block">
                  <b>Contact</b>
                </label>
              </td>
              <td className="px-2 py-4">:</td>
              <td className="px-2 py-4">
                <input
                  type="number"
                  id="contact"
                  name="contact"
                  className="border-2 border-black px-3 py-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4">
                <label htmlFor="dob" className="block">
                  <b>D.O.B</b>
                </label>
              </td>
              <td className="px-2 py-4">:</td>
              <td className="px-2 py-4">
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="border-2 border-black px-3 py-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4">
                <label htmlFor="gender" className="block">
                  <b>Gender</b>
                </label>
              </td>
              <td className="px-2 py-4">:</td>
              <td className="px-2 py-4">
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="mx-2 transform scale-150"
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="mx-2 transform scale-150"
                />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4">
                <label htmlFor="course" className="block">
                  <b>Course</b>
                </label>
              </td>
              <td className="px-2 py-4">:</td>
              <td className="px-2 py-4">
                <select
                  name="course"
                  id="course"
                  className="border-2 border-black px-3 py-2 w-full"
                >
                  <option value="">DOM</option>
                  <option value="">DCST</option>
                  <option value="">School Course</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4">
                <label htmlFor="favouriteColor" className="block">
                  <b>Favourite Colour</b>
                </label>
              </td>
              <td className="px-2 py-4">:</td>
              <td className="px-2 py-4">
                <input
                  type="color"
                  id="favouriteColor"
                  name="favouriteColor"
                  className="border-2 border-black w-full h-14 sm:w-32 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4">
                <label htmlFor="loveComputer" className="block">
                  <b>How much do you love computer?</b>
                </label>
              </td>
              <td className="px-2 py-4">:</td>
              <td className="px-2 py-4">
                <input
                  type="range"
                  id="loveComputer"
                  name="loveComputer"
                  min="0"
                  max="100"
                  defaultValue="0"
                  className="w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-2 py-4" colSpan={3}>
                <input
                  type="submit"
                  value="Submit"
                  className="bg-teal-500 text-white px-4 py-2 rounded-md w-full sm:w-auto cursor-pointer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default HtmlProject1;

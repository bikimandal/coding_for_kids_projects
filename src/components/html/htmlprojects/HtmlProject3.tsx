import sunset from "../../../assets/img/project3/sunset.webp";
import mountain from "../../../assets/img/project3/mountain.webp";
import citylight from "../../../assets/img/project3/citylights.webp";
import oceanwaves from "../../../assets/img/project3/oceanwaves.webp";
import foresthike from "../../../assets/img/project3/foresthike.webp";
import nightsky from "../../../assets/img/project3/nightsky.webp";

// Reusable PhotoCard component
function PhotoCard({
  imageSrc,
  altText,
  caption,
  fullImageLink,
}: {
  imageSrc: string;
  altText: string;
  caption: string;
  fullImageLink: string;
}) {
  return (
    <td className="text-center">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-72 object-cover mb-2"
      />
      <p className="font-bold">{caption}</p>
      <a href={fullImageLink} target="_blank" rel="noopener noreferrer">
        <button className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          View Full Image
        </button>
      </a>
    </td>
  );
}

function HtmlProject3() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl text-gray-950 mb-6 font-bold">
        Photo Gallery (HTML Project 3)
      </h1>

      <table className="w-full border-separate border-spacing-4">
        <tbody>
          {/* Row 1 */}
          <tr>
            <PhotoCard
              imageSrc={sunset}
              altText="Photo 1"
              caption="Beautiful Sunset"
              fullImageLink={sunset}
            />
            <PhotoCard
              imageSrc={mountain}
              altText="Photo 2"
              caption="Mountain Adventure"
              fullImageLink={mountain}
            />
            <PhotoCard
              imageSrc={citylight}
              altText="Photo 3"
              caption="City Lights"
              fullImageLink={citylight}
            />
          </tr>

          {/* Row 2 */}
          <tr>
            <PhotoCard
              imageSrc={oceanwaves}
              altText="Photo 4"
              caption="Ocean Waves"
              fullImageLink={oceanwaves}
            />
            <PhotoCard
              imageSrc={foresthike}
              altText="Photo 5"
              caption="Forest Hike"
              fullImageLink={foresthike}
            />
            <PhotoCard
              imageSrc={nightsky}
              altText="Photo 6"
              caption="Night Sky"
              fullImageLink={nightsky}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HtmlProject3;

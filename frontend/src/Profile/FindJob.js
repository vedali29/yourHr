import React from 'react'
import { useNavigate } from 'react-router-dom';

export const FindJob = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    const tools = [
        {
          id: 1,
          name: "Data Warehousing Specialist",
          description:
            "Design, model, or implement corporate data warehousing activities. Program and configure warehouses of database information and provide support to warehouse users.",
          imageUrl:
            "https://th.bing.com/th/id/OIP.YyEIv09fczkBKZou_IrAqQHaEW?w=850&h=500&rs=1&pid=ImgDetMain",
          link: "https://job-descriptions.careerplanner.com/Data-Warehousing-Specialist.cfm",
          subtitle: "Most advanced Duties",
        },
        {
            id: 2,
            name: "Electrical Engineering Technician",
            description:
              "Apply electrical theory and related knowledge to test and modify developmental or operational electrical machinery and electrical control equipment and circuitry in industrial.",
            imageUrl:
              "https://blog.tkelevator.com/wp/wp-content/uploads/2019/11/shutterstock_1243125289-scaled.jpg",
            link: "https://job-descriptions.careerplanner.com/Electrical-Engineering-Technicians.cfm",
            subtitle: "Most advanced Duties",
          },
          {
            id: 3,
            name: "Environmental Restoration Planner",
            description:
              "Collaborate with field and biology staff to oversee the implementation of restoration projects and to develop new products. Process and synthesize complex scientific data into practical strategies.",
            imageUrl:
              "https://a.storyblok.com/f/233931/1920x588/aa392e1be1/world.jpg/m/880x587",
            link: "https://job-descriptions.careerplanner.com/Environmental-Restoration-Planner.cfm",
            subtitle: "Most advanced Duties",
          },
          {
            id: 4,
            name: "Aircraft Engine Specialist",
            description:
              "Repair and maintain the operating condition of aircraft engines. Includes helicopter engine mechanics.",
            imageUrl:
              "https://interestingengineering.com/_next/image?url=https:%2F%2Fcms.interestingengineering.com%2Fwp-content%2Fuploads%2F2024%2F05%2Fwisa-ai-algorith-plane-design.webp&w=750&q=75",
            link: "https://job-descriptions.careerplanner.com/Aircraft-Engine-Specialists.cfm",
            subtitle: "Most advanced Duties",
          },
          {
            id: 5,
            name: "Chemist",
            description:
              "Conduct qualitative and quantitative chemical analyses or chemical experiments in laboratories for quality or process control or to develop new products or knowledge.",
            imageUrl:
              "https://th.bing.com/th/id/OIP.L2C-yyFm-pyAUYKWgq10lQHaDt?pid=ImgDet&w=474&h=237&rs=1",
            link: "https://job-descriptions.careerplanner.com/Chemists.cfm",
            subtitle: "Most advanced Duties",
          },
          {
            id: 6,
            name: "Agricultural Engineer",
            description:
              "Apply knowledge of engineering technology and biological science to agricultural problems concerned with power and machinery, electrification, structures.",
            imageUrl:
              "https://th.bing.com/th/id/R.762b06c683e0bcb8f307d338633be92c?rik=OQ4ZUXgqif01%2fw&riu=http%3a%2f%2fsydney.edu.au%2fcontent%2fdam%2fcorporate%2fimages%2fnews-and-opinion%2fnews%2f2016%2fseptember%2fRIPPA-Nov-2015.jpg&ehk=JHbcGnjr5y2i5xgQooDMdlIR1ww2mN7Y%2b6uWhBy0gb0%3d&risl=&pid=ImgRaw&r=0",
            link: "https://job-descriptions.careerplanner.com/Agricultural-Engineers.cfm",
            subtitle: "Most advanced Duties",
          }
      ];

    return (

        <div className="max-w-7xl mx-auto my-8 px-2">
        <button onClick={goBack} className='flex justify-left hover:underline font-bold py-2 px-4 rounded'>
        &larr; Go Back
        </button>
      <div className="flex justify-center text-2xl md:text-3xl font-bold text-gray-800">
        Related Jobs
      </div>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 xl:p-8">
        {tools.map((tool) => (
          <li
            key={tool.id}
            className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-blue-500 transition-shadow duration-300"
          >
            <a className="relative" href={tool.link}>
              <img
                className="rounded relative w-full object-cover aspect-video"
                src={tool.imageUrl}
                alt={tool.name}
                loading="lazy"
              />
            </a>

            <div className="flex flex-col justify-between gap-3 px-4 py-2">
              <a
                href={tool.link}
                className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800"
              >
                <span>{tool.name}</span>
                <small className="font-medium text-sm">- {tool.subtitle}</small>
              </a>

              <p className="text-gray-600">{tool.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className='flex justify-center'>
      <button class="flex justify-center bg-[#4f46e5] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
        Load More
      </button>
      </div>

    </div>
    )
}

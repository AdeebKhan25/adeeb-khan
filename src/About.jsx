import { skillsData } from "./skillsData";
import Experience from "./Experience.jsx";

function About() {
  return (
    <div className="w-full md:w-3/5 mx-auto p-4 font-inter">
      <div className="mb-4">
        <p className="text-3xl font-bold tracking-tighter mb-2">About Me</p>
        <p className="mb-4">
          Hi, I am{" "}
          <span className="font-medium tracking-tighter">Adeeb Khan</span>,
        </p>
        <p>
          I'm a Software Engineer at Marvell Technology with a strong interest
          in systems, backend engineering, and AI/ML. I enjoy building software
          that sits close to the underlying system—from networked applications
          and infrastructure to tools that automate complex engineering
          workflows. My primary languages are C++ and Python, and I'm
          particularly interested in understanding how systems work underneath
          the abstractions.
        </p>
        <p className="mt-2">
          Over the course of my work and personal projects, I've built software
          around embedded systems, networking, real-time applications, machine
          learning, and LLMs. I enjoy learning by building, exploring unfamiliar
          codebases, and going deep into the engineering behind the tools and
          systems I use.
        </p>
        <p className="mt-2">
          Outside technology, cooking is probably my favorite thing to do. I
          also enjoy reading, learning about history and physics, painting, and
          gardening.
        </p>
      </div>
      <hr className="border-t-1 border-gray-500 my-4" />
      <Experience />
      <hr className="border-t-1 border-gray-500 mb-4 mt-4" />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full">
          <p className="text-2xl mb-3">Skills</p>
          <div className="space-y-4 w-full">
            <div className="w-full">
              <div className="divide-y divide-transparent">
                {skillsData.map((item, idx) => (
                  <div
                    key={idx}
                    /* Changed px-2 to px-0 (or py-2 rounded-xl if you still want a padded hover card) */
                    className="group flex flex-col md:flex-row md:items-start py-2.5 transition-all duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                  >
                    {/* Left Column: Category */}
                    <div className="md:w-1/3 shrink-0 mb-2 md:mb-0 md:h-6 md:flex md:items-center">
                      <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 leading-none">
                        {item.category}
                      </span>
                    </div>

                    {/* Right Column: Skills */}
                    <div className="md:w-2/3 flex flex-wrap gap-2">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center h-6 text-xs font-medium px-2.5 rounded-md bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-gray-500 mb-4 mt-4" />
      <div className="flex justify-center items-center p-3">
        <a
          href="/Resume_Adeeb_Khan.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Click here for My Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;

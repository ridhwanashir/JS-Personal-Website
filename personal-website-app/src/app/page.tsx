'use client';

import Image from "next/image";
import ridhwanlogo from "../../public/ridhwan-logo.png"
import worksbg_data_ml from "../../public/works_data_ml_bg.png"
import worksbg_design from "../../public/works_design_bg.png"
import worksbg_software from "../../public/works_software_bg.png"
import worksbg_research from "../../public/works_research_bg.png"
import { useState } from 'react';

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);
  // Experience data
  const experiences = [
    { 
      logo: "/axrail_logo.png",
      company: "Axrail Pte Ltd",
      duration: "Jan 2020 - Present",
      role: "AI/Data Engineer",
      location: "Kuala Lumpur, Malaysia"
    },
    { 
      logo: "/techbros_logo.png",
      company: "Techbros Gmbh",
      duration: "Mar 2018 - Dec 2019",
      role: "Data Science Intern",
      location: "Dusseldorf, Germany"
    },
    { 
      logo: "/telkom_university_logo.png",
      company: "Telkom University",
      duration: "Mar 2018 - Dec 2019",
      role: "Lecturer Assistant",
      location: "Bandung, Indonesia"
    },
    { 
      logo: "/metrodata_logo.png",
      company: "PT Metrodata Electronics, Tbk.",
      duration: "Apr 2024 - Current",
      role: "Technical Consultant",
      location: "Jakarta, Indonesia"
    },
  ];

  // Function to move to the next card
  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % experiences.length);
  };

  // Function to move to the previous card
  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <main className="flex flex-col items-center">

      {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: "url('/background_1.png')" }}>
        {/* Logo and Introduction */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <Image
            src={ridhwanlogo}
            alt="Logo of Ridhwan Nashir"
            width={200}
            height={200}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
            }}
          />
          <h1 className="text-4xl font-extralight mt-8">Ridhwan Nashir</h1>
          <h2 className="text-2xl font-light">
            Software Engineer <span className="mx-2">•</span> Solution Architect <span className="mx-2">•</span> Explorer
          </h2>
        </div>
      </div>

      {/* Profile Section */}
      <div className="w-full bg-white relative">
        <div className="max-w-screen-xl mx-auto h-screen flex flex-col justify-center w-full bg-white relative">
          {/* Small logo at the top */}
          <Image
            src={ridhwanlogo}
            alt="Small logo"
            width={50}
            height={50}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex h-full">
            {/* Profile Image */}
            <div className="w-1/3 relative">
              <Image
                src="/background_2.png"
                alt="Ridhwan Nashir"
                width={400}
                height={500}
                style={{objectFit:"cover"}}
                className="absolute bottom-0"
              />
            </div>
            {/* Profile Description */}
            <div className="w-2/3 p-8 flex items-center justify-end">
              <div className="pr-12">
                <p className="text-4xl font-sans leading-tight">
                  <span className="text-black">Data-driven Software Engineer</span><br />
                  <span className="text-black">with a passion for machine learning,</span><br />
                  <span className="text-gray-700">always seeking new challenges to apply</span><br />
                  <span className="text-gray-700">skills and knowledge to solve real-world</span><br />
                  <span className="text-gray-700">problems.</span>
                </p>
                <button className="mt-8 px-6 py-2 bg-black text-white font-sans font-light rounded-full hover:bg-gray-800 transition-colors duration-300">
                  See Curriculum Vitae
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences Section */}
      <div className="w-full bg-white relative">
        <div className="max-w-screen-xl mx-auto h-screen flex flex-col justify-center w-full bg-white relative">
          <Image
            src={ridhwanlogo}
            alt="Small logo"
            width={50}
            height={50}
            className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <h2 className="text-4xl font-extralight text-center mb-12 font-poppins absolute top-24 left-1/2 transform -translate-x-1/2">Experiences</h2>
          <div className="flex h-full items-center">
            <div className="flex justify-center items-center w-full">
              <button onClick={prevCard} className="mx-4 p-2 bg-light-gray-200 rounded-full shadow-md">
                &lt;
              </button>
              
              {/* Experience cards */}
              <div className="flex space-x-4 overflow-hidden">
                {[0, 1, 2].map((offset) => {
                  const index = (currentCard + offset) % experiences.length;
                  const exp = experiences[index];
                  return (
                    <div key={index} className="w-64 h-96 bg-white rounded-lg shadow-md flex flex-col transition-transform duration-700 ease-in-out transform">
                      <div className="h-2/5 p-4 flex items-center justify-center bg-white-100 rounded-t-lg">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={100}
                          height={150}
                          style={{objectFit:"contain"}}
                        />
                      </div>
                      <div className="h-3/5 p-4 flex flex-col justify-between bg-black text-white">
                        <h2 className="text-xl font-semibold" style={{ color: "white" }}>{exp.company}</h2>
                        <p className="text-sm text-center">{exp.duration}</p>
                        <p className="text-lg font-medium text-center">{exp.role}</p>
                        <p className="text-sm text-center">{exp.location}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button onClick={nextCard} className="mx-4 p-2 bg-light-gray-200 rounded-full shadow-md">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black relative">
        <h2 className="text-4xl font-extralight text-center mb-12 font-poppins absolute top-24 left-1/2 transform -translate-x-1/2 text-white">Works</h2>
        <div className="flex h-3/4 w-full absolute bottom-0">
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src={worksbg_data_ml} alt="background data and ml" className="w-full h-full object-cover" />
            </div>
            {/* Transparent overlay with text */}
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-2xl text-white z-10">Data & ML</p>
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src={worksbg_design} alt="background design" className="w-full h-full object-cover" />
            </div>
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-2xl text-white z-10">Designs</p>
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src={worksbg_software} alt="background software" className="w-full h-full object-cover" />
            </div>
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-2xl text-white z-10">Software Engineering</p>
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src={worksbg_research} alt="background research" className="w-full h-full object-cover" />
            </div>
            <div className="relative inset-0 flex items-center justify-center w-full h-16">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <p className="relative text-2xl text-white z-10">Research and Blogs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black relative flex flex-col items-center">
        <h2 className="text-4xl font-extralight relative mt-24 text-white">Featured Projects</h2>
        <div className="flex h-48 w-3/4 relative bottom-1">
          <div className="flex-1 bg-white m-2 mt-8"></div>
          <div className="flex-1 bg-white m-2 mt-8"></div>
          <div className="flex-1 bg-white m-2 mt-8"></div>
          <div className="flex-1 bg-white m-2 mt-8"></div>
        </div>
        <h2 className="text-4xl font-extralight relative mt-12 text-white">Certifications</h2>
        <div className="flex h-48 w-4/5 relative bottom-1">
          <div className="flex-1 bg-white m-2 mt-8"></div>
          <div className="flex-1 bg-white m-2 mt-8"></div>
          <div className="flex-1 bg-white m-2 mt-8"></div>
          <div className="flex-1 bg-white m-2 mt-8"></div>
          <div className="flex-1 bg-white m-2 mt-8"></div>
          <div className="flex-1 bg-white m-2 mt-8"></div>
        </div>
      </div>
    </main>
  );
}


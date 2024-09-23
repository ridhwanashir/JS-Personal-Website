'use client';

import Image from "next/image";
import ridhwanlogo from "../../public/ridhwan-logo.png"
import { useState } from 'react';

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);
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

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % experiences.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: "url('/background_1.png')" }}>
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
          <div className="h-8"></div>
          <h1 className="text-4xl font-extralight mt-8">Ridhwan Nashir</h1>
          <h2 className="text-2xl font-light">
            Software Engineer <span className="mx-2">•</span> Solution Architect <span className="mx-2">•</span> Explorer
          </h2>
          <div className="h-40"></div>
        </div>
      </div>
      {/* Profile Section */}
      <div className="w-full bg-white relative">
        <div className="max-w-screen-xl mx-auto h-screen flex flex-col justify-center w-full bg-white relative">
          <Image
            src={ridhwanlogo}
            alt="Small logo"
            width={50}
            height={50}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="flex h-full">
            <div className="w-1/3 relative">
              <Image
                src="/background_2.png"
                alt="Ridhwan Nashir"
                width={400}
                height={500}
                objectFit="cover"
                className="absolute bottom-0"
              />
            </div>
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
              <button onClick={prevCard} className="mx-4 p-2 bg-gray-200 rounded-full">
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
                          objectFit="contain"
                        />
                      </div>
                      <div className="h-3/5 p-4 flex flex-col justify-between bg-black text-white">
                        <h2 className="text-xl font-semibold">{exp.company}</h2>
                        <p className="text-sm text-center">{exp.duration}</p>
                        <p className="text-lg font-medium text-center">{exp.role}</p>
                        <p className="text-sm text-center">{exp.location}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button onClick={nextCard} className="mx-4 p-2 bg-gray-200 rounded-full">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

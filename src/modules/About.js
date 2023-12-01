import React from 'react'

const About = () => {
  return (
    <div>
    <div
    id='About'
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl font-bold inline border-b-4 border-gray-500 ml-10">
            About
          </p>
        </div>
        <div className='aboutTextbox'>
            <p className="text-md mt-20 text-justify"> 
            I am ranjeet yadav from hazaribagh jharkhand. I have completed B.tech, with computer
            science engineering in 2021. 
            I have worked in Canvas Craft media(Mohali, Chandigarh) as full stack laravel developer, and complete part time
              internship (MERN Stack) from hoping mind(Chandigarh).
            </p>

            <br />

            <p className="text-md text-justify">
            I am quick learner and having positive attitude. As well challenge taker also active in society in different occasion. 
            I want to explore my skills and grow with positive attitude.
            </p>

        </div>
      </div>
    </div>

    </div>
  )
}

export default About;
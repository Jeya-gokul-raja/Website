import React from 'react';

export default function Body2() {
  return (
    <>
      <a href="">
        <div className="bg-black flex flex-col pb-64 mt-3">
          <div className=" flex justify-center  ">
            <video className="w-screen h-80" autoPlay loop controls>
              <source
                src="https://www.apple.com/105/media/us/apple-events/2024/74a575ba-d3c9-4cca-8db2-8469c46dd2b0/anim/phase3/large.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="absolute  w-screen size-11 flex justify-center mt-72 ">
            <img
              src="https://www.apple.com/v/home/bo/images/logos/wwdc24/hero_logo_wwdc24__gbcy5d80g0uq_medium.png"
              alt=""
            />
          </div>
          <div className="text-white absolute mt-[24%]  w-screen text-center  font-semibold text-2xl">
            <h2>Introducing Apple Intelligence,iOS 18, iPadOS 18,</h2>
            <h2 className="text-center">macOS Sequoia and watchOs 11.</h2>

            <button className="absolute rounded-3xl  text-lg mt-8 -ml-14  text-white bg-blue-600 h-11  w-32">
              Learn more
            </button>
          </div>
        </div>
      </a>
    </>
  );
}

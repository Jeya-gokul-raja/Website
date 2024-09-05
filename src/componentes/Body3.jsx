import React from 'react';

export default function Body3() {
  return (
    <>
      <a href="">
        <div className="flex gap-3 p-3">
          <div className="h-[550px] w-1/2 pb-11 text-white flex flex-col gap-3 items-center justify-end  bg-[url('https://www.apple.com/in/home/promos/mac-for-students-2/images/promo_college_students__bxqdcoxgjzw2_medium.jpg')] bg-cover bg-no-repeat ">
            <h3 className="text-5xl font-semibold">University Students </h3>
            <h4 className=" text-2xl text-center ">Go further with Mac.</h4>

            <button className="  bg-blue-500 h-9 w-28 rounded-3xl text-base ">
              Learn more
            </button>
          </div>

          <div className="bg-center pt-10 flex flex-col gap-2  items-center  h-[550px] w-1/2  bg-[url('https://www.apple.com/v/home/bo/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg')] bg-cover bg-no-repeat">
            <h3 className="text-4xl font-bold">MacBook Air</h3>
            <h4 className="text-xl">Supercharged by M3</h4>
            <button className="text-white mr-16 rounded-3xl h-9   w-28 bg-blue-500 text-base">
              Learn more
            </button>
            <button className="text-blue-500 ml-32 -mt-11 hover:bg-blue-500  hover:text-white border-spacing-1 border border-blue-500 rounded-3xl h-9 text-base w-16  ">
              Buy
            </button>
          </div>
        </div>
      </a>
    </>
  );
}

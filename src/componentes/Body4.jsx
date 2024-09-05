import React from 'react';

export default function Body4() {
  return (
    <>
      <a href="">
        <div className="flex gap-0 p-0 flex-col">
          <div className="w-[49%] pt-14 ml-2 gap-2 flex-col pd-11 flex items-center bg-cover bg-no-repeat h-[590px] bg-[url('https://www.apple.com/v/home/bo/images/promos/iphone-15-pro/promo_iphone15pro__e48p7n5x3nsm_medium.jpg')]">
            <h2 className="text-white font-bold text-4xl">iPhone 15 Pro</h2>
            <h3 className="text-white text-xl">
              Titanium. So strong. So light. So Pro
            </h3>

            <button className="text-white mr-16 rounded-3xl h-9   w-28 bg-blue-500 text-base">
              Learn more
            </button>
            <button className="text-blue-500 ml-32 -mt-11 hover:bg-blue-500  hover:text-white border-spacing-1 border border-blue-500 rounded-3xl h-9 text-base w-16 ">
              Buy
            </button>
          </div>

          <div className="w-[49%]  ml-[50%] p-14 ml- gap-2 flex-col -mt-[40%] pb-11 flex items-center bg-cover bg-no-repeat h-[590px] bg-[url('https://www.apple.com/v/home/bo/images/promos/iphone-15/promo_iphone15_announce__fmxxi8r9fkuy_medium.jpg')]">
            <h2 className="text-4xl font-bold">iPhone 15</h2>
            <h3 className="text-xl">New camera. New design. Newphoria</h3>
            <button className="text-white mr-16 rounded-3xl h-9   w-28 bg-blue-500 text-base">
              Learn more
            </button>
            <button className="text-blue-500 ml-32 -mt-11 hover:bg-blue-500  hover:text-white border-spacing-1 border border-blue-500 rounded-3xl h-9 text-base w-16 ">
              Buy
            </button>
          </div>
        </div>
      </a>
    </>
  );
}

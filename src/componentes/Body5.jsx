import React from 'react';

export default function Body5() {
  return (
    <>
      <a href="">
        <div className="gap-0 flex flex-col pt-3">
          <div className="w-[49%] gap-2 ml-2 pt-14 h-[700px] flex-col bg-no-repeat bg-cover items-center flex bg-[url('https://www.apple.com/v/home/bo/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_medium.jpg')]">
            <h2 className="text-4xl text-white font-bold">iPad Pro</h2>
            <h3 className="text-xl text-white">
              Unbelievably thin.Incredible powerful.
            </h3>

            <button className="text-white mr-16 mt-1 rounded-3xl h-9   w-28 bg-blue-500 text-base">
              Learn more
            </button>
            <button className="text-blue-500 ml-28 -mt-11 hover:bg-blue-500  hover:text-white border-spacing-1 border border-blue-500 rounded-3xl h-9 text-base w-16 ">
              Buy
            </button>
          </div>

          <div className="  ">
            <img
              src="https://www.apple.com/v/home/bo/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg"
              alt=""
              className="h-[691px] w-[50%] ml-[50%] -mt-[47%]"
            />
            <div className="absolute ml-[66%] -mt-[43%] flex flex-col item-center justify-center text-center gap-2">
              <h2 className="text-4xl font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className='ml-8 -mb-10'
                >
                  <path
                    fill="currentColor"
                    d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52a4.17 4.17 0 0 0-1 3.09a3.69 3.69 0 0 0 2.94-1.42m2.52 7.44a4.51 4.51 0 0 1 2.16-3.81a4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82s2 .82 3.3.79s2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85a4.41 4.41 0 0 1-2.68-4.04"
                  />
                </svg>
                Trade In
              </h2>
              <h3 className="text-xl">Upgrade and save. It's that easy.</h3>
              <button className="text-white mr-16 mt-1 rounded-3xl h-9  ml-16 w-40 bg-blue-500 text-base">
                Get your estimate
              </button>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

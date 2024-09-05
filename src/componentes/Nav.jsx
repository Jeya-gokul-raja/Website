import React from "react";

export default function Nav() {
  return (
    <div className="bg-slate-50 ">
      <ul className="flex p-1 items-center text-xs w-full pl-72">
        <li className="m-4 hover:">
          <a className="" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon icon-tabler icons-tabler-filled icon-tabler-brand-apple"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
              <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
            </svg>
          </a>
        </li>

        <li className="m-4 hover:">
          <a href="#">Store</a>
        </li>

        <li className="m-4 hover:">
          <a href="#">Mac</a>
        </li>

        <li className="m-4 hover :">
          <a href="#">iPad</a>
        </li>

        <li className="m-4 hover:">
          <a href="#">iPhone</a>
        </li>

        <li className="m-4 hover :">
          <a href="#">Watch</a>
        </li>

        <li className="m-4 hover:">
          <a href="#">AirPods</a>
        </li>

        <li className="m-4 hover:">
          <a href="#">TV & Home</a>
        </li>

        <li className="m-4 hover:">
          <a href="#">Entertainment</a>
        </li>

        <li className="m-4 hover:">
          <a href="#">Accessories</a>
        </li>

        <li className="m-4 hover:">
          <a href="#">Support</a>
        </li>

        <li className="m-4 hover:">
          <a className="" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </a>
        </li>

        <li className="m-4 hover:">
          <a className="" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </a>
        </li>
      </ul>
      <p className="text-sm text-center pb-2">
        Get iPhone 15 Pro from ₹5621.00/mo.‡ for 24 months with No Cost EMI from
        most leading banks.
        <span className="text-blue-700 ">&#160;Buy Now &#62; </span>
      </p>
    </div>
  );
}

import React from "react";
import { FaFacebookF, FaTripadvisor } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FindUs = () => {
  return (
    <>
      <hr className="  border-lightGray  w-[100%] h-[12px]  " />
      <section className="flex flex-col items-center justify-center h-[30vh]">
        <p className="mt-4 tracking-widest text-gray sm:text-[15px] md:text-[18px] ">
          Trailhead Compound | 922 Shoofly St. Santa Fe, NM 87505
        </p>
        <p className="mt-4 tracking-widest text-gray sm:text-[15px] md:text-[18px] ">
          +1 (505) 310-0089 | cafe@trailheadsantafe.com
        </p>
        <p className="mt-4 tracking-widest text-gray sm:text-[15px] md:text-[18px] ">
          Monday to Saturday 8am - 3pm | Sunday 9am - 3pm
        </p>
        <section className="grid grid-cols-3 gap-7 mt-[25px]">
          <Link to="https://www.facebook.com" target="_blank">
            <FaFacebookF size={19} />
          </Link>
          <Link to="https://www.instagram.com" target="_blank">
            <FaInstagram size={19} />
          </Link>
          <Link to="https://www.tripadvisor.com" target="_blank">
            <FaTripadvisor size={21} />
          </Link>
        </section>
      </section>
      <hr className=" border-lightGray w-[100%] h-[12px]" />
    </>
  );
};

export default FindUs;
/**
 * sm:w-[400px] md:w-[x] lg:w-[700px] xl:w-[800px] 2xl:w-[850px]
lg:w-[700px] xl:w-[800px] 2xl:w-[850px]
 */

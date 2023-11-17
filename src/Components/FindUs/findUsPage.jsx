import React from "react";
import Navbar from "../Navbar/Navbar";
const FindUsPage = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center ">
        <div className="h-[89vh] w-[98vw] bg-center bg-cover  bg-findUsBg sm:w-[95vw]"></div>
        <section class="mt-[60px] mb-[0px] text-center">
          <h1 class="font-bold text-[2em] tracking-[1rem] font-roboto sm:text-[1em] sm:tracking-[.7rem] md:text-[1.2em] md:tracking-[.8rem] lg:text-[1.5em] lg:tracking-[.8rem] xl:text-[1.6em] xl:tracking-[.9rem] 2xl:text-[1.7em] 2xl:tracking-[1rem]">
            VISIT US
          </h1>
          <hr className="my-4  border-lightGray  w-[80vw] " />
        </section>

        <section className="flex flex-cols  justify-between w-[60vw] h-[70vh] sm:w-[90vw] md:w-[70vw]">
          <div class="text-center pt-[10px]">
            <h1 class="font-bold text-md tracking-[.20em]  font-roboto ">
              Hours
            </h1>
            <ul className="flex flex-col items-center justify-center  w-[100%] text-center my-[20px] ">
              <li className="py-[20px] text-gray leading-7 tracking-wider">
                Monday 8am - 3pm
              </li>
              <li className="py-[20px] text-gray leading-7 tracking-wider">
                Tuesday 8am - 3pm
              </li>
              <li className="py-[20px] text-gray leading-7 tracking-wider">
                Wednesday 8am - 3pm
              </li>
              <li className="py-[20px] text-gray leading-7 tracking-wider">
                Thursday 8am - 3pm
              </li>
              <li className="py-[20px] text-gray leading-7 tracking-wider">
                Friday 8am - 3pm
              </li>
              <li className="py-[20px] text-gray leading-7 tracking-wider">
                Saturday 8am - 3pm
              </li>
              <li className="py-[20px] text-gray leading-7 tracking-wider">
                Sunday 9am - 3pm
              </li>
            </ul>
          </div>

          <div class="text-center ">
            <h1 className="font-bold text-md tracking-[.20em]  font-roboto  ">
              CONTACT
            </h1>
            <ul className="flex flex-col items-center justify-center  w-[100%] text-center my-[20px] ">
              <li>
                <p class="underline cursor-pointer text-redText py-[20px] font-bold leading-7 tracking-wider">
                  (505) 310-0089
                </p>
              </li>
              <li class="py-[20px] text-gray leading-7 tracking-wider">
                cafe@trailheadsantafe.com
              </li>
              <li>
                <h1 className="font-bold text-md tracking-[.20em]  font-roboto  ">
                  LOCATION
                </h1>
                <p class="py-[20px] text-gray leading-7 tracking-wider">
                  Trailhead Compound
                </p>
              </li>
              <li class="underline cursor-pointer text-redText py-[10px] font-bold leading-7 tracking-wider text-u">
                922 Shoofly St. Santa Fe, NM 87505{" "}
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
};

export default FindUsPage;

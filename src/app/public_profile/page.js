"use client";
import IconImage from "@/components/IconImage/IconImage";
import Rating from "@/components/Rating/Rating";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import claimedIcon from "@/public/icons/claimed.svg";
import verifiedIcon from "@/public/icons/verified.svg";
import profileImage from "@/public/images/profile.jpg";
import { BsBagDash } from "react-icons/bs";
import { CiCircleChevRight, CiShare2, CiStar } from "react-icons/ci";

import { FaPhoneAlt, FaPlus } from "react-icons/fa";
import { LiaSmsSolid } from "react-icons/lia";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
export default function PublicProfile() {
  return (
    <div className="w-full bg-white">
      <div className="w-full bg-[#f5fafc] ">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid w-full lg:w-2/3  mx-auto grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-8 ">
            <div className=" flex gap-8 px-8 items-center justify-center ">
              <div className="  rounded-lg   w-32 shrink-0  overflow-hidden ">
                <ResponsiveImage
                  src={profileImage}
                  alt="profile image"
                  className="rounded-lg"
                />
              </div>
              <div>
                <div className="flex gap-8 items-center">
                  <h1 className="text-gray-700 text-24 font-semibold">
                    Safari Biz
                  </h1>
                  <IconImage src={verifiedIcon} size={24} alt="" />
                </div>
                <div className="flex gap-6 items-center">
                  <div className="text-14 text-gray-500">
                    <span>Reviews </span>
                    <span>3124</span>
                  </div>

                  <ul className="flex  items-center gap-2">
                    <li className="bg-primary  w-2 h-2 rounded-full border" />
                    <li className=" "> Excellent</li>
                  </ul>
                </div>
                <div className="flex gap-x-2 mt-2">
                  <div className="flex gap-1">
                    <Rating isEditable value={5} />
                  </div>
                  <p className="text-14 text-gray-700 font-semibold">4.7</p>
                </div>
                <IconImage src={claimedIcon} size={80} alt="claimed image" />
              </div>
            </div>

            <div className="  lg:border-s border-primary  items-center justify-center flex  gap-2 lg:gap-4 px-8">
              <div className="bg-primary p-2 rounded-lg text-white flex items-center gap-2">
                <LiaSmsSolid className="text-xl " /> <span>Chat</span>
              </div>
              <div className="bg-primary p-2 rounded-lg text-white flex items-center gap-2">
                <FaPhoneAlt className="text-md " /> <span>Phone</span>
              </div>
              <div className="bg-primary p-2 rounded-lg text-white flex items-center gap-2">
                <FaPlus className="text-md " /> <span>Follow</span>
              </div>
              <div className="bg-primary p-2 rounded-lg text-white flex items-center gap-2">
                <CiShare2 className="text-md " /> <span>Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs
        className="max-w-[700px] mx-auto  my-14 px-2"
        selectedTabClassName="bg-primary text-white"
      >
        <TabList className="flex justify-center items-center p-3 gap-2 md:gap-8 border-2 rounded-md border-gray-300">
          <Tab className="ring-[1px] w-full h-10 ring-primary flex gap-2 items-center justify-center text-primary cursor-default rounded-md">
            <CiStar className="text-24   " />
            <span> Reviews</span>
          </Tab>

          <Tab className="w-full h-10 ring-[1px] group ring-primary flex gap-2 items-center justify-center    rounded-md overflow-hidden text-primary cursor-default">
            <BsBagDash className=" text-24 " />
            <span> Jobs</span>
          </Tab>

          <Tab className="w-full h-10 ring-[1px] rounded-md ring-primary flex gap-2 items-center justify-center text-primary cursor-default ">
            <CiCircleChevRight className=" text-24 " />
            <span> Reviews</span>
          </Tab>
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>

        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

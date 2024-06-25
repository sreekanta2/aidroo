"use client";
import { AccordionComponent } from "@/components/Accordion/AccordionComponent";
import IconImage from "@/components/IconImage/IconImage";
import Layout from "@/components/Layout/Layout";
import { GoogleMap } from "@/components/Map/Map";
import PublicReview from "@/components/PublicReview/PublicReview";
import Rating from "@/components/Rating/Rating";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import ThumbSlider from "@/components/ThumbSlider/ThumbSlider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { businessOur, faqContent } from "@/constant";
import claimedIcon from "@/public/icons/claimed.svg";
import verifiedIcon from "@/public/icons/verified.svg";
import profileImage from "@/public/images/profile.jpg";
import { Label } from "@radix-ui/react-dropdown-menu";

import { BsBagDash } from "react-icons/bs";
import { CiCircleChevRight, CiShare2, CiStar } from "react-icons/ci";
import { FaPhoneAlt, FaPlus } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { LiaSmsSolid } from "react-icons/lia";
import { RiRefund2Fill } from "react-icons/ri";

export default function PublicProfile() {
  return (
    <Layout title="Public Profile">
      <div className="w-full space-y-6  pb-14 ">
        <div className="w-full bg-[#f5fafc] dark:bg-dark">
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
                    <h1 className="  text-24 font-semibold">Safari Biz</h1>
                    <IconImage src={verifiedIcon} size={24} alt="" />
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="text-14  ">
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
                <div className="bg-primary_color p-2 rounded-lg text-white flex items-center gap-2">
                  <LiaSmsSolid className="text-xl " /> <span>Chat</span>
                </div>
                <div className="bg-primary_color p-2 rounded-lg text-white flex items-center gap-2">
                  <FaPhoneAlt className="text-md " /> <span>Phone</span>
                </div>
                <div className="bg-primary_color p-2 rounded-lg text-white flex items-center gap-2">
                  <FaPlus className="text-md " /> <span>Follow</span>
                </div>
                <div className="bg-primary_color p-2 rounded-lg text-white flex items-center gap-2">
                  <CiShare2 className="text-md " /> <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="review" className="max-w-[1280px] mx-auto px-8 ">
          <TabsList className="grid w-full md:w-2/4 grid-cols-3 h-12 mx-auto">
            <TabsTrigger value="review" className="h-10 flex gap-4 text-xl">
              <CiStar className="text-24   " />
              <span> Reviews</span>
            </TabsTrigger>
            <TabsTrigger value="job" className="h-10 flex gap-4 text-xl">
              <BsBagDash className=" text-24 " />
              <span> Jobs</span>
            </TabsTrigger>
            <TabsTrigger value="more" className="h-10 flex gap-4 text-xl">
              <CiCircleChevRight className=" text-24 " />
              <span> More</span>
            </TabsTrigger>
          </TabsList>
          {/* review  tab content  */}
          <div className=" max-w-[800px]  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 space-y-6 ">
            <div className="col-span-3">
              <TabsContent value="review">
                <PublicReview />
              </TabsContent>
              <TabsContent value="job" className="space-y-8">
                <div className=" border-2 rounded-md p-10 mx-auto  ">
                  <ThumbSlider />
                </div>
                {/* business Our */}
                <div className="border-2 rounded-md">
                  {businessOur.map((our) => (
                    <div
                      key={our.day}
                      className="flex    place-content-center justify-between p-4  "
                    >
                      <h1 className="w-24">{our.day}</h1>
                      <div className="flex items-center space-x-2 w-24">
                        <Switch id={our.day} disabled={!our.open} />
                        {our.open ? (
                          <Label htmlFor={our.day}>Open</Label>
                        ) : (
                          <Label htmlFor={our.day}>Closed</Label>
                        )}
                      </div>

                      <span>9.00 AM -10.00 PM</span>
                    </div>
                  ))}
                </div>
                {/* FAQ */}
                <div className="">
                  <h1 className="text-primary_color text-xl text-center pt-10 pb-2">
                    Business Our
                  </h1>
                  <div className="border-2 p-10 rounded-md space-y-4">
                    {faqContent.map((content) => (
                      <AccordionComponent
                        key={content.title}
                        content={content}
                      />
                    ))}
                  </div>
                </div>
                {/* map */}
                <div className="   h-[440px] w-full p-4 border-2 rounded-md">
                  <GoogleMap
                    showMarker={false}
                    className="h-[400px] w-full rounded-md"
                  />
                </div>
                <div className="border-2 rounded-md p-8 space-y-4">
                  <div className="flex items-center gap-6">
                    <RiRefund2Fill className="text-5xl text-primary_color" />
                    <div className="">
                      <h1 className="text-xl text-primary_color">
                        Total Fundings
                      </h1>
                      <p className="text-gray-500">10B -20B</p>
                    </div>
                  </div>{" "}
                  <div className="flex items-center gap-6">
                    <RiRefund2Fill className="text-5xl text-primary_color" />
                    <div className="">
                      <h1 className="text-xl text-primary_color">Investors</h1>
                      <p className="text-gray-500">7</p>
                    </div>
                  </div>{" "}
                  <div className="flex items-center gap-6">
                    <GrUserWorker className="text-5xl text-primary_color" />
                    <div className="">
                      <h1 className="text-xl text-primary_color">Workers</h1>
                      <p className="text-gray-500">100 - 200</p>
                    </div>
                  </div>
                </div>
              </TabsContent>{" "}
              <TabsContent value="more">
                <h2>Any content 3</h2>
              </TabsContent>
            </div>
            <div className="col-span-1">
              <div className="w-full border-2 border-gray-400">content</div>
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
}

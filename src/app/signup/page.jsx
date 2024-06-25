"use client";
import logo from "@/asserts/aidroo-logo.svg";
import Layout from "@/components/Layout/Layout";
import OptionSelect from "@/components/OptionSelect/OptionSelect";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { BsBagDash } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function Signup() {
  return (
    <Layout title="signup">
      <div className="px-8">
        <div className="bg-light dark:bg-dark space-y-4 w-full md:w-1/2 mx-auto p-4 md:p-8 my-10 rounded-lg">
          <div className=" w-44 mx-auto ">
            <Link href="/">
              <ResponsiveImage
                src={logo}
                alt="aidroo logo image"
                width={500}
                height={300}
              />
            </Link>
          </div>
          <h1 className="text-2xl text-center">Welcome to Aidroo</h1>
          <Tabs
            className=" my-14   space-y-10"
            selectedTabClassName="bg-primary_color dark:bg-[#1f2937] text-white ring-1"
          >
            <TabList className="   flex justify-center items-center   gap-2 md:gap-8   rounded-md  ">
              <Tab className="ring-[1px] w-full h-10   dark:bg-dark   flex gap-2 items-center justify-center text-primary cursor-default rounded-md">
                <FaRegUser className="text-24   " />
                <span> Personal</span>
              </Tab>
              <Tab className="ring-[1px] w-full h-10   flex gap-2 items-center justify-center text-primary cursor-default rounded-md">
                <BsBagDash className="text-24" />
                <span> Business</span>
              </Tab>
            </TabList>
            <TabPanel>
              <form className="space-y-6">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <Input
                  type="text"
                  placeholder=" username"
                  className="bg-white dark:bg-gray-800  h-12"
                />
                <Input
                  type="email"
                  placeholder="email"
                  className="bg-white dark:bg-gray-800  h-12"
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="password"
                    placeholder="Create Password"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionSelect />
                  <OptionSelect />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="City"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="text"
                    placeholder="Address"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <Button variant="fillButton" className="h-12">
                  Sign Up
                </Button>
              </form>
              <div className=" w-full flex  gap-4 items-center justify-center mt-4 ">
                <h1 className="text-xl">
                  <span className="text-2xl text-primary_color"> Google</span>
                </h1>
                <h1 className="text-xl">
                  <span className="text-2xl text-primary_color"> Facebook</span>
                </h1>
              </div>
            </TabPanel>
            <TabPanel>
              <form className="space-y-6">
                <Input
                  type="text"
                  placeholder="Business Name"
                  className="bg-white dark:bg-gray-800  h-12"
                />
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="username"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionSelect />
                  <OptionSelect />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="password"
                    placeholder="Create Password"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OptionSelect />
                  <OptionSelect />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="City"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                  <Input
                    type="text"
                    placeholder="Address"
                    className="bg-white dark:bg-gray-800  h-12"
                  />
                </div>
                <Button variant="fillButton" className="h-12">
                  Sign Up
                </Button>
              </form>
              <div className=" w-full flex flex-col items-center justify-center ">
                <h1 className="md:text-xl">
                  Already have an account?
                  <span className="text-2xl text-primary_color"> Login</span>
                </h1>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

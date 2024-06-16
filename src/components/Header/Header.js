"use client";
import logo from "@/asserts/aidroo-logo.svg";
import filter from "@/asserts/filter.svg";
import humber from "@/asserts/mobile-icons/Hamburger-l1.svg";
import close from "@/asserts/mobile-icons/Hamburger-l2.svg";
import category from "@/asserts/mobile-icons/categories.svg";
import pageIcon from "@/asserts/mobile-icons/page_icon.svg";
import businessIcon from "@/asserts/mobile-icons/pricing-plan.svg";
import helpIcon from "@/asserts/mobile-icons/support.svg";
import search from "@/asserts/search.svg";
import Image from "next/image";

import Link from "next/link";
import Input from "../../ui/Input";

import { useEffect, useState } from "react";

import Button from "@/ui/Button";
import IconImage from "../IconImage/IconImage";
export default function Header() {
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    if (window.innerWidth >= 640) {
      setSidebarOpen(false);
    }
  }, [open, setOpen]);
  const menuLinksPosition = !sidebarOpen ? "ml-[-1000px]" : "";
  const inputFieldHowHide = open ? "block" : "hidden";
  return (
    <>
      <div className="bg-primary-A200 sticky top-0 z-20 ">
        {/* desktop view */}
        <div className="hidden lg:block">
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 min-h-20  items-center justify-center max-w-[1260px] mx-auto ">
            {/* logo */}
            <div className=" col-span-1">
              <Link href="/">
                <Image
                  src={logo}
                  alt="aidroo logo image"
                  className="h-10 max-w-[50%] "
                />
              </Link>
            </div>

            {/* searching bar */}
            <div className="flex   items-center  col-span-2  text-lg text-gray-700">
              <form className="flex gap-4">
                <Input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className=" gap-2 text-gray-600 font-bold rounded-xl border w-full outline-none"
                />

                <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[3.7rem] ">
                  <IconImage src={filter} alt="Icon 1" size={40} />
                </div>
                <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[4rem] ">
                  <IconImage src={search} alt="Icon 1" size={32} />
                </div>
              </form>
            </div>
            <div className="col-span-2 mx-auto">
              <h1 className="text-gray-200 ">Aidroo for Business</h1>
            </div>
            <div className="flex gap-8 col-span-1">
              <Button className=" bg-white   ">Login</Button>
              <Button className=" bg-white    ">Signup</Button>
            </div>
          </div>
        </div>

        {/* mobile view */}

        <div className="  block lg:hidden   space-y-4 ">
          <div className="mx-4">
            <div className="flex w-full    justify-between  h-24 items-center text-lg text-gray-700 ">
              <div className=" ">
                <Link href="/" className=" ">
                  <Image
                    src={logo}
                    alt="aidroo logo image"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>

              <div className="flex gap-4 items-center">
                <div
                  className="w-10 h-10 relative bg-primary-A100 rounded-md cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <Image
                    src={search}
                    alt="Icon 1"
                    layout="fill"
                    className="object-contain absolute  p-1"
                  />
                </div>

                <div
                  className="w-8 h-8 relative  ring rounded-md cursor-pointer"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <Image
                    src={!sidebarOpen ? humber : close}
                    alt="Icon 1"
                    layout="fill"
                    className="object-contain absolute   "
                  />
                </div>
              </div>
            </div>

            <form
              className={` flex gap-4 ${inputFieldHowHide} justify-center pb-4 transform duration-500`}
            >
              <Input
                type="text"
                name="search"
                placeholder="Search"
                className=" gap-2 text-gray-600 font-bold rounded-xl border max-w-96 w-full outline-none"
              />

              <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[3.2rem] ">
                <IconImage src={filter} alt="Icon 1" size={30} />
              </div>
              <div className=" flex items-center justify-center  bg-primary-A100 p-1 rounded-md   cursor-pointer w-[3.2rem] ">
                <IconImage src={search} alt="Icon 1" size={24} />
              </div>
            </form>
          </div>
        </div>
        {/* sidebar */}
        <div
          className={`w-96 bg-white  fixed top-0  z-30   h-screen block lg:hidden  ${menuLinksPosition}  transform duration-500`}
        >
          <div>
            <div className="w-full  flex justify-center items-center h-24 bg-[#234261]">
              <Link href="/">
                <Image src={logo} alt="aidroo logo image" className="h-10 " />
              </Link>
            </div>
            {/* menu */}
            <summary className="collapse-title text-xl font-medium border-b-2 ">
              <div className="flex items-center gap-4">
                <IconImage src={category} size={24} alt="icon" />
                <span>Categories</span>
              </div>
            </summary>
            <details className="collapse collapse-arrow rounded-none border-b-2 transform duration-500   ">
              <summary className="collapse-title text-xl font-medium ">
                <div className="flex items-center gap-4  ">
                  <IconImage src={pageIcon} size={24} alt="icon" />
                  <span>Pages</span>
                </div>
              </summary>
              <ul className="collapse-content    ">
                <li> Terms of service</li>
                <li> Privacy Policy </li>
                <li> Events</li>
                <li>Blogs</li>
              </ul>
            </details>{" "}
            <summary className="collapse-title text-xl font-medium border-b-2 ">
              <div className="flex items-center gap-4">
                <IconImage src={businessIcon} size={24} alt="icon" />
                <span> Business Pricing Plan</span>
              </div>
            </summary>
            <summary className="collapse-title text-xl font-medium border-b-2 ">
              <div className="flex items-center gap-4">
                <IconImage src={helpIcon} size={24} alt="icon" />
                <span> Help and Support</span>
              </div>
            </summary>
          </div>
        </div>
      </div>
    </>
  );
}

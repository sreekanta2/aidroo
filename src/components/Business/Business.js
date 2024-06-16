import heroImage from "@/asserts/business-image.svg";

import Image from "next/image";

const Business = () => {
  return (
    <div className="background-gradient bannerBackgroundImage md:h-screen px-8  py-20  ">
      <div className="max-w-[1280px]  mx-auto  ">
        <div className="  mx-auto text-center    rounded-lg">
          <h1 className="text-3xl font-bold mb-1">
            Why <span className="text-[#05affe]">Aidroo</span> for your
            Business?
          </h1>
          <p className="text-gray-600 mb-6">
            Explore the popular listings around the world
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
          <Image
            src={heroImage}
            width={500}
            height={300}
            alt="Hero image"
            className="mt-[-50px]"
          />

          <div className="sm:w-full md:w-[400px] space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[#42b2fc] ">
                Enhanced Branding
              </h2>
              <p className="text-gray-700 text-sm text-justify ">
                Elevate your brand with Claimed, Verified, and Guaranteed
                badges, along with verified badge reviews.
              </p>
            </div>

            <div className="flex flex-col  ">
              <h2 className="text-xl font-semibold text-[#42b2fc] ">
                Targeted Leads
              </h2>
              <p className="text-gray-700 text-sm text-justify ">
                Engage with a highly relevant audience tailored to your niche,
                driving qualified leads to your business.
              </p>
            </div>
            <div className="flex flex-col  ">
              <h2 className="text-xl font-semibold text-[#42b2fc] ">
                Seamless Management
              </h2>
              <p className="text-gray-700 text-sm  text-justify tracking-[.97px]">
                Aidroo simplifies directory management, offering tools to
                update, monitor, and analyze listings efficiently.
              </p>
            </div>
            <div className="mt-8 flex  justify-between space-x-4">
              <a
                href="#"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                See Our Pricing
              </a>
              <a
                href="#"
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg border border-blue-600"
              >
                Submit Listing
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

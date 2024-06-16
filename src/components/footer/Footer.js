import logo from "@/asserts/aidroo-logo.svg";
import { footerLinks } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="patenBackgroundImage h-fit pt-14 bg-[#f3fcff]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {footerLinks.length > 0 &&
            footerLinks.map((footerLink, index) => (
              <div key={index} className="flex flex-col">
                <h1 className="text-xl font-bold pb-2">{footerLink.title}</h1>

                {footerLink.links.length > 0 && (
                  <ul className="text-gray-600">
                    {footerLink.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.title ? (
                          <Link
                            href={link.link}
                            className="hover:text-blue-500 text-sm"
                          >
                            {link.title}
                          </Link>
                        ) : link.image ? (
                          <Image
                            src={link.image}
                            width={150}
                            height={75}
                            alt={link.image}
                            className="mt-4 "
                          />
                        ) : null}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
        <div className="  flex justify-between items-center h-24 ">
          <Image src={logo} width={100} height={100} alt="" />
          <p className="font-semibold">
            All rights reserved
            <span className="text-secondary-A100"> aidroo</span> 2024
          </p>
        </div>
      </div>
    </div>
  );
}

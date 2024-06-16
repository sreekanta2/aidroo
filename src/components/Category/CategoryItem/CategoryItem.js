import circle from "@/asserts/categories-icons/Circle.svg";
import Image from "next/image";
import Link from "next/link";

export default function CategoryItem({ category }) {
  return (
    <div className="container  ">
      <Link className="card shadow-md" href="#">
        <div className="relative flex justify-center   ">
          <Image
            src={circle}
            width={140}
            height={100}
            alt="Category icon"
            className=" absolute top-[-13px] shrink-0 "
          />
          <div className="  flex flex-col justify-center items-center ">
            <Image
              src={category}
              width={40}
              height={40}
              alt="Category icon"
              className=" absolute top-[35px] p-1 shrink-0  "
            />
            <h1 className="absolute top-[77px]">Finance</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

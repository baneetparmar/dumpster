import { Image } from "@nextui-org/react";
import { streetWear } from "@/components/font";
export default function Page() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-[100px]  ">
        <div className="flex flex-row justify-center items-center">
          <Image
            src="/logo.png"
            className="w-[64px] h-[56px] gap-2  xl:w-[200px] xl:h-[170px]"
            alt="company-logo"
          />
          <p className={`text-4xl xl:text-7xl  ${streetWear.className}`}>
            Dumpster
          </p>
        </div>
        <p className="text-xl">Build and Learn</p>
      </div>
    </main>
  );
}

import { Image } from "@nextui-org/react";
import { streetWear } from "@/components/font";
export default function Page() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center mt-[100px]  ">
        <div className="flex flex-row justify-center items-center">
          <Image src="/logo.png" width={256} height={256} alt="company-logo" />
          <p className={`text-9xl ${streetWear.className}`}>Dumpster</p>
        </div>
        <p className="text-xl">Build and Learn</p>
      </div>
    </main>
  );
}

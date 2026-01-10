import { MoveRight } from "lucide-react";

export default function OrderNowBanner() {
  return (
    <>
      <section className="flex flex-col items-center overflow-x-hidden bg-blackcurrant">
        <div className="flex mx-10 my-15 border rounded-2xl p-1 w-2xs md:w-2xl lg:w-3xl xl:w-6xl bg-linear-to-r from-matte-purple to-eggplant to-40%">
          <div className="flex flex-col gap-2 md:gap-6 m-6 md:m-12">
            <h1 className="text-lg md:text-3xl">
              Order Now & Satisfy Your Cravings
            </h1>
            <div className="flex flex-col gap-2 text-sm md:text-md xl:text-lg">
              <p>
                Let us bring the flavors you love straight to your door. From
                classic comfort dishes to chef-curated specials, every bite is
                made with care and delivered fresh. Skip the wait — your next
                favorite meal is just a click away.
              </p>
              <button className="w-fit text-sm flex gap-3 ml-0 transition delay-75 ease-in-out bg-linear-to-r hover:from-beyond-blue hover:to-mckenzie border-3 border-beyond-blue from-mckenzie to-beyond-blue">
                read more <MoveRight className="self-center" />
              </button>
            </div>
          </div>
          <div className="hidden md:block bg-[url('/pizza.png')] bg-cover max-h-xl w-screen"></div>
          <div className="hidden md:absolute bg-[url('/mint.png')] bg-cover max-h-lg"></div>
        </div>
        <section className="w-full m-8 mx-15 flex flex-col items-center">
          <hr className="w-2xs sm:w-2xl lg:w-5xl h-px border-t-0 opacity-50 bg-transparent bg-linear-to-r from-transparent via-beyond-blue to-transparent " />
       {/* <hr className="w-2xs sm:w-2xl lg:w-4xl my-8 h-px border-t-0 bg-transparent bg-linear-to-r from-transparent via-gray-500 to-transparent opacity-50" /> */}
        </section>
      </section>
    </>
  );
}

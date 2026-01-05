import { MoveRight } from "lucide-react";
import StatsSection from "./StatsSection";

export default function AboutUs() {
  return (
    <>
      <section className="flex flex-col p-4 md:p-6 pt-20 md:pt-25 pb-40 items-center gap-12 md:gap-15 bg-activated-charcoal">
        <div className="flex flex-col items-center w-full max-w-4xl text-center gap-3 px-4">
          <h1>About Us</h1>
          <p className="text-sm md:text-lg lg:text-xl max-w-xs md:max-w-2xl lg:max-w-4xl">
            Our achievement story stands as a powerful testament to teamwork and
            perseverance. United, we have faced challenges, celebrated
            victories, and woven a narrative of growth and success.
          </p>
          <button className="w-fit capitalize text-sm md:text-lg flex gap-3 transition delay-75 ease-in-out bg-linear-to-r hover:from-beyond-blue hover:to-mckenzie border-3 border-beyond-blue from-mckenzie to-beyond-blue">
            read more <MoveRight className="self-center" />
          </button>
        </div>
        <div className="relative flex flex-col items-center w-full px-4">
          <img
            src="/restaurant-about-us.png"
            className="rounded-lg w-full max-w-4xl h-auto"
          />
          <StatsSection />
        </div>
      </section>
    </>
  );
}

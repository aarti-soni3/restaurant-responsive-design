import { MoveRight } from "lucide-react";
export default function HeroSection() {
  return (
    <>
      <section className="bg-blackcurrant md:w-screen flex flex-col bg-[url(/free-layer-blur.png)] bg-contain bg-center text-center overflow-x-hidden">
        <div className="w-full max-w-2xl flex flex-col px-4 md:px-8 mx-auto mt-12 md:mt-20 py-12 md:py-20 gap-6 items-center">
          <span className="bg-gray-900/30 place-self-center rounded-full border border-gray-500/40 text-sm md:text-md px-4 py-1 w-fit">
            <p className="text-zinc-300 text-xs md:text-sm">
              Serving Food Lovers Since 2016 ❤️
            </p>
          </span>
          <h1 className="text-xl md:text-3xl lg:text-5xl max-w-xs md:max-w-xl lg:max-w-4xl flex flex-col items-center z-5">
            Savor Every Bite. Savor Every Moment.
            {/* <img
              src="/line.svg"
              className="bg-linear-to-r from-beyond-blue to-white -z-1 "
            /> */}
          </h1>
          <p className="max-w-xs md:max-w-xl lg:max-w-4xl text-sm md:text-lg">
            Welcome to a dining experience where flavor, freshness, and
            hospitality come together. Whether it's your first visit or your
            hundredth, every plate is made to impress.
          </p>
          <button className="w-fit text-sm md:text-lg flex gap-3 transition delay-75 ease-in-out bg-linear-to-r hover:from-beyond-blue hover:to-mckenzie border-3 border-beyond-blue from-mckenzie to-beyond-blue">
            experience the flavor <MoveRight className="self-center" />
          </button>
        </div>

        <img
          className="z-5 w-full max-w-4xl h-40  object-cover px-4"
          src="/dishes-hero.png"
          loading="lazy"
        />
      </section>
    </>
  );
}

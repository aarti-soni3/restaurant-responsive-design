import { MoveRight } from "lucide-react";
export default function HeroSection() {
  return (
    <>
      <section className="bg-blackcurrant flex flex-col bg-[url(/free-layer-blur.png)] bg-contain bg-center text-center">
        <div className=" w-2xl flex flex-col m-8 mt-20 py-20 gap-6 items-center self-center">
          <span className="bg-gray-900/30 place-self-center rounded-full border border-gray-500/40 text-md px-4 py-1 w-fit">
            <p className="text-zinc-300">Serving Food Lovers Since 2016 ❤️</p>
          </span>
          <h1 className="text-5xl w-xl flex flex-col items-center z-5">
            Savor Every Bite. Savor Every Moment.
            {/* <img
              src="/line.svg"
              className="bg-linear-to-r from-beyond-blue to-white -z-1 "
            /> */}
          </h1>
          <p className="w-3xl text-lg">
            Welcome to a dining experience where flavor, freshness, and
            hospitality come together. Whether it's your first visit or your
            hundredth, every plate is made to impress.
          </p>
          <button className="w-fit text-lg flex gap-3 transition delay-75 ease-in-out bg-linear-to-r hover:from-beyond-blue hover:to-mckenzie border-3 border-beyond-blue from-mckenzie to-beyond-blue">
            experience the flavor <MoveRight className="self-center" />
          </button>
        </div>

        <img className="z-5" src="/dishes-hero.png" loading="lazy" />
      </section>
    </>
  );
}

import { MoveRight } from "lucide-react";

export default function Servicecard({ imagePath, title, description }) {
  return (
    <>
      <section className="w-min border border-stone-100/20 flex flex-col rounded-lg ">
        <img src={imagePath} className="h-fit rounded-t-lg" />
        <div className=" flex flex-col gap-4 p-6">
          <h1 className="text-2xl">{title}</h1>
          <p className="w-80">{description}</p>
          <button className="w-fit text-lg flex gap-3 ml-0 transition delay-75 ease-in-out bg-linear-to-r hover:from-beyond-blue hover:to-mckenzie border-3 border-beyond-blue from-mckenzie to-beyond-blue">
            read more <MoveRight className="self-center" />
          </button>
        </div>
      </section>
    </>
  );
}

import { MoveRight } from "lucide-react";

export default function Servicecard({ imagePath, title, description }) {
  return (
    <>
      <section className="w-full border border-stone-100/20 flex flex-col rounded-lg">
        <img src={imagePath} className="w-full h-auto rounded-t-lg object-cover" />
        <div className="flex flex-col gap-4 p-4 md:p-6">
          <h1 className="text-xl md:text-2xl">{title}</h1>
          <p className="text-sm md:text-base">{description}</p>
          <button className="w-fit text-lg flex gap-3 ml-0 transition delay-75 ease-in-out bg-linear-to-r hover:from-beyond-blue hover:to-mckenzie border-3 border-beyond-blue from-mckenzie to-beyond-blue">
            read more <MoveRight className="self-center" />
          </button>
        </div>
      </section>
    </>
  );
}

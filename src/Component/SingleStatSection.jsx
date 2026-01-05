import { Icon } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

export default function SingleStatSection({ icon, amount, label }) {
  return (
    <>
      <section className="flex flex-col gap-3 md:gap-5 items-center">
        <DynamicIcon name={icon} className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" color="#7033ff" />

        <div className="flex flex-col gap-1">
          <h1 className="text-beyond-blue text-xl md:text-2xl lg:text-3xl">{amount}+</h1>
          <p className="capitalize text-xs md:text-sm lg:text-lg">{label}</p>
        </div>
      </section>
    </>
  );
}

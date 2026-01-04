import { Icon } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

export default function SingleStatSection({ icon, amount, label }) {
  return (
    <>
      <section className="flex flex-col gap-5 items-center">
        <DynamicIcon name={icon} size={35} color="#7033ff" />

        <div className="flex flex-col gap-1 ">
          <h1 className="text-beyond-blue">{amount}+</h1>
          <p className="capitalize text-lg">{label}</p>
        </div>
      </section>
    </>
  );
}

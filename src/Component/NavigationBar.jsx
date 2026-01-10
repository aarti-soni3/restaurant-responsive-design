import { TextAlignJustify } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

export default function NavigationBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <header className="w-full fixed flex md:gap-10 justify-between md:justify-evenly p-2 md:p-1 bg-blackcurrant border-b border-zinc-400/40 z-100 overflow-x-hidden">
        <section className="flex items-center gap-2">
          <img
            className="object-contain"
            src="/restaurant-logo.png"
            height={45}
            width={45}
          />
          <h1 className="capitalize font-bold text-2xl">restaurant</h1>
        </section>

        <nav className="hidden md:flex justify-between items-center gap-6 text-md [&_a]:capitalize [&_a]:hover:text-violet-400 [&_a]:font-medium ">
          <a href="">home</a>
          <a href="">about us</a>
          <a href="">services</a>
          <a href="">team</a>
          <a href="">FAQS</a>
        </nav>

        <nav
          className={`flex flex-col fixed left-0 right-0 md:hidden p-8 transition-all duration-300 ${
            openMenu
              ? "top-16 opacity-100"
              : "top-0 -translate-y-full opacity-0"
          } bg-activated-charcoal justify-between items-center gap-6 text-md [&_a]:capitalize [&_a]:hover:text-violet-400 [&_a]:font-medium `}
        >
          <a href="">home</a>
          <a href="">about us</a>
          <a href="">services</a>
          <a href="">team</a>
          <a href="">FAQS</a>
        </nav>

        <button className="hidden md:block">book a table</button>
        <button
          className="md:hidden bg-activated-charcoal p-2.5 cursor-pointer"
          onClick={toggleMenu}
        >
          {openMenu ? <X /> : <TextAlignJustify />}
        </button>
      </header>
    </>
  );
}

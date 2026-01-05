export default function NavigationBar() {
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

        <button>book a table</button>
      </header>
    </>
  );
}

import Servicecard from "./ServiceCard";

export default function Services() {
  const cardData = [
    {
      id: 1,
      imagePath: "/free-blog-1.png",
      title: "Buffet Service",
      description:
        "Navigate effortlessly with our intuitive design, optimized for all devices. Enjoy a seamless experience whether you're on a computer or mobile device.",
    },
    {
      id: 2,
      imagePath: "/free-blog-2.png",
      title: "Food delivery",
      description:
        "Enjoy a safe shopping experience with multiple payment options and SSL encryption. Your personal and financial information is always protected.",
    },
    {
      id: 3,
      imagePath: "/free-blog-3.png",
      title: "Cafeteria",
      description:
        "Find products quickly with advanced filters, sorting options, and suggestion. Save time and effortlessly locate exactly what you need with ease.",
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-12 items-center bg-blackcurrant py-12 md:py-20 px-4 overflow-x-hidden">
        <div className="flex flex-col gap-3 text-center w-full max-w-5xl">
          <h1 className="capitalize text-2xl sm:text-4xl" >crafting moments, serving you</h1>
          <p className="w-sm sm:w-xl md:w-2xl xl:w-4xl self-center">
            From unforgettable flavors to seamless service, we’re here to make
            every meal feel special. Whether you dine in, take out, or order
            online we’ve got your cravings covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl justify-center">
          {cardData.map((data) => {
            return (
              <Servicecard
                key={data.id}
                imagePath={data.imagePath}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

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
      <section className="flex flex-col gap-12 items-center bg-blackcurrant py-20">
        <div className="flex flex-col gap-3 text-center w-5xl">
          <h1 className="capitalize">crafting moments, serving you</h1>
          <p>
            From unforgettable flavors to seamless service, we’re here to make
            every meal feel special. Whether you dine in, take out, or order
            online we’ve got your cravings covered.
          </p>
        </div>

        <div className="flex gap-8 justify-center">
          {cardData.map((data, id) => {
            return (
              <Servicecard
                key={id}
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

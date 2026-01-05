import CustomerFeedbackCard from "./CustomerFeedbackCard";

export default function CustomerFeedback() {
  const customerData = [
    {
      id: 1,
      imagePath: "/customer-3.png",
      name: "Alexandra Lee",
      occupation: "Master Chief Judge",
      starAmount: 5,
      description:
        "The ambiance is amazing, and the food is even better! The grilled salmon was perfectly cooked. A must-try place!",
    },
    {
      id: 2,
      imagePath: "/customer-12.png",
      name: "Jason Wu",
      occupation: "Food Blogger",
      starAmount: 5,
      description:
        "The service was exceptional. From the moment we walked in, the staff made us feel like family.",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-15 bg-activated-charcoal">
        <div className="col-span-1 flex flex-col w-md gap-4">
          <h1 className="font-bold text-3xl ml-4 md:ml-0 md:text-4xl ">Customers Feedback</h1>
          <p className="text-md md:text-xl w-xs md:w-sm text-center md:text-left">
            From career changes to dream jobs, here's how FlyonUI helped.
          </p>
        </div>

        <div className="col-span-2 grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2">
          {customerData.map((data) => {
            return (
              <CustomerFeedbackCard
                key={data.id}
                imagePath={data.imagePath}
                name={data.name}
                occupation={data.occupation}
                starAmount={data.starAmount}
                description={data.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

import SingleStatSection from "./SingleStatSection";

export default function StatsSection() {
  const statsData = [
    { id: 1, icon: "user-star", amount: 7, label: "years of experience" },
    { id: 2, icon: "scroll-text", amount: 30, label: "Dishes in Our Menu" },
    { id: 3, icon: "users", amount: 500, label: "Customer Reviews" },
    { id: 4, icon: "smile-plus", amount: "10k", label: "Happy Customers" },
  ];

  return (
    <>
      <section className="xl:absolute xl:bottom-0 flex w-fit gap-4 md:gap-10 place-content-center rounded-lg bg-activated-charcoal border mt-12 xl:-m-20 p-4 md:p-6 xl:px-8 text-center overflow-x-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {statsData.map((data) => {
            return (
              <SingleStatSection
                key={data.id}
                icon={data.icon}
                amount={data.amount}
                label={data.label}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

import SingleStatSection from "./SingleStatSection";

export default function StatsSection() {
  return (
    <>
      <section className="absolute bottom-0 flex w-fit gap-10 place-content-center rounded-lg bg-activated-charcoal border -m-20 p-6 px-8 text-center">
        <SingleStatSection
          icon="user-star"
          amount={7}
          label="years of experience"
        />
        <SingleStatSection
          icon="scroll-text"
          amount={30}
          label="Dishes in Our Menu"
        />
        <SingleStatSection icon="users" amount={500} label="Customer Reviews" />
        <SingleStatSection
          icon="smile-plus"
          amount={"10k"}
          label="Happy Customers"
        />
      </section>
    </>
  );
}

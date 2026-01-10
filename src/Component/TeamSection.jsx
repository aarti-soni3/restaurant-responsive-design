import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
  const teamData = [
    {
      id: 1,
      name: "Cheyenne Workman",
      designation: "Head Chef",
      image: "/chef-1.png",
      description: "A visionary leader driving innovation and collaboration.",
    },
    {
      id: 2,
      name: "Corey Rosser",
      designation: "Kitchen Manager",
      image: "/chef-2.png",
      description: "Leading teams to build smart, scalable solutions.",
    },
    {
      id: 3,
      name: "Marilyn Westervelt",
      designation: "Sous Chef",
      image: "/chef-3.png",
      description: "Crafting intuitive and engaging user experiences.",
    },
    {
      id: 4,
      name: "Ryan Passaquindici Arcand",
      image: "/chef-4.png",
      designation: "Culinary Director",
      description: "Bringing designs to life with seamless interfaces.",
    },
  ];

  return (
    <>
      <section className="bg-blackcurrant w-full p-8 md:p-20 flex flex-col gap-10 items-center text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Get to Know Our Amazing Team
          </h1>
          <p className="text-md md:text-2xl max-w-2xl">
            Meet the Passionate Experts Behind Our Success and Learn More About
            Their Roles.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {teamData.map((data) => {
            return (
              <TeamMemberCard
                key={data.id}
                name={data.name}
                image={data.image}
                designation={data.designation}
                description={data.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default function TeamMemberCard({
  name,
  designation,
  image,
  description,
}) {
  return (
    <>
      <section className="flex flex-col max-w-xs border border-gray-600 rounded-2xl text-left">
        <div className="w-full flex flex-col justify-end items-center h-80 bg-activated-charcoal rounded-t-2xl">
          <img src={image} width={220} height={220} loading="lazy" />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <h4>{name}</h4>
          <hr className="border-gray-600" />
          <p className="text-lg font-medium">{designation}</p>
          <p className="text-lg">{description}</p>
        </div>
      </section>
    </>
  );
}

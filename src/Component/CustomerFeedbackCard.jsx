export default function CustomerFeedbackCard({
  imagePath,
  name,
  occupation,
  starAmount,
  description,
}) {
  return (
    <>
      <section className="flex flex-col gap-3 p-6 w-xs lg:w-md xl:w-lg bg-blackcurrant border rounded-xl border-stone-200/40 hover:border-beyond-blue">
        <div className="flex gap-3">
          <img
            src={imagePath}
            loading="lazy"
            className="rounded-4xl object-cover"
            width={45}
            height={45}
          />
          <div>
            <p className="font-bold">{name}</p>
            <p>{occupation}</p>
          </div>
        </div>

        <div className="flex gap-1">
          {Array.from({ length: starAmount }, (_, i) => i + 1).map((num) => {
            return (
              <svg
                key={num}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#E3921A"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            );
          })}
        </div>
        <div>{description}</div>
      </section>
    </>
  );
}

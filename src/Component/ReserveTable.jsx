export default function ReserveTable() {
  return (
    <>
      <section className="flex flex-col bg-activated-charcoal p-8 gap-15 ">
        <div className="flex flex-col items-center mt-6 gap-3">
          <h1>Get in Touch to Reserve Your Table</h1>
          <p className="text-lg">
            Whether you're planning a casual dinner or a special celebration,
            we're here to make your experience seamless.
          </p>
        </div>
        <div className="flex flex-col md:flex-row bg-blackcurrant rounded-2xl p-8 gap-10">
          <section className="flex flex-1 flex-col gap-6 items-center">
            <div className="w-full">
              <h1 className="text-left">Book a Table</h1>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm"> Your Name</label>
                <input
                  type="text"
                  className="border border-gray-500 rounded-md p-2"
                  placeholder="Enter your name here..."
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm"> Phone Number</label>
                <input
                  type="number"
                  className="border border-gray-500 rounded-md p-2"
                  placeholder="(+91) 98989 89898"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm"> Enter Date</label>
                <input
                  type="date"
                  className="border border-gray-500 rounded-md p-2"
                  placeholder="01/01/2025"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm"> Enter Time</label>
                <input
                  type="time"
                  className="border border-gray-500 rounded-md p-2"
                  placeholder="09:00:00"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm"> Message</label>
                <textarea
                  rows={3}
                  className="border border-gray-500 rounded-md p-2"
                  placeholder="Enter you message..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full justify-center text-md flex gap-3 ml-0 transition delay-75 ease-in-out bg-linear-to-r hover:from-beyond-blue hover:to-mckenzie border-3 border-beyond-blue from-mckenzie to-beyond-blue"
            >
              Book a Reservation
            </button>
          </section>
          <section className="flex flex-col gap-6 text-center self-center w-full md:w-fit">
            <div className="flex flex-col gap-6 rounded-xl border border-gray-500 p-6">
              <h2>Email/Phone</h2>
              <div>
                <p>johndoe@gmail.com</p>
                <p>+148 589 2001 2466</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl border border-gray-500 p-6 items-center">
              <h2>Our Location</h2>
              <div>
                <p className="max-w-2xs">
                  Office 149, 450 South Brand Brooklyn San Diego County, CA
                  91905, USA
                </p>
              </div>
            </div>
            <p className="font-bold">
              Opening Hours{" "}
              <span className="text-beyond-blue"> 9AM - 11PM </span> Everyday
            </p>
          </section>
        </div>
      </section>
    </>
  );
}

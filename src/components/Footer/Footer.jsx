export default function Footer() {
  return (
    <>
      <footer className="bg-[#2c3e50] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center text-white">
            <div>
              <h3 className="text-3xl font-semibold">LOCATION</h3>
              <p className="my-2">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold md:m-0 mt-16">
                AROUND THE WEB
              </h3>
              <div className="flex gap-5 justify-self-center mt-4">
                <i class="fa-brands fa-facebook text-xl border-[1px] rounded-full px-2 py-1"></i>
                <i class="fa-brands fa-twitter text-xl border-[1px] rounded-full px-2 py-1"></i>
                <i class="fa-brands fa-linkedin-in text-xl border-[1px] rounded-full px-2 py-1"></i>
                <i class="fa-solid fa-globe text-xl border-[1px] rounded-full px-2 py-1"></i>
              </div>
            </div>
            <div className=" w-[85%] justify-self-center">
              <h3 className="text-3xl font-semibold md:m-0 mt-16">
                AROUND THE WEB
              </h3>
              <p className="mt-3">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#1a252f] text-center text-white py-5">
        Copyright © Your Website 2021
      </div>
    </>
  );
}

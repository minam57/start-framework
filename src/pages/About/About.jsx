import star from "../../assets/star-solid.svg";

export default function About() {
  return (
    <>
      <main className="bg-[#1abc9c] py-40">
        <div className="container flex flex-col items-center justify-center w-3/4">
          <h2 className="mb-3 text-white text-[40px] font-bold text-center">
            ABOUT COMPONENT
          </h2>
          <div className="flex justify-center items-center">
            <span className="w-[90px] h-1 bg-white"></span>
            <img src={star} className="w-5 mx-3" />
            <span className="w-[90px] h-1 bg-white"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-10 md:mb-0 md:space-x-3">
            <p className="text-white mt-4">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="text-white mt-4">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

import avataaars from "../../assets/avataaars.svg";
import star from "../../assets/star-solid.svg";
export default function Home() {
  return (
    <>
      <main className="bg-[#1abc9c] py-9">
        <div className="container flex flex-col items-center justify-center">
          <img src={avataaars} className="w-1/5" />
          <h1 className="mt-9 mb-3 text-white text-[40px] font-bold text-center px-4">
            START FRAMEWORK
          </h1>
          <div className="flex justify-center items-center">
            <span className="w-[90px] h-1 bg-white"></span>
            <img src={star} className="w-5 mx-3" />
            <span className="w-[90px] h-1 bg-white"></span>
          </div>
          <p className="text-white mt-4">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </main>
    </>
  );
}

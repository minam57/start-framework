export default function Contact() {
  return (
    <>
      <div className="py-9">
        <div className="container flex flex-col items-center">
          <h3 className="text-[#2c3e50] text-[40px] font-bold py-2 text-center mt-2">
            CONTACT SECTION
          </h3>
          <div className="flex justify-center items-center mb-10">
            <span className="w-[80px] h-1 bg-[#2c3e50]"></span>
            <i class="fa-solid fa-star text-[#2c3e50] mx-3"></i>
            <span className="w-[80px] h-1 bg-[#2c3e50]"></span>
          </div>
          <form className="w-1/2 gap-8 space-y-10">
            <input
              className="w-full h-9 rounded border-[1px] border-t-0 border-x-0 focus:outline-none border-gray-400 focus:border-blue-800 p-3"
              type="text"
              placeholder="userName"
            />
            <input
              type="number"
              min="1"
              className="w-full h-9 rounded border-[1px] border-t-0 border-x-0 focus:outline-none border-gray-400 focus:border-blue-800 p-3"
              placeholder="userAge"
            />
            <input
              type="email"
              className="w-full h-9 rounded border-[1px] border-t-0 border-x-0 focus:outline-none border-gray-400 focus:border-blue-800 p-3"
              placeholder="userEmail"
            />
            <input
              type="password"
              className="w-full h-9 rounded border-[1px] border-t-0 border-x-0 focus:outline-none border-gray-400 focus:border-blue-800 p-3"
              placeholder="userPassword"
            />
            <button
              className="bg-[#1abc9c] p-2 text-white rounded-lg"
              type="button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

import notFound from "../../assets/notFound.jpg";

export default function NotFound() {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={notFound} className="w-3/4" />
      </div>
    </>
  );
}

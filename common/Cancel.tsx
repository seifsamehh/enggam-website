import Link from "next/link";

const Cancel = () => {
  return (
    <section className="cancel h-screen flex justify-center items-center gap-6 flex-col">
      <h1 className="text-3xl md:text-7xl text-center font-bold">
        The order has been cancelled
      </h1>
      <Link href="/Home-Page" className="px-4 py-2 rounded-md">
        Home Page
      </Link>
    </section>
  );
};

export default Cancel;

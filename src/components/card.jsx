import { useQuery } from "@tanstack/react-query";

const Card = () => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch("https://fakestoreapi.com/products");
        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();
          return jsonData;
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
    // manual banauna
    // reload garna fetch gareko data lai manually
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        Loading...
      </div>
    );
  }

  //   if (isError) {
  //     console.log("Error while fetching data");
  //     return <div>Error fetching data</div>;
  //   }

  if (!data) {
    console.log("Data si undefined or null");
    return <div>Data</div>;
  }

  console.log("data...", data);
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3 p-3">
      {data.map((item) => (
        <div
          className="bg-white text-black p-4 rounded-lg border-2 shadow-lg shadow-slate-900 hover:scale-110"
          key={item.id}
        >
          <img
            src={item.image}
            alt="product"
            className="h-28 hover:scale-110"
          />
          <h1 className="font-extrabold mt-4  hover:text-orange-600 ">
            {item.title}
          </h1>
          <p className="hover:text-purple-900">{item.description}</p>
          <p className="hover:text-green-600">Price:${item.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Card;

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
};

export default async function Home() {
  const data = await fetchData();
  return (
    <div>
      {data.map((item) => (
        <p key={item?.id}>{item?.title}</p>
      ))}
    </div>
  );
}

const Page = async () => {
  
  const response =  await fetch("http://localhost:8080/");
  const data = await response.json();

  return (
    <>
      <h1>{data.message}</h1>
    </>
  );
}

export default Page;
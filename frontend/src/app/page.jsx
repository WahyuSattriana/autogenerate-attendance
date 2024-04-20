const Page = async () => {
  const axios = require('axios');
  let response;

  try {
    response = await axios.get('http://localhost:8080/hadir');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  return (
    <div>
      {response?.data.getData?.data?.map((data, index) => {
        return (
          <div key={index}>
            <h1>{data.nama}</h1>
            <h2>{data.no_absen}</h2>
            <h3>{data.kelas}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default Page;

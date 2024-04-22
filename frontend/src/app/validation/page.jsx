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
    <div className='flex flex-col gap-5'>
      <h1 className="text-center text-2xl font-bold">Validate your attendance</h1>
      <input type="text" placeholder='input random char here' className='bg-slate-300 px-5 w-auto h-10 font-regular rounded-md border-2 border-slate-400' />
      <button className='text-center bg-blue-200 w-auto h-10 font-medium rounded-md border-2 border-blue-300'>Validate</button>
    </div>
  );
}

export default Page;
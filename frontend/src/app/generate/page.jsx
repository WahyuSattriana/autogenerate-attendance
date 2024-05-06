import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const Page = async () => {
  const response = await axios.get('http://localhost:8080/generateRandomChar');
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-center text-2xl font-bold">Generating QR Codes...</h1>
      <div className="flex justify-center items-center mt-8">
        <Image src={response.data.QRData} width={300} height={300} alt={response.data.hasil} />
      </div>
      <p className="text-center mt-4">{response.data.randomChar}</p>
    </div>
  );
}

export default Page
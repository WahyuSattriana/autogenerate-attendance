import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const Page = async () => {
  const response = await axios.get('http://localhost:8080/generateRandomChar');
  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold">Generating QR Codes...</h1>
      <Image src={response.data.QRData} width={300} height={300} alt={response.data.hasil}></Image>
      <p>{response.data.randomChar}</p>
    </div>
  )
}

export default Page
import { useEffect, useState } from "react";

const Page = () => {
  
  useEffect(() => {
    fetch("http://localhost:8080/").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
      }
    )
  })

  return (
    <>
      <h1>{data.message}</h1>
    </>
  );
}

export default Page;
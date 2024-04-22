import Link from 'next/link'

const Page = () => {
  return (
    <div className="box-border flex flex-col align-center mt-5 max-w-screen-sm gap-5">
      <h1 className="text-center text-2xl font-bold">AutoGenerate Attendace</h1>
      <Link href={"/generate"} className='text-center bg-blue-200 w-auto h-10 font-medium rounded-md border-2 border-blue-300'>Generate</Link>
      <Link href={"/validation"} className='text-center bg-blue-200 w-auto h-10 font-medium rounded-md border-2 border-blue-300'>Validate</Link>
    </div>
  );
}

export default Page;  
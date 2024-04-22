const Login = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className="text-center text-2xl font-bold">Login</h1>
      <input type="text" placeholder='NISN' id="nisn" className='bg-slate-300 px-5 w-auto h-10 font-regular rounded-md border-2 border-slate-400' />
      <input type="password" placeholder='Password' id="password" className='bg-slate-300 px-5 w-auto h-10 font-regular rounded-md border-2 border-slate-400' />
      <button className='text-center bg-blue-200 w-auto h-10 font-medium rounded-md border-2 border-blue-300'>Login</button>
    </div>
  )
}

export default Login
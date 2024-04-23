const Login = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Login</h1>
      <form action="/auth" method="get" className='flex flex-col gap-5'>
        <input type="text" name="NISN" required placeholder='NISN' id="nisn" className='bg-slate-300 px-5 w-auto h-10 font-regular rounded-md border-2 border-slate-400' />
        <input type="password" name="password" required placeholder='Password' id="password" className='bg-slate-300 px-5 w-auto h-10 font-regular rounded-md border-2 border-slate-400' />
        <button type="submit" name="login" className='text-center bg-blue-200 w-auto h-10 font-medium rounded-md border-2 border-blue-300'>Login</button>
      </form>
    </div>
  )
}

export default Login
import { createClient } from '@/utils/supabase/server'
import { login, signup } from './actions'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  return (
    data.user ? redirect('/dashboard') : (
      <div className="">
        <h1 className="text-center text-2xl font-bold">Login / Sign Up</h1>
        <form className='flex flex-col gap-3'>
          <label htmlFor="nisn">NISN:</label>
          <input id="nisn" name="nisn" type="text" required className='bg-slate-300 px-5 w-auto h-10 font-regular rounded-md border-2 border-slate-400' maxLength={5} />
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required className='bg-slate-300 px-5 w-auto h-10 font-regular rounded-md border-2 border-slate-400' />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required className='bg-slate-300 px-5 w-auto h-10 font-regular rounded-md border-2 border-slate-400' />
          <button formAction={login} className='text-center bg-green-200 w-auto h-10 font-medium rounded-md border-2 border-green-300'>Log in</button>
          <button formAction={signup} className='text-center bg-green-200 w-auto h-10 font-medium rounded-md border-2 border-green-300'>Sign up</button>
        </form>
      </div>
    )
  )
}
import Link from 'next/link'
import { logout } from './logout/action';
import { createClient } from '@/utils/supabase/server';

const Page = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  return (
    <div className="box-border flex flex-col align-center item mt-5 max-w-screen-sm gap-5">
      <h1 className="text-center text-2xl font-bold">AutoGenerate Attendace</h1>
      <Link href={"/generate"} className='text-center bg-blue-200 w-auto h-10 font-medium rounded-md border-2 border-blue-300'>Generate</Link>
      <Link href={"/validation"} className='text-center bg-blue-200 w-auto h-10 font-medium rounded-md border-2 border-blue-300'>Validate</Link>
      <Link href={"/dashboard"} className='text-center bg-blue-200 w-auto h-10 font-medium rounded-md border-2 border-blue-300'>Dashboard</Link>
      {!data?.user ?
        <Link href={"/login"} className='text-center bg-green-200 w-auto h-10 font-medium rounded-md border-2 border-green-300'>Login</Link>
        :
        <form action={logout} className='w-auto'>
          <button type='submit' className='text-center bg-red-200 w-auto h-10 font-medium rounded-md border-2 border-red-300 px-10'>Logout Now!</button>
        </form>
      }
    </div>
  );
}

export default Page;
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

const Dashboard = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  console.log(data)
  return (
    <div>
      <section className="box-border flex flex-col align-center mt-5 max-w-screen-sm gap-5">
        <h1 className="text-center text-2xl font-bold">This is a Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-lg font-semibold"></p>
            <p className="text-lg font-semibold text-center">NISN: {data.user.nisn}</p>
            <p className="text-lg font-semibold text-center">Email: {data.user.email}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

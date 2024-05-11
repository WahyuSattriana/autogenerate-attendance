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
        <h1 className="text-center text-2xl font-bold">Dashboard</h1>
        <div className="flex flex-col">
            <p className="text-lg font-semibold text-center">NISN: {data.user.user_metadata.nisn}</p>
            <p className="text-lg font-semibold text-center">Email: {data.user.email}</p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

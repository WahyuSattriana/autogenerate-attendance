const Dashboard = () => {
  return (
    <div className="box-border flex flex-col align-center mt-5 max-w-screen-sm gap-5">
      <h1 className="text-center text-2xl font-bold">This is a Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-lg font-semibold">NISN: 1234567890</p>
          <p className="text-lg font-semibold">Name: John Doe</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Kelas: 10A</p>
          <p className="text-lg font-semibold">Absen: 5</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
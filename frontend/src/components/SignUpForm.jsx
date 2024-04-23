import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const SignUpForm = () => {
  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })

    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Formulir Pendaftaran</h1>
        <p className="text-gray-500 dark:text-gray-400">Isi formulir di bawah ini untuk mendaftar.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nisn">NISN</Label>
          <Input id="nisn" placeholder="Masukkan NISN Anda" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Kata Sandi</Label>
          <Input id="password" placeholder="Masukkan kata sandi" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input id="name" placeholder="Masukkan nama lengkap Anda" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="class">Kelas</Label>
            <Select id="class" required>
              <SelectTrigger>
                <SelectValue placeholder="Pilih kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="X">Kelas X</SelectItem>
                <SelectItem value="XI">Kelas XI</SelectItem>
                <SelectItem value="XII">Kelas XII</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="number">Nomor Absen</Label>
            <Input id="number" placeholder="Masukkan nomor absen" required type="number" />
          </div>
        </div>
        <Button className="w-full" type="submit">
          Daftar
        </Button>
      </div>
    </div>
  )
}

export default SignUpForm;
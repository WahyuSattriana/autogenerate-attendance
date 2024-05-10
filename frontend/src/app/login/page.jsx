import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="nisn">NISN:</label>
      <input id="nisn" name="nisn" type="text" required />
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}
// это серверный компоннент и на дагнный момент подключено два клиентских
import { GoogleButton } from '@/components/GoogleButton'
import { SigninForm } from '@/components/SigninForm'

export default function Signin() {
  return (
    <div className="stack">
      <h1>SignIn page</h1>
      <GoogleButton />
      <div>or</div>
      <SigninForm />
    </div>
  )
}

// 26:30

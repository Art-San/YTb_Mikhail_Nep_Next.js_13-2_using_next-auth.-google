'use client'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import type { FormEventHandler } from 'react'

const SigninForm = () => {
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formaData = new FormData(event.currentTarget)
    const res = await signIn('credentials', {
      email: formaData.get('email'),
      password: formaData.get('password'),
      redirect: false
    })

    if (res && !res.error) {
      router.push('/profile')
    } else {
      console.log('res', res)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign in</button>
    </form>
  )
}

export { SigninForm }

// Мы не хотим чтоб этот компонент был клиентски, хотим чтобон сервеным

import { authConfig } from '@/configs/auth'
import { getServerSession } from 'next-auth'

export default async function Profile() {
  const session = await getServerSession(authConfig) // getServerSession вызвали хелпер, он работает толко на сервере
  console.log('session', session?.user)
  return (
    <div className="">
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="" />}
    </div>
  )
}

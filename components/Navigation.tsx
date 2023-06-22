'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

// активный пункт меню

type NavLink = {
  label: string
  href: string
}

type Props = {
  navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname()
  const session = useSession()
  console.log('session', session)
  return (
    <>
      {navLinks.map((link) => {
        const isActiv = pathname === link.href

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActiv ? 'active' : ''}
          >
            {link.label}
          </Link>
        )
      })}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session.data ? (
        <Link
          href="#"
          onClick={() =>
            signOut({
              callbackUrl: '/'
            })
          }
        >
          Sign Out
        </Link>
      ) : (
        <Link href="/api/auth/signin">SignIn</Link>
      )}
    </>
  )
}

export { Navigation }

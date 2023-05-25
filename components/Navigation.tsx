'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLink = {
  label: string
  href: string
}

type Props = {
  navLinks: NavLink[]
}

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname()
  console.log('pathname', pathname)
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
    </>
  )
}

export { Navigation }

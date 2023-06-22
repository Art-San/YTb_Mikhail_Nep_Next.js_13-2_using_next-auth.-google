export { default } from 'next-auth/middleware'

export const config = { matcher: ['/profile', '/protected/:path*'] }

// '/profile' статика
// '/protected/:path*' не статика

import './globals.css'

export const metadata = {
  title: 'CarHub - A Car Hire Service',
  description: 'Find, book, rent a car quick and super easy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>{children}</body>
    </html>
  )
}

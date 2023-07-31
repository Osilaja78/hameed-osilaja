import './globals.css'


export const metadata = {
  title: 'Hameed Osilaja',
  description: 'Portfolio Website | Hameed Osilaja',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'Dr. Serena Blake - Therapy',
  description: 'Therapy services by Dr. Serena Blake',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}

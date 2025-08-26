import './globals.css'

export const metadata = {
  title: 'Affinity AI',
  description: 'AI-powered UX research affinitization and insight extraction tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

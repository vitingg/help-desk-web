type  LayoutProps = {
  children: React.ReactNode
}

export function Layout({children}: LayoutProps) {
  return (
    <div className="bg-gray-100 h-screen text-gray-600 pt-4 flex">
      {children}
    </div>
  )
}
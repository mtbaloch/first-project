import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <nav className="bg-orange-100 text-whiete text-lg font-semibold text-center space-x-3 py-1.5">
        <Link href="/dashboard/products">Products</Link>
        <Link href="/dashboard/orders">Orders</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/customers">Customers</Link>
      </nav>
      {children}
    </>
  )
}

export default DashboardLayout

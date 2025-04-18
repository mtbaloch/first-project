import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-5">
      <h2 className="text-4xl font-semibold text-red-500">Not Found</h2>
      <p className="text-xl">Could not find requested resource</p>
      <Link
        className="text-lg font-semibold block px-2 py-1 bg-green-600 rounded-md text-white"
        href="/"
      >
        Return Home
      </Link>
    </div>
  )
}

'use client'

import { usePrivy } from '@privy-io/react-auth'

export default function Home() {
  const {
    ready,
    authenticated,
    login,
    logout,
    user,
  } = usePrivy()

  // Privy is still initializing
  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    )
  }

  // User is not logged in
  if (!authenticated) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50">
        <h1 className="text-4xl font-bold">
          Ramesh&apos;s Bakery
        </h1>

        <p className="text-zinc-600">
          Buy bread. Earn stamps. Get a free cake.
        </p>

        <button
          onClick={login}
          className="rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-zinc-800"
        >
          Sign in
        </button>
      </main>
    )
  }

  // User is logged in
  const wallet = user?.wallet?.address
  const email = user?.email?.address
  const phone = user?.phone?.number

  return (
    <main className="min-h-screen bg-zinc-50 p-8">
      <div className="mx-auto max-w-2xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Ramesh&apos;s Bakery
            </h1>

            <p className="text-zinc-600">
              Loyalty Card
            </p>
          </div>

          <button
            onClick={logout}
            className="rounded-lg border px-4 py-2 hover:bg-zinc-100"
          >
            Logout
          </button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Your Account
          </h2>

          <div className="space-y-5">

            <div>
              <p className="text-sm text-zinc-500">
                Email
              </p>

              <p className="font-medium">
                {email || 'Not available'}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Phone
              </p>

              <p className="font-medium">
                {phone || 'Not available'}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Privy User ID
              </p>

              <p className="break-all font-mono text-sm">
                {user?.id}
              </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Embedded Wallet
              </p>

              <p className="break-all font-mono text-sm">
                {wallet || 'Wallet not available'}
              </p>
            </div>

          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">
            🍰 Your Loyalty
          </h2>

          <p className="text-4xl font-bold">
            0 / 10
          </p>

          <p className="mt-2 text-zinc-500">
            stamps collected
          </p>
        </div>

      </div>
    </main>
  )
}
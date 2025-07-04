"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold">My App</span>
            </div>

            <div className="flex items-center space-x-4">
              {!session && (
                <>
                  <button
                    onClick={() => signIn("github")}
                    className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition duration-200"
                  >
                    Sign in with GitHub
                  </button>
                  <button
                    onClick={() => signIn("google")}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
                  >
                    Sign in with Google
                  </button>
                </>
              )}

            </div>
          </div>
        </div>
      </nav>

      {session && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Welcome {session.user.name}!</h2>
          <p className="text-gray-600">You are signed in with {session.provider === "google" ? "Google" : "GitHub"}.
</p>

        </div>
      )}
    </div>
  )
}
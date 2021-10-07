import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <header className="block">
      <nav className="m-auto w-main flex items-center justify-between">
        <div className="py-10">
          <h1 className="text-3xl tracking-widest">NIKKE</h1>
        </div>
        <div className="flex space-x-3">
          <div className="py-10">
            <a className="text-lg tracking-wider">HOME</a>
          </div>
          <div className="py-10 transition ease-in-out hover:scale-50">
            <a className="text-lg tracking-wider">CATEGORY</a>
          </div>
          <div className="py-10">
            <a href="/auth/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </a>
          </div>
          <div className="py-10">
            <a href="/auth/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

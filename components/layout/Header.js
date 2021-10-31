import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartQuantity = useSelector((state) => state?.cart.length)
  const session = useSession()

  const isLogin = () => {
    let text = (
      <a href="/login" className="py-1 text-lg hover:text-light-orange font-bold cursor-pointer">
        Sign In
      </a>
    )

    if (session.data?.user) {
      text = (
        <a href="profile" className="py-1 text-lg hover:text-light-orange font-bold cursor-pointer">
          {session.data?.user.name}
        </a>
      )
    } else if (session?.loading) {
      text = ''
    }

    return text
  }

  return (
    <header className="m-auto w-main mb-5">
      <div className="border-b border-gray-200 mt-1 flex justify-between">
        <span className="py-1 text-lg font-bold">Welcome</span>
        <div className="text-right">
          <div className="py-1 text-lg hover:text-light-orange font-bold cursor-pointer">
            {isLogin()}
          </div>
        </div>
      </div>
      <nav className="flex items-center justify-between">
        <div className="py-5">
          <a href="/" className="text-3xl tracking-widest font-bold">
            NIKKE
          </a>
        </div>
        <div className="flex space-x-3">
          <div className="py-5">
            <a href='/' className="text-lg tracking-wider">HOME</a>
          </div>
          <div className="py-5 transition ease-in-out hover:scale-50">
            <a href="/products" className="text-lg tracking-wider">PRODUCT</a>
          </div>
          <div className="py-5">
            <a className="flex" href="/carts">
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartQuantity > 0 && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

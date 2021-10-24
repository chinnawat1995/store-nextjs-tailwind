import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required.'),
  password: Yup.string().required('Password is required.')
})

const formOption = { resolver: yupResolver(validationSchema) }

export default function Login() {
  const router = useRouter()

  const { errorMessage, setErrorMessage } = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm(formOption)

  const submit = async (data) => {
    const { error } = await signIn('credentials', { redirect: false, ...data })

    if (error) {
      setErrorMessage(true)
    } else {
      router.push('/')
    }
  }

  return (
    <div className="w-max m-auto px-5 py-7 border border-gray-200 shadow-md rounded-lg">
      <div className="login-form">
        <form onSubmit={handleSubmit(submit)} className="text-lg">
          <div className="form-input flex flex-col space-y-2">
            <label htmlFor="username" className="mr-10">
              Username
            </label>
            <div className="w-full relative">
              <input
                id="username"
                type="text"
                placeholder="Username"
                className={`w-80 border border-gray-300 py-2 px-3 rounded-md focus:outline-none ${
                  errors.username ? 'border-2 border-red-600' : ''
                }`}
                {...register('username')}
              />
              <div className="absolute right-0 top-0 bottom-0 px-2 py-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="text-red-600">{errors.username?.message}</div>
          </div>
          <div className="form-input flex flex-col space-y-2 mt-5">
            <label htmlFor="password" className="mr-10">
              Password
            </label>
            <div className="w-full relative">
              <input
                id="password"
                type="password"
                placeholder="Password"
                className={`w-80 border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:border-gray-400 ${
                  errors.password ? 'border-2 border-red-600' : ''
                }`}
                {...register('password')}
              />
              <div className="absolute right-0 top-0 bottom-0 px-2 py-1 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="text-red-600">{errors.password?.message}</div>
          </div>
          <hr className="my-5" />
          <div className="text-center">
            {errorMessage && (
              <div className="text-red-600">
                Something wrong please try again. <br />
              </div>
            )}
            <div className="mt-3">
              <button
                className="p-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
                type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  let response = {
    props: {}
  }

  if (session) {
    response = {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return response
}

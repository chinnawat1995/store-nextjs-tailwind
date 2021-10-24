import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from '@/lib/axiosConfig'
import {
  NEXT_AUTH_SECRET_KEY,
  NEXT_AUTH_JWT_SECRET_KEY,
  NEXT_AUTH_JWT_SIGNING_PRIVATE_KEY,
  NEXT_AUTH_JWT_ENCRYPTION_KEY
} from '@/config/constant'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        try {
          const { data } = await axios.post(`/auth/login`, {
            username: credentials.username,
            password: credentials.password
          })

          return { token: data?.token, name: credentials.username }
        } catch ({ response }) {
          const { data } = response

          throw new Error(data)
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token
      }

      return token
    },
    async session({ session, token }) {
      session.user.token = token.accessToken

      return session
    }
  },
  session: {
    jwt: true
  },
  secret: NEXT_AUTH_SECRET_KEY,
  jwt: {
    secret: NEXT_AUTH_JWT_SECRET_KEY,
    signingKey: NEXT_AUTH_JWT_SIGNING_PRIVATE_KEY,
    verificationOptions: {
      algorithms: ['HS512']
    },
    encryption: true,
    encryptionKey: NEXT_AUTH_JWT_ENCRYPTION_KEY,
    decryptionOptions: {
      algorithms: ['A256GCM']
    }
  }
})

import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { timingSafeEqual } from 'crypto';

function safeCompare(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) {
    // Still run timingSafeEqual on equal-length buffers to avoid timing leak on length
    timingSafeEqual(ba, ba);
    return false;
  }
  return timingSafeEqual(ba, bb);
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const validUsername = process.env.ADMIN_USERNAME || 'admin';
        const validPassword = process.env.ADMIN_PASSWORD || '';

        if (!validPassword) return null;

        const usernameOk = safeCompare(credentials.username, validUsername);
        const passwordOk = safeCompare(credentials.password, validPassword);

        if (!usernameOk || !passwordOk) return null;

        return {
          id: '1',
          name: 'SVM Admin',
          email: process.env.ADMIN_EMAIL || '',
          role: 'admin',
        };
      },
    }),
  ],
  session: { strategy: 'jwt', maxAge: 8 * 60 * 60 },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as { role?: string }).role;
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { role?: string }).role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

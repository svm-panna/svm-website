import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// In production, store these in your database / environment variables
// NEVER commit real passwords to the repo
const ADMIN_USERS = [
  {
    id: '1',
    username: process.env.ADMIN_USERNAME || 'admin',
    // Generate hash: node -e "const b=require('bcryptjs');console.log(b.hashSync('yourpassword',12))"
    passwordHash: process.env.ADMIN_PASSWORD_HASH || '$2a$12$placeholder.hash.replace.with.real.one',
    name: 'SVM Admin',
    email: process.env.ADMIN_EMAIL || 'admin@swamivivekanandmahavidyalaya.edu.in',
    role: 'admin',
  },
];

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

        const user = ADMIN_USERS.find(
          (u) => u.username === credentials.username,
        );
        if (!user) return null;

        const valid = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!valid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  session: { strategy: 'jwt', maxAge: 8 * 60 * 60 }, // 8 hour session
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

import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth/next';
import connectDB from '../../../../utils/connectDB';
import User from '../../../../models/User';
import { verifyPassword } from '../../../../utils/auth';
import { UserInfo } from '../../../../types/types';

type p = { email: string };
const nextAuthOption: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req: NextApiRequest) {
        const name = credentials?.name;
        const password = credentials?.password;
        const email = credentials?.email;

        try {
          await connectDB();
        } catch (error) {
          throw new Error('something went wrong, connecting to db');
        }

        if (!email || !password) {
          throw new Error('Invalid data');
        }

        const user = await User.findOne({ email: email, name: name });

        if (!user) {
          throw new Error("This user doesn't exits");
        }

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw new Error('Password or Email is wrong');
        }

        return { user, email };
      },
    }),
  ],
};

export default NextAuth(nextAuthOption);

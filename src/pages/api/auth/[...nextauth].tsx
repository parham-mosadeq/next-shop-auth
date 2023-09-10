import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth/next';
import connectDB from '../../../../utils/connectDB';
import User from '../../../../models/User';
import { verifyPassword } from '../../../../utils/auth';

const nextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req): Promise<{ email: string }> {
        const { email, password, name } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error('something went wrong, connecting to db');
        }

        if (!email || !password) {
          throw new Error('Invalid data');
        }

        const user = await User.findOne({ email: email });

        if (!user) {
          throw new Error("This user doesn't exits");
        }

        const isValid = await verifyPassword(password, user.password);

        return { email };
      },
    }),
  ],
};

export default NextAuth(nextAuthOptions);

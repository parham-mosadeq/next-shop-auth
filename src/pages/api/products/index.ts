// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../../utils/connectDB';
import User from '../../../../models/User';
import { getSession } from 'next-auth/react';
import { UserCartType } from '../../../../types/types';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserCartType>
) {
  if (req.method !== 'GET') {
    return;
  }

  try {
    await connectDB();
  } catch (error) {
    res.status(500).json({ status: 'failed', msg: 'Can not connect to db' });
  }

  const userEmail = await getSession({ req });

  const userShoppingCart = await User.findOne({
    email: userEmail?.user?.email,
  });

  if (!userEmail) {
    return res.status(404).json({ status: 'failed', msg: 'User not found!' });
  }

  res.status(200).json(userShoppingCart.shoppingCart);
}

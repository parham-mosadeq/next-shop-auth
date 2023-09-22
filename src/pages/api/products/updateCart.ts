import { getServerSession } from 'next-auth/next';
import User from '../../../../models/User';
import connectDB from '../../../../utils/connectDB';
import type { NextApiRequest, NextApiResponse } from 'next';
import { UserCartType } from '../../../../types/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserCartType>
) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    await connectDB();
  } catch (error) {
    return res
      .status(500)
      .json({ status: 'failed', msg: 'failed to connect to db' });
  }

  const { products } = req.body;
  const { session } = req.body;
  console.log(session);
  // const userEmail = await getServerSession({req});
  // console.log(userEmail);

  const user = await User.findOne({
    email: session,
  });

  // if (!userEmail) {
  //   return res.status(404).json({ status: 'failed', msg: 'User not found!' });
  // }

  user.shoppingCart.push(...products);
  user.save();
  res.status(200).json({ status: 'success', msg: 'added successfully' });
}

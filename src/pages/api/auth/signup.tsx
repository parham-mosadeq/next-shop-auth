import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../../utils/connectDB';
import { hashPassword } from '../../../../utils/auth';
import User from '../../../../models/User';

// todo fix email problem line-38

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    await connectDB();
  } catch (error) {
    res
      .status(500)
      .json({ status: 'failed', msg: 'Can not connect to data Base' });
    return;
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(401).json({ status: 'failed', msg: 'Invalid data' });
    return;
  }

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res
      .status(422)
      .json({ status: 'failed', msg: 'This user already exist' });
  }

  const hashedPass = await hashPassword(password);
  const newUser = await User.create({
    name,
    email: email,
    password: hashedPass,
  });
  return res
    .status(200)
    .json({ status: 'success', msg: 'User created successfully' });
}

export default handler;

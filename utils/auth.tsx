import { hash, compare } from 'bcryptjs';

async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password: string, hashedPassword: string) {
  const isVal = await compare(password, hashPassword);
  return isVal;
}

export { hashPassword, verifyPassword };

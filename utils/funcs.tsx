import { Products } from '../types/types';

export function isInCard(id: number, pid: []): boolean {
  const isValid =
    pid.length > 0 && pid.find((item: Products) => item.id === id);

  if (isValid) {
    return true;
  }

  return false;
}

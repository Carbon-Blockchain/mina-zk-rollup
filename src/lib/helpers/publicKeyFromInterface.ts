import { PublicKey } from 'snarkyjs';
import IPublicKey from '../models/interfaces/IPublicKey';

export default function publicKeyFromInterface(
  publicKey: IPublicKey
): PublicKey {
  let pub = PublicKey.fromJSON({
    g: {
      x: publicKey.g.x,
      y: publicKey.g.y,
    },
  });

  return pub!;
}
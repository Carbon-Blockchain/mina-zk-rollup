// takes a normal ClientSDK keypair and decodes it to snarky compatible elements
import Client from 'mina-signer';
import { Keypair, PublicKey } from 'mina-signer/dist/src/TSTypes';
import { PrivateKey, PublicKey as SnarkyPublicKey } from 'snarkyjs';

// eslint-disable-next-line no-unused-vars
export function toSnarkyPublicKey(publicKey: PublicKey): SnarkyPublicKey {
  // TODO: decode the public key into group point
  // for now I will just randomely generator one
  // {
  //   ('25985006228133515350922737034829672775662619235328657049250360818634002166763');
  // }

  let pub = SnarkyPublicKey.fromJSON({
    g: {
      x: '10403996635208384494000576583154508739074089553813316440641262781046658512525',
      y: '28475752123784524432200374217371603321225482732108015475742377080547605049403',
    },
  });

  return pub!;
}

// eslint-disable-next-line no-unused-vars
export function toSnarkyPrivateKey(keypair: Keypair): PrivateKey {
  let priv = PrivateKey.fromJSON({
    s: '25985006228133515350922737034829672775662619235328657049250360818634002166763',
  });

  return priv!;
}

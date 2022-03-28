import { KeyedMerkleStore } from '../../lib/data_store/KeyedDataStore';
import ITransaction from '../../lib/models/interfaces/ITransaction';
import Account from '../rollup/models/RollupAccount';

/*
! NOTE: This is jsut a dummy data structure and will be improved on in the future
*/
class DataStore {
  static accounts: KeyedMerkleStore<string, Account> | undefined;
  static transactionPool: Array<ITransaction> | undefined;

  constructor() {
    throw new Error(`Use ${this}.getInstance() instead!`);
  }

  static getAccountStore() {
    if (DataStore.accounts === undefined) {
      DataStore.accounts = new KeyedMerkleStore<string, Account>();
    }
    return DataStore.accounts;
  }

  static getTransactionPool() {
    if (DataStore.transactionPool === undefined) {
      DataStore.transactionPool = new Array<ITransaction>();
    }
    return DataStore.transactionPool;
  }
}

export default DataStore;
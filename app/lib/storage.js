import { AsyncStorage } from 'react-native';

export default class Storage {
  static storageKey = '';

  static get() {
    return AsyncStorage.getItem(this.storageKey).then(res => JSON.parse(res));
  }

  static set(value) {
    AsyncStorage.setItem(this.storageKey, JSON.stringify(value));
  }

  static remove() {
    AsyncStorage.setItem(this.storageKey);
  }
}

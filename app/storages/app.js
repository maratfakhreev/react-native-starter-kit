import { AsyncStorage } from 'react-native';

export default class AppStorage {
  static storageKey() {
    return '';
  }

  static get() {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(this.storageKey()).then((res) => {
        return resolve(JSON.parse(res));
      });
    });
  }

  static set(value) {
    AsyncStorage.setItem(this.storageKey(), JSON.stringify(value));
  }

  static remove() {
    AsyncStorage.setItem(this.storageKey());
  }
}

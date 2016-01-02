import React from 'react-native';
import Reflux from 'reflux';
import Config from '../config';
import EntitiesActions from '../actions/entities';

const EntitiesStore = Reflux.createStore({
  listenables: [EntitiesActions],

  onGet() {
    const url = `${Config.apiPath}/entities`;
    const type = 'get';
    const params = '';

    fetch(url, {
      method: type,
      body: params,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((result) => result.json())
    .then((result) => {
      this.trigger(result);
    });
  },

  onCall() {
    this.trigger('Reflux is ready to use');
  }
});

export default EntitiesStore;

import config from '../config';
import { request } from '../lib/request';

export default class EntitiesSource {
  static urlRoot = `${config.apiPath}/entities`;

  static get(user) {
    return request(this.urlRoot, {
      method: 'GET',
      body: ''
    })
    .then(result => result.json());
  }
}

import Alt from '../alt';
import Config from '../config';

export default Alt.createActions(class EntitiesAction {
  fetch() {
    return (dispatch) => {
      const url = `${Config.apiPath}/entities`;

      dispatch();
      fetch(url, {
        method: 'get',
        body: '',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(data => data.json())
      .then(data => this.set(data))
      .catch(() => this.set('entities data is empty'));
    };
  }

  set(data) {
    return data;
  }

  call() {
    return 'entities are ready to use';
  }
});

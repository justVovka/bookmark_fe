class ApiService {
  _url = 'https://bookmark-71f45.firebaseio.com/books.json';

  getData = async () => {
    return await fetch(this._url).then((data) => data.json());
  };
}

export default ApiService;

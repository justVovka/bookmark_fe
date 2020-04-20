
class ApiService {
  _url = 'http://localhost:8080/api/books';

  getData = async () => {
    return await fetch(this._url)
      .then((data) => data.json());
  }
}

export default ApiService;
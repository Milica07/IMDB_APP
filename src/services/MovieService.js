import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies/',
};

class MovieService extends ApiService {
  getMovies = async () => {
    const { data } = await this.apiClient.get(`${ENDPOINTS.MOVIES}`);
    return data;
}

  getMovie = async (id) => {
    const {data} = await this.apiClient.get(`${ENDPOINTS.MOVIES}/${id}`);
    return data;
}
}

const movieService = new MovieService();
export default movieService;


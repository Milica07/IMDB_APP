import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies/',
};

class MovieService extends ApiService {
  getMovies = async ({page, search}) => {
    const { data } = await this.apiClient.get(`${ENDPOINTS.MOVIES}` + `?page=${page}` + `&search=${search}`);
    return data;
}

  getMovie = async (id) => {
    const {data} = await this.apiClient.get(`${ENDPOINTS.MOVIES}${id}`);
    return data;
}

  createMovie = async (movieData) => {
    const { data } = await this.apiClient.post(`${ENDPOINTS.MOVIES}`, movieData);
    return data;
}

}

const movieService = new MovieService();
export default movieService;


import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies/',
};

class MovieService extends ApiService {
  getMovies = async ({page, search, genre}) => {
    let url = `${ENDPOINTS.MOVIES}` + `?page=${page}` + `&search=${search}`;
    if(genre){
      url += `&genre=${genre}`
    }
    const { data } = await this.apiClient.get(url);
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

  getRelatedMovies = async ({genre}) => {
    let url = `${ENDPOINTS.MOVIES}`
    if(genre){
      url += `?genre=${genre}`
    }
    const { data } = await this.apiClient.get(url);
    return data;
}

  likeMovie = async (id) => {
    const { data } = await this.apiClient.patch(`${ENDPOINTS.MOVIES}${id}/like`, {});
    return data;
}

  dislikeMovie = async (id) => {
    const { data } = await this.apiClient.patch(`${ENDPOINTS.MOVIES}${id}/dislike`, {});
    return data;
}

}

const movieService = new MovieService();
export default movieService;


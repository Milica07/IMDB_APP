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

  getPopular = async () => {
    const { data } = await this.apiClient.get(`${ENDPOINTS.MOVIES}popular`);
    return data;
}

  postComment = async ({id, content}) => {
    const { data } = await this.apiClient.post(`${ENDPOINTS.MOVIES}${id}/comment`, {content: content});
    return data;
}

  getComments = async ({id, limit}) => {
    let url = `${ENDPOINTS.MOVIES}${id}/comments`;
    if(limit){
      url += `?limit=${limit}`
    }
    const data = await this.apiClient.get(url);
    return data;
};

  getWatchList = () => {
    return this.apiClient.get(`api/watch-list`);
};

  addRemoveWatchList = (id) => {
    return this.apiClient.patch(`api/watch-list/${id}/add-remove`, {}); 
};

  updateWatched = (id) => {
    return this.apiClient.patch(`api/watch-list/${id}/watched`, {});
};

}

const movieService = new MovieService();
export default movieService;


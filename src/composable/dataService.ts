import type {
  ISearchFormData,
  IFiltersData,
  IAdvert,
  IUserData,
  INewAdvertData,
  INewAdvertResponse
} from '@/types/serverData.types';
import axios from 'axios';
import { createRequestString } from '@/helpers/filtersParser';
import type { LoginData } from '@/types/store.types';

class DataService {
  api = {
    baseURL: 'https://musicmates.ru:4040/',
    getAdverts: 'api/search/adverts?',
    getFiltersData: 'api/search/filtersData',
    getAdvert: 'api/adverts',
    login: 'api/auth/login',
    new: 'api/adverts/new',
    checkAuth: 'api/auth/auth'
  };

  getData = async (url: string) => {
    const response = await axios.get(url);
    if (response) {
      return response.data;
    } else {
      throw new Error('Не удалось получить данные');
    }
  };

  async getFiltersData() {
    const url = `${this.api.baseURL}${this.api.getFiltersData}`;
    const filtersData = await this.getData(url);
    return filtersData as IFiltersData;
  }

  async getAdverts(userChoices: ISearchFormData) {
    const requestString = createRequestString(userChoices);
    const url = `${this.api.baseURL}${this.api.getAdverts}${requestString}`;
    const data = await this.getData(url);
    return data as IAdvert[];
  }

  async getAdvert(id: string) {
    const url = `${this.api.baseURL}${this.api.getAdvert}/${id}`;
    const data = await this.getData(url);
    return data as IAdvert;
  }

  async login(loginData: LoginData) {
    const url = `${this.api.baseURL}${this.api.login}`;
    const response = await axios.post(url, loginData);
    return response.data as IUserData;
  }

  async checkAuth(token: string) {
    const url = `${this.api.baseURL}${this.api.checkAuth}`;
    const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
    return response.data as IUserData;
  }

  async createAdvert(newAdvertData: INewAdvertData, token: string) {
    const url = `${this.api.baseURL}${this.api.new}`;
    const response = await axios.post(url, newAdvertData, {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    });
    return response.data as INewAdvertResponse;
  }
}

export const dataService = new DataService();

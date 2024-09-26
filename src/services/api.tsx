import axios from 'axios';
import IRepo from '../interface/IRepo';

export const instance = axios.create({
  baseURL: 'https://api.github.com'
});

export const fetchRepo = async (repoName: string): Promise<IRepo> => {
  const { data } = await instance.get(`/repos/${repoName}`);
  return data;
};
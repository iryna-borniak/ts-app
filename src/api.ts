import { Job } from './types/Job';

const API_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export const getAllJobs = async (): Promise<Job[]> => {
  let response;

  try {
    response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error();
    }
  } catch (error: any) {
    throw new Error('Cant fetch jobs from server');
  }
   
  return response.json();
} 

import axios from "axios"
import { API_KEY } from "./env";

// const link = `https://api.openweathermap.org/data/2.5/weather?lat=51.5055&lon=31.2849&appid=${API_KEY}`

export const getData = async (link: string) => {
    try {
      const mainRes = await axios(`${link}`);
      return mainRes.data;
    } catch (e) {
      console.log(e);
    }
  };
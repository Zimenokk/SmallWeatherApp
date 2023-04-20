import { useEffect, useState } from "react";
import { getData } from "../../Network/Actions";
import { API_KEY } from "../../Network/env";
import { WeatherDateHourly, WeatherRequest } from "../Utils/ApiModels/MainApiModel";

export type UseGetWeatherOutput = [
  isLoading: boolean,
  weatherData: WeatherRequest,
  weatherDataHourly: WeatherDateHourly,
  error: string
];

export const useGetWeather = ():UseGetWeatherOutput => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherByHourLink, setWeatherByHourLink] = useState(
    `https://api.openweathermap.org/data/2.5/forecast?q=Chernihiv&units=metric&appid=${API_KEY}`
  );
  const link = `https://api.openweathermap.org/data/2.5/weather?q=Chernihiv&units=metric&appid=${API_KEY}`;
  const [error, setError] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherRequest>(
    {} as WeatherRequest
  );
  const [weatherDataHourly, setWeatherDataHourly] = useState<WeatherDateHourly>(
    {} as WeatherDateHourly
  );

  const getWeatherData = async () => {
    setIsLoading(true);
    try {
      await getData(link).then((res) => setWeatherData(res));
      await getData(weatherByHourLink).then((res) => setWeatherDataHourly(res));
    } catch (e) {
      console.log(e);
      setError(`${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    getWeatherData()
  }, [link, weatherByHourLink])

  return [isLoading, weatherData, weatherDataHourly, error]
};

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weatherData: null,
  cityName: "Bhubaneswar",
  cityResults: [],
  isLoading: false,
  error: null,
  forecastData: null
};

const weatherSlice = createSlice(
  {
    name: "weather",
    initialState,
    reducers:{
      setCityName: (state,action) => {
        state.cityName = action.payload
      }
    },
    extraReducers: (builder) => {
      builder
        // Fetched City Data

        .addCase(fetchCity.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchCity.fulfilled, (state, action) => {
          state.isLoading = false;
          state.cityResults = action.payload;
        })
        .addCase(fetchCity.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
        
        // Fetch weather data
        .addCase(fetchWeatherByCoordinates.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchWeatherByCoordinates.fulfilled, (state, action) => {
          state.isLoading = false;
          state.weatherData = action.payload;
        })
        .addCase(fetchWeatherByCoordinates.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })

        // Fetch Forecast data
        .addCase(fetchForecastByCoordinates.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchForecastByCoordinates.fulfilled, (state, action) => {
          state.isLoading = false;
          state.forecastData = action.payload;
        })
        .addCase(fetchForecastByCoordinates.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  }
)

export const fetchCity = createAsyncThunk(
  'weather/fetchCity',
  async (query) => {
    try {
      const response = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
          q: query,
          limit:"10",
          appid: "a50afa1dcea7286614a3fdecc403bade"
        }
      })
      console.log(response.data);
      return response.data
    } 
    catch(error){
      console.error(error);
    }
  }
);

export const fetchWeatherByCoordinates = createAsyncThunk(
  'weather/fetchWeatherByCoordinates',
  async ({ lat, lon }) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat,
          lon,
          appid: 'a50afa1dcea7286614a3fdecc403bade', 
        },
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
       console.log(error)
    }
  }
);

export const fetchForecastByCoordinates = createAsyncThunk(
  'weather/fetchForecastByCoordinates',
  async ({ lat, lon }) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          lat,
          lon,
          appid: 'a50afa1dcea7286614a3fdecc403bade', 
        },
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
       console.log(error)
    }
  }
);

export default weatherSlice.reducer

export const {setCityName} = weatherSlice.actions

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weatherData: null,
  city: "Bhubaneswar",
  cityResults: [],
  cityCoordinates: {lat: "20.2960", lon: "85.8246"},
  isLoading: false,
  error: null,
};

const weatherSlice = createSlice(
  {
    name: "weather",
    initialState,
    reducers:{
      
    },
    extraReducers: (builder) => {
      builder
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


export default weatherSlice.reducer

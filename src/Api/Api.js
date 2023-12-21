import axios from 'axios'

const BACKEND_API = "https://qtify-backend-labs.crio.do"

export const fetchTopAlbums = async()=>{
   try{
        const response = await axios.get(BACKEND_API+'/albums/top')
        return response.data}
    catch(e){
        console.log("Error Fetching Top Albums");
}
}

export const fetchNewAlbums = async()=>{
    try{
     const response = await axios.get(BACKEND_API+'/albums/new')
     return response.data}
    catch(e){
        console.log("Error Fetching New Albums");
    }
}

export const fetchSongs = async()=>{
    try{
        const response = await axios.get(BACKEND_API+'/songs')
        return response.data}
    catch(e){
        console.log("Error Fetching Songs");
    }
}

export const fetchGenre = async()=>{
    try{
        const response = await axios.get(BACKEND_API+'/genres')
        return response.data}
    catch(e){
        console.log("Error Fetching genres");
    }
 }
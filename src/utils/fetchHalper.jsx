import axios from "axios"

const headerOptions = {
    Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}` 
}

export async function fetchImages(url){

    try {
        const response = await axios.get(`https://api.unsplash.com/${url}`,{
           headers:headerOptions 
        })

        return response.data
        
    } catch (error) {
        console.log(error.message);
        
    }

}
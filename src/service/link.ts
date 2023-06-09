import axios from "axios"

export const shortenUrl = async (longUrl: string) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', longUrl);
    
    const options = {
      method: 'POST',
      url: 'https://url-shortener-service.p.rapidapi.com/shorten',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': process.env["NEXT_PUBLIC_RAPID_API_KEY"],
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
      data: encodedParams,
    };
    
    const response = await axios.request(options);
    return response.data.result_url
}


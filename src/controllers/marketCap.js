const axios= require('axios')
//key, url and query string 
const key="ceac3276-b187-4407-86f7-b10e62b7f3d0",
      url= "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      queryString="?CMC_PRO_API_KEY=" + key + "&start=1&limit=5&convert=USD ",
      
      fetchParams= url+queryString;

export const getData=async()=>{
  const data = await axios.get(fetchParams)
  console.log(data.data)
  return data.data
}

export default getData;
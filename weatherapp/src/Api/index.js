const url = "https://api.weatherapi.com/v1/current.json?key=891cb471cc114860b7b140433241906"


export const apicall = async (city) => {
     const responce = await fetch(`${url}&q=${city}&aqi=yes`)
  
     return await responce.json();
};

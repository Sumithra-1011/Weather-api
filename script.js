const searchbox=document.getElementById('searchbox')
const cityy=document.getElementById('city')
const searchbtn=document.querySelector('#search-group button')
const temp=document.getElementById('temp')
const image=document.querySelector('.weather-img img')
const speed=document.querySelector('#speed')
const humidity=document.querySelector('#hu')






async function getweather(city){
let weather= 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=402a78c49ee3fac741f54230291e4030&units=metric';

   let object=await fetch(weather)
   if(object.status == 404){
    document.querySelector(".error").style.display="block"
    document.querySelector(".weather-img").style.display="none"
    document.querySelector(".weather-text").style.display="none"

   }else{
    let response= await object.json();
   console.log(response)
   temp.innerHTML=Math.round(response.main.temp)+'°C'
   humidity.innerHTML=response.main.humidity+'%'
   speed.innerHTML=response.wind.speed+'km/h'
   cityy.innerHTML=response.name

   if(response.weather[0].main =="Clouds"){
    image.src="images/clouds.png"
   }
   else if(response.weather[0].main =="Clear"){
    image.src="images/clear.png"
   }
   else if(response.weather[0].main =="Rain"){
    image.src="images/rain.png"
  }
  else if(response.weather[0].main =="Drizzle"){
    image.src="images/drizzle.png"
  }
  else if(response.weather[0].main =="Mist"){
    image.src="images/mist.png"
  }
  else if(response.weather[0].main=="Haze"){
    image.src="images/haze.png"
  }
  document.querySelector(".weather-img").style.display="block"
  document.querySelector(".weather-text").style.display="flex"
  document.querySelector(".error").style.display="none"


   }
   



}



searchbtn.addEventListener("click",()=>{
    getweather(searchbox.value)
})




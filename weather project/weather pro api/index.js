
const apiKey="31c9ba7475533c677e7721e16b250910";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox= document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");

async function checkWeather(city){
    const response= await fetch(apiUrl +city+`&appid=${apiKey}` );
    var  data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed;
    


       // for Displaying local time based on the city's timezone
    //    const localTime = new Date(Date.now() + (data.timezone * 1000)); // Convert timezone offset to milliseconds
    //    const hours = localTime.getHours().toString().padStart(2, '0');
    //    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    //    const timeString = `${hours}:${minutes}`;
    //    document.querySelector(".time").innerHTML = `Local Time: ${timeString}`;
   
     } 


   

searchbutton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})



// const apiKey = "31c9ba7475533c677e7721e16b250910";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

// const searchBox = document.querySelector(".search input");
// const searchButton = document.querySelector(".search button");

// async function checkWeather(city) {
//   try {
//     const response = await fetch(`${apiUrl}&q=${encodeURIComponent(city)}&appid=${apiKey}`);
//     if (!response.ok) {
//       throw new Error('City not found!');
//     }
//     const data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = data.main.temp + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed;

//   } catch (error) {
//     console.error('Error:', error);
//     alert('City not found! Please try again.');
//   }
// }

// searchButton.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });

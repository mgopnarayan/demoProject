
const submitBtn=document.getElementById('btnsubmit');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===''){
     city_name.innerText="Plz Enter City Name Before Search";  
     datahide.classList.add('data_hide');
     temp_status.innerText='';
     temp_val.innerText='0'; 
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=75b0429d8eb8794b253a80867fbc2d0a`;
            const response= await fetch(url); 
           const data=await response.json();
           const arrData=[data];
           
           city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
           temp_val.innerText=arrData[0].main.temp;
          const tempMood=arrData[0].weather[0].main;
        //    console.log(arrData[0].main.temp)
        //    console.log(arrData[0].weather[0].main)
        if (tempMood == "Sunny") {
            temp_status.innerHTML =
              "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
          } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
          } else if (tempMood == "Rainy") {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
          } else {
            temp_status.innerHTML =
              "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
          }
          datahide.classList.remove('data_hide');
           
        }
        catch{
            city_name.innerText="Plz Enter City Name Properly";
            datahide.classList.add('data_hide');
        }
     }
    }
    
    
submitBtn.addEventListener('click',getInfo)
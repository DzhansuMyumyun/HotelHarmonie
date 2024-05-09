(function(){
    'use strict'
    let fotos = ['images/voorzieningen2.jpg', 'images/voorzieningen3.jpg', 'images/sfeerfoto3.jpg'];

    let toonFotos = document.getElementById('fotos');
    let i = 0;
    setInterval(function(){
        toonFotos.src = fotos[i];  
        
        i = i + 1;
        if(i == fotos.length){
            i = 0;
        }
    }, 5000);

    //het weer
    //(https://github.com/TylerPottsDev/weather-app-js)
    //(https://www.youtube.com/watch?v=oCoNhWy1FlQ&ab_channel=DesignWeb)
    //(https://www.youtube.com/watch?v=KqZGuzrY9D4&t=1730s&ab_channel=CodeExplained)
    let link = `http://api.openweathermap.org/data/2.5/weather?q=Gent&appid=564ca13debd24039ea5e52d86042c214`;
    let request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function(){
        let obj = JSON.parse(this.response);
        console.log(obj);

        document.getElementById('weather').innerHTML = obj.weather[0].description;
        document.getElementById('icon').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon+".png";
        document.getElementById('temp').innerHTML = `${Math.round(obj.main.temp - 273.15)}<span>°c</span>`;

        let hilow = document.querySelector('.hi-low');
        hilow.innerText = `${Math.round(obj.main.temp_min - 273.15)}°c / ${Math.round(obj.main.temp_max - 273.15)}°c`;

        let now = new Date();
        let date = document.querySelector('.card .date');
        date.innerText = dateBuilder(now);

        function dateBuilder (d) {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
          
            return `${day} ${date} ${month} ${year}`;
        };   
  
    };
    if(request.status==200){
        console.log('ERROR');
    }
    request.send();

    

})();
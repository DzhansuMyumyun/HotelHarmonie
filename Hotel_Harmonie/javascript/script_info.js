(function(){
  'use strict'

  const date = new Date();

  const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

      
    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    

    document.querySelector(".date h2").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";
  
    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    } 

      

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today">${i}</div>`;
        
      } else {

        if( i===7 || i===8 || i===9 || i===25 || i===26 || i===27){
          days += `<div class="niet">${i}</div>`; 
        }
        else{
          days += `<div>${i}</div>`; 
        }
        
        
        
        
      }
    }


    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }

  };

  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });


  renderCalendar(); 


  //info halen
  let titel = localStorage.getItem('myTitel');
  let image = localStorage.getItem('myImages');
  let img1 = localStorage.getItem('myImg1');
  let img2 = localStorage.getItem('myImg2');
  let img3 = localStorage.getItem('myImg3');
  let img4 = localStorage.getItem('myImg4');
  let info = localStorage.getItem('myInfo');

  let totPrijs = localStorage.getItem('myPrijs');
  document.getElementById('prijs').innerText = totPrijs;
  
  document.getElementById('titel').innerText = titel;
  document.getElementById('subTitel').innerText = titel;
  document.getElementById('image1').src = image;
  document.getElementById('image2').src = img1;
  document.getElementById('image3').src = img2;
  document.getElementById('image4').src = img3;
  document.getElementById('image5').src = img4;

  document.getElementById('info').innerText = info;


  //afbeeldingen 
  document.getElementById('image2').addEventListener('click', (e) =>{
    let mainImg = document.getElementById('image1');
    let selectImg = document.getElementById('image2');
    mainImg.src = selectImg.src;
  });

  document.getElementById('image3').addEventListener('click', (e) =>{
    let mainImg = document.getElementById('image1');
    let selectImg = document.getElementById('image3');
    mainImg.src = selectImg.src;
  });
 
  document.getElementById('image4').addEventListener('click', (e) =>{
    let mainImg = document.getElementById('image1');
    let selectImg = document.getElementById('image4');
    mainImg.src = selectImg.src;
  });

  document.getElementById('image5').addEventListener('click', (e) =>{
    let mainImg = document.getElementById('image1');
    let selectImg = document.getElementById('image5');
    mainImg.src = selectImg.src;
  });

})();




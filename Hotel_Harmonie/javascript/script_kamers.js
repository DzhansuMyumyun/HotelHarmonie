(function(){
    'use strict';


    //filter functie 
    let kamer1 = document.getElementById('kamer1');
    let kamer2 = document.getElementById('kamer2');
    let kamer3 = document.getElementById('kamer3');
    let kamer4 = document.getElementById('kamer4');
    let suite1 = document.getElementById('suite1');
    let suite2 = document.getElementById('suite2');

    let kamer = document.getElementById('kamer');
    let suite = document.getElementById('suite');
    let all = document.getElementById('all');

    kamer.addEventListener('click', (e) =>{
        suite1.style.display = 'none';
        suite2.style.display = 'none';
        kamer1.style.display = 'block';
        kamer2.style.display = 'block';
        kamer3.style.display = 'block';
        kamer4.style.display = 'block';
        all.classList.remove('kamer-clicked');
        kamer.classList.add('kamer-clicked');
        suite.classList.remove('kamer-clicked');

    });

    suite.addEventListener('click', (e) =>{
        suite1.style.display = 'block';
        suite2.style.display = 'block';
        kamer1.style.display = 'none';
        kamer2.style.display = 'none';
        kamer3.style.display = 'none';
        kamer4.style.display = 'none';
        all.classList.remove('kamer-clicked');
        kamer.classList.remove('kamer-clicked');
        suite.classList.add('kamer-clicked');
    });

    all.addEventListener('click', (e) =>{
        suite1.style.display = 'block';
        suite2.style.display = 'block';
        kamer1.style.display = 'block';
        kamer2.style.display = 'block';
        kamer3.style.display = 'block';
        kamer4.style.display = 'block';
        all.classList.add('kamer-clicked');
        kamer.classList.remove('kamer-clicked');
        suite.classList.remove('kamer-clicked');
    });



    //informatie per kamer
    let eersteKamer = document.getElementById('eersteKamer');
    let tweedeKamer = document.getElementById('tweedeKamer');
    let derdeKamer = document.getElementById('derdeKamer');
    let vierdeKamer = document.getElementById('vierdeKamer');
    let vijfdeKamer = document.getElementById('vijfdeKamer');
    let zesdeKamer = document.getElementById('zesdeKamer');

    eersteKamer.addEventListener('click', kamerEen);
    tweedeKamer.addEventListener('click', kamerTwee);
    derdeKamer.addEventListener('click', kamerDrie);
    vierdeKamer.addEventListener('click', kamerVier);
    vijfdeKamer.addEventListener('click', kamerVijf);
    zesdeKamer.addEventListener('click', kamerZes);

    let eenKamer = document.getElementById('eersteKamer1');
    let tweeKamer = document.getElementById('tweedeKamer2');
    let drieKamer = document.getElementById('derdeKamer3');
    let vierKamer = document.getElementById('vierdeKamer4');
    let vijfKamer = document.getElementById('vijfdeKamer5');
    let zesKamer = document.getElementById('zesdeKamer6');

    eenKamer.addEventListener('click', kamerEen);
    tweeKamer.addEventListener('click', kamerTwee);
    drieKamer.addEventListener('click', kamerDrie);
    vierKamer.addEventListener('click', kamerVier);
    vijfKamer.addEventListener('click', kamerVijf);
    zesKamer.addEventListener('click', kamerZes);

    function kamerEen(){
        let titel = 'Superior tweepersoonskamer';
        let images = 'images/kamer1.jpg';
        let img1 = 'images/soort1.jpg';
        let img2 = 'images/kamer1.jpg';
        let img3 = 'images/soort7.jpg';
        let img4 = 'images/kamer5.jpg';
        let info = 'Geniet van de ruime Superior kamer met 1 tweepersoonsbed of 2 eenpersoonsbedden. De kamer beschikt verder over een bureau, 42 inch tv, gratis WiFi, koffie- en theefaciliteiten, koelkast, kluis en badkamer met regendouche.';
        let prijs = 90;

        localStorage.setItem('myTitel', titel);
        localStorage.setItem('myImages', images);
        localStorage.setItem('myImages', images);
        localStorage.setItem('myImg1', img1);
        localStorage.setItem('myImg2', img2);
        localStorage.setItem('myImg3', img3);
        localStorage.setItem('myImg4', img4);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myPrijs', prijs);

    };

    
    function kamerTwee(){ 
        let titel = 'Privilege tweepersoonskamer';
        let images = 'images/kamer2.jpg';
        let img1 = 'images/soort1.jpg';
        let img2 = 'images/kamer2.jpg';
        let img3 = 'images/soort8.jpg';
        let img4 = 'images/kamer5.jpg';
        let info = 'Ervaar de comfortabele Privilege kamer met 1 tweepersoonsbed of 2 eenpersoonsbedden, vooral gelegen op de 9de of 10de etage. Tevens geniet u van deze extra\'s: inloopdouche, Nespresso, badjas, slippers, printer, krant naar keuze, gratis WiFi en mediahub.';
        let prijs = 60;

        localStorage.setItem('myTitel', titel);
        localStorage.setItem('myImages', images);
        localStorage.setItem('myImg1', img1);
        localStorage.setItem('myImg2', img2);
        localStorage.setItem('myImg3', img3);
        localStorage.setItem('myImg4', img4);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myPrijs', prijs);
        

    };
      
    function kamerDrie(){
        let titel = 'Privilege kamer met uitzicht op de stad';
        let images = 'images/kamer3.jpg';
        let img1 = 'images/soort4.jpg';
        let img2 = 'images/kamer3.jpg';
        let img3 = 'images/soort1.jpg';
        let img4 = 'images/kamer5.jpg';
        let info = 'Geniet van onze Privilege tweepersoonskamers met uitzicht op het stadscentrum met allerlei leuke extra\'s, zoals een inloopdouche, Nespresso koffiezetapparaat, badjas, slippers, printer, selectie van kranten, gratis WiFi en een mediahub.';
        let prijs = 115;
        
        localStorage.setItem('myTitel', titel);
        localStorage.setItem('myImages', images);
        localStorage.setItem('myImg1', img1);
        localStorage.setItem('myImg2', img2);
        localStorage.setItem('myImg3', img3);
        localStorage.setItem('myImg4', img4);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myPrijs', prijs);

        window.location.href = 'info.html';
    };
        

    function kamerVier(){
        let titel = 'Superior kamer met 1 eenpersoonsbed';
        let images = 'images/kamer4.jpg';
        let img1 = 'images/soort4.jpg';
        let img2 = 'images/kamer4.jpg';
        let img3 = 'images/soort10.jpg';
        let img4 = 'images/kamer5.jpg';
        let info = 'Elegante superior kamer van 28 m² met 2 eenpersoonsbedden, gelegen op de begane grond van het hotel. De badkamer heeft een douche met speciale apparatuur voor mindervaliden. In het hele hotel is gratis WiFi beschikbaar.';
        let prijs = 168;
        
        localStorage.setItem('myTitel', titel);
        localStorage.setItem('myImages', images);
        localStorage.setItem('myImg1', img1);
        localStorage.setItem('myImg2', img2);
        localStorage.setItem('myImg3', img3);
        localStorage.setItem('myImg4', img4);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myPrijs', prijs);

        window.location.href = 'info.html';
    };

    function kamerVijf(){
        let titel = 'Deluxe Suite met een tweepersoonsbed';
        let images = 'images/kamer5.jpg';
        let img1 = 'images/soort5.jpg';
        let img2 = 'images/kamer5.jpg';
        let img3 = 'images/soort11.jpg';
        let img4 = 'images/kamer2.jpg';
        let info = 'In de Deluxe Suite heeft u alle faciliteiten van een Privilege kamer zoals een inloopdouche, laptopkluis, Nespresso apparaat en gratis WiFi, en daarnaast een 42 inch lcd tv met mediahub, tweepersoonsbubbelbad en zithoek met een geweldig uitzicht.';
        let prijs = 150;
        
        localStorage.setItem('myTitel', titel);
        localStorage.setItem('myImages', images);
        localStorage.setItem('myImg1', img1);
        localStorage.setItem('myImg2', img2);
        localStorage.setItem('myImg3', img3);
        localStorage.setItem('myImg4', img4);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myPrijs', prijs);

        window.location.href = 'info.html';
    };


    function kamerZes(){
        let titel = 'Executive Suite met een tweepersoonsbed';
        let images = 'images/kamer6.jpg';
        let img1 = 'images/soort6.jpg';
        let img2 = 'images/kamer6.jpg';
        let img3 = 'images/soort12.jpg';
        let img4 = 'images/kamer5.jpg';
        let info = 'In de Executive suite, op de 9de en 10de etage, beschikt u naast de luxe van de Deluxe Suite over een ruime living met zithoek en vergader-/eettafel, aparte slaapkamer, 52 inch lcd tv met mediahub, gratis WiFi en luxe badkamer met tweepersoonsbubbelbad.';
        let prijs = 155;

        localStorage.setItem('myTitel', titel);
        localStorage.setItem('myImages', images);
        localStorage.setItem('myImg1', img1);
        localStorage.setItem('myImg2', img2);
        localStorage.setItem('myImg3', img3);
        localStorage.setItem('myImg4', img4);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myInfo', info);
        localStorage.setItem('myPrijs', prijs);

        window.location.href = 'info.html';
    };



})();
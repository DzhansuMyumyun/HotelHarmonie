(function(){
    'use strict';
    
        const incheckenID = document.getElementById('inchecken');
        const uitcheckenID = document.getElementById('uitchecken');
        const hoeveelKamersID = document.getElementById('hoeveelKamers');
        const volwID = document.getElementById('volw');
        const kindID = document.getElementById('kind');
        const kortingPrijsID = document.getElementById('kortingPrijs');
        const servicesPrijsID  = document.getElementById('servicesPrijs'); 
        const ontbijtID = document.getElementById('ontbijt');
        const halfpensionID = document.getElementById('halfpension');
        const prijsID = document.getElementById('prijs');
        const kortingscodeID = document.getElementById('kortingscode');
        const kamerPrijsID = document.getElementById('kamerPrijs');
        const dagenID = document.getElementById('dagen');
        const totKamersID = document.getElementById('totKamers');

        let totPrijs = localStorage.getItem('myPrijs');
        let titel = localStorage.getItem('myTitel');
        let image = localStorage.getItem('myImages');
    
        document.getElementById('titel').innerText = titel;
        document.getElementById('kamer').style.backgroundImage = "url("+image+")";

        let inchecken;
        let uitchecken;
        let tijd;
        let selectKamer = 1;
        let totaalPrijs;
        let services;

        //prijsID.innerText = totPrijs;
        kamerPrijsID.innerText = 0;
        servicesPrijsID.innerText = 'geen';
        kortingPrijsID.innerText = 'geen';
        dagenID.disabled = true;
        ontbijtID.disabled = true;
        halfpensionID.disabled = true;
        uitcheckenID.disabled = true;
        hoeveelKamersID.disabled = true;
        volwID.disabled = true;
        kindID.disabled = true;
        kortingscodeID.disabled = true ;
    
        incheckenID.addEventListener('change', (e) =>{      
            uitcheckenID.disabled = false;
            console.log(incheckenID.value);
        });
  
        uitcheckenID.addEventListener('change', (e) =>{ 
            if(uitcheckenID.value <= incheckenID.value){
                alert('Kies een correcte datum')
            } 
            else{
                hoeveelKamersID.disabled = false;
                volwID.disabled = false;
                kindID.disabled = false;
                kortingPrijsID.innerText = 'geen';
                servicesPrijsID.innerText = 'geen';
                
    
                ontbijtID.checked = false;
                halfpensionID.checked = false;
                hoeveelKamersID.value = 0;
                kamerPrijsID.innerText = 0 + ' €';
                totKamersID.innerText = '('+0+')';
        
        
                inchecken = new Date(incheckenID.value);
                uitchecken = new Date (uitcheckenID.value);
                tijd = uitchecken.getDate() - inchecken.getDate();
        
                document.getElementById('totNachten').innerText = '('+ tijd + ')';
                dagenID.value = tijd;   
                totaalPrijs = tijd * totPrijs;
                prijsID.innerText = totaalPrijs;
                document.getElementById('nachtPrijs').innerText = totaalPrijs + ' €';
            }

        });
    
        
    
        hoeveelKamersID.addEventListener('change',(e) =>{
            selectKamer = hoeveelKamersID.value;
            let prijsKamer = selectKamer * totaalPrijs;
            prijsID.innerText = prijsKamer;
            kamerPrijsID.innerText = selectKamer * totPrijs + ' €';
            totKamersID.innerText = '('+selectKamer+')';
            ontbijtID.disabled = false;
            halfpensionID.disabled = false;
            kortingscodeID.disabled = false;
            kortingPrijsID.innerText = 'geen';

    
        });

  


    
        ontbijtID.addEventListener('change',(e) =>{
            halfpensionID.checked = false;
            if(ontbijtID.checked === true){
                services = 5;
                totaalPrijs = (selectKamer * totPrijs * tijd) + services;
                prijsID.innerText = totaalPrijs;
                servicesPrijsID.innerText = services + ' €';
                
            }else{
                services = 0;
                totaalPrijs = (selectKamer * totPrijs * tijd) + services;
                prijsID.innerText = totaalPrijs;
                servicesPrijsID.innerText = 'geen';
            }
            kortingPrijsID.innerText = 'geen';

        });
    
        halfpensionID.addEventListener('change',(e) =>{
            ontbijtID.checked = false; 
            if( halfpensionID.checked === true){
                ontbijtID.checked === false 
                services = 10;
                totaalPrijs = (selectKamer * totPrijs * tijd) + services;
                prijsID.innerText = totaalPrijs;
                servicesPrijsID.innerText = services + ' €';
            }else{
                services = 0;
                totaalPrijs = (selectKamer * totPrijs * tijd) + services;
                prijsID.innerText = totaalPrijs;
                servicesPrijsID.innerText = 'geen';
            }
            kortingPrijsID.innerText = 'geen';

        });
        
    
    
        document.getElementById('controleren').addEventListener('click', (e) =>{

            if(halfpensionID.checked === false && ontbijtID.checked === false){
                services = 0;
                totaalPrijs = (selectKamer * totPrijs * tijd) + services;
                prijsID.innerText = totaalPrijs;
                servicesPrijsID.innerText = 'geen';
            }

            let korting = kortingscodeID;
            let percent = 50/100;
            if(korting.value === '1234'){
                prijsID.innerText = (totaalPrijs - (totaalPrijs * percent));
                kortingPrijsID.innerText = '50%';
                korting.value = '';
    
            }else{
                alert('Kortingscode is niet juist!')
                kortingPrijsID.innerText = 'geen';
                
            }
            
        },true);
    
        
        
        //form
        const voornaam = document.getElementById('voornaam');
        const naam = document.getElementById('achternaam');
        const email = document.getElementById('email');
        const gsm = document.getElementById('telefoon');
        const adres = document.getElementById('adres');
        const stad = document.getElementById('stad');
        const land = document.getElementById('land');
        const zip = document.getElementById('zip');
        const check = document.getElementById('uitcheck');

        check.addEventListener('click', (e) =>{
            e.preventDefault();
            if(voornaam.value != '' && naam.value != '' && email.value != '' && gsm.value != '' && adres.value != '' &&  stad.value != '' && land.value != '' && zip.value != ''){
                alert(` Beste ${voornaam.value} ${naam.value}. 
                        Email: ${email.value} 
                        Gsm: ${gsm.value}
                        Adres: ${adres.value}
                        Stad: ${stad.value}
                        Land: ${land.value}
                        Zip: ${zip.value}`);
                        
                voornaam.value = '';
                naam.value = '';
                gsm.value = '';
                email.value = '';
                adres.value = '';
                stad.value = '';
                land.value = '';
                zip.value = '';

               
            }else{
                if(voornaam.value == null || voornaam.value == ''){
                    voornaam.style.borderColor = "#FF533D"; 
                    voornaam.addEventListener('blur', (e) =>{
                        if(voornaam.value == null || voornaam.value == ''){
                            voornaam.style.borderColor = "#FF533D";
                        }else{
                            voornaam.style.borderColor = "#AB987A";
                        }
                    });           
                }else{
                    voornaam.style.borderColor = "#AB987A";
                };
                
        
                if(naam.value == null || naam.value == ''){
                    naam.style.borderColor = "#FF533D";
                    naam.addEventListener('blur', (e) =>{
                        if(naam.value == null || naam.value == ''){
                            naam.style.borderColor = "#FF533D";
                        }else{
                            naam.style.borderColor = "#AB987A";
                        }
                    }); 
                }else{
                    naam.style.borderColor = "#AB987A";
                }

                //let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                //!reg.test(email)
                if(email.value == null || email.value == ''){ 
                    email.style.borderColor = "#FF533D";  
                    email.addEventListener('blur', (e) =>{
                        if(email.value == null || email.value == ''){
                            email.style.borderColor = "#FF533D";
                        }else{
                            email.style.borderColor = "#AB987A";
                        }
                    });
                
                }else{
                    email.style.borderColor = "#AB987A";
                }
        
        
                if(gsm.value == null || gsm.value == ''){
                    gsm.style.borderColor = "#FF533D";
                    gsm.addEventListener('blur', (e) =>{
                        if(gsm.value == null || gsm.value == ''){
                            gsm.style.borderColor = "#FF533D";
                        }else{
                            gsm.style.borderColor = "#AB987A";
                        }
                    });
                 
                }else{
                    gsm.style.borderColor = "#AB987A";
                }
        
                if(adres.value == null || adres.value == ''){
                    adres.style.borderColor = "#FF533D";
                    adres.addEventListener('blur', (e) =>{
                        if(adres.value == null || adres.value == ''){
                            adres.style.borderColor = "#FF533D";
                        }else{
                            adres.style.borderColor = "#AB987A";
                        }
                    });
              
                }else{
                    adres.style.borderColor = "#AB987A";
                }
        
        
                if(stad.value == null || stad.value == ''){
                    stad.style.borderColor = "#FF533D";
                    stad.addEventListener('blur', (e) =>{
                        if(stad.value == null || stad.value == ''){
                            stad.style.borderColor = "#FF533D";
                        }else{
                            stad.style.borderColor = "#AB987A";
                        }
                    });
                
                }else{
                    
                    stad.style.borderColor = "#AB987A";
                }
        
        
                if(land.value == null || land.value == ''){
                    land.style.borderColor = "#FF533D";
                    land.addEventListener('blur', (e) =>{
                        if(land.value == null || land.value == ''){
                            land.style.borderColor = "#FF533D";
                        }else{
                            land.style.borderColor = "#AB987A";
                        }
                    });
                   
                }else{
                    land.style.borderColor = "#AB987A";
        
                }
        
        
                if(zip.value == null || zip.value == ''){
                    zip.style.borderColor = "#FF533D";
                    zip.addEventListener('blur', (e) =>{
                        if(zip.value == null || zip.value == ''){
                            zip.style.borderColor = "#FF533D";
                        }else{
                            zip.style.borderColor = "#AB987A";
                        }
                    });
                    
                }else{
                    zip.style.borderColor = "#AB987A";
                }
            };
            
        },true);
    
    
        
    })();
    
    
    
    
    
    
    
    
    
           
    
    
    
        
       
        
       
    
    
    
    
    
    
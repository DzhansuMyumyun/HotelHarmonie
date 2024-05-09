(function(){
'use strict';

    const voornaam = document.getElementById('voornaam');
    const achternaam = document.getElementById('achternaam');
    const email = document.getElementById('email');
    const telefoon = document.getElementById('telefoon');
    const onderwerp = document.getElementById('onderwerp');
    const boodschap = document.getElementById('boodschap');

    document.getElementById('verzenden').addEventListener('click', (e) =>{
        e.preventDefault();
        if(voornaam.value != '' && achternaam.value != '' && email.value != '' && telefoon.value != '' && onderwerp.value != '' && boodschap.value != ''){
            alert(` Beste ${voornaam.value} ${achternaam.value} 
                    Email: ${email.value} 
                    Gsm: ${telefoon.value}
                    Boodschap: ${onderwerp.value}
                    Onderwerp: ${boodschap.value}`);
            voornaam.value = '';
            achternaam.value = '';
            telefoon.value = '';
            email.value = '';
            onderwerp.value = '';
            boodschap.value = '';
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

            if(achternaam.value == null || achternaam.value == ''){
                achternaam.style.borderColor = "#FF533D";
                achternaam.addEventListener('blur', (e) =>{
                    if(achternaam.value == null || achternaam.value == ''){
                        achternaam.style.borderColor = "#FF533D";
                    }else{
                        achternaam.style.borderColor = "#AB987A";
                    }
                }); 
            }else{
                achternaam.style.borderColor = "#AB987A";
            }


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

            if(telefoon.value == null || telefoon.value == ''){
                telefoon.style.borderColor = "#FF533D";
                telefoon.addEventListener('blur', (e) =>{
                    if(telefoon.value == null || telefoon.value == ''){
                        telefoon.style.borderColor = "#FF533D";
                    }else{
                        telefoon.style.borderColor = "#AB987A";
                    }
                });
             
            }else{
                telefoon.style.borderColor = "#AB987A";
            }


            if(onderwerp.value == null || onderwerp.value == ''){
                onderwerp.style.borderColor = "#FF533D";
                onderwerp.addEventListener('blur', (e) =>{
                    if(onderwerp.value == null || onderwerp.value == ''){
                        onderwerp.style.borderColor = "#FF533D";
                    }else{
                        onderwerp.style.borderColor = "#AB987A";
                    }
                });
             
            }else{
                onderwerp.style.borderColor = "#AB987A";
            }

            if(boodschap.value == null || boodschap.value == ''){
                boodschap.style.borderColor = "#FF533D";
                boodschap.addEventListener('blur', (e) =>{
                    if(boodschap.value == null || boodschap.value == ''){
                        boodschap.style.borderColor = "#FF533D";
                    }else{
                        boodschap.style.borderColor = "#AB987A";
                    }
                });
             
            }else{
                boodschap.style.borderColor = "#AB987A";
            }

        };

    }, true);


})();
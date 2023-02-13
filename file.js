// Function CMPE

function CMPE(n, station, bus) {
    var p = -1;
    for (let i = 0; i < 20; i++) {
        if (station[n].localeCompare(bus[i]) == 0) {
            p = i;
        }
    }
    return p;
}

// Function T

function T(temps, tempsbus, plaque) {
    var tempsreste, p = false;
    var temp;
    if (plaque == 1) {
        plaque = 2;
    }
    else {
        plaque += 5;
    }
    for (let i = 0; i < tempsbus.length; i++) {
        if (temps.localeCompare(tempsbus[0]) < 0) {
            temp = tempsbus[0];
            p = true;
            break;
        }
        else if ((temps.localeCompare(tempsbus[i]) > 0) && (temps.localeCompare(tempsbus[i + 1]) < 0)) {
            temp = tempsbus[i + 1];
            p = true;
            break;
        }
        else if (temps.localeCompare(tempsbus[i]) == 0) {
            temp = tempsbus[i];
            p = true;
        }
    }
    if (p) {
        var hours = (parseInt(temp[0]) - parseInt(temps[0])) * 10 + parseInt(temp[1]) - parseInt(temps[1]);
        var minutes = (parseInt(temp[3]) - parseInt(temps[3])) * 10 + parseInt(temp[4]) - parseInt(temps[4]);
        tempsreste = (hours * 60) + minutes + plaque;
    }
    else {
        var aide = "23:59";
        var hours = (parseInt(aide[0]) - parseInt(temps[0])) * 10 + parseInt(aide[1]) - parseInt(temps[1]);
        var minutes = (parseInt(aide[3]) - parseInt(temps[3])) * 10 + parseInt(aide[4]) - parseInt(temps[4]);
        tempsreste = (hours * 60) + minutes + plaque;
        var aided = "00:00";
        temp = tempsbus[0];
        hours = (parseInt(temp[0]) - parseInt(aided[0])) * 10 + parseInt(temp[1]) - parseInt(aided[1]);
        minutes = (parseInt(temp[3]) - parseInt(aided[3])) * 10 + parseInt(temp[4]) - parseInt(aided[4]);
        tempsreste += (hours * 60) + minutes;
    }
    return tempsreste;
}


//  DATA  

//BUS 18
var BUS18sidibouzid = ["08:01", "08:06", "08:12", "08:24", "08:36", "08:48", "09:01", "09:06", "09:12", "09:24", "09:36", "09:48", "10:01", "10:06", "10:12", "10:24", "10:36", "10:48", "11:01", "11:06", "11:12", "11:24", "11:36", "11:48", "12:01", "12:06", "12:12", "12:24", "12:36", "12:48", "13:01", "13:06", "13:12", "13:24", "13:36", "13:48", "14:01", "14:06", "14:12", "14:24", "14:36", "14:48", "15:01", "15:06", "15:12", "15:24", "15:36", "15:48", "16:01", "16:06", "16:12", "16:24", "16:36", "16:48", "17:01", "17:06", "17:12", "17:24", "17:36", "17:48", "18:01", "18:06", "18:12", "18:24", "18:36", "18:48"];
var BUS18COURSE = ["07:30", "07:45", "08:06", "08:18", "08:25", "08:36", "08:48", "09:01", "09:12", "09:24", "09:36", "09:48", "10:01", "10:12", "10:24", "10:36", "10:48", "11:01", "11:12", "11:24", "11:36", "11:48", "12:01", "12:12", "12:24", "12:36", "12:48", "13:01", "13:12", "13.24", "13:36", "13:48", "14:01", "14:12", "14:24", "14:36", "14:48", "15:01", "15:12", "15:24", "15:36", "15:48", "16:01", "16:12", "16:24", "16:36", "16:48", "17:01", "17:12", "17:24", "17:36", "17:48", "18:01", "18:12", "18:24", "18:36", "18:48", "19:01", "19:20", "19:25", "19:30", "19:48", "20:12"];
var BUS18ESSALAM_AZIBDARAI = ["07:50", "08:10", "08:22", "08:34", "08:46", "08:58", "09:10", "09:22", "09:34", "09:46", "09:58", "10:10", "10:22", "10:34", "10:46", "10:58", "11:10", "11:22", "11:34", "11:46", "11:58", "12:10", "12:22", "12:34", "12:46", "12:58", "13:10", "13:22", "13:34", "13:46", "13:58", "14:10", "14:22", "14:34", "14:46", "14:58", "15:10", "15:22", "15:34", "15:46", "15:58", "16:10", "16:22", "16:34", "16:46", "16:58", "17:10", "17:22", "17:34", "17:46", "17:58", "18:10", "18:22", "18:34", "18:46", "18:58", "19:10", "19:25", "19:40", "20:05"];
var BUS18MIFTAHKHEI_MARJAN = ["07:43", "08:15", "08:27", "08:39", "08:51", "09:03", "09:15", "09:27", "09:39", "09:51", "10:03", "10:15", "10:27", "10:39", "10:51", "11:03", "11:15", "11:27", "11:39", "11:51", "12:03", "12:15", "12:27", "12:39", "12:51", "13:03", "13:15", "13:27", "13:39", "13:51", "14:03", "14:15", "14:27", "14:39", "14:51", "15:03", "15:15", "15:27", "15:39", "15:51", "16:03", "16:15", "16:27", "16:39", "16:51", "17:03", "17:15", "17:27", "17:39", "17:51", "18:03", "18:15", "18:27", "18:39", "18:51", "19:04", "19:15", "19:29", "19:45", "20:09"];
var BUS18ESSAADA = ["07:38", "08:25", "08:37", "08:49", "08:59", "09:13", "09:25", "09:37", "09:49", "09:59", "10:13", "10:25", "10:37", "10:49", "10:59", "11:13", "11:25", "11:37", "11:49", "11:59", "12:13", "12:25", "12:37", "12:49", "12:59", "13:13", "13:25", "13:37", "13:49", "13:59", "14:13", "14:25", "14:37", "14:49", "14:59", "15:13", "15:25", "15:37", "15:49", "15:59", "16:13", "16:25", "16:37", "16:49", "16:59", "17:13", "17:25", "17:37", "17:49", "17:59", "18:13", "18:25", "18:37", "18:49", "18:59", "19:14", "19:25", "19:39", "19:55", "20:19"];
//BUS 4
var BUS4sidibouzid = ["07:30", "07:50", "08:08", "08:27", "08:45", "09:04", "09:24", "09:43", "10:03", "10:22", "10:42", "11:01", "11:22", "11:42", "12:02", "12:21", "12:43", "13:02", "13:10", "13:36", "14:03", "14:30", "14:56", "15:23", "15:50", "16:16", "16:43", "17:10", "17:36", "18:03", "18:32", "18:52", "19:19", "19:46", "20:12"];
var BUS4OUADBACHAalle = ["07:40", "08:00", "08:18", "08:37", "08:55", "09:14", "09:34", "09:53", "10:13", "10:32", "10:52", "11:11", "11:32", "11:52", "12:12", "12:31", "12:53", "13:12", "13:20", "13:46", "14:13", "14:40", "15:06", "15:33", "16:00", "16:26", "16:53", "17:20", "17:46", "18:13", "18:42", "19:02", "19:29", "19:56", "20:22"];
var BUS4AVENUERABATalle = ["07:50", "08:10", "08:28", "08:47", "09:05", "09:24", "09:44", "10:03", "10:23", "10:42", "11:02", "11:21", "11:42", "12:02", "12:22", "12:41", "13:03", "13:22", "13:30", "13:56", "14:23", "14:50", "15:16", "15:43", "16:10", "16:36", "17:03", "17:30", "17:56", "18:23", "18:52", "19:09", "19:35", "19:59", "20:29"];
var BUS4NOUVELLEVILLEalle = ["08:00", "08:20", "08:38", "08:57", "09:15", "09:34", "09:54", "10:13", "10:33", "10:52", "11:12", "11:31", "11:52", "12:12", "12:32", "12:51", "13:13", "13:32", "13:40", "14:06", "14:33", "15:00", "15:26", "15:53", "16:20", "16:46", "17:13", "17:40", "18:06", "18:33", "19:00", "19:15", "19:39", "20:08", "20:37"];
var BUS4COURSE = ["07:15", "07:32", "07:50", "08:07", "08:25", "08:45", "09:05", "09:24", "09:44", "10:03", "10:23", "10:42", "11:02", "11:21", "11:42", "12:02", "12:22", "12:41", "13:03", "13:22", "13:30", "13:56", "14:23", "14:50", "15:16", "15:43", "16:10", "16:36", "17:03", "17:30", "17:56", "18:23", "18:52", "19:06", "19:32", "20:00"];
var BUS4OUADBAtour = ["07:45", "08:00", "08:20", "08:38", "08:57", "09:15", "09:34", "09:54", "10:13", "10:33", "10:52", "11:12", "11:31", "11:52", "12:12", "12:32", "12:51", "13:13", "13:32", "13:40", "14:06", "14:33", "15:00", "15:26", "15:53", "16:20", "16:46", "17:13", "17:40", "18:06", "18:33", "19:00", "19:12", "19:39", "20:09"];
var BUS4AVENUERABATretour = ["07:33", "07:50", "08:10", "08:28", "08:47", "09:05", "09:24", "09:44", "10:03", "10:33", "10:42", "11:02", "11:21", "11:42", "12:02", "12:22", "12:41", "13:03", "13:22", "13:30", "13:56", "14:23", "14:50", "15:16", "15:43", "16:10", "16:36", "17:03", "17:30", "17:56", "18:23", "18:50", "19:19", "19:30", "19:58", "20:25"];
var BUS4NOUVELLEVILLEretour = ["07:25", "07:40", "08:00", "08:18", "08:35", "08:55", "09:14", "09:34", "09:53", "10:13", "10:32", "10:52", "11:11", "11:32", "11:52", "12:12", "12:31", "12:53", "13:12", "13:20", "13:46", "14:13", "14:40", "15:06", "15:33", "16:00", "16:26", "16:53", "17:20", "17:46", "18:13", "18:42", "19:12", "19:22", "19:47", "20:17"];

var stationBUS4 = ["Sidi Bouzid", "Ouad lbacha", "Quartier Rabat", "Nouvelle Ville", "Course"];
var stationBUS18 = ["Sidi Bouzid", "Essalam", "Meftah lkheir", "Essaada", "Azib daraai", "Course"];

//plaques 
let plaques = [["Borj nador", "Faculté/ENSA", "Hotel Panorama", "Mosqué Sidi Bouzid"], ["Avenue Hassan 2", "Mosque Ouad lbacha"], ["Port", "Avenue_Youssef"], ["Tagine", "Garre", "Kennedy"], ["orida2", "orida1"], ["plaque1", "plaque2", "plaque3"], ["plaque1", "plaque2", "plaque3"], ["plaque1", "plaque2", "plaque3"], ["plaque1", "plaque2", "plaque3"], ["plaque1", "plaque2", "plaque3"]];
//FUNCTIONS 

let form = document.querySelector('form');
let time = document.querySelector('#time');
let select_depart = document.querySelector('#depart');
let select_arrive = document.querySelector('#arrive');
let plaque = document.querySelector('#plaque');
let select_place = document.querySelector('#placeSpecifie');
let submitBtn=document.querySelector('#submit');
console.log(form);
var depart;
var arrivee;
let Bus4=document.querySelector('#Bus4');
let Bus18=document.querySelector('#Bus18');
let exist=true;
// change select place with the change of select place 
select_depart.onchange = function () {
    select_place.innerHTML = '';
    for (let i = 0; i < plaques[select_depart.options['selectedIndex']].length; i++) {
        let option = document.createElement('option');
        option.textContent = plaques[select_depart.options['selectedIndex']][i];
        select_place.appendChild(option);
    }
}
time.onchange=()=>{
    if(time.value.length===0){
        submitBtn.disabled=true;
    }else{
        submitBtn.disabled=false
    }
}
form.onsubmit = function () {
    var temps = time.value;
    depart = stationBUS4.indexOf(select_depart.value);
    arrivee = stationBUS4.indexOf(select_arrive.value);
    if (arrivee != -1 && depart != -1) {
        if (depart <= arrivee) {
            console.log("bus 4 disp  ")
            switch (depart) {
                case 0:
                    Bus4.innerHTML=`Bus 4 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS4sidibouzid, select_depart.options['selectedIndex'] + 1)}</span> minutes`;
                    break;
                case 1:
                    Bus4.innerHTML=`Bus 4 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${console.log(T(temps, BUS4OUADBACHAalle, select_depart.options['selectedIndex'] + 1))}</span> minutes`
                    break;
                case 2:
                    Bus4.innerHTML=`Bus 4 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS4AVENUERABATalle, select_depart.options['selectedIndex'] + 1)}</span> minutes`     
                    break;
                case 3:
                    Bus4.innerHTML=`Bus 4 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS4NOUVELLEVILLEalle, select_depart.options['selectedIndex'] + 1)}</span> minutes`  
                    break;
            }
        }
        else {
            switch (depart) {
                case 1:
                    Bus4.innerHTML=`Bus 4 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS4OUADBAtour, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 2:
                    Bus4.innerHTML=`Bus 4 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS4AVENUERABATretour, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 3:
                    Bus4.innerHTML=`Bus 4 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS4NOUVELLEVILLEretour, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 4:
                    Bus4.innerHTML=`Bus 4 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS4COURSE, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
            }
        }
    }
    else{
        exist=false;
        Bus4.innerHTML='';
                    
    }

    depart = stationBUS18.indexOf(select_depart.value);
    arrivee = stationBUS18.indexOf(select_arrive.value);
    if (arrivee != -1 && depart != -1) {
        if (depart <= arrivee) {
            console.log("bus 18 disp")
            switch (depart) {
                case 0:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18sidibouzid, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 1:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18ESSALAM_AZIBDARAI, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 2:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18MIFTAHKHEI_MARJAN, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 3:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18ESSAADA, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 4:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18MIFTAHKHEI_MARJAN, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 5:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18ESSALAM_AZIBDARAI, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
            }
        }
        else {
            switch (depart) {
                case 1:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18ESSALAM_AZIBDARAI, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 2:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18MIFTAHKHEI_MARJAN, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 3:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18ESSAADA, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 4:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18MIFTAHKHEI_MARJAN, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 5:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18ESSALAM_AZIBDARAI, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
                case 6:
                    Bus18.innerHTML=`Bus 18 is <span class='text-primary'>available</span> and it will come after <span class='text-primary'>${T(temps, BUS18COURSE, select_depart.options['selectedIndex'] + 1)}</span> minutes`      
                    break;
            }
        }
    }
    else{
        Bus18.innerHTML= exist===false?`No Bus is available on this route `:'';                        
    }






    // console.log(T(time.value, BUS4sidibouzid, select_depart.options['selectedIndex']+1));
    // console.log(select_depart.options['selectedIndex']+1.value);
    // console.log(select_arrive.value);
    // console.log("index of select arrivee ", select_arrive.options['selectedIndex']);
    // console.log("index of select depart ", select_depart.options['selectedIndex']);

}

















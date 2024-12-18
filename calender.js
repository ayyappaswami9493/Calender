
function timeRotation(){
    var dateObject=new Date();
    var day=dateObject.getDay();
    dayList=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    document.getElementById('day').innerText=dayList[day];
    var date=dateObject.getDate();
    var month=dateObject.getMonth();
    var fullyear=dateObject.getFullYear();
    monthList=['January','Febuarary','March','April','May','June','July','August','Septmber','October','November','December'];
    document.getElementById('fullDate').innerText=`${date} / ${monthList[month]} / ${fullyear}`; 
    var hour=dateObject.getHours();
    if (hour<=9){
        hour='0'+hour;
    }
    var minutes=dateObject.getMinutes();
    if (minutes<=9){
        minutes="0"+minutes;
    }
    document.getElementById('time').innerText=`${hour} : ${minutes}`;
    var seconds=dateObject.getSeconds();
    if (seconds<=9){
        seconds='0'+seconds;
    }
    secondsRun=document.getElementById('seconds_container').innerText=`${seconds}`
}
setInterval(timeRotation,1000);

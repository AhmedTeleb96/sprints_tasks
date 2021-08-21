'use strict'

var name = enterName();

var vaildPassword = enterPassword();
if(!vaildPassword)
{
    alert("you entered wrong password 3 times");
}
else
{
    var month = enterMonth();
    var day = enterDay();
    printHoroscopes(month,day);
}


function enterName()
{
    var name = prompt("Enter your name");
    while(name.trim() == "" || name == null)
    {
        name = prompt("Enter your name");
    }
    return name;
}


function enterPassword()
{
    var passwrd = prompt("Enter your password");
    var counter =1;
     while( (passwrd.trim() != "123" || passwrd == null) && counter <= 2)
        {
            name = prompt("Enter your password");
            if(counter >= 2)
            {
                return false;
            }
            counter++
        }
      return true; 
}

function enterMonth()
{
    var month = prompt("Enter birth month");
    while(month <1 || month >12)
    {
        month = prompt("Enter valid birth month");
    }
    return month;
}

function enterDay()
{
    var day = prompt("Enter birth day");
    while( (month == 1 && day > 31)||(month == 2 && day >= 29)||(month == 3 && day > 31)||
    (month == 4 && day > 30)||(month == 5 && day > 31)||(month == 6 && day > 30)||
    (month == 7 && day > 31)||(month == 8 && day > 31)||(month == 9 && day > 30)||
    (month == 10 && day > 31)||(month == 11 && day > 30)||(month == 12 && day > 31))
    {
        day = prompt("Enter valid birth day");
    }
    return day;
}


function printHoroscopes( month, day)
{
    if(month == 1 && day >=20 || month == 2 && day <=18) {alert("Aquarius");}

    if (month == 2 && day >=19 || month == 3 && day <=20) {alert("Pisces");}
    
    if (month == 3 && day >=21 || month == 4 && day <=19) {alert("Aries");}
    
    if (month == 4 && day >=20 || month == 5 && day <=20) {alert("Taurus");}
    
    if (month == 5 && day >=21 || month == 6 && day <=21) {alert("Gemini");}
    
    if (month == 6 && day >=22 || month == 7 && day <=22) {alert("Cancer");}
    
    if (month == 7 && day >=23 || month == 8 && day <=22) {alert("Leo");}
    
    if (month == 8 && day >=23 || month == 9 && day <=22) {alert("Virgo");}
    
    if (month == 9 && day >=23 || month == 10 && day <=22) {alert("Libra");}
    
    if (month == 10 && day >=23 || month == 11 && day <=21) {alert("Scorpio");}
    
    if (month == 11 && day >=22 || month == 12 && day <=21) {alert("Sagittarius");}
    
    if (month == 12 && day >=22 || month == 1 && day <=19) {alert("Capricorn");}
    
}


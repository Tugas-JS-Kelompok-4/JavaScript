// Function
function bio (par1, par2, par3, par4, par5){
    console.log (par1 + par2 + par3 + par4 + par5);
};

bio ("Hallo Nama Saya ","Robby ","Putera ","dari kelas ","XI RPL 2"); 


// ArrowFunction (=>)
let func = (par1,par2,par3) => {
    console.log (par1 + par2 + par3);
    console.log (par2 + par3);
    console.log (par3)
};

func ("1", "2", "3");


// argument (...)
function argument (par1, ...arg){
    console.log (par1, ...arg);
}
argument (1,2,3,4,546,5,6345,6,34);


// converter
function convertyear (year){
    console.log(year * 365, "Hari");
}
convertyear(1)

function convertday (day){
    console.log(day * 24, "Jam")
}
convertday(1)

function converthour (hour){
    console.log(hour * 60, "Menit")
}
converthour(1)

function convertminute (minute){
    console.log(minute + 59, "Detik")
}
convertminute(1)

function convertsecond (second){
    console.log(second / 10, "Milidetik")
}
convertsecond(10000)

function convertmilisecond (milisecond){
    console.log(milisecond - 100, "Mikrodetik");
}
convertmilisecond(1100)
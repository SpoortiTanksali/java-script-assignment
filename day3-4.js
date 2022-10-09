var countryindia = document.getElementById("indiacountry");
var countryaustralia = document.getElementById("australiacountry");
var countrynewzealand = document.getElementById("newzealand");
var countryengland = document.getElementById("englandcountry");

document.getElementById("mycountryname").addEventListener("click",function(){
    let countryname = document.querySelector("#mycountryname").value;


    if(countryname=="india"){
        countryindia.style.display="block";
        countryengland.style.display="none";
        countrynewzealand.style.display="none";
        countryaustralia.style.display="none";

    }
    else if(countryname=="australia"){
        countryindia.style.display="none";
        countryengland.style.display="none";
        countrynewzealand.style.display="none";
        countryaustralia.style.display="block";

    }
    else if(countryname=="newzealand"){
        countryindia.style.display="none";
        countryengland.style.display="none";
        countrynewzealand.style.display="block";
        countryaustralia.style.display="none";
    }
    else if(countryname=="england"){
        countryindia.style.display="none";
        countryengland.style.display="block";
        countrynewzealand.style.display="none";
        countryaustralia.style.display="none";

} }) 

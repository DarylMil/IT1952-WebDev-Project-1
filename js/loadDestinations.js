import destinations from "../db/destinationDb.js";

$(function(){
    var tabInner ;    // Loop through all destinations to display them
    destinations.map(dest=>{
        switch (dest.continent) {
            case 1:
                tabInner = $("#1b")
                break;
            case 2:
                tabInner = $("#2b")
                break;
            case 3:
                tabInner = $("#3b")
                break;
            case 4:
                tabInner = $("#4b")
                break;
            case 5:
                tabInner = $("#5b")
                break;
            case 6:
                tabInner = $("#6b")
                break;
            default:
                tabInner = $("#7b")
                break;
        }
        function toCommas(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        var cityString = "";
            dest.citiesName.forEach((city,i)=>{
                if(dest.citiesName.length -1 != i){
                    cityString += city +' ' +','+' ';
                }else{
                    cityString += city 
                }
            })
        tabInner[0].innerHTML += 
        `<div class="tm-recommended-place" onclick="purchase(${dest.id},${true})">
            <img alt="Image" class="img-fluid tm-recommended-img" src="${dest.img}">
            <div class="tm-recommended-description-box">
                <h3 class="tm-recommended-title">${dest.days + " days "+ dest.countryName}</h3>
                <p class="tm-text-highlight">${cityString}</p>
                <p class="tm-text-gray">${dest.description}</p>
            </div>
            <a href="./checkout.html" id="purchase" class="tm-recommended-price-box" onclick="purchase(${dest.id},${false})">
                <p class="tm-recommended-price">$${toCommas(dest.price)}</p>
                <span class="per-head">/perhead</span>
                <p class="tm-recommended-price-link">Purchase</p>
            </a>                        
        </div>`;
    })
})
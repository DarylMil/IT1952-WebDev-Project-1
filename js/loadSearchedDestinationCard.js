$(function(){
    var destinations = JSON.parse(localStorage.getItem('travelDetails'))
    var searchedTabInner = $('#_8b');
    var shown = 0;
    var {searchedAdult,searchedChild,searchedCountry,dateFrom,dateTo} = JSON.parse(localStorage.getItem('information'))
    var searchWord = $('.search-word');

    function convertToLongDate(date){
        return new Date(date).toLocaleString('en-sg',{day:"numeric",month:"long",year:"numeric"})
    }

    // search words at top bar varies depending on user input
    if(searchedCountry !='' && dateFrom !=''){
        searchWord[0].innerText = `Searched results for "${searchedCountry}" & " available dates from: ${convertToLongDate(dateFrom)} to ${convertToLongDate(dateTo)}" ...`
    }else if(searchedCountry !=''){
        searchWord[0].innerText = `Searched results for "${searchedCountry}"...`
    }else{
        searchWord[0].innerText = `Searched results for "available dates from ${convertToLongDate(dateFrom)} to ${convertToLongDate(dateTo)}"...`
    }

    function toCommas(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    //price depends on adult / children searched    
    function priceCalculator(price){
        var totalPrice = 0;
        var adult = searchedAdult;
        var child = searchedChild;
        // price increase for every adult in 
        while (adult > 0){
            adult -= 1
            totalPrice += price
        }
        while (child > 0){
            child -= 1;
            totalPrice += price * 0.8
        }
        return toCommas(parseFloat(totalPrice).toFixed(0))
    }

    // Loop through all destinations to display from searched result
    destinations.map(dest=>{
        if(dest.show){
            shown += 1;
            var cityString = "";
            dest.citiesName.forEach((city,i)=>{
                if(dest.citiesName.length -1 != i){
                    cityString += city +' ' +','+' ';
                }else{
                    cityString += city 
                }
            })
            searchedTabInner[0].innerHTML += 
            `<div class="tm-recommended-place" onclick="purchase(${dest.id},${true})">
                <img alt="Image" class="img-fluid tm-recommended-img" src="${dest.img}" >
                <div class="tm-recommended-description-box">
                    <h3 class="tm-recommended-title">${dest.days + " days "+dest.countryName}</h3>
                    <p class="tm-text-highlight">${cityString}</p>
                    <p class="tm-text-gray">${dest.description}</p>
                </div>
                <a href="./checkout.html" id="purchase" class="tm-recommended-price-box" onclick="purchase(${dest.id},${false})">
                    <p class="tm-recommended-price">$${priceCalculator(dest.price).toLocaleString('en-US')}</p>
                    <p class="tm-recommended-price-link">Purchase</p>
                </a>                        
            </div>`;
        }
    })
    
    if(shown==0){
        searchedTabInner[0].innerHTML = `<div>Oh no, we didn't find anything. Please cast a wider search.</div>`
    }
})
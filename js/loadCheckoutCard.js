
var detailsAdultValue = $('#details-adult-value')
var detailsAdultHidden = $('#details-adult-hidden')
var detailsAdultShown = $('#details-adult-shown')
var detailsChildValue = $('#details-child-value')
var detailsChildHidden = $('#details-child-hidden')
var detailsChildShown = $('#details-child-shown')
var detailsDecChild = $('#details-dec-child')
var detailsIncChild = $('#details-inc-child')
var detailsDecAdult = $('#details-dec-adult')
var detailsIncAdult = $('#details-inc-adult')
var {searchedAdult,searchedChild,dateFrom,dateTo,searchedCountry} = JSON.parse(localStorage.getItem('information'))
var detailsInformation = {
    searchedAdult,
    searchedChild, 
    dateFrom,
    dateTo,
    searchedCountry,
}
var purchaseItem = JSON.parse(localStorage.getItem('purchaseItem'))
var travelDates = [];
function valueType(types,details){
    if(types == 'Adult'){
        if(!details){
            value = parseInt(inputAdultValue[0].textContent)
            plural = isPluralAdult
            inputValue = inputAdultValue
            hiddenValue = inputAdultHidden
            shownValue = inputAdultShown
            decButton = decAdult
            incButton = incAdult
        }else{
            value = parseInt(detailsAdultValue[0].textContent)
            plural = detailsPluralAdult
            inputValue = detailsAdultValue
            hiddenValue = detailsAdultHidden
            shownValue = detailsAdultShown
            decButton = detailsDecAdult
            incButton = detailsIncAdult
        }

    }else{
        if(!details){
            value = parseInt(inputChildValue[0].textContent)
            plural = isPluralChild
            inputValue = inputChildValue
            hiddenValue = inputChildHidden
            shownValue = inputChildShown
            decButton = decChild
            incButton = incChild
        }else{
            value = parseInt(detailsChildValue[0].textContent)
            plural = detailsPluralChild
            inputValue = detailsChildValue
            hiddenValue = detailsChildHidden
            shownValue = detailsChildShown
            decButton = detailsDecChild
            incButton = detailsIncChild
        }

    }
}

function increaseAndSave(types){
    valueType(types,true);
    value += 1;
    hiddenValue.val(value);
    inputValue[0].textContent = value;
    shownValue[0].textContent = value;
    if (types == 'Adult'){
        detailsInformation.searchedAdult = value
    }else{
        detailsInformation.searchedChild = value
    }
    if(value === 10){
        incButton[0].disabled = true;
        return false;
    }
    if(value >= 1) {
        if(value > 1){
            plural[0].textContent = ` ${types}s`
        }
        decButton[0].disabled = false;
        return false;
    }        
}

function decreaseAndSave(types){
    valueType(types,true);
    value -= 1;
    hiddenValue.val(value);
    inputValue[0].textContent = value;
    shownValue[0].textContent = value;
    if (types == 'Adult'){
        detailsInformation.searchedAdult = value
    }else{
        detailsInformation.searchedChild = value
    }
    if(value === 1 && types != 'Children') {
        plural[0].textContent = ` ${types}`
        decButton[0].disabled = true;
        return false;
    // For children we allow value to be 0
    }else if(value <= 1){
        plural[0].textContent = ` ${types}`
        if(value ===0){
            decButton[0].disabled = true;
        }
        return false;
    }
    if(value < 10){
        incButton[0].disabled = false;
        return false;
    }
}

function saveDetails(){
    localStorage.setItem('information',JSON.stringify(detailsInformation));
    location.reload();
    return false;
}

//convert the currency to have commas seperator
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
// Only show valid dates
function validDates(date){
    return new Date(date) > new Date();
}

$(function(){
    var place = $('.place');
    var searched = JSON.parse(localStorage.getItem('searched'))

    if(searchedAdult){
        // set adult and child values
        detailsAdultShown[0].textContent = searchedAdult
        detailsAdultValue[0].textContent = searchedAdult
        detailsAdultHidden[0].textContent = searchedAdult
        detailsChildShown[0].textContent = searchedChild
        detailsChildValue[0].textContent = searchedChild
        detailsChildHidden[0].textContent = searchedChild
        if(searchedAdult > 1){
            detailsDecAdult[0].disabled = false
        }
        if(searchedChild > 0){
            detailsDecChild[0].disabled = false
        }
    }

    place[0].innerHTML = `

        <div class="info-title">
            <h2 class="header"> ${purchaseItem.days} days ${purchaseItem.countryName}</h2>
        </div>
        <div class="info-picture">
            <img alt="Image" class="image" src="${purchaseItem.img}">
        </div>
        <div class="info-desc"> 
            <h6>${purchaseItem.description}</h6>
        </div>
        <div class="info-tour-date">
            <h6 class="label">Travel Date</h6>
            <div id="tour-date">
            </div>
        </div>
        <div class="info-cities">
            <hr>
            <span>Places of Visit:  </span>
            <span id="list-cities">
            </span>
        </div>

    `

    var length = purchaseItem.citiesName.length;
    for(const city of purchaseItem.citiesName){
        length -= 1;
        $('#list-cities')[0].innerHTML += 
        `
        <span>${city} ${length > 0?',':''}</span>
        `
    }

    function convertDBDateToLongDate(date){
        var dayAndMonthTour = date.split(" ");
        var convertMonthTour = getMonthFromString(dayAndMonthTour[1])
        return new Date(new Date().getFullYear(), convertMonthTour, dayAndMonthTour[0]).toLocaleString('en-sg',{day:"numeric",month:"long",year:"numeric"});
    }
    

    var firstTourDate = convertDBDateToLongDate(purchaseItem.availableDates[0]);
    var smallestMilSeconds = Math.abs(new Date(`${dateFrom}`) - new Date(`${firstTourDate}`));
    var nearestDateId = 0;

    //filter and only displays available dates 
    var validAvailableDates = purchaseItem.availableDates.filter(function(date){
        var longDate = convertDBDateToLongDate(date);
        return validDates(longDate)
    })
    validAvailableDates.map((date,id)=>{
       
        var convertDate = convertDBDateToLongDate(date);
        //chooses the closest chosen dates according to the dateTo and dateFrom if client used searched
        if(searched && dateTo){
            var closerDate = 0;
            var differenceFrom = Math.abs(new Date(`${dateFrom}`) - new Date(`${convertDate}`))
            var differenceTo = Math.abs(new Date(`${dateTo}`)- new Date(`${convertDate}`))
            if(differenceFrom < differenceTo) {
                closerDate = differenceFrom
            }else{
                closerDate = differenceTo
            }
            if(closerDate < smallestMilSeconds){
                smallestMilSeconds = closerDate
                nearestDateId = id
            }
        }
        $('#tour-date')[0].innerHTML += 
        `
        <div id="checked${id}" class="form-check highlighter">
            <input class="form-check-input" type="radio" name="date" id="date${id}" value="${convertDate}">
            <label class="form-check-label anti-label" for="date${id}">
                ${convertDate}
            </label>
        </div>
        `
    })

    $(`#date${nearestDateId}`).prop('checked',true)


    $('.detailed-desc')[0].innerHTML += `
    <p>${purchaseItem.detailedDescription}</p>
    `

    var totalPeople = searchedAdult +  searchedChild;
    while (totalPeople >0){
        totalPeople -= 1
        $('.client-info')[0].innerHTML += `
        <div class="col-sm-6 mb-sm-3 mb-2">
            <input id="traveller-${totalPeople}-name" type="text" class="form-control" placeholder="Travller's Full Name per Passport" name="fullname" value="" required/>
        </div>
        <div class="col-sm-6 mb-sm-3 mb-2">
            <input id="traveller-${totalPeople}-pp" type="text" class="form-control" placeholder="Traveller's Passport Number" name="fullname" value="" required/>
        </div>
        `
    }

    $('#payment-button')[0].innerHTML +=
    `<button type="submit" class=" btn btn-primary tm-btn tm-btn-search text-uppercase">Pay $ ${priceCalculator(purchaseItem.price)}</button>`
})


$("#purchase-form").submit((e)=>{
    e.preventDefault();
    var cardNumber = $('#CardNumber').val();
    var MMYY = $('#MMYY').val();
    var CVC = $('#CVC').val();
    var CardOwnerName = $('#CardOwnerName').val();
    if(cardNumber == "" || MMYY == "" || CVC == "" || CardOwnerName == ""){
        return;
    }
    var checkedDate = $('input[name="date"]:checked').val();
    var travellerDetails = [];
    var totalPeople = searchedAdult +  searchedChild;
    while (totalPeople > 0){
        totalPeople -= 1;
        travellerDetails.push({traveller:$(`#traveller-${totalPeople}-name`).val(),passport:$(`#traveller-${totalPeople}-pp`).val()})
    }
    var price = priceCalculator(purchaseItem.price);
    var today = new Date();
    var purchaseDate = new Date(today.getFullYear(),today.getMonth(),today.getDate()).toLocaleString('en-sg',{day:"numeric",month:"long",year:"numeric"});
    
    var userSigned = JSON.parse(localStorage.getItem('userSigned'));

    // check if user is logged in 
    if(!userSigned){
        $('#no-user').modal({show:true,backdrop:'static',keyboard:false});
        return;
    }
    var account = JSON.parse(localStorage.getItem('account'))
    var index = -1;
    for(let user of account){
        index += 1;
        if(user.email == userSigned.email){
            user = {
                ...user,
            }
            user.purchases.unshift(
                {
                    purchaseItem,
                    price,
                    checkedDate,
                    travellerDetails,
                    purchaseDate,
                    invoiceNumber:new Date().getTime(),
                    information:{
                        adult:detailsInformation.searchedAdult,
                        children:detailsInformation.searchedChild
                    }
                }
            )
            account[index] = user;
            localStorage.setItem('account',JSON.stringify(account))
            localStorage.setItem('userSigned',JSON.stringify(user))
            $('#success-purchase').modal({show:true,backdrop:'static',keyboard:false});
            return;
        }
    }

})

$('#success-purchase-btn').click(e=>{
    location.href = 'account.html'
})
$('#no-user').click(e=>{
    location.href = 'signin.html'
    localStorage.setItem('redirected',true)
})
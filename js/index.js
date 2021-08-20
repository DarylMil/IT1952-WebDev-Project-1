
var tooltip = $('#tooltip');   
var inputRoomAdultChild = $('#roomAdultChild');
var inputAdultValue = $('#input-adult-value')
var inputAdultHidden = $('#input-adult-hidden')
var inputAdultShown = $('#input-adult-shown')
var detailsAdultValue = $('#details-adult-value')
var detailsAdultHidden = $('#details-adult-hidden')
var detailsAdultShown = $('#details-adult-shown')
var decAdult = $('#dec-adult')
var incAdult = $('#inc-adult')
var detailsDecAdult = $('#details-dec-adult')
var detailsIncAdult = $('#details-inc-adult')
var inputChildValue = $('#input-child-value')
var inputChildHidden = $('#input-child-hidden')
var inputChildShown = $('#input-child-shown')
var detailsChildValue = $('#details-child-value')
var detailsChildHidden = $('#details-child-hidden')
var detailsChildShown = $('#details-child-shown')
var decChild = $('#dec-child')
var incChild = $('#inc-child')
var detailsDecChild = $('#details-dec-child')
var detailsIncChild = $('#details-inc-child')
var isPluralAdult = $('#is-plural-adult')
var detailsPluralAdult = $('#details-plural-adult')
var isPluralChild = $('#is-plural-child')
var detailsPluralChild = $('#details-plural-child')
var searchedFrom = $("#inputCheckIn")
var searchedTo = $("#inputCheckOut")
var informationLocalStorage = JSON.parse(localStorage.getItem('information'));
var information = {
    searchedAdult:parseInt(inputAdultShown[0].textContent),
    searchedChild:parseInt(inputChildShown[0].textContent),   
}
var tooltipIsOpen = false;
var tooltipDetailsIsOpen = false;
var yourDetails = $('#checkout-your-details');
var detailsTooptip = $('#details-tooltip');

$(function(){
    if(informationLocalStorage){
        //set adult values
        inputAdultShown[0].textContent = informationLocalStorage.searchedAdult
        inputAdultValue[0].textContent = informationLocalStorage.searchedAdult
        inputAdultHidden[0].textContent = informationLocalStorage.searchedAdult
        information.searchedAdult = informationLocalStorage.searchedAdult
        if(informationLocalStorage.searchedAdult > 1){
            decAdult[0].disabled = false
        }
        //set child values
        inputChildShown[0].textContent = informationLocalStorage.searchedChild
        inputChildValue[0].textContent = informationLocalStorage.searchedChild
        inputChildHidden[0].textContent = informationLocalStorage.searchedChild
        information.searchedChild = informationLocalStorage.searchedChild
        if(informationLocalStorage.searchedChild > 0){
            decChild[0].disabled = false
        }
        // set DateFrom
        if(informationLocalStorage.dateFrom){
            searchedFrom[0].value = new Date(informationLocalStorage.dateFrom).toLocaleString('en-sg',{day:"numeric",month:"long",year:"numeric"})
            information = {
                ...information,
                dateFrom:new Date(searchedFrom[0].value)
            }
        }
        // set DateTo
        if(informationLocalStorage.dateTo){
            searchedTo[0].value = new Date(informationLocalStorage.dateTo).toLocaleString('en-sg',{day:"numeric",month:"long",year:"numeric"})
            information = {
                ...information,
                dateTo:new Date(searchedTo[0].value)
            }
        }
    }
})

function openTooltip(){
    tooltipIsOpen = true;
    inputRoomAdultChild.addClass("inputRoomFocus")
    if($('#tooltip').css('display') === 'none'){
        $('#tooltip').css('display','inline-block');
    }
    var popper = new Popper (inputRoomAdultChild,tooltip, {
        position: 'bottom',
        modifiers: {
            offset: {
                offset: "0, 8",
            },
            flip:{
                enabled:false
            }
        }
    })
}

function openTooltipDetails(){
    tooltipDetailsIsOpen = true;
    yourDetails.addClass("inputRoomFocus")
    if($('#details-tooltip').css('display') === 'none'){
        $('#details-tooltip').css('display','inline-block');
    }
    var popper = new Popper (yourDetails,detailsTooptip, {
        position: 'bottom',
        modifiers: {
            offset: {
                offset: "0, 8",
            },
            flip:{
                enabled:false
            }
        }
    })
}

var value = 0;
var inputValue = 0;
var hiddenValue = 0;
var shownValue = 0;
var plural = null;
var decButton = null;
var incButton = null;
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

function increase(types){
    valueType(types,false);
    value += 1;
    hiddenValue.val(value);
    inputValue[0].textContent = value;
    shownValue[0].textContent = value;

    if (types == 'Adult'){
        information.searchedAdult = value
    }else{
        information.searchedChild = value
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

function decrease(types){
    valueType(types,false);
    value -= 1;
    hiddenValue.val(value);
    inputValue[0].textContent = value;
    shownValue[0].textContent = value;

    if (types == 'Adult'){
        information.searchedAdult = value
    }else{
        information.searchedChild = value
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


function compareDate(dateFrom,dateTo){
    if(dateFrom < new Date()){
        return false;
    }
    return dateFrom < dateTo;
}

function addDaysToDate(date,days){
    var date = new Date(date);
    date.setDate(date.getDate() + days);
    return date;
}
function getMonthFromString(mon){
    return new Date(Date.parse(mon +" 1, 2012")).getMonth()
 }
 Date.prototype.isValid = function () {
    // An invalid date object returns NaN for getTime() and NaN is the only object not strictly equal to itself.
    return this.getTime() === this.getTime();
}; 
function convertDBDateToLongDate(date){
    var dayAndMonthTour = date.split(" ");
    var convertMonthTour = getMonthFromString(dayAndMonthTour[1])
    return new Date(new Date().getFullYear(), convertMonthTour, dayAndMonthTour[0]);
}
// the search button
$(function(){
    $('#search-form').submit((e)=>{
        var searchedCountry = $('#input-country')[0].value.toLowerCase();
        var searchFrom = searchedFrom[0].value;
        var searchTo = searchedTo[0].value;

        //checks if both date and country is empty
         if(searchedCountry == '' && !(new Date(searchFrom).isValid() || new Date(searchTo).isValid())){
             e.preventDefault();
             alert("Please input either country name or available dates.")
             return
         }

        // validate available dates if any
        if(new Date(searchFrom).isValid() || new Date(searchTo).isValid()){
            searchFrom = searchedFrom[0].value.split(" ");
            searchTo = searchedTo[0].value.split(" ");
            searchFrom = new Date(searchFrom);
            searchTo = new Date(searchTo);
            var closestDateFromLower = addDaysToDate(searchFrom,-14);
            var closestDateToUpper = addDaysToDate(searchTo,14);
            var validDates = compareDate(searchFrom,searchTo);
        
            if (!validDates) {
                e.preventDefault();
                alert('Please check both from and to dates.')
                return
            }
        }

        var destination = JSON.parse(localStorage.getItem('travelDetails'))
        var results = destination.map(d=>{
            var temp = Object.assign({}, d);
            // searches countryName if there is
            if(searchedCountry != ''){
                if(d.countryName.toLowerCase().split(/, | & /).includes(searchedCountry)){
                    //searches closest dates from successful country results only if there are datas 
                    if(new Date(searchFrom).isValid() || new Date(searchTo).isValid()){
                        for(const date of d.availableDates){
                            var convertDateTour = convertDBDateToLongDate(date);
                            if(closestDateFromLower <= convertDateTour && convertDateTour <= closestDateToUpper){ 
                                temp['show'] = true
                                return temp
                            }
                        }
                        temp['show'] = false
                        return temp
                    }
                    temp['show'] = true
                    return temp
                }
                temp['show'] = false;
                return temp;
            // searches for available dates if no country name
            }else{
                if(new Date(searchFrom).isValid() || new Date(searchTo).isValid()){
                    for(const date of d.availableDates){
                        var convertDateTour = convertDBDateToLongDate(date);
                        if(closestDateFromLower <= convertDateTour && convertDateTour <= closestDateToUpper){ 
                            temp['show'] = true
                            return temp
                        }
                    }
                    temp['show'] = false
                    return temp
                }
            }
          
        })

        // set relevant items into local storage, including searched information
        information = {
            ...information,
            searchedCountry,
            dateFrom:searchFrom,     
            dateTo:searchTo,
        }
        localStorage.setItem('travelDetails',JSON.stringify(results))
        localStorage.setItem('information',JSON.stringify(information))
        localStorage.setItem('searched',true)
    })
    
    var minDateIn = new Date();
    minDateIn.setDate(minDateIn.getDate() + 1)
    $("#inputCheckIn").datepicker({
        changeMonth: true,
        numberOfMonths:1,
        minDate:minDateIn,
        dateFormat:'dd MM yy',
        showButtonPanel: true,
        closeText:'Reset',
        onClose: function(selectedDate){ //date here is 22 June 2021
            function isDonePressed(){
                return ($('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1);   
            }
            information = {
                ...information,
                dateFrom:new Date(`${selectedDate}`),
            }
            if (isDonePressed()){
                information = {
                    ...information,
                    dateFrom:null
                }
                searchedFrom[0].value = null
            }
            if (selectedDate == null ) {
                return;
            }     
            // localStorage.setItem('information',JSON.stringify(information))
            $('#inputCheckOut').datepicker("option","minDate",selectedDate)
        }
    })

    $("#inputCheckOut").datepicker({
        changeMonth: true,
        numberOfMonths:1,
        minDate: minDateIn,
        dateFormat:'dd MM yy',
        showButtonPanel: true,
        closeText:'Reset',
        onClose: function(selectedDate){ //date here is 22 June 2021

            function isDonePressed(){
                return ($('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1);   
            }
            information = {
                ...information,
                dateTo:new Date(`${selectedDate}`),
            }
            if (isDonePressed()){
                information = {
                    ...information,
                    dateTo:null
                }
                searchedTo[0].value = null
            }
            // localStorage.setItem('information',JSON.stringify(information))
            $('#inputCheckIn').datepicker("option","maxDate",selectedDate)

        }
    })
    document.addEventListener("click",function(event){

        if(event.target.closest("#tooltip") || event.target.closest("#roomAdultChild")) return;
        if(tooltipIsOpen){
            tooltipIsOpen = false;
            tooltip[0].style.display = "none";
            inputRoomAdultChild.removeClass("inputRoomFocus");
        }
        
        if(event.target.closest("#details-tooltip") || event.target.closest("#checkout-your-details")) return;
        if(tooltipDetailsIsOpen){
            tooltipDetailsIsOpen = false;
            detailsTooptip[0].style.display = "none";
            yourDetails.removeClass("inputRoomFocus")
        }
    })

    // if someone clicks  continent link
    if(location.pathname.includes('/destinations.html')) {
        var isContinent = localStorage.getItem('visit-continent');
        if(isContinent != 'false'){
            console.log(isContinent)
            $('#tab4a').removeClass('active')
            $('#4a').removeClass('active show')
            $(`#tab${isContinent}`).addClass('active')
            $(`#${isContinent}`).addClass('active show')
        }
    }
})

function purchase(destId,card){
    if(!localStorage.getItem('information')){
        localStorage.setItem('information',JSON.stringify(information))
    }
    if(card){
        location.href = "./checkout.html"
    }
    var destination = JSON.parse(localStorage.getItem('travelDetails'));
    var purchaseDestination;
    for(const d of destination){
        if(d.id == destId){
            purchaseDestination = d;
            break;
        }
    }
    localStorage.setItem('purchaseItem',JSON.stringify(purchaseDestination))
}

function visitContinent(id){
    location.href = "destinations.html"
    localStorage.setItem('visit-continent',id)
}

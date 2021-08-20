import destinations from "../db/destinationDb.js";

const template = document.createElement('template');

template.innerHTML = `
<style>
    h2{
        background-color:#69c6ba;
        color:white;
        margin:0;
        padding:1rem;
    }
    .place {
        display:grid;
        grid-template-columns: 1fr 2fr;,
        width: 80%;
        margin:auto;
        text-align:center;
    }
    button:hover:disabled {
        cursor: not-allowed;
    }
    .information-box {
        display:grid;
        grid-template-columns: 1.5fr 1fr 1fr ;
    }
    img{
        width:100%;
    }
</style>
<div class="place">

    <div class="left">
        <h2 class="country"></h2>
        <img alt="Image" class="image">
    </div>
    <div class="information-box">
        <div class="first-info">
            <h2 class="min-days">Dates</h2>
            <p class="checkin"></p>
            <p class="checkout"></p>
        </div>
        <div class="second-info">
            <h2 class="cities">Destination</h2>
            <P class="first-dest"></p>
            <p class="second-dest"></p>
            <p class="third-dest"></p>
        </div>
        <div class="third-info">
            <h2> Total of <span class="days"> </span> Days </h2>
            <p><span class="remaining-days"> </span> remaining<p>
            <div class="first-button">
                <button id="inc-first" class="inc-button btn btn-primary" >+</button>
                <span id="input-first-dest" class="input-tooltip-value">1</span>
                <button id="dec-first" class="dec-button btn btn-primary" disabled>−</button>
            <div>
            <div class="second-button">
                <button id="inc-second" class="inc-button btn btn-primary" >+</button>
                <span id="input-second-dest" class="input-tooltip-value">1</span>
                <button id="dec-second" class="dec-button btn btn-primary" disabled>−</button>
            <div>
            <div class="third-button">
                <button id="inc-third" class="inc-button btn btn-primary" >+</button>
                <span id="input-third-dest" class="input-tooltip-value">1</span>
                <button id="dec-third" class="dec-button btn btn-primary" disabled>−</button>
            <div>
        </div>
    </div>
                
</div>
`;

class CheckoutCard extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.value = 0;
        this.totalDays = 0;
        this.remainingDays = 0;
        this.inputFirstDest = this.shadowRoot.querySelector('#input-first-dest');
        this.inputSecondDest = this.shadowRoot.querySelector('#input-second-dest');
        this.inputThirdDest = this.shadowRoot.querySelector('#input-third-dest');
        this.remainingDaysDisplay = this.shadowRoot.querySelector('.remaining-days');
        this.firstButtonInc = this.shadowRoot.querySelector('#inc-first');
        this.firstButtonDec = this.shadowRoot.querySelector('#dec-first');
        this.secondButtonInc = this.shadowRoot.querySelector('#inc-second');
        this.secondButtonDec = this.shadowRoot.querySelector('#dec-second');
        this.thirdButtonInc = this.shadowRoot.querySelector('#inc-third');
        this.thirdButtonDec = this.shadowRoot.querySelector('#dec-third');
        this.inputDest = 0;
    }

    increase(dest){
        var button = 0;
        if(dest == 'first-dest'){
            this.value = parseInt(this.inputFirstDest.textContent);
            this.inputDest = this.inputFirstDest;
            button = this.firstButtonDec;
        } else if(dest == 'second-dest') {
            this.value = parseInt(this.inputSecondDest.textContent);
            this.inputDest = this.inputSecondDest;
            button = this.secondButtonDec;
        } else{
            this.value = parseInt(this.inputThirdDest.textContent);
            this.inputDest = this.inputThirdDest;
            button = this.thirdButtonDec;
        }
        this.remainingDays -= 1;
        this.value += 1;
        this.inputDest.innerHTML = this.value;
        this.remainingDaysDisplay.innerHTML = this.remainingDays

        if(this.remainingDays < 1){
            this.firstButtonInc.disabled = true;
            this.secondButtonInc.disabled = true;
            this.thirdButtonInc.disabled = true;

        }
        if(this.value){
            button.disabled = false;
            return;
        }

    }
    decrease(dest){
        var button = 0;
        if(dest == 'first-dest'){
            this.value = parseInt(this.inputFirstDest.textContent)
            this.inputDest = this.inputFirstDest;
            button = this.firstButtonDec;
        }else if(dest == 'second-dest'){
            this.value = parseInt(this.inputSecondDest.textContent)
            this.inputDest = this.inputSecondDest;
            button = this.secondButtonDec;
        }else{
            this.value = parseInt(this.inputThirdDest.textContent)
            this.inputDest = this.inputThirdDest;
            button = this.thirdButtonDec;
        }
        this.remainingDays += 1;
        this.value -= 1;
        this.inputDest.innerHTML = this.value;
        this.remainingDaysDisplay.innerHTML = this.remainingDays
     
        if(this.remainingDays >= 1 ){
            this.firstButtonInc.disabled = false;
            this.secondButtonInc.disabled = false;
            this.thirdButtonInc.disabled = false;
        }   
        if(this.value == 1){
            button.disabled = true;
            return 
        }
    }
    
    // do something after html is loaded
    connectedCallback(){
        var index = JSON.parse(localStorage.getItem('purchaseItem')).id - 1;
        var information = JSON.parse(localStorage.getItem('information'));

        var country = this.shadowRoot.querySelector('.country');
        var firstDest = this.shadowRoot.querySelector('.first-dest');
        var secondDest = this.shadowRoot.querySelector('.second-dest');
        var thirdDest = this.shadowRoot.querySelector('.third-dest');
        var checkIn = this.shadowRoot.querySelector('.checkin');
        var checkOut = this.shadowRoot.querySelector('.checkout');
        var img = this.shadowRoot.querySelector('img');
        var days = this.shadowRoot.querySelector('.days');
        var remainingDays = this.shadowRoot.querySelector('.remaining-days');

        country.innerText = destinations[index].countryName;
        firstDest.innerText =  destinations[index].citiesName[0];
        secondDest.innerText =  destinations[index].citiesName[1];
        thirdDest.innerText =  destinations[index].citiesName[2];
        img.src = destinations[index].img;
        var checkinDate = new Date(information.checkinDate);
        checkIn.innerText = `Check In Date : ${checkinDate.toDateString()}` 
        var checkoutDate = new Date(information.checkoutDate);
        checkOut.innerText = `Check Out Date : ${checkoutDate.toDateString()}` 
        var totalDays = (checkoutDate - checkinDate) / (1000*3600*24);
        var remaining = totalDays - 3;

        days.innerText = totalDays;
        this.totalDays = totalDays;
        remainingDays.innerText = remaining;
        this.remainingDays = remaining;


        var firstButton = this.shadowRoot.querySelector('#inc-first');
        var secondButton = this.shadowRoot.querySelector('#inc-second');
        var thirdButton = this.shadowRoot.querySelector('#inc-third');
        if (remaining==0){
            firstButton.disabled = true;
            secondButton.disabled = true;
            thirdButton.disabled = true;
        }
        this.firstButtonInc.addEventListener('click',()=>this.increase('first-dest'));
        this.firstButtonDec.addEventListener('click',()=>this.decrease('first-dest'));
        this.secondButtonInc.addEventListener('click',()=>this.increase('second-dest'));
        this.secondButtonDec.addEventListener('click',()=>this.decrease('second-dest'));
        this.thirdButtonInc.addEventListener('click',()=>this.increase('third-dest'));
        this.thirdButtonDec.addEventListener('click',()=>this.decrease('third-dest'));
    }

    // do something after html is remove
    disconnectedCallback(){ 
        console.log('hihihi')
    }
}
window.customElements.define('checkout-card',CheckoutCard);
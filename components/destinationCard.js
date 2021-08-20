import destinations from "../db/destinationDb.js";
const template = document.createElement('template');

template.innerHTML = `
<style>
    .tm-recommended-place {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        margin-bottom: 25px;
    }
    .tm-recommended-title {
        font-size: 1.2rem;
        font-weight: 600;
        text-transform: uppercase;
        margin: 0 0 0.5rem 0;
    }
    .tm-recommended-img {
        width: 270px;
    }
    
    .tm-recommended-description-box {
        padding: 30px;
        width: 500px;
    }
    .tm-recommended-price-box {
        background-color: #69c6ba;
        background-image: url(../img/button-curve.png);
        background-repeat: no-repeat;
        background-size: auto 100%;
        font-weight: 400;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding-left: 20px;
        width: 200px;
        transition: all 0.3s ease;
    }
      
    .tm-recommended-price-box:hover {
        background-color: #c66995;
    }
      
    .tm-recommended-price {
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
    }
      
    .tm-recommended-price-link {
        color: white;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    .tm-text-highlight {
        color: #c66995;
        font-weight: 600;
    }
    a,
    a:hover,
    a:focus {
      text-decoration: none;
      outline: none;
    }
    .hide-card{
        display:none;
    }
    .tm-text-gray {
        color:#787676;
    }
</style>
<div class="tm-recommended-place">
    <img alt="Image" class="img-fluid tm-recommended-img">
    <div class="tm-recommended-description-box">
        <h3 class="tm-recommended-title"></h3>
        <p class="tm-text-highlight"></p>
        <p class="dates"></p>
        <p class="tm-text-gray"></p>
    </div>
    <a href="./checkout.html" id="purchase" class="tm-recommended-price-box">
        <p class="tm-recommended-price"></p>
        <p class="tm-recommended-price-link">Purchase</p>
    </a>                        
</div>

`;

class DestinationCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    purchase(id){
        var information = JSON.parse(localStorage.getItem('information'))
        if(information.checkinDate == null || information.checkoutDate == null){
            alert('Please input check in and check out dates')
            return;
        }
        localStorage.setItem('purchaseItem',JSON.stringify(destinations[id]))
    }

    // do something after html is loaded
    connectedCallback(){
        var id = parseInt(this.getAttribute('id')) - 1;

        // if (id == -1){
        //     id = JSON.parse(localStorage.getItem('purchaseItem')).id -1
        // }
        var searched = JSON.parse(localStorage.getItem('searched'));
        var destination = JSON.parse(localStorage.getItem('travelDetails'));
        var title = this.shadowRoot.querySelector('.tm-recommended-title');
        var highlight = this.shadowRoot.querySelector('.tm-text-highlight');
        var description = this.shadowRoot.querySelector('.tm-text-gray');
        var price = this.shadowRoot.querySelector('.tm-recommended-price');
        var img = this.shadowRoot.querySelector('img');

        if(!destination[id].show && searched){
            this.remove();
        }
        
        title.innerText = destinations[id].days + " days " + destinations[id].countryName;

        highlight.innerText =  destinations[id].citiesName;
        description.innerText = destinations[id].description;
        price.innerText = `$${destinations[id].price}`;
        img.src = destinations[id].img;
        this.shadowRoot.querySelector('#purchase').addEventListener('click',()=>this.purchase(id));
    }

    // do something after html is remove
    disconnectedCallback(){ 
        // this.shadowRoot.querySelector('#purchase').removeEventListener('click');
    }
}
window.customElements.define('destination-card',DestinationCard);
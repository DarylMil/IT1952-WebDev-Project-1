

var account = JSON.parse(localStorage.getItem('account'));
var userSigned = JSON.parse(localStorage.getItem('userSigned'));

$(function(){
    $('#signin-email').val(userSigned.email);
    var nameUser = userSigned.name.split(" ")[0].charAt(0).toUpperCase() + userSigned.name.slice(1);
    $('#welcome').text(`Welcome Back, ${nameUser}`)
    
    // if client has purchase items before load below
    var purchases = userSigned.purchases;
    var index = -1;
    for (let purchase of purchases){
        index += 1;
        $('#recent-purchase')[0].innerHTML += (`
        <span class="flex-container mb-2"> 
            <span>${purchase.purchaseItem.countryName}</span> 
            <button id="invoice-${index}" class="invoice-button" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="loadInvoice(${index})">Print Invoice</button> 
        </span>
        <hr>
        `)
    }
})

function printInvoice(){
    // get the invoice
    var invoiceNumber = $('#invoice-number').text();
    console.log(invoiceNumber)
    var opt = {
        margin:       1,
        filename:     `${invoiceNumber}`,
        image:        { type: 'webp', quality: 1 },
      };
    var invoice = $('#travel-invoice')[0];
    html2pdf().set(opt).from(invoice).save();
}

function loadInvoice(index){
    var purchase = userSigned.purchases[index];
    $('#invoice-date').text(`${purchase.purchaseDate}`);
    $('#invoice-number').text(`#${purchase.invoiceNumber}`);
    console.log(purchase.travellerDetails)
    $('#travellers-details')[0].innerHTML = "";
    for(let traveller of purchase.travellerDetails){
        $('#travellers-details')[0].innerHTML += (
        `
        <tr>
            <td>
            <span class="text-inverse">${traveller.traveller}</span><br>
            </td>
            <td class="text-right">${traveller.passport}</td>
        </tr>
        `
        )
    }
    $('#travel-country').text(`${purchase.purchaseItem.countryName}`)
    $('#travel-date').text(`${purchase.checkedDate}`)
    $('#adult-child').text(`${purchase.information.adult} Adult & ${purchase.information.children} Children`)
    $('#locations').text(`${purchase.purchaseItem.citiesName}`)
    $('#days').text(`${purchase.purchaseItem.days}`)
    $('#total-paid').text(`$${purchase.price}`)
}

function removeClassDelay(element, milliseconds){
    setTimeout(() => {
        $(element).removeClass('success')
        $(element).removeClass('error')
        $(element).text("")
    }, milliseconds);
}


function changePassword(){
    var newPassword = $('#signin-password').val();
    if(newPassword.length <6){
        $('#success-state').addClass('error');
        $('#success-state').text('Password needs to have at least 6 characters.')
        removeClassDelay('#success-state',4000);
        return;
    }
    var index = -1;
    for(let user of account){
        index += 1;
        if(user.email == userDetails.email){

            user = {
                ...user,
                password:newPassword
            }
            account[index] = user
            localStorage.setItem('account',JSON.stringify([...account]));
            localStorage.setItem('userSigned',JSON.stringify(user))
            $('#success-state').text('Successfully Change Password.')
            $('#success-state').addClass('success')
            removeClassDelay('#success-state',4000);
            return;
        }
    }
}
new Popper ($('.sign-out-button'),$('.tooltip-text'), {
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

function signout(){
    localStorage.removeItem('userSigned');
    $('#signoutModal').modal('show');
}
$(document).on('hide.bs.modal','#signoutModal', function () {
    location.href = 'index.html';
})
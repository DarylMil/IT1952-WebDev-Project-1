function flipCard(){
    $('#flip-card').addClass('flip')
}

document.addEventListener('click',function(e){
    console.log(e.target.closest("#flip-card"),$('#send-message-btn'))

    if(e.target.closest("#flip-card")) return;
    if($('#flip-card').hasClass('flip')){
        $('#flip-card').removeClass('flip')
    }else{
        return
    }
})

var form = document.getElementById("my-form");
        
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
        if(response.status == 404){
            $('#my-form-status').removeClass('success')
            $('#my-form-status').addClass('error')
            status.innerHTML = '<i class="fas fa-exclamation-circle"></i>  Oops! There was a problem submitting your form'
        }else{
            $('#my-form-status').addClass('success')
            status.innerHTML = '<i class="fas fa-check-circle"></i>  Thanks for your submission!';
            setTimeout(() => {
                $('#flip-card').removeClass('flip')
                $('#my-form-status').removeClass('success')
                status.innerHTML = "";
            }, 4000); 
            form.reset()
        }
    }).catch(error=>{
        $('#my-form-status').removeClass('success')
        $('#my-form-status').addClass('error')
        status.innerHTML = '<i class="fas fa-exclamation-circle"></i>  Oops! There was a problem submitting your form'
    })
}
form.addEventListener("submit", handleSubmit)
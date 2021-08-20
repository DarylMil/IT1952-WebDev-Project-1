const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function removeClassDelay(element, milliseconds){
    setTimeout(() => {
        $(element).removeClass('error')
        $(element).text("")
    }, milliseconds);
}

$('#signup-form').submit((e)=>{
    e.preventDefault();
    var email = $('#signup-email').val();
    var password = $('#signup-password').val();
    var name = $('#signup-name').val();
    var userArray = JSON.parse(localStorage.getItem('account'));
    var userSigned = {
        email,
        name,
        password,
        purchases:[]
    };
    if(userArray != null){
        for(const user of userArray){
            if(user.email == email){
                $('#success-state-1').addClass('error')
                $('#success-state-1').text("This email address already exist.")
                removeClassDelay('#success-state-1',4000);
                return;
            }
        }
        localStorage.setItem('account',JSON.stringify([...userArray,{...userSigned}]));
    }else{
        localStorage.setItem('account',JSON.stringify([{...userSigned}]));
    }
    localStorage.setItem('userSigned',JSON.stringify(userSigned));
    // check if it was redirected while checking out
    var isRedirected = localStorage.getItem('redirected');
    if(isRedirected){
        location.replace("checkout.html");
        localStorage.removeItem('redirected');
    }else{
        location.replace("account.html");
    }
})

$('#signin-form').submit((e)=>{
    e.preventDefault();
    var email = $('#signin-email').val();
    var password = $('#signin-password').val();
    var userArray = JSON.parse(localStorage.getItem('account'))
    if(userArray !=null){
        for(const user of userArray){
            if(user.email == email){
                if(user.password !== password){
                    $('#success-state-2').text("Your password is incorrect.")
                    $('#success-state-2').addClass('error')
                    removeClassDelay('#success-state-2',4000);
                    return;
                }else{
                    // if information is correct
                    location.replace("account.html");
                    localStorage.setItem('userSigned',JSON.stringify(user));
                    // check if it was redirected while checking out
                    var isRedirected = localStorage.getItem('redirected');
                    if(isRedirected){
                        location.replace("checkout.html");
                        localStorage.removeItem('redirected');
                        
                    }else{
                        location.replace("account.html");
                    }
                    return;
                }
            }
        }
    }
    $('#success-state-2').addClass('error')
    $('#success-state-2').text("Email doesn't exist. Please Sign up.")
    removeClassDelay('#success-state-2',4000);
    
});
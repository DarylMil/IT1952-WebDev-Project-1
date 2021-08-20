
var user = JSON.parse(localStorage.getItem('userSigned'))
console.log(user, location.pathname)
if(user && location.pathname == "/signin.html"){
    location.replace('account.html')
} else if (!user && location.pathname == "/account.html"){
    location.replace('signin.html')
}
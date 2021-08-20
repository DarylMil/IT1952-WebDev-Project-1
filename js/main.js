// Change top navbar on scroll
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".tm-top-bar").addClass("active");
    } else {                    
        $(".tm-top-bar").removeClass("active");
    }
});

// Smooth scroll to search form
$('.tm-down-arrow-link').click(function(){
$.scrollTo('#tm-section-search', 300, {easing:'linear'});
});

// Slick Carousel
$('.tm-slideshow').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

// Navbar account function
function authenticationCheck(){
    var userSigned = JSON.parse(localStorage.getItem('userSigned'));
    if(userSigned){
        location.href = 'account.html'
    }else{
        location.href = 'signin.html'
    }
}
// place on logo and home and destination
function resetSearch(){
    var destination = JSON.parse(localStorage.getItem('travelDetails'))
    var results = destination.map(d=>{
        var temp = Object.assign({}, d);
        temp['show'] = true;
        return temp;
    })
    localStorage.setItem('travelDetails',JSON.stringify(results))
    localStorage.setItem('visit-continent',JSON.stringify(false))
    localStorage.removeItem('searched')
    localStorage.removeItem('redirected')
}

// Close navbar after clicked
$('.nav-link').click(function(){
    $('#mainNav').removeClass('show');
});

$('.tm-current-year').text(new Date().getFullYear());  // Update year in copyright        
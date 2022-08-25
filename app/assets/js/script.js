
//
/*===========================================
ISHAT NOOR MAHI | PORTFOLIO 2.0 | 2022 

CUSTOM JAVASCRIPT CODES
=============================================*/

var animatedElems = document.querySelectorAll('.inm-scrollObserver');
var animatedTitle = document.querySelectorAll('.inm-title-v2');
animatedElems.forEach(elem=> {
    // elem.setAttribute('data-wow-duration', '1s')
});
animatedTitle.forEach(title => {
    title.classList.add("inm-scrollObserver")
    title.classList.add("animate__fadeInUp")
    title.setAttribute('data-wow-duration', '.6s')
})

wow = new WOW(
    {
        boxClass: 'inm-scrollObserver',      // default
        animateClass: 'animated', 
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();



$('svg.radial-progress').each(function (index, value) {
    $(this).find($('circle.complete')).removeAttr('style');
});
var scrolObs = 0;
$(window).scroll(function () {
    $('svg.radial-progress').each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
            $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
            $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
        ) {
            // Get percentage of progress
            percent = $(value).data('percentage');
            // Get radius of the svg's circle.complete
            radius = $(this).find($('circle.complete')).attr('r');
            // Get circumference (2πr)
            circumference = 2 * Math.PI * radius;
            // Get stroke-dashoffset value based on the percentage of the circumference
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Transition progress for 1.25 seconds
            $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
        }
    });

}).trigger('scroll');

var stats = document.getElementById('stats');

$('.counter').countUp();


var secondaryRow = document.getElementById('secondaryRow');
let loadMoreBtn = document.getElementById('loadMoreBtn');
let seeAllWorkBtn = document.getElementById('seeAllWork')
loadMoreBtn.addEventListener('click',function loadMoreWork() {
    secondaryRow.classList.remove('d-none');
    loadMoreBtn.classList.add('d-none')
    seeAllWorkBtn.classList.remove('d-none')
})

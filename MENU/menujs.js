jQuery(document).ready(function($) { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.homelist').addClass('active');
        }
        else {
            $('.homelist').removeClass('active');
        }
    })
    })

    // trung js vs FAQ (botton search)
const btnSearch = document.getElementById("search")
const boxSearch = document.getElementById("box-search")

btnSearch.addEventListener("click", () => {
    btnSearch.classList.toggle('start');
    boxSearch.classList.toggle('start');
})



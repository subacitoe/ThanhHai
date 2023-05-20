'use strict';

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

$(document).ready(function () {
    var s =  $(".nav-main").clone();
    s.appendTo(".nav-mobile");
});

var modal = document.getElementById("myModal");

function navFind()
{
    var input_nav, filter_nav, ul, li, a, i, txtValue_nav;

    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    input_nav = document.getElementById("myInputNav");
    filter_nav = input_nav.value.toUpperCase();


    input_nav.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            modal.style.display = "block";
            setTimeout(() => {
                for (i = 0; i < li.length; i++) {
                    a = li[i].getElementsByTagName("a")[0];
                    txtValue_nav = a.textContent || a.innerText
                    if (txtValue_nav.toUpperCase().indexOf(filter_nav) > -1) {
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";
                    }
                }
                modal.style.display = "none";
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("myBtn").click();

            }, 800)
            closeNav();
        }
    });
}

function myFunction() {
    var input, input_nav,filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");


    input.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            modal.style.display = "block";
            setTimeout(() => {
                for (i = 0; i < li.length; i++) {
                    a = li[i].getElementsByTagName("a")[0];
                    txtValue = a.textContent || a.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";
                    }
                }
                modal.style.display = "none";
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById("myBtn").click();

            }, 800)

        }
    });

    $(".x-searching").click(function () {
        input.value = null;
        reload() ;
        $(".x-searching").hide();

    })
    if (filter != null) {
        $(".x-searching").show();
    }
    if (filter == "") {
        $(".x-searching").hide();

    }

}
// 
function reload() {
    modal.style.display = "block";
    var input, filter, ul, li, a, i, txtValue;
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    setTimeout(() => {
        for (i = 0; i < li.length; i++) {
            li[i].style.display = "";
        }
        modal.style.display = "none";
    }, 800)

}

function filterSmartKey() {
    modal.style.display = "block";
    var filter, ul, li, a, i, txtValue;
    filter = "SMART KEY".toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");


    setTimeout(() => {
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
        modal.style.display = "none";
    }, 800)
}

function filterRemote() {
    modal.style.display = "block";
    var filter, ul, li, a, i, txtValue;
    filter = "Remote".toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");



    setTimeout(() => {
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
        modal.style.display = "none";
    }, 800)
}
// alert



//API
var StringData = "";
fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.product.length; i++) {
            StringData = StringData +
                "<li class='item-card-product' onclick= " + " location.href='" + data.product[i].link + "'" + '' + ">" +
                "<div class='Product-img-text'>"
                + "<div class='img-product'>" +
                "<img src='" + data.product[i].link_image + "'alt=''>" +
                "</div>" +
                "<div class='text-product'><a href='#'>" + data.product[i].name + "</a> " + "<div class='content-item'>" + data.product[i].content + "</div>" + "<div class='cost'>" + data.product[i].cost + "</div>" +
                "</div>" +
                "</div>"
                + "</li>"
        }
        $(".list-Product-right").append(StringData);
    });


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// time
function GetTime()
{
    var today = new Date();
    $(".time").html(today.getHours());
    $(".min").html(today.getMinutes());
    $(".second").html(today.getSeconds());
}
setInterval(GetTime, 1000);
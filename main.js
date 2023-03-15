const toggle_btn = document.getElementsByClassName('toggle_btn')[0]
const navbar_links = document.getElementsByClassName('navbar_links')[0]

toggle_btn.addEventListener('click',() =>
{
    navbar_links.classList.toggle('active')
})

// multiple text


const typed = new Typed('.multiple-text',{
    strings : ['Student','Programmer'],
    typeSpeed: 50,
    backSpeed:50,
    backDelay:1000,
    loop:true
});

// 

// scroll reveal

ScrollReveal().reveal('.first_delay',{ delay: 500 });


// images

function p1()
{
    document.getElementById('p1').style.display="block";
}
function pclose1()
{
    document.getElementById('p1').style.display="none";
}
function p2()
{
    document.getElementById('p2').style.display="block";
}
function pclose2()
{
    document.getElementById('p2').style.display="none";
}
function p3()
{
    document.getElementById('p3').style.display="block";
}
function pclose3()
{
    document.getElementById('p3').style.display="none";
}
function p4()
{
    document.getElementById('p4').style.display="block";
}
function pclose4()
{
    document.getElementById('p4').style.display="none";
}
function p5()
{
    document.getElementById('p5').style.display="block";
}
function pclose5()
{
    document.getElementById('p5').style.display="none";
}
function p6()
{
    document.getElementById('p6').style.display="block";
}
function pclose6()
{
    document.getElementById('p6').style.display="none";
}
function p7()
{
    document.getElementById('p7').style.display="block";
}
function pclose7()
{
    document.getElementById('p7').style.display="none";
}
function p8()
{
    document.getElementById('p8').style.display="block";
}
function pclose8()
{
    document.getElementById('p8').style.display="none";
}
function p9()
{
    document.getElementById('p9').style.display="block";
}
function pclose9()
{
    document.getElementById('p9').style.display="none";
}
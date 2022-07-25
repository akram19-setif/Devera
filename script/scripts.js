// SCROLL REVIAL ANIMATION
const sr2 =ScrollReveal({
  origin:'top',
  distance:'150px',
  duration: 1500,
  reset:true
})
//Scroll Home 
sr2.reveal('.home',{})
sr2.reveal('.home_img',{delay:150})
sr2.reveal('.row .col-2',{delay:350})
//Scroll our services 
sr2.reveal('.services',{})
sr2.reveal('.title',{delay:150})
sr2.reveal('.services .title .col-3',{delay:350})
//Scroll feature
sr2.reveal('.feature',{})
sr2.reveal('.feature .row',{delay:150})
sr2.reveal('.feature .row .col-4',{interval:150})
sr2.reveal('.feature-img',{delay:350})
//Scroll team
sr2.reveal('.team',{})
sr2.reveal('.team .row',{delay:150})
sr2.reveal('.team .row .col-4',{interval:150})
//scroll testimonial
sr2.reveal('.testimonial',{})
sr2.reveal('.testimonial .row',{delay:150})
sr2.reveal('.testimonial .row .col-3',{interval:150})
//scroll Contact us
sr2.reveal('.contact-us',{})
sr2.reveal('.contact-us .wrapper',{delay:350})






// ==========menu-toggle =======
var MenuItems= document.getElementById('MenuItems');
let toggle=document.querySelector('.menu-icon');
let listItem=document.querySelectorAll('.navbar nav #MenuItems li');
 MenuItems.style.maxHeight='0px';
//  listItem.forEach(el =>el.style.margin="0px 20px 0px 0px");
 toggle.addEventListener('click',function () {
  if(MenuItems.style.maxHeight == "0px") {
         MenuItems.style.maxHeight='260px';
         listItem.forEach(el =>el.style.margin="30px 0px 40px");
  }
  else
  {
    MenuItems.style.maxHeight='0px';
    listItem.forEach(el =>el.style.margin="0px 20px 0px 0px");
  }
});



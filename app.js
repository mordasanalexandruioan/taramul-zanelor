const buttonIntro = document.querySelectorAll('#introBTN');
const cGreen = document.querySelectorAll('.cGreen');
const buttonSignUp = document.querySelectorAll('#signBTN');
const signText = document.querySelectorAll('.text');
const guide1stPar = document.querySelectorAll('.guide-firstP');
const guide3rdPar = document.querySelectorAll('.guide-thirdP');
const guideBTN = document.querySelectorAll('#guideBTN');
const ovTrust = document.querySelectorAll('.ov-trust');
const ovDev = document.querySelectorAll('.ov-development');
const ovConnect = document.querySelectorAll('.ov-connect');
const childImg = document.querySelectorAll('.child');
const beeSlide = document.querySelectorAll('.beeSlide');
const clsHeader = document.querySelectorAll('.classes-header');
const blinkBee = document.querySelectorAll('.blinkBee');


const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

buttonIntro.forEach(but => {
    appearOnScroll.observe(but);
});

cGreen.forEach(green => {
    appearOnScroll.observe(green);
});

buttonSignUp.forEach(but => {
    appearOnScroll.observe(but);
});

signText.forEach(text => {
    appearOnScroll.observe(text);
});

guide1stPar.forEach(text => {
    appearOnScroll.observe(text);
});

guide3rdPar.forEach(text => {
    appearOnScroll.observe(text);
})

guideBTN.forEach(but => {
    appearOnScroll.observe(but);
});

ovTrust.forEach(box => {
    appearOnScroll.observe(box);
});

ovDev.forEach(box => {
    appearOnScroll.observe(box);
});

ovConnect.forEach(box => {
    appearOnScroll.observe(box);
});

childImg.forEach(img => {
    appearOnScroll.observe(img);
});

beeSlide.forEach(img => {
    appearOnScroll.observe(img);
});

clsHeader.forEach(text => {
    appearOnScroll.observe(text);
});

blinkBee.forEach(img => {
    appearOnScroll.observe(img);
});
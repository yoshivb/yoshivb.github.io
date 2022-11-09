import fullpage from 'fullpage.js';
import project from '../project.json'

var fullPageInstance = fullpage('#fullpage', 
{
    navigation: false,
    //sectionsColor: ['#262626', '#262626', '#262626', '#262626'],
    animateAnchor: false,
    anchors: project.Sections,
	menu: '.menu',
    scrollingSpeed: 800,
    licenseKey: "9VK18-QK38H-MKGHI-J8N2H-OVNXN"
});


//Parallax logic
const parallaxElements = document.querySelectorAll<HTMLElement>(".parallax");

for(let elem of parallaxElements)
{
    document.addEventListener('mousemove', (e:MouseEvent) => parallax(e, elem));
    //elem.addEventListener('mouseleave', (e:MouseEvent) => parallaxReset(elem));
}

function parallax(e: MouseEvent, elem: HTMLElement) 
{
    const rect = elem.getBoundingClientRect();
    let w = rect.width/2;
    let h = rect.height/2;
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let depth = `translate(${(x - w) * 0.06}px, ${(y - h) * 0.06}px)`;

    elem.style.transform = depth;
    elem.style.transition = "";
}

function parallaxReset(elem: HTMLElement) 
{
    elem.style.transition = "200ms ease"
    elem.style.transform = "translate(0,0)";
}
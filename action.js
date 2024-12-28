function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var date = now.toLocaleDateString().toString()
  
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('tim1').textContent = hours;
    document.getElementById('tim2').textContent = minutes;
    document.getElementById('tim3').textContent = date;
  }
  
  setInterval(updateClock, 1000);
  function tempir() {
    const oo = document.querySelector('.m12');
    const oo1 = oo.firstElementChild;
    const tempi = ['24', '25', '28', '27', '26'];
    let index = 0;
  
    setInterval(() => {
      oo1.textContent = tempi[index];
      index = (index + 1) % tempi.length;
    }, 5000);
  }
  tempir();
  function icon() {
    const m22= document.querySelector('.m221');
const listm = ['<i class="fa-solid fa-sun"></i>','<i class="fa-solid fa-cloud-moon-rain"></i>']
    let ind = 0;
    setInterval(() => {
      m22.innerHTML=listm[ind];
      ind = (ind + 1) % listm.length;
    }, 5000);
  }
  icon()
  function icon2() {
    const m22= document.querySelector('.a2');
const listmo = ['<i class="fa-solid fa-sun"></i>','<i class="fa-solid fa-cloud-moon-rain"></i>']
    let indu = 0;
    setInterval(() => {
      m22.innerHTML=listmo[indu];
      indu = (indu + 1) % listmo.length;
    }, 5000);
  }
  icon2()
  const par61 = document.querySelector('.par61'); 
  const par62 = document.querySelector('.par62'); 
  const par3 = document.querySelector('.par3'); 
  let par2 = document.querySelector('.par2').firstElementChild; 
  let numi = par2.textContent.toString(); 
  const par4 = document.querySelector('.par4'); 
  const par5 = document.querySelector('.par5'); 
  const par6= document.querySelector('.par6'); 
  const parx1 = document.querySelector('.parx1'); 
  const parx2 = document.querySelector('.parx2'); 
  const parx3 = document.querySelector('.parx3'); 
  const add = document.querySelector('.add');
  const add2 = document.querySelector('.add2');
  const addrappel = document.querySelector('.rappeladd');
let par63 = document.querySelector('.par63');
let par63h4 = document.querySelector('.par63').firstElementChild;

add.addEventListener('click',()=>{
    par61.style.display = 'flex';
    par62.style.display = 'flex';
    parx3.style.display = 'flex';
    add.style.display = 'none';
    add2.style.display = 'flex';
addrappel.value=' ';
  } );

  parx1.addEventListener('click',()=>{
    par3.style.display = 'none';
    par4.style.display = 'none';
    parx1.style.display = 'none';
    add2.style.display = 'none';
    add.style.display = 'flex';
    let num = parseInt(numi); 
    if (num >= 2) {
      numi = num - 1 ;
      par2.textContent= numi ;

    }
    else{
      numi = num - 1;
      par2.textContent= numi ;

    }

  } );
  parx2.addEventListener('click',()=>{
    par5.style.display = 'none';
    par6.style.display = 'none';
    parx2.style.display = 'none';
    add.style.display = 'flex';
    add2.style.display = 'none';
    let num = parseInt(numi); 
    if (num >= 2) {
      numi = num - 1 ;
      par2.textContent= numi ;

    }
    else{
      numi = num - 1 ;
      par2.textContent= numi ;

    }

  } );
  parx3.addEventListener('click',()=>{
    par61.style.display = 'none';
    par62.style.display = 'none';
    parx3.style.display = 'none';
    par63.style.display = 'none';
    let num = parseInt(numi); 
    if (num >= 2) {
      numi = num - 1 ;
      par2.textContent= numi ;
    }
    else{
      numi = num - 1 ;
      par2.textContent= numi ;
    }
    addrappel.style.display = 'flex';
    add2.style.display = 'none';
    add.style.display = 'flex';
  } );
add2.addEventListener('click',()=>{
  let addr= addrappel.value.toString();
  par63h4.textContent= addr;
addrappel.style.display = 'none';
add2.style.display = 'none';
par62.style.display = 'none';
par63.style.display = 'flex';
add.style.display = 'none';
let num = parseInt(numi); 
if (num >= 2) {
  numi = num + 1 ;
  par2.textContent= numi ;

}
else{
  numi = num + 1 ;
  par2.textContent= numi ;

}
})
const re3 = document.querySelector('.re3');
const re1 = document.querySelector('.re1');
const re2 = document.querySelector('.re2');
const re2Bar = document.querySelector('.reacher');
re3.addEventListener('click',()=>{
  re3.style.display='none';
  re2.style.display='flex';

})
 // menu app------------------------------------
 let menuBtn = document.querySelector('.option.menu');
 let cont = document.querySelector('.cont');
 let menu = document.querySelector('.menuApp');
 menuBtn.addEventListener('click', () => {
   cont.classList.toggle('hidden');
   menu.classList.toggle('show');
 });
 let menu2 = document.querySelector('.menu2');
 let menu3 = document.querySelector('.menu3');
 let plan1 = document.querySelector('.plan1');
 let plan2 = document.querySelector('.plan2');
 let point1 = document.querySelector('.point1');
 let point2 = document.querySelector('.point2');

 plan2.addEventListener('mouseenter', () => {
  menu2.style.display='none';
  menu3.style.display='flex';
  point1.style.background = 'rgba(206, 204, 204, 0.61)';
  point2.style.background = 'white';

});
plan1.addEventListener('mouseenter', () => {
  menu3.style.display='none';
  menu2.style.display='flex';
  point2.style.background = 'rgba(206, 204, 204, 0.61)';
  point1.style.background = 'white';
});
const packmini = document.querySelector('.pac.ka8');
const pack6 = document.querySelector('.pac.ka6');
const pack7 = document.querySelector('.pac.ka7');
const pack5 = document.querySelector('.pac.ka5');
const pas = document.querySelector('.pas');
const pakcn = document.querySelector('.packN.kp1');
packmini.addEventListener('click', () => {
  pack6.classList.toggle("masque");
  pack7.classList.toggle("masque");
  pack5.classList.toggle("masque");
  packmini.classList.toggle("zome");
  packmini.classList.toggle("blur");
  pas.classList.toggle("cursor");
  pakcn.classList.toggle("masque");
  });
  const packmini2 = document.querySelector('.pac.ka20');
const pack17 = document.querySelector('.pac.ka17');
const pack18 = document.querySelector('.pac.ka18');
const pack19 = document.querySelector('.pac.ka19');
const pakcn2 = document.querySelector('.packN.kp2');
packmini2.addEventListener('click', () => {
  
  pack17.classList.toggle("masque");
  pack18.classList.toggle("masque");
  pack19.classList.toggle("masque");
  packmini2.classList.toggle("zome");
  packmini2.classList.toggle("blur");
  pas.classList.toggle("cursor");
  pakcn2.classList.toggle("masque");
  });
  const packmini3 = document.querySelector('.pac.ka24');
const pack21 = document.querySelector('.pac.ka21');
const pack22 = document.querySelector('.pac.ka22');
const pack23 = document.querySelector('.pac.ka23');
const pakcn3 = document.querySelector('.packN.kp3');
packmini3.addEventListener('click', () => {
  pack21.classList.toggle("masque");
  pack22.classList.toggle("masque");
  pack23.classList.toggle("masque");
  packmini3.classList.toggle("zome");
  packmini3.classList.toggle("blur");
  pas.classList.toggle("cursor");
  pakcn3.classList.toggle("masque");
  });

  const navu = document.querySelector('.nav');
  const charit = document.querySelector('.charit');
  console.log(navu);

navu.addEventListener('click', () => {
charit.classList.add("shox");
charit.classList.remove("shoxanim");
});
const scalie = document.querySelector('.scalie');
scalie.addEventListener('click', () => {
  charit.classList.remove("shox");
  charit.classList.add("shoxanim");
})
// ---------------------------dark mode
const dark = document.querySelector('.opti13');
const mode1 = document.querySelector('.task1');
const mode2 = document.querySelector('.task2');
const mode3 = document.querySelector('.task3');
const mode4 = document.querySelector('.tas.k4');
const mode5 = document.querySelector('.tas.k5');
const mode6 = document.querySelector('.tas.k6');
const mode7 = document.querySelector('.tas.k7');
dark.addEventListener('click',()=>{
  dark.classList.toggle("colorB");
  charit.classList.toggle("modeN");

  mode1.classList.toggle("modeB");
  mode2.classList.toggle("modeB");
  mode3.classList.toggle("modeB");
  mode4.classList.toggle("modeB");
  mode5.classList.toggle("modeB");
  mode6.classList.toggle("modeB");
  mode7.classList.toggle("modeB");
})
// whatsapp ----------------------------
const wh21 = document.querySelector('.wh21');
const wh22 = document.querySelector('.wh22');
const wh23 = document.querySelector('.wh23');
const wh24 = document.querySelector('.wh24');
const whats1 = document.querySelector('.whats1');
const whats2 = document.querySelector('.whats2');
const whats3 = document.querySelector('.whats3');
const whcha1 = document.querySelector('.whchat1');
const whcha2 = document.querySelector('.whchat2');
const whcha3 = document.querySelector('.whchat3');
const whcha4 = document.querySelector('.whchat4');
const whmenu = document.querySelector('.whmenu')
wh21.addEventListener('click', () => { 
  wh22.classList.add("whbgn1");
  wh23.classList.add("whbgn1");
  wh23.classList.remove("whbg3","whbg2","whbgn2","whbgn3");
  wh22.classList.remove("whbg3","whbg2","whbgn2","whbgn3");
  wh21.classList.add("whbg1");
  whcha1.style.display = 'flex';
  whcha2.style.display = 'none';
  whcha3.style.display = 'none';
});
wh22.addEventListener('click', () => { 
  wh21.classList.add("whbgn2");
  wh23.classList.add("whbgn2");
  wh23.classList.remove("whbg3","whbg1","whbgn1","whbgn3");
  wh21.classList.remove("whbg3","whbg1","whbgn1","whbgn3");
  wh22.classList.add("whbg2");
  whcha1.style.display = 'none';
  whcha2.style.display = 'flex';
  whcha3.style.display = 'none';
});
wh23.addEventListener('click', () => { 
  wh21.classList.add("whbgn3");
  wh22.classList.add("whbgn3");
  wh22.classList.remove("whbg2","whbg1","whbgn1","whbgn2");
  wh21.classList.remove("whbg2","whbg1","whbgn1","whbgn2");
  wh23.classList.add("whbg3");
  whcha1.style.display = 'none';
  whcha2.style.display = 'none';
  whcha3.style.display = 'flex';
});
const story = document.querySelector('.optionw.n1');
const commu = document.querySelector('.optionw.n2');
const appels = document.querySelector('.optionw.n3');
const addst = document.querySelector('.optionw.n4');
story.addEventListener('click', () => {
  whcha4.style.display = 'flex';
  whcha1.style.display = 'none';
  whcha2.style.display = 'none';
  whcha3.style.display = 'none';
  wh21.style.display = 'none';
  wh22.style.display = 'none';
  wh23.style.display = 'none';
  wh24.style.display = 'flex';
  addst.style.display = 'flex';
  commu.style.display = 'none';
  appels.style.display = 'none';
  story.style.display = 'none';
  addst.style.flexDirection= 'column';
  addst.style.background= 'rgb(1, 16, 16)';
  whmenu.style.background= 'rgba(1, 16, 16, 0)';

});
wh24.addEventListener('click', () => {
  whcha4.style.display = 'none';
  whcha1.style.display = 'flex';
  whcha2.style.display = 'none';
  whcha3.style.display = 'none';
  wh21.style.display = 'flex';
  wh22.style.display = 'flex';
  wh23.style.display = 'flex';
  wh24.style.display = 'none';
  addst.style.display = 'none';
  commu.style.display = 'flex';
  commu.style.flexDirection= 'column';
  appels.style.flexDirection= 'column';
  story.style.flexDirection= 'column';
  whmenu.style.background= 'rgb(1, 16, 16)';
  appels.style.display = 'flex';
  story.style.display = 'flex';

});
const cr7 = document.querySelector('.namco.nco1');
const sendc1 = document.querySelector('.sendc.sco1');
const msg1 = document.querySelector('.messag.ms1');
const nbrmsg1  = document.querySelector('.nbrmsg.con1');
const retour1 = document.querySelector('.convretour.rco1');
const convcr7 = document.querySelector('.convirsa.cr7');
const sendcCR = document.querySelector('.audioc.aco1').firstElementChild;
sendc1.addEventListener('click', () => {
  cr7.click();
});
msg1.addEventListener('click', () => {
  cr7.click();
});
cr7.addEventListener('click', () => {
  whats1.style.display = 'none';
  whats2.style.display = 'none';
  whats3.style.display = 'none';
  convcr7.style.display = 'flex';
})
retour1.addEventListener('click', () => {
  whats1.style.display = 'flex';
  whats2.style.display = 'flex';
  whats3.style.display = 'flex';
  convcr7.style.display = 'none';
  nbrmsg1.style.display = 'none';
  sendcCR.style.color = 'rgb(19, 178, 251)';

})
let iconwhat = document.querySelector('.pac.ka9');
let whatsap = document.querySelector('.whatsapp');
iconwhat.addEventListener('click', () => {
  cont.style.display='none';
  whatsap.style.display='flex';
  menu.style.display='none';
})
let home = document.querySelector('.option.home');
home.addEventListener('click',()=>{
  cont.style.display='flex';
  whatsap.style.display='none';
  menu.style.display='none';

})












  




  








//change navbar styles on scroll
  //  The addEventListener() method attaches an event handler to a window.
window.addEventListener('scroll',()=>
  { 
    // Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
  });

// shows/hide faq answer
const faqs= document.querySelectorAll('.faq');
// faqs.forEach(function(faq) 
faqs.forEach(faq=>
  {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        //change icon
        const icon=faq.querySelector('.faq__icon i');
        if(icon.className==='uil uil-plus'){
          icon.className='uil uil-minus';
        }
        else
        {
          icon.className='uil uil-plus';
        }
    })
  });

  // show/hide nav menu
  const menu=document.querySelector(".nav__menu");
  const menuBtn=document.querySelector("#open-menu-btn");
  const closeBtn=document.querySelector("#close-menu-btn");

  menuBtn.addEventListener('click',()=>
  {
    menu.style.display="flex";
    menuBtn.style.display="none";
    closeBtn.style.display="inline-block";
  })

  closeBtn.addEventListener('click',()=>
  {
    menu.style.display="none";
    menuBtn.style.display="inline-block";
    closeBtn.style.display="none";
  })

// forms


function validateForm(){
  let f=true;
  let name=document.getElementById('name').value;
  let email=document.getElementById('email').value;
  let phone=document.getElementById('phone').value;
   
  if(name.length==0)
  {
    document.getElementById('username').innerHTML="**this field is required";
    f= false;
  }
  else if(name.length <= 2)
  {
    document.getElementById('username').innerHTML="**name is too short";
    f=false;
  }
  else if(name.includes('#')||name.includes('@')||(/[0-9]/.test(name)))
  {
    document.getElementById('username').innerHTML="**please enter correct name";
    f=false;
  }
   
  if(email.length==0)
  {
    document.getElementById('usermail').innerHTML="**this field is required";
    f= false;
  }
  else if(email.indexOf('@')==0||!((email.includes('@gmail.com'))||(email.includes('@gmail.in'))))
  {
    document.getElementById('usermail').innerHTML="**please enter correct mail";
    f= false;
  }
   
  if(phone.length==0)
  {
    document.getElementById('userphone').innerHTML="**this field is required";
    f= false;
  }
  else if(phone.length!=10|| isNaN(phone))
  {
    document.getElementById('userphone').innerHTML="**please enter correct number";
    f= false;
  }

  
  
  
   
  return f;
}













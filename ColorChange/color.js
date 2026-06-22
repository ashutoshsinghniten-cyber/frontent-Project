const buttons=document.querySelectorAll('.box')
const bdy=document.querySelector('body');
buttons.forEach(function (button){
    //console.log(button);
    button.addEventListener('click', function (e){
        //console.log(e)
        //console.log(e.target)
        if(e.target.id==='red'){
            bdy.style.backgroundColor=e.target.id;
        }
         if(e.target.id==='blue'){
            bdy.style.backgroundColor=e.target.id;
        }
         if(e.target.id==='aqua'){
            bdy.style.backgroundColor=e.target.id;
        }
         if(e.target.id==='yellow'){
            bdy.style.backgroundColor=e.target.id;
        }
    })

})
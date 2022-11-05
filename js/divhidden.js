var btton = document.querySelector('.homebutton')
var divhidden = document.querySelector('.about-me')

btton.addEventListener('click', function() {

    if(divhidden.style.display === 'block' && btton.style.visibility === 'visible'){

        divhidden.style.display = 'none'
        btton.style.visibility = 'visible'

    }

    else{

        divhidden.style.display = 'block'
        btton.style.visibility = 'hidden'

    }

});
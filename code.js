var buttons = document.querySelectorAll('.slider button');
var images = document.querySelectorAll('img');
var image = document.querySelector('.show-image');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onButtonClick);
}

var currentIndex = Math.floor(images.length / 2);

function onButtonClick(e) {
    var button = e.currentTarget;
    var imagePosition = image.style.left;
    if (button.dataset.side === 'left') {
        if (currentIndex !== images.length - 1) {
            image.style.left = Number(imagePosition.substring(0, imagePosition.length - 2)) - 300 + 'px';
            currentIndex++;
        }
        else if (currentIndex === images.length - 1) {
            image.style.left = '0px';
            currentIndex = 0;
        }
    }
    else {
        if (currentIndex !== 0) {
            image.style.left = Number(imagePosition.substring(0, imagePosition.length - 2)) + 300 + 'px';
            currentIndex--;
        }
        else if (currentIndex === 0) {
            image.style.left = (images.length-1)*(-300) + 'px';
            currentIndex = images.length-1;
        }

    }
}


document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 

            var imagePosition = image.style.left;
            
                if (currentIndex !== images.length - 1) {
                    image.style.left = Number(imagePosition.substring(0, imagePosition.length - 2)) - 300 + 'px';
                    currentIndex++;
                }
                else if (currentIndex === images.length - 1) {
                    image.style.left = '0px';
                    currentIndex = 0;
                }
            

            console.log("left swipe")
        } else {
            /* right swipe */
            var imagePosition = image.style.left;
            if (currentIndex !== 0) {
                image.style.left = Number(imagePosition.substring(0, imagePosition.length - 2)) + 300 + 'px';
                currentIndex--;
            }
            else if (currentIndex === 0) {
                image.style.left = (images.length-1)*(-300) + 'px';
                currentIndex = images.length-1;
            }
            console.log("right swipe")
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};



// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const hearts = document.querySelectorAll('span.like-glyph');
modal.classList.add('hidden');



function forEachEmptyHeart(){

  hearts.forEach( (heart) => {

    heart.addEventListener('click', () => {

      mimicServerCall()
      .then( (data) => {
        const newHeart = heart
        activateHeart(newHeart)
      })
      .catch( (error) => {
        modal.classList.toggle('hidden')
        modalMessage.innerHTML = error

        setTimeout(function(){
          modal.classList.toggle('hidden')
        }, 5000)
      })
    })
  })
};



function activateHeart(heart){
  if (heart.innerHTML === EMPTY_HEART){
    heart.innerHTML = FULL_HEART
    heart.classList.toggle('activated-heart')
  } else if(heart.innerHTML === FULL_HEART){
    heart.innerHTML = EMPTY_HEART
    heart.classList.toggle('activated-heart')
}};



forEachEmptyHeart();



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

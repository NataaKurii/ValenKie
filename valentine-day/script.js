const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"I promise you it will be unforgettable", images:"images/cat-02.gif"},
  {text:"Yakin??", images:"images/cat-03.gif"},
  {text:"Sebegitunya kah Sama diriku Kecewa si", images:"images/cat-04.gif"},
  {text:"Terakhirr ni benerkah nda mau", images:"images/cat-05.gif"},
]
const ohyes = {text:"Yess Tapi jujur aku ga kepikiran sejauh ini AHAHAHAHA Love You Kie", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Ye"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Dih'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})
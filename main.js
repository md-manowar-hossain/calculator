function s(ele) {
  return document.querySelector(ele)
}

function sAll(ele) {
  return document.querySelectorAll(ele)
}
let display=s('#display');
let all_Button =sAll('.button');
for(let button=0; button<all_Button.length; button++){
  all_Button[button].addEventListener('click', function(){
    if (this.value==='=') {
      let result = eval(display.value);
      display.value = result;
    } 
    else if (this.value === 'AC'){
      display.value = '';
    }
    else if (this.value === 'C'){
      let sResult = display.value.slice(0,-1);
      display.value = sResult;
    }
    else {
      display.value += this.value;
    }
  })
}


for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

let rangevalue = document.querySelector('.audiorange').value
let range = document.querySelector('.audiorange')


function rangeFunction() {
  document.querySelector('input[type="range"].slider-progress').style.setProperty('--value', document.querySelector('.audiorange').value)
}

function loopRange(delay, callback){
  var loop = function(){
      callback();
      setTimeout(loop, delay);
  }; loop();
};

loopRange(1, rangeFunction);

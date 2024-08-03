const decreaseButton = document.getElementById('dec');
const increaseButton = document.getElementById('inc');
const reset = document.getElementById('reset');

decreaseButton.onclick = function(){
    document.getElementById('CountLabel').innerText = parseInt(document.getElementById('CountLabel').innerText) - 1;
}

increaseButton.onclick = function(){
    document.getElementById('CountLabel').innerText = parseInt(document.getElementById('CountLabel').innerText) + 1;
}

reset.onclick = function(){
    document.getElementById('CountLabel').textContent = 0;
}
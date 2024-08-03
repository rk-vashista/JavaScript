let minElement = document.getElementById('from');
let maxElement = document.getElementById('to');

let random;
document.getElementById('randButton').onclick = function() {
    let min = parseInt(minElement.value);
    let max = parseInt(maxElement.value);
    random = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById('number').innerHTML = random;
    console.log(`random: ${random}`);
}


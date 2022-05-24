let btn = document.getElementById('btn-blue');
let btnGetValue = document.getElementById('user-text');
let str = 'strung asadad';
console.log(str.length);

btnGetValue.addEventListener('click', function(){
    //will get the string data type
    let textCool = document.getElementById('text-input').textCool;
    document.getElementById('put-text').innerHTML = "<h2>" +textCool.length + "</h2>"
});

btn.addEventListener('click', function(){
let elem = document.getElementById('para');
elem.style.color = 'blue';
});

function changeColor(newColor) {
    let elem = document.getElementById('para');
    elem.style.color = newColor;
}

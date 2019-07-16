let btn = document.createElement('button');
let btnText = document.createTextNode('Click Me!');
btn.appendChild(btnText);
document.body.appendChild(btn);
let input = document.getElementById('input');
let submit = document.getElementById('submit');


btn.addEventListener('click', function () {
    alert('NICE!!!');
})

submit.addEventListener('click', function () {
    event.preventDefault();
    alert(text);
})

let div = document.createElement('div');
document.body.appendChild(div);

div.addEventListener('mouseover', function () {
    div.style.backgroundColor = 'blue';
})

div.addEventListener('mouseout', function () {
    div.style.backgroundColor = 'white';
})

let p = document.createElement('p');
let textP = document.createTextNode('This is my paragraph');
document.body.appendChild(p);
p.appendChild(textP);

p.addEventListener('click', function () {
    textP.style.color = 'red';
})

let button = document.createElement('button');
let buttonText = document.createTextNode('Name');
let div2 = document.createElement('div');
document.body.appendChild(button);
document.body.appendChild(div2);
button.appendChild(buttonText);

button.addEventListener('click', function () {
    let span = document.createElement('span');
    let spanText = document.createTextNode('Kevin');
    div2.appendChild(span);
    span.appendChild(spanText);
})

let button2 = document.createElement('button');
document.body.appendChild(button2);
let button2Text = document.createTextNode('List');
button2.appendChild(button2Text);
let ul = document.createElement('ul');
document.body.appendChild(ul);

let friendsArray = ['Kyle', 'Brandon', 'Tim', 'Jacob', 'Drew', 'Brittany', 'Morgan', 'Jack', 'Daniel', 'Justin'];
let indexPos = 0
button2.addEventListener('click', function () {
    if (indexPos >= 10) {
        return;
    } else {
        let liText = document.createTextNode(friendsArray[indexPos]);
        let li = document.createElement('li');
        indexPos++;
        ul.appendChild(li);
        li.appendChild(liText);
    }
})
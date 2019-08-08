let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
        if(ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked') 
        } else if(ev.target.tagName === 'SPAN') {
                let div = ev.target.parentNode;
                div.remove();
        }
} );

let button = document.getElementById('toDo_button');
button.addEventListener('click', newElement);

let enterInput = document.getElementById('toDo_input');
enterInput.addEventListener('keypress', function($) {
        if ($.keyCode === 13) {
                newElement();
        }
});

function newElement() {
        let li = document.createElement('li');
        let inputValue = document.getElementById('toDo_input').value;
        let text = document.createTextNode(inputValue);
        li.appendChild(text);
        if (inputValue == "") { 
                } else {
                document.getElementById('toDo_list').appendChild(li);
        }
        document.getElementById('toDo_input').value = "";
        let span = document.createElement('SPAN');
        let txt = document.createTextNode("  X");
        span.className = 'close';
        span.appendChild(txt);
        li.appendChild(span);
}

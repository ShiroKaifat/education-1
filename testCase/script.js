const allTasks = [];
let valueInput = 'empty';
let input = null;

window.onload = function init () {
    input = document.getElementById('add-task');
    input.addEventListener('change', updateValue);
    render();
}

const updateValue = (event) => {
    valueInput = event.target.value;
}

const onClickButton = (value) => {
    allTasks.push(value);
    valueInput = 'empty';
    input.value = '';
    render();
}

const render = () => {
    const content = document.getElementById('content');
    const addButton = document.getElementById(`addButton`);

    if (allTasks.length % 2 === 0) {
        addButton.onclick =  () =>  onClickButton(valueInput.toLowerCase());
    } else {
        addButton.onclick =  () =>  onClickButton(valueInput.toUpperCase());
    }

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    allTasks.map(item => {
       const container = document.createElement('div');
       const text = document.createElement('p');

       if (item.includes('555')) {
           item = item.replace(/555/g, '---');
       }
       text.innerText = item;
       container.appendChild(text);
       content.appendChild(container);
    });
}
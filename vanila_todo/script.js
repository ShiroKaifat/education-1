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

const onClickButton = () => {
    allTasks.push({
        text: valueInput,
        isCheck: false,
        color: document.getElementById('color-task').value
    });
    valueInput = 'empty';
    input.value = '';
    render();
}

const onChangeCheckbox = (index) => {
    allTasks[index].isCheck = !allTasks[index].isCheck;
    render();
}

const render = () => {
    const content = document.getElementById('content');
    const addButton = document.getElementById(`addButton`);
    addButton.onclick =  () =>  onClickButton();

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    allTasks.map((item, index) => {
       const container = document.createElement('div');
       container.id = `task-${index}`;
       container.className = 'task-container';
       const divForCheck = document.createElement('div');
       divForCheck.className = 'divForCheck';
       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.checked = item.isCheck;
       checkbox.onchange = () => onChangeCheckbox(index);
       checkbox.className = item.isCheck ? 'text-task done-text' : 'text-task';
       divForCheck.appendChild(checkbox);
       container.appendChild(divForCheck);
       const text = document.createElement('p');
       text.innerText = item.text;
       text.className = item.isCheck ? 'text-task done-text' : 'text-task';
       container.appendChild(text);
       content.appendChild(container);
       divForCheck.style.background = item.color;
       text.style.background = item.color;
    });
}
const allTasks = [];
let valueInput = '';
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

    if (valueInput.trim() === '') {
        input.value = '';
        return;
    }
    allTasks.push({
        text: valueInput,
        isCheck: false,
        color: document.getElementById('color-task').value
    });
    valueInput = '';
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
    addButton.onclick = () =>  onClickButton();

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    allTasks.forEach((item, index) => {
       const container = document.createElement('div');
       container.id = `task-${index}`;
       container.className = 'task-container';
       const divForCheck = document.createElement('div');
       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.checked = item.isCheck;
       checkbox.onchange = () => onChangeCheckbox(index);

       divForCheck.appendChild(checkbox);
       container.appendChild(divForCheck);
       const text = document.createElement('p');
       text.innerText = item.text;

       if (item.isCheck) {
           text.className = 'text-task done-text';
           text.style.background = '#ccc';
           divForCheck.className = 'text-task done-text';
           divForCheck.style.background = '#ccc';
       } else {
           text.className = 'text-task';
           text.style.background = item.color;
           divForCheck.className = 'text-task';
           divForCheck.style.background = item.color;
       }
       container.appendChild(text);
       content.appendChild(container);

    });
}
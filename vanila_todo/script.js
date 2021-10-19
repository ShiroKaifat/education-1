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

const colorChoice = () => {
    let colorPick;
    document.getElementsByName('chk').forEach(item => {
        if (item.checked) {
            switch (item.value) {
                case 'blue':
                    colorPick = '#0000FFFF';
                    break;
                case 'dark-orange':
                    colorPick = '#ffa400';
                    break;
                case 'green':
                    colorPick = '#008000FF';
                    break;
                case 'red':
                    colorPick = '#FF0000FF';
                    break;
                case 'bright-green':
                    colorPick = '#00d669';
                    break;
                case 'purple-blue':
                    colorPick = '#530cff';
                    break;
            }
        }
    });
    return colorPick;
}

const onClickButton = () => {
    if (valueInput.trim() === '') {
        input.value = '';
        return;
    }
    allTasks.push({
        text: valueInput,
        isCheck: false,
        color: colorChoice()
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
       text.style.width = '100%';
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
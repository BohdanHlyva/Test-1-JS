const getS = selector => document.querySelector(selector);
let form = document.forms;
let count = 0;

function editBtn() {
    getS('.editBlock').classList.remove('hidden')
    getS('.area').value = getS('.top').innerHTML;
    getS('.styleBlock').classList.add('hidden')
}

function saveBtn() {
    getS('.top').innerHTML = getS('.area').value;
    getS('.editBlock').classList.add('hidden')
    console.log(getS('.top').innerHTML)
    console.log(getS('.area').value)

}

function styleBtn() {
    getS('.styleBlock').classList.remove('hidden')
    getS('.editBlock').classList.add('hidden')
    if (getS("body").contains(getS(".colors"))) {
        getS('.colors').remove();
    }
}

function fontSize() {
    getS('.top').style.fontSize = event.target.value;
}

function fontFamily() {
    getS('.top').style.fontFamily = event.target.value;
}

function fontWeight() {
    getS('.top').style.fontWeight = event.target.checked ? 'bold' : 'normal'
}

function fontStyle() {
    getS('.top').style.fontStyle = event.target.checked ? 'italic' : 'normal'
}

const colors = ['red', 'blue', 'green', 'black', 'yellow', 'pink', 'white', 'purple', 'grey'];
function textColor() {
    let divBack = document.createElement('div');
    divBack.classList.add('colors');
    for (let i = 0; i < colors.length; i++) {
        let divBackColor = document.createElement('div');
        divBackColor.classList.add('colorBox');
        divBackColor.style.background = colors[i];
        divBackColor.setAttribute('onclick', "chooseTextColor()");
        divBack.appendChild(divBackColor);
    }
    getS('.bottom').appendChild(divBack);
    document.querySelector('.colorBtn').disabled = true;
    
}

function chooseTextColor() {
    getS('.top').style.color = event.target.style.backgroundColor
    getS('.bottom').removeChild(event.target.parentElement)
    document.querySelector('.colorBtn').disabled = false;

}

function backgroundColor() {
    let divBack = document.createElement('div');
    divBack.classList.add('colors');
    for (let i = 0; i < colors.length; i++) {
        let divBackColor = document.createElement('div');
        divBackColor.classList.add('colorBox');
        divBackColor.style.background = colors[i];
        divBackColor.setAttribute('onclick', "chooseBackground()");
        divBack.appendChild(divBackColor);
    }
    getS('.bottom').appendChild(divBack);
    document.querySelector('.backBtn').disabled = true;

}

function chooseBackground() {
    getS('.top').style.background = event.target.style.background
    getS('.bottom').removeChild(event.target.parentElement)
    document.querySelector('.backBtn').disabled = false;

}

function addBtn() {
    getS('.secondStep').classList.remove('hidden')
    getS('.firstStep').classList.add('hidden')

}

function chooseForm() {
    if (event.target.value == 'table') {
        getS('.tableBox').classList.remove('hidden')
        getS('.listBox').classList.add('hidden')
        getS('.secondStep').style.height = '430px'
    }
    else if (event.target.value == 'list') {
        getS('.listBox').classList.remove('hidden')
        getS('.tableBox').classList.add('hidden')
        getS('.secondStep').style.height = '240px'

    }
}

let typeOfBorder = '';
function typeBorder() {
    typeOfBorder = event.target.value;
}
let colorOfBorder = '';
function colorBorder() {
    colorOfBorder = event.target.value;
}

function createTable() {
    const countTr = getS('.countTr').value;
    const countTd = getS('.countTd').value;
    const widthTd = getS('.widthTd').value;
    const heightTd = getS('.heightTd').value;
    const widthBorder = getS('.widthBorder').value;
    let table = `<table>`
    for (let i = 1; i <= countTr; i++) {
        table += `<tr>`;
        for (let j = 1; j <= countTd; j++) {
            table += `<td style="width: ${widthTd + 'px'};height: ${heightTd + 'px'};border: ${widthBorder + 'px'} ${typeOfBorder} ${colorOfBorder}">TD</td>`;
        }
        table += `</tr>`;
    }
    table += `</table>`;

    getS('.area').value += table;
    getS('.secondStep').classList.add('hidden');
    getS('.firstStep').classList.remove('hidden');
    getS('.listBox').classList.add('hidden');
    getS('.tableBox').classList.add('hidden');
    getS('.secondStep').style.height = '240px';
    form.formCreate.reset();
    form.formCreateTable.reset();
}

let typeOfList = '';
function typesList() {
    typeOfList = event.target.value;
}

function createList() {
    const countLi = getS('.countLi').value;
    let list = `<ul type="${typeOfList}" >`;
    for (let i = 1; i <= countLi; i++) {
        list += `<li >item ${i}</li>`;
    }
    list += "</ul>";
    getS('.countLi').value = '';
    getS('.area').value += list;
    getS('.secondStep').classList.add('hidden');
    getS('.firstStep').classList.remove('hidden');
    getS('.tableBox').classList.add('hidden');
    getS('.listBox').classList.add('hidden');
    getS('.secondStep').style.height = '240px';
    form.formCreate.reset();
    form.formCreateList.reset();
}

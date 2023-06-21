const square = 100;
const gridContainer = document.querySelector('.container');
const myButton = document.querySelector('.my-button');
myButton.addEventListener('click', function(){

    for (let i = 1; i <= square; i++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.append(i);
    
        gridContainer.append(newCell);
    }
})
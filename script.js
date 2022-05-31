//display dropdown

const select = document.getElementById('select');
const list = document.getElementById('list');
const selectText = document.getElementById('selectText');
const options = document.getElementsByClassName('options');
const inputField = document.getElementById('inputField');

select.onclick = () => {
    list.classList.toggle('open');

    for (option of options) {
        option.onclick = function () {
            selectText.innerHTML = this.innerHTML;
            inputField.placeholder = selectText.innerHTML;
        }
    }
}
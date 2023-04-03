const countValue = document.querySelector('#counter');
// const countValue = document.getElementById('counter'); 
// we can use any of them given above
const increment = () => {
    // get value from ui
    let value = parseInt(countValue.innerText);
    // update the value
    value = value+1;
    // set the value onto ui
    countValue.innerText = value;
};

const decrement = () => {
    // get value from ui
    let value = parseInt(countValue.innerText);
    // update the value
    value = value-1;
    // set the value onto ui
    countValue.innerText = value;
};
const a = document.getElementById('dec');
a.addEventListener('click', decrement);
const b = document.getElementById('inc');
b.addEventListener('click', increment);

//other way is to add onclick on button
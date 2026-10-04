const addNumberToLS = () => {
    const number = Math.ceil(Math.random() * 100)
    console.log(number);
    localStorage.setItem('number', number)
}

const setObjectToLS = () => {
    const customer = {name: 'rohim', products: 3, price: 75}
}

const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('from saved local storage', number);
}
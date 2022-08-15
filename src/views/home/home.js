import view from './home.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    return divElement;
}
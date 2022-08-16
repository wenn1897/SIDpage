import view from './animacion.html';

export default () => {
    const divElementA = document.createElement('div');
    divElementA.innerHTML = view;

    return divElementA;
}
import view from './somos.html';
//mport members from '../../../img/user.png'

const members = [
    {
        "name": "Jorge Andrés",
        "lastname": "Carvajal Ferrer",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Nicolas",
        "lastname": "Corredor Cortes",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Sebastian",
        "lastname": "Villarreal Castro",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Johan Sneider",
        "lastname": "Mendez Vega",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Cristopher ",
        "lastname": "Vargas Ruda ",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Samantha Zulena",
        "lastname": "Silva Sandoval",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Juan Pablo ",
        "lastname": "Mosquera Marín",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Hana Sofia",
        "lastname": "Pinilla Manrique",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Juan Andrés",
        "lastname": "Jiménez Palomino",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Daniel Felipe ",
        "lastname": "Zárate Beltrán",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Dania Lizeth ",
        "lastname": "Guzmán Triviño ",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Daniel Santiago",
        "lastname": "Castañeda Baez",
        "img" : '../../../img/user.png'
    },
    {
        "name": "David Esteban",
        "lastname": "Sanchez Torres",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Willian Eduardo ",
        "lastname": "García Ordóñez",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Cristian Camilo ",
        "lastname": "Niño Rincon",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Henry ",
        "lastname": "Ricaurte Mora",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Jeison Armando",
        "lastname": "Hernández Gamboa",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Daniela Carolina",
        "lastname": "Brito Planchart",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Daniel Mateo",
        "lastname": "Ballesteros Molina",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Juan Sebastian",
        "lastname": "Henriquez Berrios",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Santiago",
        "lastname": "Herrera Velasquez ",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Juan",
        "lastname": "Hurtado",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Johan",
        "lastname": "Cortés",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Laura Tatiana ",
        "lastname": "Ramírez Rodríguez",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Juan Camilo ",
        "lastname": "Yepes Pérez ",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Dilan Guisseppe ",
        "lastname": "Triana Jiménez ",
        "img" : '../../../img/user.png'
    },
    {
        "name": "Samuel ",
        "lastname": "Franco",
        "img" : '../../../img/user.png'
    }
]

export default () => {

    const divElementSomos = document.createElement('div');
    divElementSomos.innerHTML = view;
    
    const elements = divElementSomos.querySelector('#somos');
    members.forEach(member => {
        elements.innerHTML += ` 
        <div class="target">
            <div class="front">
                <img src= ${'../../../img/user'} alt="user" class="">
                <h3 class="">${member.name} ${member.lastname}</h3>
            </div>
            <div class="back">
                <span class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores magni consectetur laborum dolorem, illo ex in aliquam quidem cum voluptatum blanditiis pariatur magnam explicabo deserunt labore totam! Iure, maxime.
                Eveniet fugit laborum earum ad excepturi consequuntur ex consectetur obcaecati voluptatem inventore tempora dolor eos quod.
                </span>
            </div>
        </div>
        `
    })

    
    return divElementSomos;
}
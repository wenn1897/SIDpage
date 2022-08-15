import './style.css';

import { router } from './routes/index.routes';
 
//evento que escucha el cambio de vista en la navegación

window.addEventListener('hashchange', ()=>{
    //console.log(window.location.hash); //con esta linea veo en la consola en cual pestaña de la navegacion estoy
    router(window.location.hash);
})
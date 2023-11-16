const cambiarTitulo = ()=>{
    console.log('desde la funcion cambiarTitulo');
    //obtener el h1
    // const tituloPrincipal = document.getElementById('id')
    // const tituloPrincipal = document.getElementsByTagName('p')
    // const tituloPrincipal = document.getElementsByClassName('btn')
    const tituloPrincipal = document.querySelector('h1');
    console.log(tituloPrincipal);
    //modificar el titulo
    tituloPrincipal.innerHTML = 'Titulo generado desde <b>JS</b>';
    tituloPrincipal.className = 'display-1 text-info'
}

const verMas = ()=>{
    console.log('desde la funcion verMas');
    // OPCION 1
    //crear un parrafo nuevo
    const parrafoNuevo = document.createElement('p'); //<p></p>
    parrafoNuevo.innerHTML = 'También puedes añadir oyentes de eventos para responder a interacciones del usuario, como clics o pulsaciones de teclas. Es crucial tener en cuenta el rendimiento al manipular el DOM, ya que operaciones frecuentes pueden impactar en el rendimiento de la página. En resumen, el DOM proporciona una interfaz poderosa para manipular la estructura y el contenido de una página web, lo que permite crear interacciones dinámicas y experiencias personalizadas para los usuarios.'
    console.log(parrafoNuevo)
    //agregar el parrafo en el HTML
    
}


const btnVerMas = document.getElementById('btnVerMas');

//agregar un manejador de eventos
btnVerMas.addEventListener('click', verMas);

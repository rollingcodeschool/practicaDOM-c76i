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
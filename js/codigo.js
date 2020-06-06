'use strict'

let boton = document.getElementById('boton');
    boton.addEventListener('click', mostrarDatos);

    function mostrarDatos(){
        let cuerpoTabla = document.querySelector('.cuerpoTabla');

        let datos = new XMLHttpRequest();
            datos.open('GET', 'personas.json', true);
            datos.onreadystatechange=function(){
                if(this.readyState == 4 && this.status == 200){
                    cuerpoTabla.innerHTML = '';
                    let datos = JSON.parse(this.responseText);
                    datos.forEach((elemento, indice, arreglo)=>{
                        cuerpoTabla.innerHTML += 
                        `   
                        <tr>
                            <th scope="row">${indice}</th>
                            <td>${elemento.nombre}</td>
                            <td>${elemento.apellido}</td>
                            <td>${elemento.edad}</td>
                            <td>${elemento.profesion}</td>
                         </tr>

                        `;
                    });
                }
            }

            datos.send();
    }
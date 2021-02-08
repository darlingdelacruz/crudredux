import React from 'react';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';

//Redux
import { useDispatch} from 'react-redux';
import {borrarProductoAction,obtenerProductoEditadoAction} from '../actions/productosActions';




const Producto = ({producto}) => {

    const {nombre, precio,id} = producto;

    const dispatch = useDispatch();
    const history = useHistory();

    //Confirmar si desea eliminarlo


    const confirmarEliminarProducto = id =>{
        //Preguntar antes de 

        Swal.fire({
            title: 'Estas seguro?',
            text: "Si lo elimina no se podra recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
            
          }).then((result) => {
            if (result.isConfirmed) {
                //Pasarlo al action
                dispatch (borrarProductoAction(id));
             
            }
          })

        
    }
    const redireccionamiento = producto =>{
        dispatch(obtenerProductoEditadoAction(producto));
        history.push(`/productos/editar/${producto.id}`);
    }
    return (


            <tr>
                <td>{nombre}</td>
                <td><span className ="font-weight-bold">$ {precio}</span></td>
                <td className="acciones">
                    <button type="button" onClick={() =>redireccionamiento(producto)} className="btn btn-primary mr-2">Editar</button>
                    <button
                        type="button"
                        className= "btn btn-danger"
                        onClick={() => confirmarEliminarProducto(id)}
                    >Eliminar</button>
                </td>
            </tr>

      );
}
 
export default Producto;
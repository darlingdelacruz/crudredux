import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITOSO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGAR_PRODUCTOS,
    DESCARGAR_PRODUCTOS_EXITO,
    DESCARGAR_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    

} from '../types';

import clienteAxios from '../config/axios';
import Swal from "sweetalert2";


//Crear nuevos productos
 function  crearNuevoProductoAction(producto){
    return async (dispatch) =>{
        dispatch (agregarProducto());
        
       

        try {
            //Insertar en la api
            await clienteAxios.post('/productos',producto);

            //Si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto));

            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente.',
                'success'
            )
        } catch (error) {
            console.log(error);

            //Si hay un error cambiar el state
            dispatch(agregarProductoError(true));

            //Alerta de error

            Swal.fire({
                icon: 'error',
                title: 'Huebo un error',
                text:'Hubo un error, inteta de nuevo'
            })
        }
    }
}


export default crearNuevoProductoAction;

const agregarProducto  = () => ({
    type:AGREGAR_PRODUCTO

   
})


//Si el producto se guarda en la base de datos

const agregarProductoExito = producto =>({

    type: AGREGAR_PRODUCTO_EXITOSO,
    payload: producto

});


//Si el producto da error

const agregarProductoError = estado =>({

    type:AGREGAR_PRODUCTO_ERROR,
    payload:estado
});


//Funcion que descarga los productos de la base de datos

export function obtenerProductosAction(){
    return async(dispatch)=> {
        dispatch(descargarProductos());
        
        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch(descargarProductosExitosa(respuesta.data))
        } catch (error) {
            console.log(error);
            dispatch(descargarProductosError());
        }

    }
}

const descargarProductos = () =>({
    type:COMENZAR_DESCARGAR_PRODUCTOS,
    payload:true
})

const descargarProductosExitosa = productos =>({
    type:DESCARGAR_PRODUCTOS_EXITO,
    payload:productos
})

const descargarProductosError= () =>({
   type:  DESCARGAR_PRODUCTOS_ERROR,
   payload:true
})

//Selecciona y elimina el producto

export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));

        try {
             await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito());
            //Si se elimina 

            Swal.fire(
                'Eliminado!',
                'El producto se elimino correctamente.',
                'success'
              )
        } catch (error) {
            console.log(error)
            dispatch(eliminarProductoError)

        }
    }
}


const obtenerProductoEliminar = id => ({
    type:OBTENER_PRODUCTO_ELIMINAR,
    payload:id

})


const eliminarProductoExito= () =>({
    type:PRODUCTO_ELIMINADO_EXITO
})


const eliminarProductoError= () =>({
    type:PRODUCTO_ELIMINADO_ERROR,
    payload:true
})

export function obtenerProductoEditadoAction(producto){
    return  (dispatch)=>{
        dispatch(obtnereditarProducto(producto))
    }
}

const obtnereditarProducto = producto => ({
    type:OBTENER_PRODUCTO_EDITAR,
    payload:producto
})

const editarProducto = producto=>({
    type:COMENZAR_EDICION_PRODUCTO,
  
})

export function edictarProductoAction(producto) {
    return  async(dispatch)=>{
    dispatch(editarProducto(producto));
    
    try {
        
       const resultado = clienteAxios.put(`/productos/${producto.id}`,producto)
console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
}
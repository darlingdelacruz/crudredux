import React,{useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {edictarProductoAction} from '../actions/productosActions'
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';
const EdictarProductos = () => {

    const dispatch = useDispatch();
    const history = useHistory();



    //Nuevo producto state
    const [producto, guardarProducto] = useState({

        nombre:'',
        precio:''
    });

 

    //Producto editar
    const productoeditar= useSelector(state => state.productos.productoeditar)

  

    useEffect(() => {
        guardarProducto(productoeditar);
        
    }, [productoeditar]);

    const onchangeFormulario =e =>{
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })

    }




    const {nombre, precio} = producto;


   
    const onSubmitEditarProducto =e =>{
        e.preventDefault();

        dispatch (edictarProductoAction(producto)) ;
        Swal.fire(
            
                'Editado',
                'El producto se edito correctamente.',
                'success'
            
          )

       history.push('/');
    }

    return ( 
<div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Editar Producto
                    </h2>

                    <form
                        onSubmit={onSubmitEditarProducto}
                    
                    >
                        <div className="form-group">
                            <label>Nombre Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="nombre" 
                                value={nombre}
                                onChange={onchangeFormulario}
                            />
                        </div>

                        <div className="form-group">
                            <label>Precio Producto</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="precio"
                                value={precio}
                                onChange={onchangeFormulario}
                            
                            />
                        </div>

                        <button 
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        >Guadar cambios</button>
                    </form>

            
                    

                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EdictarProductos;
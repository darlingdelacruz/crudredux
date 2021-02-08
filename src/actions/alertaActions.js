import  {MOSTRAR_ALERTA, OCULTAR_ALERTA}  from '../types/index'; 




export function mostrarAlerta(alerta) {

    return(dispatch)=>{
        dispatch (crearAlerta(alerta))
    }
    
}



const crearAlerta = alerta =>({
    type:MOSTRAR_ALERTA,
    payload:alerta
})


//Ocutar la alerta


export function ocultar() {
    return(dispatch)=>{
        dispatch(ocutarAlerta());
    }
}

const ocutarAlerta = () => ({
    type:OCULTAR_ALERTA
})
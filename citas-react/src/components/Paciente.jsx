import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleSubmit = () => {
    const respuesta = confirm("¿Estas seguro de eliminar este paciente?")
    if(respuesta){
      eliminarPaciente(paciente.id)
    }
  }

  return (
    <div className='bg-white shadow-md px-5 my-5 mx-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Nombre: {' '}
      <span className='font-normal normal-case'>{paciente.nombre}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Propietario: {' '}
      <span className='font-normal normal-case'>{paciente.propietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Email: {' '}
      <span className='font-normal normal-case'>{paciente.email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Fecha alta: {' '}
      <span className='font-normal normal-case'>{paciente.alta}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      síntomas {' '}
      <span className='font-normal normal-case'>{paciente.sintomas}</span>
    </p>

    <div className='flex justify-between mt-10'>
      <button
        type='button'
        className='bg-indigo-600 hover:bg-indigo-700 
        py-2 px-10 rounded-lg  text-white uppercase font-bold' 
        onClick={ ()=> setPaciente(paciente)}
      >Editar</button>

      <button
        type='button'
        className='bg-red-600 hover:bg-red-700 py-2 px-10 rounded-lg  text-white uppercase font-bold' 
        onClick={handleSubmit}
      >Eliminar</button>
    </div>

     
  </div>
  )
}

export default Paciente

const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 mb-10 uppercase font-bold rounded-md'>
              <p>{children}</p>
    </div>
  )
}

export default Error
const Error = ({children}) => {
    return (
      <div className="bg-red-600 text-white text-center p-3
          uppercase font-bold m-3 rounded-md my-4">
          {children}
      </div>
    )
  }
  
  export default Error
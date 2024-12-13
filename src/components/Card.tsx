const Card = ({children, bg='bg-gray-100' }:any) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Card
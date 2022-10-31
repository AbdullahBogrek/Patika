import { useSelector } from "react-redux"

const Receipt = () => {
  const items = useSelector(state => state.products.items)

  const filtered = items.filter(item => item.count > 0)

  let total = 0
  filtered.map((item) => {
    total += item.price * item.count;
  })

  return (
    <div>
      {filtered.length !== 0 ? (
        <div className='flex flex-row justify-center items-center mt-5'>
          <div className='flex flex-col justify-center items-center w-11/12 lg:w-7/12 h-full shadow-md bg-white py-10'>
            <h4 className='text-4xl font-bold mb-10'>Your Receipt</h4>
              {filtered.map(item => (
                <div key={item.id} className='flex flex-inline justify-between items-center w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12'>
                  <h5 className='text-2xl font-medium'>{item.title}</h5>
                  <h5 className='text-2xl font-medium'>{"x" + item.count}</h5>
                  <h5 className='text-primary text-2xl font-medium'>{"$" + (item.price * item.count)}</h5>
                </div>
              ))
              }
            <hr className='w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12 my-3 border-primary'/>
            <div className='flex flex-inline justify-between items-center w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12'>
              <h5 className='text-2xl font-semibold'>TOTAL</h5>
              <h5 className='text-primary text-2xl font-semibold'>{"$" + total.toLocaleString("en-US", {style:"decimal", currency:"USD"})}</h5>
            </div>
          </div>
        </div>
      ) : ""}
    </div>
  )
}

export default Receipt
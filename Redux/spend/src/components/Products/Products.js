import { useSelector } from "react-redux"

import Product from "./Product"

const Products = () => {
  const budget = useSelector(state => state.products.budget)
  const items = useSelector(state => state.products.items)

  const filtered = items.filter(item => item.count > 0)

  return (
    <div className={`flex flex-col justify-center items-center ${filtered.length !== 0 ? "" : "mb-36"}`}>
      <div className='w-11/12 lg:w-7/12'>
        <div className='h-28 w-full bg-primary text-white text-5xl font-bold flex flex-inline justify-center items-center my-5 sticky top-0'>
          {"$" + budget.toLocaleString("en-US", {style:"decimal", currency:"USD"})}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-center h-full shadow-md bg-background-white">
          {items.map(item => (
            <Product item={item} key={item.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
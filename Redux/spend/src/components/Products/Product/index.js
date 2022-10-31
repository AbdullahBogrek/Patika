import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setBudget } from "../../../redux/Products/productsSlice"

const Product = ({ item }) => {
    const budget = useSelector(state => state.products.budget)

    const [sellIsActive, setSellIsActive] = useState(true)
    const [buyIsActive, setBuyIsActive] = useState(false)
    const [count, setCount] = useState(item.count)
  
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setBudget({id: item.id, count: count}))
        
        if(count > 0)
            setSellIsActive(false)
        else
            setSellIsActive(true)
    }, [count])

    useEffect(() => {
        if(item.price > budget ){
            setSellIsActive(true);
        }
        if(item.price <= budget ){
            setSellIsActive(false);
        }
      }, [budget]);

    let max = Math.floor(budget / item.price) + count

    const handleChange = (amount) => {
        if (amount > max && budget > 0) {
            setCount(max)
            setSellIsActive(false)
            setBuyIsActive(true)
        } else if (amount < 0){
            setCount(0)
            setSellIsActive(true)
            setBuyIsActive(true)
        } else {
            setCount(amount)
            setSellIsActive(false)
            setBuyIsActive(false)
        }
    }
  
    return (
        <div key={item.id} className='bg-white flex flex-col justify-center items-center'>
            <div className='w-full h-[250px] flex justify-center items-center'>
                <img src={item.img} alt='hamburger' className='object-scale-down w-2/3 h-2/3 my-5'/>
            </div>
            <h3 className='text-3xl font-semibold mb-2'>{item.title}</h3>
            <h4 className='text-3xl font-semibold text-primary'>{"$" + item.price.toLocaleString("en-US", {style:"decimal", currency:"USD"})}</h4>

            <div className='grid grid-cols-3 gap-4 mt-3 p-5'>
                <button className={`bg-gray-100 text-xl font-bold py-3 rounded-sm ${!sellIsActive ? "hover:bg-gray-200" : ""}`} onClick={() => handleChange(count - 1)} disabled={count === 0 || sellIsActive}>Sell</button>
                <input className='text-center text-xl font-bold py-3 rounded-sm border border-primary' value={count} onChange={(e) => handleChange(e.target.value)}/>
                <button className={`bg-primary text-xl text-white font-bold py-3 rounded-sm ${!buyIsActive ? "hover:bg-[#189e6b]" : "hover:bg-[#6ccfa9]"}`} onClick={() => handleChange(count + 1)} disabled={buyIsActive}>Buy</button>
            </div>
        </div>
    )
}

export default Product
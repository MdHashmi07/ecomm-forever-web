import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from "../components/Title";
import ProductItems from '../components/ProductItems'

const Collection = () => {

  const {products} = useContext(ShopContext);
  const[showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSetType] = useState('relavent')

  const toggleCategories = (e) => {
      if(categories.includes(e.target.value)) {
        setCategories(prev => prev.filter(item => item !== e.target.value));
      }else {
        setCategories(prev => [...prev, e.target.value]);
      }
  }

  const toggleSubCategories = (e) => {
      if(subCategories.includes(e.target.value)) {
        setSubCategories(prev => prev.filter(item => item !== e.target.value));
      }else {
        setSubCategories(prev => [...prev, e.target.value]);
      }
  }

  const applyFilter = () => {

    let productCopy = products.slice();

    if(categories.length > 0) {
      productCopy = productCopy.filter(item => categories.includes(item.category));
    }

    if(subCategories.length > 0) {
      productCopy = productCopy.filter(item => subCategories.includes(item.subCategory));
    }

    setFilterProducts(productCopy);
  }

  const sortProduct = () => {
    const fpCopy  = filterProducts.slice();

    switch(sortType) {
      case 'low-high' : 
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;
      case 'high-low' : 
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
        break;

      default: 
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [categories, subCategories]);

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/**Filter Options */}
      <div className='w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="dropdown icon" />
        </p>
        {/*Categories */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategories}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategories}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategories}/>Kids
            </p>
          </div>
        </div>
        {/*Sub categories */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${ showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategories}/>Top Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategories}/>Bottom Wear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategories}/>Winter Wear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
         <Title text1={'ALL'} text2={'COLLECTIONS'}/>
         {/*Product Sort */}
         <select onChange={(e) => setSetType(e.target.value)}  className='border-2 border-gray-300 text-sm px-2'>
          <option value="relavent">Sort by: Relavent </option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
         </select>
        </div>
        {/*Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection

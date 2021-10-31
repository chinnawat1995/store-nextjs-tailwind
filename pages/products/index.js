import axios from 'axios'
import { useEffect, useState } from 'react'

import { APP_URL } from '@/config/constant'
import ProductList from '@/components/product/ProductList'

export default function Product({ categories }) {
  const [products, setProduct] = useState([])

  const fetchProduct = async (params = '') => {
    const { data } = await axios.get(`/api/products` + params)

    setProduct(data)
  }

  const handleCategory = (event) => {
    setProduct([])
    fetchProduct(`/categories/${event.target.value}`)
  }

  useEffect(() => {
    fetchProduct()
  }, [setProduct])

  return (
    <>
      <div className="mt-10 pb-2 border-b-2 flex justify-between">
        <h2 className="text-2xl uppercase font-bold">Products</h2>
        <div>
          <select
            name="category"
            className="text-lg border border-gray-400 px-2 py-1 focus:outline-none"
            onChange={handleCategory}>
            <option hidden defaultValue="test">
              Select category
            </option>
            {categories.map((category) => (
              <option key={`category-${category}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <section className="mt-5">
        {!products.length ? (
          <span className="text-xl">Loading</span>
        ) : (
          <ProductList products={products} />
        )}
      </section>
    </>
  )
}

export const getServerSideProps = async ({ context }) => {
  const { data: categories } = await axios.get(`${APP_URL}/api/categories`)

  return {
    props: {
      categories
    }
  }
}

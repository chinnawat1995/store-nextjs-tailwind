import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import { APP_URL } from '@/config/constant'
import RatingList from '@/components/rating/RatingList'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/cart/cart.action'

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
    toast.success('Add to cart success.')
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <Toaster />
      <div className="pb-24 mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5 rounded border border-gray-200">
            <img
              alt={product.title}
              className="w-9/12 p-5 m-auto object-cover object-center"
              src={product.image}
            />
          </div>
          <div className="w-full col-span-7">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <RatingList score={product.rating.rate} />
                <span className="text-gray-600 ml-3">{`${product.rating.count} Reviews`}</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{product.description}.</p>
            <hr className="my-5" />
            <div className="flex">
              <span className="title-font text-2xl font-bold text-light-orange">{`$${product.price}`}</span>
              <button
                onClick={handleAddToCart}
                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail

export const getServerSideProps = async ({ query }) => {
  const { data: product } = await axios.get(`${APP_URL}/api/products/${query.id}`)

  return { props: { product } }
}

import axios from 'axios'

import { APP_URL } from '@/config/constant'
import HeaderBanner from '@/components/banner/HeaderBanner'
import BrandSlideContainer from '@/components/brand/BrandSlideContainer'
import ProductList from '@/components/product/ProductList'

export default function Home({ menProducts, womenProducts }) {
  return (
    <section className="content-center">
      <HeaderBanner />
      <section name="brand-slide" className="mt-10 border-t border-b border-gray-200">
        <BrandSlideContainer />
      </section>
      <div className="mt-20 pb-2 border-b-2">
        <h2 className="text-2xl uppercase font-bold">men's clothing</h2>
      </div>
      <section className="mt-5">
        <ProductList products={menProducts} />
      </section>
      <div className="mt-20 pb-2 border-b-2">
        <h2 className="text-2xl uppercase font-bold">woman's clothing</h2>
      </div>
      <section className="mt-5">
        <ProductList products={womenProducts} />
      </section>
    </section>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  const { data: menProducts } = await axios.get(`${APP_URL}/api/products`, { params: { limit: 4 } })
  const { data: womenProducts } = await axios.get(
    `${APP_URL}/api/products/categories/women's%20clothing`,
    { params: { limit: 4 } }
  )

  return {
    props: {
      menProducts,
      womenProducts
    }
  }
}

import { useSelector } from 'react-redux'
import { Fragment } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useRouter } from 'next/router'

import CartItem from '@/components/shoppingCart/cartItem'

const publishableKey =
  'pk_test_51JqZpNGMo3D3EqohthzTPADW35lY8DNhF1rcpTdh0kNZFeeDI2SORr5Wsld2rTsuxOgi5SXdPUhigO1cO8WXyaY000xjeX81tG'

export default function Cart() {
  const carts = useSelector((state) => state.cart)
  const router = useRouter()

  const subTotal = () => {
    let total = 0
    carts.forEach((item) => {
      total += item.price * item.quantity
    })

    return parseInt(total.toFixed(2))
  }

  const taxCalculate = () => {
    return parseInt((subTotal() * 0.07).toFixed(2)) // tax 7%
  }

  const shippingFree = () => {
    return carts.length > 0 ? 5 : 0
  }

  const renderCartItem = () => {
    if (carts.length) {
      return carts?.map((product) => {
        return (
          <Fragment key={`cart-item-${product.id}`}>
            <CartItem product={product} />
            <hr className="my-5" />
          </Fragment>
        )
      })
    } else {
      return <div className="text-center text-lg">Your cart is empty.</div>
    }
  }

  const amount = () => {
    return `$${(subTotal() + shippingFree() + taxCalculate()).toFixed(2)}`
  }

  const onToken = (token) => {
    router.push('/checkout/success')
  }

  return (
    <section name="carts">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <h3 className="text-2xl pt-2">SHOPPING CART</h3>
          <hr className="my-5" />
          <div name="cart" className="p-2">
            {renderCartItem()}
          </div>
        </div>
        <div className="col-span-4 self-start bg-gray-100 rounded-md">
          <div className="p-8">
            <h4 className="text-xl font-bold">Order Summary</h4>
            <div className="flex justify-between mt-10">
              <div className="text-gray-500">Subtotal</div>
              <div className="font-bold text-gray-600">{`$${subTotal()}`}</div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <div className="text-gray-500">Shipping fee</div>
              <div className="font-bold text-gray-600">{`$${shippingFree()}`}</div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <div className="text-gray-500">Tax</div>
              <div className="font-bold text-gray-600">{`$${taxCalculate()}`}</div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <div>Total</div>
              <div>{amount()}</div>
            </div>
            <div className="mt-10 text-right">
              <StripeCheckout
                name="Nikke Co."
                image="https://stripe.com/img/documentation/checkout/marketplace.png"
                label="Pay now"
                ComponentClass="div"
                amount={amount() * 100} // cents
                currency="USD"
                stripeKey={publishableKey}
                shippingAddress
                billingAddress={false}
                token={onToken}>
                <button className="py-1 px-4 text-xl bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Pay Now
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

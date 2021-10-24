import CartItem from "@/components/shopping-cart/cartItem";

export default function Cart() {
  return (
    <section name="carts">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <h3 className="text-2xl pt-2">SHOPPING CART</h3>
          <hr className="my-5" />
          <div name="cart" className="p-2">
            <CartItem />
            <hr className="my-5" />
          </div>
        </div>
        <div className="col-span-4 self-start bg-gray-100 rounded-md">
          <div className="p-8">
            <h4 className="text-xl font-bold">Order Summary</h4>
            <div className="flex justify-between mt-10">
              <div className="text-gray-500">Subtotal</div>
              <div className="font-bold text-gray-600">$99</div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <div className="text-gray-500">Shipping fee</div>
              <div className="font-bold text-gray-600">$99</div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <div className="text-gray-500">Tax</div>
              <div className="font-bold text-gray-600">$99</div>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <div>Total</div>
              <div>$99</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

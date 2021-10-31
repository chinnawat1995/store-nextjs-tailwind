import axios from '@/lib/axiosConfig'

const ProductDetail = async (req, res) => {
  try {
    const { data } = await axios.get(`/products/${req.query.id}`)
    res.status(200).json(data)
  } catch (error) {
    res.status(200).json({})
  }
}

export default ProductDetail

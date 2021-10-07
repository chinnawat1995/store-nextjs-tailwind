import axios from '@/lib/axiosConfig'

const Product = async (req, res) => {
  try {
    const { data } = await axios.get('/products', { params: { ...req.query } })
    res.status(200).json(data)
  } catch (error) {
    res.status(200).json({})
  }
}

export default Product

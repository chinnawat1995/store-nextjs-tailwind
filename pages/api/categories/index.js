import axios from '@/lib/axiosConfig'

const Category = async (req, res) => {
  try {
    const { data } = await axios.get('/products/categories', { params: { ...req.query } })
    res.status(200).json(data)
  } catch (error) {
    res.status(200).json({})
  }
}

export default Category

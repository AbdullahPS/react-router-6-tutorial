import { Link, useParams } from 'react-router-dom'
import products from '../data'
const SingleProduct = () => {
  const { productId } = useParams()
  const product = products.find((product) => product.id === productId)
  console.log(product)
  return (
    <section className="section product">
      <h2>single product:{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <br />
      <Link to="/products">Back to products</Link>
    </section>
  )
}

export default SingleProduct

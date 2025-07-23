import { useParams } from 'react-router-dom';
import productData from "../data/Product.jsx";

const ProductDetails = () => {
  const { veggieId } = useParams();
  const product = productData[veggieId];

  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex gap-8 p-8">
      <img src={product.image} alt={product.name} className="w-96 rounded-lg" />
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg text-green-700 mb-4">{product.price}</p>
        <div className="mb-4">
          {product.sizes.map((size, index) => (
            <div key={index} className="border p-2 rounded mb-2">
              <span className="font-semibold">{size.label}</span> – {size.price}
            </div>
          ))}
        </div>
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Add to basket</button>
        <p className="mt-6 text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

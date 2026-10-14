
import products from '../data/products';
import MyProduct from '../components/MyProduct';

function ProductList() {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Danh sách sản phẩm</h2>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-4" key={product.id}>
            <MyProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

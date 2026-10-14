
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function MyProduct({ product }) {
  const formatPrice = (price) =>
    price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text>{product.description}</Card.Text>

        <p>
          <strong>Danh mục:</strong> {product.category}
        </p>

        <p>
          <strong>Giá:</strong> {formatPrice(product.price)}
        </p>

        <p>
          <strong>Đánh giá:</strong> ⭐ {product.rating}/5
        </p>

        <p>
          <strong>Giảm giá:</strong>{' '}
          {product.discount > 0 ? (
            <Badge bg="danger">{product.discount}%</Badge>
          ) : (
            'Không có'
          )}
        </p>

        <p>
          <strong>Tình trạng:</strong>{' '}
          {product.instock ? (
            <Badge bg="success">Còn hàng</Badge>
          ) : (
            <Badge bg="secondary">Hết hàng</Badge>
          )}
        </p>

        {product.discount > 0 && product.instock && (
          <Button variant="primary">
            Thêm vào giỏ
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default MyProduct;

import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export const Item = ({ item }) => {
  return (
    <div className="hamburger mb-3 mr-2">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`${item.imgURL}`} />
          <Card.Body>
            <Card.Title className="ct">{item.title}</Card.Title>
            <Card.Text className="ctx1">{item.description}</Card.Text>
            <Card.Text className="ctx2">Nos quedan {item.stock}</Card.Text>
            <Card.Text className="ctx2">${item.price}</Card.Text>
            <Link to={`/items/${item.id}`} className="btn btn-dark">Ver más</Link>
          </Card.Body>
        </Card>
    </div>
  );
};

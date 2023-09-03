import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';
import IProduct from '../../../types/IProduct';

function RandomCards(products: IProduct[]) {
  return products.map((product: IProduct) => {
    const { gameTitle, screenshotList, price } = product;
    const randomIndex = Math.floor(Math.random() * screenshotList.length);
    return (
      <Link to={`/product/${gameTitle}`} key={gameTitle}>
        <Card
          hoverable
          style={{ width: 200 }}
          cover={
            <Image
              alt="example"
              src={screenshotList[randomIndex]}
              height={200}
              style={{ objectFit: 'cover' }}
              preview={false}
            />
          }
        >
          <Card.Meta title={gameTitle} description={`Price: ${price}`} />
        </Card>
      </Link>
    );
  });
}

export default RandomCards;

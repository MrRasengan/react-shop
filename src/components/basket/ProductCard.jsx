

const ProductCard = ({ image, title, description, price, size,quantity }) => {
  return (
    <div className="box">
      <div className="box__image">
        <img src={image} alt={title} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h1>{size}</h1>
      <span>{price}</span>
      <span>{quantity}</span>
    </div>
  );
};

export default ProductCard;
import img4 from '../../img/img4.svg'


const ProductCard = ({ image, title, description, price, size }) => {
  return (
    <div className="box">
      <div className="box__image">
        <img src={image} alt={title} />
        <div className="overlay"></div>
        <button className="box__anim-btn">
          <img src={img4} alt="Add to Cart" />Add to Cart
        </button>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h1>{size}</h1>
      <span>{price}</span>
    </div>
  );
};

export default ProductCard;
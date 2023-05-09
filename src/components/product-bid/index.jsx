import PropTypes from "prop-types";

const ProductBid = ({ published_at }) => (
    <div className="bid-react-area">

        <div className="react-area">
            <span className="number">{published_at}</span>
        </div>
    </div>
);

ProductBid.propTypes = {
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    likeCount: PropTypes.number.isRequired,
};

export default ProductBid;

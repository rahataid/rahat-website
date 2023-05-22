import PlaceBidModal from "@components/modals/placebid-modal";
import ProductBid from "@components/product-bid";
import Anchor from "@ui/anchor";
import CountdownTimer from "@ui/countdown/layout-01";
import { ImageType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";

const Product = ({
    overlay,
    title,
    description,
    location,
    establishedDate,
    published_at,
    auction_date,
    placeBid,
    id,
    path = "/communities/details",
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <>
            <div
                className={clsx(
                    "product-style-one",
                    !overlay && "no-overlay",
                    placeBid && "with-placeBid"
                )}
            >
                <div className="card-thumbnail">
                    <Anchor path={`${path}/${id}`}>
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </Anchor>

                    {auction_date && <CountdownTimer date={auction_date} />}
                </div>
                <Anchor path={`${path}/${id}`}>
                    <span className="product-name mt-5">{title}</span>
                </Anchor>
                <span className="latest-bid">{description}</span>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
        </>
    );
};

Product.propTypes = {
    overlay: PropTypes.bool,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    latestBid: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    likeCount: PropTypes.number.isRequired,
    auction_date: PropTypes.string,
    image: ImageType.isRequired,
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            image: ImageType.isRequired,
        })
    ),
    bitCount: PropTypes.number,
    placeBid: PropTypes.bool,
    disableShareDropdown: PropTypes.bool,
    id: PropTypes.number,
};

Product.defaultProps = {
    overlay: false,
};

export default Product;

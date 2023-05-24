import PlaceBidModal from "@components/modals/placebid-modal";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";

const Product = ({
    overlay,
    donorName,
    donorImage,
    cause,
    amount,
    doneeName,
    doneeImage,
    id,
    path,
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
                    "with-placeBid"
                )}
            >
                <div className="card-thumbnail">
                    <Anchor path={path}>
                        <Image
                            src={donorImage}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </Anchor>
                </div>
                <Anchor path={`${path}/${id}`}>
                    <span className="product-name mt-5">
                        {donorName} to {doneeName}
                    </span>
                </Anchor>
                <span className="latest-bid">{cause}</span>
                <div className="bid-react-area">
                    <Button
                        // path={path}

                        color="primary-alta"
                        className="sal-animate mt--5"
                        size="small"
                    >
                        More Details
                    </Button>
                </div>
                <span className="latest-bid">{amount}</span>
            </div>
            <PlaceBidModal show={showBidModal} handleModal={handleBidModal} />
        </>
    );
};

Product.propTypes = {
    overlay: PropTypes.bool,

    id: PropTypes.number,
};

Product.defaultProps = {
    overlay: false,
};

export default Product;

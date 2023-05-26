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
    status,
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
                <div className="mt-5 d-flex justify-content-between">
                    <Anchor path={`${path}/${id}`}>
                        <span className="product-name ">
                            {donorName} to {doneeName}
                        </span>
                    </Anchor>
                    <div className="pill">Pending</div>
                </div>
                <div className="d-flex justify-content-between">
                    <span className="latest-bid">{cause}</span>
                    <span className="latest-bid">{amount}</span>
                </div>
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

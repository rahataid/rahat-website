import Iconify from "@components/iconify";
import Image from "@components/image/Image";
import { ASSET_VIEW } from "@config";
import Anchor from "@ui/anchor";
import clsx from "clsx";

const Product = ({
    overlay,
    name,
    cover,
    country,
    totalDonationsUsd = 0,
    category,
    address,
    id,
    path = "/communities",
}) => {
    return (
        <>
            <div
                className={clsx(
                    "product-style-one",
                    !overlay && "no-overlay",
                    "with-placeBid"
                )}
            >
                <div className="thumbnail">
                    <Anchor path={`${path}/${address}`}>
                        <Image
                            src={
                                cover
                                    ? `${ASSET_VIEW}/${address}/${cover}`
                                    : "/images/portfolio/tayaba.png"
                            }
                            alt={name}
                            ratio="6/4"
                            className="thumbnail-img"
                            // height={533}
                            // width={533}
                        />
                    </Anchor>
                    <div className="pill">{category}</div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <Anchor path={`${path}/${address}`}>
                        <span className="product-name mt-2">
                            {name || "Community Name"}
                        </span>
                    </Anchor>
                </div>
                <div className="latest-bid">
                    <span>
                        <Iconify
                            // style={{ marginRight: "6px" }}
                            icon="carbon:location"
                        />
                        {country}
                    </span>
                    <span>
                        <Iconify
                            icon={"arcticons:budgetmylife"}
                            // style={{ marginRight: "6px" }}
                        />
                        $ {Number(totalDonationsUsd)?.toFixed(2)}
                    </span>
                </div>
            </div>
        </>
    );
};

Product.defaultProps = {
    overlay: false,
};

export default Product;

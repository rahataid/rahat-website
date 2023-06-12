import Image from "@components/image/Image";
import { ASSET_VIEW } from "@config";
import Anchor from "@ui/anchor";
import { fCurrency } from "@utils/formatNumber";
import clsx from "clsx";
import codes from "../../../data/country-codes.json";

const Product = ({
    overlay,
    name,
    cover,
    country,
    fundRaisedLocal = 0,
    category,
    address,
    currency,
    path = "/communities",
}) => {
    const countrycode = codes[country].toLowerCase();
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
                        <span className="product-name">
                            <h6 className="mb--5">
                                {name || "Community Name"}
                            </h6>
                        </span>
                    </Anchor>
                </div>
                <div className="latest-bid">
                    <span>
                        <img
                            src={`https://hatscripts.github.io/circle-flags/flags/${countrycode}.svg`}
                            width="20"
                        />
                        <span style={{ padding: 5 }}>{country}</span>
                    </span>
                    <span>
                        {currency}{" "}
                        {fCurrency(Number(fundRaisedLocal)?.toFixed(0))}
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

import Anchor from "@ui/anchor";
import truncateEthAddress from "@utils/string";
import Image from "next/image";

const UserDropdown = ({ accounts = [], balances = [], details }) => {
    return (
        <div className="icon-box">
            <Anchor path="/author">
                <Image
                    src="/images/icons/boy-avater.png"
                    alt="Images"
                    layout="fixed"
                    width={38}
                    height={38}
                />
            </Anchor>
            <div className="rn-dropdown">
                <div className="rn-inner-top">
                    <h4 className="title">{details?.name}</h4>
                    <span>{details?.email}</span>
                </div>
                <div className="rn-product-inner">
                    <ul className="product-list">
                        {accounts.map((account, i) => {
                            return (
                                <li className="single-product-list">
                                    <div className="thumbnail">
                                        <Anchor path="/product">
                                            <Image
                                                src="/images/portfolio/portfolio-07.jpg"
                                                alt="Nft Product Images"
                                                layout="fixed"
                                                width={50}
                                                height={50}
                                            />
                                        </Anchor>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">
                                            {truncateEthAddress(account, 6)}
                                        </h6>
                                        <span className="price">
                                            {balances[i]} ETH
                                        </span>
                                    </div>
                                    <div className="button" />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="add-fund-button mt--20 pb--20">
                    <Anchor
                        className="btn btn-primary-alta w-100"
                        path="/connect"
                    >
                        Add Your More Funds
                    </Anchor>
                </div>
                <ul className="list-inner">
                    <li>
                        <Anchor path="/author">My Profile</Anchor>
                    </li>
                    <li>
                        <Anchor path="/edit-profile">Edit Profile</Anchor>
                    </li>
                    <li>
                        <Anchor path="/connect">Manage funds</Anchor>
                    </li>
                    <li>
                        <button type="button" onClick={() => {}}>
                            Sign Out
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserDropdown;

"use client";

import ConnectWallet from "@components/wallet/connect-wallet";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { useSignMessage, useAccount } from "wagmi";
import SuspensewithSearchParams from "@components/utils/suspense-with-search-params";
import VerifyModal from "@components/modals/verify-modal";

export default function Home(className, space, clsx) {
    // ... (rest of the code remains the same)
    const [selectedOption, setSelectedOption] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const { isConnected } = useAccount();
    const { data: signMessageData, signMessage } = useSignMessage();

    const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
    const verifyModalHandler = () => setIsVerifyModalOpen((prev) => !prev);

    return (
        <>
            {/* <style jsx>{`
                .container {
                    margin: 0 auto;
                    align-items: center;
                    background-color: #000;
                }
                .verify-background {
                    background-color: #000;
                }
            `}</style> */}

            <div style={{ background: "#F8F8FF", minHeight: "100vh" }}>
                <div
                    className="container"
                    style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -35px" }}
                >
                    <div
                        className="d-flex justify-content-between"
                        style={{ padding: "25px 0px" }}
                    >
                        <Link href="/" className="logo">
                            <Image
                                src="https://assets.rumsan.net/rumsan-group/rahat-logo-standard.png"
                                alt="rahat-logo"
                                height={100}
                                width={100}
                            />
                        </Link>
                        <div>
                            <ConnectWallet />
                        </div>
                    </div>
                </div>

                <div className="content">
                    <Suspense fallback={<div>Loading...</div>}>
                        <SuspensewithSearchParams>
                            {/* {(_) => (
                                _ stands for the data that is passed to the SuspensewithSearchParams component
                               )} */}
                            {(_) => (
                                <div
                                    className="container"
                                    style={{ paddingTop: "60px" }}
                                >
                                    <div className="row">
                                        <div className="offset-lg-2 col-lg-8 ">
                                            <div className="condition-wrapper">
                                                <h2
                                                    style={{
                                                        paddingBottom: "20px",
                                                    }}
                                                >
                                                    Wallet Verification
                                                </h2>
                                                <p
                                                    style={{
                                                        paddingBottom: "20px",
                                                    }}
                                                >
                                                    Welcome to Wallet
                                                    Verification, This app
                                                    simplifies the wallet
                                                    verification process,
                                                    allowing beneficiaries to
                                                    sign messages using their
                                                    wallets and creating a
                                                    unique cryptographic
                                                    signature. Harnessing the
                                                    power of blockchain
                                                    technology, this app
                                                    provides real-time
                                                    verification results and
                                                    adds an extra layer of
                                                    protection against fraud and
                                                    unauthorized access. With
                                                    support for various
                                                    cryptocurrencies and a
                                                    seamless, transparent
                                                    verification process, Wallet
                                                    Verification ensures the
                                                    control over your digital
                                                    assets.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SuspensewithSearchParams>
                    </Suspense>
                </div>
                <VerifyModal
                    show={isVerifyModalOpen}
                    handleModal={verifyModalHandler}
                />

                <div>
                    <div className="container">
                        <div className="row padding-tb-50 align-items-center d-flex">
                            <div className="offset-lg-2 col-lg-8 ">
                                <div className="author-wrapper">
                                    <button
                                        type="button"
                                        className="w-auto custom-btn-primary-verify btn btn-medium btn-primary"
                                        onClick={verifyModalHandler}
                                    >
                                        Sign Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


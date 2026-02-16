import CommunityChart from "@containers/community/details/impact-metrics";
import Statistics from "@containers/community/details/statistics";
import CustomStats from "./customStats";
import CommunityDescription from "./description";
import CommunityPhotos from "./photos";
import CommunityTransactions from "./transactions";
import Iconify from "@components/iconify";
import { ethers } from "ethers";
import { COMMUNITY_HOST } from "@config";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
// import { useRouter, useSearchParams } from "next/navigation";
const MESSAGE = "hello world!";

const CommunityDetails = ({ community, transactions }) => {
    const [token, setToken] = useState(false);
    const [res, setRes] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();

    useEffect(() => {
        if (window.localStorage.getItem("accessToken")) {
            setToken(true);
        } else {
            setToken(false);
            setRes(false);
        }
    }, [window.localStorage.getItem("accessToken"), res]);

    const login = async (signature) => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ signature, message: MESSAGE }),
        };

        fetch(`${COMMUNITY_HOST}/auth/wallet-login`, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                setRes(true);
                return response.json();
            })
            .then((data) => {
                window.localStorage.setItem("accessToken", data.accessToken);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const handleWalletLogin = async () => {
        // can be used when needed a/c the requirement only needed to uncomment and  clear enquesnackbar

        // if (!window.ethereum) return alert("Install metamask!");
        // const provider = new ethers.BrowserProvider(window.ethereum);
        // const signer = await provider.getSigner();
        // const address = await signer.getAddress();
        // const signature = await signer.signMessage(MESSAGE);

        // return login(signature);

        enqueueSnackbar("Coming Soon", {
            variant: "success",
            style: {
                fontSize: "16px",
                fontWeight: "bold",
            },
        });
    };

    const handleEdit = async () => {
        router.push(`/communities/manager/${router.query.address}`);
    };

    return (
        <div className="rn-authore-profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-9 col-sm-12 mt_sm--30">
                        <CommunityDescription community={community} />
                        <Statistics community={community} />
                        {transactions.length > 0 && (
                            <CommunityTransactions data={transactions} />
                        )}
                        <CustomStats communityId={community?.address} />
                        <CommunityChart community={community} />
                        <CommunityPhotos community={community} />
                    </div>
                    <div className="d-flex justify-content-end mt--100 mt_md--80 mt_sm--78">
                        <div className="icon-box">
                            <a
                                className="btn btn-medium btn-primary d-flex align-items-center gap-3"
                                style={{ borderRadius: "50px" }}
                            >
                                <Iconify icon="logos:metamask-icon" />
                                {token ? (
                                    <span onClick={handleEdit}>Edit Page</span>
                                ) : (
                                    <span onClick={handleWalletLogin}>
                                        Connect Metamask
                                    </span>
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityDetails;


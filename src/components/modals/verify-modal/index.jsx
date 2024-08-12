import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { useSignMessage, useAccount } from "wagmi";
import Button from "@ui/button";
import Swal from "sweetalert2";
import { Suspense, useState } from "react";
import SuspensewithSearchParams from "@components/utils/suspense-with-search-params";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const ReportModal = ({ show, handleModal }) => {
    const { isConnected } = useAccount();
    const { data: signMessageData, signMessage } = useSignMessage();
    const params = useSearchParams();
    const newUrl = params.get("callBackUrl");

    const handleSubmitSignature = async (encryptedData) => {
        //Verify Signature

        const payload = { signature: signMessageData, encryptedData };
        fetch(newUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                data &&
                    Swal.fire({
                        title: "Wallet Verified Successfully",
                        icon: "success",
                    });
                // resetState();
            })
            .catch((error) => {
                console.error("Error:", error);
                Swal.fire({
                    title: "Wallet Verification Failed",
                    icon: "error",
                });
            });
    };

    const handleSignMessage = (encryptedData) => {
        if (!isConnected) {
            return;
        }
        if (!encryptedData) {
            return;
        }
        signMessage({ message: encryptedData });
    };
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <SuspensewithSearchParams>
                    {(encryptedData) => (
                        <Modal
                            className="rn-popup-modal report-modal-wrapper container"
                            show={show}
                            onHide={handleModal}
                            centered
                        >
                            {show && (
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={handleModal}
                                >
                                    <i className="feather-x" />
                                </button>
                            )}
                            <Modal.Header className="report-modal-header">
                                <h5 className="modal-title">
                                    Sign this Message
                                </h5>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="report-form-box">
                                    <div className="report-button">
                                        {/* <textarea
                                            value={`Sign this message using your wallet and submit the signed message to verify your wallet address:   ${encryptedData}   `}
                                            readOnly
                                            className="textarea"
                                        ></textarea> */}

                                        <textarea
                                            value={`${encryptedData}   `}
                                            readOnly
                                            className="textarea"
                                        />

                                        {signMessageData && (
                                            <>
                                                <p
                                                    className="signature"
                                                    style={{
                                                        fontWeight: "600",
                                                    }}
                                                >
                                                    Signature
                                                </p>
                                                <textarea
                                                    value={
                                                        signMessageData || ""
                                                    }
                                                    readOnly
                                                    className="textarea"
                                                />
                                            </>
                                        )}
                                        {/* Verify Wallet Address button */}
                                        <div>
                                            <Button
                                                size="medium"
                                                className="mr--10 w-auto"
                                                onClick={
                                                    signMessageData ===
                                                    undefined
                                                        ? () =>
                                                              handleSignMessage(
                                                                  encryptedData
                                                              )
                                                        : () =>
                                                              handleSubmitSignature(
                                                                  encryptedData
                                                              )
                                                }
                                            >
                                                {signMessageData === undefined
                                                    ? `Sign Message`
                                                    : "Submit Signature"}
                                            </Button>

                                            <Button
                                                size="medium"
                                                className="w-auto custom-btn-primary-alta"
                                                onClick={handleModal}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    )}
                </SuspensewithSearchParams>
            </Suspense>
        </>
    );
};

ReportModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};
export default ReportModal;


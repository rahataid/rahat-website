import RHFTextField from "@components/input";
import InputFeild from "@components/input";
import { COMMUNITY_HOST } from "@config";
import { CommunitiesService } from "@services/communities";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Controller, FormProvider, useForm } from "react-hook-form";

const defaultValues = {
    communityName: "",
    description: "",
    beneficiaries: "0",
    fundRaisedLocal: "",
    walletAddress: "",
};
const EditForm = ({ communities }) => {
    const { query } = useRouter();
    const [walletAddress, setWalletAddress] = useState(null);

    const findCommunities = communities.find(
        (item) => item?.address === query.address
    );

    const methods = useForm({ defaultValues });

    const { register, handleSubmit, setValue } = methods;

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                if (window.ethereum && findCommunities) {
                    const accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });

                    const provider = new ethers.BrowserProvider(
                        window.ethereum
                    );

                    const signer = await provider.getSigner();
                    const address = await signer.getAddress();

                    // setWalletAddress(address);
                    setValue("walletAddress", address);
                    setValue(
                        "beneficiaries",
                        findCommunities?.summary[0]?.total_beneficiaries
                    );
                    setValue("description", findCommunities?.description);
                    setValue("communityName", findCommunities?.name);
                    setValue(
                        "fundRaisedLocal",
                        findCommunities?.fundRaisedLocal
                    );
                }
            } catch (error) {
                console.error("Error fetching accounts:", error.message);
            }
        };

        fetchAccounts();
    }, []);

    const onSubmit = handleSubmit(async (data) => {
        // console.log(data);
        const resp = await CommunitiesService.updateByManager(
            findCommunities?.address,
            data
        );
        if (resp.statusText === "OK") {
            enqueueSnackbar("Community Updated Succesfully", {
                variant: "success",
            });
        } else {
            enqueueSnackbar("Error on updating", { variant: "error" });
        }
    });
    return (
        <Container className="mt-4">
            <FormProvider {...methods}>
                <form onSubmit={onSubmit}>
                    <div className="mb-3 mt-4 fs-3">
                        <RHFTextField
                            name="communityName"
                            type="text"
                            helperText="Enter your text"
                            label="CommunityName"
                        />
                    </div>

                    <div className="mb-3 fs-3">
                        <Row>
                            <Col>
                                <RHFTextField
                                    name="beneficiaries"
                                    type="number"
                                    helperText="Enter your text"
                                    label="Beneficiaries"
                                />
                            </Col>
                            <Col>
                                <RHFTextField
                                    name="fundRaisedLocal"
                                    type="text"
                                    helperText="Enter your text"
                                    label="Fund Raised Local"
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="mb-3 fs-3">
                        <RHFTextField
                            name="description"
                            type="textarea"
                            helperText="Enter your text"
                            label="Description"
                        />
                    </div>

                    <Button
                        type="submit"
                        style={{ float: "right", backgroundColor: "#2B7EC1" }}
                    >
                        Submit
                    </Button>
                </form>
            </FormProvider>
        </Container>
    );
};

export default EditForm;


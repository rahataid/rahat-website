import { useCallback, useEffect, useState } from "react";

// next
import Head from "next/head";
// @mui
import {
    Card,
    CardContent,
    CardHeader,
    Container,
    FormControl,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";
// routes
// import { PATH_PAGE } from "../../../routes/paths";
// utils
import { fData } from "@utils/formatNumber";
// layouts
// components
import { Upload, UploadAvatar } from "@components/upload";
import { ASSET_VIEW } from "@config";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { getCommunities, selectCommunities } from "@redux/slices/community";
import { AssetUploadService } from "@services/assetUpload";
import { CommunitiesService } from "@services/communities";
import { extractAssetUploadData } from "@utils/string";
import { useDispatch, useSelector } from "react-redux";

// ----------------------------------------------------------------------

UploadImage.getLayout = (page) => <Wrapper>{page}</Wrapper>;

// ----------------------------------------------------------------------

export default function UploadImage() {
    const dispatch = useDispatch();
    const communities = useSelector(selectCommunities);
    const [uploadingImage, setUploadingImage] = useState(false);

    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [files, setFiles] = useState([]);

    const [file, setFile] = useState(null);

    const [logoImage, setLogoImage] = useState(null);

    const handleCommunitySelect = async (e) => {
        const { value } = e.target;
        setSelectedCommunity(value);
        const selectedLogo = value?.images?.logo || "";
        const selectedCover = value?.images?.cover || "";
        const selectedGallery = value?.images?.gallery || [];

        if (selectedLogo) {
            // const res = await axios.get(selectedLogo);
            // console.log("res", res);
            setLogoImage(
                Object.assign(selectedLogo, {
                    preview: `${ASSET_VIEW}/${value?.address}/${selectedLogo}`,
                    // preview: value?.logo,
                })
            );
        }
        if (selectedCover) {
            // const res = await axios.get(selectedCover);
            setFile(
                Object.assign(selectedCover, {
                    preview: `${ASSET_VIEW}/${value?.address}/${selectedCover}`,
                    // preview: value?.cover,
                })
            );
        }

        if (selectedGallery.length > 0) {
            const gallery = selectedGallery.map((photo) => {
                return Object.assign(photo, {
                    preview: `${ASSET_VIEW}/${value?.address}/${photo}`,
                    // preview: photo,
                });
            });
            setFiles(gallery);
        }
    };

    console.log("files", files);

    const handleDropCoverImage = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setFile(
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );
        }
    }, []);

    const handleDropLogo = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setLogoImage(
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );
        }
    }, []);

    const handleDropPhotos = useCallback(
        (acceptedFiles) => {
            setFiles([
                ...files,
                ...acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                ),
            ]);
        },
        [files]
    );

    const handleRemoveFile = (inputFile) => {
        const filtered = files.filter((file) => file !== inputFile);
        setFiles(filtered);
    };

    const handleRemoveAllFiles = () => {
        setFiles([]);
    };

    const handleUploadFiles = (imageType, files) => async () => {
        try {
            setUploadingImage(true);

            if (Array.isArray(files)) {
                const uploadPromises = files.map((file) => {
                    return uploadFile(file, imageType); // Pass imageType to uploadFile
                });

                const uploadResults = await Promise.all(uploadPromises);
                console.log("Upload results:", uploadResults);

                const updatedAssets = getUpdatedAssets(
                    uploadResults,
                    imageType
                );

                if (Object.keys(updatedAssets).length > 0) {
                    const update = await CommunitiesService.uploadAsset(
                        selectedCommunity?.id,
                        updatedAssets
                    );
                    console.log("Update response:", update);
                }
            } else {
                const uploadResult = await uploadFile(files, imageType); // Pass imageType to uploadFile
                console.log("Upload result:", uploadResult);

                if (uploadResult.cid) {
                    const updatedAssets = {
                        [imageType]: uploadResult.cid,
                    };

                    const update = await CommunitiesService.uploadAsset(
                        selectedCommunity?.id,
                        updatedAssets
                    );
                    console.log("Update response:", update);
                }
            }
        } catch (err) {
            console.log("Error:", err);
            alert("There was an error uploading the asset(s).");
        } finally {
            setUploadingImage(false);
        }
    };

    const uploadFile = (file, imageType) => {
        // Add imageType parameter here
        const formData = new FormData();
        formData.append("file", file);
        formData.append("path", "communities/" + selectedCommunity?.address);
        formData.append("meta-type", imageType);
        formData.append("meta-community-name", selectedCommunity?.name);

        return AssetUploadService.uploadImage(formData)
            .then((res) => {
                console.log("res", res);
                return extractAssetUploadData(res.data);
            })
            .catch((err) => {
                console.log("Error uploading file:", err);
                return null;
            });
    };

    const getUpdatedAssets = (uploadResults, imageType) => {
        const updatedAssets = {};

        uploadResults.forEach((result) => {
            if (result && result.cid) {
                updatedAssets[imageType] = updatedAssets[imageType] || [];
                updatedAssets[imageType].push(result.cid);
            }
        });

        return updatedAssets;
    };

    useEffect(() => {
        dispatch(getCommunities());
    }, []);

    return (
        <>
            <Head>
                <title>Upload Community Asset</title>
            </Head>
            <Header />

            <Container sx={{ my: 10 }}>
                <Stack>
                    <Typography variant="h2" sx={{ mb: 1 }}>
                        {selectedCommunity?.name}
                    </Typography>
                </Stack>
                <Stack spacing={5}>
                    <Card>
                        <CardHeader title="Communities" />
                        <CardContent>
                            <FormControl fullWidth>
                                <Select
                                    id="outlined-select-currency"
                                    label="Select a community"
                                    helperText="Please select a community"
                                    // value={selectedCommunity}
                                    onChange={handleCommunitySelect}
                                >
                                    {communities.map((comm) => (
                                        <MenuItem
                                            key={`${comm.name}-${comm.id}`}
                                            value={comm}
                                        >
                                            {comm.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </CardContent>
                    </Card>

                    {selectedCommunity && (
                        <>
                            {" "}
                            <Card>
                                <CardHeader title="Upload Logo" />
                                <CardContent>
                                    <UploadAvatar
                                        file={logoImage}
                                        onDrop={handleDropLogo}
                                        onUpload={handleUploadFiles(
                                            "logo",
                                            logoImage
                                        )}
                                        disabled={uploadingImage}
                                        helperText={
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    mt: 2,
                                                    mx: "auto",
                                                    display: "block",
                                                    textAlign: "center",
                                                    color: "text.secondary",
                                                }}
                                            >
                                                Allowed *.jpeg, *.jpg, *.png,
                                                *.gif
                                                <br /> max size of{" "}
                                                {fData(3145728)}
                                            </Typography>
                                        }
                                    />
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader title="Upload Cover" />
                                <CardContent>
                                    <Upload
                                        file={file}
                                        onDrop={handleDropCoverImage}
                                        onUpload={handleUploadFiles(
                                            "cover",
                                            file
                                        )}
                                        disabled={uploadingImage}
                                        onDelete={() => setFile(null)}
                                    />
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader title="Upload Photos" />
                                <CardContent>
                                    <Upload
                                        multiple
                                        thumbnail={true}
                                        disabled={uploadingImage}
                                        files={files}
                                        onDrop={handleDropPhotos}
                                        onRemove={handleRemoveFile}
                                        onRemoveAll={handleRemoveAllFiles}
                                        onUpload={handleUploadFiles(
                                            "gallery",
                                            files
                                        )}
                                    />
                                </CardContent>
                            </Card>
                        </>
                    )}
                </Stack>
            </Container>
        </>
    );
}

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
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { getCommunities, selectCommunities } from "@redux/slices/community";
import { ImageUploadService } from "@services/imageUpload";
import axios from "axios";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// ----------------------------------------------------------------------

UploadImage.getLayout = (page) => <Wrapper>{page}</Wrapper>;

// ----------------------------------------------------------------------

export default function UploadImage() {
    const dispatch = useDispatch();
    const communities = useSelector(selectCommunities);

    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [files, setFiles] = useState([]);

    const [file, setFile] = useState(null);

    const [logoImage, setLogoImage] = useState(null);

    const handleCommunitySelect = async (e) => {
        const { value } = e.target;
        setSelectedCommunity(value);
        setLogoImage(value?.logo);

        if (value?.logo) {
            const res = await axios.get(value?.logo);
            console.log("res", res);
            setLogoImage(
                Object.assign(value?.logo, {
                    preview: URL.createObjectURL(value?.logo),
                })
            );
        }
        if (value?.cover) {
            const res = await axios.get(value?.cover);
            setFile(
                Object.assign(value?.cover, {
                    preview: URL.createObjectURL(value?.cover),
                })
            );
        }

        if (value?.photos.length > 0) {
            const photos = value?.photos.map((photo) => {
                return Object.assign(photo, {
                    preview: URL.createObjectURL(photo),
                });
            });
            setFiles(photos);
        }
    };

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

    const handleUploadFiles = (imageType, file) => async () => {
        try {
            const imageUploaded = await ImageUploadService(file);
            console.log("imageUpload", imageUploaded);
            if (imageUploaded) {
                const updatedCommunity = {
                    ...selectedCommunity,
                    [imageType]: imageUploaded,
                };
                console.log("updatedCommunity", updatedCommunity);
                setSelectedCommunity(updatedCommunity);
            }
        } catch (err) {
            console.log("err", err);
            alert("There was error uploading asset.");
        }
    };
    handleUploadFiles.propTypes = {
        imageType: PropTypes.oneOf(["cover", "logo", "photos"]).isRequired,
        file: PropTypes.object.isRequired,
    };

    useEffect(() => {
        dispatch(getCommunities());
    }, []);

    return (
        <>
            <Head>
                <title>Upload Community Assets</title>
            </Head>
            <Header />

            <Container sx={{ my: 10 }}>
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
                                        files={files}
                                        onDrop={handleDropPhotos}
                                        onRemove={handleRemoveFile}
                                        onRemoveAll={handleRemoveAllFiles}
                                        onUpload={handleUploadFiles(
                                            "photos",
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

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const SuspensewithSearchParams = ({ children }) => {
    const params = useSearchParams();
    const encryptedData = params.get("encrypted");
    console.log({ encryptedData });
    return children(encryptedData);
};

export default SuspensewithSearchParams;


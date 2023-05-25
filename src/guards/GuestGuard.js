import LoadingScreen from "@components/loading-screen";
import { selectIsAuthenticated, selectIsInitialized } from "@redux/slices/app";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const GuestGuard = ({ children }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isInitialized = useSelector(selectIsInitialized);
    const router = useRouter();

    if (isAuthenticated) {
        router.push("/");
        return <LoadingScreen />;
    }

    if (isInitialized === isAuthenticated) {
        return <LoadingScreen />;
    }

    return children;
};

export default GuestGuard;

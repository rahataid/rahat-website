import LoadingScreen from "@components/loading-screen";
import { selectIsAuthenticated, selectIsInitialized } from "@redux/slices/app";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const GuestGuard = ({ children }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isInitialized = useSelector(selectIsInitialized);
    const router = useRouter();

    if (!isAuthenticated) {
        return children;
    } else if (isAuthenticated === isInitialized) {
        return <LoadingScreen />;
    } else {
        router.back();
        return <LoadingScreen />;
    }
};

export default GuestGuard;

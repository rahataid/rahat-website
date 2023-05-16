import LoadingScreen from "@components/loading-screen";
import { selectIsAuthenticated, selectIsInitialized } from "@redux/slices/app";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const AuthGuard = ({ children }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isInitialized = useSelector(selectIsInitialized);
    const router = useRouter();

    if (!isInitialized) {
        return <LoadingScreen />;
    } else if (!isAuthenticated) {
        router.push("/login");
        return <LoadingScreen />;
    }

    return children;
};

export default AuthGuard;

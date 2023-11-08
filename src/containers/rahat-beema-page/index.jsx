import { normalizedData } from "@utils/methods";
import HeroArea from "@containers/hero";
import RahatBeemaData from "../../data/rahat-beema.json";

const RahatBeemaPage = () => {
    const content = normalizedData(RahatBeemaData?.content || []);

    return (
        <>
            <main id="main-content">
                <HeroArea data={content["beema-hero-section"]} />
            </main>
        </>
    );
};

export default RahatBeemaPage;


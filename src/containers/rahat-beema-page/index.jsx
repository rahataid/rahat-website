import { normalizedData } from "@utils/methods";
import HeroArea from "@containers/hero";

import RahatBeemaVideo from "@components/rahat-beema-video";
import AchievementsBadges from "./achievements-badges";
import KeyComponents from "./key-components";
import Annually from "./anually";
import WhyRahatBeema from "./why-rahat-beema";
import RahatBeemaData from "../../data/rahat-beema.json";

const RahatBeemaPage = () => {
    const content = normalizedData(RahatBeemaData?.content || []);

    return (
        <>
            <main id="main-content">
                <HeroArea data={content["beema-hero-section"]} />
            </main>
            <RahatBeemaVideo data={content["video-section"]} />
            <WhyRahatBeema />
            <Annually />
            <KeyComponents />
            <AchievementsBadges />
        </>
    );
};

export default RahatBeemaPage;


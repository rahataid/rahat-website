import { normalizedData } from "@utils/methods";
import HeroArea from "@containers/hero";
import VideoArea from "@components/youtube-video";
import RahatBeemaData from "../../data/rahat-beema.json";

const RahatBeemaPage = () => {
    const content = normalizedData(RahatBeemaData?.content || []);

    return (
        <>
            <main id="main-content">
                <HeroArea data={content["beema-hero-section"]} />
            </main>
            <VideoArea data={content["video-section"]} />
        </>
    );
};

export default RahatBeemaPage;


import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";
import { normalizedData } from "@utils/methods";
import AchievementsBadges from "@containers/rahat-beema-page/achievements-badges";
import AnticipatoryActionVideoData from "../../data/anticipatory-action.json";
import AnticipatoryActionVideo from "@components/anticipatory-action-video";
import WhyAnticipatoryAction from "@containers/why-anticipatory-action";
import AnticipatoryActionAnnually from "@containers/rahat-beema-page/anticipatory-action-annually";
import AnticipatoryKeyComponents from "@containers/rahat-beema-page/key-components-anticipatory";
import AnticipatoryActionCaseStudyPage from "@containers/anticipatory-action-case-study";
import AchievementsBadgesAnticipatory from "@containers/rahat-beema-page/achievements-badges";

const AnticipatoryActionsPage = ({ space, className }) => {
    const content = normalizedData(AnticipatoryActionVideoData?.content || []);
    return (
        <>
            {/* <div className="rn-author-bg-area position-relative ptb--150">
<Image
src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/anticipatory-actions-main-banner.jpg"
alt="Slider BG"
layout="fill"
objectFit="cover"
quality={100}
priority
/>

<div className="overlay"></div>
</div> */}
            {/* <div className="row padding-tb-50 align-items-center d-flex">
<div className="col-lg-12 custom-page-banner">
<div className="author-wrapper">
<div className="author-inner">
<div className="rn-author-info-content-custom">
<h4 className="title">Rahat Anticipatory Action</h4>
</div>
</div>
</div>
</div>
</div> */}
            <div
                className={clsx("rn-about-Quote-area", space === 1, className)}
            >
                <div className="pt--50">
                    <AnticipatoryActionVideo data={content["video-section"]} />
                    <WhyAnticipatoryAction />
                    <AnticipatoryActionAnnually />
                    <AnticipatoryKeyComponents />
                    <AnticipatoryActionCaseStudyPage />
                    <AchievementsBadgesAnticipatory />
                </div>
            </div>
        </>
    );
};

AnticipatoryActionsPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

AnticipatoryActionsPage.defaultProps = {
    space: 1,
};

export default AnticipatoryActionsPage;


import { SectionTitleType, TextType } from "@utils/types";
import clsx from "clsx";
import {
    CircleCheckBig,
    Lightbulb,
    PartyPopper,
    Shapes,
    TriangleAlert,
    Users,
} from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

const WhyShouldWePlayBingo = ({ space, className }) => (
    <>
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop-awareness-play-bingo",
                className
            )}
        >
            <div className="play-bingo-container">
                <h4 className="play-title">Why should you play?</h4>
                <p className="play-description">
                    Learning through play creates lasting knowledge and stronger
                    communities
                </p>

                <div className="play-bingo-feature-grid">
                    <div className="play-bingo-card">
                        <Lightbulb
                            color="#ED9B28"
                            strokeWidth={2}
                            style={{ marginBottom: "3rem" }}
                        />
                        <h4 className="feature-card-title">
                            Awareness Through Play
                        </h4>
                        <p className="feature-card-description">
                            Fun games help us remember important terminologies
                            better than lectures. Interactive learning creates
                            stronger memory connections.
                        </p>
                    </div>
                    <div className="play-bingo-card">
                        <Users
                            color="#2B7EC1"
                            strokeWidth={2}
                            style={{ marginBottom: "3rem" }}
                        />
                        <h4 className="feature-card-title">
                            Builds Common Language
                        </h4>
                        <p className="feature-card-description">
                            Everyone learns the same AA-related terms, making
                            communication easier during emergencies and
                            community planning.
                        </p>
                    </div>
                    <div className="play-bingo-card">
                        <TriangleAlert
                            color="#E61E1E"
                            style={{ marginBottom: "3rem" }}
                        />
                        <h4 className="feature-card-title">
                            Encourages Conversation
                        </h4>
                        <p className="feature-card-description">
                            Sparks discussion about how these terms apply in
                            real life, building practical disaster preparedness
                            knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

WhyShouldWePlayBingo.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

WhyShouldWePlayBingo.defaultProps = {
    space: 1,
};

export default WhyShouldWePlayBingo;


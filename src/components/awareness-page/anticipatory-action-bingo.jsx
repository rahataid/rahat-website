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

const AnticipatoryActionBingo = ({ space, className }) => (
    <>
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop-awareness",
                className
            )}
        >
            <div className="container-awareness">
                <div className="left-awareness-section">
                    <PartyPopper
                        size={40}
                        color="#e60505"
                        strokeWidth={1.25}
                        style={{ marginBottom: "1rem" }}
                    />
                    <h2>What is Anticipatory Action Bingo?</h2>
                    <p>
                        This is a Bingo-style learning game designed to make
                        Anticipatory Action terms easy to remember. Instead of
                        just numbers, each card contains 24 words related to
                        disaster preparedness and early action, like early
                        warning, thresholds, readiness, relief, and more.
                        <br />
                        All 50 key terms are presented in both Nepali and
                        English, tailored for the Nepalese context. By playing
                        in a fun, competitive format, participants engage more
                        deeply with the terminology, improving recall and
                        understanding of anticipatory action processes while
                        enjoying the learning experience.
                    </p>
                </div>

                <div className="right-awareness-section">
                    <div className="action-bingo-card">
                        <Lightbulb color="#ED9B28" strokeWidth={2} />
                        <div>
                            <h3>Educational Focus</h3>
                            <p>Learn disaster preparedness terms</p>
                        </div>
                    </div>
                    <div className="action-bingo-card">
                        <Users color="#2B7EC1" strokeWidth={2} />
                        <div>
                            <h3>Community Building</h3>
                            <p>Engage with others while learning</p>
                        </div>
                    </div>
                    <div className="action-bingo-card">
                        <TriangleAlert color="#E61E1E" strokeWidth={2} />
                        <div>
                            <h3>Practical Knowledge</h3>
                            <p>Real-world emergency preparedness</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop--materials-needed",
                className
            )}
        >
            <div className="container-awareness-bingo-card">
                <div className="left-awareness-section">
                    <Shapes size={40} color="#dd0e0e" strokeWidth={1.5} />
                    <h2 style={{ margin: "2rem 0" }}>Materials Needed</h2>
                    <div className="description-container">
                        <div className="check-tick">
                            <CircleCheckBig
                                size={20}
                                color="#ffffff"
                                strokeWidth={1.75}
                            />
                        </div>
                        <p className="description-text">
                            20 Unique Bingo Cards (one per player)
                        </p>
                    </div>
                    <div className="description-container">
                        <div className="check-tick">
                            <CircleCheckBig
                                size={20}
                                color="#ffffff"
                                strokeWidth={1.75}
                            />
                        </div>
                        <p className="description-text">
                            Markers or pens for each player
                        </p>
                    </div>
                    <div className="description-container">
                        <div className="check-tick">
                            <CircleCheckBig
                                size={20}
                                color="#ffffff"
                                strokeWidth={1.75}
                            />
                        </div>
                        <p className="description-text">
                            Master List of 50 terms paired with a number (for
                            caller)
                        </p>
                    </div>
                </div>

                <div className="right-bingo-card-section">
                    <div className="bingo-card-image-custom">
                        <Image
                            src={
                                "https://assets.rumsan.net/rahat/bingo-card.png"
                            }
                            alt="Bingo Card"
                            width={600}
                            height={600}
                            // style={{ width: "427px", height: "525px" }}
                        />
                        <p className="bingo-card-image-caption">
                            Each card has 24 unique terms +1 free space in
                            center
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

AnticipatoryActionBingo.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

AnticipatoryActionBingo.defaultProps = {
    space: 1,
};

export default AnticipatoryActionBingo;


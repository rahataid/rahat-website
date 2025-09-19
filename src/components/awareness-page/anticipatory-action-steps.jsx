import { SectionTitleType, TextType } from "@utils/types";
import clsx from "clsx";
import {
    CircleCheckBig,
    Diamond,
    Grid3x3,
    Lightbulb,
    PartyPopper,
    Pen,
    Shapes,
    User,
} from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

const AnticipatoryActionBingoSteps = ({ space, className }) => (
    <>
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop-awareness-steps",
                className
            )}
        >
            <h2 className="step-by-step-instructions">
                Step-by-Step Instructions
            </h2>
            <div className="container-awareness-bingo-card">
                <div className="left-awareness-section">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <h1>1.</h1>
                        <h2>Game Setup</h2>
                    </div>
                    <div
                        className="description-container"
                        style={{ alignItems: "center", margin: "2rem 0" }}
                    >
                        <Diamond color="#2B7EC1" strokeWidth={2} />
                        <div style={{ alignItems: "center" }}>
                            <p className="game-setup-rules">Distribute Cards</p>
                            <p className="description-text">
                                Give each player one unique Bingo card (maximum
                                20 players)
                            </p>
                        </div>
                    </div>
                    <div
                        className="description-container"
                        style={{ alignItems: "center", margin: "2rem 0" }}
                    >
                        <User color="#2B7EC1" strokeWidth={2} />
                        <div style={{ alignItems: "center" }}>
                            <p className="game-setup-rules">Choose a Caller</p>
                            <p className="description-text">
                                Select one person to be the caller with the
                                master list
                            </p>
                        </div>
                    </div>
                    <div
                        className="description-container"
                        style={{ alignItems: "center", margin: "2rem 0" }}
                    >
                        <Pen color="#2B7EC1" strokeWidth={2} />
                        <div style={{ alignItems: "center" }}>
                            <p className="game-setup-rules">Provide Markers</p>
                            <p className="description-text">
                                Ensure each player has a pen or marker to mark
                                their cards
                            </p>
                        </div>
                    </div>
                </div>

                <div className="right-bingo-card-section">
                    <div className="setup-tip">
                        <Lightbulb
                            color="#ED9B28"
                            strokeWidth={1.5}
                            style={{ width: "64px", marginTop: "4px" }}
                        />
                        <div>
                            <h3>Setup Tip</h3>
                            <p>
                                Arrange players in a circle or classroom style
                                so everyone can hear the Caller clearly. The
                                Caller should have a clear view of all players
                                to verify wins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="container-awareness-bingo-card"
                style={{ marginTop: "4rem" }}
            >
                <div className="left-awareness-section">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <h1>2.</h1>
                        <h2>How to Play</h2>
                    </div>
                    <div
                        className="description-container"
                        style={{ alignItems: "center", margin: "2rem 0" }}
                    >
                        <div className="how-to-play">
                            <p>A</p>
                        </div>
                        <div style={{ alignItems: "center" }}>
                            <p className="game-setup-rules">Caller Announces</p>
                            <p className="description-text">
                                Caller randomly picks a number (1-50) and
                                announces: <br />
                                "12 – पुर्नलाभ, Recovery"
                            </p>
                        </div>
                    </div>
                    <div
                        className="description-container"
                        style={{ alignItems: "center", margin: "2rem 0" }}
                    >
                        <div className="how-to-play">
                            <p>B</p>
                        </div>
                        <div style={{ alignItems: "center" }}>
                            <p className="game-setup-rules">
                                Players Check Cards
                            </p>
                            <p className="description-text">
                                Look for the announced term on your card in
                                either Nepali or English
                            </p>
                        </div>
                    </div>
                    <div
                        className="description-container"
                        style={{ alignItems: "center", margin: "2rem 0" }}
                    >
                        <div className="how-to-play">
                            <p>C</p>
                        </div>
                        <div style={{ alignItems: "center" }}>
                            <p className="game-setup-rules">Mark If Found</p>
                            <p className="description-text">
                                If you have that term, mark it with your pen or
                                marker
                            </p>
                        </div>
                    </div>
                    <div
                        className="description-container"
                        style={{ alignItems: "center", margin: "2rem 0" }}
                    >
                        <div className="how-to-play">
                            <p>D</p>
                        </div>
                        <div style={{ alignItems: "center" }}>
                            <p className="game-setup-rules">Continue Playing</p>
                            <p className="description-text">
                                Repeat until someone achieves a winning pattern
                            </p>
                        </div>
                    </div>
                </div>

                <div className="right-bingo-card-section">
                    <div className="remember-box">
                        <div className="header-remember">
                            <Lightbulb
                                size={24}
                                color="#ED9B28"
                                strokeWidth={2}
                            />
                            <h3>Remember</h3>
                        </div>
                        <div className="remember-list">
                            <div className="remember-list-item">
                                <CircleCheckBig
                                    color="#2B7EC1"
                                    strokeWidth={2}
                                />
                                <p>Center space is FREE for everyone</p>
                            </div>
                            <div className="remember-list-item">
                                <CircleCheckBig
                                    color="#2B7EC1"
                                    strokeWidth={2}
                                />
                                <p>Terms can be in Nepali OR English</p>
                            </div>
                            <div className="remember-list-item">
                                <CircleCheckBig
                                    color="#2B7EC1"
                                    strokeWidth={2}
                                />
                                <p>Mark clearly so Caller can verify.</p>
                            </div>
                            <div className="remember-list-item">
                                <CircleCheckBig
                                    color="#2B7EC1"
                                    strokeWidth={2}
                                />
                                <p>Listen carefully to each announcement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="writting-patterns-rules-container"
                style={{ marginTop: "4rem" }}
            >
                <div className="writting-patterns-rules">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            marginBottom: "1rem",
                        }}
                    >
                        <h1>3.</h1>
                        <h2>Winning Patterns & Rules</h2>
                    </div>
                </div>

                <div className="bingo-patterns-container">
                    <div>
                        <div className="bingo-horizontal-line blue">
                            <Grid3x3
                                size={40}
                                color="#2B7EC1"
                                strokeWidth={1.5}
                                style={{ marginBottom: "1rem" }}
                            />
                            <h3>5 in a Row</h3>
                            <p>Horizontal Line</p>
                        </div>
                        <div
                            className="bingo-card-image-custom"
                            style={{ marginTop: "4rem" }}
                        >
                            <Image
                                src={
                                    "https://assets.rumsan.net/rahat/horizontal-bingo.png"
                                }
                                alt="Bingo Card"
                                width={750}
                                height={600}
                                // style={{ width: "427px", height: "525px" }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="bingo-horizontal-line orange">
                            <Grid3x3
                                size={40}
                                color="#ED9B28"
                                strokeWidth={1.5}
                                style={{ marginBottom: "1rem" }}
                            />
                            <h3>5 in a Row</h3>
                            <p>Vertical Line</p>
                        </div>
                        <div
                            className="bingo-card-image-custom"
                            style={{ marginTop: "4rem" }}
                        >
                            <Image
                                src={
                                    "https://assets.rumsan.net/rahat/vertical-bingo.png"
                                }
                                alt="Bingo Card"
                                width={750}
                                height={600}
                                // style={{ width: "427px", height: "525px" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="bingo-horizontal-line green">
                            <Grid3x3
                                size={40}
                                color="#22C819"
                                strokeWidth={1.5}
                                style={{ marginBottom: "1rem" }}
                            />
                            <h3>5 in a Row</h3>
                            <p>Houseful (Grand Winner)</p>
                        </div>
                        <div
                            className="bingo-card-image-custom"
                            style={{ marginTop: "4rem" }}
                        >
                            <Image
                                src={
                                    "https://assets.rumsan.net/rahat/fullhouse-bingo.png"
                                }
                                alt="Bingo Card"
                                width={750}
                                height={600}
                                // style={{ width: "427px", height: "525px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="game-flow" style={{ marginTop: "3rem" }}>
                    <h3>Game Flow & Multiple Rounds</h3>
                    <div className="game-flow-flex">
                        <h3 className="game-flow-steps">1</h3>
                        <p>
                            When someone completes a pattern, they shout
                            "BINGO!"
                        </p>
                    </div>
                    <div className="game-flow-flex">
                        <h3 className="game-flow-steps">2</h3>
                        <p>
                            Caller verifies the win by checking marked terms
                            against called numbers
                        </p>
                    </div>
                    <div className="game-flow-flex">
                        <h3 className="game-flow-steps">3</h3>
                        <p>
                            After verification, that winning pattern cannot be
                            used again by the same player
                        </p>
                    </div>
                    <div className="game-flow-flex">
                        <h3 className="game-flow-steps">4</h3>
                        <p>
                            Game continues until someone fills their entire card
                            for the Grand Win!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

AnticipatoryActionBingoSteps.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

AnticipatoryActionBingoSteps.defaultProps = {
    space: 1,
};

export default AnticipatoryActionBingoSteps;


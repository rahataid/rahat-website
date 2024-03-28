import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Button from "@ui/button";
import Link from "next/link";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";

const CTAArea = ({ space, className }) => (
    <>
        <style jsx>{`
            .main {
                min-height: 100vh;
                min-width: 100vw;
            }
            .header {
                background-color: trasnparent;
                padding: 2rem 0;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                width: 100%;
            }
            .container {
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .link {
                font-size: 1.25rem;
                font-weight: bold;
                color: #2d3748;
            }
            .nav {
                display: flex;
                gap: 2.5rem;
            }
        `}</style>

        <main className="main">
            <header className="header">
                <div className="container">
                    <Link href="/" className="link">
                        <Image
                            src="https://assets.rumsan.net/rumsan-group/rahat-logo-standard.png"
                            alt="rahat-logo"
                            height={150}
                            width={150}
                        />
                    </Link>
                    <nav className="nav">
                        <ul>
                            <li>Connect Wallet</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </main>
        <div
            className={clsx(
                "rn-callto-action",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container-fluid about-fluidimg-cta">
                <div className="row">
                    <div className="col-lg-12 position-relative">
                        <div className="about-image">
                            <Image
                                src="https://assets.rumsan.net/rumsan-group/about-us-main-banner.jpg"
                                alt=""
                                quality={100}
                                fill
                                sizes="100vw"
                                priority
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                        <div className="call-to-action-wrapper">
                            <h3
                                data-sal="slide-up"
                                data-sal-duration="800"
                                data-sal-delay="150"
                            >
                                Test
                            </h3>

                            <p
                                data-sal="slide-up"
                                data-sal-duration="800"
                                data-sal-delay="150"
                            >
                                asdasa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

CTAArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        texts: PropTypes.arrayOf(TextType),
        headings: PropTypes.arrayOf(HeadingType),
        buttons: PropTypes.arrayOf(ButtonType),
        image: ImageType,
    }),
};

CTAArea.defaultProps = {
    space: 1,
};

export default CTAArea;


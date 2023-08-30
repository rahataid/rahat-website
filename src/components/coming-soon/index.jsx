import SEO from "@components/seo";

import Button from "@ui/button";
import Wrapper from "src/layout/wrapper";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const ComingSoonPage = () => (
    <Wrapper>
        <SEO pageTitle="Coming Soon" />

        <div className="rn-not-found-area rn-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rn-not-found-wrapper">
                            <h3 className="title">Coming Soon!</h3>
                            <p>
                                The page you are looking for will be available
                                soon.
                            </p>
                            <Button path="/">Go Back To Home</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
);

export default ComingSoonPage;


import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import OurHighlightDetailPage from "@components/our-highlights-detail-page";
import OurHighlights from "../../data/our-highlights.json";

const OurHighlightDetailsPage = ({ ourHighlightData }) => {
    return (
        <Wrapper>
            <SEO
                pageTitle="Our Highlights"
                description={"List of all Our Highlights"}
            />

            {/* <BlogPage blogs={blogs.data} /> */}
            <OurHighlightDetailPage OurhighlightsContent={ourHighlightData} />
        </Wrapper>
    );
};
export const getAllPostSlug = () => {
    return OurHighlights.map((d) => {
        return {
            params: {
                slug: d.slug,
            },
        };
    });
};

export const getourHighlightData = async (slug) => {
    var requiredOurHighlight = OurHighlights.filter(
        (element) => element.slug === slug
    );
    requiredOurHighlight = requiredOurHighlight[0];
    return requiredOurHighlight;
};

export const getStaticPaths = async () => {
    const paths = getAllPostSlug();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const ourHighlightData = await getourHighlightData(params.slug);
    return {
        props: {
            ourHighlightData,
        },
    };
};

export default OurHighlightDetailsPage;


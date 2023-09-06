import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import PressReleaseDetailPage from "@components/press-release-detail-page";
import PressReleased from "../../data/press-release.json";

const PressReleasePageDetailsPage = ({ pressReleaseData }) => {
    return (
        <Wrapper>
            <SEO
                pageTitle="Press Release"
                description={"List of all Press Release"}
            />

            {/* <BlogPage blogs={blogs.data} /> */}
            <PressReleaseDetailPage PressReleaseContent={pressReleaseData} />
        </Wrapper>
    );
};
export const getAllPostSlug = () => {
    return PressReleased.map((d) => {
        return {
            params: {
                slug: d.slug,
            },
        };
    });
};

export const getpressReleaseData = async (slug) => {
    var requiredPressRelease = PressReleased.filter(
        (element) => element.slug === slug
    );
    requiredPressRelease = requiredPressRelease[0];
    return requiredPressRelease;
};

export const getStaticPaths = async () => {
    const paths = getAllPostSlug();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const pressReleaseData = await getpressReleaseData(params.slug);
    return {
        props: {
            pressReleaseData,
        },
    };
};

export default PressReleasePageDetailsPage;


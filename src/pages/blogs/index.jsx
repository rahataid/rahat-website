import BlogPage from "@components/blog-page";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import { getBlogs } from "@redux/slices/blogs";
import { wrapper } from "@redux/store";

const BlogsPage = ({ blogs }) => {
    console.log(blogs, "--------->");
    return (
        <Wrapper>
            <SEO pageTitle="Blogs" description={"List of all blogs"} />
            <Header />
            <BlogPage blogs={blogs.data} />
            <Footer />
        </Wrapper>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        await store.dispatch(getBlogs());
        const serializedBlogs = store.getState().blogs.blogs;
        const serializedError = store.getState().blogs.error;
        return {
            props: {
                blogs: serializedBlogs,
                error: serializedError,
            },
        };
    }
);

export default BlogsPage;


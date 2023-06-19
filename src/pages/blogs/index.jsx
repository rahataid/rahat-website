import React from "react";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import SEO from "@components/seo";
import Footer from "@layout/footer/footer-01";
import BlogPage from "@components/blog-page";
import { wrapper } from "@redux/store";
import { getBlogs } from "@redux/slices/blogs";

const BlogsPage = ({ blogs }) => {
    console.log("blogs", blogs);
    return (
        <Wrapper>
            <SEO pageTitle="blogs page" />
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


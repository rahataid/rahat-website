import { BLOGS_PAGE_SIZE, BlogService } from "@services/blogs";
import Button from "@ui/button";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";

const BLogPage = ({ space, className, blogs, total }) => {
    const [loadedBlogs, setLoadedBlogs] = useState(blogs || []);
    const [isLoading, setIsLoading] = useState(false);
    const sentinelRef = useRef(null);

    // Re-sync when the server sends a fresh first page (e.g. filter change).
    useEffect(() => {
        setLoadedBlogs(blogs || []);
    }, [blogs]);

    const hasMore = loadedBlogs.length < total;

    const loadMore = useCallback(async () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);
        try {
            const { data } = await BlogService.getBlogs({
                start: loadedBlogs.length,
                limit: BLOGS_PAGE_SIZE,
            });
            const nextBlogs = data?.data || [];
            setLoadedBlogs((prev) => {
                // Skip anything already on screen in case a blog was published
                // between two requests and shifted the pagination window.
                const loadedIds = new Set(prev.map((blog) => blog._id));
                return [
                    ...prev,
                    ...nextBlogs.filter((blog) => !loadedIds.has(blog._id)),
                ];
            });
        } catch (error) {
            // Keep the button visible so the reader can retry.
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, hasMore, loadedBlogs.length]);

    // Fetch the next page as the reader approaches the end of the list.
    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel || !hasMore) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) loadMore();
            },
            { rootMargin: "400px" }
        );
        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [hasMore, loadMore]);

    const sortedBlogs = [...loadedBlogs].sort((a, b) => {
        const dateA = a.published_date || a.created_at;
        const dateB = b.published_date || b.created_at;
        return new Date(dateB) - new Date(dateA);
    });

    return (
        <>
            <div className="rn-author-bg-area position-relative ptb--150">
                <Image
                    src="/images/banner/contact-main-banner.jpg"
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />

                <div className="overlay"></div>
            </div>
            <div className="row padding-tb-50 align-items-center d-flex">
                <div className="col-lg-12 custom-page-banner">
                    <div className="author-wrapper">
                        <div className="author-inner">
                            <div className="rn-author-info-content-custom">
                                <h4 className="title">Blogs </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={clsx(
                    "rn-about-Quote-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <div className="container">
                    <div className="row g-5">
                        {sortedBlogs?.map((blog, index) => {
                            return (
                                <div
                                    key={blog._id || blog.slug}
                                    className="col-lg-4 col-md-6 col-12 sal-animate"
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                    data-sal-delay="150"
                                >
                                    <div className={clsx("rn-blog", className)}>
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <Image
                                                    src={blog.image_url}
                                                    alt=""
                                                    width={489}
                                                    height={366}
                                                    loading={
                                                        index < 3
                                                            ? "eager"
                                                            : "lazy"
                                                    }
                                                />
                                            </div>

                                            <div className="content">
                                                <div className="category-info">
                                                    <div className="meta">
                                                        <span>
                                                            <i className="feather-calendar" />
                                                            {blog.published_date
                                                                ? moment(
                                                                      blog.published_date
                                                                  ).format("LL")
                                                                : moment(
                                                                      blog.created_at
                                                                  ).format(
                                                                      "LL"
                                                                  )}
                                                        </span>
                                                    </div>
                                                    <div className="meta">
                                                        <span>
                                                            <i className="feather-user" />
                                                            {blog.author
                                                                ? blog.author
                                                                : "-"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <h4 className="title">
                                                    <Link
                                                        className="short-title"
                                                        href={`/blogs/${blog?.slug}`}
                                                    >
                                                        {blog?.title}
                                                    </Link>
                                                </h4>

                                                <Link
                                                    href={`/blogs/${blog?.slug}`}
                                                >
                                                    <Button
                                                        className="mt-5"
                                                        size="medium"
                                                    >
                                                        Read More
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div ref={sentinelRef} />

                    {hasMore && (
                        <div className="row pt--50">
                            <div className="col-12 text-center">
                                <Button
                                    size="medium"
                                    onClick={loadMore}
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Loading..." : "Load More"}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

BLogPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    blogs: PropTypes.arrayOf(PropTypes.object),
    total: PropTypes.number,
};

BLogPage.defaultProps = {
    space: 1,
    blogs: [],
    total: 0,
};

export default BLogPage;

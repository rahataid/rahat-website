import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";

const BlogCard = ({
    className,
    title,
    slug,
    timeToRead,
    category,
    image,
    rootPage,
    ...rest
}) => (
    <div className="row">
        <div className="col-6">
            <div className={clsx("rn-blog", className)} {...rest}>
                <div className="inner">
                    <div className="thumbnail">
                        <Image
                            src="/images/profile/pepsico.png"
                            alt={"Nft_Profile"}
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="content">
                        <div className="category-info">
                            <div className="category-list">
                                <Anchor>
                                    Pepsico
                                </Anchor>
                            </div>
                        </div>
                        <h4 className="title">
                            <Anchor path={`${rootPage}/${slug}`}>
                                Pepsico
                            </Anchor>
                        </h4>
                    </div>
                </div>
            </div>
            <div className={clsx("rn-blog", className)} {...rest}>
                <div className="inner">
                    <div className="thumbnail">
                        <Image
                            src="/images/profile/pepsico.png"
                            alt={"Nft_Profile"}
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="content">
                        <div className="category-info">
                            <div className="category-list">
                                <Anchor>
                                    Pepsico
                                </Anchor>
                            </div>
                        </div>
                        <h4 className="title">
                            <Anchor path={`${rootPage}/${slug}`}>
                                Pepsico
                            </Anchor>
                        </h4>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

BlogCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    category: PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
    }).isRequired,
    image: ImageType,
    rootPage: PropTypes.string,
};

BlogCard.defaultProps = {
    rootPage: "/blog",
};

export default BlogCard;

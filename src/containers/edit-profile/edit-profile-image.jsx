/* eslint-disable @next/next/no-img-element */


const EditProfileImage = ({ community, id }) => {
    return (
        <>
            <div id={id} className="login-area message-area">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12">
                            <div className="rn-address">
                                <div className="inner">
                                    <h4 className="title">{community?.name}</h4>
                                    <p>{community.description}</p>
                                </div>
                            </div>
                            <div className="filter-wrapper mt--25">
                                <div className="inner">
                                    <h6>Tags</h6>
                                    <div className="sing-filter">
                                        {community.tags?.map((tag) => (
                                            <button
                                                key={tag.id}
                                                type="button"
                                            >
                                                {tag.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default EditProfileImage;

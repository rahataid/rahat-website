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
                                    <div>
                                        <h4 className="title" style={{ marginBottom: '5px' }}>{community?.name}</h4>
                                        {community.tags?.map((tag) => (
                                            <div
                                                className="pill mb--15 mr--5"
                                                key={tag.id}
                                                type="button"
                                            >
                                                {tag.name}
                                            </div>
                                        ))}
                                    </div>
                                    <p>{community.description}</p>
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

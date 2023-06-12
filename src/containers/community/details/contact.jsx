import AddressBox from "@components/address-box";

const Contact = ({ id }) => (
    <div id={id} className="nuron-information mt--200">
        <div className="row g-5">
            <div className="col-lg-12">
                <div className="section-title mb--30 text-left">
                    <h2 className="title">Quick Contact Address</h2>
                    <p className="description">
                        There are many variations of passages of Lorem Ipsum
                        available, <br /> but the majority have suffered
                        alteration.
                    </p>
                </div>
            </div>
        </div>
        <div className="row g-5">
            <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
            >
                <AddressBox
                    icon="feather-headphones"
                    title="Contact Phone Number"
                    phoneNumbers={["+444 555 666 777", "+222 222 222 333"]}
                />
            </div>
            <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
            >
                <AddressBox
                    icon="feather-mail"
                    title="Our Email Address"
                    emails={["admin@gmail.com", "example@gmail.com"]}
                />
            </div>
            <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
            >
                <AddressBox
                    icon="feather-map-pin"
                    title="Our Location"
                    address="5678 Bangla Main Road, cities 580 <br> GBnagla, example 54786"
                />
            </div>
        </div>
    </div>
);

export default Contact;

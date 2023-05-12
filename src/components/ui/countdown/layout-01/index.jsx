import PropTypes from "prop-types";

const CountdownTimer = ({ }) => {
    const renderer = ({ completed }) => {
        if (completed) return <div className="pill">Completed</div>;
        return (
            <>

            </>
        );
    };
};

CountdownTimer.propTypes = {
    date: PropTypes.string.isRequired,
};

export default CountdownTimer;

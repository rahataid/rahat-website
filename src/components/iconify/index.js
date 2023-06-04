import PropTypes from "prop-types";
// icons
import { Icon } from "@iconify/react";
// @mui

// ----------------------------------------------------------------------

const Iconify = ({ icon, width = 20, sx, ...other }) => (
    <Icon style={sx} icon={icon} {...other} />
);

Iconify.propTypes = {
    sx: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Iconify;

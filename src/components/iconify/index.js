import PropTypes from "prop-types";
import { forwardRef } from "react";
// icons
import { Icon } from "@iconify/react";
// @mui

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }) => (
    <Icon style={sx} />
));

Iconify.propTypes = {
    sx: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Iconify;

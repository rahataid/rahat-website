import Anchor from "@ui/anchor";
import clsx from "clsx";
import PropTypes from "prop-types";
import MegaMenu from "./megamenu";
import SubMenu from "./submenu";

const MainMenu = ({ menu }) => (
    <ul className="mainmenu">
        {menu.map((nav) => (
            <li
                key={nav.id}
                className={clsx(
                    !!nav.submenu && "has-droupdown has-menu-child-item",
                    !!nav.megamenu && "with-megamenu"
                )}
            >
                <Anchor
                    className="its_new"
                    path={nav.path}
                    style={{
                        fontWeight: "600",
                        color: "#18181b",
                        fontSize: "15px",
                    }}
                >
                    {nav.text}
                </Anchor>
                {nav?.submenu && <SubMenu menu={nav.submenu} />}
                {nav?.megamenu && <MegaMenu menu={nav.megamenu} />}
            </li>
        ))}
    </ul>
);

MainMenu.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({})),
};

export default MainMenu;


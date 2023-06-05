import { searchCommunity } from "@redux/slices/community";
import { CommunitiesService } from "@services/communities";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const SearchForm = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = async () => {
        dispatch(searchCommunity(search));
    };

    useEffect(() => {
        dispatch(searchCommunity(search));
    }, [dispatch, search]);

    return (
        <form className="search-form-wrapper" action="#">
            <input
                type="search"
                placeholder="Search Here"
                aria-label="Search"
                onChange={handleSearchChange}
            />
            <div className="search-icon">
                <button type="button" onClick={handleSearch}>
                    <i className="feather-search" />
                </button>
            </div>
        </form>
    );
};

export default SearchForm;

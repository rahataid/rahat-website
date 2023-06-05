import { useRouter } from "next/navigation";
import { useState } from "react";
const SearchForm = () => {
    const [search, setSearch] = useState("");
    const { push } = useRouter();
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        push(`?search=${search}`);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            // 👇 Get input value
            handleSearch();
        }
    };

    return (
        <form className="search-form-wrapper" action="#">
            <input
                type="search"
                placeholder="Search Here"
                aria-label="Search"
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
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

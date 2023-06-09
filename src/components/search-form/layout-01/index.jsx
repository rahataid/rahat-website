import NiceSelect from "@ui/nice-select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const SearchForm = ({ categories, countries = [] }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [search, setSearch] = useState(searchParams.get("name"));
    const [country, setCountry] = useState(
        countries.find(
            (country) => country.value === searchParams.get("country")
        )
    );

    const [category, setCategory] = useState(
        categories.find(
            (category) => category.value === searchParams.get("category")
        )
    );

    const { push } = useRouter();

    const handleSearchChange = (e) => {
        const { value, name } = e.target;
        setSearch(value);
        push(
            pathname +
                "?" +
                createQueryString({
                    [name]: value,
                    category: category?.value,
                    country: country?.value,
                })
        );
    };

    // const handleSearch = () => {};

    // const handleKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         handleSearch(event);
    //     }
    // };

    const handleOptionChange = (name, data) => {
        if (!name || !data) return;

        const updatedParams = {
            ...Object.fromEntries(searchParams.entries()),
            [name]: data.value,
        };
        const queryString = createQueryString(updatedParams);
        push(pathname + "?" + queryString);

        if (name === "category") {
            setCategory(data);
        } else if (name === "country") {
            setCountry(data);
        }
    };

    const clearFilter = () => {
        setSearch("");
        setCategory(null);
        setCountry(null);
        push(pathname);
    };

    const createQueryString = useCallback(
        (params) => {
            const queryParams = Object.entries(params)
                .filter(
                    ([_, value]) =>
                        value !== null && value !== undefined && value !== ""
                )
                .map(
                    ([key, value]) =>
                        `${encodeURIComponent(key)}=${encodeURIComponent(
                            value
                        )}`
                )
                .join("&");

            return queryParams === "" ? "" : `${queryParams}`;
        },
        [pathname]
    );

    return (
        <>
            <div className="filter-select-option">
                <NiceSelect
                    options={categories}
                    placeholder="Filter By Category"
                    name="category"
                    onChange={(data) => handleOptionChange("category", data)}
                    defaultCurrent={category}
                />
            </div>
            <div className="filter-select-option">
                <NiceSelect
                    options={countries}
                    placeholder="Filter By Country"
                    name="country"
                    onChange={(data) => handleOptionChange("country", data)}
                    defaultCurrent={country}
                />
            </div>
            <form className="search-form-wrapper" action="">
                <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                    name="name"
                    value={search}
                    onChange={handleSearchChange}
                    // onKeyDown={handleKeyDown}
                />
                {/* <div className="search-icon">
                    <button type="button" onClick={handleSearch}>
                        <i className="feather-search" />
                    </button>
                </div> */}
            </form>
            <div className="reset-icon">
                <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    onClick={clearFilter}
                >
                    Clear
                </button>
            </div>
        </>
    );
};

export default SearchForm;

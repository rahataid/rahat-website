import NiceSelect from "@ui/nice-select";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
const SearchForm = ({ categories, countries = [] }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    let countryQuery;
    if (countries[0]) {
        countryQuery = countries?.reduce((country) => {
            if (country?.value === searchParams.get("country")) return country;
        });
    }
    const categoryQuery = categories?.reduce((category) => {
        if (category?.value == searchParams.get("category")) return category;
    });
    const [search, setSearch] = useState(searchParams.get("search"));
    const [country, setCountry] = useState(countryQuery);
    const [category, setCategory] = useState(categoryQuery);

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

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
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
            {""}
            <div>
                <button
                    type="button"
                    onClick={clearFilter}
                    style={{ padding: 10 }}
                >
                    {" "}
                    Reset
                </button>
            </div>
        </>
    );
};

export default SearchForm;

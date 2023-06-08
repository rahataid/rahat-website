import NiceSelect from "@ui/nice-select";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
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
    console.log({ categoryQuery });
    const [search, setSearch] = useState(searchParams.get("search"));
    const [country, setCountry] = useState(countryQuery);
    const [category, setCategory] = useState(categoryQuery);

    const { push } = useRouter();
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        push(pathname + "?" + createQueryString("search", search));
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            // 👇 Get input value
            handleSearch();
        }
    };
    const handleCategory = (data) => {
        push(pathname + "?" + createQueryString("category", data.value));
        setCategory(data);
    };

    const handleCountry = (data) => {
        push(pathname + "?" + createQueryString("country", data.value));
        setCountry(data);
    };

    const clearFilter = () => {};

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    return (
        <>
            <div className="filter-select-option">
                <NiceSelect
                    options={categories}
                    placeholder="Filter By Category"
                    name="like"
                    onChange={handleCategory}
                    defaultCurrent={category}
                />
            </div>{" "}
            <div className="filter-select-option">
                <NiceSelect
                    options={countries}
                    placeholder="Filter By Country"
                    name="like"
                    onChange={handleCountry}
                    defaultCurrent={country}
                />
            </div>
            <form className="search-form-wrapper" action="">
                <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                    value={search}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearch}
                />

                <div className="search-icon">
                    <button type="button" onClick={handleSearch}>
                        <i className="feather-search" />
                    </button>
                </div>
            </form>
        </>
    );
};

export default SearchForm;

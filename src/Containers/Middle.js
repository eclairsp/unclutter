import React, { useState } from "react";
import { connect } from "react-redux";
import { searchFilters } from "../Actions";
import Options from "./Options";

const Middle = ({ searchType }) => {
    const [query, setQuery] = useState("");
    const [empty, setEmpty] = useState(false);

    const redirectToSearch = url => {
        window.location.href = `${url}${query}`;
    };

    const handleSearch = e => {
        e.preventDefault();
        if (query === "") {
            setEmpty(true);
            return;
        }

        console.log(query);

        switch (searchType) {
            case searchFilters.GOOGLE:
                redirectToSearch("https://www.google.com/search?q=");
                return;
            case searchFilters.DUCK_DUCK_GO:
                redirectToSearch("https://duckduckgo.com/?q=");
                return;
            case searchFilters.BING:
                redirectToSearch("https://www.bing.com/search?q=");
                return;
            default:
                return;
        }
    };

    const handleSearchInput = event => {
        setQuery(event.target.value);
    };

    return (
        <form>
            <div
                className="flex justify-start items-center"
                style={{ height: "max-content" }}>
                <input
                    className={`${
                        empty ? "border-red-500" : "border-teal-500"
                    } border-2 font-thin w-full text-teal-500 focus:outline-none hover:bg-gray-800 w-auto p-2 text-xl bg-gray-900`}
                    onChange={handleSearchInput}
                    value={query}
                    type="text"
                    placeholder="Search..."
                    aria-label="Search"
                />
                <div className="w-64 relative border-2 border-teal-500">
                    <Options />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
                <button
                    type="submit"
                    onClick={handleSearch}
                    className="border-2 border-teal-500 font-thin text-teal-500 focus:outline-none hover:bg-gray-800 text-xl bg-gray-900 p-2 px-6 ">
                    Search
                </button>
            </div>
        </form>
    );
};

const mapStateToProps = state => {
    return { searchType: state.search };
};

export default connect(mapStateToProps)(Middle);

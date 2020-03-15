import React from "react";
import {connect} from "react-redux";
import {searchFilter, searchFilters} from "../Actions";

const Options = ({state, changeOption}) => {
    const handleSelection = event => {
        const selection = event.target.value;
        changeOption(selection);
    };

    return (
        <select
            value={state.search}
            className="block cursor-pointer font-thin appearance-none w-full bg-gray-900 text-teal-500 hover:bg-gray-800 border-none hover:border-gray-800 p-2 focus:outline-none text-xl"
            onChange={handleSelection}
        >
            <option
                value={searchFilters.GOOGLE}
                className="focus:outline-none font-thin text-lg border-none"
            >
                Google
            </option>
            <option
                value={searchFilters.DUCK_DUCK_GO}
                className="focus:outline-none font-thin text-lg border-none"
            >
                Duck Duck Go
            </option>
            <option
                value={searchFilters.BING}
                className="focus:outline-none font-thin text-lg border-none"
            >
                Bing
            </option>
        </select>
    );
};

const mapStateToProps = state => {
    return {state};
};

const mapDispatchToProps = dispatch => {
    return {
        changeOption: selection => dispatch(searchFilter(selection))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);

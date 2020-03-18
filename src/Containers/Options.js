import React from "react";
import {connect} from "react-redux";
import {searchFilter} from "../Actions";

const Options = ({data, state, changeOption}) => {
    const handleSelection = event => {
        const selection = event.target.value;
        changeOption(selection);
    };

    return (
        <React.Fragment>
            <select
                value={state.search}
                className="block cursor-pointer font-thin appearance-none w-full bg-gray-900 text-teal-500 hover:bg-gray-800 border-none hover:border-gray-800 p-2 focus:outline-none text-xl"
                onChange={handleSelection}
            >
                {data.map((val, i) => (
                    <option
                        key={i}
                        value={val.val}
                        className="focus:outline-none font-thin text-lg border-none"
                    >
                        {val.name}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none text-teal-500 absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </React.Fragment>
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

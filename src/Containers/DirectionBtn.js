import React from "react";
import {connect} from "react-redux";
import {listDirection} from "../Actions";

const DirectionBtn = ({state, direction, children, type}) => {
    return (
        <button
            className={`border-2 border-teal-500 font-thin ${
                state === type
                    ? "bg-teal-500 text-gray-900 hover:bg-teal-800"
                    : "bg-gray-900 text-teal-500 hover:bg-gray-800"
            } focus:outline-none w-full my-1 text-xl p-2 px-6`}
            onClick={() => direction(type)}
            style={{textAlign: "left"}}
        >
            {children}
        </button>
    );
};

const mapStateToProps = state => ({
    state: state.direction
});

const mapDispatchToProps = dispatch => ({
    direction: direction => dispatch(listDirection(direction))
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectionBtn);

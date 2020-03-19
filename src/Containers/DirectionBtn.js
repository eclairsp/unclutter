import React from "react";
import {connect} from "react-redux";
import {listDirection, changeAddBtnPosition} from "../Actions";

const DirectionBtn = ({
    state,
    direction,
    children,
    type,
    closeMenu,
    classifier,
    position
}) => {
    const handleClick = () => {
        if (classifier === "Direction") {
            direction(type);
            closeMenu();
        }

        if (classifier === "AddBtn") {
            position(type);
            closeMenu();
        }
    };

    const handleStyles = () => {
        if (classifier === "Direction") {
            console.log("b");
            if (state.direction === type) {
                return "bg-teal-500 text-gray-900 hover:bg-teal-800";
            } else {
                return "bg-gray-900 text-teal-500 hover:bg-gray-800";
            }
        }

        if (classifier === "AddBtn") {
            console.log("h");
            if (state.addBtnPosition === type) {
                return "bg-teal-500 text-gray-900 hover:bg-teal-800";
            } else {
                return "bg-gray-900 text-teal-500 hover:bg-gray-800";
            }
        }
    };

    return (
        <button
            className={`border-2 border-teal-500 font-thin ${handleStyles()} focus:outline-none w-full my-1 text-xl p-2 px-6`}
            onClick={() => handleClick()}
            style={{textAlign: "left"}}
        >
            {children}
        </button>
    );
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    direction: direction => dispatch(listDirection(direction)),
    position: position => dispatch(changeAddBtnPosition(position))
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectionBtn);

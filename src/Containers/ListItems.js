import React from "react";
import {connect} from "react-redux";
import {Draggable} from "react-beautiful-dnd";
import {motion} from "framer-motion";
import Img from "react-image";
import {removeItem} from "../Actions";

const item = {
    open: {x: 0},
    closed: {x: 40}
};

const ListItems = ({list, remove, children, btnPosition}) => {
    const getItem = (e, index) => {
        e.stopPropagation();
        remove(index);
    };

    return (
        <React.Fragment>
            {btnPosition === "FRONT" && children}
            {list.map((val, i) => {
                return (
                    <Draggable draggableId={`drop-${i}`} index={i} key={i}>
                        {(provided, snapshot) => (
                            <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <motion.div
                                    initial="closed"
                                    animate="open"
                                    variants={item}
                                    className="relative m-3 select-none"
                                >
                                    <button
                                        onClick={e => getItem(e, i)}
                                        className="absolute focus:outline-none"
                                        style={{
                                            top: "-15px",
                                            right: "-15px"
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
                                                style={{
                                                    fill: "none",
                                                    stroke: "#38B2AC",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "32px"
                                                }}
                                            />
                                            <line
                                                x1="320"
                                                y1="320"
                                                x2="192"
                                                y2="192"
                                                style={{
                                                    fill: "none",
                                                    stroke: "#38B2AC",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "32px"
                                                }}
                                            />
                                            <line
                                                x1="192"
                                                y1="320"
                                                x2="320"
                                                y2="192"
                                                style={{
                                                    fill: "none",
                                                    stroke: "#38B2AC",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "32px"
                                                }}
                                            />
                                        </svg>
                                    </button>
                                    <div className="flex justify-center items-center flex-col text-teal-500 font-thin text-2xl">
                                        <a href={`http://${val.link}`}>
                                            <div className="flex justify-center items-center h-24 w-24 bg-gray-900 hover:bg-gray-800 border-2 border-teal-500 rounded-full">
                                                {val.img === false ? (
                                                    <h1
                                                        className="text-5xl font-semibold"
                                                        style={{
                                                            marginTop: "-5px"
                                                        }}
                                                    >
                                                        {val.name[0]}
                                                    </h1>
                                                ) : (
                                                    <Img
                                                        style={{
                                                            height: "64px",
                                                            width: "64px"
                                                        }}
                                                        src={[val.img]}
                                                        unloader={
                                                            <h1
                                                                className="text-5xl font-semibold"
                                                                style={{
                                                                    marginTop:
                                                                        "-5px"
                                                                }}
                                                            >
                                                                {val.name[0]}
                                                            </h1>
                                                        }
                                                        loader={
                                                            <h1
                                                                className="text-5xl font-semibold"
                                                                style={{
                                                                    marginTop:
                                                                        "-5px"
                                                                }}
                                                            >
                                                                {val.name[0]}
                                                            </h1>
                                                        }
                                                        alt={`${val.name} logo`}
                                                    />
                                                )}
                                            </div>
                                        </a>
                                        <a href={`http://${val.link}`}>
                                            <h1
                                                title={val.name}
                                                style={{
                                                    maxWidth: "100px",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                }}
                                            >
                                                {val.name}
                                            </h1>
                                        </a>
                                    </div>
                                </motion.div>
                            </li>
                        )}
                    </Draggable>
                );
            })}
            {btnPosition === "BACK" && children}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {list: state.list, btnPosition: state.addBtnPosition};
};

const matchDispatchToProps = dispatch => {
    return {
        remove: index => dispatch(removeItem(index))
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(ListItems);

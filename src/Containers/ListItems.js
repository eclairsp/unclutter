import React from "react";
import {connect} from "react-redux";
import {motion} from "framer-motion";
import {removeItem} from "../Actions";

const item = {
    open: {x: 0},
    closed: {x: 40}
};

const ListItems = ({list, remove, children}) => {
    const getItem = (e, index) => {
        e.stopPropagation();
        console.log(index);
        remove(index);
    };

    return (
        <React.Fragment>
            {list.map((val, i) => {
                return (
                    <motion.li
                        key={i}
                        initial="closed"
                        animate="open"
                        variants={item}
                        className="relative"
                        style={{margin: "0 10px"}}
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
                                    <img
                                        style={{
                                            height: "64px",
                                            width: "64px"
                                        }}
                                        src={val.img}
                                        alt={`${val.name} logo`}
                                    />
                                </div>
                            </a>
                            <a href={`http://${val.link}`}>
                                <h1>{val.name}</h1>
                            </a>
                        </div>
                    </motion.li>
                );
            })}
            {children}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {list: state.list};
};

const matchDispatchToProps = dispatch => {
    return {
        remove: index => dispatch(removeItem(index))
    };
};

export default connect(mapStateToProps, matchDispatchToProps)(ListItems);

import React from "react";
import {connect} from "react-redux";
import {removeItem} from "../Actions";

const ListItems = ({list, remove}) => {
    const getItem = (e, index) => {
        e.stopPropagation();
        console.log(index);
        remove(index);
    };

    return list.map((val, i) => {
        return (
            <div key={i} className="relative">
                <button
                    onClick={e => getItem(e, i)}
                    className="absolute top-0 right-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
                <a key={i} href={`http://${val.link}`}>
                    <div className="flex justify-center items-center flex-col p-2 m-3 text-teal-500 font-thin text-2xl">
                        <div className="flex justify-center items-center h-24 w-24 bg-gray-900 rounded-full">
                            <img src={val.img} alt={`${val.name} logo`} />
                        </div>
                        <h1>{val.name}</h1>
                    </div>
                </a>
            </div>
        );
    });
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

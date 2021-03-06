import React from "react";
import {Droppable} from "react-beautiful-dnd";
import {motion} from "framer-motion";
import ListItems from "../Containers/ListItems";

const list = {
    open: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 1
        }
    },
    closed: {
        opacity: 0
    }
};

const item = {
    open: {
        x: 0
    },
    closed: {
        x: 20
    }
};

const Bottom = ({switcher, direction}) => {
    return (
        <Droppable droppableId="list" direction="horizontal">
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    <motion.ul
                        initial="closed"
                        animate="open"
                        variants={list}
                        className={`flex ${direction === "GRID" &&
                            "flex-wrap"} p-4 justify-start items-center h-auto`}
                        style={{
                            maxHeight: "50vh",
                            height: "max-content"
                        }}
                    >
                        <ListItems>
                            <motion.li
                                className="relative m-3 select-none"
                                initial="closed"
                                animate="open"
                                variants={item}
                                key={"add"}
                            >
                                <div className="flex justify-center items-center flex-col text-teal-500 font-thin text-xl">
                                    <div
                                        onClick={switcher}
                                        className="border-2 border-teal-500 flex cursor-pointer justify-center  hover:bg-gray-800 items-center h-24 w-24 bg-gray-900 rounded-full"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-12 w-12"
                                            viewBox="0 0 512 512"
                                        >
                                            <title> ionicons - v5 - a </title>{" "}
                                            <line
                                                x1="256"
                                                y1="112"
                                                x2="256"
                                                y2="400"
                                                style={{
                                                    fill: "none",
                                                    stroke: "#38B2AC",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "32px"
                                                }}
                                            />{" "}
                                            <line
                                                x1="400"
                                                y1="256"
                                                x2="112"
                                                y2="256"
                                                style={{
                                                    fill: "none",
                                                    stroke: "#38B2AC",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "32px"
                                                }}
                                            />{" "}
                                        </svg>{" "}
                                    </div>{" "}
                                    <h1> Add </h1>{" "}
                                </div>{" "}
                            </motion.li>{" "}
                        </ListItems>{" "}
                    </motion.ul>
                </div>
            )}
        </Droppable>
    );
};

export default Bottom;

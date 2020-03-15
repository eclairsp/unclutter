import React, {useState} from "react";
import {motion} from "framer-motion";
import AddItem from "../Containers/AddItem";
import ListItems from "../Containers/ListItems";

const variants = {
    open: {opacity: 1, display: "block", zIndex: 2},
    closed: {opacity: 0, display: "none"}
};

const Bottom = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(!open);
    };
    return (
        <section
            className="flex flex-wrap justify-start  items-center"
            style={{height: "max-content"}}
        >
            <ListItems />
            <div className="relative flex justify-center items-center flex-col p-2 text-teal-500 font-thin text-xl">
                <div
                    onClick={() => setOpen(!open)}
                    className="flex cursor-pointer justify-center items-center h-24 w-24 bg-gray-900 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        viewBox="0 0 512 512"
                    >
                        <title>ionicons-v5-a</title>
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
                        />
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
                        />
                    </svg>
                </div>
                <h1>Add</h1>
                <motion.div
                    onClick={e => e.stopPropagation()}
                    animate={open ? "open" : "closed"}
                    variants={variants}
                    className="add-box-arrow relative bg-teal-500 m-4 p-2 text-gray-900"
                >
                    <AddItem close={handleClose} />
                </motion.div>
            </div>
        </section>
    );
};

export default Bottom;

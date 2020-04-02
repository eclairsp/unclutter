import React, {useState} from "react";
import ReactDOM from "react-dom";
import {motion} from "framer-motion";
import ActionBtn from "../Containers/ActionBtn";
import DirectionBtn from "../Containers/DirectionBtn";
import DeleteConfirm from "../Containers/DeleteConfirm";

const btnDownload = {
    open: {
        x: 0,
        opacity: 1
    },
    closed: {
        delay: 0.5,
        x: 100,
        opacity: 0
    }
};

const variants = {
    open: {
        opacity: 1,
        zIndex: 2,
        x: 0
    },
    closed: {
        opacity: 0,
        x: 100
    }
};

const menu = {
    open: {width: 300},
    closed: {width: "auto"}
};

const menuBtn = {
    open: {borderRadius: "0"},
    closed: {borderRadius: "1000px"}
};

const Menu = () => {
    const [open, setOpen] = useState(false);
    const [hovered, setHover] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const closeMenu = () => {
        setOpen(!open);
        setHover(false);
    };

    const modalSwitcher = () => {
        closeMenu();
        setOpenModal(!openModal);
    };
    return (
        <motion.section
            animate={open ? "open" : "closed"}
            variants={menu}
            onHoverStart={() => {
                setHover(true) && setOpen(true);
            }}
            onHoverEnd={() => {
                hovered && setOpen(false) && setHover(false);
            }}
            className="z-10 flex flex-col absolute top-0 right-0 text-teal-500 h-full p-4 bg-texture"
        >
            <motion.button
                onClick={() => setOpen(!open)}
                variants={menuBtn}
                className={`my-1 p-2 bg-gray-900 flex focus:outline-none hover:bg-gray-800 text-xl font-thin items-center border-2 border-teal-500`}
            >
                <svg
                    className="fill-current inline w-12 h-12 m-0"
                    viewBox="0 0 512 512"
                >
                    {open ? (
                        <polyline
                            points="184 112 328 256 184 400"
                            style={{
                                fill: "none",
                                stroke: "#38B2AC",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "32px"
                            }}
                        />
                    ) : (
                        <path d="M456.7 242.27l-26.08-4.2a8 8 0 01-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08 8.08 0 013.9-8.62l23.09-12.82a8.05 8.05 0 003.9-9.92l-4-11a7.94 7.94 0 00-9.4-5l-25.89 5a8 8 0 01-8.59-4.11q-2.25-4.2-4.8-8.41a8.16 8.16 0 01.7-9.52l17.29-19.94a8 8 0 00.3-10.62l-7.49-9a7.88 7.88 0 00-10.5-1.51l-22.69 13.63a8 8 0 01-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8 8 0 01-2.5-9.11l9.4-24.75A8 8 0 00365 78.77l-10.2-5.91a8 8 0 00-10.39 2.21l-16.64 20.84a7.15 7.15 0 01-8.5 2.5s-5.6-2.3-9.8-3.71A8 8 0 01304 87l.4-26.45a8.07 8.07 0 00-6.6-8.42l-11.59-2a8.07 8.07 0 00-9.1 5.61l-8.6 25.05a8 8 0 01-7.79 5.41h-9.8a8.07 8.07 0 01-7.79-5.41l-8.6-25.05a8.07 8.07 0 00-9.1-5.61l-11.59 2a8.07 8.07 0 00-6.6 8.42l.4 26.45a8 8 0 01-5.49 7.71c-2.3.9-7.3 2.81-9.7 3.71-2.8 1-6.1.2-8.8-2.91l-16.51-20.34A8 8 0 00156.75 73l-10.2 5.91a7.94 7.94 0 00-3.3 10.09l9.4 24.75a8.06 8.06 0 01-2.5 9.11c-2.5 2-5 4.11-7.4 6.22a8 8 0 01-9.39.9L111 116.14a8 8 0 00-10.5 1.51l-7.49 9a8 8 0 00.3 10.62l17.29 19.94a8 8 0 01.7 9.52q-2.55 4-4.8 8.41a8.11 8.11 0 01-8.59 4.11l-25.89-5a8 8 0 00-9.4 5l-4 11a8.05 8.05 0 003.9 9.92L85.58 213a7.94 7.94 0 013.9 8.62c-.6 3.2-1.2 6.31-1.7 9.51a8.08 8.08 0 01-6.6 6.82l-26.08 4.2a8.09 8.09 0 00-7.1 7.92v11.72a7.86 7.86 0 007.1 7.92l26.08 4.2a8 8 0 016.6 6.82c.5 3.2 1 6.41 1.7 9.51a8.08 8.08 0 01-3.9 8.62L62.49 311.7a8.05 8.05 0 00-3.9 9.92l4 11a7.94 7.94 0 009.4 5l25.89-5a8 8 0 018.59 4.11q2.25 4.2 4.8 8.41a8.16 8.16 0 01-.7 9.52l-17.29 19.96a8 8 0 00-.3 10.62l7.49 9a7.88 7.88 0 0010.5 1.51l22.69-13.63a8 8 0 019.39.9c2.4 2.11 4.9 4.21 7.4 6.22a8 8 0 012.5 9.11l-9.4 24.75a8 8 0 003.3 10.12l10.2 5.91a8 8 0 0010.39-2.21l16.79-20.64c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.61a8 8 0 015.49 7.71l-.4 26.45a8.07 8.07 0 006.6 8.42l11.59 2a8.07 8.07 0 009.1-5.61l8.6-25a8 8 0 017.79-5.41h9.8a8.07 8.07 0 017.79 5.41l8.6 25a8.07 8.07 0 009.1 5.61l11.59-2a8.07 8.07 0 006.6-8.42l-.4-26.45a8 8 0 015.49-7.71c4.2-1.41 7-2.51 9.6-3.51s5.8-1 8.3 2.1l17 20.94A8 8 0 00355 439l10.2-5.91a7.93 7.93 0 003.3-10.12l-9.4-24.75a8.08 8.08 0 012.5-9.12c2.5-2 5-4.1 7.4-6.21a8 8 0 019.39-.9L401 395.66a8 8 0 0010.5-1.51l7.49-9a8 8 0 00-.3-10.62l-17.29-19.94a8 8 0 01-.7-9.52q2.55-4.05 4.8-8.41a8.11 8.11 0 018.59-4.11l25.89 5a8 8 0 009.4-5l4-11a8.05 8.05 0 00-3.9-9.92l-23.09-12.82a7.94 7.94 0 01-3.9-8.62c.6-3.2 1.2-6.31 1.7-9.51a8.08 8.08 0 016.6-6.82l26.08-4.2a8.09 8.09 0 007.1-7.92V250a8.25 8.25 0 00-7.27-7.73zM256 112a143.82 143.82 0 01139.38 108.12A16 16 0 01379.85 240H274.61a16 16 0 01-13.91-8.09l-52.1-91.71a16 16 0 019.85-23.39A146.94 146.94 0 01256 112zM112 256a144 144 0 0143.65-103.41 16 16 0 0125.17 3.47L233.06 248a16 16 0 010 15.87l-52.67 91.7a16 16 0 01-25.18 3.36A143.94 143.94 0 01112 256zm144 144a146.9 146.9 0 01-38.19-4.95 16 16 0 01-9.76-23.44l52.58-91.55a16 16 0 0113.88-8H379.9a16 16 0 0115.52 19.88A143.84 143.84 0 01256 400z"></path>
                    )}
                </svg>
                {open && (
                    <p className="mx-2" style={{marginTop: "-2px"}}>
                        Change Settings
                    </p>
                )}
            </motion.button>

            {open && <hr className="text-teal-500 bg-teal-500 my-2"></hr>}

            <motion.section
                initial="closed"
                animate="open"
                variants={btnDownload}
                className="my-1 flex flex-col justify-start items-start"
            >
                {open && <h1 className="text-3xl font-thin">Data</h1>}
                {open && (
                    <ActionBtn closeMenu={closeMenu} type="DOWNLOAD">
                        Export
                    </ActionBtn>
                )}
                {open && (
                    <ActionBtn closeMenu={closeMenu} type="UPLOAD">
                        Import
                    </ActionBtn>
                )}
            </motion.section>

            {open && <hr className="text-teal-500 bg-teal-500 my-2"></hr>}

            <motion.section
                initial="closed"
                animate="open"
                variants={btnDownload}
                className="my-1 flex flex-col justify-start items-start"
            >
                {open && <h1 className="text-3xl font-thin">Links</h1>}
                {open && (
                    <DirectionBtn
                        closeMenu={closeMenu}
                        classifier="Direction"
                        type="HORIZONTAL"
                    >
                        Horizontal
                    </DirectionBtn>
                )}
                {open && (
                    <DirectionBtn
                        closeMenu={closeMenu}
                        classifier="Direction"
                        type="GRID"
                    >
                        Grid
                    </DirectionBtn>
                )}
            </motion.section>
            {open && <hr className="text-teal-500 bg-teal-500 my-2"></hr>}

            <motion.section
                initial="closed"
                animate="open"
                variants={btnDownload}
                className="my-1 flex flex-col justify-start items-start"
            >
                {open && <h1 className="text-3xl font-thin">Add Button</h1>}
                {open && (
                    <DirectionBtn
                        closeMenu={closeMenu}
                        classifier="AddBtn"
                        type="FRONT"
                    >
                        Front
                    </DirectionBtn>
                )}
                {open && (
                    <DirectionBtn
                        closeMenu={closeMenu}
                        classifier="AddBtn"
                        type="BACK"
                    >
                        Back
                    </DirectionBtn>
                )}
            </motion.section>

            {open && <hr className="text-teal-500 bg-teal-500 my-2"></hr>}

            <motion.section
                initial="closed"
                animate="open"
                variants={btnDownload}
                className="my-1 flex flex-col justify-start items-start"
            >
                {open && <h1 className="text-3xl font-thin">Clear Data</h1>}
                {open && (
                    <button
                        onClick={() => modalSwitcher()}
                        className="cursor-pointer border-2 border-teal-500 font-thin bg-gray-900 focus:outline-none w-full my-1 hover:bg-gray-800 text-xl text-teal-500 p-2 px-6"
                    >
                        Clear Data
                    </button>
                )}
                {ReactDOM.createPortal(
                    openModal ? (
                        <div
                            onClick={e => modalSwitcher(e)}
                            className="add-box-arrow flex justify-center items-center absolute h-screen w-screen z-10"
                        >
                            <motion.div
                                initial="closed"
                                animate="open"
                                variants={variants}
                                className="bg-gray-900 m-4 p-12 py-24 text-teal-500 w-8/12"
                                onClick={e => e.stopPropagation()}
                            >
                                <DeleteConfirm close={modalSwitcher} />
                            </motion.div>
                        </div>
                    ) : null,
                    document.getElementById("modal")
                )}
            </motion.section>
        </motion.section>
    );
};

export default Menu;

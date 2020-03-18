import React, {useState} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {DragDropContext} from "react-beautiful-dnd";
import {motion} from "framer-motion";
import {reorderList} from "../Actions";
import Bottom from "../Components/Bottom";
import AddItem from "../Containers/AddItem";

const variants = {
    open: {
        opacity: 1,
        display: "block",
        zIndex: 2,
        x: 0
    },
    closed: {
        opacity: 0,
        x: 20
    }
};

const BottomContainer = ({reorder}) => {
    const [open, setOpen] = useState(false);

    const dragEnd = result => {
        if (result.source === null || result.destination === null) {
            return;
        }
        reorder(result.source.index, result.destination.index);
    };

    const openSwitcher = () => {
        setOpen(!open);
    };

    return (
        <section style={{overflowX: "auto"}}>
            <DragDropContext onDragEnd={dragEnd}>
                <Bottom switcher={openSwitcher} />
                {ReactDOM.createPortal(
                    open ? (
                        <div
                            onClick={e => openSwitcher(e)}
                            className="add-box-arrow flex justify-center items-center absolute h-screen w-screen z-10"
                        >
                            <motion.div
                                initial="closed"
                                animate="open"
                                variants={variants}
                                className="bg-gray-900 m-4 p-2 text-teal-500 w-8/12"
                                onClick={e => e.stopPropagation()}
                            >
                                <AddItem close={openSwitcher} />
                            </motion.div>
                        </div>
                    ) : null,
                    document.getElementById("modal")
                )}
            </DragDropContext>
        </section>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        reorder: (src, dest) => dispatch(reorderList(src, dest))
    };
};

export default connect(null, mapDispatchToProps)(BottomContainer);

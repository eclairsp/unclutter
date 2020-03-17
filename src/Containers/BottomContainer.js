import React, { useState } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { motion } from "framer-motion";
import { reorderList } from "../Actions";
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

const BottomContainer = ({ reorder }) => {
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
        <section id="list-portal" className="relative">
            <DragDropContext onDragEnd={dragEnd}>
                <Bottom switcher={openSwitcher} />
                {open ? (
                    <motion.div
                        initial="closed"
                        animate="open"
                        variants={variants}
                        className="add-box-arrow absolute bg-teal-500 m-4 p-2 text-gray-900">
                        <AddItem close={openSwitcher} />
                    </motion.div>
                ) : null}
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

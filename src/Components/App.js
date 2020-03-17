import React from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderList } from "../Actions";
import Menu from "./Menu";
import Top from "./Top";
import Middle from "../Containers/Middle";
import Bottom from "./Bottom";
import "./app.css";

const App = ({ reorder }) => {
    const dragEnd = result => {
        reorder(result.source.index, result.destination.index);
    };
    return (
        <React.Fragment>
            <Menu />
            <section className="flex justify-center items-center h-screen shadow-2xl">
                <section
                    className="p-5 grid gap-10 w-8/12 rounded-lg"
                    style={{
                        gridTemplateRows:
                            "repeat(3, minmax(min-content, max-content))"
                    }}
                    id="outer">
                    <Top />
                    <Middle />
                    <DragDropContext onDragEnd={dragEnd}>
                        <Bottom />
                    </DragDropContext>
                </section>
            </section>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        reorder: (src, dest) => dispatch(reorderList(src, dest))
    };
};

export default connect(null, mapDispatchToProps)(App);

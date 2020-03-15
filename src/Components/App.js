import React from "react";
import Menu from "./Menu";
import Top from "./Top";
import Middle from "../Containers/Middle";
import Bottom from "./Bottom";
import "./app.css";

const App = () => {
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
                >
                    <Top />
                    <Middle />
                    <Bottom />
                </section>
            </section>
        </React.Fragment>
    );
};

export default App;

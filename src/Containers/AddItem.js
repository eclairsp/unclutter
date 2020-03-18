import React, {useState} from "react";
import {connect} from "react-redux";
import {addItem} from "../Actions";

const AddItem = ({close, addItem}) => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [emptyName, setEmptyName] = useState(false);
    const [emptyLink, setEmptyLink] = useState(false);

    const handleAdd = async e => {
        e.preventDefault();
        setEmptyName(false);
        setEmptyLink(false);

        if (name === "") {
            setEmptyName(true);
            return;
        }

        if (link === "") {
            setEmptyLink(true);
            return;
        }

        const response = await fetch(`https://api.faviconkit.com/${link}/144`);

        const Name = name;
        const Link = link;
        const imgLink = response.url;

        setName("");
        setLink("");

        close();
        return addItem({name: Name, link: Link, img: imgLink});
    };

    const handleName = event => {
        setName(event.target.value);
    };

    const handleLink = event => {
        setLink(event.target.value);
    };
    return (
        <form>
            <div>
                <div className="flex justify-start items-center">
                    <h1 className="text-5xl font-light">Add a new link</h1>
                    <button
                        onClick={close}
                        className="p-1 ml-auto bg-gray-900 flex focus:outline-none rounded-full hover:bg-gray-800 font-thin items-center border-2 border-teal-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="512"
                            height="512"
                            viewBox="0 0 512 512"
                            className="h-6 w-6"
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
                </div>
                <label className="text-2xl font-thin">Name:</label>
                <input
                    autoFocus
                    value={name}
                    type="text"
                    onChange={handleName}
                    className={`${
                        emptyName ? "border-2 border-red-500" : "border-none"
                    } my-2 font-thin w-full text-teal-500 focus:outline-none hover:bg-gray-500 w-auto p-2 text-2xl bg-gray-800`}
                    placeholder="Add a name"
                    aria-label="Add the name for new link"
                />
            </div>
            <div>
                <label className="text-2xl font-thin">Link:</label>
                <input
                    value={link}
                    type="text"
                    onChange={handleLink}
                    className={`${
                        emptyLink ? "border-2 border-red-500" : "border-none"
                    } my-2 font-thin w-full text-teal-500 focus:outline-none hover:bg-gray-500 w-auto p-2 text-2xl bg-gray-800`}
                    placeholder="https://xyz.com"
                    aria-label="Add the link for new link"
                />
            </div>
            <button
                type="submit"
                onClick={handleAdd}
                className="font-thin text-2xl text-teal-500 focus:outline-none py-1 px-4 my-2 hover:bg-gray-500 bg-gray-800 border-2 border-teal-500"
            >
                Add
            </button>
        </form>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    };
};

export default connect(null, mapDispatchToProps)(AddItem);

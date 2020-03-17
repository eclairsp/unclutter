import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../Actions";

const AddItem = ({ close, addItem }) => {
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
        return addItem({ name: Name, link: Link, img: imgLink });
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
                <label className="text-xl font-thin">Name:</label>
                <input
                    autoFocus
                    value={name}
                    type="text"
                    onChange={handleName}
                    className={`${
                        emptyName ? "border-2 border-red-500" : "border-none"
                    } my-2 font-thin w-full text-teal-500 focus:outline-none hover:bg-gray-800 w-auto p-2 text-xl bg-gray-900`}
                    placeholder="Add a name"
                    aria-label="Add the name for new link"
                />
            </div>
            <div>
                <label className="text-xl font-thin">Link:</label>
                <input
                    value={link}
                    type="text"
                    onChange={handleLink}
                    className={`${
                        emptyLink ? "border-2 border-red-500" : "border-none"
                    } my-2 font-thin w-full text-teal-500 focus:outline-none hover:bg-gray-800 w-auto p-2 text-xl bg-gray-900`}
                    placeholder="https://xyz.com"
                    aria-label="Add the link for new link"
                />
            </div>
            <button
                type="submit"
                onClick={handleAdd}
                className="border-none font-thin text-teal-500 focus:outline-none hover:bg-gray-800 text-xl bg-gray-900 p-2 my-2">
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

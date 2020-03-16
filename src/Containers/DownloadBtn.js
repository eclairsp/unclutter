import React from "react";
import {connect} from "react-redux";
import {loadState} from "../utils/localStorage";

const DownloadBtn = ({downloadLink, children}) => {
    return (
        <a
            className="border-2 border-teal-500 font-thin bg-gray-900 focus:outline-none  hover:bg-gray-800 text-xl text-teal-500 p-2 px-6"
            href={downloadLink}
            download="data-unclutter.json"
        >
            {children}
        </a>
    );
};

const mapStateToProps = state => {
    const downloadLink =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(loadState()));
    return {downloadLink};
};

export default connect(mapStateToProps)(DownloadBtn);

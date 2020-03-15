import React from "react";
import {connect} from "react-redux";
import {loadState} from "../utils/localStorage";

const DownloadBtn = ({downloadLink, children}) => {
    return (
        <a
            className="border-none font-thin bg-teal-500 focus:outline-none text-xl text-gray-900 p-2 px-6"
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

import React from "react";
import {connect} from "react-redux";
import {loadState} from "../utils/localStorage";
import {importDATA} from "../Actions";

const ActionBtn = ({downloadLink, children, type, importData}) => {
    const fileUpload = event => {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    };

    const onReaderLoad = event => {
        var obj = JSON.parse(event.target.result);
        console.log(obj);
        importData(obj);
    };

    return (
        <React.Fragment>
            {type === "DOWNLOAD" && (
                <a
                    className="border-2 border-teal-500 font-thin bg-gray-900 focus:outline-none w-full my-1 hover:bg-gray-800 text-xl text-teal-500 p-2 px-6"
                    href={downloadLink}
                    download={`data-unclutter-${new Date()}.json`}
                >
                    {children}
                </a>
            )}{" "}
            {type === "UPLOAD" && (
                <React.Fragment>
                    <label
                        htmlFor="uploadFile"
                        className="cursor-pointer border-2 border-teal-500 font-thin bg-gray-900 focus:outline-none w-full my-1 hover:bg-gray-800 text-xl text-teal-500 p-2 px-6"
                    >
                        {children}
                    </label>
                    <input
                        id="uploadFile"
                        onChange={e => fileUpload(e)}
                        type="file"
                        className="hidden"
                    />
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    const downloadLink =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(loadState()));
    return {downloadLink};
};

const mapDispatchToProps = dispatch => ({
    importData: data => dispatch(importDATA(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionBtn);

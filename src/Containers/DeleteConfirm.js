import React from "react";
import {connect} from "react-redux";
import {deleteAllData} from "../Actions";

const DeleteConfirm = ({close, clearData}) => {
    const clear = () => {
        clearData();
        window.location.reload();
    };

    return (
        <React.Fragment>
            <div className="flex justify-start items-center">
                <h1 className="text-5xl font-light">
                    Are you sure you want to delete all the data?
                </h1>
            </div>
            <button
                onClick={clear}
                className="mr-4 font-thin text-2xl text-black focus:outline-none py-1 px-4 my-2 hover:bg-gray-500 bg-red-500 border-2 border-red-500"
            >
                Delete
            </button>
            <button
                onClick={close}
                className="font-thin text-2xl text-teal-500 focus:outline-none py-1 px-4 my-2 hover:bg-gray-500 bg-gray-800 border-2 border-teal-500"
            >
                Return
            </button>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        clearData: () => dispatch(deleteAllData())
    };
};

export default connect(null, mapDispatchToProps)(DeleteConfirm);

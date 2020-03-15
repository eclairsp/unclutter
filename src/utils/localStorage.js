export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return {
                list: [],
                search: "GOOGLE",
                listType: false
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export function saveState({getState}) {
    return next => action => {
        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action);

        try {
            const serializedState = JSON.stringify(getState());
            localStorage.setItem("state", serializedState);
        } catch {
            // ignore write errors
        }
        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue;
    };
}

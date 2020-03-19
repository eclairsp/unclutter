export const deleteAllData = () => ({
    type: "CLEAR_DATA"
});

export const importDATA = data => ({
    type: "IMPORT_DATA",
    data
});

export const addItem = item => ({
    type: "ADD_ITEM",
    ...item
});

export const removeItem = index => ({
    type: "REMOVE_ITEM",
    index
});

export const reorderList = (src, dest) => ({
    type: "REORDER_LIST",
    src,
    dest
});

export const searchFilter = filter => ({
    type: "SEARCH_TYPE",
    filter
});

export const listType = bool => ({
    type: "LIST_TYPE"
});

export const listDirection = direction => ({
    type: "LIST_DIRECTION",
    direction
});

export const searchFilters = {
    GOOGLE: "GOOGLE",
    DUCK_DUCK_GO: "DUCK_DUCK_GO",
    BING: "BING"
};

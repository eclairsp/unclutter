export const checkArrays = (actual, expected) => {
    if (actual === expected) return true;
    if (actual == null || expected == null) return false;
    if (actual.size !== expected.length) return false;

    expected.forEach(element => {
        if (!actual.has(element)) {
            return false;
        }
    });
    return true;
};

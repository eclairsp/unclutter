module.exports = {
    prefix: "",
    important: false,
    separator: ":",
    theme: {
        screens: {},
        colors: {
            transparent: "transparent",

            black: "#000",
            white: "#fff",

            gray: {
                800: "#2d3748",
                900: "#1a202c"
            },
            teal: {
                500: "#38b2ac",
                800: "#285E61"
            },
            red: {
                500: "#F56565"
            }
        },
        spacing: {
            px: "1px",
            "0": "0",
            "1": "0.25rem",
            "2": "0.5rem",
            "3": "0.75rem",
            "4": "1rem",
            "5": "1.25rem",
            "6": "1.5rem",
            "8": "2rem",
            "10": "2.5rem",
            "12": "3rem",
            "16": "4rem",
            "20": "5rem",
            "24": "6rem",
            "32": "8rem",
            "40": "10rem",
            "64": "16rem"
        },
        backgroundColor: theme => theme("colors"),
        borderColor: theme => ({
            ...theme("colors"),
            default: theme("colors.gray.300", "currentColor")
        }),
        borderRadius: {
            full: "9999px"
        },
        borderWidth: {
            default: "1px",
            "0": "0",
            "2": "2px"
        },
        cursor: {
            pointer: "pointer"
        },
        fill: {
            current: "currentColor"
        },
        flex: {
            "1": "1 1 0%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            none: "none"
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem"
        },
        fontWeight: {
            thin: "200",
            light: "300",
            semibold: "600"
        },
        margin: (theme, {negative}) => ({
            auto: "auto",
            ...theme("spacing"),
            ...negative(theme("spacing"))
        }),
        minWidth: {
            "0": "0",
            full: "100%"
        },
        objectPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top"
        },
        padding: theme => theme("spacing"),
        placeholderColor: theme => theme("colors"),
        stroke: {
            current: "currentColor"
        },
        strokeWidth: {
            "0": "0",
            "1": "1",
            "2": "2"
        },
        textColor: theme => theme("colors"),
        width: theme => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw"
        }),
        gap: theme => theme("spacing")
    },
    variants: {
        accessibility: ["responsive", "focus"],
        alignContent: ["responsive"],
        alignItems: ["responsive"],
        alignSelf: ["responsive"],
        backgroundAttachment: ["responsive"],
        backgroundColor: ["responsive", "hover", "focus"],
        backgroundPosition: ["responsive"],
        backgroundRepeat: ["responsive"],
        backgroundSize: ["responsive"],
        borderCollapse: ["responsive"],
        borderColor: ["responsive", "hover", "focus"],
        borderRadius: ["responsive"],
        borderStyle: ["responsive"],
        borderWidth: ["responsive"],
        boxShadow: ["responsive", "hover", "focus"],
        boxSizing: ["responsive"],
        cursor: ["responsive"],
        display: ["responsive"],
        fill: ["responsive"],
        flex: ["responsive"],
        flexDirection: ["responsive"],
        flexGrow: ["responsive"],
        flexShrink: ["responsive"],
        flexWrap: ["responsive"],
        float: ["responsive"],
        clear: ["responsive"],
        fontFamily: ["responsive"],
        fontSize: ["responsive"],
        fontSmoothing: ["responsive"],
        fontStyle: ["responsive"],
        fontWeight: ["responsive", "hover", "focus"],
        height: ["responsive"],
        inset: ["responsive"],
        justifyContent: ["responsive"],
        letterSpacing: ["responsive"],
        lineHeight: ["responsive"],
        listStylePosition: ["responsive"],
        listStyleType: ["responsive"],
        margin: ["responsive"],
        maxHeight: ["responsive"],
        maxWidth: ["responsive"],
        minHeight: ["responsive"],
        minWidth: ["responsive"],
        objectFit: ["responsive"],
        objectPosition: ["responsive"],
        opacity: ["responsive", "hover", "focus"],
        order: ["responsive"],
        outline: ["responsive", "focus"],
        overflow: ["responsive"],
        padding: ["responsive"],
        placeholderColor: ["responsive", "focus"],
        pointerEvents: ["responsive"],
        position: ["responsive"],
        resize: ["responsive"],
        stroke: ["responsive"],
        strokeWidth: ["responsive"],
        tableLayout: ["responsive"],
        textAlign: ["responsive"],
        textColor: ["responsive", "hover", "focus"],
        textDecoration: ["responsive", "hover", "focus"],
        textTransform: ["responsive"],
        userSelect: ["responsive"],
        verticalAlign: ["responsive"],
        visibility: ["responsive"],
        whitespace: ["responsive"],
        width: ["responsive"],
        wordBreak: ["responsive"],
        zIndex: ["responsive"],
        gap: ["responsive"],
        gridAutoFlow: ["responsive"],
        gridTemplateColumns: ["responsive"],
        gridColumn: ["responsive"],
        gridColumnStart: ["responsive"],
        gridColumnEnd: ["responsive"],
        gridTemplateRows: ["responsive"],
        gridRow: ["responsive"],
        gridRowStart: ["responsive"],
        gridRowEnd: ["responsive"],
        transform: ["responsive"],
        transformOrigin: ["responsive"],
        scale: ["responsive", "hover", "focus"],
        rotate: ["responsive", "hover", "focus"],
        translate: ["responsive", "hover", "focus"],
        skew: ["responsive", "hover", "focus"],
        transitionProperty: ["responsive"],
        transitionTimingFunction: ["responsive"],
        transitionDuration: ["responsive"]
    },
    corePlugins: {},
    plugins: []
};

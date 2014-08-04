function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.searchForBooks/" + s : s.substring(0, index) + "/com.appcelerator.searchForBooks/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0004,
    key: "divider",
    style: {
        height: "48dp",
        width: "3dp",
        top: "1dp",
        right: "50dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#666",
                offset: 0
            }, {
                color: "#ccc",
                offset: .5
            }, {
                color: "#666",
                offset: 1
            } ]
        }
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "bar",
    style: {
        top: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
                offset: 1
            } ]
        }
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "text",
    style: {
        top: "6dp",
        bottom: "6dp",
        left: "7dp",
        right: "60dp",
        color: "#111",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "search for books"
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "searchView",
    style: {
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp"
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "search",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/com.appcelerator.searchForBooks/ic_search.png",
        touchEnabled: false
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "loading",
    style: {
        opacity: 0,
        right: "8dp",
        top: "8dp",
        height: "34dp",
        width: "34dp",
        touchEnabled: false
    }
} ];
function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "checkbox/" + s : s.substring(0, index) + "/checkbox/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0002,
    key: "checkbox",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "chk",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        textAlign: "center",
        width: "32dp",
        height: "32dp",
        borderWidth: 1,
        borderColor: "black",
        left: 1,
        top: 0
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "lbl",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10
    }
} ];
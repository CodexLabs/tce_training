function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "transparent",
        backgroundImage: "images/background.png",
        windowSoftInputMode: Ti.UI.SOFT_INPUT_ADJUST_PAN,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        font: {
            fontWeight: "bold",
            fontSize: 20
        },
        top: 5,
        text: "Enter some text and share",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.message = Ti.UI.createTextArea({
        hintText: "Enter a message to share",
        width: "90%",
        height: 120,
        top: 35,
        backgroundColor: "white",
        color: "black",
        id: "message"
    });
    $.__views.index.add($.__views.message);
    $.__views.share = Ti.UI.createButton({
        top: 175,
        width: 140,
        height: 40,
        title: "Share It!",
        id: "share"
    });
    $.__views.index.add($.__views.share);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.share.addEventListener("click", function() {
        Ti.UI.Android.hideSoftKeyboard();
        var intent = Ti.Android.createIntent({
            action: Ti.Android.ACTION_SEND,
            type: "text/plain"
        });
        intent.putExtra(Ti.Android.EXTRA_SUBJECT, "Isn't This Cool!");
        intent.putExtra(Ti.Android.EXTRA_TEXT, $.message.value);
        try {
            Ti.Android.currentActivity.startActivity(intent);
        } catch (ex) {
            Ti.UI.createNotification({
                message: "No sharing apps installed!"
            }).show();
        }
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
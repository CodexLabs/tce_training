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
    this.__controllerPath = "textfields";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.win1 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Keyboard Types",
        id: "win1"
    });
    $.__views.scrolly = Ti.UI.createScrollView({
        layout: "vertical",
        id: "scrolly"
    });
    $.__views.win1.add($.__views.scrolly);
    $.__views.normal = Ti.UI.createTextField({
        top: 40,
        width: "85%",
        height: "40dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
        autocorrect: true,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_WORDS,
        hintText: "default",
        id: "normal"
    });
    $.__views.scrolly.add($.__views.normal);
    $.__views.numeric = Ti.UI.createTextField({
        top: 40,
        width: "85%",
        height: "40dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        hintText: "numbers_punctuation",
        id: "numeric"
    });
    $.__views.scrolly.add($.__views.numeric);
    $.__views.web = Ti.UI.createTextField({
        top: 40,
        width: "85%",
        height: "40dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_URL,
        returnKeyType: Ti.UI.RETURNKEY_GO,
        hintText: "url",
        id: "web"
    });
    $.__views.scrolly.add($.__views.web);
    $.__views.email = Ti.UI.createTextField({
        top: 40,
        width: "85%",
        height: "40dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_EMAIL,
        returnKeyType: Ti.UI.RETURNKEY_SEND,
        hintText: "email",
        id: "email"
    });
    $.__views.scrolly.add($.__views.email);
    $.__views.password = Ti.UI.createTextField({
        top: 40,
        width: "85%",
        height: "40dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        keyboardType: Ti.UI.KEYBOARD_DEFAULT,
        hintText: "password",
        passwordMask: true,
        autocorrect: false,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "password"
    });
    $.__views.scrolly.add($.__views.password);
    $.__views.textfields = Ti.UI.createTab({
        icon: "KS_nav_ui.png",
        window: $.__views.win1,
        title: "Keyboards",
        id: "textfields"
    });
    $.__views.textfields && $.addTopLevelView($.__views.textfields);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.win1.addEventListener("click", function() {
        $.normal.blur();
        $.numeric.blur();
        $.web.blur();
        $.email.blur();
        $.password.blur();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
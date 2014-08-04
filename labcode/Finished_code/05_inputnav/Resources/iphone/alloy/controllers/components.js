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
    this.__controllerPath = "components";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.win2 = Ti.UI.createWindow({
        layout: "vertical",
        backgroundColor: "white",
        title: "Tab 2",
        id: "win2"
    });
    $.__views.aSwitch = Ti.UI.createSwitch({
        top: 20,
        value: false,
        id: "aSwitch"
    });
    $.__views.win2.add($.__views.aSwitch);
    $.__views.aSlider = Ti.UI.createSlider({
        top: 40,
        min: 0,
        max: 10,
        value: 3,
        width: "90%",
        id: "aSlider"
    });
    $.__views.win2.add($.__views.aSlider);
    $.__views.aPicker = Ti.UI.createPicker({
        top: 20,
        id: "aPicker",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.win2.add($.__views.aPicker);
    var __alloyId0 = [];
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    __alloyId0.push($.__views.column1);
    $.__views.__alloyId1 = Ti.UI.createPickerRow({
        title: "Bananas",
        id: "__alloyId1"
    });
    $.__views.column1.addRow($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createPickerRow({
        title: "Strawberries",
        id: "__alloyId2"
    });
    $.__views.column1.addRow($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createPickerRow({
        title: "Mangos",
        id: "__alloyId3"
    });
    $.__views.column1.addRow($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "Grapes",
        id: "__alloyId4"
    });
    $.__views.column1.addRow($.__views.__alloyId4);
    $.__views.column2 = Ti.UI.createPickerColumn({
        id: "column2"
    });
    __alloyId0.push($.__views.column2);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "red",
        id: "__alloyId5"
    });
    $.__views.column2.addRow($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "green",
        id: "__alloyId6"
    });
    $.__views.column2.addRow($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createPickerRow({
        title: "blue",
        id: "__alloyId7"
    });
    $.__views.column2.addRow($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createPickerRow({
        title: "orange",
        id: "__alloyId8"
    });
    $.__views.column2.addRow($.__views.__alloyId8);
    $.__views.aPicker.add(__alloyId0);
    $.__views.components = Ti.UI.createTab({
        icon: "KS_nav_views.png",
        window: $.__views.win2,
        title: "Components",
        id: "components"
    });
    $.__views.components && $.addTopLevelView($.__views.components);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.aSwitch.addEventListener("change", function(e) {
        Ti.API.info("Switch is " + (e.value ? "on" : "off"));
    });
    $.aSlider.addEventListener("change", function(e) {
        Ti.API.info("Slider value is " + e.value);
    });
    $.aPicker.addEventListener("change", function(e) {
        Ti.API.info("Picker value is " + e.selectedValue);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
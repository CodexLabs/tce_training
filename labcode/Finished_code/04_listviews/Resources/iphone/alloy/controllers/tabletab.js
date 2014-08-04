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
    this.__controllerPath = "tabletab";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.__alloyId23 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "TableView",
        id: "__alloyId23"
    });
    $.__views.table = Ti.UI.createTableView({
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        id: "table"
    });
    $.__views.__alloyId23.add($.__views.table);
    $.__views.tabletab = Ti.UI.createTab({
        icon: "KS_nav_ui.png",
        window: $.__views.__alloyId23,
        title: "TableView",
        id: "tabletab"
    });
    $.__views.tabletab && $.addTopLevelView($.__views.tabletab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    for (var i = 0; 500 > i; i++) {
        var row = Alloy.createController("tablerow", {
            heading: "Row " + i,
            subheading: "This is a subtitle",
            i: i
        });
        data.push(row.getView());
    }
    $.table.data = data;
    $.table.addEventListener("click", function(e) {
        Ti.API.info("Row " + e.row.i + " was clicked");
        if (e.source == e.row.children[0]) {
            Ti.API.info("you clicked the image");
            e.source.image = "/dark_star.png";
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
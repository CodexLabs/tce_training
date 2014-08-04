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
    this.__controllerPath = "listtab";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "ListView",
        id: "__alloyId8"
    });
    var __alloyId9 = {};
    var __alloyId11 = [];
    var __alloyId12 = {
        type: "Ti.UI.ImageView",
        bindId: "leftimage",
        properties: {
            left: 6,
            top: 6,
            width: 48,
            height: 48,
            bindId: "leftimage"
        }
    };
    __alloyId11.push(__alloyId12);
    var __alloyId13 = {
        type: "Ti.UI.Label",
        bindId: "heading",
        properties: {
            left: 60,
            color: "black",
            top: 5,
            font: {
                fontWeight: "bold"
            },
            bindId: "heading"
        }
    };
    __alloyId11.push(__alloyId13);
    var __alloyId14 = {
        type: "Ti.UI.Label",
        bindId: "subheading",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bindId: "subheading"
        }
    };
    __alloyId11.push(__alloyId14);
    var __alloyId10 = {
        properties: {
            height: "60",
            name: "odd",
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK
        },
        childTemplates: __alloyId11
    };
    __alloyId9["odd"] = __alloyId10;
    var __alloyId17 = [];
    var __alloyId18 = {
        type: "Ti.UI.ImageView",
        bindId: "leftimage",
        properties: {
            left: 6,
            top: 6,
            width: 48,
            height: 48,
            bindId: "leftimage"
        }
    };
    __alloyId17.push(__alloyId18);
    var __alloyId19 = {
        type: "Ti.UI.Label",
        bindId: "heading",
        properties: {
            left: 60,
            color: "black",
            top: 5,
            font: {
                fontWeight: "bold"
            },
            bindId: "heading"
        }
    };
    __alloyId17.push(__alloyId19);
    var __alloyId20 = {
        type: "Ti.UI.Label",
        bindId: "subheading",
        properties: {
            left: 60,
            color: "black",
            top: 25,
            bindId: "subheading"
        }
    };
    __alloyId17.push(__alloyId20);
    var __alloyId16 = {
        properties: {
            name: "even",
            height: "60"
        },
        childTemplates: __alloyId17
    };
    __alloyId9["even"] = __alloyId16;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId22 = [];
    __alloyId22.push($.__views.section);
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId22,
        templates: __alloyId9,
        id: "list",
        defaultItemTemplate: "odd"
    });
    $.__views.__alloyId8.add($.__views.list);
    $.__views.listtab = Ti.UI.createTab({
        icon: "KS_nav_views.png",
        window: $.__views.__alloyId8,
        title: "ListView",
        id: "listtab"
    });
    $.__views.listtab && $.addTopLevelView($.__views.listtab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [];
    for (var i = 0; 500 > i; i++) {
        var item = {
            heading: {
                text: "Item " + i
            },
            subheading: {
                text: "This is a subtitle"
            },
            leftimage: {
                image: i % 2 ? "/dark_heart.png" : "/dark_skull.png"
            },
            template: i % 2 ? "odd" : "even"
        };
        data.push(item);
    }
    $.section.setItems(data);
    $.list.addEventListener("itemclick", function(e) {
        Ti.API.info("Item " + e.itemIndex + " was clicked");
        var item = e.section.getItemAt(e.itemIndex);
        if ("leftimage" == e.bindId) {
            Ti.API.info("you clicked the image");
            item.leftimage.image = "/dark_star.png";
            e.section.updateItemAt(e.itemIndex, item);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
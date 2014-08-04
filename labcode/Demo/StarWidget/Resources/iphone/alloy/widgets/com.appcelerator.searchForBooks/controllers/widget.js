function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.searchForBooks/" + s : s.substring(0, index) + "/com.appcelerator.searchForBooks/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function processBookData(data) {
        var books = [];
        var items;
        try {
            items = JSON.parse(data).items;
        } catch (e) {
            alert("Invalid response from server. Try again.");
            return;
        }
        for (var i = 0; Math.min(items.length, MAX_BOOKS) > i; i++) {
            var info = items[i].volumeInfo;
            if (!info) continue;
            var links = info.imageLinks || {};
            var authors = (info.authors || []).join(", ");
            books.push({
                title: info.title || "",
                authors: authors,
                image: links.smallThumbnail || links.thumbnail || "none"
            });
        }
        handlers.success(books);
    }
    function searchForBooks() {
        $.text.blur();
        var value = encodeURIComponent($.text.value);
        if (!value) {
            alert("You need to enter search text");
            return;
        }
        model.set("loading", true);
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                handlers.success && processBookData(this.responseText);
                model.set("loading", false);
            },
            onerror: function(e) {
                if (handlers.error) handlers.error(e); else {
                    alert("There was an error processing your search. Make sure you have a network connection and try again.");
                    Ti.API.error("[ERROR] " + (e.error || JSON.stringify(e)));
                }
                model.set("loading", false);
            },
            timeout: 5e3
        });
        xhr.open("GET", API_URL + value);
        xhr.send();
    }
    new (require("alloy/widget"))("com.appcelerator.searchForBooks");
    this.__widgetId = "com.appcelerator.searchForBooks";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.bar = Ti.UI.createView({
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
        },
        id: "bar"
    });
    $.__views.bar && $.addTopLevelView($.__views.bar);
    $.__views.text = Ti.UI.createTextField({
        top: "6dp",
        bottom: "6dp",
        left: "7dp",
        right: "60dp",
        color: "#111",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "search for books",
        id: "text"
    });
    $.__views.bar.add($.__views.text);
    searchForBooks ? $.__views.text.addEventListener("return", searchForBooks) : __defers["$.__views.text!return!searchForBooks"] = true;
    $.__views.__alloyId0 = Ti.UI.createView({
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
        },
        id: "__alloyId0"
    });
    $.__views.bar.add($.__views.__alloyId0);
    $.__views.searchView = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp",
        id: "searchView"
    });
    $.__views.bar.add($.__views.searchView);
    searchForBooks ? $.__views.searchView.addEventListener("click", searchForBooks) : __defers["$.__views.searchView!click!searchForBooks"] = true;
    $.__views.search = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/com.appcelerator.searchForBooks/ic_search.png",
        touchEnabled: false,
        id: "search"
    });
    $.__views.searchView.add($.__views.search);
    $.__views.loading = Alloy.createWidget("com.appcelerator.loading", "widget", {
        opacity: 0,
        right: "8dp",
        top: "8dp",
        height: "34dp",
        width: "34dp",
        touchEnabled: false,
        id: "loading",
        __parentSymbol: $.__views.searchView
    });
    $.__views.loading.setParent($.__views.searchView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    var HANDLERS = [ "success", "error" ];
    var MAX_BOOKS = 10;
    var AppModel = require("alloy/backbone").Model.extend({
        loading: false
    });
    var model = new AppModel();
    var handlers = {};
    model.on("change:loading", function(m) {
        if (m.get("loading")) {
            $.searchView.touchEnabled = false;
            $.search.opacity = 0;
            $.loading.setOpacity(1);
        } else {
            $.loading.setOpacity(0);
            $.search.opacity = 1;
            $.searchView.touchEnabled = true;
        }
    });
    exports.setHandlers = function(args) {
        _.each(HANDLERS, function(h) {
            args[h] && (handlers[h] = args[h]);
        });
    };
    __defers["$.__views.text!return!searchForBooks"] && $.__views.text.addEventListener("return", searchForBooks);
    __defers["$.__views.searchView!click!searchForBooks"] && $.__views.searchView.addEventListener("click", searchForBooks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
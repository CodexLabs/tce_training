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
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animator = Ti.UI.iOS.createAnimator({
        referenceView: $.win
    });
    var collision = Ti.UI.iOS.createCollisionBehavior();
    var gravity = Ti.UI.iOS.createGravityBehavior({
        gravityDirection: {
            x: 1,
            y: 1
        }
    });
    var blocks = [];
    for (var i = 0; 20 > i; i++) {
        blocks[i] = Alloy.createController("box").getView();
        $.win.add(blocks[i]);
        collision.addItem(blocks[i]);
        gravity.addItem(blocks[i]);
    }
    animator.addBehavior(collision);
    animator.addBehavior(gravity);
    $.win.addEventListener("open", function() {
        animator.startAnimator();
    });
    $.win.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
// Create an Animator object using the window as the coordinate system
var animator = Ti.UI.iOS.createAnimator({referenceView: $.win});

// Create a default collision behavior, using the window edges as boundaries
var collision = Ti.UI.iOS.createCollisionBehavior();

// Simulate Earth's gravity
var gravity = Ti.UI.iOS.createGravityBehavior({
    gravityDirection: {x: 1.0, y: 1.0}
});

// Create a bunch of random blocks; add to the window and behaviors
var blocks = [];
for (var i = 0; i < 20; i++) {
    blocks[i] = Alloy.createController('box').getView();
    $.win.add(blocks[i]);
    collision.addItem(blocks[i]);
    gravity.addItem(blocks[i]);
}
animator.addBehavior(collision);
animator.addBehavior(gravity);
           
// Start the animation when the window opens
$.win.addEventListener('open', function(e){
    animator.startAnimator();
});

$.win.open();

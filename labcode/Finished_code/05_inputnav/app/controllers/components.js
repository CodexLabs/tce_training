var args = arguments[0] || {};

$.aSwitch.addEventListener('change', function(e) {
    Ti.API.info('Switch is ' + ((e.value) ? 'on' : 'off'));
});

$.aSlider.addEventListener('change', function(e) {
    // if using Ti SDK 3.1+, the better event to listen for is 'stop'
    Ti.API.info('Slider value is ' + e.value);
});

$.aPicker.addEventListener('change', function(e) {
    Ti.API.info('Picker value is ' + e.selectedValue);
});
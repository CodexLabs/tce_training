var args = arguments[0] || {};
alert(args);
exports.init = function (callback) {
	$.lbl.text = args.message || 'Set "message" attribute to change';
	var checkState = false;
	$.checkbox.addEventListener('click', function() {
		checkState = !checkState;
		$.chk.text = (checkState) ? '\u2713' : '';
		callback(checkState);
	});
	_.extend($.chk, args);
	_.extend($.lbl, args);
};
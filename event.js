/*!
 * jsSimple v0.0.1
 * www.jssimple.com
 *
 * Copyright (c) Tobin Titus
 * Available under the BSD and MIT licenses: www.jssimple.com/license/
 */
 
var Event = (function() {
	"use strict";
	
	function add (target, type, listener, capture) {
		capture = capture || false;
		if (target.addEventListener) {
			target.addEventListener(type, listener, capture);
		} else if (target.attachEvent) {
			target.attachEvent("on" + type, listener);
		}
		return new EventObj(target, type, listener, capture);
	}
	
	function remove(object, type, listener, capture) {
		var target;
		if (object && !type && !listener && !capture) {
			type = object.type;
			listener = object.listener;
			capture = object.capture;
		} else {
			target = object;
		}
		capture = capture || false;
		
		if (target.removeEventListener) {
			target.removeEventListener(type, listener, capture);
		} else if (target.detachEvent) {
			target.detachEvent("on" + type, listener)
		}
	}
	
	return {
		"add" : add,
		"remove" : remove
	};
}());

var EventObj = function (target, type, listener, capture) {
	return {
		"target" : target,
		"type" : type,
		"listener" : listener,
		"capture" : capture
	}
};
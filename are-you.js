'use strict';

(function() {
    var _const = {
        MAX_SAFE_INTEGER: Math.pow(2, 53) - 1
    };

    var _this = {
        isObjectLike: function(value) {
            return value && typeof value == 'object';
        },
        objToString: function(value) {
            return Object.prototype.toString(value);
        },
        isLength: function(value) {
            return typeof value == 'number' && value > -1 && value%1 === 0 && value <= _const.MAX_SAFE_INTEGER;
        }
    };

    var are = {
        you: {
            a: {
                number: function(value) {
                    return typeof value == 'number' || (_this.isObjectLike(value) && _this.objToString(value) == '[object Number]');
                },
                string: function(value) {
                    return typeof value == 'string' || (_this.isObjectLike(value) && _this.objToString(value) == '[object String]');
                }
            },
            an: {
                array: Array.isArray || function(value) {
                    return _this.isObjectLike(value) && _this.isLength(value.length) && typeof value.splice == 'function' && !value.propertyIsEnumerable('length');
                },
                object: function(value) {
                    return typeof value == 'function' || (value && typeof value == 'object');
                }
            },

            // negated
            not: {
                a: {
                    number: function(value) { return !are.you.a.number(value); },
                    string: function(value) { return !are.you.a.string(value); }
                },
                an: {
                    array: function(value) { return !are.you.an.array(value); },
                    object: function(value) { return !are.you.an.object(value); }
                }
            }
        }
    };

    window.are = are;
    window.you = { are: are.you};
})();

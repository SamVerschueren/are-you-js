'use strict';

/**
 * Type checking utility library for NodeJS or browser.
 *
 * @author Sam Verschueren      <sam.verschueren@gmail.com>
 * @since  5 Feb. 2014
 */
(function(exports) {
    // constants
    var _const = {
        MAX_SAFE_INTEGER: Math.pow(2, 53) - 1
    };

    // private
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

    // public
    var ru = {
        a: {
            /**
             * Checks if the value provided is classified as a number.
             *
             * @param  {mixed}   value The value to check for.
             * @return {boolean}       Returns `true` if the value is classified as a number, `false` otherwise.
             */
            number: function(value) {
                return typeof value == 'number' || (_this.isObjectLike(value) && _this.objToString(value) == '[object Number]') || false;
            },
            /**
             * Checks if the value provided is classified as a string.
             *
             * @param  {mixed}   value The value to check for.
             * @return {boolean}       Returns `true` if the value is classified as a string, `false` otherwise.
             */
            string: function(value) {
                return typeof value == 'string' || (_this.isObjectLike(value) && _this.objToString(value) == '[object String]') || false;
            }
        },
        an: {
            array: Array.isArray || function(value) {
                return _this.isObjectLike(value) && _this.isLength(value.length) && typeof value.splice == 'function' && !value.propertyIsEnumerable('length');
            },
            object: function(value) {
                return typeof value == 'function' || (value && typeof value == 'object') || false;
            }
        },

        // contrary
        not: {
            a: {
                number: function(value) { return !ru.a.number(value); },
                string: function(value) { return !ru.a.string(value); }
            },
            an: {
                array: function(value) { return !ru.an.array(value); },
                object: function(value) { return !ru.an.object(value); }
            }
        }
    };

    exports.are = ru;
    exports.you = ru;
})(module && module.exports ? module.exports : window);

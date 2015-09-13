(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports);
    } else {
        // Browser globals
        factory((root.commonJsStrict = {}));
    }
}(this, function (exports) {
    function bindTo(this_, args_, function_) {
        var args          = arguments,
            length        = args.length,
            typeOfLastArg = typeof args[length-1];

        if (length > 1 && length < 4) {
            if (typeOfLastArg != 'function') {
                throw new Error('bindTo - function parameter must be a function, got: "' + typeOfLastArg + '"');
            }

            if (length < 3) {
                return function_.bind(this_);
            } else {
                return function_.bind(this_, args_);
            }

        } else {
            throw new Error('bindTo - 2 or 3 parameters expected, got: ' + length);
        }
    }

    exports = bindTo;
}));
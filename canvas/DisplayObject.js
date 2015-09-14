var cengine;
(function (cengine) {
    var DisplayObject = (function () {
        function DisplayObject() {
            this.$width = 0;
            this.$height = 0;
            this._matrix = new cengine.Matrix();
        }
        Object.defineProperty(DisplayObject.prototype, "matrix", {
            get: function () {
                return this._matrix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "x", {
            get: function () {
                return this._matrix.tx;
            },
            set: function (val) {
                this._matrix.tx = +val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "y", {
            get: function () {
                return this._matrix.ty;
            },
            set: function (val) {
                this._matrix.ty = +val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "width", {
            get: function () {
                return this.$width;
            },
            set: function (val) {
                this.$width = +val | 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "height", {
            get: function () {
                return this.$height;
            },
            set: function (val) {
                this.$height = +val | 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "scaleX", {
            set: function (val) {
                this._matrix.a = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DisplayObject.prototype, "scaleY", {
            set: function (val) {
                this._matrix.d = val;
            },
            enumerable: true,
            configurable: true
        });
        DisplayObject.prototype.render = function (context2d) {
        };
        return DisplayObject;
    })();
    cengine.DisplayObject = DisplayObject;
})(cengine || (cengine = {}));
//# sourceMappingURL=DisplayObject.js.map
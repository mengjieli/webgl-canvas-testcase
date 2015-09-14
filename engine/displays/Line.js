var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var engine;
(function (engine) {
    var Line = (function (_super) {
        __extends(Line, _super);
        function Line(startX, startY, endX, endY) {
            _super.call(this);
            this._color = 0x00000000;
            this._startX = startX;
            this._startY = startY;
            this._endX = endX;
            this._endY = endY;
            this._program = Line.program;
        }
        Object.defineProperty(Line.prototype, "startX", {
            get: function () {
                return this._startX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "startY", {
            get: function () {
                return this._startY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "endX", {
            get: function () {
                return this._endX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "endY", {
            get: function () {
                return this._endY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (val) {
                this._color = +val | 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "alpha", {
            get: function () {
                return this._color >>> 24;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Line.prototype, "program", {
            get: function () {
                return this._program;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Line, "program", {
            get: function () {
                if (!Line._program) {
                    Line._program = new engine.LineProgram(engine.Engine.getInstance().context3D, engine.Engine.getInstance().width, engine.Engine.getInstance().height);
                }
                return Line._program;
            },
            enumerable: true,
            configurable: true
        });
        return Line;
    })(engine.DisplayObject);
    engine.Line = Line;
})(engine || (engine = {}));
//# sourceMappingURL=Line.js.map
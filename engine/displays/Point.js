var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var engine;
(function (engine) {
    var Point = (function (_super) {
        __extends(Point, _super);
        function Point() {
            _super.call(this);
            this._color = 0x00000000;
            this._program = Point.program;
        }
        Object.defineProperty(Point.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (val) {
                this._color = +val | 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Point.prototype, "alpha", {
            get: function () {
                return this._color >>> 24;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Point.prototype, "program", {
            get: function () {
                return this._program;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Point, "program", {
            get: function () {
                if (!Point._program) {
                    Point._program = new engine.PointProgram(engine.Engine.getInstance().context3D, engine.Engine.getInstance().width, engine.Engine.getInstance().height);
                }
                return Point._program;
            },
            enumerable: true,
            configurable: true
        });
        return Point;
    })(engine.DisplayObject);
    engine.Point = Point;
})(engine || (engine = {}));
//# sourceMappingURL=Point.js.map
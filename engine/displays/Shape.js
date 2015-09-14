var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var engine;
(function (engine) {
    var Shape = (function (_super) {
        __extends(Shape, _super);
        function Shape() {
            _super.call(this);
            this._color = 0x00000000;
            this._program = Shape.program;
        }
        Object.defineProperty(Shape.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (val) {
                this._color = +val | 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Shape.prototype, "program", {
            get: function () {
                return this._program;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Shape, "program", {
            get: function () {
                if (!Shape._program) {
                    Shape._program = new engine.ShapeProgram(engine.Engine.getInstance().context3D, engine.Engine.getInstance().width, engine.Engine.getInstance().height);
                }
                return Shape._program;
            },
            enumerable: true,
            configurable: true
        });
        return Shape;
    })(engine.DisplayObject);
    engine.Shape = Shape;
})(engine || (engine = {}));
//# sourceMappingURL=Shape.js.map
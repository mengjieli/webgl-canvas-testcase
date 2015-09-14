var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var engine;
(function (engine) {
    var Bitmap = (function (_super) {
        __extends(Bitmap, _super);
        function Bitmap() {
            _super.call(this);
            this._program = Bitmap.program;
        }
        Bitmap.prototype.setTexture = function (val, width, height) {
            this.$texture = val;
            this.$width = width;
            this.$height = height;
        };
        Object.defineProperty(Bitmap.prototype, "program", {
            get: function () {
                return this._program;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bitmap, "program", {
            get: function () {
                if (!Bitmap._program) {
                    Bitmap._program = new engine.BitmapProgram(engine.Engine.getInstance().context3D, engine.Engine.getInstance().width, engine.Engine.getInstance().height);
                }
                return Bitmap._program;
            },
            enumerable: true,
            configurable: true
        });
        return Bitmap;
    })(engine.DisplayObject);
    engine.Bitmap = Bitmap;
})(engine || (engine = {}));
//# sourceMappingURL=Bitmap.js.map
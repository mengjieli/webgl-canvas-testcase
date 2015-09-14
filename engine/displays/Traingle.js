var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var engine;
(function (engine) {
    var Traingle = (function (_super) {
        __extends(Traingle, _super);
        function Traingle(ax, ay, bx, by, cx, cy) {
            _super.call(this);
            this._color = 0x00000000;
            this._ax = ax;
            this._ay = ay;
            this._bx = bx;
            this._by = by;
            this._cx = cx;
            this._cy = cy;
            this._program = Traingle.program;
        }
        Object.defineProperty(Traingle.prototype, "ax", {
            get: function () {
                return this._ax;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Traingle.prototype, "ay", {
            get: function () {
                return this._ay;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Traingle.prototype, "bx", {
            get: function () {
                return this._bx;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Traingle.prototype, "by", {
            get: function () {
                return this._by;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Traingle.prototype, "cx", {
            get: function () {
                return this._cx;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Traingle.prototype, "cy", {
            get: function () {
                return this._cy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Traingle.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (val) {
                this._color = +val | 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Traingle.prototype, "alpha", {
            get: function () {
                return this._color >>> 24;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Traingle.prototype, "program", {
            get: function () {
                return this._program;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Traingle, "program", {
            get: function () {
                if (!Traingle._program) {
                    Traingle._program = new engine.TraingleProgram(engine.Engine.getInstance().context3D, engine.Engine.getInstance().width, engine.Engine.getInstance().height);
                }
                return Traingle._program;
            },
            enumerable: true,
            configurable: true
        });
        return Traingle;
    })(engine.DisplayObject);
    engine.Traingle = Traingle;
})(engine || (engine = {}));
//# sourceMappingURL=Traingle.js.map
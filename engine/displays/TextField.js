var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var engine;
(function (engine) {
    var TextFieldTexture = (function () {
        function TextFieldTexture() {
            this._canvas = document.createElement("canvas");
            //this._canvas.width = (<HTMLCanvasElement>document.getElementById("engine")).clientWidth;
            //this._canvas.height = (<HTMLCanvasElement>document.getElementById("engine")).clientHeight;
            this._canvas.width = 150;
            this._canvas.height = 50;
            this._context2d = this._canvas.getContext("2d");
        }
        TextFieldTexture.prototype.getTexture = function (text, fontString) {
            var context = this._context2d;
            context.clearRect(0, 0, this._canvas.width, this._canvas.height);
            context.textAlign = "left";
            context.textBaseline = "top";
            context.font = fontString;
            context.fillStyle = "#ff0000";
            context.fillText(text, 0, 0);
            return engine.Engine.getInstance().createTexture(this._canvas);
        };
        TextFieldTexture.prototype.getFontString = function (style, size) {
            var font = "";
            if (style.italic)
                font += "italic ";
            if (style.bold)
                font += "bold ";
            font += (size || style.fontSize || 12) + "px ";
            font += (style.fontFamily || "sans-serif");
            return font;
        };
        return TextFieldTexture;
    })();
    var $textFileTexture = new TextFieldTexture();
    var TextField = (function (_super) {
        __extends(TextField, _super);
        function TextField() {
            _super.call(this);
            this.invalidText = true;
            this._text = "";
            this._fontFamily = "sans-serif";
            this._fontSize = 12;
            this._bold = false;
            this._italic = false;
            this._displayAsPassword = false;
            this.$width = 150;
            this.$height = 25;
        }
        Object.defineProperty(TextField.prototype, "text", {
            set: function (val) {
                this._text = val;
                this.invalidText = false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "fontFamily", {
            get: function () {
                return this._fontFamily;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "fontSize", {
            get: function () {
                return this._fontSize;
            },
            set: function (val) {
                this._fontSize = val;
                this.invalidText = false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "bold", {
            get: function () {
                return this._bold;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "italic", {
            get: function () {
                return this._italic;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "texture", {
            get: function () {
                if (!this.invalidText) {
                    this.$texture = $textFileTexture.getTexture(this._text, $textFileTexture.getFontString(this));
                    this.invalidText = true;
                }
                return this.$texture;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextField.prototype, "program", {
            get: function () {
                return engine.Bitmap.program;
            },
            enumerable: true,
            configurable: true
        });
        return TextField;
    })(engine.DisplayObject);
    engine.TextField = TextField;
})(engine || (engine = {}));
//# sourceMappingURL=TextField.js.map
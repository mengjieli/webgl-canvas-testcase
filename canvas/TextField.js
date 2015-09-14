var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var cengine;
(function (cengine) {
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
        TextField.prototype.render = function (context2d) {
            context2d.textAlign = "left";
            context2d.textBaseline = "top";
            context2d.font = this.getFontString(this);
            context2d.fillStyle = "#ff0000";
            context2d.fillText(this._text, this.matrix.tx, this.matrix.ty);
        };
        TextField.prototype.getFontString = function (style, size) {
            var font = "";
            if (style.italic)
                font += "italic ";
            if (style.bold)
                font += "bold ";
            font += (size || style.fontSize || 12) + "px ";
            font += (style.fontFamily || "sans-serif");
            return font;
        };
        return TextField;
    })(cengine.DisplayObject);
    cengine.TextField = TextField;
})(cengine || (cengine = {}));
//# sourceMappingURL=TextField.js.map
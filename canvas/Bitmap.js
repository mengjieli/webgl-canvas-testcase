var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var cengine;
(function (cengine) {
    var Bitmap = (function (_super) {
        __extends(Bitmap, _super);
        function Bitmap() {
            _super.call(this);
        }
        Bitmap.prototype.setImage = function (image) {
            this.image = image;
        };
        Bitmap.prototype.render = function (context2d) {
            context2d.save();
            context2d.translate(this.matrix.tx, this.matrix.ty);
            context2d.scale(this.matrix.a, this.matrix.d);
            context2d.drawImage(this.image, 0, 0);
            context2d.restore();
        };
        return Bitmap;
    })(cengine.DisplayObject);
    cengine.Bitmap = Bitmap;
})(cengine || (cengine = {}));
//# sourceMappingURL=Bitmap.js.map
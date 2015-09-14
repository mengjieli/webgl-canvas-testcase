var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var cengine;
(function (cengine) {
    var FPSCount = (function (_super) {
        __extends(FPSCount, _super);
        function FPSCount() {
            _super.call(this);
            this.renderCount = 0;
            this.fps = 0;
            this.fontSize = 20;
            this.$height = 50;
        }
        FPSCount.prototype.resetText = function () {
            this.text = "fps : " + this.fps + "\n" +
                "r : " + this.renderCount;
        };
        FPSCount.prototype.setRenderInfo = function (count) {
            this.renderCount = count;
            this.resetText();
        };
        FPSCount.prototype.setFps = function (fps) {
            this.fps = fps;
            this.resetText();
        };
        FPSCount.getInstance = function () {
            if (!FPSCount.instance) {
                FPSCount.instance = new FPSCount();
            }
            return FPSCount.instance;
        };
        FPSCount.useTime = function (time) {
            FPSCount.timeUsed += time;
        };
        FPSCount.addCount = function () {
            FPSCount.count++;
            var t = (new Date()).getTime();
            if (t - FPSCount.lastTime > 1000) {
                var fps = FPSCount.count * 1000 / (t - FPSCount.lastTime);
                FPSCount.count = 0;
                FPSCount.lastTime = t;
                console.log("fps:", Math.round(fps), "time:", FPSCount.timeUsed);
                FPSCount.getInstance().setFps(Math.round(fps));
                FPSCount.timeUsed = 0;
            }
        };
        FPSCount.lastTime = 0;
        FPSCount.count = 0;
        FPSCount.timeUsed = 0;
        return FPSCount;
    })(cengine.TextField);
    cengine.FPSCount = FPSCount;
})(cengine || (cengine = {}));
//# sourceMappingURL=FPSCount.js.map
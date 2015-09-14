var cengine;
(function (cengine) {
    var CEngine = (function () {
        function CEngine(width, height) {
            this.runFlag = true;
            this.children = [];
            this.frontChildren = [];
            this._width = width;
            this._height = height;
            this.canvas = document.getElementById("engine");
            this.canvas.width = width;
            this.canvas.height = height;
            CEngine.instance = this;
            this.init();
            this.startTick();
        }
        CEngine.prototype.init = function () {
            this.context2d = this.canvas.getContext("2d");
            this.$addChildFront(cengine.FPSCount.getInstance());
        };
        CEngine.prototype.startTick = function () {
            var requestAnimationFrame = window["requestAnimationFrame"] ||
                window["webkitRequestAnimationFrame"] ||
                window["mozRequestAnimationFrame"] ||
                window["oRequestAnimationFrame"] ||
                window["msRequestAnimationFrame"];
            if (!requestAnimationFrame) {
                requestAnimationFrame = function (callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
            }
            var _this = this;
            requestAnimationFrame.call(window, onTick);
            function onTick() {
                if (_this.runFlag) {
                    _this.render();
                }
                requestAnimationFrame.call(window, onTick);
            }
        };
        CEngine.prototype.render = function () {
            cengine.FPSCount.addCount();
            var start = (new Date()).getTime();
            var children;
            var child;
            this.context2d.clearRect(0, 0, this._width, this._height);
            children = this.children;
            for (var i = 0, len = children.length; i < len; i++) {
                child = children[i];
                child.render(this.context2d);
            }
            cengine.FPSCount.getInstance().setRenderInfo(this.children.length);
            children = this.frontChildren;
            for (var i = 0, len = children.length; i < len; i++) {
                child = children[i];
                child.render(this.context2d);
            }
            cengine.FPSCount.useTime((new Date()).getTime() - start);
        };
        Object.defineProperty(CEngine.prototype, "width", {
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CEngine.prototype, "height", {
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        CEngine.prototype.$addChildFront = function (child) {
            this.frontChildren.push(child);
        };
        CEngine.prototype.$removeChildFront = function (child) {
            var children = this.frontChildren;
            for (var i = 0, len = children.length; i < len; i++) {
                if (children[i] == child) {
                    children.splice(i, 1);
                    break;
                }
            }
        };
        CEngine.prototype.addChild = function (child) {
            this.children.push(child);
        };
        CEngine.prototype.removeChild = function (child) {
            var children = this.children;
            for (var i = 0, len = children.length; i < len; i++) {
                if (children[i] == child) {
                    children.splice(i, 1);
                    break;
                }
            }
        };
        CEngine.getInstance = function () {
            return CEngine.instance;
        };
        return CEngine;
    })();
    cengine.CEngine = CEngine;
})(cengine || (cengine = {}));
//# sourceMappingURL=CEngine.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var engine;
(function (engine) {
    var Test2 = (function (_super) {
        __extends(Test2, _super);
        function Test2() {
            _super.call(this);
            this.size = 64;
            this.initChangeNo = 40;
            this.init = 0;
            this.changeNumber = 5;
            this.add = 0;
            this.change = false;
            this.scale = false;
            this.move = false;
            this.bitmaps = [];
            this.x = 0;
            this.vx = 1;
            this.lastx = 0;
            this.startTick();
        }
        Test2.prototype.startTick = function () {
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
                if (_this.move) {
                    _this.update();
                }
                requestAnimationFrame.call(window, onTick);
            }
        };
        Test2.prototype.update = function () {
            if (!this.readyFlag) {
                return;
            }
            this.x += this.vx;
            var w;
            if (engine.Test.engine == "webgl") {
                w = engine.Engine.getInstance().width - this.getImage(this.size, 1).width / 2;
            }
            else {
                w = cengine.CEngine.getInstance().width - this.getImage(this.size, 1).width / 2;
            }
            if (this.x < 0) {
                this.x = 0;
                this.vx = 1;
            }
            else if (this.x > w) {
                this.x = w;
                this.vx = -1;
            }
            for (var i = 0, len = this.bitmaps.length; i < len; i++) {
                this.bitmaps[i].x -= (i % 3 ? 1 : -1) * this.lastx;
                this.bitmaps[i].x += (i % 3 ? 1 : -1) * this.x;
            }
            this.lastx = this.x;
            //bitmap.x = x;
        };
        Test2.prototype.addTestObject = function () {
            if (!this.readyFlag) {
                return;
            }
            var bitmap;
            for (var i = 0; i < this.add; i++) {
                if (engine.Test.engine == "webgl") {
                    bitmap = new engine.Bitmap();
                    bitmap.setTexture(this.getTexture(this.size, 1), this.getImage(this.size, 1).width, this.getImage(this.size, 1).height);
                    bitmap.x = (engine.Engine.getInstance().width - this.getImage(this.size, 1).width) * Math.random();
                    bitmap.y = (engine.Engine.getInstance().height - this.getImage(this.size, 1).height) * Math.random();
                    if (this.scale) {
                        bitmap.scaleX = 0.5 + Math.random();
                        bitmap.scaleY = 0.5 + Math.random();
                    }
                    engine.Engine.getInstance().addChild(bitmap);
                    this.bitmaps.push(bitmap);
                    if (this.change) {
                        bitmap = new engine.Bitmap();
                        bitmap.setTexture(this.getTexture(this.size, 2), this.getImage(this.size, 2).width, this.getImage(this.size, 2).height);
                        bitmap.x = (engine.Engine.getInstance().width - this.getImage(this.size, 2).width) * Math.random();
                        bitmap.y = (engine.Engine.getInstance().height - this.getImage(this.size, 2).height) * Math.random();
                        if (this.scale) {
                            bitmap.scaleX = 0.5 + Math.random();
                            bitmap.scaleY = 0.5 + Math.random();
                        }
                        engine.Engine.getInstance().addChild(bitmap);
                        this.bitmaps.push(bitmap);
                    }
                }
                else {
                    bitmap = new cengine.Bitmap();
                    bitmap.setImage(this.getImage(this.size, 1));
                    bitmap.x = (cengine.CEngine.getInstance().width - this.getImage(this.size, 1).width) * Math.random();
                    bitmap.y = (cengine.CEngine.getInstance().height - this.getImage(this.size, 1).height) * Math.random();
                    if (this.scale) {
                        bitmap.scaleX = 0.5 + Math.random();
                        bitmap.scaleY = 0.5 + Math.random();
                    }
                    cengine.CEngine.getInstance().addChild(bitmap);
                    this.bitmaps.push(bitmap);
                    if (this.change) {
                        bitmap = new cengine.Bitmap();
                        bitmap.setImage(this.getImage(this.size, 2));
                        bitmap.x = (cengine.CEngine.getInstance().width - this.getImage(this.size, 2).width) * Math.random();
                        bitmap.y = (cengine.CEngine.getInstance().height - this.getImage(this.size, 2).height) * Math.random();
                        if (this.scale) {
                            bitmap.scaleX = 0.5 + Math.random();
                            bitmap.scaleY = 0.5 + Math.random();
                        }
                        cengine.CEngine.getInstance().addChild(bitmap);
                        this.bitmaps.push(bitmap);
                    }
                }
            }
        };
        Test2.prototype.ready = function () {
            _super.prototype.ready.call(this);
            var bitmap;
            for (var i = 0; i < this.initChangeNo; i++) {
                for (var j = 0; j < this.changeNumber; j++) {
                    if (engine.Test.engine == "webgl") {
                        bitmap = new engine.Bitmap();
                        bitmap.setTexture(this.getTexture(this.size, 1), this.getImage(this.size, 1).width, this.getImage(this.size, 1).height);
                        bitmap.x = (engine.Engine.getInstance().width - this.getImage(this.size, 1).width) * Math.random();
                        bitmap.y = (engine.Engine.getInstance().height - this.getImage(this.size, 1).height) * Math.random();
                        if (this.scale) {
                            bitmap.scaleX = 0.5 + Math.random();
                            bitmap.scaleY = 0.5 + Math.random();
                        }
                        engine.Engine.getInstance().addChild(bitmap);
                        this.bitmaps.push(bitmap);
                    }
                    else {
                        bitmap = new cengine.Bitmap();
                        bitmap.setImage(this.getImage(this.size, 1));
                        bitmap.x = (cengine.CEngine.getInstance().width - this.getImage(this.size, 1).width) * Math.random();
                        bitmap.y = (cengine.CEngine.getInstance().height - this.getImage(this.size, 1).height) * Math.random();
                        if (this.scale) {
                            bitmap.scaleX = 0.5 + Math.random();
                            bitmap.scaleY = 0.5 + Math.random();
                        }
                        cengine.CEngine.getInstance().addChild(bitmap);
                        this.bitmaps.push(bitmap);
                    }
                }
                for (var j = 0; j < this.changeNumber; j++) {
                    if (engine.Test.engine == "webgl") {
                        bitmap = new engine.Bitmap();
                        bitmap.setTexture(this.getTexture(this.size, 2), this.getImage(this.size, 2).width, this.getImage(this.size, 2).height);
                        bitmap.x = (engine.Engine.getInstance().width - this.getImage(this.size, 2).width) * Math.random();
                        bitmap.y = (engine.Engine.getInstance().height - this.getImage(this.size, 2).height) * Math.random();
                        if (this.scale) {
                            bitmap.scaleX = 0.5 + Math.random();
                            bitmap.scaleY = 0.5 + Math.random();
                        }
                        engine.Engine.getInstance().addChild(bitmap);
                        this.bitmaps.push(bitmap);
                    }
                    else {
                        bitmap = new cengine.Bitmap();
                        bitmap.setImage(this.getImage(this.size, 2));
                        bitmap.x = (cengine.CEngine.getInstance().width - this.getImage(this.size, 2).width) * Math.random();
                        bitmap.y = (cengine.CEngine.getInstance().height - this.getImage(this.size, 2).height) * Math.random();
                        if (this.scale) {
                            bitmap.scaleX = 0.5 + Math.random();
                            bitmap.scaleY = 0.5 + Math.random();
                        }
                        cengine.CEngine.getInstance().addChild(bitmap);
                        this.bitmaps.push(bitmap);
                    }
                }
            }
            //for (var i = 0; i < this.init; i++) {
            //    if (Test.engine == "webgl") {
            //        bitmap = new Bitmap();
            //        bitmap.setTexture(this.getTexture(this.size, 1), this.getImage(this.size, 1).width, this.getImage(this.size, 1).height);
            //        bitmap.x = (Engine.getInstance().width - this.getImage(this.size, 1).width) * Math.random();
            //        bitmap.y = (Engine.getInstance().height - this.getImage(this.size, 1).height) * Math.random();
            //        if(this.scale) {
            //            bitmap.scaleX = 0.5 + Math.random();
            //            bitmap.scaleY = 0.5 + Math.random();
            //        }
            //        Engine.getInstance().addChild(bitmap);
            //        this.bitmaps.push(bitmap);
            //
            //        if (this.change) {
            //            bitmap = new Bitmap();
            //            bitmap.setTexture(this.getTexture(this.size, 2), this.getImage(this.size, 2).width, this.getImage(this.size, 2).height);
            //            bitmap.x = (Engine.getInstance().width - this.getImage(this.size, 2).width) * Math.random();
            //            bitmap.y = (Engine.getInstance().height - this.getImage(this.size, 2).height) * Math.random();
            //            if(this.scale) {
            //                bitmap.scaleX = 0.5 + Math.random();
            //                bitmap.scaleY = 0.5 + Math.random();
            //            }
            //            Engine.getInstance().addChild(bitmap);
            //            this.bitmaps.push(bitmap);
            //        }
            //    } else {
            //        bitmap = new cengine.Bitmap();
            //        bitmap.setImage(this.getImage(this.size, 1));
            //        bitmap.x = (cengine.CEngine.getInstance().width - this.getImage(this.size, 1).width) * Math.random();
            //        bitmap.y = (cengine.CEngine.getInstance().height - this.getImage(this.size, 1).height) * Math.random();
            //        if(this.scale) {
            //            bitmap.scaleX = 0.5 + Math.random();
            //            bitmap.scaleY = 0.5 + Math.random();
            //        }
            //        cengine.CEngine.getInstance().addChild(bitmap);
            //        this.bitmaps.push(bitmap);
            //
            //        if (this.change) {
            //            bitmap = new cengine.Bitmap();
            //            bitmap.setImage(this.getImage(this.size, 2));
            //            bitmap.x = (cengine.CEngine.getInstance().width - this.getImage(this.size, 2).width) * Math.random();
            //            bitmap.y = (cengine.CEngine.getInstance().height - this.getImage(this.size, 2).height) * Math.random();
            //            if(this.scale) {
            //                bitmap.scaleX = 0.5 + Math.random();
            //                bitmap.scaleY = 0.5 + Math.random();
            //            }
            //            cengine.CEngine.getInstance().addChild(bitmap);
            //            this.bitmaps.push(bitmap);
            //        }
            //    }
            //}
        };
        return Test2;
    })(engine.Test);
    engine.Test2 = Test2;
})(engine || (engine = {}));
//# sourceMappingURL=Test2.js.map
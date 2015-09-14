var engine;
(function (engine) {
    var Engine = (function () {
        function Engine(width, height) {
            this.runFlag = true;
            this.children = [];
            this.frontChildren = [];
            this._width = width;
            this._height = height;
            this.canvas = document.getElementById("engine");
            this.canvas.width = width;
            this.canvas.height = height;
            Engine.instance = this;
            this.init();
            this.startTick();
        }
        Engine.prototype.init = function () {
            var names = ["experimental-webgl", "webgl"];
            var options = {};
            var gl;
            for (var i = 0; i < names.length; i++) {
                try {
                    gl = this.canvas.getContext(names[i], options);
                }
                catch (e) {
                }
                if (gl) {
                    break;
                }
            }
            if (!gl) {
                console.log("Error : 当前环境不支持 WebGL");
                alert("Error : 当前环境不支持 WebGL 111");
            }
            this.gl = gl;
            gl.viewport(0, 0, this._width, this._height);
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.enable(gl.BLEND);
            //gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            //gl.enable(gl.CULL_FACE);
            gl.activeTexture(gl.TEXTURE0);
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            this.frameBuffer = gl.createFramebuffer();
            var texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            this.frameTexture = texture;
            //var depthBuffer= gl.createRenderbuffer();
            //gl.bindRenderbuffer(gl.RENDERBUFFER,depthBuffer);
            //gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,this.width,this.height);
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            //gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,depthBuffer);
            if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
                console.log("frame buffer error : " + gl.checkFramebufferStatus(gl.FRAMEBUFFER));
            }
            this.frameBitmap = new engine.Bitmap();
            this.frameBitmap.scaleY = -1;
            this.frameBitmap.y = this.height;
            this.frameBitmap.setTexture(this.frameTexture, this.width, this.height);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            this.$addChildFront(engine.FPSCount.getInstance());
        };
        Engine.prototype.startTick = function () {
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
        Engine.prototype.render = function () {
            engine.FPSCount.addCount();
            var start = (new Date()).getTime();
            var gl = this.gl;
            //gl.bindFramebuffer(gl.FRAMEBUFFER,this.frameBuffer);
            gl.clear(gl.COLOR_BUFFER_BIT);
            var children;
            var child;
            var program;
            children = this.children;
            if (children.length) {
                program = children[0].program;
                program.reset();
            }
            for (var i = 0, len = children.length; i < len; i++) {
                child = children[i];
                if (program != child.program) {
                    program.render(gl);
                    program = child.program;
                    program.reset();
                }
                program.addDisplayObject(child);
            }
            //if(program) {
            //    program.render(gl);
            //    program = null;
            //}
            //this.clearRect();
            engine.FPSCount.getInstance().setRenderInfo(this.children.length);
            children = this.frontChildren;
            if (!program && children.length) {
                program = children[0].program;
                program.reset();
            }
            for (var i = 0, len = children.length; i < len; i++) {
                child = children[i];
                if (program != child.program) {
                    program.render(gl);
                    program = child.program;
                    program.reset();
                }
                program.addDisplayObject(child);
            }
            if (program) {
                program.render(gl);
            }
            //gl.bindFramebuffer(gl.FRAMEBUFFER,null);
            //gl.clear(gl.COLOR_BUFFER_BIT);
            //program = this.frameBitmap.program;
            //program.reset();
            //program.addDisplayObject(this.frameBitmap);
            //program.render(gl);
            engine.FPSCount.useTime((new Date()).getTime() - start);
        };
        Engine.prototype.clearRect = function () {
            var gl = this.gl;
            //gl.bindFramebuffer(gl.FRAMEBUFFER,this.frameBuffer);
            gl.blendFunc(gl.SRC_ALPHA, gl.ZERO);
            var shape = new engine.Shape();
            shape.color = 0x00000000;
            shape.width = 100;
            shape.height = 100;
            shape.x = 50;
            shape.y = 0;
            var program;
            program = shape.program;
            program.reset();
            program.addDisplayObject(shape);
            program.render(gl);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        };
        Object.defineProperty(Engine.prototype, "width", {
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "height", {
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine.prototype, "context3D", {
            get: function () {
                return this.gl;
            },
            enumerable: true,
            configurable: true
        });
        Engine.prototype.run = function () {
            this.runFlag = true;
        };
        Engine.prototype.stop = function () {
            this.runFlag = false;
        };
        Engine.prototype.$addChildFront = function (child) {
            this.frontChildren.push(child);
        };
        Engine.prototype.$removeChildFront = function (child) {
            var children = this.frontChildren;
            for (var i = 0, len = children.length; i < len; i++) {
                if (children[i] == child) {
                    children.splice(i, 1);
                    break;
                }
            }
        };
        Engine.prototype.addChild = function (child) {
            this.children.push(child);
        };
        Engine.prototype.removeChild = function (child) {
            var children = this.children;
            for (var i = 0, len = children.length; i < len; i++) {
                if (children[i] == child) {
                    children.splice(i, 1);
                    break;
                }
            }
        };
        Engine.prototype.createTexture = function (image) {
            var gl = this.gl;
            var texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            gl.bindTexture(gl.TEXTURE_2D, null);
            return texture;
        };
        Engine.getInstance = function () {
            return Engine.instance;
        };
        return Engine;
    })();
    engine.Engine = Engine;
})(engine || (engine = {}));
//# sourceMappingURL=Engine.js.map
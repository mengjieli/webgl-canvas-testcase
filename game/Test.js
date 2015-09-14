var engine;
(function (engine) {
    var Test = (function () {
        function Test() {
            this.images = {};
            this.textures = {};
            this.readyFlag = false;
            new engine.ImageLoader([
                "resources/64x64_1.png", "resources/64x64_2.png",
                "resources/128x128_1.png", "resources/128x128_2.png",
                "resources/256x256_1.png", "resources/256x256_2.png",
                "resources/512x512_1.png", "resources/512x512_2.png",
                "resources/1024x1024_1.png", "resources/1024x1024_2.png"
            ], this.onImageLoadComplete, this);
        }
        Test.prototype.onImageLoadComplete = function (images) {
            this.images["64_1"] = images[0];
            this.images["64_2"] = images[1];
            this.images["128_1"] = images[2];
            this.images["128_2"] = images[3];
            this.images["256_1"] = images[4];
            this.images["256_2"] = images[5];
            this.images["512_1"] = images[6];
            this.images["512_2"] = images[7];
            this.images["1024_1"] = images[8];
            this.images["1024_2"] = images[9];
            this.ready();
        };
        Test.prototype.ready = function () {
            this.readyFlag = true;
        };
        Test.prototype.getTexture = function (size, index) {
            if (!this.textures[size + "_" + index]) {
                this.textures[size + "_" + index] = engine.Engine.getInstance().createTexture(this.getImage(size, index));
            }
            return this.textures[size + "_" + index];
        };
        Test.prototype.getImage = function (size, index) {
            return this.images[size + "_" + index];
        };
        Test.prototype.addTestObject = function () {
        };
        Test.statrt = function () {
            Test.currentTest = new engine.Test2();
            document.onclick = function () {
                if (Test.currentTest) {
                    Test.currentTest.addTestObject();
                }
            };
        };
        Test.engine = "webgl";
        return Test;
    })();
    engine.Test = Test;
})(engine || (engine = {}));
//# sourceMappingURL=Test.js.map
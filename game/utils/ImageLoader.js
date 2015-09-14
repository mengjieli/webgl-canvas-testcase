var engine;
(function (engine) {
    var ImageLoader = (function () {
        /**
         * Image 对象或 Image 对象数组作为参数返回给回调函数。
         * @param url
         * @param back
         * @param thisObj
         */
        function ImageLoader(url, back, thisObj) {
            var image;
            if (typeof url === "string") {
                image = new Image();
                image.src = url;
                image.onload = function () {
                    back.apply(thisObj, [image]);
                };
            }
            else {
                var urls = url;
                var len = urls.length;
                var images = [];
                var count = 0;
                var load = function (image) {
                    return function () {
                        for (var i = 0; i < len; i++) {
                            if (images[i] == image) {
                                count++;
                                break;
                            }
                        }
                        if (count == len) {
                            back.apply(thisObj, [images]);
                        }
                    };
                };
                for (var i = 0; i < len; i++) {
                    image = new Image();
                    image.src = urls[i];
                    image.onload = load(image);
                    images.push(image);
                }
            }
        }
        return ImageLoader;
    })();
    engine.ImageLoader = ImageLoader;
})(engine || (engine = {}));
//# sourceMappingURL=ImageLoader.js.map
var engine;
(function (engine) {
    var GameMain = (function () {
        function GameMain() {

            //canvas
            //new cengine.CEngine(window.innerWidth,window.innerHeight);
            //Test.engine = "canvas";

            //webgl
            new engine.Engine(window.innerWidth, window.innerHeight);


            engine.Test.statrt();
        }
        return GameMain;
    })();
    engine.GameMain = GameMain;
})(engine || (engine = {}));
new engine.GameMain();
//# sourceMappingURL=GameMain.js.map
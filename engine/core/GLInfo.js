var engine;
(function (engine) {
    'use strict';
    var EXTENSION_LIST = [
        'OES_texture_float',
        'OES_texture_half_float',
        'OES_texture_float_linear',
        'OES_texture_half_float_linear',
        'OES_standard_derivatives',
        'OES_vertex_array_object',
        'OES_element_index_uint',
        'WEBGL_compressed_texture_s3tc',
        'WEBGL_depth_texture',
        'EXT_texture_filter_anisotropic',
        'EXT_shader_texture_lod',
        'WEBGL_draw_buffers'
    ];
    var PARAMETER_NAMES = [
        'MAX_TEXTURE_SIZE',
        'MAX_CUBE_MAP_TEXTURE_SIZE'
    ];
    var extensions = {};
    var parameters = {};
    var GLInfo = (function () {
        function GLInfo(_gl) {
            var glid = 0;
            if (extensions[glid]) {
                return;
            }
            extensions[glid] = {};
            parameters[glid] = {};
            // Get webgl extension
            for (var i = 0; i < EXTENSION_LIST.length; i++) {
                var extName = EXTENSION_LIST[i];
                this._createExtension(_gl, extName);
            }
            // Get parameters
            for (var i = 0; i < PARAMETER_NAMES.length; i++) {
                var name = PARAMETER_NAMES[i];
                parameters[glid][name] = _gl.getParameter(_gl[name]);
            }
        }
        GLInfo.prototype._createExtension = function (_gl, name) {
            var ext = _gl.getExtension(name);
            if (!ext) {
                ext = _gl.getExtension('MOZ_' + name);
            }
            if (!ext) {
                ext = _gl.getExtension('WEBKIT_' + name);
            }
            extensions[0][name] = ext;
        };
        return GLInfo;
    })();
    engine.GLInfo = GLInfo;
})(engine || (engine = {}));
//# sourceMappingURL=GLInfo.js.map
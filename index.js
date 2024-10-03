'use strict';

exports = module.exports = function() {
    return !!(typeof Cloudflare !== 'undefined' && Cloudflare.compatibilityFlags);
};


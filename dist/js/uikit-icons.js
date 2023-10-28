/*! UIkit 3.17.6 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('uikiticons', factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.UIkitIcons = factory());
})(this, (function () { 'use strict';

    function plugin(UIkit) {
      if (plugin.installed) {
        return;
      }
      UIkit.icon.add({});
    }
    if (typeof window !== "undefined" && window.UIkit) {
      window.UIkit.use(plugin);
    }

    return plugin;

}));

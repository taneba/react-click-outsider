(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global = global || self, global.ReactClickOutsider = factory(global.React));
}(this, function (React) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function ClickOutside(props) {
        var container = React.useRef(null);
        var isTouch = React.useRef(false);
        var onClickOutside = props.onClickOutside, restProps = __rest(props, ["onClickOutside"]);
        React.useEffect(function () {
            document.addEventListener('touchend', handler, true);
            document.addEventListener('click', handler, true);
            return function () {
                document.removeEventListener('touchend', handler, true);
                document.removeEventListener('click', handler, true);
            };
        });
        var handler = function (e) {
            if (e.type === 'touchend')
                isTouch.current = true;
            if (e.type === 'click' && isTouch.current)
                return;
            var el = container.current;
            if (el && !e.target && el.contains(e.target))
                props.onClickOutside(e);
        };
        return (React__default.createElement("div", __assign({}, restProps, { ref: container }), props.children));
    }

    return ClickOutside;

}));

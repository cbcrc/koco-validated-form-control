(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.validatedFormControlUi = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    //    Copyright (c) CBC/Radio-Canada. All rights reserved.
    //    Licensed under the MIT license. See LICENSE file in the project root for full license information.

    var ValidatedFormControl = function ValidatedFormControl(params, componentInfo) {
        var self = this;

        self.property = params.$raw.property();
        self.required = params.required;
    };

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    ValidatedFormControl.prototype.dispose = function () {};

    exports.default = {
        viewModel: {
            createViewModel: function createViewModel(params, componentInfo) {
                return new ValidatedFormControl(params, componentInfo);
            }
        },
        template: template
    };
});
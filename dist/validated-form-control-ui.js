'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validatedFormControl = require('text!./validated-form-control.html');

var _validatedFormControl2 = _interopRequireDefault(_validatedFormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidatedFormControl = function ValidatedFormControl(params, componentInfo) {
    var self = this;

    self.property = params.$raw.property();
    self.required = params.required;
};

// This runs when the component is torn down. Put here any logic necessary to clean up,
// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
//    Copyright (c) CBC/Radio-Canada. All rights reserved.
//    Licensed under the MIT license. See LICENSE file in the project root for full license information.

ValidatedFormControl.prototype.dispose = function () {};

exports.default = {
    viewModel: {
        createViewModel: function createViewModel(params, componentInfo) {
            return new ValidatedFormControl(params, componentInfo);
        }
    },
    template: _validatedFormControl2.default
};
//    Copyright (c) CBC/Radio-Canada. All rights reserved.
//    Licensed under the MIT license. See LICENSE file in the project root for full license information.

var ValidatedFormControl = function(params, componentInfo) {
    var self = this;

    self.property = params.$raw.property();
    self.required = params.required;
};

// This runs when the component is torn down. Put here any logic necessary to clean up,
// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
ValidatedFormControl.prototype.dispose = function() {};

export default {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return new ValidatedFormControl(params, componentInfo);
        }
    },
    template: template
};
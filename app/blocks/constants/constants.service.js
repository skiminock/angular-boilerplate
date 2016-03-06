(function () {
    angular.module("blocks.constants")
        .constant('EVENTS', {
            SIGN_IN: 'sign_in',
            SIGN_OUT: 'sign_out',
            SIGN_UP: 'sign_up'
        })
        .constant('ERROR_CODES', {
            NOT_FOUND: "Not found!",
            UNKNOWN: "Just unknown error!"
        });
})();

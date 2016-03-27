"use strict"

exports.config = {

    multiCapabilities: [
        {
            name: 'Chrome',
            browserName: 'chrome'
        }
    ],

    framework: 'jasmine',

    specs: [
        'test/e2e/**.spec.js'
    ],

    //taken from here: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/docs/protractor-configuration.md
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },

    //remove protractor dot reporter: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/docs/protractor-configuration.md
    jasmineNodeOpts: {
        print: function() {}
    },

    baseUrl: 'http://localhost:3000/'
}
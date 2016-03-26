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
    baseUrl: 'http://localhost:3000/'
}
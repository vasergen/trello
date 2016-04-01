// Karma configuration
// Generated on Sat Mar 26 2016 18:38:56 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['es6-shim', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'vendor/js/angular.min.js',
      'vendor/js/angular-ui-router.min.js',
      'vendor/js/angular-animate.min.js',
      'vendor/js/lodash.min.js',
      'vendor/js/lodash-fp.min.js',
      'vendor/js/firebase.js',
      'vendor/js/angular-mocks.js',
      'src/**/*.js'
    ],

    // list of files to exclude
    exclude: [

    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: {
      'src/**/*.js': ['babel']
    },

    babelPreprocessor: {
      options: {
          presets: ['es2015'],
          sourceMap: 'inline'
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],

    reporters: ['spec'],

    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: true,
      suppressSkipped: true
    },

    plugins: [
        "karma-chrome-launcher",
        "karma-phantomjs-launcher",
        "karma-jasmine",
        "karma-babel-preprocessor",
        "karma-spec-reporter",
        "karma-es6-shim"
    ],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    //browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

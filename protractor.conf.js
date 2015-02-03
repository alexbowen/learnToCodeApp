exports.config = {
    "framework": "cucumber",
    "seleniumServerJar": './node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar',
    "specs": ["tests/features/*.feature"],
    "cucumberOpts": {
        "format": "pretty"
    },
    "capabilities" : {
        "browserName": "phantomjs",
        "phantomjs.binary.path" : require('phantomjs').path
    }
};
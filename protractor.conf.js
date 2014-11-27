exports.config = {
    "framework": "cucumber",
    "seleniumAddress": 'http://localhost:4444/wd/hub',
    "specs": ["tests/features/*.feature"],
    "cucumberOpts": {
        "format": "pretty"
    },
    "capabilities" : {
        "browserName": "chrome"
    }
};

//webdriver-manager update
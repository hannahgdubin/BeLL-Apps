if (process.env.SAUCE_USERNAME) {
  exports.config = {
    "tests": "./*_test.js",
    "timeout": 10000,
    "output": "./output",
    "helpers": {
      "WebDriverIO": {
        "url": "http://127.0.0.1:5981/apps/_design/bell/MyApp/index.html#login",
        "browser": "Firefox",
        "waitForTimeout": "10000",
        "user": process.env.SAUCE_USERNAME,
        "key":  process.env.SAUCE_ACCESS_KEY,
        "host": "ondemand.saucelabs.com",
        "port": "80",
	"sauceConnect": true,
        "desiredCapabilities": {
          "browserName": "firefox",
          "version": "50",
          "platform": "Windows 10",
          "tunnel-identifier": process.env.TRAVIS_JOB_NUMBER,
          "name": "codeceptJS.login_test",
          "build": process.env.TRAVIS_BUILD_NUMBER
        }
      }
    },
    "include": {
      "I": "./steps_file.js"
    },
    "bootstrap": false,
    "mocha": {},
    "name": "tests"
  };
} else {
  exports.config = {
    "tests": "./*_test.js",
    "timeout": 10000,
    "output": "./output",
    "helpers": {
      "WebDriverIO": {
        "url": "http://127.0.0.1:5981/apps/_design/bell/MyApp/index.html#",
        "browser": "firefox",
        "waitForTimeout": "10000"
      }
    },
    "include": {
      "I": "./steps_file.js"
    },
    "bootstrap": false,
    "mocha": {},
    "name": "tests"
  }
}
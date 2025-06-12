export const config = {

    runner: 'local',
    //hostname: '26.118.158.125',
   // port: 4723,
    //path: '/',
    
  user: 'oauth-silvadriano130-b193c',
  key: 'f884be04-c498-46be-97da-bf0c34921b7c',
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  path: '/wd/hub',

    
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [
       {
        //platformName: 'Android',
        //'appium:deviceName': 'ebac',
        //'appium:platformVersion': '12.0',
        //'appium:automationName': 'UiAutomator2',
       // 'appium:app': `${process.cwd()}/app/ebacshop.apks`,
       // 'appium:appWaitActivity': '.MainActivity',
       // 'appium:disableIdLocatorAutocompletion': true
     // },

       platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      "appium:app": "storage:58735e78-1d36-4413-b5ec-bd049f4d3472",
      'appium:appWaitActivity': '.MainActivity',
      'appium:disableIdLocatorAutocompletion': true,

      'sauce:options': {
        build: 'appium-build-teste-ebacshop',
        name: 'teste ebacshop1',
        deviceOrientation: 'PORTRAIT',
        appiumVersion: '2.0.0',
        newCommandTimeout: 120,
       },
    }
],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
  if (error) {
    await browser.takeScreenshot();
  }
}
}

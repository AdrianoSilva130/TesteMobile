export const config = {

    //runner: 'local',
    //hostname: '26.118.158.125',
    //port: 4723,
    //path: '/',
    
  user: 'oauth-adrianosilva130-15775',
  key: '3ba9a593-0cf4-4101-8c5e-2eb1bb5f3235',
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  baseUrl: 'wd/hub',
 

    
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [
       //{
       // platformName: 'Android',
       // 'appium:deviceName': 'ebac',
       // 'appium:platformVersion': '12.0',
       // 'appium:automationName': 'UiAutomator2',
       // 'appium:app': `${process.cwd()}/app/ebacshop.apks`,
       // 'appium:appWaitActivity': '.MainActivity',
       // 'appium:disableIdLocatorAutocompletion': true
       //}
   {
       platformName: 'Android',
       'appium:app': 'storage:filename=ebacshop (1).aab', 
       'appium:deviceName': 'Samsung.*',
       'appium:platformVersion': '10',
       'appium:automationName': 'UiAutomator2',
       'appium:disableIdLocatorAutocompletion': true,
       'sauce:options': {
        build: 'appium-build-teste-ebacshop',
        name: 'teste ebacshop',
        deviceOrientation: 'PORTRAIT',
        appiumVersion: '2.0.0'
  },
   },
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
    
        await driver.takeScreenshot();
    }
}


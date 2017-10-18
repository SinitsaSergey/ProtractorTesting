exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './home/home.spec.js',
        './docs/docs.spec.js'
    ]
};
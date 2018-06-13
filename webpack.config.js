var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    .addEntry('js/counter', './assets/js/counter.js')
    .addEntry('js/directive', './assets/js/directive.js')
    .addEntry('js/model', './assets/js/model.js')
    .addEntry('js/hook', './assets/js/hook.js')
    .addEntry('js/notemaster', './assets/js/notemaster.js')
    .addEntry('js/starbase', './assets/js/starbase.js')
    .addEntry('js/starbase-router', './assets/js/starbase-router.js')
    .addEntry('css/starbase', './assets/css/starbase.css')
    .addEntry('css/starbase-router', './assets/css/starbase-router.css')
    // .addStyleEntry('css/app', './assets/css/app.scss')

    // uncomment if you use Sass/SCSS files
    // .enableSassLoader()

    // uncomment for legacy applications that require $/jQuery as a global variable
    // .autoProvidejQuery()
    .enableVueLoader()
;

module.exports = Encore.getWebpackConfig();

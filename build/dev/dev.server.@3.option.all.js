/******************************************************************************************
 * 
 * 
 *                  by zerostyle on 20210603
 * 
 *      webpack 5.0 配置项 DevServer(webpack-dev-server@^3")  所有配置项以及说明信息
 * 
 *      CLI Only项仅能运行在命令行下，不可通过配置项调整
 * 
 *      完整文档请见：https://webpack.js.org/configuration/dev-server/
 * 
 * 
 * 
 ******************************************************************************************/

module.exports =
{
    /**
     * function (app, server, compiler)
     * Provides the ability to execute custom middleware after all other middleware internally within the server.
     * @param {*} app 
     * @param {*} server 
     * @param {*} compiler 
     */
    after: function (app, server, compiler) {
        // do fancy stuff
    },

    /**
     * [string]
     * This option allows you to whitelist services that are allowed to access the dev server.
     */
    allowedHosts: [
        'host.com',
        'vscloud.dev.com'
    ],

    /**
     * function (app, server, compiler)
     * Provides the ability to execute custom middleware prior to all other middleware internally within the server. This could be used to define custom handlers
     * @param {*} app 
     * @param {*} server 
     * @param {*} compiler 
     */
    before: function (app, server, compiler) {
        app.get('/helloSvr', function (req, res) {
            res.json({ custom: 'response' });
        });
    },

    /**
     * boolean = false
     * This option broadcasts the server via ZeroConf networking on start
     */
    bonjour: false,

    /**
     * string = 'info': 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'
     * When using inline mode, the console in your DevTools will show you messages e.g. before reloading, before an error or when Hot Module Replacement is enabled.
     * devServer.clientLogLevel may be too verbose, you can turn logging off by setting it to 'silent'.
     */
    clientLogLevel: 'silent',

    /**
     * boolean
     * Enable gzip compression for everything served:
     */
    compress: true,

    /**
     * boolean: false | string | [string] | number
     * Tell the server where to serve content from. This is only necessary if you want to serve static files. devServer.publicPath will be used to determine where the bundles should be served from, and takes precedence.
     * By default, it will use your current working directory to serve content. To disable contentBase set it to false.
     */
    contentBase: process.execPath,

    /**
     * string = '/' | [string]
     * Tell the server at what URL to serve devServer.contentBase static content. If there was a file assets/manifest.json, it would be served at /serve-content-base-at-this-url/manifest.json
     *
     */
    contentBasePublicPath: '',

    /**
     * boolean
     * When set to true this option bypasses host checking. THIS IS NOT RECOMMENDED as apps that do not check the host are vulnerable to DNS rebinding attacks.
     */
    disableHostCheck: false,

    /**
     * string
     * This option lets you reduce the compilations in lazy mode. By default in lazy mode, every request results in a new compilation. With filename, it's possible to only compile when a certain file is requested
     * example:
     *    lazy: true,
     *    filename: 'bundle.js',
     */
    filename: '',

    /**
     * object
     * Adds headers to all responses:
     */
    headers: {
        'X-Powered-By': 'ahcui@1.2.0'
    },

    /**
     * boolean = false|object
     * When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses. Enable devServer.
     * By passing an object this behavior can be controlled further using options like rewrites:
     * historyApiFallback:{
     *        rewrites:
     *        [
     *            { from: /^\/$/, to: '/views/landing.html' },
     *            { from: /^\/subpage/, to: '/views/subpage.html' },
     *            { from: /./, to: '/views/404.html' },
     *        ],
     * }
     * When using dots in your path (common with Angular), you may need to use the disableDotRule:
     * historyApiFallback: {
     *        disableDotRule: true,
     * },
     * 
     * 
     */
    historyApiFallback: true,

    /**
     * string = 'localhost'
     * Specify a host to use. If you want your server to be accessible externally, specify it like this:
     * host: '0.0.0.0',
     */
    host: '0.0.0.0',

    /**
     * boolean
     * Enable webpack's Hot Module Replacement feature
     * Note that webpack.HotModuleReplacementPlugin is required to fully enable HMR
     */
    hot: false,

    /**
     * boolean
     * Enables Hot Module Replacement (see devServer.hot) without page refresh as a fallback in case of build failures.
     */
    hotOnly: false,

    /**
     * boolean = false
     * Serve over HTTP/2 using spdy. This option is ignored for Node 10.0.0 and above, as spdy is broken for those versions. The dev server will migrate over to Node's built-in HTTP/2 once Express supports it.
     * If devServer.http2 is not explicitly set to false, it will default to true when devServer.https is enabled. When devServer.http2 is enabled but the server is unable to serve over HTTP/2, the server defaults to HTTPS.
     */
    http2: false,

    /**
     * boolean|object
     * By default, dev-server will be served over HTTP. It can optionally be served over HTTP/2 with HTTPS
     * Provide your own certificate using the https option
     * boolean example:
     *    https: true,
     * object example:
     *    https: {
     *        key: fs.readFileSync('/path/to/server.key'),
     *        cert: fs.readFileSync('/path/to/server.crt'),
     *        ca: fs.readFileSync('/path/to/ca.pem')
     *      }
     */
    https: false,

    /**
     * string
     * The filename that is considered the index file.
     * Note that requests to root won't be proxied by default. To enable root proxying, the devServer.index option should be specified as a falsy value:
     */
    index: '',

    /**
     * boolean = false function (compilerConfig) => boolean
     * Tells devServer to inject a client. Setting devServer.injectClient to true will result in always injecting a client. It is possible to provide a function to inject conditionally:
     * injectClient: (compilerConfig) => compilerConfig.name === 'only-include',
     */
    injectClient: false,

    /**
     * boolean = false function (compilerConfig) => boolean
     * Tells devServer to inject a Hot Module Replacement. Setting devServer.injectHot to true will result in always injecting. It is possible to provide a function to inject conditionally:
     * hot: true,
     * injectHot: (compilerConfig) => compilerConfig.name === 'only-include',
     */
    injectHot: false,

    /**
     * boolean = true
     * Toggle between the dev-server's two different modes. By default, the application will be served with inline mode enabled. This means that a script will be inserted in your bundle to take care of live reloading, and build messages will appear in the browser console.
     * It is also possible to use iframe mode, which uses an <iframe> under a notification bar with messages about the build. 
     * To switch to iframe mode:
     *    inline: false,
     */
    inline: true,

    /**
     * boolean = false
     * When devServer.lazy is enabled, the dev-server will only compile the bundle when it gets requested. This means that webpack will not watch any file changes. We call this lazy mode.
     */
    lazy: false,



    /**
     * boolean = true
     * By default, the dev-server will reload/refresh the page when file changes are detected. devServer.hot option must be disabled or devServer.watchContentBase option must be enabled in order for liveReload to take effect. Disable devServer.liveReload by setting it to false:
     * 
     * 
     */
    liveReload: true,

    /**
     * object
     * Allows dev-server to register custom mime types. The object is passed to the underlying webpack-dev-middleware. See documentation for usage notes.
     * example:
     *  mimeTypes: { 'text/html': ['phtml'] },
     */
    mimeTypes: {},

    /**
     * boolean = false
     * Tells dev-server to suppress messages like the webpack bundle information. Errors and warnings will still be shown.
     */
    noInfo: true,

    /**
     * function (server)
     * Provides an option to execute a custom function when webpack-dev-server starts listening for connections on a port.
     * @param {*} server 
     */
    onListening: function (server) {
        const port = server.listeningApp.address().port;
        console.log('Listening on port:', port);
    },

    /**
     * boolean = false string object
     * Tells dev-server to open the browser after server had been started. Set it to true to open your default browser.
     * boolean example:
     *    open: true,
     * string example:
     *    open: 'Google Chrome',
     * object example:
     *    open: {
     *         app: ['Google Chrome', '--incognito', '--other-flag'],
     *    },
     */
    open: false,

    /**
     * string [string]
     * Specify a page to navigate to when opening the browser.
     * string example:
     *    open:true,
     *    openPage: 'different/page',
     * [string] example:
     *    open:true,
     *    openPage: ['different/page1', 'different/page2'],
     */
    openPage: '/',


    /**
     * boolean = false object: { errors boolean = false, warnings boolean = false }
     * Shows a full-screen overlay in the browser when there are compiler errors or warnings. If you want to show only compiler errors:
     * boolean example:
     *     overlay: true,
     * object example:
     *     overlay: {
     *        warnings: true,
     *        errors: true,
     *      },
     */
    overlay: false,

    /**
     * string
     * When used via the CLI, a path to an SSL .pfx file. If used in options, it should be the bytestream of the .pfx file.
     * example:
     *     pfx: './path/to/file.pfx',
     */
    pfx: '',

    /**
     * string
     * The passphrase to a SSL PFX file.
     */
    pfxPassphrase: '',

    /**
     * number
     * Specify a port number to listen for requests on
     */
    port: 80,

    /**
     * object [object, function]
     * Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.
     * The dev-server makes use of the powerful http-proxy-middleware package. Check out its documentation for more advanced usages. Note that some of http-proxy-middleware's features do not require a target key, e.g. its router feature, but you will still need to include a target key in your configuration here, otherwise webpack-dev-server won't pass it along to http-proxy-middleware).
     * 
     * object example1:
     *    proxy: {
     *          //A request to /api/users will now proxy the request to http://localhost:3000/api/users.
     *         '/api': 'http://localhost:3000',
     *     },
     * 
     * object example2:
     *    proxy: {
     *          //A request to /api/users will now proxy the request to http://localhost:3000.
     *         '/api': {
     *            target: 'http://localhost:3000',
     *            pathRewrite: { '^/api': '' },
     *         },
     *     },
     * 
     * object example3:
     *    proxy: {
     *          //A backend server running on HTTPS with an invalid certificate will not be accepted by default. If you want to, modify your configuration like this:
     *         '/api': {
     *             target: 'https://other-server.example.com',
     *             secure: false,
     *         },
     *     },
     * 
     * object example4:
     *    proxy: {
     *          // Sometimes you don't want to proxy everything. It is possible to bypass the proxy based on the return value of a function.
     *          // In the function you get access to the request, response, and proxy options.
     *          //    Return null or undefined to continue processing the request with proxy.
     *          //    Return false to produce a 404 error for the request.
     *          //    Return a path to serve from, instead of continuing to proxy the request.  
     *          // E.g. for a browser request, you want to serve an HTML page, but for an API request you want to proxy it. You could do something like this:
     *         '/api': {
     *               target: 'http://localhost:3000',
     *               bypass: function (req, res, proxyOptions) {
     *                    if (req.headers.accept.indexOf('html') !== -1) {
     *                        console.log('Skipping proxy for browser request.');
     *                        return '/index.html';
     *                    }
     *                },
     *          },
     *     },
     * 
     * object example4:
     * 
     *    proxy: [
     *          {
     *              //If you want to proxy multiple, specific paths to the same target, you can use an array of one or more objects with a context property:
     *              context: ['/auth', '/api'],
     *              target: 'http://localhost:3000',
     *          },
     *     ],
     * 
     * object example5
     *    //Note that requests to root won't be proxied by default. To enable root proxying, the devServer.index option should be specified as a falsy value:
     *    index: '', // specify to enable root proxying
     *    host: '...',
     *    contentBase: '...',
     *    proxy: {
     *    context: () => true,
     *        target: 'http://localhost:1234',
     *     },
     * 
     * objext example6:
     *    proxy: {
     *        //The origin of the host header is kept when proxying by default, you can set changeOrigin to true to override this behaviour. It is useful in some cases like using name-based virtual hosted sites.//
     *        '/api': 'http://localhost:3000',
     *        changeOrigin: true
     *    }
     * 
     * 
     * 
     */
    proxy: {},

    /**
     * CLI only
     * boolean
     * Output running progress to console.
     */
    // progress: true,

    /**
     * string
     * When using inline mode and you're proxying dev-server, the inline client script does not always know where to connect to. It will try to guess the URL of the server based on window.location, but if that fails you'll need to use this.
     * example:
     *    public: 'myapp.test:80',
     */
    public: '',

    /**
     * string = '/'
     * The bundled files will be available in the browser under this path.
     * Imagine that the server is running under http://localhost:8080 and output.filename is set to bundle.js. By default the devServer.publicPath is '/', so your bundle is available as http://localhost:8080/bundle.js.
     * 确保 devServer.publicPath 总是以斜杠(/)开头和结尾。
     */
    publicPath: '/',

    /**
     * boolean = false
     * With devServer.quiet enabled, nothing except the initial startup information will be written to the console. This also means that errors or warnings from webpack are not visible.
     */
    quiet: false,

    /**
     * boolean = true
     * Tells dev-server to use serveIndex middleware when enabled.
     * serveIndex middleware generates directory listings on viewing directories that don't have an index.html file.
     */
    serveIndex: true,

    /**
     * This option is deprecated in favor of devServer.before and will be removed in v4.0.0.
     * Here you can access the Express app object and add your own custom middleware to it. For example, to define custom handlers for some paths:
     * 
     * @param {*} app 
     * @param {*} server 
     */
    setup: function (app, server) {
        app.get('/some/path', function (req, res) {
            res.json({ custom: 'response' });
        });
    },

    /**
     * string
     * Tells clients connected to devServer to use provided socket host.
     * example:
     *    sockHost: 'myhost.test',
     */
    sockHost: '',

    /**
     * string = '/sockjs-node'
     * The path at which to connect to the reloading socket.
     * example:
     *    sockPath: '/socket',
     */
    sockPath: '',

    /**
     * number string
     * Tells clients connected to devServer to use provided socket port.
     * example:
     *    sockPort: 8080,
     */
    sockPort: 8080,

    /**
     * object
     * It is possible to configure advanced options for serving static files from contentBase. See the Express documentation for the possible options.
     * Tip:
     *    This only works when using devServer.contentBase as a string.
     * example:
     *    staticOptions: {
     *        redirect: false,
     *    },
     */
    staticOptions: {
        redirect: false
    },

    /**
     * string: 'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose' object
     * This option lets you precisely control what bundle information gets displayed. This can be a nice middle ground if you want some bundle information, but not all of it.
     * Tip:
     *    This option has no effect when used with quiet or noInfo
     */
    stats: 'errors-only',

    /**
     * CLI only
     * boolean
     * This option closes the server when stdin ends.
     */
    // stdin: false,

    /**
     * string = 'sockjs': 'sockjs' | 'ws' object | object
     * This option allows us either to choose the current devServer transport mode for client/server individually or to provide custom client/server implementation. This allows to specify how browser or other client communicates with the devServer.
     * The current default mode is 'sockjs'. This mode uses SockJS-node as a server, and SockJS-client on the client.
     * 'ws' mode will become the default mode in the next major devServer version. This mode uses ws as a server, and native WebSockets on the client.
     * object example:
     *  transportMode: {
     *        client: require.resolve('./CustomClient'),
     *        server: 'ws'
     *   },
     *
     * Tip:
     *    Providing a string to devServer.transportMode is a shortcut to setting both devServer.transportMode.client and devServer.transportMode.server to the given string value.
     * Warning:
     *    transportMode is an experimental option, meaning its usage could potentially change without warning.
     */
    transportMode: 'sockjs',

    /**
     * boolean
     * This option lets the browser open with your local IP.
     */
    useLocalIp: true,

    /**
     * boolean
     * Tell dev-server to watch the files served by the devServer.contentBase option. It is disabled by default. When enabled, file changes will trigger a full page reload.
     */
    watchContentBase: false,

    /**
     * object
     * Control options related to watching the files.
     * webpack uses the file system to get notified of file changes. In some cases, this does not work. For example, when using Network File System (NFS). Vagrant also has a lot of problems with this. In these cases, use polling:
     * If this is too heavy on the file system, you can change this to an integer to set the interval in milliseconds.
     * See WatchOptions for more options.
     * example:
     *    watchOptions: {
     *        aggregateTimeout: 200,
     *        poll: 1000,
     *    },
     */
    watchOptions: {
        poll: true
    },

    /**
     * boolean = false function (filePath) => boolean
     * Tells devServer to write generated assets to the disk. The output is written to the output.path directory.
     * example:
     *    writeToDisk:{
     *        (filePath) => {
     *            return /superman\.css$/.test(filePath);
     *        },
     *    }
     */
    writeToDisk: false
};

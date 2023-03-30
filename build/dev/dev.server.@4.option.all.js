/******************************************************************************************
 * 
 * 
 *                  by zerostyle on 20230104
 * 
 *      webpack 5.0 配置项 DevServer(webpack-dev-server@^4")  所有配置项以及说明信息
 * 
 *      CLI Only项仅能运行在命令行下，不可通过配置项调整
 * 
 *      完整文档请见：https://webpack.js.org/configuration/dev-server/
 * 
 * 
 * 
 ******************************************************************************************/
 const path = require('path')
 
module.exports =
{
     /**
     * 'auto' | 'all' [string]
     * 该选项允许将允许访问开发服务器的服务列入白名单。
     * example：
        allowedHosts: [
            'host.com',
            'subdomain.host.com',
            'subdomain2.host.com',
            'host2.com',
        ],
     */
      allowedHosts: [
        'host.com',
    ],

    /**
     * boolean = false object
     * 这个配置用于在启动时通过 ZeroConf 网络广播你的开发服务器。
     * example:
        bonjour: true,
       or
        bonjour: {
            type: 'http',
            protocol: 'udp',
        },
     */
     bonjour: false,

     client:{
        /**
         * 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
         * 允许在浏览器中设置日志级别，例如在重载之前，在一个错误之前或者 热模块替换 启用时。
         * 通过命令行使用：npx webpack serve --client-logging info
         */
        logging:'info',
        /**
         * boolean = true object: { errors boolean = true, warnings boolean = true }
         * 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
         * example
            overlay: true,
            通过命令行使用：npx webpack serve --client-overlay
            如需禁用：npx webpack serve --no-client-overlay
           or
            overlay: {
                errors: true,
                warnings: false,
            },
            通过命令行使用：npx webpack serve --client-overlay-errors --no-client-overlay-warnings
         */
        overlay:true,

        /**
         * boolean
         * 在浏览器中以百分比显示编译进度。
         * 通过命令行使用：npx webpack serve --client-progress
         * 如需禁用：npx webpack serve --no-client-progress
         */
        progress:true,

        /**
         * boolean = true number
         * 告诉 dev-server 它应该尝试重新连接客户端的次数。当为 true 时，它将无限次尝试重新连接。当设置为 false 时，它将不会尝试连接。
         * 通过 CLI 使用：npx webpack serve --client-reconnect
         * 如需禁用：npx webpack serve --no-client-reconnect
         */
        reconnect:true,

        /**
         * 'ws' | 'sockjs' string
         * 该配置项允许我们为客户端单独选择当前的 devServer 传输模式，或者提供自定义的客户端实现。这允许指定浏览器或其他客户端与 devServer 的通信方式。
         * 为 webSocketServer 设置 'ws' 或者 'sockjs' 是一个设置 devServer.client.webSocketTransport 和 devServer.webSocketServer 的快捷方式。
         * example:
         *  devServer: {
                client: {
                    webSocketTransport: 'ws',
                },
                webSocketServer: 'ws',
            },
         * 通过命令行使用：npx webpack serve --client-web-socket-transport ws --web-socket-server ws
         */
        webSocketTransport:'ws',

        /**
         * string object
         * 这个选项允许指定 URL 到 web socket 服务器（当你代理开发服务器和客户端脚本不总是知道连接到哪里时很有用）。
         * 通过命令行使用：npx webpack serve --client-web-socket-url ws://0.0.0.0:8080/ws
         * example:
         *  webSocketURL: {
                hostname: '0.0.0.0',//告诉连接到 devServer 的客户端使用提供的 hostname 进行连接。
                pathname: '/ws',// 告诉连接到 devServer 的客户端使用提供的路径进行连接。
                password: 'dev-server',//告诉连接到 devServer 的客户端使用提供的密码进行认证。
                port: 8080,//告诉连接到 devServer 的客户端使用提供的端口进行连接。
                protocol: 'ws',//告诉连接到 devServer 的客户端使用提供的协议进行连接。
                username: 'webpack',//告诉连接到 devServer 的客户端使用提供的用户名进行认证。
            },
           or
            webSocketURL: 'ws://0.0.0.0:8080/ws',
         * 要从浏览器中获取 protocol/hostname/port，请使用 webSocketURL: 'auto://0.0.0.0:0/ws'。
         */
        webSocketURL:'ws://0.0.0.0:8080/ws',

     },

     /**
      * boolean = true
      * 启用 gzip compression：
      * 通过命令行使用：npx webpack serve --compress
      * 如需禁用：npx webpack serve --no-compress
      */
     compress:true,


     /**
      * object
      * 为 webpack-dev-middleware 提供处理 webpack 资源的配置项。
      * 配置项文档：https://github.com/webpack/webpack-dev-middleware
      */
     devMiddleware: {
        /**
         * Array
         * Allows to pass the list of HTTP request methods accepted by the middleware
         */
         methods:[ 'GET', 'HEAD' ],

         /**
          * Array|Object|Function
          * Allows to pass custom HTTP headers on each request.
          * example:
          *  headers: () => {
                 return {
                 "Last-Modified": new Date(),
                 };
             },
             or
             headers: (req, res, context) => {
                 res.setHeader("Last-Modified", new Date());
             },
             or
             headers: [
                 {
                 key: "X-custom-header",
                 value: "foo"
                 },
                 {
                 key: "Y-custom-header",
                 value: "bar"
                 }
             ]
          */
         headers:undefined,
 
         /**
          * Boolean|String
          * If false (but not undefined), the server will not respond to requests to the root URL.
          */
         index: 'index.html',
 
         /**
          * object
          * Allows to register custom mime types or extension mappings.
          * example:
          *  mimeTypes: { phtml: 'text/html'},
          */
         mimeTypes: undefined,
 
          /**
          * string = '/'
          * The bundled files will be available in the browser under this path.
          * Imagine that the server is running under http://localhost:8080 and output.filename is set to bundle.js. By default the devServer.publicPath is '/', so your bundle is available as http://localhost:8080/bundle.js.
          * 确保 devServer.publicPath 总是以斜杠(/)开头和结尾。
          */
         publicPath: '/',
 
         /**
          * Boolean|String|Object
          * Stats options object or preset name.
          */
         stats:{},
 
         /**
          * Boolean
          * Instructs the module to enable or disable the server-side rendering mode.
          */
         serverSideRender:undefined,
 
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
         writeToDisk: false,
 
         /**
          * Object
          * Set the default file system which will be used by webpack as primary destination of generated files.
          */
         outputFileSystem:{}
     },

     /**
      * boolean
      * 使用 spdy 提供 HTTP/2 服务。对于 Node 15.0.0 及更高版本，此选项将被忽略，因为 spdy 在这些版本中已被破坏。一旦 Express 支持，开发服务器将迁移到 Node 内置的 HTTP/2。
      * 通过 CLI 使用：npx webpack serve --http2
      * 禁用：npx webpack serve --no-http2                
      */
     http2:false,

     /**
      * boolean object
      * 默认情况下，开发服务器将通过 HTTP 提供服务。可以选择使用 HTTPS 提供服务：
      * 通过 CLI 使用：npx webpack serve --https
      * 禁用：npx webpack serve --no-https
      * example:
      *  https: {
            minVersion: 'TLSv1.1',
            key: fs.readFileSync(path.join(__dirname, './server.key')),
            pfx: fs.readFileSync(path.join(__dirname, './server.pfx')),
            cert: fs.readFileSync(path.join(__dirname, './server.crt')),
            ca: fs.readFileSync(path.join(__dirname, './ca.pem')),
            passphrase: 'webpack-dev-server',
            requestCert: true,
         },
        or
         https: true,
      * 要通过 CLI 使用自己的证书，请使用以下选项：npx webpack serve --https-request-cert --https-key ./path/to/server.key --https-cert ./path/to/server.crt --https-ca ./path/to/ca.pem --https-pfx ./path/to/server.pfx --https-passphrase webpack-dev-server
      * 不要同时指定 https.ca 与 https.cacert 配置项，如果指定的话将会使用 https.ca。
      */
     https:false,

     /**
      * array function object
      * 为所有响应添加 headers：
      * example:
      *  headers: () => {
            return { 'X-Bar': ['key1=value1', 'key2=value2'] };
         },
        or
         headers: (req, res, context) => {
            res.setHeader("Last-Modified", new Date());
         },
        or
         headers: [
            {
            key: "X-custom-header",
            value: "foo"
            },
            {
            key: "Y-custom-header",
            value: "bar"
            }
         ]
     */
     headers:undefined,

     /**
      * boolean = false object
      * When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses. Enable devServer.
      * By passing an object this behavior can be controlled further using options like rewrites:
      * example:
         historyApiFallback:{
              rewrites:
              [
                  { from: /^\/$/, to: '/views/landing.html' },
                  { from: /^\/subpage/, to: '/views/subpage.html' },
                  { from: /./, to: '/views/404.html' },
              ],
         }
        or
         historyApiFallback: {
              disableDotRule: true,
         },
      * 通过 CLI 使用：npx webpack serve --history-api-fallback
      * 禁用：npx webpack serve --no-history-api-fallback
      */
     historyApiFallback: true,

     /**
     * 'local-ip' | 'local-ipv4' | 'local-ipv6' string
     * 指定要使用的 host。如果你想让你的服务器可以被外部访问，像这样指定:
     * host: '0.0.0.0',
     * 通过命令行使用：npx webpack serve --host 0.0.0.0
     * 这也适用于 IPv6：npx webpack serve --host ::
     * local-ip:Specifying local-ip as host will try to resolve the host option as your local IPv4 address if available, if IPv4 is not available it will try to resolve your local IPv6 address.
     * npx webpack serve --host local-ip
     * local-ipv4:Specifying local-ipv4 as host will try to resolve the host option as your local IPv4 address.
     * npx webpack serve --host local-ipv4
     * local-ipv6:指定 local-ipv6 作为主机将尝试将主机选项解析为您的本地 IPv6 地址。
     * npx webpack serve --host local-ipv6
     */
    host: '0.0.0.0',

    /**
     * 'only' boolean = true
     * 启用 webpack 的 热模块替换 特性,启用热模块替换功能，在构建失败时不刷新页面作为回退，使用 hot: 'only'：
     * 通过命令行使用：npx webpack serve --hot
     * 如需禁用：npx webpack serve --no-hot
     * 通过命令行使用：npx webpack serve --hot only
     */
     hot: true,

     /**
      * true string
      * The Unix socket to listen to (instead of a host).
      * 将其设置为 true 将会监听 /your-os-temp-dir/webpack-dev-server.sock 的 socket
      * 通过命令行使用：npx webpack serve --ipc
      * example:
         ipc: path.join(__dirname, 'my-socket.sock'),
        or
         ipc: true,
      */
     ipc:true,

     /**
      * boolean = true
      * 默认情况下，当监听到文件变化时 dev-server 将会重新加载或刷新页面。
      * 为了 liveReload 能够生效，devServer.hot 配置项必须禁用或者 devServer.watchFiles 配置项必须启用。
      * 将其设置为 false 以禁用 devServer.liveReload
      * 通过命令行使用：npx webpack serve --live-reload
      * 禁用该功能：npx webpack serve --no-live-reload
      */
     liveReload:true,

     /**
      * boolean = true
      * v4.1.0+
      * Tell dev-server to enable/disable magic HTML routes (routes corresponding to your webpack output, for example /main for main.js).
      * 通过 CLI 使用：npx webpack serve --magic-html
      * 禁用：npx webpack serve --no-magic-html
      */
     magicHtml:true,


    /**
     * function (devServer)
     * 提供在 webpack-dev-server 开始监听端口连接时执行自定义函数的能力。
     * @param {*} devServer 
     */
    onListening: function (devServer) {
        if (!devServer) {
            throw new Error('webpack-dev-server is not defined');
          }
    
          const port = devServer.server.address().port;
          console.log('Listening on port:', port);
    },

    /**
     * boolean string object [string, object]
     * 告诉 dev-server 在服务器已经启动后打开浏览器。设置其为 true 以打开你的默认浏览器。
     * example:
        open: ['/my-page', '/another-page'],
       or
        open:true,
       or
        open: {
            app: {
                name: 'google-chrome',
            },
        },
       or
        open: {
            target: ['first.html', 'http://localhost:8080/second.html'],
            app: {
                name: 'google-chrome',
                arguments: ['--incognito', '--new-window'],
            },
        },
     * 浏览器应用程序名称与平台相关。不要在可重用模块中硬编码它。例如，'Chrome' 在 macOS 是 'Google Chrome'，在 Linux 是 'google-chrome'，在 Windows 是 'chrome'。
     * 通过命令行使用：npx webpack serve --open
     * 如需禁用：npx webpack serve --no-open
     */
    open: true,


    /**
     * 'auto' string number
     * 指定监听请求的端口号
     * port 配置项不能设置为 null 或者空字符串，要想自动使用一个可用端口请使用 port: 'auto'
     * 通过命令行使用：npx webpack serve --port 8080
     */
    port: 8080,


    /**
     * object [object, function]
     * 当拥有单独的 API 后端开发服务器并且希望在同一域上发送 API 请求时，代理某些 URL 可能会很有用。
     * 开发服务器使用功能强大的 http-proxy-middleware 软件包。 查看其 documentation 了解更多高级用法。 
     * 请注意，http-proxy-middleware 的某些功能不需要target键，例如 它的 router 功能，但是仍然需要在此处的配置中包含target，否则webpack-dev-server 不会将其传递给 http-proxy-middleware。
     * 配置文档：https://github.com/chimurai/http-proxy-middleware
     
     * object example1:
     *    proxy: {
     *          //使用后端在 localhost:3000 上，可以使用它来启用代理：
     *          //现在，对 /api/users 的请求会将请求代理到 http://localhost:3000/api/users。
     *         '/api': 'http://localhost:3000',
     *     },
     * 
     * object example2:
     *    proxy: {
     *          //如果不希望传递/api，则需要重写路径：
     *         '/api': {
     *            target: 'http://localhost:3000',
     *            pathRewrite: { '^/api': '' },
     *         },
     *     },
     * 
     * object example3:
     *    proxy: {
     *          //默认情况下，将不接受在 HTTPS 上运行且证书无效的后端服务器。 如果需要，可以这样修改配置
     *         '/api': {
     *             target: 'https://other-server.example.com',
     *             secure: false,
     *         },
     *     },
     * 
     * object example4:
     *    proxy: {
     *          // 有时不想代理所有内容。 可以基于函数的返回值绕过代理。
     *          //在该功能中，可以访问请求，响应和代理选项。
     *              //返回 null 或 undefined 以继续使用代理处理请求。
     *              //返回 false 会为请求产生 404 错误。
     *              //返回提供服务的路径，而不是继续代理请求。
     *          //例如。 对于浏览器请求，想要提供 HTML 页面，但是对于 API 请求，想要代理它。 可以执行以下操作：
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
     *              //如果想将多个特定路径代理到同一目标，则可以使用一个或多个带有 context 属性的对象的数组：
     *              context: ['/auth', '/api'],
     *              target: 'http://localhost:3000',
     *          },
     *     ],
     * 
     * object example5
     *    //请注意，默认情况下不会代理对 root 的请求。 要启用根代理，应将 devMiddleware.index 选项指定为虚假值：
     *    devServer: {
     *      devMiddleware: {
     *          index: false, // specify to enable root proxying
     *      },
     *      proxy: {
     *          context: () => true,
     *          target: 'http://localhost:1234',
     *      },
     *     }
     * objext example6:
     *    proxy: {
     *        //默认情况下，代理时会保留主机头的来源，可以将 changeOrigin 设置为 true 以覆盖此行为。 
     *        //在某些情况下，例如使用 name-based virtual hosted sites，它很有用。
     *        '/api': {
     *           target: 'http://localhost:3000',
     *           changeOrigin: true,
     *         }
     *    }
     * 
     * 
     * 
     */
    proxy: {},

    /**
     * 'http' | 'https' | 'spdy' string object
     * 通过 CLI 使用：npx webpack serve --server-type http
     * example:
     *  server: {
            type: 'https',
            options: {
                ca: './path/to/server.pem',
                pfx: './path/to/server.pfx',
                key: './path/to/server.key',
                cert: './path/to/server.crt',
                passphrase: 'webpack-dev-server',
                requestCert: true,
            },
        },
     * Warning:该配置项在 Node 15.0.0 及以上的版本会被忽略，因为 spdy 在这些版本中不会正常工作。一旦 Express 支持 Node 内建 HTTP/2，dev server 会进行迁移。
     */
    server: 'http',

    /**
     * boolean = true
     * 允许在 SIGINT 和 SIGTERM 信号时关闭开发服务器和退出进程。
     */
    setupExitSignals:true,

    /**
     * function (middlewares, devServer)
     * v4.7.0+
     * 提供执行自定义函数和应用自定义中间件的能力。
     */
    setupMiddlewares:(middlewares, devServer)=>{
        if (!devServer) {
            throw new Error('webpack-dev-server is not defined');
          }
    
          devServer.app.get('/setup-middleware/some/path', (_, response) => {
            response.send('setup-middlewares option GET');
          });
    
          // 如果你想在所有其他中间件之前运行一个中间件或者当你从 `onBeforeSetupMiddleware` 配置项迁移时，
          // 可以使用 `unshift` 方法
          middlewares.unshift({
            name: 'first-in-array',
            // `path` 是可选的
            path: '/foo/path',
            middleware: (req, res) => {
              res.send('Foo!');
            },
          });
    
          // 如果你想在所有其他中间件之后运行一个中间件或者当你从 `onAfterSetupMiddleware` 配置项迁移时，
          // 可以使用 `push` 方法
          middlewares.push({
            name: 'hello-world-test-one',
            // `path` 是可选的
            path: '/foo/bar',
            middleware: (req, res) => {
              res.send('Foo Bar!');
            },
          });
    
          middlewares.push((req, res) => {
            res.send('Hello World!');
          });
    
          return middlewares;
    },

    /**
     * boolean string object [string, object]
     * 该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为 false 以禁用：
     * 监听多个静态资源目录：static: ['assets', 'css'],
     */
    static:{
        /**
         * string = path.join(process.cwd(), 'public')
         * 告诉服务器从哪里提供内容。只有在你希望提供静态文件时才需要这样做。static.publicPath 将会被用来决定应该从哪里提供 bundle，并具有优先级。
         */
        directory: path.join(process.cwd(), 'public'),

        /**
         * object
         * 可以配置从 static.directory 提供静态文件的高级选项。关于可用配置项可以插件 Express 文档。
         */
        staticOptions: {
            /**
             * String
             * Determines how dotfiles (files or directories that begin with a dot “.”) are treated.See dotfiles below.
             */
            dotfiles: 'ignore',
            
            /**
             * Boolean
             * Enable or disable etag generation
             * NOTE: express.static always sends weak ETags.
             */
            etag: true,

            /**
             * Mixed
             * Sets file extension fallbacks: If a file is not found, search for files with the specified extensions and serve the first one found. 
             * Example: ['html', 'htm'].
             */
            extensions: false,

            /**
             * Boolean
             * Let client errors fall-through as unhandled requests, otherwise forward a client error.
             * See fallthrough below.
             */
            fallthrough: true,

            /**
             * Boolean
             * Enable or disable the immutable directive in the Cache-Control response header. 
             * If enabled, the maxAge option should also be specified to enable caching. 
             * The immutable directive will prevent supported clients from making conditional requests during the life of the maxAge option to check if the file has changed.
             */
            immutable: false,

            /**
             * Mixed
             * Sends the specified directory index file. Set to false to disable directory indexing.
             */
            index: 'index.html',


            /**
             * Boolean
             * Set the Last-Modified header to the last modified date of the file on the OS.
             */
            lastModified: true,

            /**
             * Number
             * Set the max-age property of the Cache-Control header in milliseconds or a string in ms format.
             */
            maxAge: 0,

            /**
             * Boolean
             */
            redirect: true,

            /**
             * fn(res, path, stat)
             * Function for setting HTTP headers to serve with the file.
             * See setHeaders below.
             * @res {object} the response object.
             * @path {string} the file path that is being sent.
             * @stat {object} the stat object of the file that is being sent.
             */
            setHeaders: function (res, path, stat) {
                res.set('x-timestamp', Date.now())
            }

        },

        /**
         * string = '/' [string]
         * 告诉服务器在哪个 URL 上提供 static.directory 的内容。
         * 例如为在 /serve-public-path-url/manifest.json 中的 assets/manifest.json 提供服务，你的配置项应该像下面这样：
         * devServer: {
                static: {
                    directory: path.join(__dirname, 'assets'),
                    publicPath: '/serve-public-path-url',
                },
            },
         * 提供一个对象数组，以防你有多个静态文件夹：
            devServer: {
                static: [
                {
                    directory: path.join(__dirname, 'assets'),
                    publicPath: '/serve-public-path-url',
                },
                {
                    directory: path.join(__dirname, 'css'),
                    publicPath: '/other-serve-public-path-url',
                },
                ],
            },
         */
        publicPath: '/',

        /**
         * boolean object = { icons: true }
         * 告诉开发服务器启用后使用 serveIndex 中间件。
         * serveIndex 中间件会在查看没有 index.html 文件的目录时生成目录列表。
         * devServer: {
                static: {
                    directory: path.join(__dirname, 'public'),
                    serveIndex: true,
                },
            },
         * 通过 CLI 使用：npx webpack serve --static-serve-index
         * 禁用该功能：npx webpack serve --no-static-serve-index
         */
        serveIndex: '',

        /**
         * boolean object
         * 通过 static.directory 配置项告诉 dev-server 监听文件。默认启用，文件更改将触发整个页面重新加载。
         * 可以通过将 watch 设置为 false 禁用。
         * 通过 CLI 使用：npx webpack serve --static-watch
         * 禁用该功能：npx webpack serve --no-static-watch
         * 可以配置高级选项以监听 static.directory 中的静态文件。关于可用选项可以查看 chokidar 文档。
         * devServer: {
                static: {
                    directory: path.join(__dirname, 'public'),
                    watch: {
                        ignored: '*.txt',
                        usePolling: false,
                    },
                },
            },
         */
        watch: true,


    },

    /**
     * string object [string, object]
     * 该配置项允许你配置 globs/directories/files 来监听文件变化。例如：
     */
        //devServer: {
        //    watchFiles: ['src/**/*.php', 'public/**/*'],
        //},
     /**
      * 可以配置高级选项来监听文件。关于可用选项可以查看 chokidar 文档。
      */
        //devServer: {
        //    watchFiles: {
        //      paths: ['src/**/*.php', 'public/**/*'],
        //      options: {
        //        usePolling: false,
        //      },
        //    },
        //},
    watchFiles:{},

    /**
     * false | 'sockjs' | 'ws' string function object
     * 该配置项允许我们选择当前的 web-socket 服务器或者提供自定义的 web-socket 服务器实现。
     * 当前默认模式为 'ws'。该模式使用 ws 作为服务器，客户端中的 WebSockets。
     */
    webSocketServer: 'ws'

};

module.exports = {
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
              name: 'custom',
              path: '*',
              component: resolve(__dirname, 'pages/404.vue')
            })
        }
    }
}
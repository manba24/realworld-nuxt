const cookieparser = process.server ? require('cookieparser') : undefined
// 防止 数据污染
export const state = () => {
    return {
        user: null
    }
}
export const mutations = {
    setUser(state, user) {
        state.user = user
    }
}
export const actions = {
    // 服务端自动调用 初始化容器传递数据给客户端使用
    nuxtServerInit({ commit }, { req }) {
        let user = null
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        console.log(user, 'nextServerInit')
        commit('setUser', user)
    }
}

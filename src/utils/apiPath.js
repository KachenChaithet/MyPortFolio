export const BASE_URL = import.meta.env.VITE_API_BACKEND

export const API_PATHS = {
    LOGIN: {
        login: '/api/login'
    },
    PROJECT: {
        create: '/project/create',
        update: (id) => `/project/update/${id}`,
        getall: '/project/getall',
        delete: (id) => `/project/delete/${id}`
    },
    SKILL: {
        create: '/skill/create',
        update: (id) => `/skill/update/${id}`,
        getall: '/skill/getall',
        delete: (id) => `/skill/delete/${id}`
    },
    PROFILE: {
        update: `/profile/update/1`,
        getall: '/profile/getall',
    },
    SITESETTINGS: {
        update: (id) => `/sitesetting/update/${id}`,
        getall: '/sitesetting/getall',

    }


}
'use strict';

/**
 * top-left-menu router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::top-left-menu.top-left-menu', {
    prefix: '',
    only: ['find', 'findOne'],
    except: [],
    config: {
        find: {
            auth: false,
            policies: [],
            middlewares: [
                (ctx, next) => { 
                    return next();
                },
            ],
        },
        findOne: {},
        create: {},
        update: {},
        delete: {},

    },
});

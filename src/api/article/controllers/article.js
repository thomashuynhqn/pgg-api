'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
    async create(ctx) {
        const { data } = ctx.request.body;

        if (data.spotlight) {
            // Unset spotlight for all other articles
            await strapi.db.query('api::article.article').updateMany({
                where: { spotlight: true },
                data: { spotlight: false },
            });
        }

        // Proceed with the default create behavior
        return await super.create(ctx);
    },

    async update(ctx) {
        const { id } = ctx.params; // ID of the article being updated
        const { data } = ctx.request.body;

        if (data.spotlight) {
            // Unset spotlight for all other articles
            await strapi.db.query('api::article.article').updateMany({
                where: { spotlight: true, id: { $ne: id } }, // Exclude the current article
                data: { spotlight: false },
            });
        }

        // Proceed with the default update behavior
        return await super.update(ctx);
    },
}));

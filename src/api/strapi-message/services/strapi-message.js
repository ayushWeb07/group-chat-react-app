'use strict';

/**
 * strapi-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi-message.strapi-message');

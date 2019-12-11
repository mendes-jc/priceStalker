"use strict";Object.defineProperty(exports, "__esModule", {value: true});exports. default = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'PriceStalker <noreply@pricestalker.com>',
  },
};

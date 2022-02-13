module.exports = {
  apps: [
    {
      name: "node-red-bot",
      script: "../../../../AppData/Roaming/npm/node_modules/node-red/red.js",
      args: "-s settings.js -u ./",
      watch: false,
      node_args: "--max_old_space_size=1500",
      autorestart: true,
      env: {
        NODE_ENV: "LOCAL",

        CUSTOMER_API_URL: 'http://core-apps.dev.chatbots.vpc:8080/core-customer-api',
        CUSTOMER_API_KEY: '?aM-dUZVF@ZWJvq5Y2?Bfrs5j=A9?+sb',

        MESSAGES_API_URL: 'http://core-apps.dev.chatbots.vpc:8080/core-messages-api',
        MESSAGES_API_KEY: 'h5@8WzM%KFhxMf!r!P_m6WM=VJvgef?q',

        BOT_ID: '6',
        CHANNEL: 'TG',
        COMPANY_ID: '43',
        PORT:1880,
        GROUP_ID: '-704606989'
      }
    },
  ],
};
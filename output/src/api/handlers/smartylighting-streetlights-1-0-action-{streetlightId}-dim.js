
const handler = module.exports = {};

/**
 * 
 * @param {object} options
 * @param {object} options.message
 * @param {integer} options.message.headers.my-app-header
 * @param {integer} options.message.payload.percentage - Percentage to which the light should be dimmed to.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.dimLight = async ({message}) => {
  // Implement your business logic here...
};

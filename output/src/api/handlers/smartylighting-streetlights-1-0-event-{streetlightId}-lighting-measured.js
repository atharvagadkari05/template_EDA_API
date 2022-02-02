
const handler = module.exports = {};

/**
 * Inform about environmental lighting conditions of a particular streetlight.
 * @param {object} options
 * @param {object} options.message
 * @param {integer} options.message.headers.my-app-header
 * @param {integer} options.message.payload.lumens - Light intensity measured in lumens.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.receiveLightMeasurement = async ({message}) => {
  // Implement your business logic here...
};

/**
 * @class Response
 */
class Response {
  /**
   * @param {Boolean} success true/false
   * @param {number} code response code
   * @param {string} message addition message
   * @param {object} data response data
   */
  constructor(success, message, data) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

export default Response;

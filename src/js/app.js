export default class Validator {
  static validateUsername(name) {
    if (!name) {
      return false;
    } else {
      return /^[\w-]*$/.test(name) && !/\d{4}|^[\d_-]|[\d_-]$/.test(name);
    }
  }
}

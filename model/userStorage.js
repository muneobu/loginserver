"use strict";
class userStorage {
  static data = {
    id: ["banana", "tomato", "cherry"],
    pw: ["bb", "tt", "cc"],
    name: ["ba", "to", "ch"],
  };
  static getUsers(a, b) {
    console.log(...a);
    console.log(...b);
  }
}

module.exports = userStorage;

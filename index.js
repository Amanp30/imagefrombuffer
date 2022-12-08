"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.imagefrombuffer = function ({ type, data }) {
  return `data:${type};base64,${
    typeof window !== "undefined" &&
    window.btoa(String.fromCharCode.apply(null, new Uint8Array(data)))
  }`;
};

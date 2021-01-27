//funcionm para convertir en base 64
function encodeBasic(username, password) {
  return Buffer.from(`${username}:${password}`).toString("base64");
}

module.exports = encodeBasic;

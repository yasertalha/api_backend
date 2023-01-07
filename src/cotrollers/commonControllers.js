const isFieldsValid = (...fields) => {
  let isvalid = true;
  fields.forEach((field) => {
    if (!field) isvalid = false;
  });
  return isvalid;
};

const newUserId = () => {
  //uuidv4  // replace with crypto.randomUUID()   or window.crypto.randomUUID()
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

module.exports = { isFieldsValid, newUserId };

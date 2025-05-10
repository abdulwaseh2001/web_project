const Log = require('../models/Log'); // ✅ Add this line

module.exports = async function logger(action, userEmail) {
  try {
    await Log.create({
      action,
      userEmail,
      timestamp: new Date()
    });
  } catch (err) {
    console.error("Logging failed:", err.message);
  }
};

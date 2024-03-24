module.exports = {
  config: {
    name: "iloveyou",
    aliases: ["morning", "greetings"],
    author: "Hassan-",
    version: 1.0,
    role: 0,
    shortDescription: {
      en: "Says i love you  to the user."
    },
    longDescription: {
      en: "Responds with a greeting to the user invoking the command."
    },
    category: "general",
    guide: {
      en: "Just use the command and the bot will greet you!"
    }
  },
  event: null,
  onStart: async function ({ api, event }) {
    api.sendMessage("love you💐💋?", event.threadID);
  },
  onChat: async function ({ event, message }) {
    if (event.body && (event.body.toLowerCase() === "i love you" || event.body.toLowerCase() === "love you")) {
      message.reply("i love you to baby💐💋");
    }
  }
};

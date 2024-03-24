module.exports = {
  config: {
    name: "sukuna",
    aliases: ["morning", "greetings"],
    author: "Kshitiz-",
    version: 1.0,
    role: 0,
    shortDescription: {
      en: "Says sukuna  to the user."
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
    api.sendMessage("hey sukuna?", event.threadID);
  },
  onChat: async function ({ event, message }) {
    if (event.body && (event.body.toLowerCase() === "Sukuna" || event.body.toLowerCase() === "sukuna")) {
      message.reply("HELLO SENSEI HOW CAN I HELP YOU😻");
    }
  }
};

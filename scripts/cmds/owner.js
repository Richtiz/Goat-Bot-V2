const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐎𝐰𝐧𝐞𝐫'𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧'",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝐊𝐒𝐇𝐈𝐓𝐈𝐙',
      gender: '𝐌𝐚𝐥𝐞',
      hobbies : '𝐖𝐚𝐭𝐜𝐡𝐢𝐧𝐠 𝐚𝐧𝐢𝐦𝐞',
      facebookLink: 'https://www.facebook.com/profile.php?id=100075373879287',
    };

    const bold = 'https://i.imgur.com/jlR2rD0.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧:🧾
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Hobbies: ${ownerInfo.hobbies}
Facebook: ${ownerInfo.facebookLink}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};

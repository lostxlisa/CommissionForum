const axios = require("axios");

async function sendToDiscord(data) {
  const embed = {
    title: "New Commission Request",
    color: 0x9740e6,
    fields: [
      {
        name: "Email",
        value: data.Email || data.email || "N/A",
        inline: true
      },
      {
        name: "Phone Number",
        value: data.PhoneNumber || data.phoneNumber || "N/A",
        inline: true
      },
      {
        name: "Commission Type",
        value: data.CommissionType || data.commissionType || "N/A",
        inline: false
      },
      {
        name: "Commission Details",
        value: data.CommissionDetails || data.commissionDetails || "N/A",
        inline: false
      },
      {
        name: "Mention",
        value: `<@1142670865746628629>`,
        inline: false
      }
    ],
    timestamp: new Date()
  };

  const payload = {
    content: `<@1142670865746628629>`,
    embeds: [embed]
  };

  try {
    await axios.post(process.env.DISCORD_WEBHOOK_URL, payload);
    console.log("Sent to Discord!");
  } catch (err) {
    console.error("Discord webhook error:", err.message);
    throw err;
  }
}

module.exports = sendToDiscord;
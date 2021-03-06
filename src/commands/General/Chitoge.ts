/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "elaina",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}elaina`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/7iEFLDDGQbMAAAPo/majo-no-tabitabi-the-journey-of-elaina.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `š *Elaina* š\n\nš *Description: A WhatsApp Bot developed by *Ronen* With Rich Anime features based on Elaina.*\n\nš *OFFICIAL BOT URL:https://github.com/Ronen6999/Elainabot.git* \n\n š *Guide:https://github.com/Ronen6999/Elainabot.git* \n\n š¾ *BOT URL:https://github.com/Ronen6999/Elainabot.git* \n`,
			}
		);
	};
}

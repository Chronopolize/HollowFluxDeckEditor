
const cardRepo = [
	{}, //0-index is empty
 {
   "id": 1,
   "type": "C",
   "cost": 1,
   "name": "王女の懐刀 リル",
   "attributes": "亜人",
   "desc": "When this card attacks, take 1 damage, then you may loot 1.",
   "power": "1000"
 },
 {
   "id": 2,
   "type": "C",
   "cost": 1,
   "name": "リゼリア・エーデルハイト",
   "attributes": "人間",
   "desc": "Can't attack. If hand size 2 or less, draw a card\n[2S] : Scry 1",
   "power": "1000"
 },
 {
   "id": 3,
   "type": "C",
   "cost": 1,
   "name": "ポータリア",
   "attributes": "人間",
   "desc": "Can't attack. FF: You may exchange a card from your hand with a card in your energy field.\nWhen this card is destroyed, you may put it on the top or bottom of it's owner's deck.",
   "power": "1000"
 },
 {
   "id": 4,
   "type": "C",
   "cost": 1,
   "name": "オラシオン・クリスティアーズ",
   "attributes": "人間・始原織",
   "desc": "Can't attack. While in play, give all your other characters +1000\nDT[2]: ramp",
   "power": "500"
 },
 {
   "id": 5,
   "type": "Cmd",
   "cost": 1,
   "name": "従順",
   "attributes": "始原織",
   "desc": "Sleep and deal 2k damage to an active allied character: reactivate another character",
   "power": "/"
 },
 {
   "id": 6,
   "type": "Cmd",
   "cost": 1,
   "name": "快楽の囁き",
   "attributes": "発現者",
   "desc": "Name a card. Target player reveals their hand and discards all cards with that name.",
   "power": "/"
 },
 {
   "id": 7,
   "type": "Cmd",
   "cost": 1,
   "name": "幻影",
   "attributes": "発現者",
   "desc": "Sleep target character. \nDT [1]: Target player discards a card.",
   "power": "/"
 },
 {
   "id": 8,
   "type": "C",
   "cost": 2,
   "name": "東岸唯理",
   "attributes": "人間・発現者",
   "desc": "FF: Look at target player's hand",
   "power": "3000"
 },
 {
   "id": 9,
   "type": "C",
   "cost": 2,
   "name": "天上静音",
   "attributes": "人間・発現者",
   "desc": "Retaliate (When this character successful blocks, when damage is dealt, this character does damage equal to it's power to the attacking character)\nWhenever this character blocks, it gains +2000 until EoT",
   "power": "2000"
 },
 {
   "id": 10,
   "type": "C",
   "cost": 2,
   "name": "”オリジン”アイオン",
   "attributes": "電子精神",
   "desc": "[3S]: Return an allied character to your hand, then untap up to X energy, where X is that card's original cost.\nDT: Target character gains Deathless until EoT.",
   "power": "1000"
 },
 {
   "id": 11,
   "type": "C",
   "cost": 2,
   "name": "等活者　アリヤ",
   "attributes": "論霊・始原織",
   "desc": "[1S]: Give this character +1000 until EoT\n[1+Unsleep]: Give this character +1000 and \"can't attack\" until EoT. ",
   "power": "2500"
 },
 {
   "id": 12,
   "type": "C",
   "cost": 2,
   "name": "天涯者 オーロラ",
   "attributes": "論霊・始原織",
   "desc": "This character can't be blocked by followers with higher power than it.\n[1]: This character cannot be the target of command cards until EoT.",
   "power": "1000"
 },
 {
   "id": 13,
   "type": "C",
   "cost": 2,
   "name": "イニスタリア王女",
   "attributes": "人間",
   "desc": "Whenever this character attacks, attach the top card of your deck face down onto this card as the following set card: 剣 Cost 1, +1000.\nIf this card is being enchanted by 3 or more cards, it gains Piercing.",
   "power": "1500"
 },
 {
   "id": 14,
   "type": "C",
   "cost": 2,
   "name": "サーシャ・フレイナート",
   "attributes": "人間・始原織",
   "desc": "FF: You may return a command card from your trash to your hand\nDT: Look at the top card of your main deck. You may choose to leave it or put it in the trash.",
   "power": "2500"
 },
 {
   "id": 15,
   "type": "C",
   "cost": 2,
   "name": "錬金義肢使いベアトリス",
   "attributes": "人間・機械",
   "desc": "Retaliate.\n[1]: Reactivate this card. This ability can only be used on the opponent's turn.\nDT: Give target character +2000 until EoT",
   "power": "2500"
 },
 {
   "id": 16,
   "type": "Cmd",
   "cost": 2,
   "name": "発火",
   "attributes": "発現者",
   "desc": "Deal 4000 damage to target character\nDT: Deal 1000 damage to target character",
   "power": "/"
 },
 {
   "id": 17,
   "type": "Cmd",
   "cost": 2,
   "name": "戦帝の剣閃",
   "attributes": "特異存在",
   "desc": "Give target character -4000 until EoT",
   "power": "/"
 },
 {
   "id": 18,
   "type": "Cmd",
   "cost": 3,
   "name": "スペルフォーカス",
   "attributes": "魔術",
   "desc": "Draw two cards, then ramp using a card from your hand.\nDT: Untap 1 energy",
   "power": "/"
 },
 {
   "id": 19,
   "type": "S",
   "cost": 3,
   "name": "鋼鉄の長剣",
   "attributes": "装備",
   "desc": "On set: Draw a card.\nDT: Give target character +2000 until EoT",
   "power": "1000"
 },
 {
   "id": 20,
   "type": "S",
   "cost": 3,
   "name": "炎熱の聖健",
   "attributes": "装備",
   "desc": "On set: You may deal 2000 damage to target character.\nWhen the set character attacks, you may deal 1000 damage to target character",
   "power": "1000"
 },
 {
   "id": 21,
   "type": "C",
   "cost": 3,
   "name": "高嶺星生",
   "attributes": "人間・発現者",
   "desc": "FF: you may ramp 1\nWhen this character is destroyed, you may untap up to 2 energy.\nDT: You may pay X. If you do, search your main deck for a cost X character card with 発現者 and place it on the battlefield, active. ",
   "power": "1000"
 },
 {
   "id": 22,
   "type": "C",
   "cost": 3,
   "name": "イオニア・レフトロード",
   "attributes": "人間・始原織",
   "desc": "FF: you may sleep target character\nThis character gains +1000 for every other slept character on the battlefield.\nWhile this character's power is 10000 or more, it gains Sunder.",
   "power": "3000"
 },
 {
   "id": 23,
   "type": "C",
   "cost": 3,
   "name": "拝火者クルティカ",
   "attributes": "論霊・始原織",
   "desc": "FF: You may deal 2000 to target character\n[S]: Deal 2000 damage to target character",
   "power": "2000"
 },
 {
   "id": 24,
   "type": "C",
   "cost": 3,
   "name": "プロトタイプ・デュなミス",
   "attributes": "論霊・特異存在",
   "desc": "FF: For every player, you may select a card in their trash and removal it from the game",
   "power": "3500"
 },
 {
   "id": 25,
   "type": "C",
   "cost": 3,
   "name": "メリアベル・サンダークロス",
   "attributes": "人間・始原織",
   "desc": "Vigilance\nAs long as this character is on the battlefield, it is immune to instances of damage less than 3500.\nDT: Give an target character +2000 until EoT.",
   "power": "3500"
 },
 {
   "id": 26,
   "type": "C",
   "cost": 3,
   "name": "シャノアール 彩雲彼岸",
   "attributes": "人間・特異能力",
   "desc": "When one or more characters receives damage, their controllers set the top card of their main deck face-down onto each of the characters, in the order of their choice, or until they run out of main deck cards to set. The set card is treated as \"汚染 Cost 1, 特異能力、Power Mod. -1000\"\n[Carnage 1]: Deal 1000 damage to all other characters",
   "power": "3000"
 },
 {
   "id": 27,
   "type": "C",
   "cost": 3,
   "name": "水精霊 シャリエ",
   "attributes": "幻想生命",
   "desc": "FF: You may ramp 1\n[3S]: Return a slept character to it's owner's hand.\nDT [2]: Ramp 1",
   "power": "2500"
 },
 {
   "id": 28,
   "type": "Cmd",
   "cost": 3,
   "name": "観測",
   "attributes": "発現者",
   "desc": "Look at target player's hand, then draw 2 cards.\nDT: Look at target player's hand",
   "power": "/"
 },
 {
   "id": 29,
   "type": "Cmd",
   "cost": 3,
   "name": "治療",
   "attributes": "発現者",
   "desc": "Draw a card, then place a card from your hand into your guard deck. Remove this card from the game.",
   "power": "/"
 },
 {
   "id": 30,
   "type": "Cmd",
   "cost": 3,
   "name": "否定世界",
   "attributes": "発現者",
   "desc": "Counter target command card that is being played (a countered card is placed in the trash and its effects not resolved)",
   "power": "/"
 },
 {
   "id": 31,
   "type": "Cmd",
   "cost": 3,
   "name": "聖女の抱擁",
   "attributes": "始原織",
   "desc": "Reactivate target character, and give it +5000 until EoT\nDT: give a target character +2000 until EoT",
   "power": "/"
 },
 {
   "id": 32,
   "type": "Cmd",
   "cost": 3,
   "name": "火炎の掃討",
   "attributes": "始原織",
   "desc": "Deal 2500 to all characters.\nDT: Deal 1000 damage to target character",
   "power": "/"
 },
 {
   "id": 33,
   "type": "Cmd",
   "cost": 3,
   "name": "東の間の共闘",
   "attributes": "",
   "desc": "Sleep target active character you control: Search your main deck for a character card with the same cost and place it active on the battlefield. At the end of your turn, if the that character card is on the battlefield, return it to your hand.",
   "power": "/"
 },
 {
   "id": 34,
   "type": "S",
   "cost": 3,
   "name": "聖剣 ドミネイター",
   "attributes": "装備",
   "desc": "Vigilance\nAs long as this character is active, whenever a character enters the battlefield, you may pay 1. If you do, sleep that character.\nDT: Sleep target character",
   "power": "2000"
 },
 {
   "id": 35,
   "type": "C",
   "cost": 4,
   "name": "佐咲煌花",
   "attributes": "人間・発現者",
   "desc": "FF: Look at target player's hand and force them to discard a card.\n[XS]: Do target active cost X character's power in damage to another target character.",
   "power": "2500"
 },
 {
   "id": 36,
   "type": "C",
   "cost": 4,
   "name": "神了光騎",
   "attributes": "人間・発現者",
   "desc": "FF: You may do 1000 damage to all other characters\nWhen this character is destroyed, you may suffer 1 damage. If you do, deal 1 damage to target player.",
   "power": "4000"
 },
 {
   "id": 37,
   "type": "C",
   "cost": 4,
   "name": "イニスタリア・エーデルハイト",
   "attributes": "特異存在",
   "desc": "FF: You may search your card for an [Equipment] card that contains 剣 in it's name and set it on this character.\n[Discard a card]: Give a target character -1000 until EoT",
   "power": "3000"
 },
 {
   "id": 38,
   "type": "C",
   "cost": 4,
   "name": "”万象練達” エルティア",
   "attributes": "人間・始原織",
   "desc": "As long as this character is on the battlefield, all of your characters with an attached set card get +1000.\n[S]: Set the top card of your deck onto target character as \"錬成武器　cost 1 装備, Mod: +1000\"",
   "power": "4000"
 },
 {
   "id": 39,
   "type": "Cmd",
   "cost": 4,
   "name": "メンタルブレード：破",
   "attributes": "人間・発現者",
   "desc": "Destroy target character",
   "power": "/"
 },
 {
   "id": 40,
   "type": "Cmd",
   "cost": 4,
   "name": "拒絶",
   "attributes": "発現者",
   "desc": "Counter target card that is being played\nDT: give target follower -1000 until EoT",
   "power": "/"
 },
 {
   "id": 41,
   "type": "Cmd",
   "cost": 4,
   "name": "共振",
   "attributes": "発現者",
   "desc": "Search your main deck for up to two [発現者] character or command cards, reveal them and add them to your hand.",
   "power": "/"
 },
 {
   "id": 42,
   "type": "C",
   "cost": 5,
   "name": "高嶺優利",
   "attributes": "人間・発現者",
   "desc": "FF: You may recover 1 hp (place the top card of your main deck in your guard deck)\n[1S]: Target character is immune to damage until EoT",
   "power": "4500"
 },
 {
   "id": 43,
   "type": "C",
   "cost": 5,
   "name": "破星者 メテオライト",
   "attributes": "論霊・始原織",
   "desc": "Vigilance\n[S]: Set the top card of your main deck onto this as \"チャージ Cost:1 始原識 Mod: +1000\"\n[Trash four set cards attached to this card]: Deal 1 damage to target player and 6000 damage to all characters they control.",
   "power": "5000"
 },
 {
   "id": 44,
   "type": "C",
   "cost": 5,
   "name": "東岸弥月",
   "attributes": "人間・始原織",
   "desc": "Piercing. As long as this card is on the battlefield, it can attack active characters as well.\nWhenever this character attacks, it gains +5000 until EoT. Additionally, if this follower does damage via attacking to another character, destroy the other character (Piercing still applies).",
   "power": "5000"
 },
 {
   "id": 45,
   "type": "C",
   "cost": 5,
   "name": "ヴォルフガング・ブレイドワース",
   "attributes": "人間・始原織",
   "desc": "Vigilance. Piercing. \nIf this character would take more than 4000 damage at once, it takes 4000 damage instead.\nAs long as this card is on the battlefield, it's controller can not be altered. (Ie. immune to mind-control)",
   "power": "5000"
 },
 {
   "id": 46,
   "type": "C",
   "cost": 5,
   "name": "吸血魔 フィラデルフィア",
   "attributes": "亜人",
   "desc": "FF: Suffer 1 damage\nWhenever this character deals attack damage to a player, you may recover 1 hp (place the top card of your deck into your guard deck)\nAt the end of your active phase, sleep target character.",
   "power": "5500"
 },
 {
   "id": 47,
   "type": "Cmd",
   "cost": 5,
   "name": "メビウスハート",
   "attributes": "魔術",
   "desc": "Deal 5000 damage to target character. Then sleep all your opponent's characters.",
   "power": "/"
 },
 {
   "id": 48,
   "type": "C",
   "cost": 6,
   "name": "克肖者 デュナミス",
   "attributes": "理霊・特異存在",
   "desc": "[Remove two cards in your trash from the game]: Deal X*1000 damage to target character, where X is the number of your cards removed from the game. Only use this ability once per turn.\n[3S]: Put one of your cards, costing 7 or less, removed from the game, into your hand.",
   "power": "6500"
 },
 {
   "id": 49,
   "type": "C",
   "cost": 6,
   "name": "インファル・クリムゾニア",
   "attributes": "人間・始原織",
   "desc": "Piercing. FF: destroy all enemy character which have taken damage\nWhenever this character attacks, you may deal 2000 damage to target character. If that character is slept, you may deal choose to deal 4000 instead.\nDT: Do 1000 damage to target character.",
   "power": "6000"
 },
 {
   "id": 50,
   "type": "C",
   "cost": 6,
   "name": "ルア・リヴィエール",
   "attributes": "亜人・始原織",
   "desc": "Vigilance. FF: remove all damage from all your characters. Give all allied followers immunity to damage until EoT.\nWhenever this character blocks, you may sleep target character.\nDT: sleep target character.",
   "power": "6000"
 },
 {
   "id": 51,
   "type": "C",
   "cost": 6,
   "name": "破滅への意思",
   "attributes": "発現者",
   "desc": "Shuffle all [発現者] characters from your trash into your main deck. Then target player mills X cards. X is the number of cards you shuffled into your deck earlier, to a maximum of that player's main deck size.",
   "power": "/"
 },
 {
   "id": 52,
   "type": "C",
   "cost": 7,
   "name": "オリジンユーフォリア",
   "attributes": "電子精神",
   "desc": "When this character enters the battlefield or attacks, you may ramp 1.\n[1S]: Do X*1000 damage to target character, where X is the # of energy cards you control\nDT[2]: ramp 1",
   "power": "7000"
 },
 {
   "id": 53,
   "type": "C",
   "cost": 7,
   "name": "意識零霞",
   "attributes": "人間・特異能力",
   "desc": "Retaliate. This character can block attacks against your [理霊] characters even while slept. \nWhen this character is destroyed, give all enemy characters -5000 (permanently)\nDT: Give target character -1000",
   "power": "7500"
 },
 {
   "id": 54,
   "type": "C",
   "cost": 7,
   "name": "神領神奈",
   "attributes": "人間",
   "desc": "FF: Deal 1 damage to target player.\n As long as you have 0 cards in hand, this card has Vigilance. \n [Discard a card]: This gains Sunder and Retaliate. Only use this ability once per turn.",
   "power": "7500"
 },
 {
   "id": 55,
   "type": "Cmd",
   "cost": 7,
   "name": "レイ・オブ・ヴァーミリオン",
   "attributes": "発現者",
   "desc": "Only play this card on your turn.\nDeal 7000 damage to all enemy characters. Remove this card from the game.",
   "power": "/"
 },
 {
   "id": 56,
   "type": "Cmd",
   "cost": 7,
   "name": "崇敬",
   "attributes": "始原織",
   "desc": "Gain control of target character until it leaves the battlefield.",
   "power": "/"
 },
 {
   "id": 57,
   "type": "C",
   "cost": 8,
   "name": "プルミエール",
   "attributes": "発現者",
   "desc": "FF: You may destroy target character\nWhen this character is moved to the trash from play, you may destroy target allied character. If you do so, move this card from your trash to your hand.\n[DT]: You may search your guard deck and main deck for a card with the same name, reveal it, and add it to your hand",
   "power": "8500"
 },
 {
   "id": 58,
   "type": "C",
   "cost": 8,
   "name": "アカシア",
   "attributes": "発現者",
   "desc": "FF: Destroy all [人間] non-[発現者] characters.\n[Carnage 1]: This gains Deathless until EoT.\n[Carnage 2]: Search your main deck and guard deck for a [発現者] Command card, reveal it and add it to your hand. Untap up to 4 energy.",
   "power": "8000"
 },
 {
   "id": 59,
   "type": "C",
   "cost": 8,
   "name": "神の守護者 ツルギ",
   "attributes": "特異存在",
   "desc": "FF: Search your main deck and guard deck for up to 7 [Equipment] set cards with \"剣\" in their name, reveal them, and attach them to this.\n[Carnage 1]: Trash one set card attached to this character. If you did, give target character +4000 and -4000, and additionally this card cannot be targeted by command cards until EoT.",
   "power": "3000"
 },
 {
   "id": 60,
   "type": "Cmd",
   "cost": 10,
   "name": "メンタルブレード：奪",
   "attributes": "発現者",
   "desc": "This card can only be played on your turn.\nTake an extra turn after this one.",
   "power": "/"
 },
 {
   "id": 61,
   "type": "C",
   "cost": 2,
   "name": "ラトレイア王国剣士",
   "attributes": "人間",
   "desc": "Vigilance (Reactivate this character at the end of your opponent's active phase)\n",
   "power": "2500"
 },
 {
   "id": 62,
   "type": "C",
   "cost": 2,
   "name": "梁井芳乃",
   "attributes": "人間・魔術",
   "desc": "FF: Clear all damage off target character, and give it immune to damage until EoT.",
   "power": "500"
 },
 {
   "id": 63,
   "type": "C",
   "cost": 3,
   "name": "主なき実験体",
   "attributes": "論霊",
   "desc": "Piercing",
   "power": "3500"
 },
 {
   "id": 64,
   "type": "C",
   "cost": 4,
   "name": "アリスティア・バイデルベルブ",
   "attributes": "人間・魔術",
   "desc": "As long as this character card is on the battlefield, all your characters gain +1000.\n[1S]: Give target character +2000 until end of turn. and \"can't be targeted by activatable abilities\"",
   "power": "4000"
 },
 {
   "id": 65,
   "type": "C",
   "cost": 4,
   "name": "魔術学会の炎熱使い",
   "attributes": "人間・魔術",
   "desc": "FF: You may deal 2000 damage to target character\nDT: Deal 1000 damage to target character",
   "power": "4000"
 },
 {
   "id": 66,
   "type": "C",
   "cost": 5,
   "name": "アマリア・シュロスシュタット",
   "attributes": "人間・魔術",
   "desc": "Piercing\nWhenever an opponent would put a card from their guard deck to  their damage field, it goes to their trash instead. (The card's DT cannot be used)\n[Carnage 2]: This gains Sunder until EoT.\n[Carange 3]: Deal 1 damage to target player.\n",
   "power": "5500"
 },
 {
   "id": 67,
   "type": "C",
   "cost": 5,
   "name": "教団の魔術師",
   "attributes": "人間・魔術",
   "desc": "Retaliate.",
   "power": "5500"
 },
 {
   "id": 68,
   "type": "C",
   "cost": 6,
   "name": "竜族の破壊者",
   "attributes": "亜人",
   "desc": "FF: You may deal 7000 damage to a target character.  If you do so, sleep this character.",
   "power": "7000"
 },
 {
   "id": 69,
   "type": "Cmd",
   "cost": 2,
   "name": "魔術教団",
   "attributes": "魔術",
   "desc": "You may move a [魔術] card from your trash to your hand, or instead, you may search your deck for a [魔術] card, reveal it, then add it to your hand.",
   "power": "/"
 },
 {
   "id": 70,
   "type": "C",
   "cost": 2,
   "name": "高坂真司",
   "attributes": "人間・発現者",
   "desc": "As long as this character remains in play, when an allied character deals non-combat damage, or your character card (outside play), command card, or set card does damage, increase that damage by 1000.\nDT: deal 1000 damage to target character",
   "power": "2500"
 },
 {
   "id": 71,
   "type": "C",
   "cost": 3,
   "name": "休日のネコミミメイド 煌華",
   "attributes": "人間・発現者",
   "desc": "FF: You may deal X*500 damage to a character. X is the number of characters on the battlefield.\n[S]: Target player with over 5 cards in their hand, discards a card.\nDT: Sleep target character",
   "power": "2500"
 },
 {
   "id": 72,
   "type": "C",
   "cost": 3,
   "name": "リー・フェイレン",
   "attributes": "人間・魔術",
   "desc": "As long as this card is in play, this character cannot be blocked.\n[Discard a card from your hand]: This gains +1000 and is immune to attack damage until EoT.\nDT: Give target character -1000 until EoT",
   "power": "3000"
 },
 {
   "id": 73,
   "type": "C",
   "cost": 4,
   "name": "ニコラ・ウィンスレット",
   "attributes": "人間・魔術",
   "desc": "As long as this character is in play, you may play command cards from any player's trash as if they were in your hand. When such a card is played and goes to its owner's trash, remove it from the game instead.",
   "power": "4000"
 },
 {
   "id": 74,
   "type": "C",
   "cost": 4,
   "name": "見習い魔女 ルルナ",
   "attributes": "人間・魔術",
   "desc": "FF: You may search your main deck for a [魔術] card, reveal it, and add it to your hand.\n[S]: Untap up to two energy",
   "power": "4000"
 },
 {
   "id": 75,
   "type": "C",
   "cost": 10,
   "name": "リゼリット・エーデルハイト",
   "attributes": "イデアル",
   "desc": "Whenever this character card becomes the target of an opponent's command card or activated character ability, you may remove target character from the game.\n(This ability applies even outside of play.)\nWhen this character deals attacking damage to a player, that player removes their guard deck and hand from the game.\n[Carnage 5]: Remove all other characters from the game.",
   "power": "20000"
 },
 {
   "id": 76,
   "type": "Cmd",
   "cost": 1,
   "name": "集中",
   "attributes": "魔術",
   "desc": "Draw 2 cards, then place a card from your hand at the bottom of your deck.\nDT: Draw a card, then place a card from your hand at the bottom of your deck.",
   "power": "/"
 },
 {
   "id": 77,
   "type": "Cmd",
   "cost": 2,
   "name": "雑念排除",
   "attributes": "魔術",
   "desc": "You cannot play this card If you've already played a card named \"雑念排除\" this turn.\nUntap up to 3 energy. Remove this card from the game.\nDT: Untap 1 energy.",
   "power": "/"
 },
 {
   "id": 78,
   "type": "Cmd",
   "cost": 3,
   "name": "霧散の水流",
   "attributes": "魔術・始原織",
   "desc": "FF: Sleep the attached character card.\nAs long as this character is in play, it cannot use activatable abilities, and it does not reactivate during active phases.\n",
   "power": "/"
 },
 {
   "id": 79,
   "type": "C",
   "cost": 3,
   "name": "”文明回帰” プリムラ・アニマ",
   "attributes": "人間・魔術",
   "desc": "FF: Place the top of your deck face-down in play, treating it the following character card: \"憑依体\" cost:1 [動物] Power:1000\"\n[Destroy an allied [動物] character]: This character is immune to damage until EoT.",
   "power": "2000"
 },
 {
   "id": 80,
   "type": "C",
   "cost": 4,
   "name": "アイネス・クレアリス",
   "attributes": "人間・機械",
   "desc": "As long as this character is in play, it is immune to non-attack damage from cards with cost 3 or less.\n[1]: Gain +1000 and \"this cannot be blocked\" until EoT.",
   "power": "4500"
 },
 {
   "id": 81,
   "type": "C",
   "cost": 6,
   "name": "”救世聖天” 定理",
   "attributes": "特異存在",
   "desc": "FF: You may put a [人間] character from your trash into play, slept.\nAs long as this character is in play, all allied [人間] characters get +1000.",
   "power": "2500"
 },
 {
   "id": 82,
   "type": "C",
   "cost": 7,
   "name": "エレア・フランベルジュ",
   "attributes": "人間・干渉者",
   "desc": "Vigilance\nWhenever this character becomes the target of a command card or set card, counter that card unless it's caster pays 2.\n[Carnage 3]: Place this card in your guard deck: If you do, search your guard deck for a card named \"エレア：メタモルフォーゼ\" and summon it, active.",
   "power": "7500"
 },
 {
   "id": 83,
   "type": "C",
   "cost": 9,
   "name": "エレア：メタモルフォーゼ",
   "attributes": "人間・干渉者",
   "desc": "(This card cannot be played, and can only enter the battlefield from your guard deck.)\nVigilance. Sunder.\nAs long as this character remains in play, all your characters get +3000, and all enemy characters get -3000.",
   "power": "7500"
 },
 {
   "id": 84,
   "type": "Cmd",
   "cost": 1,
   "name": "システム：アカシア・リロード",
   "attributes": "発現者",
   "desc": "Put a [発現者] card from your trash into your hand.\nDT: Target character gains Deathless until EoT.",
   "power": "/"
 },
 {
   "id": 85,
   "type": "Cmd",
   "cost": 2,
   "name": "時間逆転",
   "attributes": "電子精神",
   "desc": "Return target character or set card to it's owner's hand\n[DT:] You may pay 4. If you do, put target character on the top of it's owner's main deck.",
   "power": "/"
 },
 {
   "id": 86,
   "type": "S",
   "cost": 1,
   "name": "携行マイクロミサイル",
   "attributes": "装備",
   "desc": "Retaliate.\nWhen this character becomes active outside of it's owner's active phase, you may do 2000 damage to target character.",
   "power": "0"
 },
 {
   "id": 87,
   "type": "S",
   "cost": 2,
   "name": "光剣 魅天零式",
   "attributes": "装備",
   "desc": "Piercing\nDT[2]: Set this card on a character. You may place the top card of your deck in your guard deck, face up.",
   "power": "1500"
 },
 {
   "id": 88,
   "type": "C",
   "cost": 1,
   "name": "激励する聖女 オラシオン",
   "attributes": "人間・始原織",
   "desc": "This character cannot attack.\nFF: Give target character +3000 until EoT.\nSleep: Give give +1000 to all other allied characters until EoT.",
   "power": "500"
 },
 {
   "id": 89,
   "type": "C",
   "cost": 2,
   "name": "西ノ条麗亜",
   "attributes": "人間・干渉者",
   "desc": "When you play a set card, reduce its energy cost by 1, to a minimum of 0.\n[Carnage 2]: Search your main deck and guard deck for a set card, reveal it, and put it in your hand.  Then do x*2000 damage to target character, where X is the cost of that set card.",
   "power": "2000"
 },
 {
   "id": 90,
   "type": "C",
   "cost": 3,
   "name": "マリー・フランシール",
   "attributes": "人間・魔術",
   "desc": "Retaliate\nWhenever an allied character destroys an enemy follower via Retaliate, do 1 damage to the opponent and draw a card.\n[Discard 2 cards]: Until end of turn, the next time you play a card with [魔術], reduce it's cost by 2, to a minimum of 0. Only use this ability once a turn.",
   "power": "3000"
 },
 {
   "id": 91,
   "type": "C",
   "cost": 5,
   "name": "王立アカデミーの学徒 インフィル",
   "attributes": "人間・干渉者",
   "desc": "Whenever you play a character card, reduce it's cost by X, to a minimum of, where X is the number of allied set cards in play.\nWhenever an allied set card becomes attached to a character, draw a card. You may also deal 3000 damage to target character. (If multiple cards become attached at once, this ability only triggers once)",
   "power": "4000"
 },
 {
   "id": 92,
   "type": "C",
   "cost": 7,
   "name": "王立アカデミーの学徒 ルア",
   "attributes": "人間・魔術",
   "desc": "FF: You may trash one of the opponent's energy cards. If you do, ramp 1 and sleep this character.\n[2S]: Sleep target character",
   "power": "4000"
 },
 {
   "id": 93,
   "type": "C",
   "cost": 7,
   "name": "東岸定理",
   "attributes": "特異存在",
   "desc": "FF: If this character entered play from outside of the game, look at the top 3 cards of your deck. You play place any number of them in your damage field.\nThis character cannot be blocked.\n[Carnage 1]: Remove this card from the game. At the end of the turn, ",
   "power": "7000"
 },
 {
   "id": 94,
   "type": "Cmd",
   "cost": 2,
   "name": "虚空の真髄",
   "attributes": "特異能力",
   "desc": "Suffer 1 damage, then gain 1 carnage (place the top card of your deck face up in your damage field).\nDT: Remove 5 cards in your trash from teh game. If you do that, gain 1 carnage.",
   "power": ""
 },
 {
   "id": 95,
   "type": "Cmd",
   "cost": 3,
   "name": "閃光の突破",
   "attributes": "魔術",
   "desc": "Deal 5000 damage to target character or 1 damage to target player\nDT[1]: Target player loses 1 carnage (They choose and put a card from their damage field into the trash).",
   "power": ""
 },
 {
   "id": 96,
   "type": "Cmd",
   "cost": 3,
   "name": "剣の敬愛",
   "attributes": "始原織",
   "desc": "When you play this, you may reveal X cards from your hand and place them on the bottom on your deck, to reduce the cost of this card by X, to a minimum of 0.\nYou may search your main deck and guard deck and trash for a [装備] set card with ”剣\" in its name and reveal it. If you do, set it onto target character, and shuffle your deck.",
   "power": ""
 },
 {
   "id": 97,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 98,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 99,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 100,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 101,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 102,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 103,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 104,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 105,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 106,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 107,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 108,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 109,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 110,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 111,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 112,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 113,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 114,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 115,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 116,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 117,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 118,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 119,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 120,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 121,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 122,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 123,
   "type": "",
   "cost": null,
   "name": "",
   "attributes": "",
   "desc": "",
   "power": ""
 },
 {
   "id": 124,
   "type": "C",
   "cost": 2,
   "name": "\"魔族\"",
   "attributes": "",
   "desc": "Whenever this character attacks or blocks, set the top card of your deck face down onto this as  \"Malignant tumor: -1000 Cost 1\".\nDT[2]: Destroy target character with power 2500 or less.",
   "power": "500"
 },
 {
   "id": 125,
   "type": "",
   "cost": 3,
   "name": "四条五花",
   "attributes": "",
   "desc": "As long as this character is on the field, all other allied human characters get +1000, and characters you control lose any ability which says \"This character cannot attack.\"\nDT: look at at target player's hand.",
   "power": "3000"
 },
 {
   "id": 126,
   "type": "",
   "cost": 4,
   "name": "時の管理者 アイオン",
   "attributes": "",
   "desc": "Hypersonic (Cannot be blocked except by characters with Hypersonic)\nFF: You may return  target allied character to your hand. If you do so, untap up to X energy, where X is the cost of the returned card.",
   "power": "4000"
 },
 {
   "id": 127,
   "type": "",
   "cost": 5,
   "name": "命を呪う者 まつつ結姫神",
   "attributes": "",
   "desc": "When another allied character is destroyed, put it on the top of it's owner's deck instead.\nAs long as you have 3 or more face up character cards in your damage field, this gets +2000 and Sunder.\n[Destroy another allied character]: Give -1000 to target character.",
   "power": "5000"
 },
 {
   "id": 128,
   "type": "",
   "cost": 6,
   "name": "魔王習い 星生",
   "attributes": "",
   "desc": "FF: Reveal a card from your guard deck. If it's a [発現者] card not named \"魔王習い 星生\" and costs equal or less than your current guard deck size, place it in play, slept. Otherwise, place it in your hand and untap up to X energy, where X is that card's cost.",
   "power": "4000"
 },
 {
   "id": 129,
   "type": "",
   "cost": 8,
   "name": "一意零",
   "attributes": "",
   "desc": "FF and when destroyed: Target player exiles the top 3 cards of their main deck.\n[Carnage 2]: Destroy target character with X or less power. If succeeded, draw a card. X is total number of cards in exile.\nDT: Target player exiles the top card from their deck",
   "power": "8500"
 },
 {
   "id": 130,
   "type": "Cmd",
   "cost": 2,
   "name": "論理武装 命弾",
   "attributes": "",
   "desc": "Choose a target allied and enemy character. Deal damage equal to the former's power to the latter, and deal 1 damage to latter's controller. Then, destroy the former.",
   "power": ""
 },
 {
   "id": 131,
   "type": "Cmd",
   "cost": 2,
   "name": "天の花",
   "attributes": "",
   "desc": "You may return a character from your trash to your hand.\nDT[2]: You may return a character card from your trash to your hand.",
   "power": ""
 },
 {
   "id": 132,
   "type": "Cmd",
   "cost": 6,
   "name": "イグニッション、ヘリッシュ・ガンバレル",
   "attributes": "",
   "desc": "[Secret Arts: インフィル]\nDeal 10000 damage to all non-human cards who do not have 「ルア」 in their name\nDT[3]: Deal 4000 damage to target character.",
   "power": ""
 }
]
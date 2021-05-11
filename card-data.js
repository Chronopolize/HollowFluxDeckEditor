
const cardRepo = [
{}, //0-index is empty
 {
   "id": 1,
   "type": "C",
   "cost": 1,
   "name": "王女の懐刀　リル",
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
   "attributes": "人間・始原識",
   "desc": "Can't attack. While in play, give all your other characters +1000\nDT[2]: ramp",
   "power": "500"
 },
 {
   "id": 5,
   "type": "Cmd",
   "cost": 1,
   "name": "従順",
   "attributes": "始原識",
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
   "attributes": "理霊・始原識",
   "desc": "[1S]: Give this character +1000 until EoT\n[1+Unsleep]: Give this character +1000 and \"can't attack\" until EoT. ",
   "power": "2500"
 },
 {
   "id": 12,
   "type": "C",
   "cost": 2,
   "name": "天涯者　オーロラ",
   "attributes": "理霊・始原識",
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
   "attributes": "人間・始原識",
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
   "cost": 2,
   "name": "鋼鉄の長剣",
   "attributes": "装備",
   "desc": "On set: Draw a card.\nDT: Give target character +2000 until EoT",
   "power": "+1000"
 },
 {
   "id": 20,
   "type": "S",
   "cost": 2,
   "name": "炎熱の聖剣",
   "attributes": "装備",
   "desc": "On set: You may deal 2000 damage to target character.\nWhen the set character attacks, you may deal 1000 damage to target character",
   "power": "+1000"
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
   "attributes": "人間・始原識",
   "desc": "FF: you may sleep target character\nThis character gains +1000 for every other slept character on the battlefield.\nWhile this character's power is 10000 or more, it gains Sunder.",
   "power": "3000"
 },
 {
   "id": 23,
   "type": "C",
   "cost": 3,
   "name": "拝火者クルティカ",
   "attributes": "理霊・始原識",
   "desc": "FF: You may deal 2000 to target character\n[S]: Deal 2000 damage to target character",
   "power": "2000"
 },
 {
   "id": 24,
   "type": "C",
   "cost": 3,
   "name": "プロトタイプ・デュなミス",
   "attributes": "理霊・特異存在",
   "desc": "FF: For every player, you may select a card in their trash and remove it from the game",
   "power": "3500"
 },
 {
   "id": 25,
   "type": "C",
   "cost": 3,
   "name": "メリアベル・サンダークロス",
   "attributes": "人間・始原識",
   "desc": "Vigilance\nAs long as this character is on the battlefield, it is immune to instances of damage less than 3500.\nDT: Give an target character +2000 until EoT.",
   "power": "3500"
 },
 {
   "id": 26,
   "type": "C",
   "cost": 3,
   "name": "シャノアール　彩雲彼岸",
   "attributes": "人間・特異能力",
   "desc": "When one or more characters receives damage, their controllers set the top card of their main deck face-down onto each of the characters, in the order of their choice, or until they run out of main deck cards to set. The set card is treated as \"汚染 Cost 1, 特異能力、Power Mod. -1000\"\n[Carnage 1]: Deal 1000 damage to all other characters",
   "power": "3000"
 },
 {
   "id": 27,
   "type": "C",
   "cost": 3,
   "name": "水精霊　シャリエ",
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
   "attributes": "始原識",
   "desc": "Reactivate target character, and give it +5000 until EoT\nDT: give a target character +2000 until EoT",
   "power": "/"
 },
 {
   "id": 32,
   "type": "Cmd",
   "cost": 3,
   "name": "火炎の掃討",
   "attributes": "始原識",
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
   "name": "聖剣　ドミネイター",
   "attributes": "装備",
   "desc": "Vigilance\nAs long as this character is active, whenever a character enters the battlefield, you may pay 1. If you do, sleep that character.\nDT: Sleep target character",
   "power": "+2000"
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
   "name": "”万象練達” エルティア",
   "attributes": "人間・始原識",
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
   "name": "破星者　メテオライト",
   "attributes": "理霊・始原識",
   "desc": "Vigilance\n[S]: Set the top card of your main deck onto this as \"チャージ Cost:1 始原識 Mod: +1000\"\n[Trash four set cards attached to this card]: Deal 1 damage to target player and 6000 damage to all characters they control.",
   "power": "5000"
 },
 {
   "id": 44,
   "type": "C",
   "cost": 5,
   "name": "東岸弥月",
   "attributes": "人間・始原識",
   "desc": "Piercing. As long as this card is on the battlefield, it can attack active characters as well.\nWhenever this character attacks, it gains +5000 until EoT. Additionally, if this follower does damage via attacking to another character, destroy the other character (Piercing still applies).",
   "power": "5000"
 },
 {
   "id": 45,
   "type": "C",
   "cost": 5,
   "name": "ヴォルフガング・ブレイドワース",
   "attributes": "人間・始原識",
   "desc": "Vigilance. Piercing. \nIf this character would take more than 4000 damage at once, it takes 4000 damage instead.\nAs long as this card is on the battlefield, it's controller can not be altered. (Ie. immune to mind-control)",
   "power": "5000"
 },
 {
   "id": 46,
   "type": "C",
   "cost": 5,
   "name": "吸血魔　フィラデルフィア",
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
   "name": "克肖者 デュナミス",
   "attributes": "理霊・特異存在",
   "desc": "[Remove two cards in your trash from the game]: Deal X*1000 damage to target character, where X is the number of your cards removed from the game. Only use this ability once per turn.\n[3S]: Put one of your cards, costing 7 or less, removed from the game, into your hand.",
   "power": "6500"
 },
 {
   "id": 49,
   "type": "C",
   "cost": 6,
   "name": "インファル・クリムゾニア",
   "attributes": "人間・始原識",
   "desc": "Piercing. FF: destroy all enemy character which have taken damage\nWhenever this character attacks, you may deal 2000 damage to target character. If that character is slept, you may deal choose to deal 4000 instead.\nDT: Do 1000 damage to target character.",
   "power": "6000"
 },
 {
   "id": 50,
   "type": "C",
   "cost": 6,
   "name": "ルア・リヴィエール",
   "attributes": "亜人・始原識",
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
   "desc": "When this character enters the battlefield or attacks, you may ramp 1.\n[1S]: Do X*1000 damage to target character, where X is the # of energy cards you control\nDT[2]: Ramp 1",
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
   "desc": "FF: Deal 1 damage to target player\nAs long as you have 0 cards in hand, this card has Vigilance.\n[Discard a card]: This gains Sunder and Retaliate. Only use this ability once per turn.",
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
   "attributes": "始原識",
   "desc": "Gain control of target character until it leaves the battlefield.",
   "power": "/"
 },
 {
   "id": 57,
   "type": "C",
   "cost": 8,
   "name": "プルミエール",
   "attributes": "発現者",
   "desc": "FF: You may destroy target character\nWhen this character is moved to the trash from play, you may destroy target allied character. If you do so, move this card from your trash to your hand.\nDT: You may search your guard deck and main deck for a card with the same name, reveal it, and add it to your hand",
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
   "name": "神の守護者　ツルギ",
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
   "attributes": "理霊",
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
   "desc": "Piercing\nWhenever an opponent would put a card from their guard deck to  their damage field, it goes to their trash instead. (The card's DT cannot be used)\n[Carnage 2]: This gains Sunder until EoT.\n[Carnage 3]: Deal 1 damage to target player.",
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
   "name": "休日のネコミミメイド 煌華",
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
   "name": "見習い魔女　ルルナ",
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
   "desc": "Whenever this character card becomes the target of an opponent's command card or character's ability, you may remove target character from the game.\n(This ability applies even outside of play.)\nWhen this character deals attacking damage to a player, that player removes their guard deck and hand from the game.\n[Carnage 5]: Remove all other characters from the game.",
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
   "attributes": "魔術・始原識",
   "desc": "FF: Sleep the attached character card.\nAs long as this character is in play, it cannot use activatable abilities, and it does not reactivate during active phases.\n",
   "power": "/"
 },
 {
   "id": 79,
   "type": "C",
   "cost": 3,
   "name": "”文明回帰”　プリムラ・アニマ",
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
   "name": "”救世聖天”　定理",
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
   "desc": "Return target character or set card to it's owner's hand\nDT: You may pay 4. If you do, put target character on the top of it's owner's main deck.",
   "power": "/"
 },
 {
   "id": 86,
   "type": "S",
   "cost": 1,
   "name": "携行マイクロミサイル",
   "attributes": "装備",
   "desc": "Retaliate.\nWhen this character becomes active outside of it's owner's active phase, you may do 2000 damage to target character.",
   "power": "+0"
 },
 {
   "id": 87,
   "type": "S",
   "cost": 2,
   "name": "光剣　魅天零式",
   "attributes": "装備",
   "desc": "Piercing\nDT[2]: Set this card on a character. You may place the top card of your deck in your guard deck, face up.",
   "power": "+1500"
 },
 {
   "id": 88,
   "type": "C",
   "cost": 1,
   "name": "激励する聖女　オラシオン",
   "attributes": "人間・始原識",
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
   "name": "王立アカデミーの学徒　インフィル",
   "attributes": "人間・干渉者",
   "desc": "Whenever you play a character card, reduce it's cost by X, to a minimum of, where X is the number of allied set cards in play.\nWhenever an allied set card becomes attached to a character, draw a card. You may also deal 3000 damage to target character. (If multiple cards become attached at once, this ability only triggers once)",
   "power": "4000"
 },
 {
   "id": 92,
   "type": "C",
   "cost": 7,
   "name": "王立アカデミーの学徒 ルア",
   "attributes": "人間・魔術",
   "desc": "FF: You may trash one of the opponent's energy cards. If you do, ramp 1.\n[1S]: Sleep target character",
   "power": "2000"
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
   "power": "/"
 },
 {
   "id": 95,
   "type": "Cmd",
   "cost": 3,
   "name": "閃光の突破",
   "attributes": "魔術",
   "desc": "Deal 5000 damage to target character or 1 damage to target player\nDT[1]: Target player loses 1 carnage (They choose and put a card from their damage field into the trash).",
   "power": "/"
 },
 {
   "id": 96,
   "type": "Cmd",
   "cost": 3,
   "name": "剣の敬愛",
   "attributes": "始原識",
   "desc": "When you play this, you may reveal X cards from your hand and place them on the bottom on your deck, to reduce the cost of this card by X, to a minimum of 0.\nYou may search your main deck and guard deck and trash for a [装備] set card with ”剣\" in its name and reveal it. If you do, set it onto target character, and shuffle your deck.",
   "power": "/"
 },
 {
   "id": 97,
   "type": "C",
   "cost": 2,
   "name": "竜族の術士",
   "attributes": "亜人・魔術",
   "desc": "This character cannot be targeted by command cards, set cards, or character abilities. (It can be targeted by character card's damage triggers)\nDT: Sleep target character",
   "power": "2500"
 },
 {
   "id": 98,
   "type": "C",
   "cost": 3,
   "name": "紅月院朱音",
   "attributes": "亜人・魔術",
   "desc": "FF: Deal 1000 damage to all enemy characters.\nPlay with the top card of your deck revealed. If it is a set or command card with 魔術, you may play it as if it were in your hand.",
   "power": "2000"
 },
 {
   "id": 99,
   "type": "C",
   "cost": 3,
   "name": "森纏いの羅刹",
   "attributes": "亜人",
   "desc": "[S]: Place the top card of your deck in play, face down. Treat it as \"Name: 森纏いの眷属 Cost: 1 Attribute: 亜人・植物 Power: 1000 This character cannot attack\".\n[Destroy 4 allied characters with 植物]: Gain control of target character as long as it remains in play.",
   "power": "3000"
 },
 {
   "id": 100,
   "type": "C",
   "cost": 4,
   "name": "イェル・アイナ",
   "attributes": "亜人",
   "desc": "Vigilance Piercing\n[S]: Deal 6000 damage to target character, then deal 4000 damage to this character.\n[Take 3 damage]: This gains Deathless until end of turn. Only use this ability once per turn.\nDT: Give target character -1000 until EoT",
   "power": "4000"
 },
 {
   "id": 101,
   "type": "C",
   "cost": 6,
   "name": "虚衣零亞",
   "attributes": "神格",
   "desc": "Deathless\nAt the end of your active phase, set the top card of your deck face down onto this. Treat it as the following set card: \"Name: 天命減衰 Cost: 1 Attribute: 神格 Power: -1000\"\n[Carnage 3]: Destroy target character. Using this ability does not trigger an interruption timing.",
   "power": "7000"
 },
 {
   "id": 102,
   "type": "Cmd",
   "cost": 1,
   "name": "火槍咒",
   "attributes": "魔術",
   "desc": "Until end of turn, whenever an allied card with 魔術 does damage except from attacking, increase that damage by 1000. (This effect also applies to this card).\nDeal 1000 damage to target character.\nDT: Deal 1000 damage to target character",
   "power": "/"
 },
 {
   "id": 103,
   "type": "Cmd",
   "cost": 3,
   "name": "点を喰らう意思",
   "attributes": "亜人",
   "desc": "Target a character or character card that is being played.\nReveal a card from your hand. If the card has the attribute 亜人, deal 8000 damage to targeted character, or if target was a played character card, counter it.",
   "power": "/"
 },
 {
   "id": 104,
   "type": "Cmd",
   "cost": 3,
   "name": "天剣伝説",
   "attributes": "神格",
   "desc": "Search your deck for a card with 神格, reveal it, and add it to your hand. Then shuffle your deck.\nRamp 1.\nDT[2]: Ramp 1",
   "power": "/"
 },
 {
   "id": 105,
   "type": "Cmd",
   "cost": 6,
   "name": "羅刹招集",
   "attributes": "亜人",
   "desc": "Place up to the top 3 cards of your deck in play, face down. Treat them as the following character card: \"Name: 羅刹 Cost: 1 Attribute 亜人 Power: 1000\"\nGive all allied 亜人 character cards +2000 until EoT.",
   "power": "/"
 },
 {
   "id": 106,
   "type": "C",
   "cost": 2,
   "name": "次期学派長　フィーアエレム",
   "attributes": "幻想生命・魔術",
   "desc": "During your opponent's turn, all allied characters get +1000.\nDT[2]: Ramp 1",
   "power": "1500"
 },
 {
   "id": 107,
   "type": "C",
   "cost": 2,
   "name": "王女の密偵　リル",
   "attributes": "亜人",
   "desc": "DT[1]: Summon this character. This character can't attack until EoT.",
   "power": "1000"
 },
 {
   "id": 108,
   "type": "C",
   "cost": 4,
   "name": "比類なき発現者　アカシア",
   "attributes": "発現者",
   "desc": "Sunder (If this character would do attack damage to a player, increase that damage by 1)",
   "power": "5500"
 },
 {
   "id": 109,
   "type": "C",
   "cost": 4,
   "name": "佐咲烈花",
   "attributes": "亜人・魔術",
   "desc": "FF: Draw a card, then target player discards a card.\n[3S]: Unsleep target creature. Only use this ability once per turn.",
   "power": "3500"
 },
 {
   "id": 110,
   "type": "C",
   "cost": 4,
   "name": "神了院光司郎",
   "attributes": "人間・魔術",
   "desc": "Vigilance\nFF: You may sleep target character\nAs long as there is an allied character who's name contains \"烈花\" in play, this gains +4000 and Sunder.\nDT: GIve target follower -1000 until EoT",
   "power": "4500"
 },
 {
   "id": 111,
   "type": "C",
   "cost": 5,
   "name": "記憶魔術学派長　ニコラ",
   "attributes": "人間・魔術",
   "desc": "FF: Set the top card of your deck onto target character, face down. Treat it as this set card: \"Name: 封印 Cost: 1 Attribute: 魔術 Power: 0 This character loses all it's card text, excluding this effect.\" (Effects that have already resolved are not affected.)",
   "power": "5500"
 },
 {
   "id": 112,
   "type": "C",
   "cost": 6,
   "name": "禍津結姫神",
   "attributes": "神格",
   "desc": "FF and on attack: You may set the top card of your deck onto target character. Treat it as the set card \"Name: 禍津呪 Cost: 1 Attribute: 神格 Power: -3000\"\n[Carnage 2]: Destroy target character that has a set card attached to it containing ”禍津呪\" in its name. Then, recover 1 health.",
   "power": "6000"
 },
 {
   "id": 113,
   "type": "C",
   "cost": 7,
   "name": "片翼の少女　アイオン",
   "attributes": "電子精神",
   "desc": "FF: Return target character to its owner's hand. Then, draw a card.",
   "power": "7500"
 },
 {
   "id": 114,
   "type": "C",
   "cost": 7,
   "name": "”羅列王”　阿令為",
   "attributes": "亜人",
   "desc": "When this character attacks, you may reveal a card from your hand. If it is a 亜人 character card cost 6 or less, summon it, active.\n[Trash an allied energy card:] Until EoT, this character can attack active characters and all allied 亜人 characters get +1000.",
   "power": "7000"
 },
 {
   "id": 115,
   "type": "C",
   "cost": 2,
   "name": "記憶の検閲者　ニコラ",
   "attributes": "人間・魔術",
   "desc": "FF: Target player looks at up to the top 3 cards of their deck (your choice). Select one of those cards to place on top of their deck, and trash the remainder.",
   "power": "2500"
 },
 {
   "id": 116,
   "type": "C",
   "cost": 3,
   "name": "天涯の理霊　アーロら",
   "attributes": "理霊・始原識",
   "desc": "Hypersonic (This card can't be blocked by cards without Hypersonic)\nDT[2]: Unsleep target character.",
   "power": "3500"
 },
 {
   "id": 117,
   "type": "C",
   "cost": 5,
   "name": "休日のネコミミメイド　唯里",
   "attributes": "人間・発現者",
   "desc": "FF: Draw a card. You may move 3 allied energy cards to your hand. If you do so, you may place up to 4 cards from your hand face down, slept, into your energy field.\nThis card gets +1000 for each card in your hand.",
   "power": "1000"
 },
 {
   "id": 118,
   "type": "C",
   "cost": 6,
   "name": "理霊使いの英雄　零霞",
   "attributes": "人間・始原識",
   "desc": "Hypersonic\nFF: Look at up to the top 5 cards of your deck. You may reveal a 理霊 card cost 5 or less. If you do so, summon that card and place remaining cards on the bottom of your deck in any order.",
   "power": "2000"
 },
 {
   "id": 119,
   "type": "C",
   "cost": 8,
   "name": "神領烈花",
   "attributes": "人間・特異能力",
   "desc": "Sunder Sunder Sunder Piercing Retaliate\nAs long as you have 0 cards in your hand, this card gains Deathless, and players play with their hand and top card of their deck revealed.\n[Carnage 4][Discard a card]: All characters you control gain Sunder",
   "power": "12000"
 },
 {
   "id": 120,
   "type": "Cmd",
   "cost": 1,
   "name": "対応防御",
   "attributes": "発現者",
   "desc": "Target character gains +1000 until EoT\nIf the character has a set card attached, the character additionally is untargetable by all enemy cards and abilities until EoT.\nDT: Target character gains +2000",
   "power": "/"
 },
 {
   "id": 121,
   "type": "Cmd",
   "cost": 3,
   "name": "運命と意思の世界",
   "attributes": "ルールブレイク",
   "desc": "Secret Arts: <A card with 始原識, and a card with either 特異能力 or 特異存在> \nPlace this card face up in your guard deck. If you don't already have this effect, gain the following effect:\n\"As long as there is a card named 運命と意思の世界 face-up in your guard deck, all allied 始原識, 特異能力, and 特異存在 character cards gain +1000.",
   "power": "/"
 },
 {
   "id": 122,
   "type": "Cmd",
   "cost": 3,
   "name": "訶梨帝、生命簒奪之法",
   "attributes": "奥義",
   "desc": "[Secret Arts: アイナ]\nUntil the end of turn, whenever an enemy character is destroyed or the opponent takes 1 or more damage, you may recover 1 hp.",
   "power": "/"
 },
 {
   "id": 123,
   "type": "None",
   "cost": 8,
   "name": "剣閃神姫・万象切断之理",
   "attributes": "奥義・神格",
   "desc": "Choose an attribute. Remove all enemy characters with that attribute from the game. Remove this card from the game.",
   "power": "/"
 },
 {
   "id": 124,
   "type": "C",
   "cost": 2,
   "name": "”魔族”",
   "attributes": "人間",
   "desc": "Whenever this character attacks or blocks, set the top card of your deck face down onto this as  \"Malignant tumor: -1000 Cost 1\".\nDT[2]: Destroy target character with power 2500 or less.",
   "power": "500"
 },
 {
   "id": 125,
   "type": "C",
   "cost": 3,
   "name": "四条五花",
   "attributes": "人間",
   "desc": "As long as this character is on the field, all other allied human characters get +1000, and characters you control lose any ability which says \"This character cannot attack.\"\nDT: look at at target player's hand.",
   "power": "3000"
 },
 {
   "id": 126,
   "type": "C",
   "cost": 4,
   "name": "時の管理者　アイオン",
   "attributes": "電子精神",
   "desc": "Hypersonic (Cannot be blocked except by characters with Hypersonic)\nFF: You may return  target allied character to your hand. If you do so, untap up to X energy, where X is the cost of the returned card.\n[Carnage 7]: Take another turn after this one.",
   "power": "4000"
 },
 {
   "id": 127,
   "type": "C",
   "cost": 5,
   "name": "命を呪う者 まつつ結姫神",
   "attributes": "神格",
   "desc": "When another allied character is destroyed, put it on the top of it's owner's deck instead.\nAs long as you have 3 or more face up character cards in your damage field, this gets +2000 and Sunder.\n[Destroy another allied character]: Give -1000 to target character.",
   "power": "5000"
 },
 {
   "id": 128,
   "type": "C",
   "cost": 6,
   "name": "魔王習い 星生",
   "attributes": "人間発現者",
   "desc": "FF: Reveal a card from your guard deck. If it's a [発現者] card not named \"魔王習い 星生\" and cost equal or less than your current guard deck size, place it in play, slept. Otherwise, place it in your hand and untap up to X energy, where X is that card's cost.",
   "power": "4000"
 },
 {
   "id": 129,
   "type": "C",
   "cost": 8,
   "name": "一意零",
   "attributes": "人間・特異能力",
   "desc": "FF and when destroyed: Target player exiles the top 3 cards of their main deck.\n[Carnage 2]: Destroy target character with X or less power. If succeeded, draw a card. X is total number of cards in exile.\nDT: Target player exiles the top card from their deck",
   "power": "8500"
 },
 {
   "id": 130,
   "type": "Cmd",
   "cost": 2,
   "name": "論理武装　命弾",
   "attributes": "特異能力",
   "desc": "Choose a target allied and enemy character. Deal damage equal to the former's power to the latter, and deal 1 damage to latter's controller. Then, destroy the former.",
   "power": "/"
 },
 {
   "id": 131,
   "type": "Cmd",
   "cost": 2,
   "name": "天の花",
   "attributes": "神格",
   "desc": "You may return a character from your trash to your hand.\nDT[2]: You may return a character card from your trash to your hand.",
   "power": "/"
 },
 {
   "id": 132,
   "type": "Cmd",
   "cost": 6,
   "name": "イグニッション、ヘリッシュ・ガンバレル",
   "attributes": "奥義・始原識",
   "desc": "[Secret Arts: インフィル]\nDeal 10000 damage to all non-human cards who do not have \"ルア\"  in their name\nDT[3]: Deal 4000 damage to target character.",
   "power": "/"
 },
 {
   "id": 133,
   "type": "C",
   "cost": 2,
   "name": "記憶の具象体",
   "attributes": "特異存在",
   "desc": "Cannot block.\nAt the end of your active phase, you may pay 1 and exile a card from your trash. If you do, summon this card, slept. This card only has this ability while in your trash.",
   "power": "1000"
 },
 {
   "id": 134,
   "type": "C",
   "cost": 4,
   "name": "幾重愛叉",
   "attributes": "亜人",
   "desc": "Vigilance\nThis character gets +1000 for each enemy character in play. In addition, it gains X instances of Sunder, where X is <this card's power>/5000, rounded down\nDT: Give target character +2000",
   "power": "4000"
 },
 {
   "id": 135,
   "type": "C",
   "cost": 5,
   "name": "数理魔術学派長　エルミリア",
   "attributes": "特異存在・魔術",
   "desc": "Hypersonic\nFF: You may counter target card cost 4 or less.\nDT: Look at the top card of your deck. You may put it into your trash.",
   "power": "4000"
 },
 {
   "id": 136,
   "type": "C",
   "cost": 7,
   "name": "識魔術学派長　アンガンフ",
   "attributes": "神格・魔術",
   "desc": "FF: You may search your deck for a card, reveal it, and add it to your hand. If you did, shuffle your deck. If it was a 魔術 card, also unsleep 2 energy.\nWhen you play a 魔術 card, subtract one from it's cost, to a minimum of 1.",
   "power": "7000"
 },
 {
   "id": 137,
   "type": "Character/Set",
   "cost": 7,
   "name": "エルミリアークラメール",
   "attributes": "特異存在・魔術",
   "desc": "(This card can be played as a character or set card. However when it is in play, only treat it as the card type it was played as.)\nWhen this character enters play or attacks, you may set a character card cost 7 or less from a player's trash onto this character, face-up. Treat it as the set card \"Name: 体験 Cost: 1 Attribute: 特異存在 Power: 0 Card text: <All card text written on this card>\".",
   "power": "7000"
 },
 {
   "id": 138,
   "type": "Cmd",
   "cost": 1,
   "name": "真言索引",
   "attributes": "魔術",
   "desc": "Target player puts the top 4 cards of their deck in their trash (if their deck has less than 4 cards, all those cards).",
   "power": "/"
 },
 {
   "id": 139,
   "type": "Cmd",
   "cost": 3,
   "name": "記憶抉り",
   "attributes": "魔術",
   "desc": "Look at target player's hand, and they discard a card of your choice. Draw a card.\nDT[1]: Target player discards a card",
   "power": "/"
 },
 {
   "id": 140,
   "type": "Cmd",
   "cost": 3,
   "name": "夜叉招来、羅刹破天之法",
   "attributes": "奥義",
   "desc": "[Secret Arts: 愛叉]\nSleep all characters. Then, you may unsleep target character. If you do so, give that character +X, where X is the number of enemy characters (when this effect resolves) x 5000.",
   "power": "/"
 },
 {
   "id": 141,
   "type": "Cmd",
   "cost": 6,
   "name": "異界からの急襲",
   "attributes": "特異存在",
   "desc": "Reveal a card you own from your hand or removed from the game.\nIf that card is a character card cost 8 or less, summon it, active.\nAt EoT, if that character is still in play, return it to your hand.",
   "power": "/"
 },
 {
   "id": 142,
   "type": "C",
   "cost": 2,
   "name": "鬼火",
   "attributes": "魔術",
   "desc": "[Deal 1000 damage to this character]: Deal X damage to target character, where X is this character's power. Then, put this character in the trash (ignoring \"cannot be destroyed\" effects).\nDT:  Deal 1000 damage to target character",
   "power": "2000"
 },
 {
   "id": 143,
   "type": "C",
   "cost": 4,
   "name": "理霊の使い手　イオニア",
   "attributes": "人間・始原識",
   "desc": "FF: You may summon a 理霊 character card from your trash, active.\n[Destroy an allied 理霊 character]: Deal 4000 damage to target character\nDT: Look at the top card of your deck. You may put it into your trash.",
   "power": "2000"
 },
 {
   "id": 144,
   "type": "C",
   "cost": 5,
   "name": "高嶺影時",
   "attributes": "人間",
   "desc": "FF: Until end of turn, this character can attack active characters\n[Take 1 damage]: Unsleep this character\n[Carnage 3]: This character gains Deathless until EoT, and the next time you would take damage, reduce it by 1.",
   "power": "5000"
 },
 {
   "id": 145,
   "type": "C",
   "cost": 7,
   "name": "紅月院暮乃",
   "attributes": "亜人・魔術",
   "desc": "FF: You may search your deck for up to 2 cards named \"鬼火\" and reveal them. If you do, summon them, active, and shuffle your deck.",
   "power": "7000"
 },
 {
   "id": 146,
   "type": "C",
   "cost": 9,
   "name": "神に愛されたもの　アンファング",
   "attributes": "神格・魔術",
   "desc": "Sunder\nWhen playing this card, subtract X  from its cost, where X is <# of 魔術 cards in your trash>/3, rounded down, to a minimum of 6.\nFF: Until EoT, the next time you play a 魔術 card (other than 神に愛されたもの　アンファング), subtract it's 5 from it's cost, to a minimum of 0.",
   "power": "7000"
 },
 {
   "id": 147,
   "type": "C",
   "cost": 12,
   "name": "「対象」丙種",
   "attributes": "特異存在",
   "desc": "When playing this card, subtract X from its cost, where X is the number of cards removed from the game, to a minimum of 5.\nFF: Look at target player's hand. You may choose a card from their hand and remove it from the game.\nThis character cannot be targeted by command cards, set cards, or character abilities.",
   "power": "7500"
 },
 {
   "id": 148,
   "type": "Cmd",
   "cost": 2,
   "name": "加虐の炎",
   "attributes": "発現者",
   "desc": "Destroy target character that has damage on it.\nDT[2]:  Destroy target character that has damage on it.",
   "power": "/"
 },
 {
   "id": 149,
   "type": "Cmd",
   "cost": 2,
   "name": "斑鳩法・練気",
   "attributes": "武術",
   "desc": "Give a target allied 人間 or 亜人 character +4000 and Sunder until EoT. If you have 0 cards in your hand, additionally, that character cannot be blocked until EoT.\nDT: Give an allied character Piercing until EoT.",
   "power": "/"
 },
 {
   "id": 150,
   "type": "Cmd",
   "cost": 3,
   "name": "破邪八相、天命つ終滅之法",
   "attributes": "奥義",
   "desc": "[Secret Arts: 影時]\nDeal 6000 damage to target character.\nIf your guard deck has 5 or less cards, also deal 99999 damage to it.\nIf your guard deck has 1 or less cards, also deal 1 damage to the character's owner.",
   "power": "/"
 }
]
"use strict";

import { isEqual } from 'lodash-es'

export function rollStat(prevStat) {
    // Right now just 10 + 3d6 keep lowest, there are more rules
    // Default 10 + 3d6 keep lowest
    // If direct ancestor had 15-17 in the stat: 10 + 3d6 keep middle
    // If direct ancestor had 18+: 10 + 3d6 keep highest
    var rolls = [rollD(6), rollD(6), rollD(6)].sort();

    if (prevStat < 15)      { return 10 + rolls[0]; }
    else if (prevStat < 18) { return 10 + rolls[1]; }
    else                    { return 10 + rolls[2]; }
}

export function rollD(x) {
    return Math.floor(Math.random() * x) + 1
}

export function physique() {
    var table = ["Gaunt", "Scrawny", "Slender", "Wiry", "Flabby", "Average",
        "Average", "Athletic", "Stout", "Brawny", "Ripped", "Hulking"]
    return table[rollD(12) - 1];
}

export function hair() {
    var table = ["Bald", "Braided", "Bristly", "Cropped", "Curly",
        "Disheveled", "Dreadlocks", "Filthy", "Frizzy", "Greased",
        "Limp", "Long", "Luxurious", "Mohawk", "Oily",
        "Ponytail", "Silky", "Topknot", "Wavy", "Wispy",]
    return table[rollD(20) - 1];
}

export function clothing() {
    var table = ["Antique", "Ceremonial", "Decorated", "Eccentric", "Elegant", "Fashionable",
        "Filthy", "Stained", "Frayed", "Shabby", "Patched", "Simple",]
    return table[rollD(12) - 1];
}

export function face() {
    var table = ["Blunt", "Bony", "Chiseled", "Delicate", "Elongated", "Pinched",
        "Hawkish", "Ratlike", "Round", "Sunken", "Square", "Wolfish",]
    return table[rollD(12) - 1];
}

export function height() {
    var table = ["Tiny", "Tiny", "Short", "Short", "Average", "Average",
        "average", "Average", "Tall", "Tall", "Towering", "Towering",]
    return table[rollD(12) - 1];
}

export function speech() {
    var table = ["Blunt", "Booming", "Breathy", "Cryptic", "Droning", "Flowery",
        "Formal", "Gravelly", "Mumbling", "Quaint", "Squeaky", "Whispery",]
    return table[rollD(12) - 1];
}

export function passion() {
    var table = ["Lazy(N / A)", "Athletics(STR)", "Acrobatics(DEX)", "Hard Work(CON)", "Learning(INT)",
                 "Experience(WIS)", "Socializing(CHA)", "Martial Arts(STR)", "Craftsmanship(DEX)", "Cooking(CON)",
                 "Magic(INT)", "Spirituality(WIS)", "Music(CHA)", "Swimming(STR)", "Travel(CON)",
                 "Dance(DEX)", "Science(INT)", "Marksmanship(WIS)", "Art(CHA)", "Prodigy(Pick Two)", ]
    return table[rollD(20) - 1];
}

export function profession() {
    var table = [ "Academic", "Cook", "Entertainer", "Fisher", "Magician", "Merchant",
                  "Priest", "Sailor", "Slug Rancher", "Smith", "Smuggler", "Warrior", ];
    return table[rollD(12) - 1];
}

export var weaponTraits = {
    "Scavenged": { name: "Scavenged Weapon", desc: "(Damage: [-], Quality: -2)" },
    "Coral-crafted": { name: "Coral-crafted Weapon", desc: "(Damage: [+] Poison, Quality: +1)" },
    "Kelp-sling": { name: "Kelp-sling Weapon", desc: "(Slot: -1, Quality: +1)" },
    "Charged": { name: "Charged Weapon", desc: "(Damage: [+] Electric, Quality: +1, Glows faintly like a candle.)" },
    "Vent-forged": { name: "Vent-forged Weapon", desc: "(Damage: [+] Heat, Quality: +1)" },
    "Pressure-forged": { name: "Pressure-forged Weapon", desc: "(Damage: [+] Cold, Quality: +1)" },
};

export var allItems = {
    meleeWeapon: [
        { type: "meleeWeapon", name: "Ax/Longsword", damage: { n: 1, d: 10, type: "slash" }, hand: 2, slot: 3, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Cudgel", damage: { n: 1, d: 6, type: "bludgeon" }, hand: 1, slot: 1, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Dagger", damage: { n: 1, d: 6, type: "pierce" }, hand: 1, slot: 1, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Eku", damage: { n: 1, d: 8, type: "slash or bludgeon" }, hand: 2, slot: 3, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Hammer", damage: { n: 1, d: 10, type: "bludgeon" }, hand: 2, slot: 3, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Hand ax/sword", damage: { n: 1, d: 8, type: "slash" }, hand: 1, slot: 2, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Harpoon", damage: { n: 1, d: 10, type: "pierce" }, hand: 2, slot: 3, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Mace", damage: { n: 1, d: 8, type: "bludgeon" }, hand: 1, slot: 2, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Sickle", damage: { n: 1, d: 6, type: "slash" }, hand: 1, slot: 1, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Spear", damage: { n: 1, d: 8, type: "pierce" }, hand: 1, slot: 2, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Butcher's cleaver", damage: { n: 1, d: 10 }, hand: 2, slot: 2, quality: 3, trait: undefined },
    ],
    rangedWeapon: [
        { type: "rangedWeapon", name: "Bow", ammo: "Arrows", damage: { n: 1, d: 6 }, slot: 2, hand: 2, quality: 3, trait: undefined },
        { type: "rangedWeapon", name: "Crossbow", ammo: "Bolts", damage: { n: 1, d: 8 }, slot: 3, hand: 2, quality: 3, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Harpoonbow", ammo: "Harpoonbow Shots", damage: { n: 1, d: 10 }, slot: 4, hand: 2, quality: 3, trait: undefined }
    ],
    ammo: [
        { type: "generalItem", name: "Arrows (Up to 20)" },
        { type: "generalItem", name: "Bolts (Up to 20)" },
        { type: "generalItem", name: "Harpoonbow Shots (Up to 4)" },
    ],
    armor: [
        { type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 },
        { type: "armor", name: "Iron-scale mail", defense: 14, slot: 3, quality: 5 },
        { type: "armor", name: "Seal leather", defense: 13, slot: 2, quality: 4 },
    ],
    exoticArmor: [
        { type: "armor", name: "Flotsam Armor (Pelagic)", defense: 13, slot: 3, quality: 2 },
        { type: "armor", name: "Coral Plate (Reef)", defense: 15, slot: 3, quality: 5, note: "Resist: Poison" },
        { type: "armor", name: "Kelp Robe (Kelp Forest)", defense: 12, slot: 2, quality: 3, note: "Resist: Spells" },
        { type: "armor", name: "Bioluminescent Eel Armor (Twilight)", defense: 14, slot: 2, quality: 4, note: "Generates red light. Creatures of the Depths can’t see red light." },
        { type: "armor", name: "Yeti 'Fur' Armor (Trench)", defense: 14, slot: 2, quality: 4, note: "Resist: Heat and Cold" },
    ],
    helmet: [
        { type: "helmet", name: "Helmet", defense: 1, slot: 1, quality: 1 },
    ],
    shield: [
        { type: "shield", name: "Shield", hand: 1, defense: 1, slot: 1, quality: 1 },
    ],
    generalItem: [
        { type: "generalItem", name: "Airbladder", slot: 1 },
        { type: "generalItem", name: "Academic's Kit", slot: 1 },
        { type: "generalItem", name: "Bear Trap", slot: 1 },
        { type: "generalItem", name: "Bellows", slot: 1 },
        { type: "generalItem", name: "Bottle", slot: 1 },
        { type: "generalItem", name: "Bucket", slot: 1 },
        { type: "generalItem", name: "Caltrops", slot: 1 },
        { type: "generalItem", name: "Card Deck", slot: 1 },
        { type: "generalItem", name: "Chain, 10ft", slot: 1 },
        { type: "generalItem", name: "Chalk, 10x", slot: 1 },
        { type: "generalItem", name: "Chisel", slot: 1 },
        { type: "generalItem", name: "Cook's Kit", slot: 1 },
        { type: "generalItem", name: "Crowbar", slot: 1 },
        { type: "generalItem", name: "Dice Set", slot: 1 },
        { type: "generalItem", name: "Drill", slot: 1 },
        { type: "generalItem", name: "Face Paint", slot: 1 },
        { type: "generalItem", name: "Fake Jewels", slot: 1 },
        { type: "generalItem", name: "Fishing Rod (and Tackle)", slot: 1 },
        { type: "generalItem", name: "Glowing Algae Globe", slot: 1 },
        { type: "generalItem", name: "Glue", slot: 1 },
        { type: "generalItem", name: "Grappling Hook", slot: 1 },
        { type: "generalItem", name: "Grease", slot: 1 },
        { type: "generalItem", name: "Gumbo", slot: 1 },
        { type: "generalItem", name: "Hammer", slot: 1 },
        { type: "generalItem", name: "Horn", slot: 1 },
        { type: "generalItem", name: "Hourglass", slot: 1 },
        { type: "generalItem", name: "Instrument", slot: 1 },
        { type: "generalItem", name: "Jerky", slot: 1 },
        { type: "generalItem", name: "Lantern and Blubber Oil(light for 1 floor)", slot: 1 },
        { type: "generalItem", name: "Lens", slot: 1 },
        { type: "generalItem", name: "Lockpick", slot: 1 },
        { type: "generalItem", name: "Machete", slot: 1 },
        { type: "generalItem", name: "Manacles", slot: 1 },
        { type: "generalItem", name: "Marbles", slot: 1 },
        { type: "generalItem", name: "Metal file", slot: 1 },
        { type: "generalItem", name: "Mirror", slot: 1 },
        { type: "generalItem", name: "Net", slot: 1 },
        { type: "generalItem", name: "Padlock", slot: 1 },
        { type: "generalItem", name: "Pearl", slot: 1 },
        { type: "generalItem", name: "Perfume", slot: 1 },
        { type: "generalItem", name: "Pick", slot: 1 },
        { type: "generalItem", name: "Pole, 10ft", slot: 1 },
        { type: "generalItem", name: "Pulleys", slot: 1 },
        { type: "generalItem", name: "Quill & Ink", slot: 1 },
        { type: "generalItem", name: "Random Scroll", slot: 1 },
        { type: "generalItem", name: "Rope, 50ft", slot: 1 },
        { type: "generalItem", name: "Sack", slot: 1 },
        { type: "generalItem", name: "Saw", slot: 1 },
        { type: "generalItem", name: "Scrimshaw Kit", slot: 1 },
        { type: "generalItem", name: "Shovel", slot: 1 },
        { type: "generalItem", name: "Slippery Oil", slot: 1 },
        { type: "generalItem", name: "Slug Jar", slot: 0 },
        { type: "generalItem", name: "Small Bell", slot: 1 },
        { type: "generalItem", name: "Soap", slot: 1 },
        { type: "generalItem", name: "Spikes, 5", slot: 1 },
        { type: "generalItem", name: "Sponge", slot: 1 },
        { type: "generalItem", name: "Spyglass", slot: 1 },
        { type: "generalItem", name: "Tar Pot", slot: 1 },
        { type: "generalItem", name: "Tongs", slot: 1 },
        { type: "generalItem", name: "Torch, 2x(light for 3 rooms)", slot: 1 },
        { type: "generalItem", name: "Twine", slot: 1 },
        { type: "generalItem", name: "Vial of Urchin Venom", slot: 1 },
        { type: "generalItem", name: "Weighted Net", slot: 1 },
        { type: "generalItem", name: "Whistle", slot: 1 },
    ],
    slug: [
        { type: "slug", name: "Slug: Black w/ gold scaley cerata", slot: 1 },
        { type: "slug", name: "Slug: Blue w/ yellow cerata", slot: 1 },
        { type: "slug", name: "Slug: Brown w/ gray bumps", slot: 1 },
        { type: "slug", name: "Slug: Cream w/ black speckles", slot: 1 },
        { type: "slug", name: "Slug: Gold w/ black and white stripes", slot: 1 },
        { type: "slug", name: "Slug: Gray w/ pink bumps", slot: 1 },
        { type: "slug", name: "Slug: Green w/ black stripes", slot: 1 },
        { type: "slug", name: "Slug: Indigo w/ yellow stripes", slot: 1 },
        { type: "slug", name: "Slug: Lime w/ leaf green cerata", slot: 1 },
        { type: "slug", name: "Slug: Orange w/ black cerata", slot: 1 },
        { type: "slug", name: "Slug: Pink w/ translucent cerata", slot: 1 },
        { type: "slug", name: "Slug: Purple w/ a white stripe", slot: 1 },
        { type: "slug", name: "Slug: Red w/ maroon spots", slot: 1 },
        { type: "slug", name: "Slug: Sky blue w/ dark blue stripes", slot: 1 },
        { type: "slug", name: "Slug: Tan w/ brown cerata", slot: 1 },
        { type: "slug", name: "Slug: Teal w/ red spots", slot: 1 },
        { type: "slug", name: "Slug: Translucent white w/ blue cerata", slot: 1 },
        { type: "slug", name: "Slug: Violet w/ red cerata", slot: 1 },
        { type: "slug", name: "Slug: White w/ purple cerata", slot: 1 },
        { type: "slug", name: "Slug: Yellow w/ black speckles", slot: 1 },
    ],
    slugEgg: [
        { type: "slugEgg", name: "Slug Egg(s): Black w/ gold scaley cerata", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Blue w/ yellow cerata", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Brown w/ gray bumps", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Cream w/ black speckles", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Gold w/ black and white stripes", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Gray w/ pink bumps", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Green w/ black stripes", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Indigo w/ yellow stripes", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Lime w/ leaf green cerata", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Orange w/ black cerata", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Pink w/ translucent cerata", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Purple w/ a white stripe", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Red w/ maroon spots", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Sky blue w/ dark blue stripes", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Tan w/ brown cerata", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Teal w/ red spots", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Translucent white w/ blue cerata", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Violet w/ red cerata", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): White w/ purple cerata", slot: 1, quantity: 1 },
        { type: "slugEgg", name: "Slug Egg(s): Yellow w/ black speckles", slot: 1, quantity: 1 },
    ],
}

export var mutations = [
    { name: "Accurate", desc: "You gain an innate [+] to all Attacks." },
    { name: "Bacterial Hair", desc: "You grow fleshy “hair”. It keeps you warm. You now Resist Cold." },
    { name: "Camouflage", desc: "You grow fleshy natural looking aberations on your skin.They can appear like seaweed, algae, stone and sand.This gives you[+] on checks to be stealthy." },
    { name: "Charming Colors", desc: "Your skin cells are able to shift at will into other colors. They are constantly pulsing and can be used to communicate with Cephalopods. Once per rest you can cause a target to make a CHA save or be Charmed. You gain [+] on Saves related to sneaking." },
    { name: "Cold Current", desc: "You may choose to activate an aura that deals 1D4 Cold damage to any creatures within 5ft of you. You are covered in a thick slimy white fur." },
    { name: "Communicative Colors", desc: "Your skin cells are able to shift at will into other colors. They are constantly pulsing and can be used to communicate with Cephalopods." },
    { name: "Coral Skin", desc: "You grow spiny protrusions as armor on your skin. They appear to be symbiotic corals that grow fairly rapidly. You have a natural AC of 14 and Reist Poison but can't wear normal armor." },
    { name: "Cowardly", desc: "Decrease your Heir's Morale by 1. This mutation stacks." },
    { name: "Detect Magic", desc: "Your eyes become compound and multifaceted. You no longer blink.They are beautiful and disconcerting. Once per rest you may cast Detect Magic." },
    { name: "Dotter Sniffer", desc: "Your nose changes to a large Dotter nose and you grow long whiskers.Once per rest you can cast the spell Sniff." },
    { name: "Echolocation", desc: "Your forehead expands to make room for the resonating space you will need in your sinuses. Once per rest you can gain blindsight. Must make loud clicking noises when you use it." },
    { name: "Electromagnetic Sensitivity", desc: "Once per rest you may focus your mind to sense all creatures in a one room radius of the current room you are in. You may know how large they are and how many there are. Downside.you have a hammer head. It's horrible. You are horrible. My god is it weird looking." },
    { name: "Elemental Attunement", desc: "Your hair turns into long thick tendrils that move on their own.The color is determined by the A-Mana-Me whose Sand you consumed. You gain Resistance to the Element that the A-Mana-Me was attuned to." },
    { name: "Frenzy", desc: "When you deal damage you go into a frenzy and lose the ability to tell friend from foe. You then attack the closest creature to you at random. When frenzied add [+] to any Attack you do." },
    { name: "'Gilly' Suit", desc: "Fleshy barbles and scales grow on your back that resemble the detritous and vegetation of the seafloor.  You gain[+] on sneaking when prone." },
    { name: "Glowing Saliva", desc: "Your saliva glows blue. So the inside of your mouth glows blue. About the brightness of a candle." },
    { name: "Hunter’s and Sach’s", desc: "Your nervous system grows. Under your skin your nerves pulse a white-blue light. Once per day you may cause creatures adjacent to you make a CON Save or take 1D6 Electric Damage and Stunned for one turn." },
    { name: "Iron Scales", desc: "You grow scales that are hard as scalemail. You have a natural AD of 14." },
    { name: "Leaper", desc: "Your grow a muscular tail that you can use to jump vast distances. You gain [+] on all Saves where you are jumping." },
    { name: "Low-light", desc: "Your eyes bulge and grow. You can see in the dark." },
    { name: "Pack Hunter", desc: "When adjacent to allies you get +1 to your Morale and[+] to their Attack and Damage rolls." },
    { name: "Plumage", desc: "No benefit. You just have feathers now. They’re white and quite pretty when you keep them clean." },
    { name: "Resonance", desc: "Your forehead becomes massive to make room for the resonating space you will need in your sinuses. Gain blindsight. Must make loud clicking noises to see however." },
    { name: "Shrewd", desc: "You have seen countless deals over the Hermit's long life. You get a shop discount of 25% everywhere." },
    { name: "Shrimp Claws", desc: "Your hands change into massive claws. They are unwieldy so you can’t wield a weapon anymore but your unarmed attack deals 1D10 Bludgeoning." },
    { name: "Slippery", desc: "You secrete a slimy mucus. [+] To Saves to break free of Grapples. Can harvest it while resting to create a bottle of non-flammable slippery oil." },
    { name: "Spikey", desc: "Your skin is covered in spikey protrusions.You can’t wear armor, but you gain a Natural Armor of 13. Plus, when you are struck you deal 1D4 Piercing Damage to the Attacker." },
    { name: "Sticky", desc: "You excrete a sticky mucous from your hands and feet that allow you to easily climb walls and ceilings. You gain a climb speed equal to your move speed." },
    { name: "Telepathy", desc: "Your hair falls out and the top of your head mimics the shape and texture of a brain coral.You may send your thoughts silently to a target within the same room." },
    { name: "Tentacles", desc: "Your arms split in two. You have four arms now. They can do everything your previous arms could do but multiplied by two." },
    { name: "Toxic Skin", desc: "Your skin is covered in a poisonous mucous or some such. Creatures that touch your skin must make a CON Save or Poisoned(2 Poison Damage per turn, save ends)." },
    { name: "Tremorsense", desc: "You can see via tremorsense in the room you are in. You lose your eyes." },
    { name: "Vampirism", desc: "You mouth turns into a large proboscis that allows you to create holes in the skin of willing or unconscious creatures. You crave blood and must use it as a food source. Your skin becomes pale white and you can see your blood vessels. 1HD equals 1 Ration for you." },
    { name: "Vibrant", desc: "Some part of your body becomes vibrantly colored or marked.This could be your hair, skin, eyes, nails, etc." },
];

function weapon() {
    var table = [
        { type: "meleeWeapon", name: "Dagger", damage: { n: 1, d: 6, type: "pierce" }, hand: 1, slot: 1, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Dagger", damage: { n: 1, d: 6, type: "pierce" }, hand: 1, slot: 1, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Dagger", damage: { n: 1, d: 6, type: "pierce" }, hand: 1, slot: 1, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Dagger", damage: { n: 1, d: 6, type: "pierce" }, hand: 1, slot: 1, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Dagger", damage: { n: 1, d: 6, type: "pierce" }, hand: 1, slot: 1, quality: 3, trait: undefined },

        { type: "meleeWeapon", name: "Cudgel", damage: { n: 1, d: 6, type: "bludgeon" }, hand: 1, slot: 1, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Cudgel", damage: { n: 1, d: 6, type: "bludgeon" }, hand: 1, slot: 1, quality: 3, trait: undefined },

        { type: "meleeWeapon", name: "Sickle", damage: { n: 1, d: 6, type: "slash" }, hand: 1, slot: 1, quality: 3, trait: undefined },

        { type: "meleeWeapon", name: "Mace", damage: { n: 1, d: 8, type: "bludgeon" }, hand: 1, slot: 2, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Mace", damage: { n: 1, d: 8, type: "bludgeon" }, hand: 1, slot: 2, quality: 3, trait: undefined },

        { type: "meleeWeapon", name: "Spear", damage: { n: 1, d: 8, type: "pierce" }, hand: 1, slot: 2, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Spear", damage: { n: 1, d: 8, type: "pierce" }, hand: 1, slot: 2, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Spear", damage: { n: 1, d: 8, type: "pierce" }, hand: 1, slot: 2, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Spear", damage: { n: 1, d: 8, type: "pierce" }, hand: 1, slot: 2, quality: 3, trait: undefined },

        { type: "meleeWeapon", name: "Hand ax/sword", damage: { n: 1, d: 8, type: "slash" }, hand: 1, slot: 2, quality: 3, trait: undefined },

        { type: "meleeWeapon", name: "Eku", damage: { n: 1, d: 8, type: "slash or bludgeon" }, hand: 2, slot: 3, quality: 3, trait: undefined },

        { type: "meleeWeapon", name: "Hammer", damage: { n: 1, d: 10, type: "bludgeon" }, hand: 2, slot: 3, quality: 3, trait: undefined },

        { type: "meleeWeapon", name: "Harpoon", damage: { n: 1, d: 10, type: "pierce" }, hand: 2, slot: 3, quality: 3, trait: undefined },
        { type: "meleeWeapon", name: "Harpoon", damage: { n: 1, d: 10, type: "pierce" }, hand: 2, slot: 3, quality: 3, trait: undefined },

        { type: "meleeWeapon", name: "Ax/Longsword", damage: { n: 1, d: 10, type: "slash" }, hand: 2, slot: 3, quality: 3, trait: undefined },
    ];
    return table[rollD(20) - 1];
}

function armor() {
    var table = [
        [], [], [],

        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],
        [{ type: "armor", name: "Canvas tunic", defense: 12, slot: 1, quality: 3 }],

        [{ type: "armor", name: "Seal leather", defense: 13, slot: 2, quality: 4 }],
        [{ type: "armor", name: "Seal leather", defense: 13, slot: 2, quality: 4 }],
        [{ type: "armor", name: "Seal leather", defense: 13, slot: 2, quality: 4 }],
        [{ type: "armor", name: "Seal leather", defense: 13, slot: 2, quality: 4 }],
        [{ type: "armor", name: "Seal leather", defense: 13, slot: 2, quality: 4 }],

        [{ type: "armor", name: "Iron-scale mail", defense: 14, slot: 3, quality: 5 }],
    ]
    return table[rollD(20) - 1];
}

function helmetAndShield() {
    var table = [
        [], [], [], [], [], [], [], [], [], [], [], [], [],

        [{ type: "helmet", name: "Helmet", defense: 1, slot: 1, quality: 1 }],
        [{ type: "helmet", name: "Helmet", defense: 1, slot: 1, quality: 1 }],
        [{ type: "helmet", name: "Helmet", defense: 1, slot: 1, quality: 1 }],

        [{ type: "shield", name: "Shield", hand: 1, defense: 1, slot: 1, quality: 1 }],

        [{ type: "shield", name: "Shield", hand: 1, defense: 1, slot: 1, quality: 1 },
         { type: "helmet", name: "Helmet", defense: 1, slot: 1, quality: 1 }],
    ]
    return table[rollD(20) - 1];
}

function rangedWeapon() {
    var table = [
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },
        { type: "rangedWeapon", name: "Sling", ammo: "N/A", damage: { n: 1, d: 4 }, slot: 1, hand: 1, quality: 2, trait: undefined },

        { type: "rangedWeapon", name: "Bow", ammo: "Arrows", damage: { n: 1, d: 6 }, slot: 2, hand: 2, quality: 3, trait: undefined },
        { type: "rangedWeapon", name: "Bow", ammo: "Arrows", damage: { n: 1, d: 6 }, slot: 2, hand: 2, quality: 3, trait: undefined },
        { type: "rangedWeapon", name: "Bow", ammo: "Arrows", damage: { n: 1, d: 6 }, slot: 2, hand: 2, quality: 3, trait: undefined },
        { type: "rangedWeapon", name: "Bow", ammo: "Arrows", damage: { n: 1, d: 6 }, slot: 2, hand: 2, quality: 3, trait: undefined },
        { type: "rangedWeapon", name: "Bow", ammo: "Arrows", damage: { n: 1, d: 6 }, slot: 2, hand: 2, quality: 3, trait: undefined },
        { type: "rangedWeapon", name: "Bow", ammo: "Arrows", damage: { n: 1, d: 6 }, slot: 2, hand: 2, quality: 3, trait: undefined },

        { type: "rangedWeapon", name: "Crossbow", ammo: "Bolts", damage: { n: 1, d: 8 }, slot: 3, hand: 2, quality: 3, trait: undefined },
        { type: "rangedWeapon", name: "Crossbow", ammo: "Bolts", damage: { n: 1, d: 8 }, slot: 3, hand: 2, quality: 3, trait: undefined },
    ];
    return table[rollD(20) - 1];
}

function generalGear1() {
    var table = [
        { type: "generalItem", name: "Torch, 2x(light for 3 rooms)", slot: 1 },
        { type: "generalItem", name: "Bear Trap", slot: 1 },
        { type: "generalItem", name: "Shovel", slot: 1 },
        { type: "generalItem", name: "Bellows", slot: 1 },
        { type: "generalItem", name: "Grease", slot: 1 },
        { type: "generalItem", name: "Saw", slot: 1 },
        { type: "generalItem", name: "Bucket", slot: 1 },
        { type: "generalItem", name: "Caltrops", slot: 1 },
        { type: "generalItem", name: "Chisel", slot: 1 },
        { type: "generalItem", name: "Drill", slot: 1 },
        { type: "generalItem", name: "Fishing Rod", slot: 1 },
        { type: "generalItem", name: "Marbles", slot: 1 },
        { type: "generalItem", name: "Glue", slot: 1 },
        { type: "generalItem", name: "Pick", slot: 1 },
        { type: "generalItem", name: "Hourglass", slot: 1 },
        { type: "generalItem", name: "Net", slot: 1 },
        { type: "generalItem", name: "Tongs", slot: 1 },
        { type: "generalItem", name: "Lockpick", slot: 1 },
        { type: "generalItem", name: "Metal file", slot: 1 },
        weapon(),
    ];
    return table[rollD(20) - 1];
}

function generalGear2() {
    var table = [
        { type: "generalItem", name: "Torch, 2x(light for 3 rooms)", slot: 1 },
        { type: "generalItem", name: "Sponge", slot: 1 },
        { type: "generalItem", name: "Lens", slot: 1 },
        { type: "generalItem", name: "Perfume", slot: 1 },
        { type: "generalItem", name: "Horn", slot: 1 },
        { type: "generalItem", name: "Bottle", slot: 1 },
        { type: "generalItem", name: "Soap", slot: 1 },
        { type: "generalItem", name: "Spyglass", slot: 1 },
        { type: "generalItem", name: "Tar Pot", slot: 1 },
        { type: "generalItem", name: "Twine", slot: 1 },
        { type: "generalItem", name: "Fake Jewels", slot: 1 },
        { type: "generalItem", name: "Card Deck", slot: 1 },
        { type: "generalItem", name: "Dice Set", slot: 1 },
        { type: "generalItem", name: "Face Paint", slot: 1 },
        { type: "generalItem", name: "Whistle", slot: 1 },
        { type: "generalItem", name: "Instrument", slot: 1 },
        { type: "generalItem", name: "Quill & Ink", slot: 1 },
        { type: "generalItem", name: "Small Bell", slot: 1 },
        { type: "generalItem", name: "Airbladder", slot: 1 },
        rangedWeapon(),
    ];
    return table[rollD(20) - 1];
}

function dungeoneeringGear(archmage) {
    var table = [
        { type: "generalItem", name: "Rope, 50ft", slot: 1 },
        { type: "generalItem", name: "Pulleys", slot: 1 }, 
        { type: "generalItem", name: "Chain, 10ft", slot: 1 },
        { type: "generalItem", name: "Chalk, 10x", slot: 1 },
        { type: "generalItem", name: "Crowbar", slot: 1 },
        { type: "generalItem", name: "Torch, 2x(light for 3 rooms)", slot: 1 },
        { type: "generalItem", name: "Grappling Hook", slot: 1 },
        { type: "generalItem", name: "Hammer", slot: 1 },
        { type: "generalItem", name: "Padlock", slot: 1 },
        { type: "generalItem", name: "Manacles", slot: 1 },
        { type: "generalItem", name: "Mirror", slot: 1 },
        { type: "generalItem", name: "Pole, 10ft", slot: 1 },
        { type: "generalItem", name: "Sack", slot: 1 },
        { type: "generalItem", name: "Machete", slot: 1 },
        { type: "generalItem", name: "Spikes, 5", slot: 1 },
        { type: "generalItem", name: "Random Scroll", slot: 1 },
        { type: "generalItem", name: "Lantern and Blubber Oil(light for 1 floor)", slot: 1 },
        { type: "generalItem", name: "Glowing Algae Globe", slot: 1 },
        slug(),
        spellpearl(1, archmage),
    ];
    return table[rollD(20) - 1];
}

function slug() {
    var table = [
        { type: "slug", name: "Slug: White w/ purple cerata", slot: 1 },
        { type: "slug", name: "Slug: Purple w/ a white stripe", slot: 1 },
        { type: "slug", name: "Slug: Tan w/ brown cerata", slot: 1 },
        { type: "slug", name: "Slug: Black w/ gold scaley cerata", slot: 1 },
        { type: "slug", name: "Slug: Pink w/ translucent cerata", slot: 1 },
        { type: "slug", name: "Slug: Teal w/ red spots", slot: 1 },
        { type: "slug", name: "Slug: Gold w/ black and white stripes", slot: 1 },
        { type: "slug", name: "Slug: Translucent white w/ blue cerata", slot: 1 },
        { type: "slug", name: "Slug: Sky blue w/ dark blue stripes", slot: 1 },
        { type: "slug", name: "Slug: Orange w/ black cerata", slot: 1 },
        { type: "slug", name: "Slug: Green w/ black stripes", slot: 1 },
        { type: "slug", name: "Slug: Cream w/ black speckles", slot: 1 },
        { type: "slug", name: "Slug: Gray w/ pink bumps", slot: 1 },
        { type: "slug", name: "Slug: Violet w/ red cerata", slot: 1 },
        { type: "slug", name: "Slug: Yellow w/ black speckles", slot: 1 },
        { type: "slug", name: "Slug: Lime w/ leaf green cerata", slot: 1 },
        { type: "slug", name: "Slug: Blue w/ yellow cerata", slot: 1 },
        { type: "slug", name: "Slug: Indigo w/ yellow stripes", slot: 1 },
        { type: "slug", name: "Slug: Brown w/ gray bumps", slot: 1 },
        { type: "slug", name: "Slug: Red w/ maroon spots", slot: 1 },
    ];
    return table[rollD(20) - 1];
}

export const spellPearlTable = (L) => [
    { type: "spellPearl", name: `Spell pearl of Arcane Eye L${L}`, slot: 1, spell: { name: "Arcane Eye", charges: 1, description: `You can see through a magical floating eyeball that flies around at your command.` } },
    { type: "spellPearl", name: `Spell pearl of Auditory Illusion L${L}`, slot: 1, spell: { name: "Auditory Illusion", charges: 2, description: `You create illusory sounds that seem to come from the direction of your choice.` } },
    { type: "spellPearl", name: `Spell pearl of Beast Form L${L}`, slot: 1, spell: { name: "Beast Form", charges: L, description: `You and your possessions transform into a creature whose Sand you have previously ingested.` } },
    { type: "spellPearl", name: `Spell pearl of Befuddle L${L}`, slot: 1, spell: { name: "Befuddle", charges: 1, description: `${L} creatures of your choice are unable to form new short - term memories for the duration of the Spell.` }},
    { type: "spellPearl", name: `Spell pearl of Bend Fate L${L}`, slot: 1, spell: { name: "Bend Fate", charges: L, description: `Roll ${L} + 1D20s and bank them. After casting this spell, whenever you must roll a D20 you must choose one of the previously rolled, banked dice and replace the dice you just rolled with it. Continue until all banked dice are used, or until your rest.` }},
    { type: "spellPearl", name: `Spell pearl of Body Swap L${L}`, slot: 1, spell: { name: "Body Swap", charges: 1, description: `You switch bodies with a creature you touch. If one body dies, the other dies as well.` }},
    { type: "spellPearl", name: `Spell pearl of Boiling Blast L${L}`, slot: 1, spell: { name: "Boiling Blast", charges: 2 * L, description: `A cone of boiling water shoots from your hand.  Target creatures must make a DEX Save or take 1D10 Heat Damage.` }},
    { type: "spellPearl", name: `Spell pearl of Charm L${L}`, slot: 1, spell: { name: "Charm", charges: 1, description: `${L} creatures treat you like a friend.` }},
    { type: "spellPearl", name: `Spell pearl of Chum Call L${L}`, slot: 1, spell: { name: "Chum Call", charges: L, description: `A strange droning whistle comes from around you. The sound summons ${L}D4 Chum that come into the room enraged.` }},
    { type: "spellPearl", name: `Spell pearl of Command L${L}`, slot: 1, spell: { name: "Command", charges: 1, description: `A creature obeys a single, three-word command that does not harm it.`}},
    { type: "spellPearl", name: `Spell pearl of Counterspell L${L}`, slot: 1, spell: { name: "Counterspell", charges: L, description: `Make an opposed INT Save against the INT of the caster of a nearby Spell. You may do this out of turn as a reaction, or against an ongoing magical effect. On a success, you may cancel the other caster’s Spell.`}},
    { type: "spellPearl", name: `Spell pearl of Crushing Pressure L${L}`, slot: 1, spell: { name: "Crushing Pressure", charges: 1, description: `The air pressure in the Room increases to be equivalent to the water pressure at the bottom of the ocean. Anything within the cube must make a CON or STR Save each round they are within the cube or take 1D8 Bludgeoning Damage from the crushing pressure.`}},
    { type: "spellPearl", name: `Spell pearl of Deafen L${L}`, slot: 1, spell: { name: "Deafen", charges: 1, description: `All creatures in the Room are deafened.`}},
    { type: "spellPearl", name: `Spell pearl of Dehydrate L${L}`, slot: 1, spell: { name: "Dehydrate", charges: 1, description: `All water in the Room rapidly evaporates. Any creatures caught in the area must make a CON Save or take their Hit Die in damage.`}},
    { type: "spellPearl", name: `Spell pearl of Detect Magic L${L}`, slot: 1, spell: { name: "Detect Magic", charges: 1, description: `You hear nearby magical auras singing.Volume and harmony signify the aura’s power and refinement.`}},
    { type: "spellPearl", name: `Spell pearl of Disguise L${L}`, slot: 1, spell: { name: "Disguise", charges: 1, description: `You may alter the appearance of ${L} characters at will, as long as they remain humanoid. Attempts to duplicate other characters will seem uncanny.`}},
    { type: "spellPearl", name: `Spell pearl of Drowning in Words L${L}`, slot: 1, spell: { name: "Drowning in Words", charges: 1, description: `Target creature has seawater come out of its mouth whenever it tries to communicate verbally.`}},
    { type: "spellPearl", name: `Spell pearl of Earthquake L${L}`, slot: 1, spell: { name: "Earthquake", charges: 1, description: `The ground begins shaking violently. Structures may be damaged or collapse. Can knock creatures prone on failed DEX Save.`}},
    { type: "spellPearl", name: `Spell pearl of Elasticity L${L}`, slot: 1, spell: { name: "Elasticity", charges: L, description: `Your body can stretch up to ${L*10} feet`}},
    { type: "spellPearl", name: `Spell pearl of Elemental Wall L${L}`, slot: 1, spell: { name: "Elemental Wall", charges: L, description: `A straight wall of ice or fire ${L*10} feet long and 10ft high rises from the ground.`}},
    { type: "spellPearl", name: `Spell pearl of Fog Cloud L${L}`, slot: 1, spell: { name: "Fog Cloud", charges: 2, description: `Dense fog spreads out from you and covers the room.`}},
    { type: "spellPearl", name: `Spell pearl of Frenzy L${L}`, slot: 1, spell: { name: "Frenzy", charges: 1, description: `${L} creatures erupt in a frenzy of violence.`}},
    { type: "spellPearl", name: `Spell pearl of Geysers L${L}`, slot: 1, spell: { name: "Geysers", charges: L, description: `${L} geysers appear in positions of your choice in the room you are in. They can violently lift anything above them. If a lifted thing hits a ceiling it takes 2D6 Damage`}},
    { type: "spellPearl", name: `Spell pearl of Giant Growth L${L}`, slot: 1, spell: { name: "Giant Growth", charges: 1, description: `An object grows to the size of an elephant. If it is an animal, it is enraged.` }},
    { type: "spellPearl", name: `Spell pearl of Gravity Shift L${L}`, slot: 1, spell: { name: "Gravity Shift", charges: 1, description: `You can change the direction of gravity(for yourself only) up to once per round.`}},
    { type: "spellPearl", name: `Spell pearl of Greed L${L}`, slot: 1, spell: { name: "Greed", charges: 1, description: `${L} creatures develop an overwhelming urge to possess a visible item of your choice.`}},
    { type: "spellPearl", name: `Spell pearl of Gust L${L}`, slot: 1, spell: { name: "Gust", charges: L, description: `Creatures in a cone in front of you must make a STR Save or get pushed 10ft away from you. If the creatures collide with an object or other creature they take 1D4 Damage per 5ft moved.`}},
    { type: "spellPearl", name: `Spell pearl of Haste L${L}`, slot: 1, spell: { name: "Haste", charges: 1, description: `Target’s movement speed is doubled.`}},
    { type: "spellPearl", name: `Spell pearl of Hatred L${L}`, slot: 1, spell: { name: "Hatred", charges: 1, description: `${L} creatures develop a deep hatred of another creature or group of creatures of your choice, and wish to destroy it.`}},
    { type: "spellPearl", name: `Spell pearl of Hold L${L}`, slot: 1, spell: { name: "Hold", charges: 1, description: `An object is frozen in time and space within an invulnerable crystal shell}.` }},
    { type: "spellPearl", name: `Spell pearl of Hover L${L}`, slot: 1, spell: { name: "Hover", charges: L, description: `An object hovers, frictionless, 2ft above the ground. It can hold up to ${L} humanoids.` }},
    { type: "spellPearl", name: `Spell pearl of Icy Touch L${L}`, slot: 1, spell: { name: "Icy Touch", charges: L, description: `A thick ice layer spreads across a touched surface, up to the whole Room.` }},
    { type: "spellPearl", name: `Spell pearl of Illuminate L${L}`, slot: 1, spell: { name: "Illuminate", charges: 3, description: `A floating light moves as you command.` }},
    { type: "spellPearl", name: `Spell pearl of Ink Cloud L${L}`, slot: 1, spell: { name: "Ink Cloud", charges: 2, description: `An ${ L* 40 } feet wide cloud of darkness spreads out of you. ` }},
    { type: "spellPearl", name: `Spell pearl of Inverted Bubble L${L}`, slot: 1, spell: { name: "Inverted Bubble", charges: L, description: `You blow out a bunch of not - bubbles. ${L}D4 orbs of water get blown in a cone in front of you.  Anything that comes into contact with the water has it adhere to them, slowing them down.` }},
    { type: "spellPearl", name: `Spell pearl of Knock L${L}`, slot: 1, spell: { name: "Knock", charges: L, description: `A nearby mundane or magical lock unlocks` }},
    { type: "spellPearl", name: `Spell pearl of Lightning Bolt L${L}`, slot: 1, spell: { name: "Lightning Bolt", charges: Math.ceil(L / 2), description: `A bolt of electricity dances from your fingers.  Target creature must make a contested DEX Save vs your INT or take 1D10 Electrical Damage.` }},
    { type: "spellPearl", name: `Spell pearl of Liquid Air L${L}`, slot: 1, spell: { name: "Liquid Air", charges: 1, description: `The air around you becomes swimmable.` }},
    { type: "spellPearl", name: `Spell pearl of Lodestone L${L}`, slot: 1, spell: { name: "Lodestone", charges: 2, description: `${L} + 1 objects are strongly magnetically attracted to each other if they come within 10ft.` }},
    { type: "spellPearl", name: `Spell pearl of Marble Madness L${L}`, slot: 1, spell: { name: "Marble Madness", charges: 2, description: `Your pockets are full of marbles, and will refill every round.` }},
    { type: "spellPearl", name: `Spell pearl of Masquerade L${L}`, slot: 1, spell: { name: "Masquerade", charges: 1, description: `${L} characters’ appearances and voices become identical to a touched character.` }},
    { type: "spellPearl", name: `Spell pearl of Miniaturize L${L}`, slot: 1, spell: { name: "Miniaturize", charges: 1, description: `You and ${L} other touched creatures are reduced to the size of a walnut.` }},
    { type: "spellPearl", name: `Spell pearl of Mirror Image L${L}`, slot: 1, spell: { name: "Mirror Image", charges: 2, description: `${L} illusory duplicates of yourself appear under your control.` }},
    { type: "spellPearl", name: `Spell pearl of Multiarm L${L}`, slot: 1, spell: { name: "Multiarm", charges: 1, description: `You gain ${L} extra arms.They stick around until your next Rest.` }},
    { type: "spellPearl", name: `Spell pearl of Pacify L${L}`, slot: 1, spell: { name: "Pacify", charges: 1, description: `${L} creatures have an aversion to violence.` }},
    { type: "spellPearl", name: `Spell pearl of Phobia L${L}`, slot: 1, spell: { name: "Phobia", charges: 1, description: `${L} creatures become terrified of an object of your choice.`}},
    { type: "spellPearl", name: `Spell pearl of Pull L${L}`, slot: 1, spell: { name: "Pull", charges: L, description: `An object of any size is pulled directly towards you with the strength of ${L} men for one round.`}},
    { type: "spellPearl", name: `Spell pearl of Push L${L}`, slot: 1, spell: { name: "Push", charges: L, description: `An object of any size is pushed directly away from you with the strength of ${L} people for one round.`}},
    { type: "spellPearl", name: `Spell pearl of Raise Dead L${L}`, slot: 1, spell: { name: "Raise Dead", charges: 1, description: `${L} nearby bodies rise from the ground to serve you. They are incredibly stupid and can only obey simple orders.`}},
    { type: "spellPearl", name: `Spell pearl of Raise Spirit L${L}`, slot: 1, spell: { name: "Raise Spirit", charges: 1, description: `The spirit of a dead body manifests and will answer ${L} questions.`}},
    { type: "spellPearl", name: `Spell pearl of Read Mind L${L}`, slot: 1, spell: { name: "Read Mind", charges: 1, description: `You can hear the surface thoughts of nearby creatures.`}},
    { type: "spellPearl", name: `Spell pearl of Regeneration L${L}`, slot: 1, spell: { name: "Regeneration", charges: 2, description: `You heal a target creature ${L}D4 HP.`}},
    { type: "spellPearl", name: `Spell pearl of Repel L${L}`, slot: 1, spell: { name: "Repel", charges: 1, description: `${L} + 1 objects are strongly magnetically repelled from each other if they come within 10ft.`}},
    { type: "spellPearl", name: `Spell pearl of Scales of Iron L${L}`, slot: 1, spell: { name: "Scales of Iron", charges: 2, description: `Target creature gains +2 AD until your next Exploration Turn.`}},
    { type: "spellPearl", name: `Spell pearl of Sculpt Elements L${L}`, slot: 1, spell: { name: "Sculpt Elements", charges: 1, description: `All inanimate material behaves like clay in your hands.`}},
    { type: "spellPearl", name: `Spell pearl of Seafoam Form L${L}`, slot: 1, spell: { name: "Seafoam Form", charges: 1, description: `Your body becomes living seafoam.`}},
    { type: "spellPearl", name: `Spell pearl of Shroud L${L}`, slot: 1, spell: { name: "Shroud", charges: 1, description: `${L} creatures are invisible until they move.`}},
    { type: "spellPearl", name: `Spell pearl of Shuffle L${L}`, slot: 1, spell: { name: "Shuffle", charges: 1, description: `${L} + 1 creatures instantly switch places. Determine where they end up randomly.`}},
    { type: "spellPearl", name: `Spell pearl of Sleep L${L}`, slot: 1, spell: { name: "Sleep", charges: 1, description: `${L} creatures fall into a light sleep.`}},
    { type: "spellPearl", name: `Spell pearl of Slug Slime L${L}`, slot: 1, spell: { name: "Slug Slime", charges: 1, description: `Your hands and feet secrete a sticky mucus that allows you to climb surfaces like a slug.`}},
    { type: "spellPearl", name: `Spell pearl of Sniff L${L}`, slot: 1, spell: { name: "Sniff", charges: 1, description: `You can smell even the faintest trace of a scent.`}},
    { type: "spellPearl", name: `Spell pearl of Spellseize L${L}`, slot: 1, spell: { name: "Spellseize", charges: L, description: `Cast this as a reaction to another Spell going off to make a temporary copy of it that you can cast at any time before this Spell ends.`}},
    { type: "spellPearl", name: `Spell pearl of Sudden Wave L${L}`, slot: 1, spell: { name: "Sudden Wave", charges: Math.ceil(L/2), description: `A wave that appears suddenly. It comes outta nowhere and slams all creatures in the Room away from you, dealing 1D8 Damage.`}},
    { type: "spellPearl", name: `Spell pearl of Summon Cube L${L}`, slot: 1, spell: { name: "Summon Cube", charges: L, description: `Once per second, (6 times per round) you may summon or banish a 3ft square cube of earth. New cubes must be affixed to the earth or to other cubes.`}},
    { type: "spellPearl", name: `Spell pearl of Swarm L${L}`, slot: 1, spell: { name: "Swarm", charges: L, description: `You become a swarm of shrimp, plankton, or piranhas. You may occupy the same space as another creature. You may choose to deal 1D6 Damage to that creature per turn.`}},
    { type: "spellPearl", name: `Spell pearl of Telepathy L${L}`, slot: 1, spell: { name: "Telepathy", charges: L, description: `${L} + 1 creatures can hear each other’s thoughts, no matter how far apart they move.`}},
    { type: "spellPearl", name: `Spell pearl of Teleport L${L}`, slot: 1, spell: { name: "Teleport", charges: 1, description: `An object disappears and reappears on the ground in a visible, clear area up to ${L*40} feet away.`}},
    { type: "spellPearl", name: `Spell pearl of Thaumaturgic Anchor L${L}`, slot: 1, spell: { name: "Thaumaturgic Anchor", charges: L, description: `Target object becomes the target of every spell cast near it.`}},
    { type: "spellPearl", name: `Spell pearl of Thicket L${L}`, slot: 1, spell: { name: "Thicket", charges: L, description: `A thicket of kelp and seaweed suddenly sprouts up, covering the Room.`}},
    { type: "spellPearl", name: `Spell pearl of Time Jump L${L}`, slot: 1, spell: { name: "Time Jump", charges: 1, description: `An object disappears as it jumps ${L*10} minutes into the future.When it returns, it appears in the unoccupied area nearest to where it left.`}},
    { type: "spellPearl", name: `Spell pearl of True Sight L${L}`, slot: 1, spell: { name: "True Sight", charges: L, description: `You see through all nearby illusions.`}},
    { type: "spellPearl", name: `Spell pearl of Urchin Barbs L${L}`, slot: 1, spell: { name: "Urchin Barbs", charges: L, description: `Any creature that comes in contact with your poisonous barbs takes 1D4 Poison Damage.`}},
    { type: "spellPearl", name: `Spell pearl of Visual Illusion L${L}`, slot: 1, spell: { name: "Visual Illusion", charges: L, description: `A silent, immobile illusion of your choice appears, up to the size of a bedroom.`}},
    { type: "spellPearl", name: `Spell pearl of Ward L${L}`, slot: 1, spell: { name: "Ward", charges: 1, description: `A green circle appears around the Room. Choose one species that cannot enter the Room: Piscine, Crustacean, Cephalapod, or Cetacean.`}},
    { type: "spellPearl", name: `Spell pearl of Water Whip L${L}`, slot: 1, spell: { name: "Water Whip", charges: 2*L, description: `A source of water you can see obeys your command.  You can use it as a Whip.`}},
];

export function spellpearl(L, archmage=false, idx = undefined) {
    var table = spellPearlTable(L);

    var ret;
    if (idx !== undefined) {
        ret = table[idx];
    } else {
        ret = table[rollD(75) - 1];
    }

    if (archmage) {
        ret.spell.charges *= 2;
    }
    return ret;
}

export function newProfession(oldProfession, keepProfession, professionLevels) {
    if (keepProfession && oldProfession.type !== 'N/A') {
        return {
            ...oldProfession,
            level: Math.min(5, oldProfession.level + 1),
        }
    } else {
        const prof = profession();
        console.log(prof);

        console.log({
            type: prof,
            level: professionLevels[prof],
        });

        return {
            type: prof,
            level: professionLevels[prof],
        }
    }
}

export function newXp(xp, died) {
    //return died ? Math.floor(xp / 6) : xp;
    return Math.floor(xp / 6); // page 20
}

function maxHp() {
    const roll = rollD(8);

    if (roll >= 5) {
        return roll;
    }
    else {
        return rollD(8);
    }
}

export function rollNewInventory(archmage) {
    return [weapon(), armor(), helmetAndShield(), generalGear1(), generalGear2(), dungeoneeringGear(archmage)].flat();
    //return [weapon(), armor(), helmetAndShield(), generalGear1(), generalGear2(), dungeoneeringGear(archmage), slug(), spellpearl(1, archmage)].flat();
}

export function rollNewCharacter(name, character, died, newProf, heirloomItems) {
    const archmage = isEqual(newProf, { type: 'Magician', level: 5 });

    const hp = maxHp();

    return {
        name: name,
        stats: {
            str: rollStat(character.stats.str),
            dex: rollStat(character.stats.dex),
            con: rollStat(character.stats.con),
            int: rollStat(character.stats.int),
            wis: rollStat(character.stats.wis),
            cha: rollStat(character.stats.cha),
        },
        physique: physique(),
        hair: hair(),
        clothing: clothing(),
        face: face(),
        height: height(),
        speech: speech(),
        passion: passion(),

        xp: newXp(character.xp, died),
        hp: hp,
        currentHp: hp,
        profession: newProf,

        inventory: rollNewInventory(archmage).concat(heirloomItems),
    };
}

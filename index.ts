import { EventsSDK } from "github.com/octarine-public/wrapper/index"

console.log("Hello world!")
EventsSDK.on("GameStarted", () => {
	console.log("Hello world!")
	{
		"DODGER_WORD_v1_State": "State",
		"DODGER_WORD_v1_Boosts_Modes":  "Mode (boosts)",
		"DODGER_WORD_v1_Blink": "Blink",
		"DODGER_WORD_v1_Counter": "Counter",
		"DODGER_WORD_v1_Counter_Modes": "Mode (counter)",
		"DODGER_WORD_v1_Blinks_Modes": "Mode (blinks)",
		"DODGER_WORD_v1_Disable": "Disable",
		"DODGER_WORD_v1_Disables": "Disables",
		"DODGER_WORD_v1_Settings": "Settings",
		"DODGER_WORD_v3_buffs_debuffs": "buffs/debuffs",
		"DODGER_WORD_v1_Disable_Beta_Modes": "Mode (disables Beta)",
		"DODGER_WORD_v1_Boost_for": "Boost of evade",
		"DODGER_WORD_v1_Settings_Global": "Global settings",
		"DODGER_WORD_v1_Abilities": "Abilties",
		"DODGER_WORD_v1_Items": "Items",
		"DODGER_WORD_v1_Settings_Allies": "Allies settings",
		"DODGER_WORD_v1_Settings_Enemies": "Enemies settings",
		"DODGER_WORD_v1_Key_Binds": "Key binds",
		"DODGER_WORD_v1_Help_Allies": "Help allies",
		"DODGER_WORD_v1_Prioritize_Self": "Prioritize self",
		"DODGER_WORD_v1_Help_Ally_Heroes": "Ally heroes",
		"DODGER_WORD_v1_Auto_Revert": "Auto revert",
		"DODGER_WORD_v1_Auto_Revert_Tooltip": "Use auto revert form mischief",
		"DODGER_WORD_v1_Multi_Unit_Control": "Multi unit control",
		"DODGER_WORD_v1_Multi_Unit_Control_Tooltip": "Use all controllable units",
		"DODGER_WORD_v1_Modifier_Counter": "Evade/purge/disable buffs/debuffs",
		"DODGER_WORD_v1_Counter_Debuff": "Evade/purge/disable buff/debuff",
		"DODGER_WORD_v1_Counter_Debuff_Tooltip": "Counter debuff\nexample #1: \"Laguna Blade - Lina\" or \"Finger of Death - Lion\" and\nyou use \"Manta Style\" vs debuff damage\nexample #2: ally hero under stun/silence\n and you use on hero \"Lotus Orb\"",
		"DODGER_WORD_v1_Modifier_Counter_Tooltip": "Use abilities (shields, heals) on allies/self/enemies",
		"DODGER_WORD_v1_Level_Ignore": "Ignore by level",
		"DODGER_WORD_v1_Level_Ignore_Tooltip": "Ignore when ability\nlevel equals or lower",
		"DODGER_WORD_v1_Time_Ignore": "Ignore by game time",
		"DODGER_WORD_v1_Time_Ignore_Tooltip": "When game time passed (minutes)",
		"DODGER_WORD_v1_Damage_Ignore": "Ignore by damage",
		"DODGER_WORD_v1_Damage_Ignore_Tooltip": "Ignore when damage% is lower",
		"DODGER_WORD_v1_Enemy_Around_Ignore": "Ignore by count",
		"DODGER_WORD_v1_Enemy_Around_Ignore_Tooltip": "Ignore when there are less\nthan (x) enemy heroes around you",
		"DODGER_WORD_v1_Range_To_Check_Enemies": "Range to check enemy heroes around you",
		"DODGER_WORD_v1_Stack_Count_Ignore": "Ignore by stack count modifier",
		"DODGER_WORD_v1_Stack_Count_Ignore_Tooltip": "Ignore by stack count on you",
		"DODGER_WORD_v1_Status_Panel": "Status panel",
		"DODGER_WORD_v1_Status_Panel_Tooltip": "Draw the status of the Dodger\npanel and its operating modes",
		"DODGER_WORD_v1_Need_Lobby": "Need lobby",
		"DODGER_WORD_v1_Need_Lobby_Tooltip": "The script requires\na hero and a lobby."
	}
	{
		"Enemy settings": {
		  "items": {
			"item_clarity": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_blade_mail": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_ghost": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_satanic": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_black_king_bar": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_solar_crest": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_mjollnir": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_flask": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_diffusal_blade": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_orchid": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_veil_of_discord": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_rod_of_atos": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_gungir": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_trickster_cloak": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_havoc_hammer": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_abyssal_blade": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_glimmer_cape": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_spirit_vessel": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_invis_sword": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_sheepstick": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_bloodthorn": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_disperser": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_travel_boots": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_aeon_disk": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_ethereal_blade": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_silver_edge": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_harpoon": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_meteor_hammer": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_force_field": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"item_nullifier": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"item_book_of_shadows": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_axe": {
			"axe_berserkers_call": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"axe_battle_hunger": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"axe_culling_blade": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_sand_king": {
			"sandking_burrowstrike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 4,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_lion": {
			"lion_voodoo": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lion_mana_drain": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": false,
			  "customPriority": false
			},
			"lion_finger_of_death": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lion_impale": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_centaur_khan": {
			"centaur_khan_war_stomp": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_undying": {
			"undying_decay": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"undying_soul_rip": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"undying_tombstone": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_puck": {
			"puck_illusory_orb": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"puck_waning_rift": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"puck_dream_coil": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_gyrocopter": {
			"gyrocopter_rocket_barrage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"gyrocopter_homing_missile": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"gyrocopter_flak_cannon": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"gyrocopter_call_down": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_mud_golem": {
			"mud_golem_hurl_boulder": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_dazzle": {
			"dazzle_poison_touch": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dazzle_shallow_grave": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dazzle_shadow_wave": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_ogre_mauler": {
			"ogre_bruiser_ogre_smash": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_ogre_magi": {
			"ogre_magi_frost_armor": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_polar_furbolg_ursa_warrior": {
			"polar_furbolg_ursa_warrior_thunder_clap": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_dark_troll": {
			"dark_troll_warlord_ensnare": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_satyr_trickster": {
			"satyr_trickster_purge": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_satyr_hellcaller": {
			"satyr_hellcaller_shockwave": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_big_thunder_lizard": {
			"big_thunder_lizard_slam": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_neutral_black_dragon": {
			"black_dragon_fireball": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_necrolyte": {
			"necrolyte_death_pulse": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"necrolyte_ghost_shroud": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"necrolyte_reapers_scythe": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_earthshaker": {
			"earthshaker_aftershock": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"earthshaker_fissure": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"earthshaker_enchant_totem": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"earthshaker_echo_slam": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_phantom_lancer": {
			"phantom_lancer_spirit_lance": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_pudge": {
			"pudge_meat_hook": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"pudge_rot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"pudge_dismember": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_spirit_breaker": {
			"spirit_breaker_charge_of_darkness": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"spirit_breaker_bulldoze": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"spirit_breaker_nether_strike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_snapfire": {
			"snapfire_scatterblast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"snapfire_firesnap_cookie": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"snapfire_lil_shredder": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"snapfire_mortimer_kisses": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_medusa": {
			"medusa_mystic_snake": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"medusa_stone_gaze": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_antimage": {
			"antimage_blink": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"antimage_mana_void": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_phoenix": {
			"phoenix_icarus_dive": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"phoenix_supernova": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"phoenix_launch_fire_spirit": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_phantom_assassin": {
			"phantom_assassin_stifling_dagger": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"phantom_assassin_phantom_strike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_jakiro": {
			"jakiro_dual_breath": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"jakiro_ice_path": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_ancient_apparition": {
			"ancient_apparition_cold_feet": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ancient_apparition_ice_blast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_enigma": {
			"enigma_malefice": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"enigma_black_hole": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_faceless_void": {
			"faceless_void_chronosphere": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false,
			  "modifier": true
			},
			"faceless_void_time_walk": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"faceless_void_time_dilation": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_spectre": {
			"spectre_haunt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_weaver": {
			"weaver_the_swarm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"weaver_time_lapse": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_mars": {
			"mars_spear": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"mars_gods_rebuke": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"mars_arena_of_blood": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_ogre_magi": {
			"ogre_magi_fireblast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ogre_magi_ignite": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ogre_magi_bloodlust": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ogre_magi_unrefined_fireblast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_drow_ranger": {
			"drow_ranger_wave_of_silence": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"drow_ranger_multishot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_tusk": {
			"tusk_ice_shards": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"tusk_walrus_kick": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"tusk_tag_team": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_centaur": {
			"centaur_hoof_stomp": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"centaur_double_edge": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"centaur_stampede": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_witch_doctor": {
			"witch_doctor_paralyzing_cask": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"witch_doctor_maledict": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"witch_doctor_death_ward": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_dark_willow": {
			"dark_willow_bramble_maze": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dark_willow_cursed_crown": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dark_willow_bedlam": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dark_willow_terrorize": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_legion_commander": {
			"legion_commander_overwhelming_odds": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"legion_commander_press_the_attack": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"legion_commander_duel": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_skywrath_mage": {
			"skywrath_mage_arcane_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"skywrath_mage_concussive_shot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"skywrath_mage_ancient_seal": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"skywrath_mage_mystic_flare": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_vengefulspirit": {
			"vengefulspirit_magic_missile": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"vengefulspirit_wave_of_terror": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"vengefulspirit_nether_swap": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_muerta": {
			"muerta_parting_shot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_kunkka": {
			"kunkka_torrent": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"kunkka_tidebringer": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"kunkka_x_marks_the_spot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"kunkka_ghostship": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_chaos_knight": {
			"chaos_knight_chaos_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"chaos_knight_reality_rift": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"chaos_knight_phantasm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_mirana": {
			"mirana_starfall": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"mirana_arrow": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_obsidian_destroyer": {
			"obsidian_destroyer_astral_imprisonment": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"obsidian_destroyer_sanity_eclipse": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_juggernaut": {
			"juggernaut_blade_fury": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"juggernaut_omni_slash": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"juggernaut_swift_slash": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_warlock": {
			"warlock_fatal_bonds": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"warlock_shadow_word": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"warlock_upheaval": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"warlock_rain_of_chaos": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_naga_siren": {
			"naga_siren_ensnare": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"naga_siren_song_of_the_siren": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_slark": {
			"slark_pounce": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_shadow_shaman": {
			"shadow_shaman_ether_shock": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"shadow_shaman_voodoo": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"shadow_shaman_shackles": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"shadow_shaman_mass_serpent_ward": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_night_stalker": {
			"night_stalker_void": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"night_stalker_crippling_fear": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"night_stalker_darkness": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_rubick": {
			"rubick_telekinesis": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"rubick_fade_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"rubick_spell_steal": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"skywrath_mage_mystic_flare": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"snapfire_lil_shredder": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"snapfire_scatterblast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"gyrocopter_rocket_barrage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"necrolyte_death_pulse": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"zuus_lightning_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"weaver_the_swarm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"necrolyte_ghost_shroud": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"slark_pounce": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"necrolyte_reapers_scythe": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"zuus_arc_lightning": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"chaos_knight_reality_rift": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"mirana_starfall": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"axe_battle_hunger": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"chaos_knight_phantasm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"chaos_knight_chaos_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"axe_berserkers_call": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ogre_magi_fireblast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"zuus_thundergods_wrath": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"ogre_magi_bloodlust": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lion_mana_drain": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"pudge_meat_hook": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"lion_finger_of_death": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"pudge_dismember": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lion_impale": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"axe_culling_blade": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"faceless_void_time_dilation": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"nevermore_shadowraze1": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"pudge_rot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"nevermore_shadowraze2": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"naga_siren_ensnare": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"hoodwink_sharpshooter": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"mars_spear": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"mars_gods_rebuke": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"skeleton_king_hellfire_blast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"medusa_mystic_snake": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"medusa_stone_gaze": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"vengefulspirit_nether_swap": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"vengefulspirit_magic_missile": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"sandking_burrowstrike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"gyrocopter_homing_missile": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"hoodwink_bushwhack": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"gyrocopter_call_down": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"sniper_assassinate": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"spirit_breaker_charge_of_darkness": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"spirit_breaker_nether_strike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"sven_warcry": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dark_troll_warlord_ensnare": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"sven_storm_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"windrunner_windrun": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"doom_bringer_doom": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"shredder_whirling_death": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"spirit_breaker_bulldoze": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"windrunner_shackleshot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"invoker_tornado": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"vengefulspirit_wave_of_terror": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"invoker_emp": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"earthshaker_echo_slam": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"invoker_cold_snap": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"earthshaker_enchant_totem": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"invoker_alacrity": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"enchantress_enchant": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"invoker_chaos_meteor": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"faceless_void_time_walk": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"abyssal_underlord_firestorm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"abyssal_underlord_pit_of_malice": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"jakiro_ice_path": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"jakiro_dual_breath": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"faceless_void_chronosphere": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"pugna_nether_blast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"grimstroke_spirit_walk": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"pugna_life_drain": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lion_voodoo": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"oracle_fates_edict": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"tusk_ice_shards": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"death_prophet_spirit_siphon": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"death_prophet_carrion_swarm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"alchemist_unstable_concoction": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"alchemist_unstable_concoction_throw": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"skywrath_mage_concussive_shot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"shredder_timber_chain": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"skywrath_mage_arcane_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"antimage_blink": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"skywrath_mage_ancient_seal": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ogre_magi_ignite": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"shadow_shaman_mass_serpent_ward": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"shadow_shaman_shackles": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"shadow_shaman_ether_shock": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"shadow_shaman_voodoo": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lina_dragon_slave": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"lina_light_strike_array": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"dazzle_poison_touch": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dazzle_shallow_grave": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"bristleback_viscous_nasal_goo": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"bristleback_quill_spray": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"alchemist_chemical_rage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lina_laguna_blade": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_skeleton_king": {
			"skeleton_king_hellfire_blast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"skeleton_king_reincarnation": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_razor": {
			"razor_static_link": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"razor_eye_of_the_storm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_pugna": {
			"pugna_nether_blast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"pugna_decrepify": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"pugna_nether_ward": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"pugna_life_drain": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_techies": {
			"techies_suicide": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_crystal_maiden": {
			"crystal_maiden_crystal_nova": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"crystal_maiden_frostbite": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"crystal_maiden_freezing_field": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_zuus": {
			"zuus_arc_lightning": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"zuus_lightning_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"zuus_thundergods_wrath": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_chen": {
			"chen_penitence": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"chen_holy_persuasion": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"chen_hand_of_god": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_life_stealer": {
			"life_stealer_rage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"life_stealer_open_wounds": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_shredder": {
			"shredder_whirling_death": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"shredder_timber_chain": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_lina": {
			"lina_dragon_slave": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"lina_light_strike_array": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"lina_laguna_blade": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_terrorblade": {
			"terrorblade_reflection": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"terrorblade_metamorphosis": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"terrorblade_sunder": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_doom_bringer": {
			"doom_bringer_doom": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"satyr_trickster_purge": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dark_troll_warlord_ensnare": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"black_dragon_fireball": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"centaur_khan_war_stomp": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_furion": {
			"furion_sprout": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_invoker": {
			"invoker_cold_snap": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"invoker_tornado": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"invoker_emp": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"invoker_alacrity": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"invoker_chaos_meteor": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"invoker_sun_strike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"invoker_deafening_blast": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_monkey_king": {
			"monkey_king_jingu_mastery": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"monkey_king_boundless_strike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_death_prophet": {
			"death_prophet_carrion_swarm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"death_prophet_silence": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"death_prophet_spirit_siphon": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"death_prophet_exorcism": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_ursa": {
			"ursa_earthshock": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ursa_overpower": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ursa_fury_swipes": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ursa_enrage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_storm_spirit": {
			"storm_spirit_electric_vortex": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"storm_spirit_static_remnant": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_queenofpain": {
			"queenofpain_shadow_strike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"queenofpain_blink": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"queenofpain_scream_of_pain": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"queenofpain_sonic_wave": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_nyx_assassin": {
			"nyx_assassin_impale": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"nyx_assassin_jolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"nyx_assassin_spiked_carapace": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_bloodseeker": {
			"bloodseeker_blood_bath": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"bloodseeker_rupture": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_tiny": {
			"tiny_toss_tree": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_hoodwink": {
			"hoodwink_sharpshooter": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"hoodwink_bushwhack": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_ember_spirit": {
			"ember_spirit_searing_chains": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ember_spirit_sleight_of_fist": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"ember_spirit_flame_guard": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_riki": {
			"riki_smoke_screen": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_bristleback": {
			"bristleback_viscous_nasal_goo": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"bristleback_quill_spray": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_magnataur": {
			"magnataur_shockwave": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"magnataur_empower": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"magnataur_skewer": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"magnataur_reverse_polarity": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_winter_wyvern": {
			"winter_wyvern_winters_curse": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_disruptor": {
			"disruptor_thunder_strike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"disruptor_glimpse": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"disruptor_kinetic_field": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"disruptor_static_storm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_nevermore": {
			"nevermore_shadowraze1": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"nevermore_shadowraze2": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"nevermore_shadowraze3": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"nevermore_requiem": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_enchantress": {
			"enchantress_enchant": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_sniper": {
			"sniper_assassinate": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_venomancer": {
			"venomancer_venomous_gale": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"venomancer_noxious_plague": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_visage": {
			"visage_grave_chill": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"visage_soul_assumption": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_luna": {
			"luna_lucent_beam": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"luna_eclipse": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_morphling": {
			"morphling_waveform": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"morphling_adaptive_strike_agi": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"morphling_adaptive_strike_str": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"rubick_fade_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"rubick_telekinesis": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"gyrocopter_homing_missile": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"gyrocopter_flak_cannon": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"gyrocopter_rocket_barrage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"sandking_burrowstrike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"obsidian_destroyer_astral_imprisonment": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"invoker_sun_strike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"hoodwink_bushwhack": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"shredder_timber_chain": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"shredder_whirling_death": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"medusa_mystic_snake": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"medusa_stone_gaze": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"juggernaut_blade_fury": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"undying_decay": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"undying_tombstone": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"undying_soul_rip": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"earthshaker_aftershock": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"earthshaker_enchant_totem": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"earthshaker_fissure": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"pudge_meat_hook": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"pudge_rot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"life_stealer_rage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"life_stealer_open_wounds": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"furion_sprout": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_sven": {
			"sven_gods_strength": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"sven_warcry": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"sven_storm_bolt": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_keeper_of_the_light": {
			"keeper_of_the_light_blinding_light": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"keeper_of_the_light_chakra_magic": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"keeper_of_the_light_radiant_bind": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_beastmaster": {
			"beastmaster_wild_axes": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"beastmaster_primal_roar": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_templar_assassin": {
			"templar_assassin_meld": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"templar_assassin_psionic_trap": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_templar_assassin_psionic_trap": {
			"templar_assassin_psionic_trap": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_alchemist": {
			"alchemist_berserk_potion": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"alchemist_chemical_rage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"alchemist_unstable_concoction_throw": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"alchemist_unstable_concoction": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_primal_beast": {
			"primal_beast_pulverize": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_necronomicon_archer": {
			"necronomicon_archer_purge": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_slardar": {
			"slardar_slithereen_crush": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"slardar_amplify_damage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_dragon_knight": {
			"dragon_knight_breathe_fire": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dragon_knight_dragon_tail": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_bounty_hunter": {
			"bounty_hunter_shuriken_toss": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"bounty_hunter_track": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_troll_warlord": {
			"troll_warlord_whirling_axes_ranged": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"troll_warlord_berserkers_rage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"troll_warlord_battle_trance": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_silencer": {
			"silencer_curse_of_the_silent": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"silencer_last_word": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"silencer_global_silence": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_clinkz": {
			"clinkz_burning_army": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_viper": {
			"viper_nethertoxin": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"viper_viper_strike": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_treant": {
			"treant_living_armor": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"treant_overgrowth": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_dark_seer": {
			"dark_seer_vacuum": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"dark_seer_ion_shell": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dark_seer_surge": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"dark_seer_wall_of_replica": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_windrunner": {
			"windrunner_shackleshot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"windrunner_powershot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"windrunner_windrun": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"windrunner_focusfire": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_arc_warden": {
			"arc_warden_flux": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_abaddon": {
			"abaddon_frostmourne": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"abaddon_aphotic_shield": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"abaddon_death_coil": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"abaddon_borrowed_time": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_broodmother": {
			"broodmother_insatiable_hunger": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"broodmother_spawn_spiderlings": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_lich": {
			"lich_chain_frost": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lich_frost_nova": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"lich_frost_shield": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lich_sinister_gaze": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_abyssal_underlord": {
			"abyssal_underlord_firestorm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"abyssal_underlord_pit_of_malice": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_tinker": {
			"tinker_laser": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"tinker_warp_grenade": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_tidehunter": {
			"tidehunter_gush": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"tidehunter_anchor_smash": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"tidehunter_ravage": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_void_spirit": {
			"void_spirit_dissimilate": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"void_spirit_resonant_pulse": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"void_spirit_astral_step": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_batrider": {
			"batrider_sticky_napalm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"batrider_flamebreak": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"batrider_flaming_lasso": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_huskar": {
			"huskar_inner_fire": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"huskar_burning_spear": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"huskar_life_break": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_oracle": {
			"oracle_fortunes_end": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"oracle_fates_edict": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"oracle_purifying_flames": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"oracle_false_promise": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_elder_titan": {
			"elder_titan_echo_stomp": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"elder_titan_earth_splitter": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_rattletrap": {
			"rattletrap_battery_assault": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"rattletrap_power_cogs": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"rattletrap_rocket_flare": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"rattletrap_hookshot": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_grimstroke": {
			"grimstroke_dark_artistry": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"grimstroke_ink_creature": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"grimstroke_spirit_walk": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"grimstroke_soul_chain": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_leshrac": {
			"leshrac_split_earth": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"leshrac_lightning_storm": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"leshrac_pulse_nova": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_shadow_demon": {
			"shadow_demon_disruption": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"shadow_demon_shadow_poison": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"shadow_demon_demonic_purge": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_lone_druid": {
			"lone_druid_savage_roar": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			},
			"lone_druid_spirit_bear_entangle": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_pangolier": {
			"pangolier_shield_crash": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "customPriority": false
			},
			"pangolier_gyroshell": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  },
		  "npc_dota_hero_lycan": {
			"lycan_shapeshift": {
			  "ignoreMenu": {
				"levelIgnore": 0,
				"timeIgnore": 0,
				"damageIgnore": 0,
				"enemyAroundIgnore": 0,
				"rangeToCheckEnemy": 1000
			  },
			  "enabled": true,
			  "modifier": true,
			  "customPriority": false
			}
		  }
		},
		"Ally settings": {
		  "Help allies": true,
		  "Prioritize self": true,
		  "Allies": {
			"npc_dota_hero_antimage": "0, true",
			"npc_dota_hero_sand_king": "4, true",
			"npc_dota_hero_nevermore": "0, true",
			"npc_dota_hero_pudge": "3, true",
			"npc_dota_hero_razor": "3, true",
			"npc_dota_hero_templar_assassin": "0, true",
			"npc_dota_hero_shadow_shaman": "2, true",
			"npc_dota_hero_skywrath_mage": "3, true",
			"npc_dota_hero_naga_siren": "3, true",
			"npc_dota_hero_riki": "4, true",
			"npc_dota_hero_drow_ranger": "3, true",
			"npc_dota_hero_zuus": "0, true",
			"npc_dota_hero_sniper": "3, true",
			"npc_dota_hero_sven": "1, true",
			"npc_dota_hero_pugna": "2, true",
			"npc_dota_hero_hoodwink": "3, true",
			"npc_dota_hero_chaos_knight": "1, true",
			"npc_dota_hero_gyrocopter": "4, true",
			"npc_dota_hero_juggernaut": "2, true",
			"npc_dota_hero_tidehunter": "1, true",
			"npc_dota_hero_omniknight": "1, true",
			"npc_dota_hero_dark_seer": "3, true",
			"npc_dota_hero_vengefulspirit": "3, true",
			"npc_dota_hero_faceless_void": "3, true",
			"npc_dota_hero_spirit_breaker": "3, true",
			"npc_dota_hero_jakiro": "0, true",
			"npc_dota_hero_phantom_assassin": "3, true",
			"npc_dota_hero_luna": "4, true",
			"npc_dota_hero_primal_beast": "1, true",
			"npc_dota_hero_undying": "4, true",
			"npc_dota_hero_windrunner": "1, true",
			"npc_dota_hero_abaddon": "3, true",
			"npc_dota_hero_morphling": "1, true",
			"npc_dota_hero_crystal_maiden": "4, true",
			"npc_dota_hero_legion_commander": "4, true",
			"npc_dota_hero_furion": "4, true",
			"npc_dota_hero_storm_spirit": "2, true",
			"npc_dota_hero_bloodseeker": "2, true",
			"npc_dota_hero_tinker": "1, true",
			"npc_dota_hero_invoker": "1, true",
			"npc_dota_hero_rubick": "1, true",
			"npc_dota_hero_ogre_magi": "0, true",
			"npc_dota_hero_shredder": "3, true",
			"npc_dota_hero_tiny": "2, true",
			"npc_dota_hero_snapfire": "1, true",
			"npc_dota_hero_slardar": "2, true",
			"npc_dota_hero_dazzle": "4, true",
			"npc_dota_hero_terrorblade": "1, true",
			"npc_dota_hero_skeleton_king": "1, true",
			"npc_dota_hero_ancient_apparition": "1, true",
			"npc_dota_hero_monkey_king": "1, true",
			"npc_dota_hero_magnataur": "1, true",
			"npc_dota_hero_necrolyte": "3, true",
			"npc_dota_hero_slark": "0, true",
			"npc_dota_hero_weaver": "1, true",
			"npc_dota_hero_lycan": "0, true",
			"npc_dota_hero_disruptor": "3, true",
			"npc_dota_hero_viper": "3, true",
			"npc_dota_hero_earth_spirit": "1, true",
			"npc_dota_hero_warlock": "3, true",
			"npc_dota_hero_elder_titan": "2, true",
			"npc_dota_hero_earthshaker": "1, true",
			"npc_dota_hero_keeper_of_the_light": "3, true",
			"npc_dota_hero_death_prophet": "4, true",
			"npc_dota_hero_witch_doctor": "4, true",
			"npc_dota_hero_techies": "1, true",
			"npc_dota_hero_lich": "4, true",
			"npc_dota_hero_lion": "3, true",
			"npc_dota_hero_oracle": "0, true",
			"npc_dota_hero_centaur": "1, true",
			"npc_dota_hero_phoenix": "3, true",
			"npc_dota_hero_kunkka": "0, true",
			"npc_dota_hero_obsidian_destroyer": "2, true",
			"npc_dota_hero_phantom_lancer": "1, true",
			"npc_dota_hero_nyx_assassin": "2, true",
			"npc_dota_hero_tusk": "1, true",
			"npc_dota_hero_muerta": "3, true",
			"npc_dota_hero_enigma": "1, true",
			"npc_dota_hero_bristleback": "0, true",
			"npc_dota_hero_dragon_knight": "4, true",
			"npc_dota_hero_enchantress": "4, true",
			"npc_dota_hero_bounty_hunter": "2, true",
			"npc_dota_hero_lina": "3, true",
			"npc_dota_hero_axe": "4, true",
			"npc_dota_hero_treant": "2, true",
			"npc_dota_hero_clinkz": "0, true",
			"npc_dota_hero_mars": "0, true",
			"npc_dota_hero_mirana": "3, true",
			"npc_dota_hero_queenofpain": "1, true",
			"npc_dota_hero_shadow_demon": "2, true",
			"npc_dota_hero_medusa": "3, true",
			"npc_dota_hero_rattletrap": "0, true",
			"npc_dota_hero_silencer": "4, true",
			"npc_dota_hero_brewmaster": "3, true",
			"npc_dota_hero_huskar": "2, true",
			"npc_dota_hero_abyssal_underlord": "1, true",
			"npc_dota_hero_spectre": "2, true",
			"npc_dota_hero_winter_wyvern": "3, true",
			"npc_dota_hero_ursa": "2, true",
			"npc_dota_hero_grimstroke": "3, true",
			"npc_dota_hero_ember_spirit": "0, true",
			"npc_dota_hero_void_spirit": "2, true",
			"npc_dota_hero_dark_willow": "3, true",
			"npc_dota_hero_bane": "4, true",
			"npc_dota_hero_visage": "0, true",
			"npc_dota_hero_arc_warden": "2, true",
			"npc_dota_hero_venomancer": "1, true",
			"npc_dota_hero_meepo": "0, true",
			"npc_dota_hero_doom_bringer": "4, true",
			"npc_dota_hero_marci": "2, true",
			"npc_dota_hero_puck": "3, true",
			"npc_dota_hero_lone_druid": "4, true",
			"npc_dota_hero_night_stalker": "2, true",
			"npc_dota_hero_dawnbreaker": "4, true",
			"npc_dota_hero_alchemist": "2, true",
			"npc_dota_hero_broodmother": "0, true",
			"npc_dota_hero_wisp": "4, true",
			"npc_dota_hero_life_stealer": "4, true",
			"npc_dota_hero_ringmaster": "4, true"
		  }
		},
		"Abilities": {
		  "uniqueAbilitySettings": {
			"uniqueSettingsantimage_blink": {
			  "Blink:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"sandking_burrowstrike": "2, true",
				"lion_finger_of_death": "1, true",
				"lion_impale": "0, true",
				"skeleton_king_hellfire_blast": "2, true",
				"techies_suicide": "1, true",
				"dark_troll_warlord_ensnare": "4, true",
				"item_ethereal_blade": "3, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"faceless_void_chronosphere": "0, true",
				"nevermore_requiem": "2, true",
				"sven_storm_bolt": "3, true",
				"tinker_warp_grenade": "1, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"slardar_slithereen_crush": "2, true",
				"sniper_assassinate": "3, true",
				"ogre_magi_fireblast": "4, true",
				"ogre_magi_unrefined_fireblast": "5, true",
				"item_gungir": "7, true",
				"storm_spirit_electric_vortex": "0, true",
				"pudge_meat_hook": "2, true",
				"necrolyte_reapers_scythe": "0, true",
				"silencer_global_silence": "1, true",
				"ancient_apparition_ice_blast": "3, true"
			  },
			  "Modifier blink:": {
				"rubick_telekinesis": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsantimage_counterspell": {
			  "Counter:": {
				"axe_battle_hunger": "0, true",
				"axe_culling_blade": "1, true",
				"sandking_burrowstrike": "2, true",
				"lion_voodoo": "1, true",
				"lion_mana_drain": "2, true",
				"lion_finger_of_death": "3, true",
				"lion_impale": "0, true",
				"skeleton_king_hellfire_blast": "2, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"razor_static_link": "4, true",
				"pugna_decrepify": "3, true",
				"pugna_life_drain": "4, true",
				"dark_troll_warlord_ensnare": "3, true",
				"mud_golem_hurl_boulder": "4, true",
				"item_sheepstick": "9, true",
				"item_ethereal_blade": "8, true",
				"life_stealer_open_wounds": "4, true",
				"witch_doctor_paralyzing_cask": "5, true",
				"sven_storm_bolt": "5, true",
				"lina_laguna_blade": "0, true",
				"slardar_amplify_damage": "1, true",
				"sniper_assassinate": "2, true",
				"ogre_magi_fireblast": "3, true",
				"ogre_magi_ignite": "4, true",
				"ogre_magi_unrefined_fireblast": "5, true",
				"item_gungir": "8, true",
				"antimage_mana_void": "0, true",
				"furion_sprout": "1, true",
				"queenofpain_shadow_strike": "2, true",
				"gyrocopter_homing_missile": "3, true",
				"item_orchid": "3, true",
				"item_bloodthorn": "7, true",
				"storm_spirit_electric_vortex": "0, true",
				"rubick_fade_bolt": "5, true",
				"rubick_spell_steal": "6, true",
				"rubick_telekinesis": "7, true",
				"skywrath_mage_arcane_bolt": "9, true",
				"item_abyssal_blade": "10, true",
				"skywrath_mage_ancient_seal": "11, true",
				"necrolyte_reapers_scythe": "0, true",
				"silencer_last_word": "1, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsantimage_counterspell_ally": {
			  "Counter:": {
				"axe_battle_hunger": "0, true",
				"axe_culling_blade": "1, true",
				"sandking_burrowstrike": "2, true",
				"lion_voodoo": "1, true",
				"lion_mana_drain": "2, true",
				"lion_finger_of_death": "3, true",
				"lion_impale": "0, true",
				"skeleton_king_hellfire_blast": "2, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"razor_static_link": "4, true",
				"pugna_decrepify": "3, true",
				"pugna_life_drain": "4, true",
				"dark_troll_warlord_ensnare": "3, true",
				"mud_golem_hurl_boulder": "4, true",
				"item_sheepstick": "9, true",
				"item_ethereal_blade": "8, true",
				"life_stealer_open_wounds": "4, true",
				"witch_doctor_paralyzing_cask": "5, true",
				"sven_storm_bolt": "5, true",
				"lina_laguna_blade": "0, true",
				"slardar_amplify_damage": "1, true",
				"sniper_assassinate": "2, true",
				"ogre_magi_fireblast": "3, true",
				"ogre_magi_ignite": "4, true",
				"ogre_magi_unrefined_fireblast": "5, true",
				"item_gungir": "8, true",
				"storm_spirit_electric_vortex": "0, true",
				"rubick_fade_bolt": "5, true",
				"rubick_spell_steal": "6, true",
				"rubick_telekinesis": "7, true",
				"furion_sprout": "1, true",
				"item_orchid": "3, true",
				"skywrath_mage_arcane_bolt": "9, true",
				"item_abyssal_blade": "10, true",
				"skywrath_mage_ancient_seal": "11, true",
				"necrolyte_reapers_scythe": "0, true",
				"silencer_last_word": "1, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingscourier_burst": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingscourier_shield": {
			  "Counter:": {
				"axe_culling_blade": "0, true",
				"mars_gods_rebuke": "0, true",
				"lina_laguna_blade": "0, true",
				"queenofpain_sonic_wave": "0, true",
				"void_spirit_astral_step": "0, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_manta": {
			  "Counter:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"sandking_burrowstrike": "0, true",
				"lion_voodoo": "2, true",
				"lion_finger_of_death": "3, true",
				"lion_impale": "1, true",
				"mars_spear": "3, true",
				"vengefulspirit_magic_missile": "4, true",
				"vengefulspirit_nether_swap": "5, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"muerta_parting_shot": "5, true",
				"gyrocopter_homing_missile": "6, true",
				"gyrocopter_call_down": "7, true",
				"item_sheepstick": "4, true",
				"skeleton_king_hellfire_blast": "0, true",
				"pugna_nether_blast": "1, true",
				"techies_suicide": "2, true",
				"item_ethereal_blade": "6, true",
				"nevermore_requiem": "3, true",
				"sven_storm_bolt": "4, true",
				"terrorblade_sunder": "0, true",
				"morphling_adaptive_strike_str": "1, true",
				"faceless_void_chronosphere": "2, true",
				"mirana_arrow": "1, true",
				"venomancer_noxious_plague": "4, true",
				"obsidian_destroyer_astral_imprisonment": "1, true",
				"obsidian_destroyer_sanity_eclipse": "2, true",
				"invoker_emp": "4, true",
				"invoker_sun_strike": "5, true",
				"doom_bringer_doom": "7, true",
				"sniper_assassinate": "7, true",
				"monkey_king_boundless_strike": "1, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"slardar_slithereen_crush": "2, true",
				"slark_pounce": "3, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"alchemist_unstable_concoction_throw": "6, true",
				"ancient_apparition_ice_blast": "2, true",
				"windrunner_shackleshot": "6, true",
				"item_abyssal_blade": "4, true",
				"antimage_mana_void": "0, true",
				"legion_commander_overwhelming_odds": "2, true",
				"legion_commander_duel": "3, true",
				"item_orchid": "3, true",
				"kunkka_torrent": "1, true",
				"kunkka_ghostship": "2, true",
				"snapfire_firesnap_cookie": "2, true",
				"item_nullifier": "3, true",
				"keeper_of_the_light_blinding_light": "0, true",
				"hoodwink_bushwhack": "1, true",
				"hoodwink_sharpshooter": "2, true",
				"item_bloodthorn": "2, true",
				"storm_spirit_electric_vortex": "0, true",
				"pudge_meat_hook": "2, true",
				"skywrath_mage_mystic_flare": "3, true",
				"skywrath_mage_ancient_seal": "5, true",
				"rattletrap_hookshot": "0, true",
				"bloodseeker_blood_bath": "0, true",
				"bloodseeker_rupture": "1, true",
				"zuus_thundergods_wrath": "0, true",
				"luna_eclipse": "1, true",
				"pudge_dismember": "3, true",
				"necrolyte_reapers_scythe": "0, true",
				"nyx_assassin_impale": "1, true"
			  },
			  "Modifier counter:": {
				"axe_berserkers_call": "0, true",
				"sandking_burrowstrike": "0, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"lion_impale": "0, true",
				"mars_spear": "2, true",
				"vengefulspirit_magic_missile": "5, true",
				"muerta_parting_shot": "2, true",
				"gyrocopter_homing_missile": "3, true",
				"dark_troll_warlord_ensnare": "6, true",
				"item_sheepstick": "10, true",
				"item_gungir": "3, true",
				"skeleton_king_hellfire_blast": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"pugna_life_drain": "2, true",
				"techies_suicide": "3, true",
				"item_ethereal_blade": "13, true",
				"nevermore_requiem": "3, true",
				"sven_storm_bolt": "4, true",
				"item_havoc_hammer": "6, true",
				"troll_warlord_berserkers_rage": "0, true",
				"silencer_curse_of_the_silent": "1, true",
				"silencer_last_word": "2, true",
				"silencer_global_silence": "3, true",
				"morphling_adaptive_strike_str": "5, true",
				"mirana_arrow": "1, true",
				"abyssal_underlord_pit_of_malice": "0, true",
				"drow_ranger_wave_of_silence": "4, true",
				"night_stalker_crippling_fear": "0, true",
				"venomancer_noxious_plague": "2, true",
				"doom_bringer_doom": "1, true",
				"monkey_king_boundless_strike": "3, true",
				"lina_laguna_blade": "0, true",
				"slardar_slithereen_crush": "1, true",
				"ogre_magi_fireblast": "5, true",
				"ogre_magi_ignite": "4, true",
				"ogre_magi_unrefined_fireblast": "6, true",
				"alchemist_unstable_concoction_throw": "5, true",
				"ancient_apparition_cold_feet": "5, true",
				"windrunner_shackleshot": "6, true",
				"item_rod_of_atos": "6, true",
				"item_abyssal_blade": "4, true",
				"legion_commander_duel": "2, true",
				"ember_spirit_searing_chains": "4, true",
				"item_orchid": "4, true",
				"kunkka_ghostship": "0, true",
				"crystal_maiden_frostbite": "0, true",
				"crystal_maiden_freezing_field": "1, true",
				"keeper_of_the_light_blinding_light": "0, true",
				"keeper_of_the_light_radiant_bind": "1, true",
				"item_bloodthorn": "5, true",
				"storm_spirit_electric_vortex": "0, true",
				"life_stealer_open_wounds": "3, true",
				"rubick_telekinesis": "3, true",
				"rattletrap_battery_assault": "0, true",
				"rattletrap_hookshot": "1, true",
				"bloodseeker_blood_bath": "0, true",
				"luna_eclipse": "0, true",
				"pudge_dismember": "3, true",
				"necrolyte_reapers_scythe": "0, true",
				"nyx_assassin_impale": "2, true",
				"faceless_void_chronosphere": "2, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingssandking_sand_storm": {
			  "Counter:": {
				"sandking_burrowstrike": "0, true",
				"lion_voodoo": "0, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"pudge_dismember": "2, true",
				"mud_golem_hurl_boulder": "3, true",
				"dark_troll_warlord_ensnare": "4, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingssandking_burrowstrike": {
			  "Blink:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"sandking_burrowstrike": "4, true",
				"lion_finger_of_death": "1, true",
				"lion_impale": "0, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"invoker_tornado": "1, true",
				"necrolyte_reapers_scythe": "2, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"dark_troll_warlord_ensnare": "6, true",
				"morphling_adaptive_strike_str": "6, true",
				"death_prophet_silence": "0, true",
				"vengefulspirit_magic_missile": "1, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"alchemist_unstable_concoction_throw": "2, true",
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"nyx_assassin_impale": "5, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"lion_impale": "0, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"necrolyte_reapers_scythe": "1, true",
				"witch_doctor_death_ward": "2, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"dark_troll_warlord_ensnare": "7, true",
				"morphling_adaptive_strike_str": "5, true",
				"death_prophet_silence": "0, true",
				"death_prophet_exorcism": "1, true",
				"vengefulspirit_magic_missile": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"ogre_magi_fireblast": "4, true",
				"ogre_magi_unrefined_fireblast": "5, true",
				"phantom_assassin_phantom_strike": "6, true",
				"alchemist_unstable_concoction_throw": "3, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"nyx_assassin_impale": "6, true",
				"item_orchid": "8, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true"
			  }
			},
			"uniqueSettingsitem_black_king_bar": {
			  "Counter:": {
				"axe_berserkers_call": "0, true",
				"sandking_burrowstrike": "1, true",
				"lion_voodoo": "5, true",
				"lion_impale": "4, true",
				"dark_willow_terrorize": "1, true",
				"snapfire_firesnap_cookie": "3, true",
				"legion_commander_duel": "1, true",
				"skywrath_mage_ancient_seal": "2, true",
				"skywrath_mage_mystic_flare": "3, true",
				"mars_spear": "0, true",
				"vengefulspirit_magic_missile": "1, true",
				"spirit_breaker_charge_of_darkness": "2, true",
				"spirit_breaker_nether_strike": "3, true",
				"muerta_parting_shot": "0, true",
				"gyrocopter_homing_missile": "2, true",
				"gyrocopter_call_down": "3, true",
				"item_sheepstick": "6, true",
				"kunkka_torrent": "1, true",
				"kunkka_ghostship": "2, true",
				"chaos_knight_chaos_bolt": "4, true",
				"chaos_knight_reality_rift": "5, true",
				"faceless_void_chronosphere": "2, true",
				"item_orchid": "8, true",
				"skeleton_king_hellfire_blast": "1, true",
				"techies_suicide": "2, true",
				"item_ethereal_blade": "8, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"item_bloodthorn": "5, true",
				"death_prophet_silence": "1, true",
				"storm_spirit_electric_vortex": "0, true",
				"pudge_meat_hook": "0, true",
				"pudge_dismember": "1, true",
				"warlock_rain_of_chaos": "4, true",
				"magnataur_reverse_polarity": "3, true",
				"drow_ranger_wave_of_silence": "0, true",
				"disruptor_glimpse": "1, true",
				"disruptor_static_storm": "2, true",
				"shadow_shaman_voodoo": "2, true",
				"shadow_shaman_shackles": "3, true",
				"sniper_assassinate": "3, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"item_nullifier": "7, true",
				"necrolyte_reapers_scythe": "0, true",
				"night_stalker_crippling_fear": "1, true",
				"earthshaker_fissure": "0, true",
				"earthshaker_echo_slam": "1, true",
				"item_abyssal_blade": "6, true",
				"obsidian_destroyer_sanity_eclipse": "2, true",
				"antimage_mana_void": "3, true",
				"windrunner_shackleshot": "2, true",
				"slardar_slithereen_crush": "0, true",
				"luna_eclipse": "0, true",
				"nyx_assassin_impale": "5, true",
				"dragon_knight_dragon_tail": "2, true",
				"monkey_king_boundless_strike": "1, true",
				"sven_storm_bolt": "2, true",
				"jakiro_ice_path": "6, true",
				"lina_light_strike_array": "0, true",
				"phoenix_supernova": "1, true",
				"tidehunter_ravage": "0, true",
				"huskar_life_break": "1, true",
				"primal_beast_pulverize": "2, true",
				"crystal_maiden_frostbite": "0, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"doom_bringer_doom": "4, true",
				"rattletrap_hookshot": "3, true",
				"invoker_tornado": "4, true",
				"invoker_emp": "5, true",
				"beastmaster_primal_roar": "2, true",
				"void_spirit_dissimilate": "6, true",
				"void_spirit_resonant_pulse": "7, true",
				"winter_wyvern_winters_curse": "4, true"
			  },
			  "Modifier counter:": {
				"lion_finger_of_death": "0, true",
				"dark_willow_cursed_crown": "0, true",
				"item_orchid": "2, true",
				"phantom_assassin_stifling_dagger": "0, true",
				"item_bloodthorn": "2, true",
				"ogre_magi_ignite": "0, true",
				"queenofpain_shadow_strike": "0, true",
				"silencer_last_word": "0, true",
				"silencer_global_silence": "1, true",
				"venomancer_noxious_plague": "1, true",
				"lina_laguna_blade": "0, true",
				"puck_waning_rift": "0, true",
				"treant_overgrowth": "0, true",
				"rubick_telekinesis": "1, true",
				"ancient_apparition_cold_feet": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_sphere": {
			  "Counter:": {
				"axe_culling_blade": "0, true",
				"sandking_burrowstrike": "0, true",
				"pudge_dismember": "0, true",
				"sniper_assassinate": "0, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"juggernaut_omni_slash": "3, true",
				"juggernaut_swift_slash": "4, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"dark_troll_warlord_ensnare": "7, true",
				"mud_golem_hurl_boulder": "6, true",
				"item_ethereal_blade": "9, true",
				"item_nullifier": "10, true",
				"obsidian_destroyer_astral_imprisonment": "2, true",
				"earthshaker_echo_slam": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"dark_willow_cursed_crown": "5, true",
				"item_sheepstick": "5, true",
				"skeleton_king_hellfire_blast": "0, true",
				"batrider_flaming_lasso": "1, true",
				"item_rod_of_atos": "3, true",
				"spirit_breaker_nether_strike": "1, true",
				"item_orchid": "5, true",
				"item_bloodthorn": "4, true",
				"shadow_shaman_voodoo": "2, true",
				"shadow_shaman_shackles": "3, true",
				"necrolyte_reapers_scythe": "4, true",
				"dragon_knight_dragon_tail": "0, true",
				"windrunner_shackleshot": "1, true",
				"legion_commander_duel": "3, true",
				"hoodwink_bushwhack": "3, true",
				"item_gungir": "4, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"tinker_warp_grenade": "3, true",
				"muerta_parting_shot": "2, true"
			  },
			  "Modifier counter:": {
				"item_sheepstick": "0, true",
				"shadow_shaman_voodoo": "0, true",
				"lion_voodoo": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_abyssal_blade": {
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"lion_impale": "0, true",
				"necrolyte_reapers_scythe": "0, true",
				"phoenix_icarus_dive": "1, true",
				"phantom_assassin_phantom_strike": "6, true",
				"medusa_stone_gaze": "3, true",
				"jakiro_ice_path": "4, true",
				"dark_troll_warlord_ensnare": "3, true",
				"drow_ranger_wave_of_silence": "3, true",
				"drow_ranger_multishot": "4, true",
				"centaur_hoof_stomp": "2, true",
				"witch_doctor_paralyzing_cask": "5, true",
				"witch_doctor_death_ward": "6, true",
				"faceless_void_time_walk": "5, true",
				"faceless_void_chronosphere": "6, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"warlock_rain_of_chaos": "2, true",
				"zuus_thundergods_wrath": "3, true",
				"storm_spirit_electric_vortex": "0, true",
				"legion_commander_duel": "5, true",
				"item_orchid": "1, true",
				"item_bloodthorn": "8, true",
				"nevermore_requiem": "3, true",
				"sven_gods_strength": "4, true",
				"sven_storm_bolt": "5, true",
				"undying_tombstone": "0, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"antimage_blink": "5, true",
				"antimage_mana_void": "5, true",
				"huskar_life_break": "4, true",
				"spirit_breaker_charge_of_darkness": "5, true",
				"spirit_breaker_nether_strike": "6, true",
				"abyssal_underlord_pit_of_malice": "7, true",
				"earthshaker_echo_slam": "3, true",
				"pudge_meat_hook": "7, true",
				"pudge_dismember": "1, true",
				"earthshaker_fissure": "2, true",
				"item_abyssal_blade": "4, true",
				"spectre_haunt": "2, true",
				"skywrath_mage_ancient_seal": "6, true"
			  },
			  "Modifier disable:": {
				"faceless_void_chronosphere": "0, true",
				"warlock_upheaval": "0, true",
				"sven_gods_strength": "0, true",
				"lich_sinister_gaze": "0, true",
				"pudge_dismember": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_cyclone": {
			  "Counter:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"sandking_burrowstrike": "0, true",
				"lion_finger_of_death": "2, true",
				"lion_impale": "1, true",
				"puck_dream_coil": "2, true",
				"gyrocopter_homing_missile": "2, true",
				"gyrocopter_call_down": "3, true",
				"necrolyte_reapers_scythe": "0, true",
				"phoenix_supernova": "1, true",
				"jakiro_ice_path": "2, true",
				"pudge_dismember": "3, true",
				"ancient_apparition_ice_blast": "4, true",
				"antimage_mana_void": "2, true",
				"enigma_black_hole": "3, true",
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"centaur_hoof_stomp": "6, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"witch_doctor_death_ward": "4, true",
				"faceless_void_chronosphere": "0, true",
				"dark_willow_terrorize": "1, true",
				"snapfire_firesnap_cookie": "3, true",
				"legion_commander_duel": "1, true",
				"skywrath_mage_mystic_flare": "3, true",
				"mars_spear": "2, true",
				"vengefulspirit_magic_missile": "3, true",
				"vengefulspirit_nether_swap": "4, true",
				"spirit_breaker_charge_of_darkness": "3, true",
				"spirit_breaker_nether_strike": "4, true",
				"muerta_parting_shot": "0, true",
				"warlock_rain_of_chaos": "5, true",
				"slark_pounce": "3, true",
				"shadow_shaman_shackles": "5, true",
				"storm_spirit_electric_vortex": "0, true",
				"hoodwink_sharpshooter": "1, true",
				"hoodwink_bushwhack": "0, true",
				"magnataur_reverse_polarity": "2, true",
				"nevermore_requiem": "2, true",
				"winter_wyvern_winters_curse": "5, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"luna_eclipse": "4, true",
				"primal_beast_pulverize": "2, true",
				"earthshaker_fissure": "2, true",
				"item_ethereal_blade": "4, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"slardar_slithereen_crush": "0, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"obsidian_destroyer_sanity_eclipse": "3, true",
				"treant_overgrowth": "0, true",
				"nyx_assassin_impale": "1, true",
				"dragon_knight_dragon_tail": "0, true",
				"disruptor_glimpse": "0, true",
				"disruptor_static_storm": "1, true",
				"grimstroke_ink_creature": "3, true",
				"grimstroke_spirit_walk": "4, true",
				"venomancer_noxious_plague": "1, true",
				"invoker_tornado": "5, true",
				"invoker_emp": "6, true",
				"invoker_chaos_meteor": "7, true",
				"invoker_sun_strike": "8, true",
				"queenofpain_shadow_strike": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"sniper_assassinate": "0, true",
				"techies_suicide": "1, true",
				"windrunner_shackleshot": "2, true",
				"doom_bringer_doom": "3, true",
				"phantom_lancer_spirit_lance": "4, true",
				"rattletrap_hookshot": "3, true",
				"item_nullifier": "6, true",
				"crystal_maiden_frostbite": "0, true",
				"mirana_arrow": "1, true",
				"zuus_thundergods_wrath": "0, true",
				"pangolier_shield_crash": "2, true",
				"skeleton_king_hellfire_blast": "0, true"
			  },
			  "Modifier counter:": {
				"axe_berserkers_call": "0, true",
				"axe_battle_hunger": "1, true",
				"sandking_burrowstrike": "0, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"lion_impale": "0, true",
				"puck_waning_rift": "5, true",
				"gyrocopter_homing_missile": "3, true",
				"dazzle_poison_touch": "1, true",
				"dark_troll_warlord_ensnare": "6, true",
				"item_solar_crest": "11, true",
				"necrolyte_reapers_scythe": "0, true",
				"phoenix_supernova": "2, true",
				"phoenix_launch_fire_spirit": "3, true",
				"jakiro_dual_breath": "3, true",
				"pudge_dismember": "4, true",
				"ancient_apparition_cold_feet": "1, true",
				"enigma_malefice": "4, true",
				"enigma_black_hole": "5, true",
				"drow_ranger_wave_of_silence": "1, true",
				"centaur_hoof_stomp": "3, true",
				"faceless_void_chronosphere": "6, true",
				"item_havoc_hammer": "7, true",
				"dark_willow_bramble_maze": "1, true",
				"dark_willow_cursed_crown": "2, true",
				"dark_willow_terrorize": "3, true",
				"legion_commander_duel": "0, true",
				"skywrath_mage_ancient_seal": "3, true",
				"item_rod_of_atos": "8, true",
				"item_gungir": "6, true",
				"item_spirit_vessel": "9, true",
				"mars_spear": "3, true",
				"vengefulspirit_magic_missile": "3, true",
				"vengefulspirit_wave_of_terror": "4, true",
				"muerta_parting_shot": "0, true",
				"item_sheepstick": "12, true",
				"warlock_fatal_bonds": "2, true",
				"warlock_shadow_word": "3, true",
				"warlock_rain_of_chaos": "4, true",
				"naga_siren_ensnare": "4, true",
				"item_bloodthorn": "9, true",
				"item_disperser": "9, true",
				"shadow_shaman_voodoo": "1, true",
				"shadow_shaman_shackles": "2, true",
				"night_stalker_void": "1, true",
				"night_stalker_crippling_fear": "2, true",
				"rubick_telekinesis": "4, true",
				"item_diffusal_blade": "6, true",
				"item_orchid": "9, true",
				"pugna_life_drain": "0, true",
				"death_prophet_silence": "5, true",
				"ursa_earthshock": "6, true",
				"storm_spirit_electric_vortex": "0, true",
				"magnataur_reverse_polarity": "4, true",
				"nevermore_requiem": "2, true",
				"enchantress_enchant": "5, true",
				"winter_wyvern_winters_curse": "2, true",
				"alchemist_unstable_concoction_throw": "0, true",
				"luna_eclipse": "2, true",
				"primal_beast_pulverize": "1, true",
				"earthshaker_fissure": "1, true",
				"earthshaker_echo_slam": "2, true",
				"item_ethereal_blade": "7, true",
				"item_abyssal_blade": "5, true",
				"lina_laguna_blade": "0, true",
				"slardar_slithereen_crush": "0, true",
				"slardar_amplify_damage": "1, true",
				"ogre_magi_fireblast": "6, true",
				"ogre_magi_ignite": "5, true",
				"ogre_magi_unrefined_fireblast": "7, true",
				"treant_overgrowth": "0, true",
				"juggernaut_blade_fury": "2, true",
				"juggernaut_omni_slash": "3, true",
				"juggernaut_swift_slash": "4, true",
				"item_meteor_hammer": "7, true",
				"troll_warlord_berserkers_rage": "4, true",
				"troll_warlord_whirling_axes_ranged": "3, true",
				"nyx_assassin_impale": "2, true",
				"lich_sinister_gaze": "2, true",
				"tinker_laser": "2, true",
				"tinker_warp_grenade": "3, true",
				"abaddon_frostmourne": "4, true",
				"dragon_knight_breathe_fire": "0, true",
				"dragon_knight_dragon_tail": "1, true",
				"templar_assassin_meld": "0, true",
				"templar_assassin_psionic_trap": "1, true",
				"disruptor_thunder_strike": "0, true",
				"grimstroke_dark_artistry": "2, true",
				"grimstroke_ink_creature": "3, true",
				"grimstroke_spirit_walk": "4, true",
				"venomancer_venomous_gale": "0, true",
				"venomancer_noxious_plague": "1, true",
				"invoker_cold_snap": "3, true",
				"queenofpain_shadow_strike": "0, true",
				"techies_suicide": "1, true",
				"ember_spirit_searing_chains": "4, true",
				"windrunner_shackleshot": "1, true",
				"doom_bringer_doom": "2, true",
				"phantom_lancer_spirit_lance": "3, true",
				"rattletrap_battery_assault": "3, true",
				"rattletrap_hookshot": "4, true",
				"life_stealer_open_wounds": "2, true",
				"crystal_maiden_frostbite": "0, true",
				"crystal_maiden_freezing_field": "1, true",
				"mirana_arrow": "2, true",
				"skeleton_king_hellfire_blast": "0, true",
				"skeleton_king_reincarnation": "1, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"lion_voodoo": "3, true",
				"lion_finger_of_death": "4, true",
				"lion_impale": "2, true",
				"undying_tombstone": "1, true",
				"dazzle_shallow_grave": "2, true",
				"dark_troll_warlord_ensnare": "7, true",
				"necrolyte_reapers_scythe": "0, true",
				"phoenix_icarus_dive": "2, true",
				"phantom_assassin_phantom_strike": "1, true",
				"medusa_stone_gaze": "0, true",
				"jakiro_ice_path": "3, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"antimage_blink": "1, true",
				"antimage_mana_void": "2, true",
				"enigma_malefice": "4, true",
				"enigma_black_hole": "5, true",
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"centaur_hoof_stomp": "1, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"witch_doctor_death_ward": "4, true",
				"faceless_void_time_walk": "4, true",
				"faceless_void_chronosphere": "5, true",
				"dark_willow_terrorize": "0, true",
				"legion_commander_duel": "1, true",
				"skywrath_mage_ancient_seal": "4, true",
				"mars_spear": "1, true",
				"mars_arena_of_blood": "2, true",
				"vengefulspirit_magic_missile": "4, true",
				"vengefulspirit_nether_swap": "5, true",
				"spirit_breaker_charge_of_darkness": "3, true",
				"spirit_breaker_nether_strike": "4, true",
				"muerta_parting_shot": "0, true",
				"item_sheepstick": "8, true",
				"warlock_rain_of_chaos": "5, true",
				"naga_siren_ensnare": "2, true",
				"naga_siren_song_of_the_siren": "3, true",
				"item_bloodthorn": "5, true",
				"shadow_shaman_voodoo": "6, true",
				"shadow_shaman_shackles": "7, true",
				"shadow_shaman_mass_serpent_ward": "8, true",
				"night_stalker_crippling_fear": "2, true",
				"item_orchid": "6, true",
				"death_prophet_silence": "2, true",
				"death_prophet_exorcism": "3, true",
				"storm_spirit_electric_vortex": "0, true",
				"hoodwink_sharpshooter": "0, true",
				"magnataur_skewer": "4, true",
				"magnataur_reverse_polarity": "5, true",
				"nevermore_requiem": "0, true",
				"winter_wyvern_winters_curse": "0, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"luna_eclipse": "4, true",
				"primal_beast_pulverize": "1, true",
				"earthshaker_fissure": "2, true",
				"earthshaker_echo_slam": "3, true",
				"item_abyssal_blade": "6, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"slardar_slithereen_crush": "0, true",
				"spectre_haunt": "2, true",
				"ogre_magi_fireblast": "4, true",
				"ogre_magi_unrefined_fireblast": "5, true",
				"obsidian_destroyer_sanity_eclipse": "3, true",
				"treant_overgrowth": "0, true",
				"juggernaut_omni_slash": "3, true",
				"juggernaut_swift_slash": "4, true",
				"nyx_assassin_impale": "2, true",
				"weaver_time_lapse": "1, true",
				"tinker_warp_grenade": "1, true",
				"dragon_knight_dragon_tail": "0, true",
				"grimstroke_soul_chain": "2, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"techies_suicide": "2, true",
				"windrunner_shackleshot": "2, true",
				"doom_bringer_doom": "4, true",
				"rattletrap_hookshot": "4, true",
				"crystal_maiden_frostbite": "0, true",
				"zuus_thundergods_wrath": "0, true",
				"pangolier_gyroshell": "3, true",
				"skeleton_king_hellfire_blast": "0, true"
			  },
			  "Modifier disable:": {
				"axe_berserkers_call": "0, true",
				"gyrocopter_rocket_barrage": "1, true",
				"dazzle_shallow_grave": "1, true",
				"item_blade_mail": "0, true",
				"item_ghost": "3, true",
				"item_satanic": "5, true",
				"item_mjollnir": "3, true",
				"necrolyte_ghost_shroud": "0, true",
				"phantom_assassin_phantom_strike": "0, true",
				"item_glimmer_cape": "2, true",
				"pudge_dismember": "2, true",
				"enigma_black_hole": "1, true",
				"centaur_stampede": "1, true",
				"faceless_void_chronosphere": "2, true",
				"snapfire_lil_shredder": "2, true",
				"snapfire_mortimer_kisses": "3, true",
				"legion_commander_press_the_attack": "1, true",
				"legion_commander_duel": "0, true",
				"spirit_breaker_bulldoze": "3, true",
				"warlock_shadow_word": "4, true",
				"warlock_upheaval": "5, true",
				"item_aeon_disk": "3, true",
				"shadow_shaman_shackles": "0, true",
				"night_stalker_crippling_fear": "0, true",
				"pugna_decrepify": "0, true",
				"pugna_life_drain": "1, true",
				"ursa_overpower": "2, true",
				"ursa_enrage": "3, true",
				"item_harpoon": "4, true",
				"magnataur_empower": "3, true",
				"magnataur_skewer": "4, true",
				"alchemist_berserk_potion": "0, true",
				"primal_beast_pulverize": "0, true",
				"earthshaker_enchant_totem": "0, true",
				"ogre_magi_bloodlust": "1, true",
				"treant_living_armor": "0, true",
				"nyx_assassin_spiked_carapace": "1, true",
				"lich_frost_shield": "0, true",
				"lich_sinister_gaze": "1, true",
				"abaddon_aphotic_shield": "0, true",
				"abaddon_borrowed_time": "1, true",
				"invoker_alacrity": "2, true",
				"ember_spirit_flame_guard": "1, true",
				"windrunner_windrun": "2, true",
				"crystal_maiden_freezing_field": "0, true"
			  }
			},
			"uniqueSettingsitem_tango": {
			  "Counter:": {
				"furion_sprout": "0, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_branches": {
			  "Counter:": {
				"disruptor_kinetic_field": "0, true"
			  },
			  "Modifier counter:": {
				"slark_pounce": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_faerie_fire": {
			  "Counter:": {
				"axe_culling_blade": "4, true",
				"undying_decay": "0, true",
				"undying_soul_rip": "1, true",
				"puck_illusory_orb": "4, true",
				"gyrocopter_homing_missile": "4, true",
				"gyrocopter_call_down": "5, true",
				"mud_golem_hurl_boulder": "10, true",
				"dazzle_shadow_wave": "0, true",
				"necrolyte_death_pulse": "0, true",
				"necrolyte_reapers_scythe": "1, true",
				"earthshaker_fissure": "3, true",
				"phantom_lancer_spirit_lance": "3, true",
				"pudge_meat_hook": "1, true",
				"lion_impale": "8, true",
				"lion_finger_of_death": "9, true",
				"spirit_breaker_nether_strike": "7, true",
				"snapfire_scatterblast": "5, true",
				"snapfire_firesnap_cookie": "6, true",
				"medusa_mystic_snake": "0, true",
				"antimage_mana_void": "2, true",
				"phoenix_supernova": "5, true",
				"phantom_assassin_stifling_dagger": "0, true",
				"jakiro_ice_path": "4, true",
				"drow_ranger_multishot": "6, true",
				"tusk_ice_shards": "2, true",
				"tusk_walrus_kick": "3, true",
				"centaur_hoof_stomp": "4, true",
				"centaur_double_edge": "5, true",
				"witch_doctor_paralyzing_cask": "6, true",
				"sandking_burrowstrike": "6, true",
				"legion_commander_overwhelming_odds": "0, true",
				"skywrath_mage_arcane_bolt": "1, true",
				"skywrath_mage_concussive_shot": "2, true",
				"mars_spear": "3, true",
				"mars_gods_rebuke": "4, true",
				"vengefulspirit_magic_missile": "3, true",
				"muerta_parting_shot": "0, true",
				"kunkka_torrent": "2, true",
				"kunkka_tidebringer": "3, true",
				"kunkka_ghostship": "4, true",
				"chaos_knight_chaos_bolt": "5, true",
				"chaos_knight_reality_rift": "6, true",
				"mirana_starfall": "1, true",
				"mirana_arrow": "2, true",
				"obsidian_destroyer_astral_imprisonment": "3, true",
				"obsidian_destroyer_sanity_eclipse": "4, true",
				"warlock_rain_of_chaos": "3, true",
				"shadow_shaman_ether_shock": "1, true",
				"night_stalker_void": "3, true",
				"ogre_magi_fireblast": "4, true",
				"ogre_magi_unrefined_fireblast": "5, true",
				"shredder_timber_chain": "3, true",
				"lina_dragon_slave": "0, true",
				"lina_light_strike_array": "1, true",
				"lina_laguna_blade": "2, true",
				"invoker_tornado": "0, true",
				"invoker_emp": "1, true",
				"invoker_sun_strike": "2, true",
				"invoker_deafening_blast": "3, true",
				"pugna_nether_blast": "0, true",
				"death_prophet_carrion_swarm": "3, true",
				"ursa_earthshock": "2, true",
				"queenofpain_shadow_strike": "0, true",
				"queenofpain_scream_of_pain": "1, true",
				"queenofpain_sonic_wave": "2, true",
				"nyx_assassin_impale": "3, true",
				"nyx_assassin_jolt": "4, true",
				"storm_spirit_static_remnant": "1, true",
				"tiny_toss_tree": "2, true",
				"hoodwink_sharpshooter": "5, true",
				"hoodwink_bushwhack": "4, true",
				"bristleback_quill_spray": "4, true",
				"magnataur_shockwave": "2, true",
				"magnataur_reverse_polarity": "3, true",
				"crystal_maiden_crystal_nova": "8, true",
				"visage_soul_assumption": "3, true",
				"venomancer_noxious_plague": "2, true",
				"luna_lucent_beam": "0, true",
				"morphling_waveform": "0, true",
				"morphling_adaptive_strike_agi": "1, true",
				"morphling_adaptive_strike_str": "2, true",
				"slardar_slithereen_crush": "0, true",
				"monkey_king_boundless_strike": "3, true",
				"dragon_knight_breathe_fire": "0, true",
				"dragon_knight_dragon_tail": "1, true",
				"bounty_hunter_shuriken_toss": "2, true",
				"troll_warlord_whirling_axes_ranged": "0, true",
				"skeleton_king_hellfire_blast": "7, true",
				"nevermore_shadowraze1": "0, true",
				"nevermore_shadowraze2": "1, true",
				"nevermore_shadowraze3": "2, true",
				"nevermore_requiem": "3, true",
				"windrunner_shackleshot": "6, true",
				"windrunner_powershot": "7, true",
				"alchemist_unstable_concoction_throw": "2, true",
				"sniper_assassinate": "4, true",
				"abaddon_death_coil": "2, true",
				"zuus_arc_lightning": "0, true",
				"zuus_lightning_bolt": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"sven_storm_bolt": "1, true",
				"lich_frost_nova": "2, true",
				"tinker_laser": "0, true",
				"tidehunter_gush": "5, true",
				"tidehunter_anchor_smash": "6, true",
				"tidehunter_ravage": "7, true",
				"void_spirit_dissimilate": "5, true",
				"void_spirit_resonant_pulse": "6, true",
				"elder_titan_earth_splitter": "3, true",
				"huskar_life_break": "0, true",
				"rattletrap_rocket_flare": "4, true",
				"grimstroke_dark_artistry": "0, true",
				"grimstroke_spirit_walk": "1, true",
				"shadow_demon_disruption": "4, true",
				"techies_suicide": "2, true",
				"beastmaster_wild_axes": "0, true",
				"beastmaster_primal_roar": "1, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnevermore_shadowraze1": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnevermore_shadowraze2": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnevermore_shadowraze3": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_magic_stick": {
			  "Counter:": {
				"axe_culling_blade": "3, true",
				"undying_decay": "1, true",
				"undying_soul_rip": "2, true",
				"puck_illusory_orb": "4, true",
				"gyrocopter_homing_missile": "4, true",
				"gyrocopter_call_down": "5, true",
				"mud_golem_hurl_boulder": "2, true",
				"dazzle_shadow_wave": "0, true",
				"necrolyte_death_pulse": "0, true",
				"necrolyte_reapers_scythe": "1, true",
				"earthshaker_fissure": "3, true",
				"phantom_lancer_spirit_lance": "2, true",
				"pudge_meat_hook": "1, true",
				"lion_impale": "2, true",
				"lion_finger_of_death": "3, true",
				"antimage_mana_void": "4, true",
				"sandking_burrowstrike": "1, true",
				"snapfire_scatterblast": "7, true",
				"snapfire_firesnap_cookie": "8, true",
				"legion_commander_overwhelming_odds": "0, true",
				"skywrath_mage_arcane_bolt": "3, true",
				"skywrath_mage_concussive_shot": "4, true",
				"mars_spear": "0, true",
				"mars_gods_rebuke": "1, true",
				"vengefulspirit_magic_missile": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"muerta_parting_shot": "0, true",
				"kunkka_torrent": "3, true",
				"kunkka_tidebringer": "4, true",
				"kunkka_ghostship": "5, true",
				"chaos_knight_chaos_bolt": "5, true",
				"chaos_knight_reality_rift": "6, true",
				"mirana_starfall": "2, true",
				"mirana_arrow": "3, true",
				"obsidian_destroyer_astral_imprisonment": "0, true",
				"obsidian_destroyer_sanity_eclipse": "1, true",
				"invoker_tornado": "5, true",
				"invoker_emp": "6, true",
				"invoker_sun_strike": "7, true",
				"invoker_deafening_blast": "8, true",
				"monkey_king_boundless_strike": "3, true",
				"crystal_maiden_crystal_nova": "8, true",
				"pugna_nether_blast": "0, true",
				"death_prophet_carrion_swarm": "3, true",
				"ursa_earthshock": "4, true",
				"lina_dragon_slave": "0, true",
				"lina_light_strike_array": "1, true",
				"lina_laguna_blade": "2, true",
				"warlock_rain_of_chaos": "5, true",
				"zuus_arc_lightning": "0, true",
				"zuus_lightning_bolt": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"storm_spirit_static_remnant": "1, true",
				"phantom_assassin_stifling_dagger": "6, true",
				"queenofpain_shadow_strike": "0, true",
				"queenofpain_scream_of_pain": "1, true",
				"queenofpain_sonic_wave": "2, true",
				"nyx_assassin_impale": "0, true",
				"nyx_assassin_jolt": "1, true",
				"bristleback_quill_spray": "4, true",
				"jakiro_ice_path": "5, true",
				"shadow_shaman_ether_shock": "2, true",
				"hoodwink_bushwhack": "3, true",
				"hoodwink_sharpshooter": "4, true",
				"phoenix_supernova": "1, true",
				"visage_soul_assumption": "1, true",
				"venomancer_noxious_plague": "5, true",
				"luna_lucent_beam": "4, true",
				"medusa_mystic_snake": "0, true",
				"morphling_waveform": "3, true",
				"morphling_adaptive_strike_agi": "4, true",
				"morphling_adaptive_strike_str": "5, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"tusk_ice_shards": "2, true",
				"tusk_walrus_kick": "3, true",
				"beastmaster_wild_axes": "1, true",
				"beastmaster_primal_roar": "2, true",
				"sniper_assassinate": "2, true",
				"drow_ranger_multishot": "0, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"night_stalker_void": "3, true",
				"slardar_slithereen_crush": "3, true",
				"dragon_knight_breathe_fire": "0, true",
				"dragon_knight_dragon_tail": "1, true",
				"bounty_hunter_shuriken_toss": "4, true",
				"troll_warlord_whirling_axes_ranged": "0, true",
				"skeleton_king_hellfire_blast": "2, true",
				"nevermore_shadowraze1": "0, true",
				"nevermore_shadowraze2": "1, true",
				"nevermore_shadowraze3": "2, true",
				"nevermore_requiem": "3, true",
				"alchemist_unstable_concoction_throw": "2, true",
				"windrunner_shackleshot": "6, true",
				"windrunner_powershot": "7, true",
				"shredder_timber_chain": "2, true",
				"tiny_toss_tree": "2, true",
				"sven_storm_bolt": "1, true",
				"centaur_hoof_stomp": "2, true",
				"centaur_double_edge": "3, true",
				"lich_frost_nova": "2, true",
				"tinker_laser": "4, true",
				"abaddon_death_coil": "5, true",
				"tidehunter_gush": "0, true",
				"tidehunter_anchor_smash": "1, true",
				"tidehunter_ravage": "2, true",
				"void_spirit_dissimilate": "5, true",
				"void_spirit_resonant_pulse": "6, true",
				"huskar_life_break": "4, true",
				"techies_suicide": "2, true",
				"elder_titan_earth_splitter": "3, true",
				"rattletrap_rocket_flare": "4, true",
				"grimstroke_dark_artistry": "0, true",
				"grimstroke_spirit_walk": "1, true",
				"shadow_demon_disruption": "4, true",
				"pangolier_shield_crash": "2, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_magic_wand": {
			  "Counter:": {
				"axe_culling_blade": "3, true",
				"undying_decay": "1, true",
				"undying_soul_rip": "2, true",
				"puck_illusory_orb": "4, true",
				"gyrocopter_homing_missile": "4, true",
				"gyrocopter_call_down": "5, true",
				"mud_golem_hurl_boulder": "6, true",
				"dazzle_shadow_wave": "1, true",
				"necrolyte_death_pulse": "0, true",
				"necrolyte_reapers_scythe": "1, true",
				"earthshaker_fissure": "3, true",
				"phantom_lancer_spirit_lance": "2, true",
				"pudge_meat_hook": "1, true",
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"drow_ranger_multishot": "3, true",
				"tusk_ice_shards": "6, true",
				"tusk_walrus_kick": "7, true",
				"centaur_hoof_stomp": "2, true",
				"centaur_double_edge": "3, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"mirana_starfall": "1, true",
				"mirana_arrow": "2, true",
				"obsidian_destroyer_astral_imprisonment": "0, true",
				"obsidian_destroyer_sanity_eclipse": "1, true",
				"skeleton_king_hellfire_blast": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"pugna_nether_blast": "4, true",
				"techies_suicide": "2, true",
				"item_ethereal_blade": "5, true",
				"crystal_maiden_crystal_nova": "8, true",
				"zuus_arc_lightning": "0, true",
				"zuus_lightning_bolt": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"skywrath_mage_arcane_bolt": "3, true",
				"skywrath_mage_concussive_shot": "4, true",
				"invoker_tornado": "5, true",
				"invoker_emp": "6, true",
				"invoker_sun_strike": "7, true",
				"invoker_deafening_blast": "8, true",
				"monkey_king_boundless_strike": "3, true",
				"death_prophet_carrion_swarm": "11, true",
				"ursa_earthshock": "4, true",
				"lina_dragon_slave": "0, true",
				"lina_light_strike_array": "1, true",
				"lina_laguna_blade": "2, true",
				"warlock_rain_of_chaos": "5, true",
				"storm_spirit_static_remnant": "0, true",
				"legion_commander_overwhelming_odds": "0, true",
				"queenofpain_shadow_strike": "0, true",
				"queenofpain_scream_of_pain": "1, true",
				"queenofpain_sonic_wave": "2, true",
				"nyx_assassin_impale": "2, true",
				"nyx_assassin_jolt": "3, true",
				"bristleback_quill_spray": "1, true",
				"magnataur_shockwave": "2, true",
				"magnataur_reverse_polarity": "3, true",
				"jakiro_ice_path": "4, true",
				"shadow_shaman_ether_shock": "2, true",
				"nevermore_shadowraze1": "0, true",
				"nevermore_shadowraze2": "1, true",
				"nevermore_shadowraze3": "2, true",
				"nevermore_requiem": "3, true",
				"hoodwink_bushwhack": "3, true",
				"hoodwink_sharpshooter": "4, true",
				"antimage_mana_void": "4, true",
				"phoenix_supernova": "1, true",
				"snapfire_scatterblast": "7, true",
				"snapfire_firesnap_cookie": "8, true",
				"visage_soul_assumption": "1, true",
				"venomancer_noxious_plague": "1, true",
				"luna_lucent_beam": "0, true",
				"medusa_mystic_snake": "0, true",
				"morphling_waveform": "3, true",
				"morphling_adaptive_strike_agi": "4, true",
				"morphling_adaptive_strike_str": "5, true",
				"sandking_burrowstrike": "1, true",
				"beastmaster_wild_axes": "1, true",
				"beastmaster_primal_roar": "2, true",
				"sniper_assassinate": "3, true",
				"night_stalker_void": "1, true",
				"slardar_slithereen_crush": "3, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"troll_warlord_whirling_axes_ranged": "8, true",
				"shredder_timber_chain": "2, true",
				"sven_storm_bolt": "2, true",
				"vengefulspirit_magic_missile": "3, true",
				"chaos_knight_chaos_bolt": "7, true",
				"chaos_knight_reality_rift": "6, true",
				"bounty_hunter_shuriken_toss": "4, true",
				"mars_spear": "0, true",
				"mars_gods_rebuke": "1, true",
				"alchemist_unstable_concoction_throw": "2, true",
				"tiny_toss_tree": "2, true",
				"spirit_breaker_nether_strike": "1, true",
				"abaddon_death_coil": "5, true",
				"dragon_knight_breathe_fire": "0, true",
				"dragon_knight_dragon_tail": "1, true",
				"kunkka_torrent": "3, true",
				"kunkka_tidebringer": "4, true",
				"kunkka_ghostship": "5, true",
				"lich_frost_nova": "2, true",
				"tinker_laser": "4, true",
				"tidehunter_gush": "0, true",
				"tidehunter_anchor_smash": "1, true",
				"tidehunter_ravage": "2, true",
				"void_spirit_dissimilate": "5, true",
				"void_spirit_resonant_pulse": "6, true",
				"huskar_life_break": "4, true",
				"windrunner_shackleshot": "6, true",
				"windrunner_powershot": "7, true",
				"oracle_purifying_flames": "3, true",
				"elder_titan_earth_splitter": "3, true",
				"rattletrap_rocket_flare": "0, true",
				"grimstroke_dark_artistry": "0, true",
				"grimstroke_spirit_walk": "1, true",
				"shadow_demon_disruption": "3, true",
				"item_nullifier": "4, true",
				"pangolier_shield_crash": "2, true",
				"muerta_parting_shot": "0, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_blink": {
			  "Blink:": {
				"axe_berserkers_call": "1, true",
				"axe_culling_blade": "2, true",
				"gyrocopter_call_down": "3, true",
				"dark_troll_warlord_ensnare": "5, true",
				"necrolyte_reapers_scythe": "0, true",
				"earthshaker_fissure": "1, true",
				"earthshaker_echo_slam": "2, true",
				"pudge_meat_hook": "0, true",
				"pudge_dismember": "1, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"item_orchid": "5, true",
				"phoenix_supernova": "4, true",
				"jakiro_ice_path": "1, true",
				"ancient_apparition_ice_blast": "1, true",
				"enigma_malefice": "3, true",
				"enigma_black_hole": "4, true",
				"drow_ranger_wave_of_silence": "0, true",
				"centaur_hoof_stomp": "3, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"faceless_void_chronosphere": "0, true",
				"sandking_burrowstrike": "0, true",
				"dark_willow_terrorize": "1, true",
				"legion_commander_duel": "5, true",
				"skywrath_mage_ancient_seal": "1, true",
				"item_rod_of_atos": "3, true",
				"item_gungir": "3, true",
				"mars_spear": "1, true",
				"mars_arena_of_blood": "2, true",
				"vengefulspirit_magic_missile": "5, true",
				"vengefulspirit_nether_swap": "6, true",
				"spirit_breaker_nether_strike": "1, true",
				"muerta_parting_shot": "0, true",
				"item_sheepstick": "7, true",
				"kunkka_ghostship": "3, true",
				"chaos_knight_chaos_bolt": "2, true",
				"chaos_knight_reality_rift": "3, true",
				"warlock_rain_of_chaos": "3, true",
				"naga_siren_ensnare": "1, true",
				"item_bloodthorn": "6, true",
				"shadow_shaman_voodoo": "2, true",
				"shadow_shaman_shackles": "3, true",
				"night_stalker_crippling_fear": "2, true",
				"skeleton_king_hellfire_blast": "4, true",
				"techies_suicide": "2, true",
				"item_ethereal_blade": "6, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "5, true",
				"terrorblade_sunder": "3, true",
				"doom_bringer_doom": "3, true",
				"death_prophet_silence": "2, true",
				"storm_spirit_electric_vortex": "1, true",
				"hoodwink_sharpshooter": "3, true",
				"riki_smoke_screen": "5, true",
				"magnataur_skewer": "3, true",
				"magnataur_reverse_polarity": "4, true",
				"disruptor_static_storm": "0, true",
				"nevermore_requiem": "0, true",
				"sniper_assassinate": "6, true",
				"crystal_maiden_frostbite": "3, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"luna_eclipse": "1, true",
				"invoker_tornado": "2, true",
				"morphling_adaptive_strike_str": "2, true",
				"beastmaster_primal_roar": "3, true",
				"nyx_assassin_impale": "1, true",
				"item_abyssal_blade": "5, true",
				"slardar_slithereen_crush": "3, true",
				"monkey_king_boundless_strike": "2, true",
				"dragon_knight_dragon_tail": "0, true",
				"sven_storm_bolt": "2, true",
				"dark_seer_vacuum": "0, true",
				"windrunner_shackleshot": "2, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"queenofpain_sonic_wave": "0, true",
				"silencer_global_silence": "0, true",
				"abyssal_underlord_pit_of_malice": "3, true",
				"tinker_warp_grenade": "0, true",
				"item_nullifier": "4, true",
				"tidehunter_ravage": "0, true",
				"void_spirit_dissimilate": "0, true",
				"void_spirit_resonant_pulse": "1, true",
				"void_spirit_astral_step": "2, true",
				"batrider_flaming_lasso": "4, true",
				"huskar_life_break": "1, true",
				"treant_overgrowth": "4, true",
				"rattletrap_hookshot": "3, true",
				"primal_beast_pulverize": "1, true",
				"grimstroke_spirit_walk": "0, true",
				"grimstroke_soul_chain": "1, true",
				"leshrac_split_earth": "0, true",
				"winter_wyvern_winters_curse": "2, true"
			  },
			  "Modifier blink:": {
				"rubick_telekinesis": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstemplar_assassin_refraction": {
			  "Counter:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"undying_decay": "2, true",
				"undying_soul_rip": "3, true",
				"puck_illusory_orb": "4, true",
				"gyrocopter_homing_missile": "5, true",
				"gyrocopter_call_down": "6, true",
				"dazzle_poison_touch": "7, true",
				"dazzle_shadow_wave": "8, true",
				"ancient_apparition_ice_blast": "0, true",
				"doom_bringer_doom": "1, true",
				"lion_impale": "2, true",
				"lion_voodoo": "3, true",
				"item_orchid": "4, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"nyx_assassin_impale": "2, true",
				"nyx_assassin_jolt": "3, true",
				"sandking_burrowstrike": "4, true",
				"faceless_void_chronosphere": "5, true",
				"snapfire_scatterblast": "6, true",
				"snapfire_firesnap_cookie": "7, true"
			  },
			  "Modifier counter:": {
				"gyrocopter_rocket_barrage": "0, true",
				"ancient_apparition_cold_feet": "0, true",
				"lion_finger_of_death": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstemplar_assassin_meld": {
			  "Counter:": {
				"gyrocopter_homing_missile": "0, true",
				"dazzle_poison_touch": "1, true",
				"dark_troll_warlord_ensnare": "3, true",
				"mud_golem_hurl_boulder": "4, true",
				"terrorblade_sunder": "0, true",
				"naga_siren_ensnare": "1, true",
				"doom_bringer_doom": "3, true",
				"lion_voodoo": "4, true",
				"item_orchid": "6, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"sandking_burrowstrike": "2, true",
				"item_rod_of_atos": "5, true",
				"item_gungir": "6, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_bloodthorn": {
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"undying_tombstone": "2, true",
				"dazzle_shallow_grave": "3, true",
				"dark_troll_warlord_ensnare": "4, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"kunkka_ghostship": "3, true",
				"chaos_knight_chaos_bolt": "4, true",
				"chaos_knight_reality_rift": "5, true",
				"chaos_knight_phantasm": "6, true",
				"faceless_void_time_walk": "4, true",
				"faceless_void_chronosphere": "3, true",
				"slardar_slithereen_crush": "0, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"muerta_parting_shot": "3, true",
				"luna_eclipse": "4, true",
				"techies_suicide": "1, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"dragon_knight_dragon_tail": "2, true",
				"drow_ranger_wave_of_silence": "5, true",
				"drow_ranger_multishot": "6, true",
				"antimage_blink": "3, true",
				"antimage_mana_void": "4, true",
				"huskar_life_break": "4, true",
				"witch_doctor_paralyzing_cask": "5, true",
				"witch_doctor_death_ward": "6, true",
				"pudge_meat_hook": "2, true",
				"pudge_dismember": "3, true",
				"earthshaker_fissure": "2, true",
				"phantom_assassin_phantom_strike": "0, true",
				"shadow_shaman_voodoo": "1, true",
				"shadow_shaman_shackles": "2, true",
				"shadow_shaman_mass_serpent_ward": "3, true",
				"magnataur_skewer": "4, true",
				"magnataur_reverse_polarity": "5, true",
				"ogre_magi_fireblast": "6, true",
				"ogre_magi_unrefined_fireblast": "7, true",
				"zuus_thundergods_wrath": "0, true",
				"legion_commander_duel": "0, true",
				"windrunner_shackleshot": "2, true",
				"spirit_breaker_nether_strike": "3, true",
				"warlock_rain_of_chaos": "4, true",
				"mars_spear": "0, true",
				"mars_arena_of_blood": "1, true",
				"hoodwink_sharpshooter": "2, true",
				"jakiro_ice_path": "3, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"shadow_shaman_shackles": "0, true",
				"magnataur_skewer": "1, true",
				"warlock_upheaval": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsskywrath_mage_arcane_bolt": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsskywrath_mage_concussive_shot": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsskywrath_mage_ancient_seal": {
			  "Disable:": {
				"necrolyte_reapers_scythe": "3, true",
				"earthshaker_fissure": "1, true",
				"pudge_meat_hook": "1, true",
				"pudge_dismember": "2, true",
				"lion_impale": "1, true",
				"lion_voodoo": "2, true",
				"lion_finger_of_death": "3, true",
				"dark_troll_warlord_ensnare": "4, true",
				"spectre_haunt": "0, true",
				"weaver_time_lapse": "4, true",
				"mars_spear": "1, true",
				"mars_arena_of_blood": "2, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"medusa_stone_gaze": "3, true",
				"lina_light_strike_array": "4, true",
				"lina_laguna_blade": "5, true",
				"dazzle_shallow_grave": "0, true",
				"nevermore_requiem": "0, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"warlock_rain_of_chaos": "4, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"spirit_breaker_nether_strike": "2, true",
				"luna_eclipse": "3, true",
				"silencer_global_silence": "4, true",
				"jakiro_ice_path": "2, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"witch_doctor_death_ward": "4, true",
				"centaur_hoof_stomp": "4, true",
				"sven_storm_bolt": "2, true",
				"sven_gods_strength": "3, true",
				"hoodwink_sharpshooter": "4, true",
				"tidehunter_ravage": "0, true",
				"antimage_blink": "5, true",
				"antimage_mana_void": "6, true",
				"phantom_assassin_phantom_strike": "3, true",
				"grimstroke_soul_chain": "0, true",
				"abyssal_underlord_pit_of_malice": "0, true",
				"morphling_adaptive_strike_str": "2, true",
				"bloodseeker_rupture": "0, true",
				"nyx_assassin_impale": "1, true",
				"legion_commander_duel": "5, true",
				"axe_berserkers_call": "3, true",
				"axe_culling_blade": "4, true",
				"tinker_warp_grenade": "4, true",
				"muerta_parting_shot": "0, true",
				"kunkka_ghostship": "2, true",
				"skeleton_king_hellfire_blast": "1, true",
				"vengefulspirit_magic_missile": "4, true",
				"vengefulspirit_nether_swap": "5, true",
				"undying_tombstone": "0, true",
				"shadow_shaman_voodoo": "3, true",
				"shadow_shaman_shackles": "2, true",
				"shadow_shaman_mass_serpent_ward": "1, true",
				"winter_wyvern_winters_curse": "6, true",
				"magnataur_skewer": "5, true",
				"magnataur_reverse_polarity": "6, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"slardar_slithereen_crush": "4, true",
				"oracle_false_promise": "0, true",
				"zuus_thundergods_wrath": "3, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"warlock_upheaval": "0, true",
				"snapfire_mortimer_kisses": "0, true",
				"shadow_shaman_shackles": "0, true",
				"magnataur_skewer": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_rod_of_atos": {
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "0, true"
			  },
			  "Modifier disable:": {
				"item_black_king_bar": "0, true",
				"centaur_stampede": "0, true",
				"juggernaut_blade_fury": "0, true",
				"dazzle_shallow_grave": "0, true",
				"razor_eye_of_the_storm": "2, true",
				"ursa_enrage": "1, true",
				"life_stealer_rage": "0, true",
				"life_stealer_open_wounds": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_psychic_headband": {
			  "Counter:": {
				"earthshaker_enchant_totem": "1, true",
				"pudge_dismember": "0, true",
				"vengefulspirit_magic_missile": "0, true",
				"vengefulspirit_nether_swap": "1, true",
				"spirit_breaker_charge_of_darkness": "2, true",
				"muerta_parting_shot": "0, true",
				"skeleton_king_hellfire_blast": "0, true",
				"faceless_void_chronosphere": "0, true",
				"lina_light_strike_array": "1, true",
				"skywrath_mage_mystic_flare": "0, true",
				"slardar_slithereen_crush": "0, true",
				"storm_spirit_electric_vortex": "2, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"dragon_knight_dragon_tail": "0, true",
				"alchemist_unstable_concoction_throw": "0, true",
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"shadow_shaman_shackles": "3, true"
			  },
			  "Modifier counter:": {
				"gyrocopter_rocket_barrage": "0, true",
				"phantom_assassin_phantom_strike": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsriki_smoke_screen": {
			  "Disable:": {},
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsriki_blink_strike": {
			  "Blink:": {
				"necrolyte_reapers_scythe": "0, true",
				"pudge_meat_hook": "0, true",
				"pudge_dismember": "1, true",
				"lion_impale": "3, true",
				"lion_finger_of_death": "4, true",
				"dark_troll_warlord_ensnare": "2, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsriki_tricks_of_the_trade": {
			  "Counter:": {
				"necrolyte_reapers_scythe": "0, true",
				"earthshaker_fissure": "2, true",
				"pudge_meat_hook": "0, true",
				"pudge_dismember": "1, true",
				"lion_impale": "4, true",
				"lion_finger_of_death": "5, true",
				"dark_troll_warlord_ensnare": "4, true",
				"antimage_mana_void": "3, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_lotus_orb": {
			  "Counter:": {
				"necrolyte_death_pulse": "0, true",
				"necrolyte_reapers_scythe": "1, true",
				"earthshaker_echo_slam": "2, true",
				"phantom_lancer_spirit_lance": "3, true",
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"item_orchid": "9, true",
				"skeleton_king_hellfire_blast": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"razor_static_link": "2, true",
				"item_sheepstick": "5, true",
				"item_bloodthorn": "5, true",
				"item_abyssal_blade": "6, true",
				"death_prophet_spirit_siphon": "0, true",
				"abaddon_death_coil": "1, true",
				"shadow_shaman_ether_shock": "2, true",
				"shadow_shaman_voodoo": "3, true",
				"shadow_shaman_shackles": "4, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"spirit_breaker_charge_of_darkness": "1, true",
				"spirit_breaker_nether_strike": "2, true",
				"bloodseeker_rupture": "3, true"
			  },
			  "Modifier counter:": {
				"phantom_lancer_spirit_lance": "0, true",
				"lion_voodoo": "2, true",
				"item_diffusal_blade": "2, true",
				"item_orchid": "3, true",
				"dark_troll_warlord_ensnare": "4, true",
				"item_veil_of_discord": "5, true",
				"skeleton_king_reincarnation": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"techies_suicide": "2, true",
				"item_sheepstick": "8, true",
				"item_ethereal_blade": "5, true",
				"invoker_cold_snap": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"item_gungir": "3, true",
				"item_bloodthorn": "5, true",
				"axe_battle_hunger": "0, true",
				"death_prophet_silence": "0, true",
				"abaddon_frostmourne": "1, true",
				"shadow_shaman_voodoo": "2, true",
				"silencer_curse_of_the_silent": "3, true",
				"silencer_last_word": "4, true",
				"silencer_global_silence": "5, true",
				"item_rod_of_atos": "2, true",
				"arc_warden_flux": "0, true",
				"bloodseeker_blood_bath": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingszuus_arc_lightning": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "1, true",
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingszuus_lightning_bolt": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "0, true",
				"witch_doctor_death_ward": "0, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"primal_beast_pulverize": "1, true",
				"shadow_shaman_shackles": "1, true"
			  }
			},
			"uniqueSettingszuus_cloud": {
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "0, true",
				"witch_doctor_death_ward": "0, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"primal_beast_pulverize": "1, true",
				"shadow_shaman_shackles": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_ogre_seal_totem": {
			  "Blink:": {
				"spirit_breaker_nether_strike": "0, true",
				"dark_troll_warlord_ensnare": "8, true",
				"item_rod_of_atos": "2, true",
				"item_gungir": "7, true",
				"drow_ranger_wave_of_silence": "0, true",
				"centaur_hoof_stomp": "1, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"faceless_void_chronosphere": "3, true",
				"naga_siren_ensnare": "1, true",
				"lion_impale": "3, true",
				"lion_finger_of_death": "4, true",
				"monkey_king_boundless_strike": "0, true",
				"invoker_tornado": "1, true",
				"crystal_maiden_frostbite": "2, true",
				"pudge_meat_hook": "5, true",
				"pudge_dismember": "6, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_trickster_cloak": {
			  "Counter:": {
				"spirit_breaker_charge_of_darkness": "1, true",
				"spirit_breaker_nether_strike": "2, true",
				"item_gungir": "2, true",
				"dark_troll_warlord_ensnare": "1, true",
				"mud_golem_hurl_boulder": "3, true",
				"item_abyssal_blade": "6, true",
				"necrolyte_reapers_scythe": "0, true",
				"crystal_maiden_frostbite": "0, true",
				"lion_voodoo": "1, true",
				"sven_storm_bolt": "1, true",
				"beastmaster_primal_roar": "0, true",
				"queenofpain_sonic_wave": "0, true",
				"muerta_parting_shot": "1, true",
				"luna_eclipse": "3, true",
				"item_bloodthorn": "4, true",
				"huskar_life_break": "1, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"dragon_knight_dragon_tail": "0, true",
				"pudge_dismember": "1, true",
				"shadow_shaman_voodoo": "2, true",
				"shadow_shaman_shackles": "3, true",
				"primal_beast_pulverize": "0, true",
				"grimstroke_ink_creature": "1, true",
				"earthshaker_fissure": "2, true",
				"earthshaker_echo_slam": "3, true",
				"item_rod_of_atos": "1, true",
				"item_sheepstick": "5, true",
				"silencer_global_silence": "4, true",
				"legion_commander_duel": "0, true"
			  },
			  "Modifier counter:": {
				"luna_eclipse": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_ghost": {
			  "Counter:": {
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"item_abyssal_blade": "1, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"bloodseeker_rupture": "0, true",
				"legion_commander_duel": "0, true",
				"faceless_void_chronosphere": "0, true",
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"chaos_knight_chaos_bolt": "0, true",
				"chaos_knight_reality_rift": "1, true",
				"dazzle_shadow_wave": "3, true",
				"slardar_slithereen_crush": "0, true",
				"kunkka_tidebringer": "0, true",
				"witch_doctor_death_ward": "1, true"
			  },
			  "Modifier counter:": {
				"medusa_stone_gaze": "0, true",
				"item_abyssal_blade": "1, true",
				"slark_pounce": "0, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"phantom_assassin_phantom_strike": "0, true",
				"bloodseeker_rupture": "1, true",
				"legion_commander_press_the_attack": "0, true",
				"legion_commander_duel": "0, true",
				"drow_ranger_wave_of_silence": "0, true",
				"chaos_knight_chaos_bolt": "0, true",
				"chaos_knight_reality_rift": "1, true",
				"morphling_adaptive_strike_str": "2, true",
				"ursa_fury_swipes": "1, true",
				"ursa_overpower": "0, true",
				"faceless_void_chronosphere": "0, true",
				"item_solar_crest": "2, true",
				"broodmother_insatiable_hunger": "1, true",
				"ember_spirit_sleight_of_fist": "0, true",
				"razor_eye_of_the_storm": "3, true",
				"tusk_tag_team": "2, true",
				"slardar_slithereen_crush": "0, true",
				"kunkka_ghostship": "2, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_ethereal_blade": {
			  "Counter:": {
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"axe_berserkers_call": "0, true",
				"bloodseeker_rupture": "0, true",
				"legion_commander_duel": "0, true",
				"chaos_knight_chaos_bolt": "0, true",
				"faceless_void_chronosphere": "0, true",
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"gyrocopter_homing_missile": "2, true",
				"skeleton_king_hellfire_blast": "0, true",
				"chaos_knight_reality_rift": "1, true",
				"kunkka_tidebringer": "0, true",
				"witch_doctor_death_ward": "1, true"
			  },
			  "Modifier counter:": {
				"medusa_stone_gaze": "0, true",
				"item_abyssal_blade": "2, true",
				"axe_berserkers_call": "0, true",
				"phantom_assassin_phantom_strike": "0, true",
				"bloodseeker_rupture": "1, true",
				"legion_commander_press_the_attack": "0, true",
				"legion_commander_duel": "0, true",
				"slark_pounce": "1, true",
				"chaos_knight_chaos_bolt": "0, true",
				"ursa_fury_swipes": "1, true",
				"ursa_overpower": "0, true",
				"faceless_void_chronosphere": "0, true",
				"drow_ranger_wave_of_silence": "0, true",
				"gyrocopter_homing_missile": "1, true",
				"item_solar_crest": "0, true",
				"skeleton_king_hellfire_blast": "0, true",
				"morphling_adaptive_strike_str": "3, true",
				"chaos_knight_reality_rift": "1, true",
				"tusk_tag_team": "2, true",
				"kunkka_ghostship": "2, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "0, true",
				"item_abyssal_blade": "1, true",
				"legion_commander_duel": "0, true",
				"chaos_knight_chaos_bolt": "0, true",
				"faceless_void_chronosphere": "0, true",
				"drow_ranger_wave_of_silence": "0, true",
				"skeleton_king_hellfire_blast": "0, true"
			  },
			  "Modifier disable:": {
				"medusa_stone_gaze": "0, true",
				"phantom_assassin_phantom_strike": "0, true",
				"bloodseeker_rupture": "1, true",
				"item_satanic": "3, true",
				"legion_commander_press_the_attack": "0, true",
				"legion_commander_duel": "0, true",
				"slark_pounce": "0, true",
				"ursa_fury_swipes": "1, true",
				"ursa_overpower": "0, true",
				"ursa_enrage": "2, true",
				"faceless_void_chronosphere": "0, true",
				"gyrocopter_flak_cannon": "0, true",
				"night_stalker_crippling_fear": "0, true",
				"night_stalker_darkness": "1, true",
				"invoker_alacrity": "0, true"
			  }
			},
			"uniqueSettingsitem_famango": {
			  "Counter:": {
				"necrolyte_death_pulse": "0, true",
				"necrolyte_reapers_scythe": "1, true",
				"phoenix_supernova": "2, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"medusa_mystic_snake": "2, true",
				"jakiro_ice_path": "4, true",
				"mud_golem_hurl_boulder": "2, true",
				"lion_impale": "1, true",
				"lion_finger_of_death": "2, true",
				"kunkka_torrent": "2, true",
				"kunkka_tidebringer": "3, true",
				"kunkka_ghostship": "4, true",
				"chaos_knight_chaos_bolt": "5, true",
				"chaos_knight_reality_rift": "6, true",
				"gyrocopter_homing_missile": "5, true",
				"gyrocopter_call_down": "8, true",
				"warlock_rain_of_chaos": "4, true",
				"spirit_breaker_nether_strike": "1, true",
				"pudge_meat_hook": "5, true",
				"skeleton_king_hellfire_blast": "0, true",
				"pugna_nether_blast": "2, true",
				"techies_suicide": "5, true",
				"monkey_king_boundless_strike": "0, true",
				"invoker_tornado": "1, true",
				"invoker_emp": "2, true",
				"invoker_sun_strike": "3, true",
				"invoker_deafening_blast": "4, true",
				"crystal_maiden_crystal_nova": "8, true",
				"venomancer_noxious_plague": "4, true",
				"luna_lucent_beam": "3, true",
				"obsidian_destroyer_sanity_eclipse": "4, true",
				"obsidian_destroyer_astral_imprisonment": "3, true",
				"nevermore_shadowraze1": "0, true",
				"nevermore_shadowraze2": "1, true",
				"nevermore_shadowraze3": "2, true",
				"nevermore_requiem": "3, true",
				"tusk_ice_shards": "0, true",
				"tusk_walrus_kick": "1, true",
				"sven_storm_bolt": "8, true",
				"night_stalker_void": "2, true",
				"earthshaker_fissure": "3, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"lina_dragon_slave": "0, true",
				"lina_light_strike_array": "1, true",
				"lina_laguna_blade": "2, true",
				"dragon_knight_breathe_fire": "0, true",
				"dragon_knight_dragon_tail": "1, true",
				"bounty_hunter_shuriken_toss": "3, true",
				"hoodwink_bushwhack": "2, true",
				"hoodwink_sharpshooter": "3, true",
				"drow_ranger_multishot": "4, true",
				"death_prophet_carrion_swarm": "0, true",
				"vengefulspirit_magic_missile": "4, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"sandking_burrowstrike": "4, true",
				"centaur_hoof_stomp": "0, true",
				"centaur_double_edge": "1, true",
				"storm_spirit_static_remnant": "0, true",
				"zuus_lightning_bolt": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"zuus_arc_lightning": "0, true",
				"sniper_assassinate": "2, true",
				"lich_frost_nova": "5, true",
				"item_ethereal_blade": "8, true",
				"tinker_laser": "0, true",
				"visage_soul_assumption": "1, true",
				"antimage_mana_void": "2, true",
				"bristleback_quill_spray": "1, true",
				"tidehunter_gush": "4, true",
				"tidehunter_anchor_smash": "5, true",
				"tidehunter_ravage": "6, true",
				"item_nullifier": "7, true",
				"beastmaster_wild_axes": "0, true",
				"beastmaster_primal_roar": "1, true",
				"windrunner_shackleshot": "6, true",
				"windrunner_powershot": "7, true",
				"legion_commander_overwhelming_odds": "0, true",
				"tiny_toss_tree": "1, true",
				"oracle_purifying_flames": "3, true",
				"grimstroke_dark_artistry": "0, true",
				"grimstroke_spirit_walk": "1, true",
				"queenofpain_shadow_strike": "0, true",
				"queenofpain_scream_of_pain": "1, true",
				"queenofpain_sonic_wave": "2, true",
				"rattletrap_rocket_flare": "0, true",
				"mars_spear": "4, true",
				"mars_gods_rebuke": "5, true",
				"shadow_shaman_ether_shock": "7, true",
				"void_spirit_dissimilate": "5, true",
				"void_spirit_resonant_pulse": "6, true",
				"mirana_starfall": "7, true",
				"mirana_arrow": "8, true",
				"muerta_parting_shot": "2, true",
				"nyx_assassin_impale": "2, true",
				"nyx_assassin_jolt": "3, true",
				"axe_culling_blade": "1, true",
				"puck_illusory_orb": "4, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_great_famango": {
			  "Counter:": {
				"necrolyte_death_pulse": "0, true",
				"necrolyte_reapers_scythe": "1, true",
				"phoenix_supernova": "2, true",
				"phantom_assassin_stifling_dagger": "5, true",
				"medusa_mystic_snake": "0, true",
				"jakiro_ice_path": "5, true",
				"mud_golem_hurl_boulder": "7, true",
				"lion_impale": "3, true",
				"lion_finger_of_death": "4, true",
				"kunkka_torrent": "2, true",
				"kunkka_tidebringer": "3, true",
				"kunkka_ghostship": "4, true",
				"chaos_knight_chaos_bolt": "5, true",
				"chaos_knight_reality_rift": "6, true",
				"gyrocopter_homing_missile": "7, true",
				"gyrocopter_call_down": "8, true",
				"monkey_king_boundless_strike": "0, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"lina_dragon_slave": "0, true",
				"lina_light_strike_array": "1, true",
				"lina_laguna_blade": "2, true",
				"dragon_knight_breathe_fire": "0, true",
				"dragon_knight_dragon_tail": "1, true",
				"bounty_hunter_shuriken_toss": "7, true",
				"windrunner_shackleshot": "2, true",
				"windrunner_powershot": "3, true",
				"legion_commander_overwhelming_odds": "4, true",
				"hoodwink_bushwhack": "2, true",
				"hoodwink_sharpshooter": "3, true",
				"earthshaker_fissure": "3, true",
				"warlock_rain_of_chaos": "4, true",
				"rattletrap_rocket_flare": "6, true",
				"item_nullifier": "7, true",
				"antimage_mana_void": "2, true",
				"obsidian_destroyer_astral_imprisonment": "3, true",
				"obsidian_destroyer_sanity_eclipse": "4, true",
				"mars_spear": "4, true",
				"mars_gods_rebuke": "5, true",
				"shadow_shaman_ether_shock": "7, true",
				"visage_soul_assumption": "1, true",
				"beastmaster_wild_axes": "0, true",
				"beastmaster_primal_roar": "1, true",
				"sniper_assassinate": "2, true",
				"void_spirit_dissimilate": "5, true",
				"void_spirit_resonant_pulse": "6, true",
				"item_ethereal_blade": "8, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsjakiro_ice_path": {
			  "Disable:": {
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"centaur_hoof_stomp": "2, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"witch_doctor_death_ward": "4, true",
				"dark_troll_warlord_ensnare": "3, true",
				"faceless_void_time_walk": "4, true",
				"faceless_void_chronosphere": "5, true",
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true",
				"dazzle_shallow_grave": "2, true",
				"axe_berserkers_call": "5, true",
				"axe_culling_blade": "6, true",
				"abyssal_underlord_pit_of_malice": "7, true",
				"jakiro_ice_path": "8, true",
				"weaver_time_lapse": "0, true",
				"zuus_thundergods_wrath": "1, true",
				"earthshaker_fissure": "2, true"
			  },
			  "Modifier disable:": {
				"faceless_void_chronosphere": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsjakiro_dual_breath": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsspirit_breaker_planar_pocket": {
			  "Counter:": {
				"tusk_ice_shards": "0, true",
				"tusk_walrus_kick": "1, true",
				"centaur_hoof_stomp": "2, true",
				"centaur_double_edge": "3, true",
				"witch_doctor_paralyzing_cask": "4, true"
			  },
			  "Modifier counter:": {
				"centaur_hoof_stomp": "0, true",
				"witch_doctor_maledict": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsspirit_breaker_bulldoze": {
			  "Counter:": {
				"drow_ranger_wave_of_silence": "5, true",
				"centaur_hoof_stomp": "1, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"witch_doctor_death_ward": "3, true",
				"dark_troll_warlord_ensnare": "3, true",
				"faceless_void_chronosphere": "0, true",
				"warlock_rain_of_chaos": "0, true",
				"naga_siren_ensnare": "1, true",
				"spirit_breaker_charge_of_darkness": "1, true",
				"spirit_breaker_nether_strike": "2, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"hoodwink_bushwhack": "1, true",
				"hoodwink_sharpshooter": "2, true",
				"obsidian_destroyer_astral_imprisonment": "3, true",
				"obsidian_destroyer_sanity_eclipse": "4, true",
				"item_rod_of_atos": "4, true",
				"snapfire_firesnap_cookie": "0, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_blade_mail": {
			  "Counter:": {
				"drow_ranger_multishot": "0, true",
				"tusk_ice_shards": "1, true",
				"centaur_hoof_stomp": "2, true",
				"centaur_double_edge": "3, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"faceless_void_chronosphere": "5, true",
				"earthshaker_fissure": "0, true",
				"earthshaker_echo_slam": "1, true",
				"bloodseeker_blood_bath": "2, true",
				"doom_bringer_doom": "3, true",
				"phoenix_supernova": "4, true",
				"luna_lucent_beam": "0, true",
				"luna_eclipse": "1, true",
				"obsidian_destroyer_sanity_eclipse": "2, true",
				"jakiro_ice_path": "0, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"item_abyssal_blade": "8, true",
				"item_bloodthorn": "9, true",
				"axe_berserkers_call": "4, true",
				"death_prophet_carrion_swarm": "0, true",
				"shadow_shaman_ether_shock": "1, true",
				"shadow_shaman_voodoo": "2, true",
				"shadow_shaman_shackles": "3, true",
				"item_sheepstick": "6, true",
				"slardar_slithereen_crush": "2, true",
				"monkey_king_boundless_strike": "1, true",
				"mars_spear": "1, true",
				"nevermore_shadowraze1": "2, true",
				"nevermore_shadowraze2": "3, true",
				"nevermore_shadowraze3": "4, true",
				"nevermore_requiem": "5, true",
				"antimage_mana_void": "0, true",
				"zuus_arc_lightning": "1, true",
				"zuus_lightning_bolt": "2, true",
				"zuus_thundergods_wrath": "3, true",
				"visage_soul_assumption": "6, true",
				"item_orchid": "7, true",
				"lina_dragon_slave": "0, true",
				"lina_light_strike_array": "1, true",
				"sniper_assassinate": "3, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"alchemist_unstable_concoction_throw": "5, true",
				"sven_storm_bolt": "2, true",
				"hoodwink_bushwhack": "3, true",
				"hoodwink_sharpshooter": "4, true",
				"snapfire_firesnap_cookie": "5, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"shredder_timber_chain": "2, true",
				"tinker_laser": "3, true",
				"legion_commander_overwhelming_odds": "4, true",
				"legion_commander_duel": "5, true"
			  },
			  "Modifier counter:": {
				"bloodseeker_rupture": "0, true",
				"crystal_maiden_freezing_field": "0, true",
				"lina_laguna_blade": "0, true",
				"sven_gods_strength": "0, true",
				"snapfire_mortimer_kisses": "1, true",
				"lion_finger_of_death": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_invis_sword": {
			  "Counter:": {
				"witch_doctor_paralyzing_cask": "2, true",
				"dark_troll_warlord_ensnare": "0, true",
				"mud_golem_hurl_boulder": "3, true",
				"skeleton_king_hellfire_blast": "4, true",
				"item_sheepstick": "4, true",
				"dragon_knight_dragon_tail": "0, true",
				"item_abyssal_blade": "0, true",
				"item_bloodthorn": "6, true",
				"legion_commander_duel": "0, true",
				"vengefulspirit_magic_missile": "4, true",
				"pudge_dismember": "3, true",
				"alchemist_unstable_concoction_throw": "0, true",
				"earthshaker_fissure": "0, true",
				"earthshaker_echo_slam": "1, true",
				"item_orchid": "2, true",
				"item_rod_of_atos": "0, true",
				"juggernaut_omni_slash": "2, true",
				"juggernaut_swift_slash": "3, true",
				"storm_spirit_electric_vortex": "0, true",
				"luna_eclipse": "1, true",
				"lion_voodoo": "1, true",
				"terrorblade_sunder": "1, true",
				"silencer_global_silence": "2, true",
				"night_stalker_crippling_fear": "2, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"item_gungir": "6, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"windrunner_shackleshot": "3, true",
				"rattletrap_hookshot": "1, true",
				"beastmaster_primal_roar": "4, true",
				"void_spirit_astral_step": "2, true",
				"shadow_shaman_voodoo": "4, true",
				"shadow_shaman_shackles": "5, true",
				"muerta_parting_shot": "0, true",
				"sandking_burrowstrike": "1, true"
			  },
			  "Modifier counter:": {
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true",
				"luna_eclipse": "0, true",
				"slark_pounce": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_shivas_guard": {
			  "Counter:": {
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"witch_doctor_death_ward": "2, true",
				"faceless_void_chronosphere": "3, true",
				"axe_berserkers_call": "0, true",
				"legion_commander_duel": "0, true",
				"monkey_king_boundless_strike": "0, true",
				"sven_storm_bolt": "1, true",
				"dragon_knight_dragon_tail": "0, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"skeleton_king_hellfire_blast": "2, true",
				"windrunner_shackleshot": "1, true",
				"gyrocopter_homing_missile": "2, true",
				"beastmaster_primal_roar": "0, true",
				"mars_arena_of_blood": "1, true"
			  },
			  "Modifier counter:": {
				"drow_ranger_wave_of_silence": "0, true",
				"faceless_void_chronosphere": "1, true",
				"axe_berserkers_call": "1, true",
				"legion_commander_duel": "0, true",
				"monkey_king_boundless_strike": "0, true",
				"sven_storm_bolt": "1, true",
				"sven_gods_strength": "2, true",
				"dragon_knight_dragon_tail": "0, true",
				"skeleton_king_hellfire_blast": "0, true",
				"morphling_adaptive_strike_str": "1, true",
				"windrunner_shackleshot": "1, true",
				"gyrocopter_homing_missile": "0, true",
				"item_abyssal_blade": "1, true",
				"beastmaster_primal_roar": "0, true",
				"medusa_stone_gaze": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmorphling_waveform": {
			  "Blink:": {
				"mars_spear": "1, true",
				"mars_arena_of_blood": "2, true",
				"vengefulspirit_magic_missile": "3, true",
				"spirit_breaker_nether_strike": "3, true",
				"muerta_parting_shot": "4, true",
				"gyrocopter_call_down": "5, true",
				"dark_troll_warlord_ensnare": "4, true",
				"item_gungir": "2, true",
				"axe_culling_blade": "0, true",
				"axe_berserkers_call": "1, true",
				"abyssal_underlord_pit_of_malice": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"night_stalker_crippling_fear": "2, true",
				"slardar_slithereen_crush": "0, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"dragon_knight_dragon_tail": "2, true",
				"magnataur_skewer": "3, true",
				"magnataur_reverse_polarity": "4, true",
				"tinker_warp_grenade": "6, true",
				"hoodwink_sharpshooter": "0, true",
				"legion_commander_duel": "0, true",
				"item_ethereal_blade": "7, true",
				"silencer_global_silence": "0, true",
				"monkey_king_boundless_strike": "1, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"item_rod_of_atos": "5, true",
				"faceless_void_chronosphere": "1, true",
				"luna_eclipse": "1, true",
				"pudge_meat_hook": "2, true",
				"pudge_dismember": "3, true",
				"sniper_assassinate": "5, true",
				"sandking_burrowstrike": "0, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmorphling_adaptive_strike_agi": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmorphling_morph_str": {
			  "Counter:": {
				"mars_spear": "4, true",
				"mars_gods_rebuke": "5, true",
				"vengefulspirit_magic_missile": "5, true",
				"spirit_breaker_charge_of_darkness": "3, true",
				"spirit_breaker_nether_strike": "4, true",
				"muerta_parting_shot": "5, true",
				"gyrocopter_homing_missile": "12, true",
				"gyrocopter_call_down": "7, true",
				"item_sheepstick": "8, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"invoker_tornado": "1, true",
				"invoker_emp": "2, true",
				"invoker_sun_strike": "3, true",
				"invoker_deafening_blast": "4, true",
				"necrolyte_reapers_scythe": "5, true",
				"necrolyte_death_pulse": "6, true",
				"witch_doctor_death_ward": "2, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"morphling_waveform": "4, true",
				"morphling_adaptive_strike_str": "2, true",
				"morphling_adaptive_strike_agi": "3, true",
				"axe_culling_blade": "0, true",
				"axe_berserkers_call": "1, true",
				"mirana_starfall": "1, true",
				"mirana_arrow": "2, true",
				"drow_ranger_wave_of_silence": "2, true",
				"night_stalker_void": "3, true",
				"night_stalker_crippling_fear": "4, true",
				"bounty_hunter_shuriken_toss": "5, true",
				"slardar_slithereen_crush": "0, true",
				"dragon_knight_dragon_tail": "3, true",
				"magnataur_shockwave": "4, true",
				"magnataur_skewer": "5, true",
				"magnataur_reverse_polarity": "6, true",
				"tinker_laser": "7, true",
				"item_orchid": "4, true",
				"item_bloodthorn": "7, true",
				"medusa_mystic_snake": "0, true",
				"visage_soul_assumption": "1, true",
				"hoodwink_bushwhack": "2, true",
				"hoodwink_sharpshooter": "3, true",
				"phantom_assassin_stifling_dagger": "7, true",
				"undying_decay": "1, true",
				"undying_soul_rip": "2, true",
				"legion_commander_overwhelming_odds": "3, true",
				"legion_commander_duel": "4, true",
				"jakiro_ice_path": "0, true",
				"skeleton_king_hellfire_blast": "1, true",
				"zuus_arc_lightning": "0, true",
				"zuus_lightning_bolt": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"silencer_global_silence": "3, true",
				"monkey_king_boundless_strike": "4, true",
				"ogre_magi_fireblast": "5, true",
				"ogre_magi_unrefined_fireblast": "6, true",
				"item_abyssal_blade": "9, true",
				"faceless_void_chronosphere": "3, true",
				"luna_lucent_beam": "1, true",
				"pudge_meat_hook": "2, true",
				"pudge_dismember": "3, true",
				"sniper_assassinate": "5, true",
				"sandking_burrowstrike": "0, true"
			  },
			  "Modifier counter:": {
				"silencer_last_word": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmorphling_adaptive_strike_str": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "1, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"mars_spear": "2, true",
				"mars_arena_of_blood": "3, true",
				"vengefulspirit_magic_missile": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"spirit_breaker_charge_of_darkness": "4, true",
				"spirit_breaker_nether_strike": "5, true",
				"muerta_parting_shot": "6, true",
				"dark_troll_warlord_ensnare": "4, true",
				"axe_culling_blade": "0, true",
				"axe_berserkers_call": "1, true",
				"abyssal_underlord_pit_of_malice": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"drow_ranger_multishot": "2, true",
				"night_stalker_crippling_fear": "3, true",
				"slardar_slithereen_crush": "0, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"witch_doctor_death_ward": "2, true",
				"dragon_knight_dragon_tail": "3, true",
				"magnataur_skewer": "4, true",
				"magnataur_reverse_polarity": "5, true",
				"tinker_warp_grenade": "7, true",
				"medusa_stone_gaze": "0, true",
				"hoodwink_sharpshooter": "1, true",
				"bloodseeker_rupture": "0, true",
				"phantom_assassin_phantom_strike": "6, true",
				"undying_tombstone": "2, true",
				"legion_commander_duel": "3, true",
				"zuus_thundergods_wrath": "0, true",
				"silencer_global_silence": "1, true",
				"monkey_king_boundless_strike": "2, true",
				"ogre_magi_fireblast": "3, true",
				"ogre_magi_unrefined_fireblast": "4, true",
				"luna_eclipse": "0, true",
				"pudge_meat_hook": "1, true",
				"pudge_dismember": "2, true",
				"faceless_void_time_walk": "0, true",
				"faceless_void_chronosphere": "1, true"
			  },
			  "Modifier disable:": {
				"magnataur_skewer": "0, true",
				"pudge_dismember": "0, true",
				"faceless_void_chronosphere": "0, true"
			  }
			},
			"uniqueSettingsitem_satanic": {
			  "Counter:": {
				"axe_berserkers_call": "0, true",
				"legion_commander_duel": "0, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingspugna_nether_blast": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingspugna_decrepify": {
			  "Counter:": {
				"mars_arena_of_blood": "0, true",
				"spirit_breaker_charge_of_darkness": "1, true",
				"spirit_breaker_nether_strike": "2, true",
				"gyrocopter_homing_missile": "3, true",
				"witch_doctor_death_ward": "0, true",
				"axe_berserkers_call": "0, true",
				"dazzle_shadow_wave": "1, true",
				"sven_storm_bolt": "0, true"
			  },
			  "Modifier counter:": {
				"gyrocopter_homing_missile": "0, true",
				"ember_spirit_sleight_of_fist": "0, true",
				"huskar_life_break": "1, true",
				"axe_berserkers_call": "0, true",
				"sven_storm_bolt": "0, true",
				"sven_gods_strength": "1, true",
				"slark_pounce": "2, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "0, true",
				"sven_storm_bolt": "0, true"
			  },
			  "Modifier disable:": {
				"gyrocopter_flak_cannon": "0, true",
				"invoker_alacrity": "0, true",
				"huskar_life_break": "0, true",
				"life_stealer_open_wounds": "0, true",
				"sven_gods_strength": "0, true",
				"slark_pounce": "1, true"
			  }
			},
			"uniqueSettingsitem_glimmer_cape": {
			  "Counter:": {
				"mars_spear": "4, true",
				"mars_arena_of_blood": "5, true",
				"vengefulspirit_magic_missile": "2, true",
				"spirit_breaker_charge_of_darkness": "3, true",
				"spirit_breaker_nether_strike": "4, true",
				"muerta_parting_shot": "5, true",
				"gyrocopter_homing_missile": "7, true",
				"gyrocopter_call_down": "8, true",
				"mud_golem_hurl_boulder": "9, true",
				"dark_troll_warlord_ensnare": "10, true",
				"item_sheepstick": "13, true",
				"item_gungir": "11, true",
				"pudge_meat_hook": "2, true",
				"pudge_dismember": "3, true",
				"undying_decay": "3, true",
				"undying_soul_rip": "4, true",
				"warlock_rain_of_chaos": "0, true",
				"magnataur_shockwave": "5, true",
				"magnataur_reverse_polarity": "6, true",
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"legion_commander_overwhelming_odds": "3, true",
				"legion_commander_duel": "4, true",
				"hoodwink_bushwhack": "2, true",
				"hoodwink_sharpshooter": "3, true",
				"queenofpain_scream_of_pain": "7, true",
				"queenofpain_sonic_wave": "8, true",
				"antimage_mana_void": "9, true",
				"item_abyssal_blade": "8, true",
				"item_rod_of_atos": "13, true",
				"riki_smoke_screen": "0, true",
				"jakiro_ice_path": "5, true",
				"item_bloodthorn": "7, true",
				"zuus_arc_lightning": "6, true",
				"zuus_lightning_bolt": "7, true",
				"zuus_thundergods_wrath": "8, true",
				"sniper_assassinate": "3, true",
				"monkey_king_boundless_strike": "4, true",
				"sven_storm_bolt": "0, true",
				"sandking_burrowstrike": "2, true",
				"lich_frost_nova": "5, true",
				"lich_chain_frost": "6, true",
				"item_ethereal_blade": "7, true",
				"tinker_warp_grenade": "0, true",
				"lina_dragon_slave": "5, true",
				"lina_light_strike_array": "6, true",
				"lina_laguna_blade": "7, true",
				"rubick_telekinesis": "2, true",
				"medusa_mystic_snake": "1, true",
				"oracle_purifying_flames": "3, true",
				"faceless_void_chronosphere": "0, true",
				"juggernaut_omni_slash": "5, true",
				"juggernaut_swift_slash": "6, true",
				"item_orchid": "5, true",
				"pugna_nether_blast": "8, true",
				"grimstroke_spirit_walk": "9, true",
				"dragon_knight_breathe_fire": "0, true",
				"dragon_knight_dragon_tail": "1, true",
				"windrunner_shackleshot": "2, true",
				"windrunner_powershot": "3, true",
				"crystal_maiden_crystal_nova": "1, true",
				"crystal_maiden_frostbite": "2, true",
				"item_nullifier": "6, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"witch_doctor_death_ward": "5, true",
				"invoker_tornado": "4, true",
				"invoker_emp": "5, true",
				"invoker_chaos_meteor": "6, true",
				"invoker_sun_strike": "7, true",
				"invoker_deafening_blast": "8, true",
				"phoenix_supernova": "11, true",
				"visage_soul_assumption": "1, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"necrolyte_reapers_scythe": "7, true",
				"necrolyte_death_pulse": "10, true",
				"snapfire_firesnap_cookie": "5, true",
				"abaddon_death_coil": "1, true",
				"bloodseeker_rupture": "0, true",
				"nyx_assassin_impale": "1, true",
				"nyx_assassin_jolt": "2, true",
				"nevermore_shadowraze1": "0, true",
				"nevermore_shadowraze2": "1, true",
				"nevermore_shadowraze3": "2, true",
				"nevermore_requiem": "3, true",
				"skeleton_king_hellfire_blast": "4, true"
			  },
			  "Modifier counter:": {
				"gyrocopter_rocket_barrage": "4, true",
				"gyrocopter_homing_missile": "5, true",
				"item_sheepstick": "6, true",
				"pudge_rot": "1, true",
				"pudge_dismember": "2, true",
				"warlock_rain_of_chaos": "0, true",
				"magnataur_reverse_polarity": "3, true",
				"drow_ranger_wave_of_silence": "1, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"legion_commander_duel": "2, true",
				"queenofpain_shadow_strike": "3, true",
				"item_abyssal_blade": "5, true",
				"keeper_of_the_light_radiant_bind": "0, true",
				"jakiro_dual_breath": "2, true",
				"monkey_king_boundless_strike": "0, true",
				"sven_storm_bolt": "0, true",
				"sven_gods_strength": "1, true",
				"sandking_burrowstrike": "3, true",
				"lich_sinister_gaze": "2, true",
				"lich_chain_frost": "3, true",
				"item_ethereal_blade": "5, true",
				"slark_pounce": "0, true",
				"rubick_telekinesis": "1, true",
				"medusa_stone_gaze": "0, true",
				"ember_spirit_searing_chains": "1, true",
				"ember_spirit_flame_guard": "2, true",
				"juggernaut_blade_fury": "3, true",
				"juggernaut_omni_slash": "4, true",
				"juggernaut_swift_slash": "5, true",
				"razor_eye_of_the_storm": "6, true",
				"abyssal_underlord_firestorm": "6, true",
				"grimstroke_spirit_walk": "7, true",
				"pugna_life_drain": "8, true",
				"dragon_knight_dragon_tail": "0, true",
				"windrunner_shackleshot": "1, true",
				"crystal_maiden_frostbite": "1, true",
				"crystal_maiden_freezing_field": "2, true",
				"alchemist_unstable_concoction_throw": "0, true",
				"witch_doctor_maledict": "3, true",
				"invoker_chaos_meteor": "3, true",
				"phoenix_supernova": "5, true",
				"phoenix_launch_fire_spirit": "6, true",
				"necrolyte_reapers_scythe": "4, true",
				"snapfire_mortimer_kisses": "4, true",
				"item_veil_of_discord": "4, true",
				"bloodseeker_rupture": "0, true",
				"nyx_assassin_impale": "1, true",
				"axe_berserkers_call": "3, true",
				"nevermore_requiem": "0, true",
				"skeleton_king_hellfire_blast": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_force_staff": {
			  "Blink:": {
				"mars_spear": "0, true",
				"mars_arena_of_blood": "1, true",
				"vengefulspirit_magic_missile": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"muerta_parting_shot": "4, true",
				"gyrocopter_call_down": "0, true",
				"dark_troll_warlord_ensnare": "4, true",
				"item_gungir": "3, true",
				"skeleton_king_hellfire_blast": "0, true",
				"techies_suicide": "1, true",
				"item_ethereal_blade": "4, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"lina_light_strike_array": "4, true",
				"lina_laguna_blade": "5, true",
				"faceless_void_chronosphere": "0, true",
				"skywrath_mage_mystic_flare": "3, true",
				"slardar_slithereen_crush": "4, true",
				"item_rod_of_atos": "2, true",
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"sandking_burrowstrike": "0, true",
				"drow_ranger_wave_of_silence": "0, true",
				"tinker_warp_grenade": "0, true",
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"dragon_knight_dragon_tail": "0, true",
				"phoenix_supernova": "4, true",
				"jakiro_ice_path": "2, true",
				"hoodwink_sharpshooter": "2, true",
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"elder_titan_echo_stomp": "2, true",
				"elder_titan_earth_splitter": "3, true",
				"alchemist_unstable_concoction_throw": "4, true",
				"queenofpain_sonic_wave": "1, true",
				"silencer_global_silence": "2, true",
				"warlock_rain_of_chaos": "2, true",
				"night_stalker_crippling_fear": "1, true",
				"huskar_life_break": "0, true",
				"legion_commander_duel": "1, true",
				"crystal_maiden_frostbite": "2, true",
				"invoker_tornado": "2, true",
				"sven_storm_bolt": "0, true",
				"shadow_shaman_shackles": "1, true",
				"centaur_hoof_stomp": "2, true",
				"ancient_apparition_ice_blast": "0, true",
				"windrunner_shackleshot": "4, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"nyx_assassin_impale": "1, true",
				"magnataur_skewer": "2, true",
				"magnataur_reverse_polarity": "3, true"
			  },
			  "Modifier blink:": {
				"rubick_telekinesis": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsstorm_spirit_ball_lightning": {
			  "Counter:": {
				"mirana_arrow": "0, true",
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"obsidian_destroyer_sanity_eclipse": "3, true",
				"mud_golem_hurl_boulder": "8, true",
				"dark_troll_warlord_ensnare": "9, true",
				"item_rod_of_atos": "9, true",
				"item_gungir": "9, true",
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_ignite": "3, true",
				"ogre_magi_unrefined_fireblast": "4, true",
				"medusa_mystic_snake": "5, true",
				"void_spirit_dissimilate": "0, true",
				"void_spirit_astral_step": "1, true",
				"phantom_assassin_stifling_dagger": "2, true",
				"skeleton_king_hellfire_blast": "3, true",
				"pugna_nether_blast": "4, true",
				"batrider_flamebreak": "5, true",
				"batrider_flaming_lasso": "6, true",
				"dragon_knight_dragon_tail": "0, true",
				"windrunner_shackleshot": "1, true",
				"windrunner_powershot": "2, true",
				"legion_commander_overwhelming_odds": "3, true",
				"legion_commander_duel": "4, true",
				"hoodwink_bushwhack": "5, true",
				"hoodwink_sharpshooter": "6, true",
				"tinker_warp_grenade": "0, true",
				"storm_spirit_static_remnant": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"queenofpain_shadow_strike": "3, true",
				"queenofpain_scream_of_pain": "4, true",
				"queenofpain_sonic_wave": "5, true",
				"terrorblade_sunder": "6, true",
				"doom_bringer_doom": "7, true"
			  },
			  "Modifier counter:": {
				"pugna_life_drain": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Blink:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"obsidian_destroyer_sanity_eclipse": "2, true",
				"dark_troll_warlord_ensnare": "4, true",
				"item_rod_of_atos": "5, true",
				"item_gungir": "5, true",
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"void_spirit_dissimilate": "0, true",
				"void_spirit_resonant_pulse": "1, true",
				"skeleton_king_hellfire_blast": "2, true",
				"batrider_flaming_lasso": "3, true",
				"dragon_knight_dragon_tail": "0, true",
				"windrunner_shackleshot": "1, true",
				"legion_commander_duel": "2, true",
				"hoodwink_sharpshooter": "3, true",
				"tinker_warp_grenade": "0, true",
				"storm_spirit_electric_vortex": "1, true",
				"queenofpain_sonic_wave": "2, true",
				"doom_bringer_doom": "3, true"
			  },
			  "Modifier blink:": {}
			},
			"uniqueSettingsstorm_spirit_electric_vortex": {
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"obsidian_destroyer_sanity_eclipse": "2, true",
				"weaver_time_lapse": "1, true",
				"juggernaut_omni_slash": "4, true",
				"juggernaut_swift_slash": "5, true",
				"dark_troll_warlord_ensnare": "5, true",
				"spectre_haunt": "0, true",
				"lion_impale": "1, true",
				"lion_finger_of_death": "2, true",
				"ogre_magi_fireblast": "3, true",
				"ogre_magi_unrefined_fireblast": "4, true",
				"medusa_stone_gaze": "5, true",
				"void_spirit_dissimilate": "0, true",
				"void_spirit_astral_step": "1, true",
				"phantom_assassin_phantom_strike": "2, true",
				"skeleton_king_hellfire_blast": "3, true",
				"batrider_flaming_lasso": "4, true",
				"dragon_knight_dragon_tail": "0, true",
				"windrunner_shackleshot": "2, true",
				"legion_commander_duel": "3, true",
				"hoodwink_sharpshooter": "4, true"
			  },
			  "Modifier disable:": {
				"pugna_life_drain": "0, true",
				"batrider_flaming_lasso": "1, true",
				"windrunner_focusfire": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_orchid": {
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"obsidian_destroyer_sanity_eclipse": "2, true",
				"weaver_time_lapse": "3, true",
				"juggernaut_omni_slash": "4, true",
				"juggernaut_swift_slash": "5, true",
				"dark_troll_warlord_ensnare": "2, true",
				"skeleton_king_hellfire_blast": "5, true",
				"phantom_assassin_phantom_strike": "0, true",
				"techies_suicide": "1, true",
				"faceless_void_chronosphere": "3, true",
				"faceless_void_time_walk": "4, true",
				"dazzle_shallow_grave": "2, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"skywrath_mage_ancient_seal": "5, true",
				"slardar_slithereen_crush": "6, true",
				"spectre_haunt": "0, true",
				"lion_impale": "1, true",
				"lion_voodoo": "2, true",
				"lion_finger_of_death": "3, true",
				"ogre_magi_fireblast": "6, true",
				"ogre_magi_unrefined_fireblast": "7, true",
				"medusa_stone_gaze": "6, true",
				"legion_commander_duel": "0, true",
				"vengefulspirit_magic_missile": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"dragon_knight_dragon_tail": "5, true",
				"drow_ranger_wave_of_silence": "5, true",
				"drow_ranger_multishot": "6, true",
				"earthshaker_fissure": "2, true",
				"storm_spirit_electric_vortex": "0, true",
				"dark_willow_terrorize": "6, true",
				"void_spirit_dissimilate": "0, true",
				"void_spirit_astral_step": "1, true",
				"batrider_flaming_lasso": "4, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"antimage_blink": "2, true",
				"antimage_mana_void": "3, true",
				"huskar_life_break": "4, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"witch_doctor_death_ward": "3, true",
				"hoodwink_sharpshooter": "2, true",
				"primal_beast_pulverize": "4, true",
				"zuus_thundergods_wrath": "0, true",
				"terrorblade_sunder": "1, true",
				"silencer_global_silence": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"nevermore_requiem": "2, true",
				"shadow_shaman_voodoo": "1, true",
				"shadow_shaman_shackles": "2, true",
				"shadow_shaman_mass_serpent_ward": "3, true",
				"magnataur_skewer": "4, true",
				"magnataur_reverse_polarity": "5, true",
				"windrunner_shackleshot": "2, true",
				"spirit_breaker_nether_strike": "3, true",
				"warlock_rain_of_chaos": "4, true",
				"mars_spear": "0, true",
				"mars_arena_of_blood": "1, true",
				"jakiro_ice_path": "6, true",
				"nyx_assassin_impale": "1, true"
			  },
			  "Modifier disable:": {
				"pugna_life_drain": "0, true",
				"pudge_dismember": "0, true",
				"primal_beast_pulverize": "0, true",
				"crystal_maiden_freezing_field": "0, true",
				"shadow_shaman_shackles": "0, true",
				"magnataur_skewer": "1, true",
				"warlock_upheaval": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstinker_laser": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "1, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"dragon_knight_dragon_tail": "0, true",
				"legion_commander_duel": "0, true"
			  },
			  "Modifier disable:": {
				"magnataur_empower": "0, true",
				"terrorblade_metamorphosis": "0, true",
				"legion_commander_press_the_attack": "0, true",
				"legion_commander_duel": "1, true",
				"monkey_king_jingu_mastery": "2, true"
			  }
			},
			"uniqueSettingstinker_defense_matrix": {
			  "Counter:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"slardar_slithereen_crush": "6, true",
				"queenofpain_shadow_strike": "4, true",
				"queenofpain_scream_of_pain": "5, true",
				"queenofpain_sonic_wave": "6, true",
				"muerta_parting_shot": "4, true",
				"dark_troll_warlord_ensnare": "5, true",
				"luna_lucent_beam": "6, true",
				"luna_eclipse": "7, true",
				"techies_suicide": "8, true",
				"item_orchid": "7, true",
				"item_bloodthorn": "8, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"witch_doctor_death_ward": "2, true",
				"dragon_knight_breathe_fire": "3, true",
				"dragon_knight_dragon_tail": "4, true",
				"magnataur_shockwave": "5, true",
				"magnataur_reverse_polarity": "6, true",
				"tinker_laser": "0, true",
				"tinker_warp_grenade": "1, true",
				"storm_spirit_static_remnant": "2, true",
				"storm_spirit_electric_vortex": "3, true",
				"doom_bringer_doom": "7, true",
				"jakiro_dual_breath": "0, true",
				"jakiro_ice_path": "1, true",
				"legion_commander_overwhelming_odds": "2, true",
				"legion_commander_duel": "3, true",
				"monkey_king_boundless_strike": "4, true"
			  },
			  "Modifier counter:": {
				"axe_berserkers_call": "0, true",
				"slardar_slithereen_crush": "4, true",
				"slardar_amplify_damage": "5, true",
				"queenofpain_shadow_strike": "1, true",
				"luna_eclipse": "3, true",
				"witch_doctor_maledict": "2, true",
				"dragon_knight_dragon_tail": "3, true",
				"magnataur_reverse_polarity": "4, true",
				"storm_spirit_electric_vortex": "0, true",
				"terrorblade_metamorphosis": "2, true",
				"doom_bringer_doom": "3, true",
				"jakiro_dual_breath": "0, true",
				"legion_commander_press_the_attack": "1, true",
				"legion_commander_duel": "2, true",
				"monkey_king_boundless_strike": "3, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstinker_warp_grenade": {
			  "Disable:": {},
			  "Modifier disable:": {
				"item_black_king_bar": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_arcane_blink": {
			  "Blink:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"pudge_meat_hook": "0, true",
				"pudge_dismember": "1, true",
				"sniper_assassinate": "2, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"juggernaut_omni_slash": "3, true",
				"juggernaut_swift_slash": "4, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"dark_troll_warlord_ensnare": "5, true",
				"item_ethereal_blade": "6, true",
				"item_nullifier": "8, true",
				"slardar_slithereen_crush": "3, true",
				"queenofpain_sonic_wave": "1, true",
				"muerta_parting_shot": "0, true",
				"luna_eclipse": "3, true",
				"techies_suicide": "2, true",
				"item_orchid": "6, true",
				"item_bloodthorn": "4, true",
				"sandking_burrowstrike": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"gyrocopter_call_down": "2, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"tidehunter_ravage": "2, true",
				"skeleton_king_hellfire_blast": "5, true",
				"item_gungir": "4, true",
				"item_abyssal_blade": "7, true",
				"item_sheepstick": "9, true",
				"jakiro_ice_path": "0, true",
				"legion_commander_duel": "1, true",
				"monkey_king_boundless_strike": "2, true",
				"kunkka_ghostship": "3, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_sheepstick": {
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"pudge_meat_hook": "1, true",
				"pudge_dismember": "2, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"witch_doctor_death_ward": "4, true",
				"dark_troll_warlord_ensnare": "7, true",
				"necrolyte_reapers_scythe": "0, true",
				"night_stalker_crippling_fear": "1, true",
				"lion_impale": "3, true",
				"lion_voodoo": "4, true",
				"lion_finger_of_death": "5, true",
				"earthshaker_fissure": "5, true",
				"earthshaker_echo_slam": "6, true",
				"item_abyssal_blade": "7, true",
				"faceless_void_time_walk": "0, true",
				"faceless_void_chronosphere": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"vengefulspirit_magic_missile": "4, true",
				"void_spirit_dissimilate": "0, true",
				"void_spirit_astral_step": "1, true",
				"phantom_assassin_phantom_strike": "2, true",
				"skeleton_king_hellfire_blast": "3, true",
				"batrider_flaming_lasso": "4, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"antimage_blink": "2, true",
				"antimage_mana_void": "3, true",
				"huskar_life_break": "4, true",
				"techies_suicide": "2, true",
				"item_orchid": "6, true",
				"dazzle_shallow_grave": "0, true",
				"nevermore_requiem": "1, true",
				"warlock_rain_of_chaos": "4, true",
				"spirit_breaker_charge_of_darkness": "2, true",
				"spirit_breaker_nether_strike": "3, true",
				"luna_eclipse": "4, true",
				"silencer_global_silence": "5, true",
				"sven_storm_bolt": "2, true",
				"sven_gods_strength": "3, true",
				"hoodwink_sharpshooter": "4, true",
				"weaver_time_lapse": "6, true",
				"grimstroke_soul_chain": "1, true",
				"abyssal_underlord_pit_of_malice": "0, true",
				"morphling_adaptive_strike_str": "2, true",
				"undying_tombstone": "0, true",
				"jakiro_ice_path": "1, true",
				"muerta_parting_shot": "0, true",
				"shadow_shaman_voodoo": "3, true",
				"shadow_shaman_shackles": "4, true",
				"shadow_shaman_mass_serpent_ward": "5, true",
				"winter_wyvern_winters_curse": "6, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"faceless_void_chronosphere": "0, true",
				"lich_sinister_gaze": "1, true",
				"pugna_life_drain": "0, true",
				"batrider_flaming_lasso": "1, true",
				"warlock_upheaval": "0, true",
				"ursa_enrage": "0, true",
				"sven_gods_strength": "0, true",
				"snapfire_mortimer_kisses": "1, true",
				"shadow_shaman_shackles": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsinvoker_cold_snap": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "1, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"pudge_meat_hook": "1, true",
				"pudge_dismember": "2, true",
				"ogre_magi_fireblast": "5, true",
				"ogre_magi_unrefined_fireblast": "6, true",
				"dark_troll_warlord_ensnare": "5, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"witch_doctor_death_ward": "1, true",
				"necrolyte_reapers_scythe": "2, true",
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"faceless_void_chronosphere": "0, true",
				"faceless_void_time_walk": "1, true",
				"dazzle_shallow_grave": "0, true",
				"lina_light_strike_array": "3, true",
				"lina_laguna_blade": "4, true",
				"slardar_slithereen_crush": "5, true",
				"obsidian_destroyer_sanity_eclipse": "2, true",
				"antimage_blink": "1, true",
				"antimage_mana_void": "2, true",
				"windrunner_shackleshot": "3, true",
				"lion_finger_of_death": "4, true",
				"lion_impale": "3, true",
				"earthshaker_fissure": "2, true",
				"storm_spirit_electric_vortex": "3, true",
				"dark_willow_terrorize": "6, true",
				"abyssal_underlord_pit_of_malice": "3, true",
				"hoodwink_sharpshooter": "0, true",
				"tinker_warp_grenade": "0, true",
				"crystal_maiden_frostbite": "0, true",
				"rattletrap_hookshot": "1, true",
				"warlock_rain_of_chaos": "2, true",
				"legion_commander_duel": "2, true",
				"phoenix_icarus_dive": "5, true",
				"spectre_haunt": "0, true",
				"weaver_time_lapse": "3, true",
				"vengefulspirit_magic_missile": "0, true",
				"vengefulspirit_nether_swap": "1, true",
				"queenofpain_blink": "3, true",
				"queenofpain_sonic_wave": "4, true",
				"phantom_assassin_phantom_strike": "5, true",
				"sven_storm_bolt": "1, true",
				"sven_gods_strength": "2, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "1, true",
				"faceless_void_chronosphere": "0, true",
				"windrunner_focusfire": "0, true",
				"crystal_maiden_freezing_field": "0, true",
				"warlock_upheaval": "1, true",
				"snapfire_mortimer_kisses": "0, true",
				"sven_gods_strength": "0, true"
			  }
			},
			"uniqueSettingsinvoker_ghost_walk": {
			  "Counter:": {
				"pudge_dismember": "1, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"dark_troll_warlord_ensnare": "2, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"mud_golem_hurl_boulder": "3, true",
				"necrolyte_reapers_scythe": "1, true",
				"skywrath_mage_ancient_seal": "0, true",
				"item_rod_of_atos": "4, true",
				"windrunner_shackleshot": "0, true",
				"lion_voodoo": "1, true",
				"item_gungir": "4, true",
				"earthshaker_fissure": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"item_sheepstick": "5, true",
				"tinker_warp_grenade": "0, true",
				"viper_viper_strike": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"rattletrap_hookshot": "2, true",
				"legion_commander_duel": "0, true",
				"vengefulspirit_magic_missile": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"sven_storm_bolt": "0, true"
			  },
			  "Modifier counter:": {
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true",
				"slark_pounce": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsinvoker_tornado": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "1, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"pudge_meat_hook": "1, true",
				"pudge_dismember": "2, true",
				"ogre_magi_fireblast": "5, true",
				"ogre_magi_unrefined_fireblast": "6, true",
				"dark_troll_warlord_ensnare": "5, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"witch_doctor_death_ward": "1, true",
				"necrolyte_reapers_scythe": "2, true",
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"faceless_void_chronosphere": "0, true",
				"faceless_void_time_walk": "1, true",
				"dazzle_shallow_grave": "0, true",
				"lina_light_strike_array": "3, true",
				"lina_laguna_blade": "4, true",
				"slardar_slithereen_crush": "5, true",
				"obsidian_destroyer_sanity_eclipse": "2, true",
				"antimage_blink": "1, true",
				"antimage_mana_void": "2, true",
				"windrunner_shackleshot": "3, true",
				"lion_finger_of_death": "4, true",
				"lion_impale": "3, true",
				"earthshaker_fissure": "2, true",
				"storm_spirit_electric_vortex": "3, true",
				"dark_willow_terrorize": "6, true",
				"abyssal_underlord_pit_of_malice": "3, true",
				"hoodwink_sharpshooter": "0, true",
				"tinker_warp_grenade": "0, true",
				"crystal_maiden_frostbite": "0, true",
				"rattletrap_hookshot": "1, true",
				"warlock_rain_of_chaos": "2, true",
				"legion_commander_duel": "2, true",
				"phoenix_icarus_dive": "5, true",
				"weaver_time_lapse": "3, true",
				"vengefulspirit_magic_missile": "0, true",
				"vengefulspirit_nether_swap": "1, true",
				"queenofpain_blink": "3, true",
				"queenofpain_sonic_wave": "4, true",
				"phantom_assassin_phantom_strike": "5, true",
				"sven_storm_bolt": "1, true",
				"sven_gods_strength": "2, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"ogre_magi_bloodlust": "2, true",
				"item_aeon_disk": "2, true",
				"item_ghost": "4, true",
				"item_mjollnir": "2, true",
				"necrolyte_ghost_shroud": "1, true",
				"item_satanic": "1, true",
				"faceless_void_chronosphere": "0, true",
				"item_glimmer_cape": "1, true",
				"windrunner_windrun": "0, true",
				"windrunner_focusfire": "1, true",
				"earthshaker_enchant_totem": "1, true",
				"crystal_maiden_freezing_field": "0, true",
				"warlock_shadow_word": "1, true",
				"warlock_upheaval": "2, true",
				"legion_commander_press_the_attack": "0, true",
				"invoker_alacrity": "1, true",
				"phantom_assassin_phantom_strike": "0, true",
				"sven_warcry": "0, true",
				"sven_gods_strength": "1, true"
			  }
			},
			"uniqueSettingsinvoker_deafening_blast": {
			  "Disable:": {
				"drow_ranger_wave_of_silence": "0, true",
				"faceless_void_chronosphere": "0, true",
				"windrunner_shackleshot": "0, true",
				"hoodwink_sharpshooter": "0, true",
				"legion_commander_duel": "1, true",
				"sven_storm_bolt": "0, true"
			  },
			  "Modifier disable:": {
				"invoker_alacrity": "2, true",
				"gyrocopter_flak_cannon": "1, true",
				"item_satanic": "1, true",
				"faceless_void_chronosphere": "0, true",
				"windrunner_focusfire": "0, true",
				"slark_pounce": "0, true",
				"legion_commander_press_the_attack": "0, true",
				"legion_commander_duel": "1, true",
				"life_stealer_open_wounds": "0, true",
				"phantom_assassin_phantom_strike": "0, true",
				"sven_gods_strength": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_wind_waker": {
			  "Counter:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"lina_light_strike_array": "2, true",
				"lina_laguna_blade": "3, true",
				"gyrocopter_homing_missile": "4, true",
				"gyrocopter_call_down": "5, true",
				"antimage_mana_void": "6, true",
				"shadow_shaman_shackles": "7, true",
				"dragon_knight_dragon_tail": "0, true",
				"windrunner_shackleshot": "1, true",
				"legion_commander_duel": "0, true",
				"hoodwink_bushwhack": "3, true",
				"hoodwink_sharpshooter": "4, true",
				"techies_suicide": "1, true",
				"mirana_arrow": "2, true",
				"pudge_dismember": "3, true"
			  },
			  "Modifier counter:": {
				"axe_berserkers_call": "0, true",
				"axe_battle_hunger": "1, true",
				"lina_laguna_blade": "0, true",
				"gyrocopter_homing_missile": "1, true",
				"shadow_shaman_voodoo": "2, true",
				"shadow_shaman_shackles": "3, true",
				"dark_troll_warlord_ensnare": "5, true",
				"item_gungir": "4, true",
				"item_havoc_hammer": "6, true",
				"item_spirit_vessel": "7, true",
				"item_abyssal_blade": "8, true",
				"dragon_knight_breathe_fire": "0, true",
				"dragon_knight_dragon_tail": "1, true",
				"windrunner_shackleshot": "2, true",
				"legion_commander_duel": "0, true",
				"item_sheepstick": "6, true",
				"techies_suicide": "1, true",
				"mirana_arrow": "2, true",
				"pudge_dismember": "3, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"lina_light_strike_array": "2, true",
				"lina_laguna_blade": "3, true",
				"antimage_blink": "4, true",
				"antimage_mana_void": "5, true",
				"shadow_shaman_voodoo": "6, true",
				"shadow_shaman_shackles": "7, true",
				"shadow_shaman_mass_serpent_ward": "8, true",
				"dark_troll_warlord_ensnare": "4, true",
				"item_abyssal_blade": "10, true",
				"dragon_knight_dragon_tail": "0, true",
				"weaver_time_lapse": "1, true",
				"windrunner_shackleshot": "2, true",
				"legion_commander_duel": "0, true",
				"hoodwink_sharpshooter": "4, true",
				"item_sheepstick": "6, true",
				"techies_suicide": "1, true",
				"pudge_meat_hook": "2, true",
				"pudge_dismember": "3, true"
			  },
			  "Modifier disable:": {
				"axe_berserkers_call": "0, true",
				"spirit_breaker_bulldoze": "0, true",
				"gyrocopter_rocket_barrage": "1, true",
				"shadow_shaman_shackles": "2, true",
				"item_blade_mail": "3, true",
				"item_glimmer_cape": "4, true",
				"windrunner_windrun": "0, true",
				"legion_commander_press_the_attack": "0, true",
				"legion_commander_duel": "1, true",
				"pudge_dismember": "2, true",
				"item_mjollnir": "4, true",
				"item_ghost": "5, true"
			  }
			},
			"uniqueSettingsrubick_telekinesis": {
			  "Disable:": {
				"warlock_rain_of_chaos": "0, true",
				"naga_siren_ensnare": "1, true",
				"naga_siren_song_of_the_siren": "2, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"pudge_meat_hook": "5, true",
				"pudge_dismember": "3, true",
				"dark_troll_warlord_ensnare": "6, true",
				"item_orchid": "4, true",
				"item_bloodthorn": "6, true",
				"crystal_maiden_frostbite": "0, true",
				"faceless_void_time_walk": "2, true",
				"faceless_void_chronosphere": "2, true",
				"zuus_thundergods_wrath": "3, true",
				"skywrath_mage_ancient_seal": "2, true",
				"obsidian_destroyer_sanity_eclipse": "1, true",
				"spectre_haunt": "0, true",
				"luna_eclipse": "2, true",
				"medusa_stone_gaze": "0, true",
				"morphling_adaptive_strike_str": "2, true",
				"necrolyte_reapers_scythe": "2, true",
				"witch_doctor_death_ward": "5, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"legion_commander_duel": "4, true",
				"skeleton_king_hellfire_blast": "1, true",
				"vengefulspirit_magic_missile": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"hoodwink_sharpshooter": "0, true",
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"death_prophet_silence": "0, true",
				"death_prophet_exorcism": "1, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"phantom_assassin_phantom_strike": "7, true",
				"item_abyssal_blade": "7, true",
				"shadow_shaman_mass_serpent_ward": "2, true",
				"shadow_shaman_voodoo": "3, true",
				"shadow_shaman_shackles": "4, true",
				"silencer_global_silence": "5, true",
				"item_sheepstick": "6, true",
				"tinker_warp_grenade": "0, true",
				"antimage_blink": "0, true",
				"antimage_mana_void": "1, true",
				"weaver_time_lapse": "2, true",
				"primal_beast_pulverize": "1, true",
				"grimstroke_soul_chain": "2, true",
				"earthshaker_fissure": "3, true",
				"earthshaker_echo_slam": "4, true",
				"juggernaut_omni_slash": "3, true",
				"juggernaut_swift_slash": "4, true",
				"storm_spirit_electric_vortex": "1, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"terrorblade_sunder": "5, true",
				"doom_bringer_doom": "6, true",
				"phoenix_icarus_dive": "2, true",
				"pangolier_gyroshell": "3, true",
				"enigma_malefice": "4, true",
				"enigma_black_hole": "5, true",
				"undying_tombstone": "3, true",
				"techies_suicide": "1, true",
				"jakiro_ice_path": "0, true",
				"muerta_parting_shot": "0, true",
				"nevermore_requiem": "3, true",
				"kunkka_ghostship": "3, true"
			  },
			  "Modifier disable:": {
				"warlock_upheaval": "0, true",
				"pudge_dismember": "0, true",
				"crystal_maiden_freezing_field": "0, true",
				"faceless_void_chronosphere": "1, true",
				"ursa_enrage": "0, true",
				"snapfire_mortimer_kisses": "0, true",
				"shadow_shaman_shackles": "0, true",
				"primal_beast_pulverize": "0, true",
				"terrorblade_metamorphosis": "0, true",
				"enigma_black_hole": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsrubick_fade_bolt": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingswarlock_shadow_word": {
			  "Counter:": {
				"naga_siren_ensnare": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"pudge_dismember": "2, true",
				"dark_troll_warlord_ensnare": "1, true",
				"riki_smoke_screen": "0, true",
				"jakiro_ice_path": "3, true",
				"tinker_warp_grenade": "0, true",
				"lina_light_strike_array": "3, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_quelling_blade": {
			  "Counter:": {
				"furion_sprout": "0, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmarci_grapple": {
			  "Counter:": {
				"spirit_breaker_charge_of_darkness": "0, true",
				"pudge_dismember": "1, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingswarlock_rain_of_chaos": {
			  "Disable:": {},
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingspudge_dismember": {
			  "Disable:": {
				"warlock_rain_of_chaos": "0, true",
				"naga_siren_ensnare": "1, true",
				"naga_siren_song_of_the_siren": "2, true",
				"spirit_breaker_charge_of_darkness": "3, true",
				"spirit_breaker_nether_strike": "4, true",
				"pudge_meat_hook": "9, true",
				"pudge_dismember": "1, true",
				"dark_troll_warlord_ensnare": "2, true",
				"faceless_void_time_walk": "2, true",
				"slardar_slithereen_crush": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"monkey_king_boundless_strike": "2, true",
				"dark_willow_terrorize": "0, true",
				"spectre_haunt": "1, true",
				"mars_spear": "2, true",
				"mars_arena_of_blood": "3, true",
				"tinker_warp_grenade": "4, true",
				"zuus_thundergods_wrath": "0, true",
				"terrorblade_sunder": "1, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"witch_doctor_death_ward": "3, true",
				"techies_suicide": "4, true",
				"dragon_knight_dragon_tail": "5, true",
				"leshrac_split_earth": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"drow_ranger_multishot": "2, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"axe_berserkers_call": "5, true",
				"axe_culling_blade": "6, true",
				"grimstroke_soul_chain": "7, true",
				"chaos_knight_chaos_bolt": "2, true",
				"chaos_knight_reality_rift": "3, true",
				"chaos_knight_phantasm": "4, true",
				"obsidian_destroyer_sanity_eclipse": "6, true",
				"shadow_shaman_mass_serpent_ward": "7, true",
				"shadow_shaman_shackles": "8, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true"
			  },
			  "Modifier disable:": {
				"warlock_upheaval": "0, true",
				"pudge_dismember": "0, true",
				"crystal_maiden_freezing_field": "0, true",
				"terrorblade_metamorphosis": "0, true",
				"shadow_shaman_shackles": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnaga_siren_song_of_the_siren": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnaga_siren_ensnare": {
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "0, true"
			  },
			  "Modifier disable:": {
				"item_black_king_bar": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_bfury": {
			  "Counter:": {
				"furion_sprout": "0, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsslardar_slithereen_crush": {
			  "Disable:": {
				"skeleton_king_hellfire_blast": "0, true",
				"phantom_assassin_phantom_strike": "1, true",
				"techies_suicide": "2, true",
				"dark_troll_warlord_ensnare": "6, true",
				"winter_wyvern_winters_curse": "0, true",
				"spectre_haunt": "1, true",
				"jakiro_ice_path": "2, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"slardar_slithereen_crush": "0, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"witch_doctor_death_ward": "2, true",
				"dragon_knight_dragon_tail": "3, true",
				"magnataur_skewer": "4, true",
				"magnataur_reverse_polarity": "5, true",
				"tinker_warp_grenade": "7, true"
			  },
			  "Modifier disable:": {
				"pugna_life_drain": "0, true",
				"pudge_dismember": "0, true",
				"magnataur_skewer": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdazzle_poison_touch": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdazzle_shallow_grave": {
			  "Counter:": {
				"skeleton_king_hellfire_blast": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"pugna_nether_blast": "2, true",
				"techies_suicide": "3, true",
				"mud_golem_hurl_boulder": "4, true",
				"item_ethereal_blade": "5, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdazzle_shadow_wave": {
			  "Counter:": {
				"skeleton_king_hellfire_blast": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"pugna_nether_blast": "2, true",
				"techies_suicide": "3, true",
				"mud_golem_hurl_boulder": "4, true",
				"item_ethereal_blade": "5, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_cheese": {
			  "Counter:": {
				"skeleton_king_hellfire_blast": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"pugna_nether_blast": "2, true",
				"techies_suicide": "3, true",
				"mud_golem_hurl_boulder": "4, true",
				"item_ethereal_blade": "5, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstiny_avalanche": {
			  "Disable:": {
				"skeleton_king_hellfire_blast": "5, true",
				"phantom_assassin_phantom_strike": "1, true",
				"techies_suicide": "2, true",
				"dark_troll_warlord_ensnare": "5, true",
				"item_sheepstick": "7, true",
				"pudge_meat_hook": "1, true",
				"pudge_dismember": "2, true",
				"lion_finger_of_death": "4, true",
				"lion_voodoo": "3, true",
				"lion_impale": "2, true",
				"riki_smoke_screen": "5, true",
				"winter_wyvern_winters_curse": "0, true",
				"spectre_haunt": "3, true",
				"jakiro_ice_path": "4, true",
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"shadow_shaman_voodoo": "3, true",
				"shadow_shaman_shackles": "4, true",
				"shadow_shaman_mass_serpent_ward": "2, true",
				"weaver_time_lapse": "8, true",
				"monkey_king_boundless_strike": "0, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"witch_doctor_death_ward": "2, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"dragon_knight_dragon_tail": "5, true",
				"item_orchid": "6, true",
				"item_abyssal_blade": "6, true",
				"item_bloodthorn": "10, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"death_prophet_silence": "0, true",
				"death_prophet_exorcism": "1, true",
				"silencer_global_silence": "5, true",
				"tidehunter_ravage": "2, true",
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true",
				"queenofpain_blink": "2, true",
				"queenofpain_sonic_wave": "3, true",
				"abyssal_underlord_pit_of_malice": "4, true"
			  },
			  "Modifier disable:": {
				"pugna_life_drain": "0, true",
				"pudge_dismember": "0, true",
				"shadow_shaman_shackles": "0, true",
				"ursa_enrage": "0, true",
				"snapfire_mortimer_kisses": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstiny_toss": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "1, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsterrorblade_reflection": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsterrorblade_sunder": {
			  "Counter:": {
				"crystal_maiden_crystal_nova": "0, true",
				"zuus_arc_lightning": "1, true",
				"zuus_lightning_bolt": "2, true",
				"zuus_thundergods_wrath": "3, true",
				"skywrath_mage_arcane_bolt": "4, true",
				"skywrath_mage_concussive_shot": "5, true",
				"mud_golem_hurl_boulder": "5, true",
				"tinker_laser": "0, true",
				"storm_spirit_static_remnant": "1, true",
				"queenofpain_shadow_strike": "2, true",
				"queenofpain_scream_of_pain": "3, true",
				"queenofpain_sonic_wave": "4, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingscrystal_maiden_crystal_nova": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "1, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsogre_magi_unrefined_fireblast": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "1, true",
				"spirit_breaker_nether_strike": "0, true",
				"naga_siren_ensnare": "2, true",
				"naga_siren_song_of_the_siren": "3, true",
				"dark_troll_warlord_ensnare": "6, true",
				"chen_hand_of_god": "6, true",
				"juggernaut_omni_slash": "4, true",
				"juggernaut_swift_slash": "5, true",
				"legion_commander_duel": "0, true",
				"techies_suicide": "1, true",
				"queenofpain_blink": "2, true",
				"queenofpain_sonic_wave": "3, true",
				"chaos_knight_reality_rift": "5, true",
				"chaos_knight_phantasm": "6, true",
				"chaos_knight_chaos_bolt": "7, true",
				"axe_berserkers_call": "8, true",
				"ogre_magi_fireblast": "1, true",
				"zuus_thundergods_wrath": "10, true",
				"treant_overgrowth": "0, true",
				"medusa_stone_gaze": "1, true",
				"lina_light_strike_array": "5, true",
				"lina_laguna_blade": "9, true",
				"hoodwink_sharpshooter": "4, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"dazzle_shallow_grave": "7, true",
				"pudge_meat_hook": "0, true",
				"pudge_dismember": "1, true",
				"skeleton_king_hellfire_blast": "6, true",
				"necrolyte_reapers_scythe": "7, true",
				"shadow_shaman_shackles": "2, true",
				"shadow_shaman_mass_serpent_ward": "3, true",
				"alchemist_unstable_concoction_throw": "8, true",
				"muerta_parting_shot": "0, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"kunkka_ghostship": "3, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"witch_doctor_death_ward": "5, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"shadow_shaman_shackles": "1, true",
				"ursa_enrage": "0, true"
			  }
			},
			"uniqueSettingsogre_magi_ignite": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsogre_magi_fireblast": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "1, true",
				"spirit_breaker_nether_strike": "0, true",
				"naga_siren_ensnare": "2, true",
				"naga_siren_song_of_the_siren": "3, true",
				"dark_troll_warlord_ensnare": "6, true",
				"chen_hand_of_god": "6, true",
				"juggernaut_omni_slash": "4, true",
				"juggernaut_swift_slash": "5, true",
				"legion_commander_duel": "4, true",
				"techies_suicide": "1, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"chaos_knight_reality_rift": "5, true",
				"chaos_knight_phantasm": "6, true",
				"chaos_knight_chaos_bolt": "7, true",
				"axe_berserkers_call": "8, true",
				"ogre_magi_fireblast": "1, true",
				"zuus_thundergods_wrath": "0, true",
				"death_prophet_silence": "0, true",
				"death_prophet_exorcism": "1, true",
				"vengefulspirit_magic_missile": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"phantom_assassin_phantom_strike": "5, true",
				"treant_overgrowth": "0, true",
				"medusa_stone_gaze": "1, true",
				"lina_light_strike_array": "5, true",
				"lina_laguna_blade": "9, true",
				"hoodwink_sharpshooter": "4, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"dazzle_shallow_grave": "7, true",
				"pudge_meat_hook": "0, true",
				"pudge_dismember": "1, true",
				"skeleton_king_hellfire_blast": "6, true",
				"necrolyte_reapers_scythe": "7, true",
				"weaver_time_lapse": "2, true",
				"undying_tombstone": "3, true",
				"silencer_global_silence": "1, true",
				"monkey_king_boundless_strike": "2, true",
				"muerta_parting_shot": "0, true",
				"nevermore_requiem": "3, true",
				"shadow_shaman_shackles": "2, true",
				"shadow_shaman_mass_serpent_ward": "3, true",
				"alchemist_unstable_concoction_throw": "8, true",
				"kunkka_ghostship": "3, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"witch_doctor_death_ward": "5, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"snapfire_mortimer_kisses": "0, true",
				"shadow_shaman_shackles": "1, true",
				"ursa_enrage": "0, true"
			  }
			},
			"uniqueSettingsancient_apparition_chilling_touch": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_hand_of_midas": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_travel_boots": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmonkey_king_boundless_strike": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "1, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"spectre_haunt": "2, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"witch_doctor_death_ward": "4, true",
				"faceless_void_time_walk": "5, true",
				"faceless_void_chronosphere": "6, true",
				"dark_troll_warlord_ensnare": "6, true",
				"jakiro_ice_path": "0, true",
				"riki_smoke_screen": "1, true",
				"phantom_assassin_phantom_strike": "5, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"zuus_thundergods_wrath": "0, true",
				"silencer_global_silence": "1, true",
				"monkey_king_boundless_strike": "2, true",
				"ogre_magi_fireblast": "3, true",
				"ogre_magi_unrefined_fireblast": "4, true"
			  },
			  "Modifier disable:": {
				"faceless_void_chronosphere": "0, true",
				"pudge_dismember": "0, true"
			  }
			},
			"uniqueSettingsmonkey_king_tree_dance": {
			  "Blink:": {
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"faceless_void_chronosphere": "3, true",
				"dark_troll_warlord_ensnare": "5, true",
				"jakiro_ice_path": "0, true",
				"riki_smoke_screen": "1, true",
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"silencer_global_silence": "0, true",
				"monkey_king_boundless_strike": "1, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"item_gungir": "4, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmonkey_king_mischief": {
			  "Counter:": {
				"lion_impale": "0, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"dark_troll_warlord_ensnare": "2, true",
				"jakiro_dual_breath": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"pudge_meat_hook": "3, true"
			  },
			  "Modifier counter:": {
				"lion_finger_of_death": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingssniper_shrapnel": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "1, true",
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingssniper_concussive_grenade": {
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "0, true",
				"skeleton_king_hellfire_blast": "2, true",
				"legion_commander_duel": "0, true",
				"sven_storm_bolt": "0, true",
				"chaos_knight_chaos_bolt": "1, true"
			  },
			  "Modifier disable:": {
				"slark_pounce": "0, true",
				"ursa_fury_swipes": "0, true",
				"ursa_overpower": "1, true",
				"ursa_enrage": "2, true",
				"item_satanic": "1, true",
				"phantom_assassin_phantom_strike": "0, true",
				"night_stalker_crippling_fear": "0, true",
				"night_stalker_darkness": "1, true",
				"huskar_life_break": "0, true",
				"legion_commander_press_the_attack": "0, true",
				"legion_commander_duel": "1, true",
				"invoker_alacrity": "3, true",
				"sven_gods_strength": "0, true",
				"razor_eye_of_the_storm": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_hurricane_pike": {
			  "Counter:": {
				"lina_light_strike_array": "2, true",
				"pudge_dismember": "0, true",
				"vengefulspirit_magic_missile": "0, true",
				"vengefulspirit_nether_swap": "1, true",
				"faceless_void_chronosphere": "0, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"skeleton_king_hellfire_blast": "3, true",
				"batrider_flaming_lasso": "1, true",
				"elder_titan_echo_stomp": "0, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"sven_storm_bolt": "0, true",
				"shadow_shaman_shackles": "1, true",
				"centaur_hoof_stomp": "2, true",
				"chaos_knight_chaos_bolt": "4, true",
				"axe_culling_blade": "0, true",
				"axe_berserkers_call": "1, true"
			  },
			  "Modifier counter:": {
				"riki_smoke_screen": "0, true",
				"phantom_assassin_phantom_strike": "0, true",
				"gyrocopter_rocket_barrage": "0, true",
				"night_stalker_crippling_fear": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Blink:": {
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"lina_light_strike_array": "2, true",
				"lina_laguna_blade": "3, true",
				"dark_troll_warlord_ensnare": "5, true",
				"necrolyte_reapers_scythe": "5, true",
				"riki_smoke_screen": "0, true",
				"pudge_meat_hook": "2, true",
				"pudge_dismember": "3, true",
				"jakiro_ice_path": "4, true",
				"death_prophet_silence": "0, true",
				"vengefulspirit_magic_missile": "1, true",
				"sandking_burrowstrike": "4, true",
				"faceless_void_chronosphere": "0, true",
				"item_ethereal_blade": "5, true",
				"tidehunter_ravage": "2, true",
				"skeleton_king_hellfire_blast": "5, true",
				"item_gungir": "4, true",
				"void_spirit_dissimilate": "0, true",
				"void_spirit_resonant_pulse": "1, true",
				"batrider_flaming_lasso": "3, true",
				"item_rod_of_atos": "4, true",
				"lion_impale": "1, true",
				"lion_finger_of_death": "2, true",
				"elder_titan_echo_stomp": "2, true",
				"elder_titan_earth_splitter": "3, true",
				"alchemist_unstable_concoction_throw": "4, true",
				"gyrocopter_call_down": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"silencer_global_silence": "2, true",
				"warlock_rain_of_chaos": "2, true",
				"night_stalker_crippling_fear": "1, true",
				"huskar_life_break": "0, true",
				"legion_commander_duel": "0, true",
				"crystal_maiden_frostbite": "2, true",
				"invoker_tornado": "3, true",
				"sven_storm_bolt": "0, true",
				"shadow_shaman_shackles": "1, true",
				"centaur_hoof_stomp": "2, true",
				"chaos_knight_chaos_bolt": "8, true",
				"ancient_apparition_ice_blast": "0, true",
				"windrunner_shackleshot": "4, true",
				"axe_culling_blade": "0, true",
				"axe_berserkers_call": "1, true",
				"techies_suicide": "1, true"
			  },
			  "Modifier blink:": {
				"rubick_telekinesis": "0, true"
			  }
			},
			"uniqueSettingsabaddon_death_coil": {
			  "Counter:": {
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"snapfire_scatterblast": "0, true",
				"snapfire_firesnap_cookie": "1, true",
				"abaddon_death_coil": "2, true",
				"pudge_meat_hook": "3, true",
				"invoker_tornado": "4, true",
				"invoker_emp": "5, true",
				"invoker_sun_strike": "6, true",
				"invoker_deafening_blast": "7, true",
				"mud_golem_hurl_boulder": "8, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsabaddon_aphotic_shield": {
			  "Counter:": {
				"ancient_apparition_ice_blast": "0, true",
				"doom_bringer_doom": "1, true",
				"lion_impale": "2, true",
				"lion_finger_of_death": "3, true",
				"death_prophet_carrion_swarm": "0, true",
				"death_prophet_silence": "1, true",
				"tiny_toss_tree": "2, true",
				"shadow_shaman_ether_shock": "3, true",
				"snapfire_firesnap_cookie": "0, true",
				"pudge_meat_hook": "1, true",
				"invoker_tornado": "2, true",
				"invoker_emp": "3, true",
				"invoker_chaos_meteor": "4, true",
				"invoker_sun_strike": "5, true",
				"invoker_deafening_blast": "6, true"
			  },
			  "Modifier counter:": {
				"terrorblade_reflection": "0, true",
				"terrorblade_metamorphosis": "1, true",
				"naga_siren_ensnare": "2, true",
				"ancient_apparition_cold_feet": "3, true",
				"ancient_apparition_ice_blast": "4, true",
				"doom_bringer_doom": "5, true",
				"lion_impale": "6, true",
				"lion_voodoo": "7, true",
				"dark_troll_warlord_ensnare": "7, true",
				"item_veil_of_discord": "11, true",
				"death_prophet_silence": "0, true",
				"death_prophet_exorcism": "1, true",
				"abaddon_frostmourne": "2, true",
				"shadow_shaman_voodoo": "3, true",
				"shadow_shaman_shackles": "4, true",
				"silencer_curse_of_the_silent": "5, true",
				"silencer_last_word": "6, true",
				"silencer_global_silence": "7, true",
				"item_rod_of_atos": "9, true",
				"item_sheepstick": "10, true",
				"snapfire_firesnap_cookie": "0, true",
				"snapfire_mortimer_kisses": "1, true",
				"pudge_rot": "3, true",
				"pudge_dismember": "4, true",
				"invoker_cold_snap": "5, true",
				"invoker_chaos_meteor": "6, true",
				"item_spirit_vessel": "8, true",
				"item_gungir": "9, true",
				"item_solar_crest": "10, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsabaddon_borrowed_time": {
			  "Counter:": {
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsearth_spirit_petrify": {
			  "Counter:": {
				"monkey_king_boundless_strike": "0, true",
				"lion_impale": "1, true",
				"lion_finger_of_death": "2, true",
				"pudge_meat_hook": "3, true"
			  },
			  "Modifier counter:": {
				"monkey_king_boundless_strike": "0, true",
				"crystal_maiden_freezing_field": "1, true",
				"lion_impale": "2, true",
				"lion_voodoo": "3, true",
				"pudge_dismember": "4, true",
				"item_abyssal_blade": "3, true",
				"item_sheepstick": "2, true",
				"shadow_shaman_voodoo": "0, true",
				"shadow_shaman_shackles": "1, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {},
			  "Modifier disable:": {
				"crystal_maiden_freezing_field": "0, true",
				"pudge_dismember": "1, true",
				"item_blade_mail": "2, true",
				"item_satanic": "3, true",
				"abaddon_borrowed_time": "0, true",
				"shadow_shaman_shackles": "1, true"
			  }
			},
			"uniqueSettingsitem_heavens_halberd": {
			  "Disable:": {
				"faceless_void_chronosphere": "0, true"
			  },
			  "Modifier disable:": {
				"monkey_king_jingu_mastery": "0, true",
				"invoker_alacrity": "1, true",
				"item_satanic": "1, true",
				"medusa_stone_gaze": "0, true",
				"faceless_void_chronosphere": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsjuggernaut_blade_fury": {
			  "Counter:": {
				"lina_light_strike_array": "0, true",
				"warlock_rain_of_chaos": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"legion_commander_duel": "3, true",
				"item_orchid": "4, true",
				"item_bloodthorn": "5, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"spirit_breaker_charge_of_darkness": "1, true",
				"spirit_breaker_nether_strike": "2, true",
				"invoker_tornado": "2, true",
				"invoker_emp": "3, true",
				"doom_bringer_doom": "5, true",
				"axe_berserkers_call": "3, true",
				"mars_spear": "1, true",
				"nevermore_requiem": "2, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"alchemist_unstable_concoction_throw": "4, true",
				"mirana_arrow": "1, true",
				"sandking_burrowstrike": "4, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true",
				"treant_overgrowth": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsjuggernaut_swift_slash": {
			  "Counter:": {
				"lina_light_strike_array": "0, true",
				"warlock_rain_of_chaos": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"legion_commander_duel": "3, true",
				"dark_troll_warlord_ensnare": "6, true",
				"item_gungir": "5, true",
				"obsidian_destroyer_sanity_eclipse": "0, true",
				"spirit_breaker_charge_of_darkness": "2, true",
				"spirit_breaker_nether_strike": "3, true",
				"invoker_tornado": "2, true",
				"invoker_emp": "3, true",
				"invoker_sun_strike": "4, true",
				"doom_bringer_doom": "7, true",
				"axe_berserkers_call": "3, true",
				"mars_spear": "1, true",
				"treant_overgrowth": "2, true",
				"nevermore_requiem": "3, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"alchemist_unstable_concoction_throw": "4, true",
				"mirana_arrow": "1, true",
				"sandking_burrowstrike": "5, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_swift_blink": {
			  "Blink:": {
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"warlock_rain_of_chaos": "2, true",
				"storm_spirit_electric_vortex": "3, true",
				"legion_commander_duel": "0, true",
				"dark_troll_warlord_ensnare": "7, true",
				"item_gungir": "4, true",
				"item_bloodthorn": "5, true",
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"lion_impale": "2, true",
				"lion_voodoo": "3, true",
				"lion_finger_of_death": "4, true",
				"disruptor_static_storm": "5, true",
				"shadow_shaman_voodoo": "6, true",
				"shadow_shaman_shackles": "7, true",
				"item_ethereal_blade": "2, true",
				"spirit_breaker_nether_strike": "2, true",
				"nyx_assassin_impale": "1, true",
				"sandking_burrowstrike": "2, true",
				"faceless_void_chronosphere": "0, true",
				"slardar_slithereen_crush": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"muerta_parting_shot": "2, true",
				"luna_eclipse": "1, true",
				"techies_suicide": "4, true",
				"tinker_warp_grenade": "1, true",
				"death_prophet_silence": "2, true",
				"sniper_assassinate": "6, true",
				"kunkka_ghostship": "1, true",
				"pudge_meat_hook": "2, true",
				"pudge_dismember": "3, true",
				"vengefulspirit_nether_swap": "4, true",
				"vengefulspirit_magic_missile": "5, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_tango_single": {
			  "Counter:": {
				"furion_sprout": "0, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslich_frost_nova": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslich_frost_shield": {
			  "Counter:": {
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true"
			  },
			  "Modifier counter:": {
				"drow_ranger_wave_of_silence": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslich_sinister_gaze": {
			  "Disable:": {
				"pudge_meat_hook": "0, true",
				"pudge_dismember": "1, true",
				"undying_tombstone": "2, true",
				"warlock_rain_of_chaos": "3, true",
				"magnataur_skewer": "4, true",
				"magnataur_reverse_polarity": "5, true",
				"drow_ranger_wave_of_silence": "6, true",
				"drow_ranger_multishot": "7, true",
				"dark_troll_warlord_ensnare": "8, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"warlock_upheaval": "1, true",
				"magnataur_skewer": "2, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsslark_dark_pact": {
			  "Counter:": {
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"jakiro_ice_path": "2, true",
				"dark_troll_warlord_ensnare": "1, true",
				"rubick_telekinesis": "5, true",
				"mirana_arrow": "1, true",
				"alchemist_unstable_concoction_throw": "2, true",
				"skeleton_king_hellfire_blast": "1, true",
				"vengefulspirit_magic_missile": "9, true",
				"item_sheepstick": "7, true",
				"item_abyssal_blade": "5, true",
				"dragon_knight_dragon_tail": "0, true",
				"kunkka_torrent": "1, true",
				"kunkka_ghostship": "2, true",
				"earthshaker_fissure": "0, true",
				"earthshaker_echo_slam": "8, true",
				"item_orchid": "5, true",
				"item_bloodthorn": "5, true",
				"invoker_tornado": "7, true",
				"snapfire_firesnap_cookie": "1, true",
				"item_rod_of_atos": "3, true",
				"centaur_hoof_stomp": "0, true",
				"dark_willow_terrorize": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"luna_eclipse": "3, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"silencer_global_silence": "1, true",
				"night_stalker_crippling_fear": "2, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"lina_light_strike_array": "0, true",
				"tidehunter_ravage": "2, true",
				"item_gungir": "4, true",
				"item_nullifier": "6, true",
				"techies_suicide": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"drow_ranger_wave_of_silence": "2, true",
				"spirit_breaker_charge_of_darkness": "3, true",
				"spirit_breaker_nether_strike": "4, true",
				"venomancer_venomous_gale": "0, true",
				"rattletrap_hookshot": "0, true",
				"morphling_adaptive_strike_str": "2, true",
				"lone_druid_savage_roar": "3, true",
				"mars_spear": "0, true"
			  },
			  "Modifier counter:": {
				"pudge_dismember": "3, true",
				"rubick_telekinesis": "2, true",
				"mirana_arrow": "1, true",
				"alchemist_unstable_concoction_throw": "2, true",
				"skeleton_king_hellfire_blast": "0, true",
				"medusa_stone_gaze": "4, true",
				"vengefulspirit_magic_missile": "4, true",
				"item_sheepstick": "3, true",
				"item_abyssal_blade": "2, true",
				"dragon_knight_dragon_tail": "0, true",
				"kunkka_torrent": "1, true",
				"kunkka_ghostship": "2, true",
				"earthshaker_aftershock": "0, true",
				"earthshaker_fissure": "1, true",
				"earthshaker_echo_slam": "3, true",
				"item_orchid": "2, true",
				"item_bloodthorn": "3, true",
				"snapfire_firesnap_cookie": "0, true",
				"centaur_hoof_stomp": "0, true",
				"dark_willow_cursed_crown": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"silencer_curse_of_the_silent": "0, true",
				"silencer_last_word": "1, true",
				"silencer_global_silence": "2, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_ignite": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"tidehunter_ravage": "1, true",
				"queenofpain_shadow_strike": "0, true",
				"venomancer_noxious_plague": "1, true",
				"rattletrap_hookshot": "0, true",
				"morphling_adaptive_strike_str": "1, true",
				"mars_spear": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsslark_pounce": {
			  "Blink:": {
				"winter_wyvern_winters_curse": "0, true",
				"pudge_meat_hook": "1, true",
				"pudge_dismember": "2, true",
				"jakiro_ice_path": "4, true",
				"dark_troll_warlord_ensnare": "3, true",
				"alchemist_unstable_concoction_throw": "0, true",
				"skeleton_king_hellfire_blast": "1, true",
				"vengefulspirit_magic_missile": "7, true",
				"dragon_knight_dragon_tail": "0, true",
				"kunkka_ghostship": "1, true",
				"invoker_tornado": "6, true",
				"item_rod_of_atos": "5, true",
				"centaur_hoof_stomp": "0, true",
				"dark_willow_terrorize": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"luna_eclipse": "3, true",
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"silencer_global_silence": "1, true",
				"night_stalker_crippling_fear": "0, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"item_ethereal_blade": "8, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"tidehunter_ravage": "3, true",
				"item_gungir": "6, true",
				"item_nullifier": "6, true",
				"techies_suicide": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"drow_ranger_wave_of_silence": "1, true",
				"spirit_breaker_nether_strike": "3, true",
				"abyssal_underlord_pit_of_malice": "1, true",
				"queenofpain_sonic_wave": "0, true",
				"rattletrap_hookshot": "0, true",
				"morphling_adaptive_strike_str": "2, true",
				"mars_spear": "0, true",
				"mars_arena_of_blood": "1, true",
				"hoodwink_sharpshooter": "2, true"
			  },
			  "Modifier blink:": {
				"rubick_telekinesis": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsslark_depth_shroud": {
			  "Counter:": {
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"jakiro_ice_path": "1, true",
				"mirana_arrow": "1, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"skeleton_king_hellfire_blast": "1, true",
				"vengefulspirit_magic_missile": "6, true",
				"item_sheepstick": "6, true",
				"item_abyssal_blade": "5, true",
				"dragon_knight_dragon_tail": "0, true",
				"kunkka_torrent": "1, true",
				"kunkka_ghostship": "2, true",
				"earthshaker_fissure": "0, true",
				"earthshaker_echo_slam": "5, true",
				"item_orchid": "3, true",
				"item_bloodthorn": "4, true",
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true",
				"snapfire_firesnap_cookie": "0, true",
				"centaur_hoof_stomp": "0, true",
				"dark_willow_terrorize": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"luna_eclipse": "3, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"witch_doctor_death_ward": "5, true",
				"silencer_global_silence": "2, true",
				"night_stalker_crippling_fear": "2, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"lina_light_strike_array": "0, true",
				"tidehunter_ravage": "2, true",
				"techies_suicide": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"drow_ranger_wave_of_silence": "2, true",
				"spirit_breaker_charge_of_darkness": "3, true",
				"spirit_breaker_nether_strike": "4, true",
				"rattletrap_hookshot": "0, true",
				"mars_spear": "0, true"
			  },
			  "Modifier counter:": {
				"rubick_telekinesis": "0, true",
				"dark_willow_cursed_crown": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsslark_shadow_dance": {
			  "Counter:": {
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"jakiro_ice_path": "1, true",
				"mirana_arrow": "1, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"skeleton_king_hellfire_blast": "1, true",
				"vengefulspirit_magic_missile": "6, true",
				"item_sheepstick": "6, true",
				"item_abyssal_blade": "5, true",
				"dragon_knight_dragon_tail": "0, true",
				"kunkka_torrent": "1, true",
				"kunkka_ghostship": "2, true",
				"earthshaker_fissure": "0, true",
				"earthshaker_echo_slam": "5, true",
				"item_orchid": "3, true",
				"item_bloodthorn": "4, true",
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true",
				"snapfire_firesnap_cookie": "0, true",
				"centaur_hoof_stomp": "0, true",
				"dark_willow_terrorize": "1, true",
				"storm_spirit_electric_vortex": "2, true",
				"luna_eclipse": "3, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"witch_doctor_death_ward": "5, true",
				"silencer_global_silence": "2, true",
				"night_stalker_crippling_fear": "2, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"lina_light_strike_array": "0, true",
				"tidehunter_ravage": "2, true",
				"techies_suicide": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"drow_ranger_wave_of_silence": "2, true",
				"spirit_breaker_charge_of_darkness": "3, true",
				"spirit_breaker_nether_strike": "4, true",
				"rattletrap_hookshot": "0, true",
				"mars_spear": "0, true"
			  },
			  "Modifier counter:": {
				"rubick_telekinesis": "0, true",
				"dark_willow_cursed_crown": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsoracle_fortunes_end": {
			  "Counter:": {},
			  "Modifier counter:": {
				"dark_troll_warlord_ensnare": "0, true",
				"enchantress_enchant": "1, true",
				"item_veil_of_discord": "2, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {},
			  "Modifier disable:": {}
			},
			"uniqueSettingsoracle_fates_edict": {
			  "Counter:": {
				"pudge_meat_hook": "0, true",
				"nevermore_requiem": "1, true",
				"lion_finger_of_death": "2, true"
			  },
			  "Modifier counter:": {
				"pudge_dismember": "0, true",
				"nevermore_requiem": "1, true",
				"lion_impale": "2, true",
				"lion_finger_of_death": "3, true",
				"item_veil_of_discord": "4, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {},
			  "Modifier disable:": {
				"slark_pounce": "0, true"
			  }
			},
			"uniqueSettingsoracle_purifying_flames": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsoracle_false_promise": {
			  "Counter:": {
				"pudge_meat_hook": "0, true",
				"nevermore_shadowraze1": "1, true",
				"nevermore_shadowraze2": "2, true",
				"nevermore_shadowraze3": "3, true",
				"nevermore_requiem": "4, true",
				"lion_impale": "5, true",
				"lion_finger_of_death": "6, true",
				"mud_golem_hurl_boulder": "7, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_guardian_greaves": {
			  "Counter:": {
				"pudge_meat_hook": "5, true",
				"nevermore_shadowraze1": "1, true",
				"nevermore_shadowraze2": "2, true",
				"nevermore_shadowraze3": "3, true",
				"nevermore_requiem": "4, true",
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"mud_golem_hurl_boulder": "6, true",
				"zuus_arc_lightning": "0, true",
				"zuus_lightning_bolt": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"sniper_assassinate": "3, true",
				"monkey_king_boundless_strike": "4, true",
				"sven_storm_bolt": "6, true",
				"tinker_laser": "0, true",
				"venomancer_noxious_plague": "1, true",
				"visage_soul_assumption": "2, true",
				"antimage_mana_void": "3, true",
				"beastmaster_wild_axes": "2, true",
				"beastmaster_primal_roar": "3, true",
				"windrunner_shackleshot": "4, true",
				"windrunner_powershot": "5, true",
				"lina_dragon_slave": "7, true",
				"lina_light_strike_array": "8, true",
				"lina_laguna_blade": "9, true"
			  },
			  "Modifier counter:": {
				"venomancer_noxious_plague": "0, true",
				"item_orchid": "0, true",
				"lina_laguna_blade": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsphoenix_supernova": {
			  "Counter:": {
				"witch_doctor_death_ward": "0, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsvengefulspirit_magic_missile": {
			  "Disable:": {
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"legion_commander_duel": "0, true",
				"hoodwink_sharpshooter": "3, true",
				"queenofpain_blink": "4, true",
				"queenofpain_sonic_wave": "5, true",
				"antimage_blink": "6, true",
				"antimage_mana_void": "7, true",
				"dark_troll_warlord_ensnare": "5, true",
				"skeleton_king_hellfire_blast": "1, true",
				"vengefulspirit_magic_missile": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"death_prophet_silence": "0, true",
				"death_prophet_exorcism": "1, true",
				"ogre_magi_fireblast": "4, true",
				"ogre_magi_unrefined_fireblast": "5, true",
				"phantom_assassin_phantom_strike": "6, true",
				"spirit_breaker_charge_of_darkness": "2, true",
				"spirit_breaker_nether_strike": "3, true",
				"abyssal_underlord_pit_of_malice": "4, true",
				"drow_ranger_wave_of_silence": "6, true",
				"drow_ranger_multishot": "7, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsvengefulspirit_wave_of_terror": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsvengefulspirit_nether_swap": {
			  "Disable:": {},
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingskunkka_x_marks_the_spot": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingskunkka_ghostship": {
			  "Disable:": {},
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_armlet": {
			  "Counter:": {
				"earthshaker_fissure": "0, true",
				"earthshaker_enchant_totem": "1, true",
				"earthshaker_echo_slam": "2, true",
				"bloodseeker_rupture": "3, true",
				"phoenix_supernova": "4, true",
				"legion_commander_overwhelming_odds": "0, true",
				"legion_commander_duel": "1, true",
				"vengefulspirit_magic_missile": "2, true",
				"lina_dragon_slave": "3, true",
				"lina_light_strike_array": "4, true",
				"lina_laguna_blade": "5, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"sven_storm_bolt": "2, true",
				"hoodwink_bushwhack": "3, true",
				"hoodwink_sharpshooter": "4, true",
				"snapfire_scatterblast": "5, true",
				"snapfire_firesnap_cookie": "6, true"
			  },
			  "Modifier counter:": {
				"doom_bringer_doom": "0, true",
				"rubick_telekinesis": "0, true",
				"lina_laguna_blade": "1, true",
				"ember_spirit_sleight_of_fist": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "hpToggleitem_armlet": 222,
			  "RoshanModeitem_armlet": false
			},
			"uniqueSettingsnecronomicon_archer_purge": {
			  "Disable:": {},
			  "Modifier disable:": {
				"earthshaker_enchant_totem": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsphantom_lancer_spirit_lance": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "1, true",
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsphantom_lancer_doppelwalk": {
			  "Counter:": {
				"venomancer_venomous_gale": "0, true",
				"venomancer_noxious_plague": "1, true",
				"pudge_meat_hook": "6, true",
				"pudge_dismember": "7, true",
				"skeleton_king_hellfire_blast": "0, true",
				"dark_troll_warlord_ensnare": "8, true",
				"drow_ranger_wave_of_silence": "6, true",
				"drow_ranger_multishot": "7, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"nyx_assassin_impale": "2, true",
				"nyx_assassin_jolt": "3, true",
				"jakiro_dual_breath": "4, true",
				"jakiro_ice_path": "5, true",
				"item_abyssal_blade": "9, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsphantom_lancer_juxtapose": {
			  "Counter:": {
				"pudge_dismember": "1, true",
				"skeleton_king_hellfire_blast": "0, true",
				"dark_troll_warlord_ensnare": "2, true",
				"mud_golem_hurl_boulder": "3, true",
				"item_abyssal_blade": "4, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnecrolyte_ghost_shroud": {
			  "Counter:": {
				"faceless_void_chronosphere": "0, true",
				"legion_commander_duel": "0, true"
			  },
			  "Modifier counter:": {
				"faceless_void_chronosphere": "0, true",
				"legion_commander_press_the_attack": "0, true",
				"legion_commander_duel": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnecrolyte_reapers_scythe": {
			  "Disable:": {
				"witch_doctor_death_ward": "0, true"
			  },
			  "Modifier disable:": {
				"crystal_maiden_freezing_field": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_radiance": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_overwhelming_blink": {
			  "Blink:": {
				"crystal_maiden_frostbite": "0, true",
				"faceless_void_chronosphere": "1, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"lion_finger_of_death": "2, true",
				"item_gungir": "5, true",
				"dark_troll_warlord_ensnare": "7, true",
				"axe_berserkers_call": "4, true",
				"axe_culling_blade": "5, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"naga_siren_ensnare": "2, true",
				"obsidian_destroyer_sanity_eclipse": "3, true",
				"witch_doctor_paralyzing_cask": "6, true",
				"item_bloodthorn": "7, true",
				"item_sheepstick": "8, true",
				"alchemist_unstable_concoction_throw": "3, true",
				"nyx_assassin_impale": "6, true",
				"item_orchid": "8, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingswindrunner_shackleshot": {
			  "Disable:": {
				"crystal_maiden_frostbite": "0, true",
				"faceless_void_time_walk": "1, true",
				"faceless_void_chronosphere": "2, true",
				"lion_impale": "3, true",
				"lion_finger_of_death": "4, true",
				"dark_troll_warlord_ensnare": "3, true",
				"zuus_thundergods_wrath": "0, true",
				"phantom_assassin_phantom_strike": "1, true",
				"treant_overgrowth": "0, true",
				"medusa_stone_gaze": "1, true",
				"lina_light_strike_array": "2, true",
				"lina_laguna_blade": "3, true",
				"hoodwink_sharpshooter": "4, true",
				"spirit_breaker_charge_of_darkness": "6, true",
				"spirit_breaker_nether_strike": "7, true",
				"nyx_assassin_impale": "2, true",
				"spectre_haunt": "4, true",
				"naga_siren_ensnare": "2, true",
				"naga_siren_song_of_the_siren": "3, true",
				"axe_berserkers_call": "4, true",
				"axe_culling_blade": "5, true",
				"sven_storm_bolt": "8, true",
				"doom_bringer_doom": "9, true",
				"windrunner_shackleshot": "10, true",
				"luna_eclipse": "0, true",
				"vengefulspirit_nether_swap": "1, true",
				"vengefulspirit_magic_missile": "2, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true"
			  },
			  "Modifier disable:": {
				"snapfire_mortimer_kisses": "0, true",
				"crystal_maiden_freezing_field": "0, true",
				"faceless_void_chronosphere": "2, true",
				"pudge_dismember": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingswindrunner_windrun": {
			  "Counter:": {
				"faceless_void_chronosphere": "0, true",
				"lion_voodoo": "1, true",
				"item_orchid": "3, true",
				"item_bloodthorn": "4, true",
				"sandking_burrowstrike": "0, true",
				"spirit_breaker_charge_of_darkness": "1, true",
				"spirit_breaker_nether_strike": "2, true",
				"axe_berserkers_call": "0, true",
				"sven_storm_bolt": "3, true",
				"windrunner_shackleshot": "4, true"
			  },
			  "Modifier counter:": {
				"faceless_void_chronosphere": "0, true",
				"medusa_stone_gaze": "0, true",
				"axe_berserkers_call": "0, true",
				"sven_storm_bolt": "1, true",
				"windrunner_shackleshot": "2, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_gungir": {
			  "Disable:": {},
			  "Modifier disable:": {
				"item_black_king_bar": "3, true",
				"broodmother_insatiable_hunger": "0, true",
				"juggernaut_blade_fury": "0, true",
				"dazzle_shallow_grave": "1, true",
				"razor_eye_of_the_storm": "2, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsobsidian_destroyer_astral_imprisonment": {
			  "Counter:": {
				"obsidian_destroyer_sanity_eclipse": "1, true",
				"venomancer_noxious_plague": "1, true",
				"luna_eclipse": "2, true",
				"morphling_adaptive_strike_str": "1, true",
				"witch_doctor_death_ward": "2, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"gyrocopter_homing_missile": "0, true",
				"sandking_burrowstrike": "5, true",
				"faceless_void_chronosphere": "0, true",
				"spirit_breaker_charge_of_darkness": "2, true",
				"spirit_breaker_nether_strike": "3, true",
				"lina_light_strike_array": "0, true",
				"lina_laguna_blade": "1, true",
				"tidehunter_ravage": "2, true",
				"skeleton_king_hellfire_blast": "3, true",
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"elder_titan_echo_stomp": "2, true",
				"alchemist_unstable_concoction_throw": "3, true",
				"queenofpain_shadow_strike": "1, true",
				"queenofpain_sonic_wave": "2, true",
				"dark_willow_terrorize": "0, true",
				"mars_spear": "1, true"
			  },
			  "Modifier counter:": {
				"luna_eclipse": "0, true",
				"morphling_adaptive_strike_str": "0, true",
				"necrolyte_reapers_scythe": "1, true",
				"gyrocopter_homing_missile": "0, true",
				"sandking_burrowstrike": "3, true",
				"rubick_telekinesis": "4, true",
				"lina_laguna_blade": "0, true",
				"tidehunter_ravage": "1, true",
				"juggernaut_omni_slash": "2, true",
				"juggernaut_swift_slash": "3, true",
				"skeleton_king_hellfire_blast": "4, true",
				"lion_impale": "0, true",
				"lion_voodoo": "1, true",
				"elder_titan_echo_stomp": "2, true",
				"alchemist_unstable_concoction_throw": "3, true",
				"dark_willow_terrorize": "0, true",
				"mars_spear": "1, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"luna_eclipse": "0, true",
				"witch_doctor_death_ward": "0, true",
				"drow_ranger_multishot": "0, true",
				"spirit_breaker_charge_of_darkness": "1, true",
				"tidehunter_ravage": "0, true"
			  },
			  "Modifier disable:": {
				"item_blade_mail": "0, true"
			  }
			},
			"uniqueSettingsmedusa_mystic_snake": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsluna_lucent_beam": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "1, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"spirit_breaker_charge_of_darkness": "0, true"
			  },
			  "Modifier disable:": {}
			},
			"uniqueSettingsspectre_spectral_dagger": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "1, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsbristleback_bristleback": {
			  "Counter:": {
				"venomancer_noxious_plague": "0, true",
				"medusa_mystic_snake": "1, true",
				"luna_lucent_beam": "2, true",
				"luna_eclipse": "3, true",
				"dark_troll_warlord_ensnare": "4, true",
				"obsidian_destroyer_sanity_eclipse": "5, true"
			  },
			  "Modifier counter:": {
				"venomancer_noxious_plague": "0, true",
				"venomancer_venomous_gale": "1, true",
				"medusa_stone_gaze": "2, true",
				"luna_eclipse": "3, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslegion_commander_overwhelming_odds": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslegion_commander_press_the_attack": {
			  "Counter:": {
				"luna_eclipse": "0, true",
				"obsidian_destroyer_sanity_eclipse": "1, true",
				"antimage_mana_void": "0, true",
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"item_orchid": "3, true",
				"item_abyssal_blade": "4, true",
				"item_bloodthorn": "5, true",
				"lina_light_strike_array": "0, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"axe_berserkers_call": "3, true",
				"alchemist_unstable_concoction_throw": "4, true",
				"legion_commander_duel": "4, true",
				"techies_suicide": "1, true",
				"mirana_arrow": "4, true",
				"bloodseeker_rupture": "0, true",
				"item_ethereal_blade": "2, true",
				"muerta_parting_shot": "2, true",
				"nevermore_requiem": "3, true",
				"invoker_tornado": "1, true",
				"invoker_emp": "2, true",
				"sandking_burrowstrike": "3, true"
			  },
			  "Modifier counter:": {
				"venomancer_noxious_plague": "3, true",
				"venomancer_venomous_gale": "2, true",
				"medusa_stone_gaze": "1, true",
				"dark_troll_warlord_ensnare": "2, true",
				"pudge_dismember": "2, true",
				"bristleback_viscous_nasal_goo": "1, true",
				"visage_grave_chill": "2, true",
				"item_orchid": "4, true",
				"item_abyssal_blade": "5, true",
				"item_bloodthorn": "6, true",
				"lina_laguna_blade": "0, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_ignite": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"axe_battle_hunger": "5, true",
				"alchemist_unstable_concoction_throw": "6, true",
				"techies_suicide": "0, true",
				"mirana_arrow": "4, true",
				"item_gungir": "3, true",
				"bloodseeker_blood_bath": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"item_ethereal_blade": "5, true",
				"muerta_parting_shot": "3, true",
				"nevermore_requiem": "4, true",
				"item_spirit_vessel": "7, true",
				"invoker_cold_snap": "1, true",
				"sandking_burrowstrike": "3, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsweaver_shukuchi": {
			  "Counter:": {
				"venomancer_noxious_plague": "0, true",
				"luna_eclipse": "1, true",
				"mud_golem_hurl_boulder": "4, true",
				"dark_troll_warlord_ensnare": "5, true",
				"primal_beast_pulverize": "0, true",
				"grimstroke_ink_creature": "1, true",
				"earthshaker_fissure": "2, true",
				"earthshaker_echo_slam": "3, true",
				"item_gungir": "7, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"alchemist_unstable_concoction_throw": "2, true",
				"crystal_maiden_frostbite": "0, true",
				"skywrath_mage_ancient_seal": "1, true",
				"item_orchid": "4, true",
				"item_rod_of_atos": "6, true",
				"queenofpain_shadow_strike": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"gyrocopter_homing_missile": "2, true",
				"item_bloodthorn": "6, true",
				"item_abyssal_blade": "7, true"
			  },
			  "Modifier counter:": {
				"luna_eclipse": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingswitch_doctor_paralyzing_cask": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {},
			  "Modifier disable:": {}
			},
			"uniqueSettingsbounty_hunter_shuriken_toss": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsbounty_hunter_wind_walk": {
			  "Counter:": {
				"riki_smoke_screen": "0, true",
				"mud_golem_hurl_boulder": "3, true",
				"dark_troll_warlord_ensnare": "6, true",
				"pudge_dismember": "3, true",
				"item_abyssal_blade": "7, true",
				"item_orchid": "5, true",
				"item_bloodthorn": "6, true",
				"necrolyte_reapers_scythe": "0, true",
				"night_stalker_crippling_fear": "1, true",
				"lion_voodoo": "2, true",
				"earthshaker_fissure": "4, true",
				"earthshaker_echo_slam": "5, true"
			  },
			  "Modifier counter:": {
				"slark_pounce": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsbounty_hunter_wind_walk_ally": {
			  "Counter:": {
				"riki_smoke_screen": "0, true",
				"mud_golem_hurl_boulder": "3, true",
				"dark_troll_warlord_ensnare": "6, true",
				"pudge_dismember": "3, true",
				"item_abyssal_blade": "7, true",
				"item_orchid": "5, true",
				"item_bloodthorn": "6, true",
				"necrolyte_reapers_scythe": "0, true",
				"night_stalker_crippling_fear": "1, true",
				"lion_voodoo": "2, true",
				"earthshaker_fissure": "4, true",
				"earthshaker_echo_slam": "5, true"
			  },
			  "Modifier counter:": {
				"slark_pounce": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstidehunter_gush": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsenchantress_natures_attendants": {
			  "Counter:": {
				"riki_smoke_screen": "0, true",
				"pudge_dismember": "2, true",
				"dark_troll_warlord_ensnare": "4, true",
				"jakiro_ice_path": "3, true",
				"faceless_void_chronosphere": "0, true",
				"vengefulspirit_magic_missile": "1, true",
				"legion_commander_duel": "0, true",
				"windrunner_shackleshot": "1, true",
				"spirit_breaker_nether_strike": "2, true",
				"item_gungir": "3, true",
				"mirana_arrow": "1, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsenchantress_bunny_hop": {
			  "Counter:": {
				"riki_smoke_screen": "0, true",
				"pudge_meat_hook": "3, true",
				"dark_troll_warlord_ensnare": "5, true",
				"jakiro_ice_path": "3, true",
				"phantom_assassin_stifling_dagger": "4, true",
				"faceless_void_chronosphere": "0, true",
				"sniper_assassinate": "1, true",
				"vengefulspirit_magic_missile": "2, true",
				"lich_chain_frost": "3, true",
				"item_ethereal_blade": "5, true",
				"legion_commander_duel": "0, true",
				"windrunner_shackleshot": "1, true",
				"windrunner_powershot": "2, true",
				"warlock_rain_of_chaos": "3, true",
				"item_gungir": "4, true",
				"item_nullifier": "5, true",
				"techies_suicide": "1, true",
				"mirana_arrow": "2, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsrazor_plasma_field": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsrazor_static_link": {
			  "Counter:": {
				"beastmaster_primal_roar": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"drow_ranger_multishot": "2, true"
			  },
			  "Modifier counter:": {
				"beastmaster_primal_roar": "0, true",
				"drow_ranger_wave_of_silence": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsrazor_eye_of_the_storm": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsphantom_assassin_stifling_dagger": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "1, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsphantom_assassin_phantom_strike": {
			  "Blink:": {
				"disruptor_static_storm": "0, true",
				"beastmaster_primal_roar": "1, true",
				"drow_ranger_wave_of_silence": "2, true",
				"dark_troll_warlord_ensnare": "5, true",
				"death_prophet_silence": "0, true",
				"vengefulspirit_magic_missile": "1, true",
				"ogre_magi_fireblast": "2, true",
				"ogre_magi_unrefined_fireblast": "3, true",
				"sandking_burrowstrike": "1, true",
				"queenofpain_sonic_wave": "0, true",
				"huskar_life_break": "1, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"storm_spirit_electric_vortex": "0, true",
				"hoodwink_sharpshooter": "2, true",
				"primal_beast_pulverize": "3, true",
				"legion_commander_duel": "0, true",
				"item_rod_of_atos": "6, true",
				"item_gungir": "4, true",
				"techies_suicide": "1, true",
				"dragon_knight_dragon_tail": "2, true",
				"item_ethereal_blade": "4, true",
				"nyx_assassin_impale": "0, true",
				"skeleton_king_hellfire_blast": "1, true",
				"lina_light_strike_array": "2, true",
				"lina_laguna_blade": "3, true",
				"necrolyte_reapers_scythe": "5, true",
				"muerta_parting_shot": "0, true",
				"shadow_shaman_shackles": "2, true",
				"winter_wyvern_winters_curse": "3, true"
			  },
			  "Modifier blink:": {
				"rubick_telekinesis": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsphantom_assassin_blur": {
			  "Counter:": {
				"beastmaster_primal_roar": "0, true",
				"sniper_assassinate": "1, true",
				"mud_golem_hurl_boulder": "6, true",
				"dark_troll_warlord_ensnare": "5, true",
				"queenofpain_shadow_strike": "0, true",
				"queenofpain_scream_of_pain": "1, true",
				"queenofpain_sonic_wave": "2, true",
				"huskar_life_break": "3, true",
				"witch_doctor_paralyzing_cask": "2, true",
				"storm_spirit_electric_vortex": "0, true",
				"hoodwink_bushwhack": "2, true",
				"hoodwink_sharpshooter": "3, true",
				"primal_beast_pulverize": "4, true",
				"legion_commander_duel": "2, true",
				"item_rod_of_atos": "8, true",
				"item_orchid": "9, true",
				"item_gungir": "4, true",
				"item_bloodthorn": "11, true",
				"zuus_thundergods_wrath": "0, true",
				"terrorblade_sunder": "1, true",
				"dragon_knight_dragon_tail": "3, true",
				"item_ethereal_blade": "6, true",
				"skeleton_king_hellfire_blast": "0, true",
				"medusa_mystic_snake": "1, true",
				"necrolyte_death_pulse": "4, true",
				"necrolyte_reapers_scythe": "5, true",
				"bloodseeker_rupture": "0, true",
				"phantom_assassin_stifling_dagger": "1, true",
				"venomancer_noxious_plague": "4, true",
				"muerta_parting_shot": "0, true",
				"sandking_burrowstrike": "1, true",
				"shadow_shaman_voodoo": "2, true",
				"shadow_shaman_shackles": "3, true"
			  },
			  "Modifier counter:": {
				"queenofpain_shadow_strike": "0, true",
				"item_orchid": "0, true",
				"item_bloodthorn": "1, true",
				"item_ethereal_blade": "0, true",
				"phantom_assassin_stifling_dagger": "0, true",
				"venomancer_noxious_plague": "1, true",
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_bloodstone": {
			  "Counter:": {
				"alchemist_unstable_concoction_throw": "0, true",
				"pudge_meat_hook": "0, true",
				"luna_lucent_beam": "2, true",
				"mud_golem_hurl_boulder": "5, true",
				"axe_culling_blade": "0, true",
				"windrunner_shackleshot": "1, true",
				"windrunner_powershot": "2, true",
				"earthshaker_fissure": "3, true",
				"phantom_assassin_stifling_dagger": "4, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"shadow_shaman_ether_shock": "2, true",
				"necrolyte_death_pulse": "3, true",
				"necrolyte_reapers_scythe": "4, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsclinkz_wind_walk": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdark_seer_vacuum": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmars_spear": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"axe_berserkers_call": "6, true",
				"axe_culling_blade": "7, true",
				"medusa_stone_gaze": "0, true",
				"dark_seer_vacuum": "1, true",
				"dark_seer_wall_of_replica": "2, true",
				"faceless_void_time_walk": "3, true",
				"faceless_void_chronosphere": "4, true",
				"dark_troll_warlord_ensnare": "4, true",
				"pudge_dismember": "1, true",
				"naga_siren_ensnare": "2, true",
				"hoodwink_sharpshooter": "1, true",
				"pudge_meat_hook": "0, true",
				"mars_spear": "2, true",
				"naga_siren_song_of_the_siren": "3, true",
				"obsidian_destroyer_sanity_eclipse": "5, true",
				"witch_doctor_paralyzing_cask": "8, true",
				"witch_doctor_death_ward": "9, true",
				"phantom_assassin_phantom_strike": "0, true",
				"lina_light_strike_array": "3, true",
				"lina_laguna_blade": "4, true",
				"dragon_knight_dragon_tail": "5, true",
				"warlock_rain_of_chaos": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"undying_tombstone": "2, true",
				"juggernaut_omni_slash": "3, true",
				"juggernaut_swift_slash": "4, true",
				"mars_arena_of_blood": "3, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"warlock_upheaval": "0, true",
				"crystal_maiden_freezing_field": "1, true"
			  }
			},
			"uniqueSettingsmars_gods_rebuke": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmars_bulwark": {
			  "Counter:": {
				"faceless_void_chronosphere": "0, true",
				"mars_gods_rebuke": "0, true",
				"phantom_assassin_stifling_dagger": "0, true",
				"lina_light_strike_array": "1, true",
				"dragon_knight_dragon_tail": "2, true",
				"tiny_toss_tree": "3, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_pipe": {
			  "Counter:": {
				"techies_suicide": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"item_sheepstick": "1, true",
				"antimage_mana_void": "0, true",
				"sandking_burrowstrike": "0, true",
				"nevermore_requiem": "1, true",
				"lion_voodoo": "0, true",
				"lion_finger_of_death": "1, true",
				"pudge_meat_hook": "2, true",
				"item_orchid": "3, true"
			  },
			  "Modifier counter:": {
				"sandking_burrowstrike": "0, true",
				"crystal_maiden_freezing_field": "1, true",
				"nevermore_requiem": "2, true",
				"item_veil_of_discord": "3, true",
				"lion_impale": "0, true",
				"pudge_dismember": "1, true",
				"nyx_assassin_impale": "2, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsqueenofpain_shadow_strike": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsqueenofpain_blink": {
			  "Blink:": {
				"earthshaker_fissure": "0, true",
				"invoker_tornado": "1, true",
				"terrorblade_sunder": "3, true",
				"enigma_malefice": "3, true",
				"enigma_black_hole": "4, true",
				"dark_troll_warlord_ensnare": "3, true",
				"item_gungir": "4, true",
				"slardar_slithereen_crush": "1, true",
				"item_rod_of_atos": "4, true",
				"skeleton_king_hellfire_blast": "0, true",
				"gyrocopter_call_down": "1, true",
				"sniper_assassinate": "2, true",
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"elder_titan_echo_stomp": "2, true",
				"elder_titan_earth_splitter": "3, true",
				"alchemist_unstable_concoction_throw": "4, true",
				"tinker_warp_grenade": "0, true",
				"storm_spirit_electric_vortex": "1, true",
				"queenofpain_sonic_wave": "0, true",
				"doom_bringer_doom": "4, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsshadow_demon_disruption": {
			  "Counter:": {
				"faceless_void_chronosphere": "0, true",
				"lina_light_strike_array": "1, true",
				"lina_laguna_blade": "2, true",
				"skywrath_mage_mystic_flare": "3, true",
				"slardar_slithereen_crush": "4, true"
			  },
			  "Modifier counter:": {
				"faceless_void_chronosphere": "0, true",
				"lina_laguna_blade": "1, true",
				"slardar_slithereen_crush": "2, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"faceless_void_chronosphere": "0, true"
			  },
			  "Modifier disable:": {
				"faceless_void_chronosphere": "0, true",
				"dazzle_shallow_grave": "1, true"
			  }
			},
			"uniqueSettingsshadow_demon_shadow_poison": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsshadow_demon_demonic_purge": {
			  "Disable:": {},
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_silver_edge": {
			  "Counter:": {
				"witch_doctor_paralyzing_cask": "0, true",
				"dragon_knight_dragon_tail": "0, true",
				"dark_troll_warlord_ensnare": "3, true",
				"item_sheepstick": "4, true",
				"mud_golem_hurl_boulder": "2, true",
				"item_abyssal_blade": "5, true",
				"item_bloodthorn": "4, true",
				"alchemist_unstable_concoction_throw": "0, true",
				"skeleton_king_hellfire_blast": "2, true",
				"vengefulspirit_magic_missile": "4, true",
				"earthshaker_fissure": "0, true",
				"earthshaker_echo_slam": "1, true",
				"item_orchid": "1, true",
				"item_rod_of_atos": "0, true",
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true",
				"axe_berserkers_call": "0, true",
				"terrorblade_sunder": "1, true",
				"silencer_global_silence": "2, true",
				"ogre_magi_fireblast": "1, true",
				"ogre_magi_unrefined_fireblast": "2, true",
				"item_gungir": "2, true",
				"lion_voodoo": "1, true",
				"windrunner_shackleshot": "1, true",
				"rattletrap_hookshot": "0, true",
				"beastmaster_primal_roar": "0, true",
				"void_spirit_astral_step": "2, true",
				"spirit_breaker_charge_of_darkness": "0, true",
				"spirit_breaker_nether_strike": "1, true",
				"night_stalker_crippling_fear": "2, true"
			  },
			  "Modifier counter:": {
				"slark_pounce": "0, true",
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsfaceless_void_time_walk": {
			  "Blink:": {
				"riki_smoke_screen": "0, true",
				"silencer_global_silence": "1, true",
				"dark_troll_warlord_ensnare": "0, true",
				"morphling_adaptive_strike_str": "3, true",
				"pudge_meat_hook": "1, true",
				"pudge_dismember": "2, true",
				"tinker_warp_grenade": "5, true",
				"lina_light_strike_array": "3, true",
				"lina_laguna_blade": "4, true",
				"vengefulspirit_magic_missile": "0, true",
				"sandking_burrowstrike": "1, true",
				"faceless_void_chronosphere": "2, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsrattletrap_rocket_flare": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsrattletrap_battery_assault": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslion_impale": {
			  "Disable:": {
				"sven_storm_bolt": "0, true",
				"sven_gods_strength": "1, true",
				"death_prophet_silence": "2, true",
				"death_prophet_exorcism": "3, true",
				"enigma_malefice": "4, true",
				"enigma_black_hole": "5, true",
				"magnataur_skewer": "6, true",
				"magnataur_reverse_polarity": "7, true",
				"pudge_meat_hook": "8, true",
				"lion_finger_of_death": "9, true",
				"pudge_dismember": "10, true",
				"dark_troll_warlord_ensnare": "3, true",
				"lion_impale": "12, true",
				"axe_culling_blade": "13, true",
				"axe_berserkers_call": "14, true",
				"hoodwink_sharpshooter": "1, true",
				"morphling_adaptive_strike_str": "2, true",
				"chaos_knight_chaos_bolt": "3, true",
				"chaos_knight_reality_rift": "4, true",
				"chaos_knight_phantasm": "5, true",
				"nyx_assassin_impale": "6, true",
				"undying_tombstone": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"drow_ranger_multishot": "2, true",
				"slardar_slithereen_crush": "0, true",
				"tinker_warp_grenade": "1, true",
				"faceless_void_time_walk": "4, true",
				"faceless_void_chronosphere": "5, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"silencer_global_silence": "2, true"
			  },
			  "Modifier disable:": {
				"sven_gods_strength": "0, true",
				"enigma_black_hole": "1, true",
				"magnataur_skewer": "2, true",
				"pudge_dismember": "3, true",
				"lich_sinister_gaze": "0, true",
				"faceless_void_chronosphere": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslion_voodoo": {
			  "Disable:": {
				"sven_storm_bolt": "0, true",
				"sven_gods_strength": "1, true",
				"death_prophet_silence": "2, true",
				"death_prophet_exorcism": "3, true",
				"enigma_malefice": "4, true",
				"enigma_black_hole": "5, true",
				"magnataur_skewer": "6, true",
				"magnataur_reverse_polarity": "7, true",
				"pudge_meat_hook": "8, true",
				"lion_finger_of_death": "9, true",
				"pudge_dismember": "10, true",
				"dark_troll_warlord_ensnare": "3, true",
				"lion_impale": "12, true",
				"axe_culling_blade": "13, true",
				"axe_berserkers_call": "14, true",
				"hoodwink_sharpshooter": "1, true",
				"morphling_adaptive_strike_str": "2, true",
				"chaos_knight_chaos_bolt": "3, true",
				"chaos_knight_reality_rift": "4, true",
				"chaos_knight_phantasm": "5, true",
				"nyx_assassin_impale": "6, true",
				"item_orchid": "7, true",
				"undying_tombstone": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"drow_ranger_multishot": "2, true",
				"slardar_slithereen_crush": "0, true",
				"tinker_warp_grenade": "1, true",
				"faceless_void_time_walk": "4, true",
				"faceless_void_chronosphere": "5, true",
				"queenofpain_blink": "0, true",
				"queenofpain_sonic_wave": "1, true",
				"silencer_global_silence": "2, true"
			  },
			  "Modifier disable:": {
				"sven_gods_strength": "0, true",
				"enigma_black_hole": "1, true",
				"magnataur_skewer": "2, true",
				"pudge_dismember": "3, true",
				"lich_sinister_gaze": "0, true",
				"faceless_void_chronosphere": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsvenomancer_noxious_plague": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsember_spirit_searing_chains": {
			  "Disable:": {
				"legion_commander_duel": "0, true",
				"skeleton_king_hellfire_blast": "5, true",
				"vengefulspirit_magic_missile": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"dark_troll_warlord_ensnare": "2, true",
				"zuus_thundergods_wrath": "0, true",
				"monkey_king_boundless_strike": "1, true",
				"sven_storm_bolt": "4, true",
				"sven_gods_strength": "5, true",
				"dragon_knight_dragon_tail": "0, true",
				"phoenix_icarus_dive": "1, true",
				"antimage_blink": "2, true",
				"antimage_mana_void": "3, true",
				"nevermore_requiem": "0, true",
				"hoodwink_sharpshooter": "1, true",
				"phantom_assassin_phantom_strike": "0, true",
				"nyx_assassin_impale": "1, true",
				"jakiro_ice_path": "6, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "1, true",
				"item_black_king_bar": "0, true",
				"lich_sinister_gaze": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsember_spirit_activate_fire_remnant": {
			  "Blink:": {
				"legion_commander_duel": "0, true",
				"skeleton_king_hellfire_blast": "5, true",
				"vengefulspirit_magic_missile": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"dark_troll_warlord_ensnare": "2, true",
				"sniper_assassinate": "0, true",
				"monkey_king_boundless_strike": "1, true",
				"sven_storm_bolt": "4, true",
				"dragon_knight_dragon_tail": "0, true",
				"phoenix_supernova": "1, true",
				"item_abyssal_blade": "1, true",
				"item_gungir": "6, true",
				"item_bloodthorn": "5, true",
				"faceless_void_chronosphere": "0, true",
				"nevermore_requiem": "1, true",
				"hoodwink_sharpshooter": "2, true",
				"item_rod_of_atos": "4, true",
				"item_orchid": "5, true",
				"nyx_assassin_impale": "0, true",
				"jakiro_ice_path": "6, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsskeleton_king_hellfire_blast": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"legion_commander_duel": "0, true",
				"skeleton_king_hellfire_blast": "1, true",
				"vengefulspirit_magic_missile": "1, true",
				"vengefulspirit_nether_swap": "2, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"dark_troll_warlord_ensnare": "5, true",
				"dragon_knight_dragon_tail": "0, true",
				"earthshaker_fissure": "2, true",
				"dazzle_shallow_grave": "3, true",
				"phantom_assassin_phantom_strike": "4, true",
				"kunkka_ghostship": "5, true",
				"lina_light_strike_array": "3, true",
				"lina_laguna_blade": "4, true",
				"lion_impale": "6, true",
				"windrunner_shackleshot": "0, true",
				"magnataur_skewer": "1, true",
				"magnataur_reverse_polarity": "2, true",
				"crystal_maiden_frostbite": "3, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"sven_storm_bolt": "2, true",
				"sven_gods_strength": "3, true",
				"hoodwink_sharpshooter": "4, true"
			  },
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"windrunner_focusfire": "0, true",
				"magnataur_skewer": "1, true",
				"crystal_maiden_freezing_field": "2, true",
				"sven_gods_strength": "0, true",
				"snapfire_mortimer_kisses": "1, true"
			  }
			},
			"uniqueSettingsviper_nethertoxin": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {},
			  "Modifier disable:": {}
			},
			"uniqueSettingsdeath_prophet_silence": {
			  "Disable:": {
				"death_prophet_silence": "0, true",
				"death_prophet_exorcism": "1, true",
				"vengefulspirit_magic_missile": "2, true",
				"vengefulspirit_nether_swap": "3, true",
				"ogre_magi_fireblast": "4, true",
				"ogre_magi_unrefined_fireblast": "5, true",
				"phantom_assassin_phantom_strike": "6, true",
				"dark_troll_warlord_ensnare": "5, true",
				"shadow_shaman_mass_serpent_ward": "2, true",
				"shadow_shaman_shackles": "3, true",
				"silencer_global_silence": "4, true"
			  },
			  "Modifier disable:": {
				"shadow_shaman_shackles": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdeath_prophet_carrion_swarm": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_havoc_hammer": {
			  "Disable:": {
				"treant_overgrowth": "0, true",
				"obsidian_destroyer_sanity_eclipse": "1, true",
				"nevermore_requiem": "2, true",
				"juggernaut_omni_slash": "1, true",
				"juggernaut_swift_slash": "2, true",
				"ogre_magi_fireblast": "3, true",
				"ogre_magi_unrefined_fireblast": "4, true",
				"dark_troll_warlord_ensnare": "6, true",
				"necrolyte_reapers_scythe": "0, true",
				"skeleton_king_hellfire_blast": "1, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"witch_doctor_death_ward": "4, true",
				"zuus_thundergods_wrath": "0, true",
				"terrorblade_sunder": "1, true",
				"techies_suicide": "4, true",
				"dragon_knight_dragon_tail": "5, true",
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"legion_commander_duel": "2, true",
				"phoenix_icarus_dive": "5, true",
				"silencer_global_silence": "1, true",
				"monkey_king_boundless_strike": "2, true",
				"phantom_assassin_phantom_strike": "5, true",
				"muerta_parting_shot": "0, true",
				"shadow_shaman_shackles": "3, true",
				"shadow_shaman_mass_serpent_ward": "4, true",
				"winter_wyvern_winters_curse": "5, true"
			  },
			  "Modifier disable:": {
				"shadow_shaman_shackles": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingssven_storm_bolt": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"slardar_slithereen_crush": "0, true",
				"queenofpain_blink": "1, true",
				"queenofpain_sonic_wave": "2, true",
				"muerta_parting_shot": "3, true",
				"luna_eclipse": "4, true",
				"techies_suicide": "5, true",
				"dark_troll_warlord_ensnare": "5, true",
				"crystal_maiden_frostbite": "0, true",
				"naga_siren_ensnare": "1, true",
				"naga_siren_song_of_the_siren": "2, true",
				"axe_berserkers_call": "3, true",
				"axe_culling_blade": "4, true"
			  },
			  "Modifier disable:": {
				"crystal_maiden_freezing_field": "0, true"
			  }
			},
			"uniqueSettingssven_warcry": {
			  "Counter:": {
				"slardar_slithereen_crush": "0, true",
				"item_bloodthorn": "1, true",
				"axe_berserkers_call": "0, true"
			  },
			  "Modifier counter:": {
				"slardar_slithereen_crush": "0, true",
				"slardar_amplify_damage": "1, true",
				"axe_berserkers_call": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingscrystal_maiden_frostbite": {
			  "Disable:": {},
			  "Modifier disable:": {
				"item_black_king_bar": "1, true",
				"life_stealer_open_wounds": "0, true",
				"life_stealer_rage": "1, true",
				"pangolier_gyroshell": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingscrystal_maiden_crystal_clone": {
			  "Counter:": {
				"lina_light_strike_array": "0, true",
				"dragon_knight_dragon_tail": "1, true",
				"faceless_void_chronosphere": "2, true",
				"drow_ranger_wave_of_silence": "3, true",
				"dark_troll_warlord_ensnare": "7, true",
				"item_rod_of_atos": "5, true",
				"item_gungir": "6, true",
				"pudge_meat_hook": "0, true",
				"windrunner_shackleshot": "1, true",
				"windrunner_powershot": "2, true",
				"earthshaker_fissure": "3, true",
				"earthshaker_enchant_totem": "4, true",
				"phantom_assassin_stifling_dagger": "5, true",
				"medusa_mystic_snake": "0, true",
				"visage_soul_assumption": "1, true",
				"hoodwink_bushwhack": "2, true",
				"hoodwink_sharpshooter": "3, true",
				"mars_spear": "4, true",
				"mars_gods_rebuke": "5, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingssnapfire_scatterblast": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "1, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {},
			  "Modifier disable:": {}
			},
			"uniqueSettingsshadow_shaman_shackles": {
			  "Disable:": {
				"death_prophet_silence": "0, true",
				"death_prophet_exorcism": "1, true",
				"shadow_shaman_mass_serpent_ward": "2, true",
				"shadow_shaman_shackles": "3, true",
				"silencer_global_silence": "4, true",
				"dark_troll_warlord_ensnare": "3, true",
				"nevermore_requiem": "0, true",
				"techies_suicide": "1, true",
				"windrunner_shackleshot": "2, true",
				"crystal_maiden_frostbite": "4, true"
			  },
			  "Modifier disable:": {
				"shadow_shaman_shackles": "0, true",
				"windrunner_focusfire": "0, true",
				"crystal_maiden_freezing_field": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingssilencer_curse_of_the_silent": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsaxe_battle_hunger": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsaxe_berserkers_call": {
			  "Disable:": {
				"death_prophet_silence": "0, true",
				"death_prophet_exorcism": "1, true",
				"shadow_shaman_mass_serpent_ward": "2, true",
				"shadow_shaman_shackles": "3, true",
				"silencer_global_silence": "4, true",
				"dark_troll_warlord_ensnare": "5, true",
				"axe_culling_blade": "0, true",
				"axe_berserkers_call": "1, true",
				"lion_impale": "0, true",
				"lion_finger_of_death": "1, true",
				"alchemist_unstable_concoction_throw": "2, true",
				"pudge_meat_hook": "3, true",
				"pudge_dismember": "4, true",
				"nyx_assassin_impale": "6, true"
			  },
			  "Modifier disable:": {
				"shadow_shaman_shackles": "0, true",
				"pudge_dismember": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsember_spirit_sleight_of_fist": {
			  "Counter:": {
				"sniper_assassinate": "0, true",
				"monkey_king_boundless_strike": "1, true",
				"pudge_dismember": "3, true",
				"mud_golem_hurl_boulder": "2, true",
				"sven_storm_bolt": "4, true",
				"dark_troll_warlord_ensnare": "1, true",
				"dragon_knight_dragon_tail": "0, true",
				"lich_chain_frost": "1, true",
				"phoenix_supernova": "2, true",
				"item_gungir": "10, true",
				"venomancer_noxious_plague": "0, true",
				"nevermore_shadowraze1": "1, true",
				"nevermore_shadowraze2": "2, true",
				"nevermore_shadowraze3": "3, true",
				"slark_pounce": "4, true",
				"hoodwink_bushwhack": "5, true",
				"hoodwink_sharpshooter": "6, true",
				"item_rod_of_atos": "9, true",
				"phantom_assassin_stifling_dagger": "0, true",
				"skeleton_king_hellfire_blast": "4, true"
			  },
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsember_spirit_flame_guard": {
			  "Counter:": {
				"zuus_arc_lightning": "0, true",
				"zuus_lightning_bolt": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"sniper_assassinate": "3, true",
				"pudge_meat_hook": "2, true",
				"dragon_knight_breathe_fire": "0, true",
				"lich_frost_nova": "1, true",
				"lich_chain_frost": "2, true",
				"phoenix_supernova": "3, true",
				"puck_illusory_orb": "4, true",
				"antimage_mana_void": "5, true",
				"nevermore_shadowraze1": "0, true",
				"nevermore_shadowraze2": "1, true",
				"nevermore_shadowraze3": "2, true",
				"nevermore_requiem": "3, true",
				"tusk_ice_shards": "4, true",
				"tusk_walrus_kick": "5, true",
				"hoodwink_bushwhack": "6, true",
				"hoodwink_sharpshooter": "7, true",
				"nyx_assassin_impale": "0, true",
				"nyx_assassin_jolt": "1, true",
				"jakiro_ice_path": "3, true"
			  },
			  "Modifier counter:": {
				"pudge_rot": "1, true",
				"pudge_dismember": "2, true",
				"lich_sinister_gaze": "0, true",
				"lich_chain_frost": "1, true",
				"phoenix_supernova": "2, true",
				"phoenix_launch_fire_spirit": "3, true",
				"puck_waning_rift": "4, true",
				"puck_dream_coil": "5, true",
				"item_veil_of_discord": "6, true",
				"venomancer_venomous_gale": "0, true",
				"venomancer_noxious_plague": "1, true",
				"nevermore_requiem": "2, true",
				"nyx_assassin_impale": "0, true",
				"jakiro_dual_breath": "3, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsbane_brain_sap": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsbane_nightmare": {
			  "Counter:": {
				"zuus_thundergods_wrath": "0, true",
				"monkey_king_boundless_strike": "1, true",
				"pudge_meat_hook": "2, true",
				"sven_storm_bolt": "3, true"
			  },
			  "Modifier counter:": {
				"monkey_king_boundless_strike": "0, true",
				"pudge_dismember": "1, true",
				"sven_storm_bolt": "2, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {},
			  "Modifier disable:": {
				"pudge_dismember": "0, true",
				"sven_gods_strength": "1, true",
				"item_satanic": "2, true"
			  }
			},
			"uniqueSettingskeeper_of_the_light_illuminate": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingskeeper_of_the_light_blinding_light": {
			  "Disable:": {
				"faceless_void_chronosphere": "0, true",
				"hoodwink_sharpshooter": "0, true"
			  },
			  "Modifier disable:": {
				"faceless_void_chronosphere": "0, true",
				"item_satanic": "1, true",
				"medusa_stone_gaze": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingskeeper_of_the_light_will_o_wisp": {
			  "Disable:": {
				"faceless_void_chronosphere": "0, true"
			  },
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingskeeper_of_the_light_radiant_bind": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_stormcrafter": {
			  "Counter:": {
				"sniper_assassinate": "0, true",
				"item_ethereal_blade": "1, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_book_of_shadows": {
			  "Counter:": {
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"gyrocopter_homing_missile": "2, true"
			  },
			  "Modifier counter:": {
				"drow_ranger_wave_of_silence": "0, true",
				"gyrocopter_homing_missile": "1, true",
				"item_solar_crest": "2, true",
				"dark_troll_warlord_ensnare": "3, true",
				"item_ethereal_blade": "4, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"undying_tombstone": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"drow_ranger_multishot": "2, true",
				"dark_troll_warlord_ensnare": "3, true"
			  },
			  "Modifier disable:": {
				"lich_frost_shield": "0, true",
				"lich_sinister_gaze": "1, true",
				"gyrocopter_rocket_barrage": "2, true",
				"gyrocopter_flak_cannon": "3, true",
				"item_ghost": "4, true",
				"item_satanic": "5, true",
				"item_glimmer_cape": "6, true",
				"item_aeon_disk": "7, true"
			  }
			},
			"uniqueSettingsnyx_assassin_impale": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"slardar_slithereen_crush": "0, true",
				"tinker_warp_grenade": "1, true",
				"death_prophet_silence": "2, true",
				"death_prophet_exorcism": "3, true",
				"faceless_void_time_walk": "4, true",
				"faceless_void_chronosphere": "5, true",
				"weaver_time_lapse": "0, true",
				"zuus_thundergods_wrath": "1, true",
				"earthshaker_fissure": "2, true",
				"dark_troll_warlord_ensnare": "4, true",
				"rattletrap_hookshot": "3, true",
				"undying_tombstone": "0, true",
				"shadow_shaman_shackles": "1, true",
				"shadow_shaman_mass_serpent_ward": "2, true"
			  },
			  "Modifier disable:": {
				"faceless_void_chronosphere": "0, true",
				"shadow_shaman_shackles": "0, true"
			  }
			},
			"uniqueSettingsnyx_assassin_jolt": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnyx_assassin_spiked_carapace": {
			  "Counter:": {
				"slardar_slithereen_crush": "0, true",
				"tinker_laser": "1, true",
				"abaddon_death_coil": "2, true",
				"death_prophet_carrion_swarm": "3, true",
				"death_prophet_silence": "4, true",
				"faceless_void_chronosphere": "6, true",
				"zuus_arc_lightning": "0, true",
				"zuus_lightning_bolt": "1, true",
				"zuus_thundergods_wrath": "2, true",
				"earthshaker_fissure": "3, true",
				"earthshaker_enchant_totem": "4, true",
				"earthshaker_echo_slam": "5, true",
				"rattletrap_rocket_flare": "7, true",
				"rattletrap_hookshot": "8, true",
				"sniper_assassinate": "2, true",
				"slark_pounce": "6, true",
				"undying_decay": "0, true",
				"undying_soul_rip": "1, true",
				"shadow_shaman_ether_shock": "3, true",
				"shadow_shaman_voodoo": "4, true",
				"shadow_shaman_shackles": "5, true",
				"item_orchid": "9, true"
			  },
			  "Modifier counter:": {
				"rattletrap_battery_assault": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnyx_assassin_vendetta": {
			  "Counter:": {
				"tinker_warp_grenade": "0, true",
				"death_prophet_silence": "1, true",
				"mud_golem_hurl_boulder": "4, true",
				"zuus_thundergods_wrath": "0, true",
				"earthshaker_fissure": "1, true",
				"earthshaker_echo_slam": "2, true",
				"dark_troll_warlord_ensnare": "3, true",
				"item_gungir": "5, true",
				"rattletrap_hookshot": "2, true",
				"shadow_shaman_voodoo": "0, true",
				"shadow_shaman_shackles": "1, true",
				"item_orchid": "5, true"
			  },
			  "Modifier counter:": {
				"slark_pounce": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmagnataur_shockwave": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmagnataur_skewer": {
			  "Blink:": {
				"necrolyte_reapers_scythe": "0, true",
				"disruptor_static_storm": "1, true",
				"skeleton_king_hellfire_blast": "2, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"dark_troll_warlord_ensnare": "2, true",
				"slardar_slithereen_crush": "0, true",
				"dragon_knight_dragon_tail": "2, true",
				"magnataur_skewer": "3, true",
				"magnataur_reverse_polarity": "4, true",
				"tinker_warp_grenade": "6, true",
				"shadow_shaman_shackles": "0, true",
				"rattletrap_hookshot": "1, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsvisage_soul_assumption": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsvisage_summon_familiars_stone_form": {
			  "Disable:": {
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true"
			  },
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsabyssal_underlord_firestorm": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsabyssal_underlord_pit_of_malice": {
			  "Disable:": {},
			  "Modifier disable:": {
				"item_black_king_bar": "3, true",
				"night_stalker_darkness": "0, true",
				"life_stealer_open_wounds": "1, true",
				"life_stealer_rage": "2, true",
				"juggernaut_blade_fury": "0, true",
				"dazzle_shallow_grave": "1, true",
				"razor_eye_of_the_storm": "2, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsarc_warden_magnetic_field": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsarc_warden_flux": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true",
				"item_clarity": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnight_stalker_crippling_fear": {
			  "Disable:": {
				"abyssal_underlord_pit_of_malice": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"drow_ranger_multishot": "2, true",
				"night_stalker_crippling_fear": "3, true",
				"dark_troll_warlord_ensnare": "5, true",
				"dazzle_shallow_grave": "0, true",
				"sven_storm_bolt": "1, true",
				"sven_gods_strength": "2, true",
				"lion_impale": "3, true",
				"lion_finger_of_death": "4, true"
			  },
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsnight_stalker_void": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsmirana_leap": {
			  "Blink:": {
				"abyssal_underlord_pit_of_malice": "0, true",
				"drow_ranger_wave_of_silence": "1, true",
				"night_stalker_crippling_fear": "2, true",
				"dark_troll_warlord_ensnare": "6, true",
				"ogre_magi_fireblast": "0, true",
				"ogre_magi_unrefined_fireblast": "1, true",
				"muerta_parting_shot": "2, true",
				"nevermore_requiem": "3, true",
				"legion_commander_duel": "4, true",
				"item_rod_of_atos": "5, true",
				"item_gungir": "7, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_nullifier": {
			  "Disable:": {},
			  "Modifier disable:": {
				"ember_spirit_flame_guard": "0, true",
				"item_glimmer_cape": "1, true",
				"item_ghost": "2, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsvenomancer_venomous_gale": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdragon_knight_dragon_tail": {
			  "Disable:": {
				"slardar_slithereen_crush": "0, true",
				"witch_doctor_paralyzing_cask": "1, true",
				"witch_doctor_death_ward": "2, true",
				"dragon_knight_dragon_tail": "3, true",
				"magnataur_skewer": "4, true",
				"magnataur_reverse_polarity": "5, true",
				"dark_troll_warlord_ensnare": "6, true",
				"tinker_warp_grenade": "7, true"
			  },
			  "Modifier disable:": {
				"magnataur_skewer": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdragon_knight_breathe_fire": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsearthshaker_echo_slam": {
			  "Disable:": {},
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsearthshaker_fissure": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1,
			  "Disable:": {
				"jakiro_ice_path": "3, true",
				"abyssal_underlord_pit_of_malice": "1, true",
				"monkey_king_boundless_strike": "2, true",
				"dark_troll_warlord_ensnare": "5, true",
				"weaver_time_lapse": "0, true",
				"primal_beast_pulverize": "1, true",
				"grimstroke_soul_chain": "2, true",
				"earthshaker_fissure": "3, true",
				"skeleton_king_hellfire_blast": "0, true",
				"phantom_assassin_phantom_strike": "1, true",
				"nyx_assassin_impale": "2, true",
				"pudge_meat_hook": "4, true",
				"pudge_dismember": "5, true",
				"witch_doctor_paralyzing_cask": "0, true",
				"witch_doctor_death_ward": "1, true",
				"bloodseeker_rupture": "2, true",
				"spirit_breaker_charge_of_darkness": "3, true",
				"spirit_breaker_nether_strike": "4, true"
			  },
			  "Modifier disable:": {
				"primal_beast_pulverize": "0, true",
				"pudge_dismember": "0, true"
			  }
			},
			"uniqueSettingsitem_iron_talon": {
			  "Counter:": {
				"furion_sprout": "0, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdisruptor_glimpse": {
			  "Disable:": {},
			  "Modifier disable:": {
				"primal_beast_pulverize": "0, true",
				"crystal_maiden_freezing_field": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdisruptor_thunder_strike": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsprimal_beast_pulverize": {
			  "Disable:": {},
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsgrimstroke_dark_artistry": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdisruptor_static_storm": {
			  "Disable:": {},
			  "Modifier disable:": {
				"crystal_maiden_freezing_field": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsursa_enrage": {
			  "Counter:": {
				"juggernaut_omni_slash": "0, true",
				"juggernaut_swift_slash": "1, true",
				"queenofpain_sonic_wave": "2, true",
				"item_orchid": "3, true",
				"nevermore_requiem": "0, true",
				"techies_suicide": "1, true",
				"windrunner_shackleshot": "2, true"
			  },
			  "Modifier counter:": {
				"abyssal_underlord_pit_of_malice": "0, true",
				"item_gungir": "1, true",
				"dark_troll_warlord_ensnare": "3, true",
				"nevermore_requiem": "0, true",
				"windrunner_shackleshot": "1, true",
				"crystal_maiden_frostbite": "2, true",
				"puck_dream_coil": "4, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsdoom_bringer_doom": {
			  "Disable:": {},
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_greater_famango": {
			  "Counter:": {
				"legion_commander_overwhelming_odds": "0, true",
				"vengefulspirit_magic_missile": "1, true",
				"lina_dragon_slave": "2, true",
				"lina_light_strike_array": "3, true",
				"lina_laguna_blade": "4, true",
				"mud_golem_hurl_boulder": "5, true",
				"skeleton_king_hellfire_blast": "6, true",
				"chaos_knight_reality_rift": "7, true"
			  },
			  "Modifier counter:": {
				"lina_laguna_blade": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_ironwood_tree": {
			  "Counter:": {},
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_crimson_guard": {
			  "Counter:": {
				"lion_voodoo": "0, true",
				"alchemist_unstable_concoction_throw": "1, true",
				"item_orchid": "2, true"
			  },
			  "Modifier counter:": {
				"alchemist_unstable_concoction_throw": "0, true",
				"alchemist_chemical_rage": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslone_druid_savage_roar": {
			  "Disable:": {
				"warlock_rain_of_chaos": "0, true",
				"crystal_maiden_frostbite": "1, true",
				"undying_tombstone": "2, true",
				"juggernaut_omni_slash": "3, true",
				"juggernaut_swift_slash": "4, true",
				"dark_troll_warlord_ensnare": "5, true",
				"item_bloodthorn": "6, true"
			  },
			  "Modifier disable:": {
				"warlock_upheaval": "0, true",
				"crystal_maiden_freezing_field": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsalchemist_berserk_potion": {
			  "Counter:": {
				"drow_ranger_wave_of_silence": "0, true",
				"drow_ranger_multishot": "1, true",
				"legion_commander_duel": "2, true",
				"witch_doctor_paralyzing_cask": "3, true",
				"witch_doctor_death_ward": "4, true",
				"invoker_tornado": "5, true",
				"invoker_emp": "6, true",
				"invoker_sun_strike": "7, true",
				"phoenix_supernova": "8, true",
				"dark_troll_warlord_ensnare": "9, true"
			  },
			  "Modifier counter:": {
				"drow_ranger_wave_of_silence": "0, true",
				"invoker_cold_snap": "1, true",
				"phoenix_launch_fire_spirit": "2, true",
				"dark_troll_warlord_ensnare": "3, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsalchemist_chemical_rage": {
			  "Counter:": {
				"witch_doctor_paralyzing_cask": "0, true",
				"dark_troll_warlord_ensnare": "1, true"
			  },
			  "Modifier counter:": {
				"dark_troll_warlord_ensnare": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslina_dragon_slave": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingslina_light_strike_array": {
			  "Disable:": {},
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingssnapfire_firesnap_cookie": {
			  "Disable:": {
				"spectre_haunt": "0, true",
				"pudge_meat_hook": "1, true",
				"pudge_dismember": "2, true",
				"dark_troll_warlord_ensnare": "3, true"
			  },
			  "Modifier disable:": {
				"snapfire_mortimer_kisses": "0, true",
				"pudge_dismember": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsitem_holy_locket": {
			  "Counter:": {
				"jakiro_ice_path": "0, true",
				"legion_commander_overwhelming_odds": "1, true",
				"monkey_king_boundless_strike": "2, true",
				"slardar_slithereen_crush": "3, true",
				"mud_golem_hurl_boulder": "4, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingspangolier_swashbuckle": {
			  "Blink:": {
				"crystal_maiden_frostbite": "0, true",
				"phoenix_supernova": "1, true",
				"enigma_malefice": "2, true",
				"enigma_black_hole": "3, true",
				"dark_troll_warlord_ensnare": "4, true"
			  },
			  "Modifier blink:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsundying_decay": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsundying_soul_rip": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_flask": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstusk_ice_shards": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true",
				"item_flask": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstusk_snowball": {
			  "Counter:": {
				"rattletrap_hookshot": "2, true",
				"axe_berserkers_call": "0, true",
				"dark_troll_warlord_ensnare": "1, true",
				"witch_doctor_paralyzing_cask": "4, true",
				"witch_doctor_death_ward": "3, true"
			  },
			  "Modifier counter:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstusk_walrus_kick": {
			  "Disable:": {
				"rattletrap_hookshot": "4, true",
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"medusa_stone_gaze": "3, true",
				"dark_troll_warlord_ensnare": "2, true",
				"witch_doctor_paralyzing_cask": "6, true",
				"witch_doctor_death_ward": "5, true",
				"spectre_haunt": "7, true"
			  },
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingstusk_walrus_punch": {
			  "Disable:": {
				"rattletrap_hookshot": "4, true",
				"axe_berserkers_call": "0, true",
				"axe_culling_blade": "1, true",
				"medusa_stone_gaze": "3, true",
				"dark_troll_warlord_ensnare": "2, true",
				"witch_doctor_paralyzing_cask": "6, true",
				"witch_doctor_death_ward": "5, true",
				"spectre_haunt": "7, true"
			  },
			  "Modifier disable:": {},
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsshadow_shaman_ether_shock": {
			  "Counter:": {},
			  "Modifier counter:": {
				"item_clarity": "0, true"
			  },
			  "Evade Timing(second)": 0.1
			},
			"uniqueSettingsshadow_shaman_voodoo": {
			  "Disable:": {
				"nevermore_requiem": "0, true",
				"techies_suicide": "1, true",
				"windrunner_shackleshot": "2, true",
				"dark_troll_warlord_ensnare": "3, true",
				"crystal_maiden_frostbite": "4, true",
				"item_orchid": "5, true"
			  },
			  "Modifier disable:": {
				"windrunner_focusfire": "0, true",
				"crystal_maiden_freezing_field": "1, true"
			  },
			  "Evade Timing(second)": 0.1
			}
		  },
		  "Dodge:": {
			"item_invis_sword": "0, true",
			"item_bullwhip": "0, true",
			"slardar_sprint": "0, true",
			"item_phase_boots": "0, true",
			"windrunner_windrun": "0, true",
			"weaver_shukuchi": "0, true",
			"clinkz_wind_walk": "0, true",
			"item_silver_edge": "1, true",
			"doom_bringer_scorched_earth": "0, true"
		  },
		  "Blink:": {
			"antimage_blink": "0, true",
			"sandking_burrowstrike": "1, true",
			"item_blink": "0, true",
			"riki_blink_strike": "1, true",
			"item_ogre_seal_totem": "0, true",
			"morphling_waveform": "0, true",
			"item_force_staff": "1, true",
			"storm_spirit_ball_lightning": "1, true",
			"item_arcane_blink": "1, true",
			"monkey_king_tree_dance": "1, true",
			"item_hurricane_pike": "1, true",
			"item_swift_blink": "2, true",
			"slark_pounce": "0, true",
			"item_overwhelming_blink": "2, true",
			"phantom_assassin_phantom_strike": "0, true",
			"queenofpain_blink": "0, true",
			"faceless_void_time_walk": "1, true",
			"ember_spirit_activate_fire_remnant": "2, true",
			"magnataur_skewer": "0, true",
			"mirana_leap": "1, true",
			"pangolier_swashbuckle": "0, true"
		  },
		  "Counter:": {
			"antimage_counterspell": "3, true",
			"antimage_counterspell_ally": "2, true",
			"courier_burst": "1, true",
			"courier_shield": "2, true",
			"alchemist_goblins_greed": "5, true",
			"item_manta": "6, true",
			"sandking_sand_storm": "9, true",
			"item_black_king_bar": "14, true",
			"item_sphere": "18, true",
			"item_cyclone": "12, false",
			"item_tango": "6, true",
			"item_branches": "0, true",
			"item_faerie_fire": "7, true",
			"nevermore_shadowraze1": "10, true",
			"nevermore_shadowraze2": "14, true",
			"nevermore_shadowraze3": "13, true",
			"item_magic_stick": "10, true",
			"item_magic_wand": "11, true",
			"templar_assassin_refraction": "0, true",
			"templar_assassin_meld": "1, true",
			"skywrath_mage_arcane_bolt": "3, true",
			"skywrath_mage_concussive_shot": "4, true",
			"item_psychic_headband": "7, true",
			"riki_tricks_of_the_trade": "5, true",
			"item_lotus_orb": "9, true",
			"zuus_arc_lightning": "2, true",
			"zuus_lightning_bolt": "3, true",
			"item_trickster_cloak": "7, true",
			"item_ghost": "6, true",
			"item_ethereal_blade": "7, false",
			"item_famango": "6, true",
			"item_great_famango": "13, true",
			"jakiro_dual_breath": "5, true",
			"spirit_breaker_planar_pocket": "11, true",
			"spirit_breaker_bulldoze": "11, true",
			"item_blade_mail": "10, true",
			"item_invis_sword": "5, false",
			"item_shivas_guard": "10, true",
			"morphling_adaptive_strike_agi": "0, true",
			"morphling_morph_str": "2, false",
			"morphling_adaptive_strike_str": "1, true",
			"item_satanic": "14, true",
			"pugna_nether_blast": "2, true",
			"pugna_decrepify": "3, true",
			"item_glimmer_cape": "6, true",
			"storm_spirit_ball_lightning": "10, true",
			"tinker_laser": "2, true",
			"tinker_defense_matrix": "3, true",
			"invoker_cold_snap": "0, true",
			"invoker_ghost_walk": "1, true",
			"invoker_tornado": "2, true",
			"item_wind_waker": "11, true",
			"rubick_fade_bolt": "0, true",
			"warlock_shadow_word": "13, true",
			"item_quelling_blade": "9, true",
			"marci_grapple": "11, true",
			"naga_siren_song_of_the_siren": "12, true",
			"item_bfury": "13, true",
			"dazzle_poison_touch": "13, true",
			"dazzle_shallow_grave": "14, true",
			"dazzle_shadow_wave": "15, true",
			"item_cheese": "17, true",
			"tiny_toss": "11, true",
			"terrorblade_reflection": "4, true",
			"terrorblade_sunder": "9, true",
			"crystal_maiden_crystal_nova": "21, true",
			"ogre_magi_unrefined_fireblast": "5, true",
			"ogre_magi_ignite": "4, true",
			"ogre_magi_fireblast": "2, true",
			"ancient_apparition_chilling_touch": "8, true",
			"item_hand_of_midas": "8, true",
			"monkey_king_boundless_strike": "9, true",
			"monkey_king_mischief": "4, true",
			"sniper_shrapnel": "0, true",
			"item_hurricane_pike": "15, true",
			"abaddon_death_coil": "9, true",
			"abaddon_aphotic_shield": "10, true",
			"abaddon_borrowed_time": "12, true",
			"earth_spirit_petrify": "8, true",
			"juggernaut_blade_fury": "7, true",
			"juggernaut_swift_slash": "8, true",
			"item_tango_single": "10, true",
			"lich_frost_nova": "10, true",
			"lich_frost_shield": "11, true",
			"slark_dark_pact": "0, true",
			"slark_depth_shroud": "1, false",
			"slark_shadow_dance": "2, false",
			"oracle_fortunes_end": "1, true",
			"oracle_fates_edict": "2, true",
			"oracle_purifying_flames": "3, true",
			"oracle_false_promise": "4, true",
			"item_guardian_greaves": "12, true",
			"phoenix_supernova": "12, true",
			"vengefulspirit_wave_of_terror": "12, true",
			"kunkka_x_marks_the_spot": "3, true",
			"item_armlet": "12, true",
			"phantom_lancer_spirit_lance": "1, true",
			"phantom_lancer_doppelwalk": "0, true",
			"phantom_lancer_juxtapose": "2, true",
			"necrolyte_ghost_shroud": "2, true",
			"item_radiance": "9, true",
			"windrunner_windrun": "9, true",
			"obsidian_destroyer_astral_imprisonment": "3, true",
			"medusa_mystic_snake": "17, true",
			"luna_lucent_beam": "2, true",
			"spectre_spectral_dagger": "2, true",
			"bristleback_bristleback": "0, true",
			"legion_commander_overwhelming_odds": "11, true",
			"legion_commander_press_the_attack": "12, true",
			"weaver_shukuchi": "11, true",
			"witch_doctor_paralyzing_cask": "8, true",
			"bounty_hunter_shuriken_toss": "17, true",
			"bounty_hunter_wind_walk": "18, true",
			"bounty_hunter_wind_walk_ally": "19, true",
			"tidehunter_gush": "13, true",
			"enchantress_natures_attendants": "13, true",
			"enchantress_bunny_hop": "14, true",
			"razor_plasma_field": "3, true",
			"razor_static_link": "4, true",
			"razor_eye_of_the_storm": "5, true",
			"phantom_assassin_stifling_dagger": "11, true",
			"phantom_assassin_blur": "12, true",
			"item_bloodstone": "10, true",
			"clinkz_wind_walk": "0, true",
			"dark_seer_vacuum": "15, true",
			"mars_spear": "14, true",
			"mars_gods_rebuke": "15, true",
			"mars_bulwark": "16, true",
			"item_pipe": "15, true",
			"queenofpain_shadow_strike": "9, true",
			"shadow_demon_disruption": "0, true",
			"shadow_demon_shadow_poison": "1, true",
			"item_silver_edge": "12, true",
			"rattletrap_rocket_flare": "1, true",
			"rattletrap_battery_assault": "0, true",
			"venomancer_noxious_plague": "13, true",
			"skeleton_king_hellfire_blast": "10, true",
			"viper_nethertoxin": "9, true",
			"death_prophet_carrion_swarm": "10, true",
			"sven_storm_bolt": "6, true",
			"sven_warcry": "7, true",
			"crystal_maiden_crystal_clone": "22, true",
			"snapfire_scatterblast": "12, true",
			"silencer_curse_of_the_silent": "8, true",
			"axe_battle_hunger": "2, true",
			"ember_spirit_sleight_of_fist": "13, true",
			"ember_spirit_flame_guard": "14, true",
			"bane_brain_sap": "13, true",
			"bane_nightmare": "14, true",
			"keeper_of_the_light_illuminate": "11, true",
			"keeper_of_the_light_radiant_bind": "10, true",
			"item_stormcrafter": "11, true",
			"item_book_of_shadows": "15, true",
			"nyx_assassin_impale": "1, true",
			"nyx_assassin_jolt": "2, true",
			"nyx_assassin_spiked_carapace": "3, true",
			"nyx_assassin_vendetta": "4, true",
			"magnataur_shockwave": "10, true",
			"visage_soul_assumption": "0, true",
			"abyssal_underlord_firestorm": "8, true",
			"arc_warden_magnetic_field": "10, true",
			"arc_warden_flux": "9, true",
			"night_stalker_void": "11, true",
			"venomancer_venomous_gale": "7, true",
			"dragon_knight_breathe_fire": "11, true",
			"earthshaker_fissure": "2, true",
			"item_iron_talon": "10, true",
			"disruptor_thunder_strike": "11, true",
			"grimstroke_dark_artistry": "13, true",
			"ursa_enrage": "10, true",
			"item_greater_famango": "14, true",
			"item_ironwood_tree": "11, true",
			"item_crimson_guard": "8, true",
			"alchemist_berserk_potion": "16, true",
			"alchemist_chemical_rage": "17, true",
			"lina_dragon_slave": "2, true",
			"item_holy_locket": "9, true",
			"undying_decay": "8, true",
			"undying_soul_rip": "10, true",
			"tusk_ice_shards": "1, true",
			"tusk_snowball": "2, true",
			"shadow_shaman_ether_shock": "0, true"
		  },
		  "Disable:": {
			"sandking_burrowstrike": "1, true",
			"item_abyssal_blade": "1, true",
			"item_cyclone": "3, true",
			"item_bloodthorn": "1, true",
			"skywrath_mage_ancient_seal": "0, true",
			"item_rod_of_atos": "1, true",
			"riki_smoke_screen": "1, true",
			"zuus_lightning_bolt": "0, true",
			"zuus_cloud": "1, true",
			"item_ethereal_blade": "4, false",
			"jakiro_ice_path": "1, true",
			"morphling_adaptive_strike_str": "0, true",
			"pugna_decrepify": "0, true",
			"storm_spirit_electric_vortex": "0, true",
			"item_orchid": "5, true",
			"tinker_laser": "0, true",
			"tinker_warp_grenade": "1, true",
			"item_sheepstick": "2, true",
			"invoker_cold_snap": "0, true",
			"invoker_tornado": "1, true",
			"invoker_deafening_blast": "2, true",
			"item_wind_waker": "3, true",
			"rubick_telekinesis": "0, true",
			"warlock_rain_of_chaos": "5, true",
			"pudge_dismember": "0, true",
			"naga_siren_ensnare": "3, true",
			"slardar_slithereen_crush": "1, true",
			"tiny_avalanche": "0, true",
			"ogre_magi_unrefined_fireblast": "2, true",
			"ogre_magi_fireblast": "1, true",
			"monkey_king_boundless_strike": "1, true",
			"sniper_concussive_grenade": "0, true",
			"earth_spirit_petrify": "4, true",
			"item_heavens_halberd": "3, true",
			"lich_sinister_gaze": "1, true",
			"oracle_fortunes_end": "0, true",
			"oracle_fates_edict": "1, true",
			"vengefulspirit_magic_missile": "1, true",
			"vengefulspirit_nether_swap": "2, true",
			"kunkka_ghostship": "3, true",
			"necronomicon_archer_purge": "1, true",
			"necrolyte_reapers_scythe": "0, true",
			"windrunner_shackleshot": "1, true",
			"item_gungir": "0, true",
			"obsidian_destroyer_astral_imprisonment": "0, true",
			"luna_lucent_beam": "0, true",
			"witch_doctor_paralyzing_cask": "1, true",
			"mars_spear": "2, true",
			"shadow_demon_disruption": "0, true",
			"shadow_demon_demonic_purge": "1, true",
			"lion_impale": "1, true",
			"lion_voodoo": "2, true",
			"ember_spirit_searing_chains": "4, true",
			"skeleton_king_hellfire_blast": "2, true",
			"viper_nethertoxin": "2, true",
			"death_prophet_silence": "2, true",
			"item_havoc_hammer": "3, true",
			"sven_storm_bolt": "1, true",
			"crystal_maiden_frostbite": "1, true",
			"snapfire_scatterblast": "3, true",
			"shadow_shaman_shackles": "1, true",
			"axe_berserkers_call": "0, true",
			"bane_nightmare": "2, true",
			"keeper_of_the_light_blinding_light": "1, true",
			"keeper_of_the_light_will_o_wisp": "1, true",
			"item_book_of_shadows": "5, true",
			"nyx_assassin_impale": "0, true",
			"visage_summon_familiars_stone_form": "0, true",
			"abyssal_underlord_pit_of_malice": "2, true",
			"night_stalker_crippling_fear": "3, true",
			"item_nullifier": "3, true",
			"dragon_knight_dragon_tail": "3, true",
			"earthshaker_echo_slam": "1, true",
			"earthshaker_fissure": "0, true",
			"disruptor_glimpse": "1, true",
			"primal_beast_pulverize": "3, true",
			"disruptor_static_storm": "2, true",
			"doom_bringer_doom": "1, true",
			"lone_druid_savage_roar": "4, true",
			"lina_light_strike_array": "0, true",
			"snapfire_firesnap_cookie": "2, true",
			"tusk_walrus_kick": "0, true",
			"tusk_walrus_punch": "1, true",
			"shadow_shaman_voodoo": "0, true"
		  }
		},
		"Settings": {
		  "Default priority": {
			"item_phase_boots": "0, true",
			"item_blink": "1, true",
			"item_cyclone": "2, true",
			"item_sheepstick": "3, true"
		  },
		  "Modifier counter": true,
		  "Multi unit control": true
		},
		"Hotkeys": {
		  "Change dodge mode": "L",
		  "Enable bkb": {
			"Key": "K",
			"Value": false
		  },
		  "Override dodge mode": "MouseX1",
		  "Draw state": false
		},
		"Debug": {
		  "Draw abilities": false,
		  "Draw evade result": false,
		  "Draw obstacles map": false,
		  "Draw intersections": false,
		  "Draw usable abilities": false,
		  "Draw evadable abilities": true
		}
	  }
})

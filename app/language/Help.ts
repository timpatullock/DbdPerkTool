const languageMap: { [key: string]: string } = {
  'help/help_levelicon_killer.png': 'Killer',
  'help/help_levelicon_survivor.png': 'Survivor',
  'help/iconhelp_addons.png': 'Add-Ons',
  'help/iconhelp_altruism.png': 'Altruism',
  'help/iconhelp_archivesgeneral.png': 'Archives (General)',
  'help/iconhelp_archivesquests.png': 'Archives (Quests)',
  'help/iconhelp_archivesrewards.png': 'Archives (Rewards)',
  'help/iconhelp_auras.png': 'Auras',
  'help/iconhelp_basement.png': 'Basement',
  'help/iconhelp_bloodlust.png': 'Bloodlust',
  'help/iconhelp_bloodpoints.png': 'Bloodpoints',
  'help/iconhelp_bloodstains.png': 'Bloodstains',
  'help/iconhelp_bloodweb.png': 'Bloodweb',
  'help/iconhelp_breakinggenerators.png': 'Breaking Generators',
  'help/iconhelp_carrysurvivor.png': 'Carrying Survivors',
  'help/iconhelp_chase.png': 'Chase',
  'help/iconhelp_chests.png': 'Chests',
  'help/iconhelp_cooperation.png': 'Cooperation',
  'help/iconhelp_crows.png': 'Crows',
  'help/iconhelp_dailyrituals.png': 'Daily Rituals',
  'help/iconhelp_dbdlogo.png': 'DBD Logo',
  'help/iconhelp_dying.png': 'Dying',
  'help/iconhelp_endgame.png': 'Endgame Collapse',
  'help/iconhelp_entity.png': 'Entity',
  'help/iconhelp_exitgates.png': 'Exit Gates',
  'help/iconhelp_fear.png': 'Fear',
  'help/iconhelp_generators.png': 'Generators',
  'help/iconhelp_hatch.png': 'Hatch',
  'help/iconhelp_hearing.png': 'Hearing',
  'help/iconhelp_hiddenkiller.png': 'Hidden Killer',
  'help/iconhelp_hookstruggle.png': 'Hook Struggle',
  'help/iconhelp_howtowin_killers.png': 'How To Win (Killers)',
  'help/iconhelp_howtowin_survivors.png': 'How To Win (Survivors)',
  'help/iconhelp_injured.png': 'Injured State',
  'help/iconhelp_interrupt.png': 'Action Interrupt',
  'help/iconhelp_items.png': 'Items',
  'help/iconhelp_killervision.png': 'Killer Vision',
  'help/iconhelp_loadingmissing.png': 'Unused / Loading Missing',
  'help/iconhelp_loadout.png': 'Loadout',
  'help/iconhelp_lockers.png': 'Lockers',
  'help/iconhelp_meathooks.png': 'Meat Hooks',
  'help/iconhelp_missing.png': 'Unused / Missing',
  'help/iconhelp_momentomori.png': 'Mori',
  'help/iconhelp_note.png': 'Note',
  'help/iconhelp_obsession.png': 'Obsession',
  'help/iconhelp_offerings.png': 'Offerings',
  'help/iconhelp_perks.png': 'Perks',
  'help/iconhelp_procedural.png': 'Procedural',
  'help/iconhelp_proficiency.png': 'Proficiency',
  'help/iconhelp_proficiencylist.png': 'Proficiency List',
  'help/iconhelp_sabotage.png': 'Sabotage',
  'help/iconhelp_scratchmarks.png': 'Scratch Marks',
  'help/iconhelp_shrineofsecrets.png': 'Shrine of Secrets',
  'help/iconhelp_skillchecks.png': 'Skill Checks',
  'help/iconhelp_slashing.png': 'Slashing',
  'help/iconhelp_sounds.png': 'Sounds',
  'help/iconhelp_statuseffectlist.png': 'Status Effect List',
  'help/iconhelp_statuseffects.png': 'Status Effects',
  'help/iconhelp_stealth.png': 'Stealth',
  'help/iconhelp_teachables.png': 'Teachables',
  'help/iconhelp_topicmissing.png': 'Unused / Topic Missing',
  'help/iconhelp_totems.png': 'Totems',
  'help/iconhelp_vaultpalettes.png': 'Vaulting / Pallets',
  'helploading/iconhelploading_addons.png': 'Add-Ons',
  'helploading/iconhelploading_bloodpoints.png': 'Bloodpoints',
  'helploading/iconhelploading_cannibal.png': 'Cannibal',
  'helploading/iconhelploading_clown.png': 'Clown',
  'helploading/iconhelploading_crows.png': 'Crows',
  'helploading/iconhelploading_doctor.png': 'Doctor',
  'helploading/iconhelploading_generators.png': 'Generators',
  'helploading/iconhelploading_ghost.png': 'Ghostface',
  'helploading/iconhelploading_hag.png': 'Hag',
  'helploading/iconhelploading_hatch.png': 'Hatch',
  'helploading/iconhelploading_health.png': 'Health',
  'helploading/iconhelploading_hillbilly.png': 'Hillbilly',
  'helploading/iconhelploading_hook.png': 'Hook',
  'helploading/iconhelploading_huntress.png': 'Huntress',
  'helploading/iconhelploading_info.png': 'Info',
  'helploading/iconhelploading_items.png': 'Items',
  'helploading/iconhelploading_killer.png': 'Killer',
  'helploading/iconhelploading_killervision.png': 'Killer Vision',
  'helploading/iconhelploading_legion.png': 'Legion',
  'helploading/iconhelploading_lore.png': 'Lore',
  'helploading/iconhelploading_nightmare.png': 'Nightmare',
  'helploading/iconhelploading_nurse.png': 'Nurse',
  'helploading/iconhelploading_offering.png': 'Offering',
  'helploading/iconhelploading_pig.png': 'Pig',
  'helploading/iconhelploading_plague.png': 'Plague',
  'helploading/iconhelploading_players.png': 'Players',
  'helploading/iconhelploading_settings.png': 'Settings',
  'helploading/iconhelploading_shape.png': 'Shape',
  'helploading/iconhelploading_skillcheck.png': 'Skill Check',
  'helploading/iconhelploading_sound.png': 'Sound',
  'helploading/iconhelploading_spirit.png': 'Spirit',
  'helploading/iconhelploading_survivor.png': 'Survivor',
  'helploading/iconhelploading_totem.png': 'Totem',
  'helploading/iconhelploading_trapper.png': 'Trapper',
  'helploading/iconhelploading_wraith.png': 'Wraith',
  'helploading/qatar/iconhelploading_demogorgon.png': 'Demogorgon',
  'helploading/sweden/iconhelploading_sk.png': 'Oni',
  'helploading/ukraine/iconhelploading_uk.png': 'Deathslinger',
  'helploading/wales/iconhelploading_wales.png': 'Executioner',
  'helploading/aurora/iconhelploading_twins.png': 'The Twins',
  'helploading/yemen/iconhelploading_k21.png': 'Blight',
  'helploading/comet/iconhelploading_trickster.png': 'Trickster'
};

export default function getLanguage(tag) {
  return languageMap[tag] || null;
}

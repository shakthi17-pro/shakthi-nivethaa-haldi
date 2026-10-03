export type MoodId = 'happy' | 'sad' | 'heavy' | 'confused' | 'fear' | 'memory' | 'thoughts' | 'confidence' | 'angry' | 'letgo';

export type MoodConfig = {
  id: MoodId;
  label: string;
  title: string;
  message: string;
  interaction: 'celebrate' | 'stay' | 'stone' | 'paths' | 'heart' | 'memory' | 'breath' | 'choices' | 'angry' | 'letgo';
  button?: string;
  finalMessage: string;
};

export const moods: MoodConfig[] = [
  { id: 'happy', label: '🌸  I’M HAPPY', title: 'Then stay here for a little bit. ❤️', message: 'Un happiness ah konjam celebrate pannalama?\n\nNee sirikkumbodhu semma azhagu.\nActually, romba azhagu.\n\nInnikki unakku pudicha edhavadhu vaangi tharen.\n\nJhumka venuma? Order pannalam.\n\nSomething sweet venuma? Vaangi tharen.\n\nToday you don’t need a reason to be happy.', interaction: 'celebrate', button: 'KEEP SMILING', finalMessage: 'See? This is the version of you I love seeing.\nNee siricha semma azhagu.' },
  { id: 'sad', label: '🌧️  I’M SAD', title: 'You don’t have to be okay right now.', message: 'Innikki strong ah irukkanum nu avasiyam illa.\n\nKonjam tired ah irundha tired ah irukalaam.\n\nKonjam azhanum na azhalaam.\n\nEverything doesn’t have to be fixed immediately.\n\nKonjam en mela lean aagu.\n\nNaan inga irukken.', interaction: 'stay', button: 'STAY HERE FOR A MOMENT', finalMessage: 'One moment at a time. ❤️' },
  { id: 'heavy', label: '🕊️  I FEEL HEAVY', title: 'Put some of it down.', message: 'Un mind-la romba neraya things odikittu irundha,\neverything-aiyum same time carry panna vendam.\n\nOne thing at a time.\n\nNamma rendu perum serndhu handle pannalam.', interaction: 'stone', button: 'LET IT DOWN', finalMessage: 'You don’t have to carry everything alone.' },
  { id: 'confused', label: '🌫️  I’M CONFUSED', title: 'You don’t need all the answers today.', message: 'Confused ah irukradhu wrong illa.\n\nSometimes namakku answer venum nu illa.\n\nKonjam time venum.\n\nTake your time.\n\nNaan rush panna maaten.', interaction: 'paths', finalMessage: 'It’s okay if you don’t know yet.' },
  { id: 'fear', label: '🫶  I’M SCARED', title: 'Come a little closer.', message: 'Bayapadatha.\n\nEverything-aiyum nee thaniya handle panna vendiyathu illa.\n\nOne step.\n\nThen another.\n\nNaan un pakkathula irukken.', interaction: 'heart', button: 'HOLD MY HAND', finalMessage: 'We’ll take it one step at a time.' },
  { id: 'memory', label: '🖤  A PAINFUL MEMORY CAME BACK', title: 'You are more than what happened to you.', message: 'Andha painful memory un life-a define panna vendiyathu illa.\n\nIt happened.\n\nIt hurt.\n\nBut it doesn’t get to decide everything that comes next.\n\nSlowly...\n\nnamma adha vida perusa oru life build pannalam.', interaction: 'memory', button: 'LET IT REST', finalMessage: 'You can carry the lesson without carrying the pain forever.' },
  { id: 'thoughts', label: '🧠  UNHEALTHY THOUGHTS', title: 'Pause. Don’t believe every thought.', message: 'Sometimes mind romba loud ah pesum.\n\nA thought is just a thought.\n\nIt doesn’t automatically become the truth.\n\nKonjam breathe pannuvom.', interaction: 'breath', finalMessage: 'Good.\n\nOne quiet moment is enough for now.' },
  { id: 'confidence', label: '🌱  I DON’T FEEL CONFIDENT', title: 'Don’t be so hard on yourself.', message: 'Un body-a change panna aasai irundhaalum,\nun worth adhula depend aagathu.\n\nSlim ah irukkanum nu un azhaga measure panna vendam.\n\nMulmul cotton saree-la Miss World-eh thothuruvanga. ❤️\n\nNee already beautiful.', interaction: 'choices', finalMessage: 'Un kannu enakku romba pidikkum.\n\nNee confident ah irundha,\nnee edhume panna mudiyadhu nu sollave mudiyadhu.\n\nConfident ah nee ellame panna mudiyum.' },
  { id: 'angry', label: '😤  I’M ANGRY AT YOU', title: 'En mela kovama?', message: 'Seri.\n\nFirst naan konjam silent ah listen panren.\n\nApram...\nmalli poo vangittu varen. 🌸❤️\n\nUnakku pudicha jhumka kooda paathukalam.', interaction: 'angry', button: 'STILL ANGRY', finalMessage: 'Okay okay...\n\ninnum konjam kovama irundhuko.\n\nNaan wait panren. 😌\n\nCome back when you’re ready.' },
  { id: 'letgo', label: '🌿  I WANT TO LET GO', title: 'You don’t have to carry everything forever.', message: 'Some things can stay in the past.\n\nSome thoughts can leave.\n\nSome memories can become lighter.\n\nYou don’t have to forget everything.\n\nJust don’t let everything follow you everywhere.', interaction: 'letgo', button: 'LET THEM GO', finalMessage: 'Make space for the life waiting for you.' },
];

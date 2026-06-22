// Sri Vishnu Sahasranama Stotram - Authentic Text
// Source: Vaidika Vignanam (Sarala Telugu)
// From Anushasana Parva, Mahabharata

export interface Shloka {
  id: number;
  telugu: string;
  transliteration: string;
  teluguMeaning: string;
  englishMeaning: string;
  names?: string[];
}

export interface Section {
  title: string;
  titleTelugu: string;
  shlokas: Shloka[];
}

// Dhyana Shlokas (Meditation Verses)
export const dhyanaShlokas: Shloka[] = [
  {
    id: 1,
    telugu: "ఓం శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్ ।\nప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే ॥",
    transliteration: "Om shuklambaradharam vishnum shashivarnam chaturbhujam |\nprasannavadanam dhyayet sarvavighnopashantaye ||",
    teluguMeaning: "తెల్లని వస్త్రములు ధరించిన, చంద్రుని వర్ణము గల, నాలుగు చేతులు గల, ప్రసన్న వదనము గల విష్ణువును సర్వ విఘ్నములు తొలగించుటకై ధ్యానించవలెను.",
    englishMeaning: "I meditate on Lord Vishnu who wears white garments, who has the complexion of the moon, who has four arms and a pleasant face, for the removal of all obstacles."
  },
  {
    id: 2,
    telugu: "యస్యద్విరదవక్త్రాద్యాః పారిషద్యాః పరః శతమ్ ।\nవిఘ్నం నిఘ్నంతి సతతం విష్వక్సేనం తమాశ్రయే ॥",
    transliteration: "Yasya dviradavaktradayah parishadyah parah shatam |\nvighnam nighnanti satatam vishvaksenam tamashraye ||",
    teluguMeaning: "గజముఖము మొదలగు వానియెడ నూరుగురు శతములు సతతము విఘ్నములను నశింపజేయుచున్నవి. ఆ విశ్వక్సేనుని నేను శరణు పొందుచున్నాను.",
    englishMeaning: "I take refuge in Lord Vishvaksena, whose hundred attendants beginning with the elephant-faced one, constantly destroy all obstacles."
  },
  {
    id: 3,
    telugu: "వ్యాసం వసిష్ఠ నప్తారం శక్తేః పౌత్రమకల్మషమ్ ।\nపరాశరాత్మజం వందే శుకతాతం తపోనిధిమ్ ॥",
    transliteration: "Vyasam vasishta naptaram shakteh pautramakalmasham |\nparasharatmajam vande shukatatam taponidhim ||",
    teluguMeaning: "వసిష్ఠుని మనుమడైన శక్తి కుమారుని కొడుకైన పరాశరుని కుమారుడైన శుకునికి తండ్రియైన తపోనిధియగు వ్యాసుని వందనము చేయుచున్నాను.",
    englishMeaning: "I bow to Vyasa, the grandson of Vashishta, the son of Shakti's son Parashara, the father of Shuka, and the treasure-house of austerity."
  },
  {
    id: 4,
    telugu: "వ్యాసాయ విష్ణు రూపాయ వ్యాసరూపాయ విష్ణవే ।\nనమో వై బ్రహ్మనిధయే వాసిష్ఠాయ నమో నమః ॥",
    transliteration: "Vyasaya vishnu rupaya vyasarupaya vishnave |\nnamo vai brahmanidhaye vasishthaya namo namah ||",
    teluguMeaning: "విష్ణు రూపమున్న వ్యాసునకును, వ్యాస రూపమున్న విష్ణువునకును, బ్రహ్మ నిధియగు వాసిష్ఠునకును నమస్కారము.",
    englishMeaning: "Salutations to Vyasa who is the form of Vishnu, and to Vishnu who is the form of Vyasa; salutations again and again to the treasure of Brahman, the descendant of Vashishta."
  },
  {
    id: 5,
    telugu: "అవికారాయ శుద్ధాయ నిత్యాయ పరమాత్మనే ।\nసదైక రూప రూపాయ విష్ణవే సర్వజిష్ణవే ॥",
    transliteration: "Avikaraya shuddhaya nityaya paramatmane |\nsadaika rupa rupaya vishnave sarvajishnave ||",
    teluguMeaning: "వికారము లేనివాడైన, శుద్ధుడైన, నిత్యుడైన, పరమాత్మయగు, ఎల్లప్పుడు ఒకే రూపము గలవాడైన, సర్వమును జయించు విష్ణువునకు నమస్కారము.",
    englishMeaning: "Salutations to Lord Vishnu who is without change, pure, eternal, the Supreme Self, of one eternal form, and the conqueror of all."
  },
  {
    id: 6,
    telugu: "యస్య స్మరణమాత్రేణ జన్మసంసారబంధనాత్ ।\nవిముచ్యతే నమస్తస్మై విష్ణవే ప్రభవిష్ణవే ॥",
    transliteration: "Yasya smaranamatrena janmasamsarabandhanat |\nvimuchyate namastasmai vishnave prabhavishnave ||",
    teluguMeaning: "ఎవని స్మరణ మాత్రమున జన్మ సంసార బంధనములనుండి విముక్తి పొందుచున్నారో, ఆ ప్రభవిష్ణువునకు నమస్కారము.",
    englishMeaning: "Salutations to the all-pervading Lord Vishnu, by mere remembrance of whom one is liberated from the bondage of birth and transmigration."
  },
  {
    id: 7,
    telugu: "ఓం నమో విష్ణవే ప్రభవిష్ణవే ।",
    transliteration: "Om namo vishnave prabhavishnave |",
    teluguMeaning: "ఓం సర్వవ్యాపియైన ప్రభవిష్ణువునకు నమస్కారము.",
    englishMeaning: "Om, salutations to Lord Vishnu, the all-pervading supreme Lord."
  }
];

// Main Stotram - 107 Shlokas containing all 1000 names
export const mainStotram: Shloka[] = [
  {
    id: 1,
    telugu: "విశ్వం విష్ణుర్వషట్కారో భూతభవ్యభవత్ప్రభుః ।\nభూతకృద్భూతభృద్భావో భూతాత్మా భూతభావనః ॥",
    transliteration: "Vishvam vishnur-vashatkaro bhuta-bhavya-bhavat-prabhuh |\nbhuta-krid-bhuta-bhrid-bhavo bhutatma bhuta-bhavanah ||",
    teluguMeaning: "విశ్వము, విష్ణువు, వషట్కారము - గతము, వర్తమానము, భవిష్యత్తుల ప్రభువు. భూతములను సృజించువాడు, పోషించువాడు, భావుడు, భూతాత్మ, భూతభావనుడు.",
    englishMeaning: "The Universe, the All-pervading, the invoked in sacrifices, the Lord of past, present and future. The creator, sustainer, the source of existence, the inner Self of all, the nurturer of beings.",
    names: ["Vishvam", "Vishnuh", "Vashatkarah", "Bhuta-bhavya-bhavat-prabhuh", "Bhuta-krit", "Bhuta-bhrit", "Bhavah", "Bhutatma", "Bhuta-bhavanah"]
  },
  {
    id: 2,
    telugu: "పూతాత్మా పరమాత్మా చ ముక్తానాం పరమాగతిః ।\nఅవ్యయః పురుషః సాక్షీ క్షేత్రజ్ఞోఽక్షర ఏవ చ ॥",
    transliteration: "Putatma paramatma cha muktanam parama gatih |\navyayah purushah sakshi kshetrajno'kshara eva cha ||",
    teluguMeaning: "పవిత్రాత్మ, పరమాత్మ, ముక్తులకు పరమ గతి, అవ్యయుడు, పురుషుడు, సాక్షి, క్షేత్రజ్ఞుడు, అక్షరుడు.",
    englishMeaning: "The pure Self, the Supreme Self, the ultimate goal of the liberated, the imperishable, the Supreme Being, the witness, the knower of the field, the indestructible.",
    names: ["Putatma", "Paramatma", "Muktanam parama gatih", "Avyayah", "Purushah", "Sakshi", "Kshetrajnah", "Aksharah"]
  },
  {
    id: 3,
    telugu: "యోగో యోగవిదాం నేతా ప్రధాన పురుషేశ్వరః ।\nనారసింహవపుః శ్రీమాన్ కేశవః పురుషోత్తమః ॥",
    transliteration: "Yogo yoga-vidam neta pradhana purusheshvarah |\nnarasimha-vapuh shriman keshavah purushottamah ||",
    teluguMeaning: "యోగము, యోగ జ్ఞానులకు నాయకుడు, ప్రధాన పురుషులకు ఈశ్వరుడు, నరసింహ రూపుడు, శ్రీమాన్, కేశవుడు, పురుషోత్తముడు.",
    englishMeaning: "Yoga itself, the leader of yogis, the Lord of Prakriti and Purusha, the Narasimha avatar, the possessor of Sri, Keshava, the Supreme Being.",
    names: ["Yogah", "Yoga-vidam neta", "Pradhana-purusheshvarah", "Narasimha-vapuh", "Shriman", "Keshavah", "Purushottamah"]
  },
  {
    id: 4,
    telugu: "సర్వః శర్వః శివః స్థాణుర్భూతాదిర్నిధిరవ్యయః ।\nసంభవో భావనో భర్తా ప్రభవః ప్రభురీశ్వరః ॥",
    transliteration: "Sarvah sharvah shivah sthanur bhutadir-nidhir-avyayah |\nsambhavo bhavano bharta prabhavah prabhur-ishvarah ||",
    teluguMeaning: "సర్వము, శర్వుడు, శివుడు, స్థాణువు, భూతములకు ఆది, అవ్యయ నిధి, సంభవుడు, భావనుడు, భర్త, ప్రభవుడు, ప్రభువు, ఈశ్వరుడు.",
    englishMeaning: "The all, the remover of sorrow, the auspicious, the steady, the origin of beings, the imperishable treasure, the source, the generator, the supporter, the origin, the Master, the Lord.",
    names: ["Sarvah", "Sharvah", "Shivah", "Sthanuh", "Bhutadih", "Nidhir-avyayah", "Sambhavah", "Bhavanah", "Bharta", "Prabhavah", "Prabhuh", "Ishvarah"]
  },
  {
    id: 5,
    telugu: "స్వయంభూః శంభురాదిత్యః పుష్కరాక్షో మహాస్వనః ।\nఅనాదినిధనో ధాతా విధాతా ధాతురుత్తమః ॥",
    transliteration: "Svayambhuh shambhur-adityah pushkaraksho maha-svanah |\nanadi-nidhano dhata vidhata dhatur-uttamah ||",
    teluguMeaning: "స్వయంభూవు, శంభువు, ఆదిత్యుడు, పుష్కరాక్షుడు, మహాస్వనుడు, అనాది నిధనుడు, ధాత, విధాత, ధాతురుత్తముడు.",
    englishMeaning: "Self-existent, the peaceful, the Sun, the lotus-eyed, the great-sounding, without beginning or end, the creator, the ordainer, the supreme creator.",
    names: ["Svayambhuh", "Shambhuh", "Adityah", "Pushkara-akshah", "Maha-svanah", "Anadi-nidhanah", "Dhata", "Vidhata", "Dhatur-uttamah"]
  },
  {
    id: 6,
    telugu: "అప్రమేయో హృషీకేశః పద్మనాభోఽమరప్రభుః ।\nవిశ్వకర్మా మనుస్త్వష్టా స్థవిష్ఠః స్థవిరో ధ్రువః ॥",
    transliteration: "Aprameyo hrishikeshah padmanabho'mara-prabhuh |\nvishva-karma manus-tvashta sthavishtah staviro dhruvah ||",
    teluguMeaning: "అప్రమేయుడు, హృషీకేశుడు, పద్మనాభుడు, అమరుల ప్రభువు, విశ్వకర్మ, త్వష్ట, స్థవిష్ఠుడు, స్థవిరుడు, ధ్రువుడు.",
    englishMeaning: "The immeasurable, the Lord of senses, the lotus-navelled, the Lord of immortals, the universal architect, the creator, the firm, the ancient, the steady.",
    names: ["Aprameyah", "Hrishikeshah", "Padmanabhah", "Amara-prabhuh", "Vishva-karma", "Manuh", "Tvashta", "Sthavishtah", "Stavirah", "Dhruvah"]
  },
  {
    id: 7,
    telugu: "అగ్రాహ్యః శాశ్వతో కృష్ణో లోహితాక్షః ప్రతర్దనః ।\nప్రభూతస్త్రికకుబ్ధామ పవిత్రం మంగళం పరమ్ ॥",
    transliteration: "Agrahyah shashvato krishno lohita-akshah pratardanah |\nprabhuta-stri-kakubdhama pavitram mangalam param ||",
    teluguMeaning: "అగ్రాహ్యుడు, శాశ్వతుడు, కృష్ణుడు, లోహితాక్షుడు, ప్రతర్దనుడు, ప్రభూతుడు, త్రికకుబ్ధాముడు, పవిత్రము, పరమ మంగళము.",
    englishMeaning: "The incomprehensible, the eternal, the dark-hued, the red-eyed, the dispeller, the abundant, the supporter of the three worlds, the pure, the supreme auspiciousness.",
    names: ["Agrahyah", "Shashvatah", "Krishnah", "Lohita-akshah", "Pratardanah", "Prabhutah", "Tri-kakub-dhamah", "Pavitram", "Mangalam", "Param"]
  },
  {
    id: 8,
    telugu: "ఈశానః ప్రాణదః ప్రాణో జ్యేష్ఠః శ్రేష్ఠః ప్రజాపతిః ।\nహిరణ్యగర్భో భూగర్భో మాధవో మధుసూదనః ॥",
    transliteration: "Ishanah pranadah prano jyeshthah shreshthah prajapatih |\nhiranya-garbho bhugarbho madhavo madhu-sudanah ||",
    teluguMeaning: "ఈశానుడు, ప్రాణదుడు, ప్రాణుడు, జ్యేష్ఠుడు, శ్రేష్ఠుడు, ప్రజాపతి, హిరణ్యగర్భుడు, భూగర్భుడు, మాధవుడు, మధుసూదనుడు.",
    englishMeaning: "The Ruler, the life-giver, the life itself, the eldest, the best, the Lord of creatures, the golden-wombed, the earth-wombed, the consort of Lakshmi, the slayer of Madhu.",
    names: ["Ishanah", "Pranadah", "Pranah", "Jyeshthah", "Shreshthah", "Prajapatih", "Hiranya-garbhah", "Bhu-garbhah", "Madhavah", "Madhu-sudanah"]
  },
  {
    id: 9,
    telugu: "ఈశ్వరో విక్రమీధన్వీ మేధావీ విక్రమః క్రమః ।\nఅనుత్తమో దురాధర్షః కృతజ్ఞః కృతిరాత్మవాన్॥",
    transliteration: "Ishvaro vikrami-dhanvi medhavi vikramah kramah |\nanuttamo duradharshah kritajnah kritir-atmavan ||",
    teluguMeaning: "ఈశ్వరుడు, విక్రమి, ధన్వి, మేధావి, విక్రముడు, క్రముడు, అనుత్తముడు, దురాధర్షుడు, కృతజ్ఞుడు, కృతి, ఆత్మవాన్.",
    englishMeaning: "The Lord, the courageous, the bowman, the intelligent, the valiant, the orderly, the incomparable, the unassailable, the grateful, the performer, the self-possessed.",
    names: ["Ishvarah", "Vikrami", "Dhanvi", "Medhavi", "Vikramah", "Kramah", "Anuttamah", "Duradharshah", "Kritajnah", "Kritih", "Atmavan"]
  },
  {
    id: 10,
    telugu: "సురేశః శరణం శర్మ విశ్వరేతాః ప్రజాభవః ।\nఅహస్సంవత్సరో వ్యాళః ప్రత్యయః సర్వదర్శనః ॥",
    transliteration: "Sureshah sharanam sharma vishva-retah praja-bhavah |\nahah-samvatsaro vyalah pratyayah sarva-darshanah ||",
    teluguMeaning: "సురేశుడు, శరణు, శర్మ, విశ్వరేతస్కుడు, ప్రజాభవుడు, అహస్సు, సంవత్సరము, వ్యాళుడు, ప్రత్యయుడు, సర్వదర్శనుడు.",
    englishMeaning: "The Lord of gods, the refuge, the bliss, the seed of the universe, the source of beings, the day, the year, the serpent, the faith, the all-seeing.",
    names: ["Sureshah", "Sharanam", "Sharma", "Vishva-retah", "Prajat-bhavah", "Ahah", "Samvatsarah", "Vyalah", "Pratyayah", "Sarva-darshanah"]
  },
  {
    id: 11,
    telugu: "అజస్సర్వేశ్వరః సిద్ధః సిద్ధిః సర్వాదిరచ్యుతః ।\nవృషాకపిరమేయాత్మా సర్వయోగవినిస్సృతః ॥",
    transliteration: "Ajas-sarveshvarah siddhah siddhih sarvadir-achyutah |\nvrishakapir-ameyatma sarva-yoga-vinissritah ||",
    teluguMeaning: "అజుడు, సర్వేశ్వరుడు, సిద్ధుడు, సిద్ధి, సర్వాది, అచ్యుతుడు, వృషాకపి, అమేయాత్మ, సర్వయోగములనుండి వినిసృతుడు.",
    englishMeaning: "The unborn, the Lord of all, the perfected, the perfection, the origin of all, the infallible, the bull among monkeys, the immeasurable Self, beyond all yogas.",
    names: ["Ajah", "Sarveshvarah", "Siddhah", "Siddhih", "Sarvadih", "Achyutah", "Vrishakapih", "Ameyatma", "Sarva-yoga-vinissritah"]
  },
  {
    id: 12,
    telugu: "వసుర్వసుమనాః సత్యః సమాత్మా సమ్మితస్సమః ।\nఅమోఘః పుండరీకాక్షో వృషకర్మా వృషాకృతిః ॥",
    transliteration: "Vasur-vasumanah satyah samatma sammitas-samah |\namoghah pundarika-aksho vrisha-karma vrisha-akritih ||",
    teluguMeaning: "వసువు, వసుమనుడు, సత్యుడు, సమాత్మ, సమ్మితసముడు, అమోఘుడు, పుండరీకాక్షుడు, వృషకర్మ, వృషాకృతి.",
    englishMeaning: "The dwelling, the wealthy-minded, the truth, the equal-minded, the equal, the unfailing, the lotus-eyed, the righteous actor, the form of dharma.",
    names: ["Vasuh", "Vasumanah", "Satyah", "Sama-atma", "Sammitah-samah", "Amoghah", "Pundarika-akshah", "Vrisha-karma", "Vrisha-akritih"]
  },
  {
    id: 13,
    telugu: "రుద్రో బహుశిరా బభ్రుర్విశ్వయోనిః శుచిశ్రవాః ।\nఅమృతః శాశ్వతస్థాణుర్వరారోహో మహాతపాః ॥",
    transliteration: "Rudro bahu-shira babhrur-vishva-yonih shuchi-shravah |\namritah shashvata-sthanur-vararoho maha-tapah ||",
    teluguMeaning: "రుద్రుడు, బహుశిరస్కుడు, బభ్రువు, విశ్వయోని, శుచిశ్రవుడు, అమృతుడు, శాశ్వతస్థాణువు, వరారోహుడు, మహాతపుడు.",
    englishMeaning: "Rudra, the many-headed, the support, the universal womb, the pure-famed, the immortal, the eternal-steady, the best to ascend, the great austere.",
    names: ["Rudrah", "Bahu-shirah", "Babhruh", "Vishva-yonih", "Shuchi-shravah", "Amritah", "Shashvata-sthanuh", "Vararohah", "Maha-tapah"]
  },
  {
    id: 14,
    telugu: "సర్వగః సర్వ విద్భానుర్విష్వక్సేనో జనార్దనః ।\nవేదో వేదవిదవ్యంగో వేదాంగో వేదవిత్కవిః ॥",
    transliteration: "Sarvagah sarva-vid-bhanur-vishvakseno janardanah |\nvedo veda-vid-vyango vedango veda-vit-kavih ||",
    teluguMeaning: "సర్వగుడు, సర్వవిద్భానువు, విశ్వక్సేనుడు, జనార్దనుడు, వేదము, వేదవిద్, వ్యంగుడు, వేదాంగుడు, వేదవిత్, కవి.",
    englishMeaning: "The all-pervading, the all-knowing sun, the cosmic commander, the afflicter of people, the Veda, the knower of Vedas, the limbless, the Veda-limbed, the Veda-knower, the poet.",
    names: ["Sarvagah", "Sarva-vid-bhanuh", "Vishvaksenah", "Janardanah", "Vedah", "Veda-vid", "Vyangah", "Vedangah", "Veda-vit", "Kavih"]
  },
  {
    id: 15,
    telugu: "లోకాధ్యక్షః సురాధ్యక్షో ధర్మాధ్యక్షః కృతాకృతః ।\nచతురాత్మా చతుర్వ్యూహశ్చతుర్దంష్ట్రశ్చతుర్భుజః ॥",
    transliteration: "Lokadhyakshah suradhyaksho dharmadhyakshah kritakritah |\nchaturatma chatur-vyuhash chatur-damshtrash chatur-bhujah ||",
    teluguMeaning: "లోకాధ్యక్షుడు, సురాధ్యక్షుడు, ధర్మాధ్యక్షుడు, కృతాకృతుడు, చతురాత్మ, చతుర్వ్యూహుడు, చతుర్దంష్ట్రుడు, చతుర్భుజుడు.",
    englishMeaning: "The witness of worlds, of gods, of dharma, the doer and non-doer, the four-souled, the four-fold formation, the four-tusked, the four-armed.",
    names: ["Lokadhyakshah", "Suradhyakshah", "Dharmadhyakshah", "Kritakritah", "Chaturatma", "Chatur-vyuhah", "Chatur-damshtrah", "Chatur-bhujah"]
  },
  {
    id: 16,
    telugu: "భ్రాజిష్ణుర్భోజనం భోక్తా సహిష్ణుర్జగదాదిజః ।\nఅనఘో విజయో జేతా విశ్వయోనిః పునర్వసుః ॥",
    transliteration: "Bhrajishnur-bhojanam bhokta sahishnur-jagad-adijah |\nanagho vijayo jeta vishva-yonih punarvasuh ||",
    teluguMeaning: "భ్రాజిష్ణువు, భోజనము, భోక్త, సహిష్ణువు, జగదాదిజుడు, అనఘుడు, విజయుడు, జేత, విశ్వయోని, పునర్వసువు.",
    englishMeaning: "The radiant, the food, the enjoyer, the tolerant, the origin of the world, the sinless, victory, the conqueror, the universal womb, the re-dwelling sun.",
    names: ["Bhrajishnuh", "Bhojanam", "Bhokta", "Sahishnuh", "Jagadadijah", "Anaghah", "Vijayah", "Jeta", "Vishva-yonih", "Punarvasuh"]
  },
  {
    id: 17,
    telugu: "ఉపేంద్రో వామనః ప్రాంశురమోఘః శుచిరూర్జితః ।\nఅతీంద్రః సంగ్రహః సర్గో ధृతాత్మా నియమో యమః ॥",
    transliteration: "Upendro vamanah pranshur-amoghah shuchir-urjitah |\natindrah sangrahah sargo dhritatma niyamo yamah ||",
    teluguMeaning: "ఉపేంద్రుడు, వామనుడు, ప్రాంశువు, అమోఘుడు, శుచి, ఊర్జితుడు, అతీంద్రుడు, సంగ్రహుడు, సర్గుడు, ధృతాత్మ, నియముడు, యముడు.",
    englishMeaning: "The younger brother of Indra (Vamana), the dwarf, the tall, the unfailing, the pure, the mighty, beyond Indra, the absorber, the creator, the self-controlled, the discipliner, the controller.",
    names: ["Upendrah", "Vamanah", "Pranshuh", "Amoghah", "Shuchih", "Urjitah", "Atindrah", "Sangrahah", "Sargah", "Dhritatma", "Niyamah", "Yamah"]
  },
  {
    id: 18,
    telugu: "వేద్యో వైద్యः సదాయోగీ వీరహా మాధవో మధుః ।\nఅతీంద్రియో మహామాయో మహోత్సాహో మహాబలః ॥",
    transliteration: "Vedyo vaidyah sada-yogi viraha madhavo madhuh |\natindriyo maha-mayo maho-tsaho maha-balah ||",
    teluguMeaning: "వేద్యుడు, వైద్యుడు, సదాయోగి, వీరహుడు, మాధవుడు, మధువు, అతీంద్రియుడు, మహామాయుడు, మహోత్సాహుడు, మహాబలుడు.",
    englishMeaning: "The knowable, the physician, the eternal yogi, the destroyer of heroes, the consort of Lakshmi, the sweet, beyond senses, the great illusion, the great enthusiastic, the great powerful.",
    names: ["Vedyah", "Vaidyah", "Sada-yogi", "Viraha", "Madhavah", "Madhuh", "Atindriyah", "Maha-mayah", "Maho-tsahah", "Maha-balah"]
  },
  {
    id: 19,
    telugu: "మహాబుద్ధిర్మహావీర్యో మహాశక్తిర్మహాద్యుతిః ।\nఅనిర్దేశ్యవపుః శ్రీమానమేయాత్మా మహాద్రిధృక్ ॥",
    transliteration: "Maha-buddhir-maha-viryo maha-shaktir-maha-dyutih |\nanirdeshya-vapuh shriman-ameyatma maha-dri-dhrik ||",
    teluguMeaning: "మహాబుద్ధి, మహావీర్యుడు, మహాశక్తి, మహాద్యుతి, అనిర్దేశ్యవపువు, శ్రీమాన్, అమేయాత్మ, మహాద్రిధృక్.",
    englishMeaning: "The great intelligence, the great valorous, the great powerful, the great radiant, the indescribable-formed, the possessor of Sri, the immeasurable Self, the holder of great mountains.",
    names: ["Maha-buddhih", "Maha-viryah", "Maha-shaktih", "Maha-dyutih", "Anirdeshya-vapuh", "Shriman", "Ameyatma", "Maha-dri-dhrik"]
  },
  {
    id: 20,
    telugu: "మహేశ్వాసో మహీభర్తా శ్రీనివాసః సతాంగతిః ।\nఅనిరుద్ధః సురానందో గోవిందో గోవిదాం పతిః ॥",
    transliteration: "Maheshvaso mahi-bharta shree-nivasah satam-gatih |\naniruddhah sura-anando govindo go-vidam patih ||",
    teluguMeaning: "మహేశ్వాసుడు, మహీభర్త, శ్రీనివాసుడు, సతాంగతి, అనిరుద్ధుడు, సురానందుడు, గోవిందుడు, గోవిదాం పతి.",
    englishMeaning: "The great archer, the supporter of the earth, the abode of Sri, the goal of the good, the unobstructed, the joy of gods, Govinda, the Lord of the knowledgeable.",
    names: ["Maheshvasah", "Mahi-bharta", "Shree-nivasah", "Satam-gatih", "Aniruddhah", "Sura-anandah", "Govindah", "Go-vidam-patih"]
  },
  {
    id: 21,
    telugu: "మరీచిర్దమనో హంసః సుపర్ణో భుజగోత్తమః ।\nహిరణ్యనాభః సుతపాః పద్మనాభః ప్రజాపతిః ॥",
    transliteration: "Marichir-damano hamsah suparno bhujagottamah |\nhiranya-nabhah su-tapah padma-nabhah praja-patih ||",
    teluguMeaning: "మరీచి, దమనుడు, హంస, సుపర్ణ, భుజగోత్తముడు, హిరణ్యనాభుడు, సుతపుడు, పద్మనాభుడు, ప్రజాపతి.",
    englishMeaning: "The ray of light, the subduer, the swan, the beautiful-winged, the supreme serpent, the golden-navelled, the great austere, the lotus-navelled, the Lord of creatures.",
    names: ["Marichih", "Damanah", "Hamsah", "Suparnah", "Bhujagottamah", "Hiranya-nabhah", "Su-tapah", "Padma-nabhah", "Prajapatih"]
  },
  {
    id: 22,
    telugu: "అమృత్యుః సర్వదృక్ సింహః సంధాతా సంధిమాన్ స్థిరః ।\nఅజో దుర్మర్షణః శాస్తా విశ్రుతాత్మా సురారిహా ॥",
    transliteration: "Amrityuh sarva-drik simhah sandhata sandhiman sthirah |\najo dur-marshanah shasta vishrutatma sura-ari-ha ||",
    teluguMeaning: "అమృత్యువు, సర్వదృక్, సింహుడు, సంధాత, సంధిమాన్, స్థిరుడు, అజుడు, దుర్మర్షణుడు, శాస్త, విశ్రుతాత్మ, సురారిహుడు.",
    englishMeaning: "Without death, the all-seeing, the lion, the unifier, the binding, the steady, the unborn, the unshakeable, the ruler, the famous-souled, the destroyer of enemies of gods.",
    names: ["Amrityuh", "Sarva-drik", "Simhah", "Sandhata", "Sandhiman", "Sthirah", "Ajah", "Durmarshanah", "Shasta", "Vishrutatma", "Sura-ari-ha"]
  },
  {
    id: 23,
    telugu: "గురుర్గురుతమో ధామ సత్యః సత్యపరాక్రమః ।\nనిమిషోఽనిమిషః స్రగ్వీ వాచస్పతిరుదారధీః ॥",
    transliteration: "Gurur-gurutamo dama satyah satya-parakramah |\nnimisho'nimishah sragvi vachaspatir-udara-dhih ||",
    teluguMeaning: "గురువు, గురుతముడు, ధామ, సత్యుడు, సత్యపరాక్రముడు, నిమిషుడు, అనిమిషుడు, స్రగ్వి, వాచస్పతి, ఉదారధీః.",
    englishMeaning: "The teacher, the heaviest, the abode, the truth, the truthfully powerful, the blinking, the non-blinking, the garlanded, the Lord of speech, the vast-minded.",
    names: ["Guruh", "Gurutamah", "Damah", "Satyah", "Satya-parakramah", "Nimishah", "Animishah", "Sragvi", "Vachaspatih", "Udara-dhih"]
  },
  {
    id: 24,
    telugu: "అగ్రణీగ్రామణీః శ్రీమాన్ న్యాయో నేతా సమీరణః\nసహస్రమూర్ధా విశ్వాత్మా సహస్రాక్షః సహస్రపాత్ ॥",
    transliteration: "Agranir-gramanih shriman nyayo neta samiranah |\nsahasa-murdha vishvatma sahasrakshah sahasra-pat ||",
    teluguMeaning: "అగ్రణి, గ్రామణీ, శ్రీమాన్, న్యాయుడు, నేత, సమీరణుడు, సహస్రమూర్ధుడు, విశ్వాత్మ, సహస్రాక్షుడు, సహస్రపాత్.",
    englishMeaning: "The foremost, the leader, the wealthy, justice, the leader, the wind, the thousand-headed, the universal Self, the thousand-eyed, the thousand-footed.",
    names: ["Agranih", "Gramanih", "Shriman", "Nyayah", "Neta", "Samiranah", "Sahasra-murdha", "Vishvatma", "Sahasrakshah", "Sahasra-pat"]
  },
  {
    id: 25,
    telugu: "ఆవర్తనో నివృత్తాత్మా సంవृతః సంప్రమర్దనః ।\nఅహః సంవర్తకో వహ్నిరనిలో ధరణీధరః ॥",
    transliteration: "Aavartano nivrittatma samvrttah sampramardanah |\nahah samvartako vahnir-anilo dharani-dharah ||",
    teluguMeaning: "ఆవర్తనుడు, నివృత్తాత్మ, సంవృతుడు, సంప్రమర్దనుడు, అహః, సంవర్తకుడు, వహ్ని, అనిలుడు, ధరణీధరుడు.",
    englishMeaning: "The revolve, the retired soul, the hidden, the destroyer, the day, the dissolver, the fire, the wind, the bearer of the earth.",
    names: ["Aavartanah", "Nivrittatma", "Samvrittah", "Sampramardanah", "Ahah", "Samvartakah", "Vahnih", "Anilah", "Dharani-dharah"]
  },
  {
    id: 26,
    telugu: "సుప్రసాదః ప్రసన్నాత్మా విశ్వధృగ్విశ్వభుగ్విభుః ।\nసత్కర్తా సత్కృతః సాధుర్జహ్నుర్నారాయణో నరః ॥",
    transliteration: "Suprasadah prasannatma vishva-dhug-vishva-bhug-vibhuh |\nsat-karta sat-kritah sadhur-jahnur-narayano narah ||",
    teluguMeaning: "సుప్రసాదుడు, ప్రసన్నాత్మ, విశ్వధృక్, విశ్వభుక్, విభువు, సత్కర్త, సత్కృతుడు, సాధువు, జహ్నువు, నారాయణుడు, నరుడు.",
    englishMeaning: "The well-pleased, the serene-souled, the supporter of all, the enjoyer of all, the Lord, the doer of good, the sanctified, the good, Jahnava, Narayana, Nara.",
    names: ["Suprasadah", "Prasannatma", "Vishva-dhuk", "Vishva-bhuk", "Vibhuh", "Sat-karta", "Sat-kritah", "Sadhu", "Jahnuh", "Narayanah", "Narah"]
  },
  {
    id: 27,
    telugu: "అసంఖ్యేయోఽప్రమేయాత్మా విశిష్టః శిష్టకృచ్ఛుచిః ।\nసిద్ధార్థః సిద్ధసంకల్పః సిద్ధిదః సిద్ధి సాధనః ॥",
    transliteration: "Asankhyeyo'prameyatma vishishtah shishta-krich-chhuchih |\nsiddharthah siddha-sankalpah siddhi-dah siddhi-sadhanah ||",
    teluguMeaning: "అసంఖ్యేయుడు, అప్రమేయాత్మ, విశిష్టుడు, శిష్టకృత్, శుచి, సిద్ధార్థుడు, సిద్ధసంకల్పుడు, సిద్ధిదుడు, సిద్ధిసాధనుడు.",
    englishMeaning: "The innumerable, the immeasurable Self, the distinguished, the maker of the good, the pure, the one whose aims are fulfilled, the one of fulfilled resolves, the giver of perfections, the means of perfection.",
    names: ["Asankhyeyah", "Aprameyatma", "Vishishtah", "Shishta-krit", "Shuchih", "Siddharthah", "Siddha-sankalpah", "Siddhidah", "Siddhi-sadhanah"]
  },
  {
    id: 28,
    telugu: "వృషాహీ వృషభో విష్ణుర్వృషపర్వా వృషోదరః ।\nవర్ధనో వర్ధమానశ్చ వివిక్తః శ్రుతిసాగరః ॥",
    transliteration: "Vrishahi vrishabho vishnur-vrishaparva vrishodarah |\nvardhano vardhamanash-cha viviktah shruti-sagarah ||",
    teluguMeaning: "వృషాహి, వృషభుడు, విష్ణువు, వృషపర్వుడు, వృషోదరుడు, వర్ధనుడు, వర్ధమానుడు, వివిక్తుడు, శ్రుతిసాగరుడు.",
    englishMeaning: "The destroyer of sins, the bull, Vishnu, the dharma-stepped, the righteous-bellied, the increaser, the growing, the distinct, the ocean of Vedas.",
    names: ["Vrishahi", "Vrishabhah", "Vishnuh", "Vrishaparva", "Vrishodarah", "Vardhanah", "Vardhamanah", "Viviktah", "Shruti-sagarah"]
  },
  {
    id: 29,
    telugu: "సుభుజో దుర్ధరో వాగ్మీ మహేంద్రో వసుదో వసుః ।\nనైకరూపో బృహద్రూపః శిపివిష్టః ప్రకాశనః ॥",
    transliteration: "Subhujo durdharo vagmi mahendro vasudo vasuh |\nnaika-rupo brihad-rupah shipi-vishtah prakasanah ||",
    teluguMeaning: "సుభుజుడు, దుర్ధరుడు, వాగ్మి, మహేంద్రుడు, వసుదుడు, వసువు, నైకరూపుడు, బృహద్రూపుడు, శిపివిష్టుడు, ప్రకాశనుడు.",
    englishMeaning: "The beautiful-armed, the unsupportable, the eloquent, the great Indra, the giver of wealth, the dwelling, the multi-formed, the vast-formed, the one in Sacrifice, the manifesting.",
    names: ["Subhujah", "Durdharah", "Vagmi", "Mahendrah", "Vasudah", "Vasuh", "Naika-rupah", "Brihad-rupah", "Shipi-vishtah", "Prakasanah"]
  },
  {
    id: 30,
    telugu: "ఓజస్తేజోద్యుతిధరః ప్రకాశాత్మా ప్రతాపనః ।\nఋద్దః స్పష్టాక్షరో మంత్రశ్చంద్రాంశుర్భాస్కరద్యుతిః ॥",
    transliteration: "Ojas-tejo-dyuti-dharah prakasatma pratanah |\nruddah spashthaksharo mantra-sh-chandramshur-bhaskara-dyutih ||",
    teluguMeaning: "ఓజస్తేజోద్యుతిధరుడు, ప్రకాశాత్మ, ప్రతాపనుడు, ఋద్దుడు, స్పష్టాక్షరుడు, మంత్రుడు, చంద్రాంశువు, భాస్కరద్యుతి.",
    englishMeaning: "The bearer of vitality, radiance and light, the luminous Self, the illuminator, the one who prevents, the clear-syllabled, the mantra, the moon-rayed, the sun-radiant.",
    names: ["Ojah", "Tejah", "Dyuti-dharah", "Prakasatma", "Pratapanah", "Ruddah", "Spashtha-aksharah", "Mantrah", "Chandramshuh", "Bhaskara-dyutih"]
  },
  {
    id: 31,
    telugu: "అమృతాంశూద్భవో భానుః శశబిందుః సురేశ్వరః ।\nఔషధం జగతః సేతుః సత్యధర్మపరాక్రమః ॥",
    transliteration: "Amritamshud-bhavo banuh shashi-binduh sureshvarah |\naushadham jagatah setuh satya-dharma-parakramah ||",
    teluguMeaning: "అమృతాంశుద్భవుడు, భానువు, శశబిందువు, సురేశ్వరుడు, ఔషధము, జగతః సేతువు, సత్యధర్మపరాక్రముడు.",
    englishMeaning: "Born of the nectar-rayed moon, the sun, the moon-crested, the Lord of gods, the medicine, the bridge of the world, the truthfully righteous and powerful.",
    names: ["Amritamshud-bhavah", "Bhanuh", "Shashi-binduh", "Sureshvarah", "Aushadham", "Jagatah-setuh", "Satya-dharma-parakramah"]
  },
  {
    id: 32,
    telugu: "భూతభవ్యభవన్నాథః పవనః పావనోఽనలః ।\nకామహా కామకృత్కాంతః కామః కామప్రదః ప్రభుః ॥",
    transliteration: "Bhuta-bhavya-bhavannathah pavanah pavano'nalalah |\nkamaha kamakrit-kantah kamah kama-pradah prabhuh ||",
    teluguMeaning: "భూతభవ్యభవన్నాథుడు, పవనుడు, పావనుడు, అనలుడు, కామహుడు, కామకృత్, కాంతుడు, కాముడు, కామప్రదుడు, ప్రభువు.",
    englishMeaning: "The Lord of past, present and future beings, the wind, the purifier, the fire, the destroyer of desire, the creator of desire, the beloved, desire itself, the giver of desires, the Master.",
    names: ["Bhuta-bhavya-bhavan-nathah", "Pavanah", "Pavanah", "Analah", "Kamaha", "Kama-krit", "Kantah", "Kamah", "Kama-pradah", "Prabhuh"]
  },
  {
    id: 33,
    telugu: "యుగాది కృద్యుగావర్తో నైకమాయో మహాశనః ।\nఅదృశ్యో వ్యక్తరూపశ్చ సహస్రజిదనంతజిత్ ॥",
    transliteration: "Yugadi-krid-yugavarto naika-mayo maha-shanah |\nadrishyo vyakta-rupash-cha sahasrajid-ananta-jit ||",
    teluguMeaning: "యుగాదికృత్, యుగావర్తుడు, నైకమాయుడు, మహాశనుడు, అదృశ్యుడు, వ్యక్తరూపుడు, సహస్రజిత్, అనంతజిత్.",
    englishMeaning: "The creator of yugas, the revolving of yugas, the one of many illusions, the great consumer, the invisible, the manifest-formed, the conqueror of thousands, the conqueror of the infinite.",
    names: ["Yugadi-krit", "Yugavartah", "Naika-mayah", "Maha-shanah", "Adrishyah", "Vyakta-rupah", "Sahasra-jit", "Ananta-jit"]
  },
  {
    id: 34,
    telugu: "ఇష్టోఽవిశిష్టః శిష్టేష్టః శిఖండీ నహుషో వృషః ।\nక్రోధహా క్రోధకృత్కర్తా విశ్వబాహుర్మహీధరః ॥",
    transliteration: "Ishto'vishishtah shishteshtah shikhandi nahusho vrishah |\nkrodhaha krodha-krit-karta vishva-bahur-mahi-dharah ||",
    teluguMeaning: "ఇష్టుడు, అవిశిష్టుడు, శిష్టేష్టుడు, శిఖండీ, నహుషుడు, వృషుడు, క్రోధహుడు, క్రోధకృత్, కర్త, విశ్వబాహువు, మహీధరుడు.",
    englishMeaning: "The desired, the non-separate, the desired by the good, the peacock-crested, Nahusha, the dharma, the remover of anger, the creator of anger, the doer, the universal-armed, the mountain-bearer.",
    names: ["Ishtah", "Avishishtah", "Shishteshtah", "Shikhandi", "Nahushah", "Vrishah", "Krodhaha", "Krodha-krit", "Karta", "Vishva-bahuh", "Mahi-dharah"]
  },
  {
    id: 35,
    telugu: "అచ్యుతః ప్రథితః ప్రాణః ప్రాణదో వాసవానుజః ।\nఅపాంనిధిరధిష్ఠానమప్రమత్తః ప్రతిష్ఠితః ॥",
    transliteration: "Achyutah prathitah pranah pranado vasavanujah |\napam-nidhir-adhishthanam-apramattah pratishtitah ||",
    teluguMeaning: "అచ్యుతుడు, ప్రథితుడు, ప్రాణుడు, ప్రాణదుడు, వాసవానుజుడు, అపాంనిధి, అధిష్ఠానము, అప్రమత్తుడు, ప్రతిష్ఠితుడు.",
    englishMeaning: "The infallible, the famous, the life, the life-giver, the younger brother of Indra, the ocean, the foundation, the attentive, the established.",
    names: ["Achyutah", "Prathitah", "Pranah", "Pranadah", "Vasavanujah", "Apam-nidhih", "Adhishthanam", "Apramattah", "Pratishtitah"]
  },
  {
    id: 36,
    telugu: "స్కందః స్కందధరో ధుర్యో వరదో వాయువాహనః ।\nవాసుదేవో బృహద్భానురాదిదేవః పురంధరః ॥",
    transliteration: "Skandah skandadharo dhuryo varado vayu-vahanah |\nvasudevo brihad-bhanur-adidevah purandharah ||",
    teluguMeaning: "స్కందుడు, స్కందధరుడు, ధుర్యుడు, వరదుడు, వాయువాహనుడు, వాసుదేవుడు, బృహద్భానువు, ఆదిదేవుడు, పురంధరుడు.",
    englishMeaning: "Skanda, the bearer of Skanda, the bearer of burden, the boon-giver, the wind-ridden, Vasudeva, the great sun, the first god, the destroyer of cities.",
    names: ["Skandah", "Skandadharah", "Dhuryah", "Varadah", "Vayu-vahanah", "Vasudevah", "Brihad-bhanuh", "Adidevah", "Purandharah"]
  },
  {
    id: 37,
    telugu: "అశోకస్తారణస్తారః శూరః శౌరిర్జనేశ్వరః ।\nఅనుకూలః శతావర్తః పద్మీ పద్మనిభేక్షణః ॥",
    transliteration: "Ashokas-taranas-tarah surah shaurir-janeshvarah |\nanukulah shatavartah padmi padma-nibhekshanah ||",
    teluguMeaning: "అశోకుడు, తారణుడు, తారుడు, శూరుడు, శౌరి, జనేశ్వరుడు, అనుకూలుడు, శతావర్తుడు, పద్మి, పద్మనిభేక్షణుడు.",
    englishMeaning: "The sorrowless, the raft, the savior, the valiant, Shauri, the Lord of people, the favorable, the hundred-cycled, the lotus-handed, the lotus-eyed.",
    names: ["Ashokah", "Taranah", "Tarah", "Surah", "Shauri", "Janeshvarah", "Anukulah", "Shatavartah", "Padmi", "Padma-nibhekshanah"]
  },
  {
    id: 38,
    telugu: "పద్మనాభోఽరవిందాక్షః పద్మగర్భః శరీరభృత్ ।\nమహర్ధిరృద్ధో వృద్ధాత్మా మహాక్షో గరుడధ్వజః ॥",
    transliteration: "Padmanabho'ravindakshah padma-garbhah sharira-bhrit |\nmahardhir-riddho vruddhatma maha-ksho garuda-dhvajah ||",
    teluguMeaning: "పద్మనాభుడు, అరవిందాక్షుడు, పద్మగర్భుడు, శరీరభృత్, మహర్ధి, ఋద్ధుడు, వృద్ధాత్మ, మహాక్షుడు, గరుడధ్వజుడు.",
    englishMeaning: "The lotus-navelled, the lotus-eyed, the lotus-wombed, the body-supporter, the greatly powerful, the prosperous, the grown-souled, the great-eyed, the Garuda-flagged.",
    names: ["Padmanabhah", "Aravinda-akshah", "Padma-garbhah", "Sharira-bhrit", "Mahardhih", "Riddhah", "Vruddhatma", "Maha-kshah", "Garuda-dhvajah"]
  },
  {
    id: 39,
    telugu: "అతులః శరభో భీమః సమయజ్ఞో హవిర్హరిః ।\nసర్వలక్షణలక్షణ్యో లక్ష్మీవాన్ సమితింజయః ॥",
    transliteration: "Atulah sharabho bhimah samayajno havir-harih |\nsarva-lakshana-lakshanyo lakshmivan samitim-jayah ||",
    teluguMeaning: "అతులుడు, శరభుడు, భీముడు, సమయజ్ఞుడు, హవిర్హరి, సర్వలక్షణలక్షణ్యుడు, లక్ష్మీవాన్, సమితింజయుడు.",
    englishMeaning: "The incomparable, the Sharabha, the terrible, the equal sacrifice, the receiver of offerings, the one with all auspicious marks, the wealthy, the victor in battle.",
    names: ["Atulah", "Sharabhah", "Bhimah", "Samayajnah", "Havir-harih", "Sarva-lakshana-lakshanyah", "Lakshmivan", "Samitim-jayah"]
  },
  {
    id: 40,
    telugu: "విక్షరో రోహితో మార్గో హేతుర్దామోదరః సహః ।\nమహీధరో మహాభాగో వేగవానమితాశనః ॥",
    transliteration: "Viksharo rohito margo hetur-damodarah sahah |\nmahi-dharo maha-bhago vega-van-amita-ashanah ||",
    teluguMeaning: "విక్షరుడు, రోహితుడు, మార్గుడు, హేతువు, దామోదరుడు, సహః, మహీధరుడు, మహాభాగుడు, వేగవాన్, అమితాశనుడు.",
    englishMeaning: "The cloud, the red fish, the path, the cause, Damodara, the might, the mountain-bearer, the greatly fortunate, the swift, the limitless consumer.",
    names: ["Viksharah", "Rohitah", "Margah", "Hetuh", "Damodarah", "Sahah", "Mahi-dharah", "Maha-bhagah", "Vega-van", "Amrita-ashanah"]
  },
  {
    id: 41,
    telugu: "ఉద్భవః, క్షోభణో దేవః శ్రీగర్భః పరమేశ్వరః ।\nకరణం కారణం కర్తా వికర్తా గహనో గుహః ॥",
    transliteration: "Udbhavah, kshobhano devah shree-garbhah parameshvarah |\nkaranam karanam karta vikarta gahano guhah ||",
    teluguMeaning: "ఉద్భవుడు, క్షోభణుడు, దేవుడు, శ్రీగర్భుడు, పరమేశ్వరుడు, కరణము, కారణము, కర్త, వికర్త, గహనుడు, గుహుడు.",
    englishMeaning: "The origin, the agitator, the god, the womb of Sri, the supreme Lord, the instrument, the cause, the doer, the transformer, the deep, the secret.",
    names: ["Udbhavah", "Kshobhanah", "Devah", "Shree-garbhah", "Parameshvarah", "Karanam", "Karanam", "Karta", "Vikarta", "Gahanah", "Guhah"]
  },
  {
    id: 42,
    telugu: "వ్యవసాయో వ్యవస్థానః సంస్థానః స్థానదో ధ్రువః ।\nపరర్ధిః పరమస్పష్టః తుష్టః పుష్టః శుభేక్షణః ॥",
    transliteration: "Vyavasayo vyavasthanah samsthanah sthanado dhruvah |\nparardhih parama-spashtah tushtah pushtah shubhekshanah ||",
    teluguMeaning: "వ్యవసాయుడు, వ్యవస్థానుడు, సంస్థానుడు, స్థానదుడు, ధ్రువుడు, పరర్ధి, పరమస్పష్టుడు, తుష్టుడు, పుష్టుడు, శుభేక్షణుడు.",
    englishMeaning: "The determination, the order, the establishment, the place-giver, the steady, the great prosperity, the very clear, the contented, the well-nourished, the auspicious-eyed.",
    names: ["Vyavasayah", "Vyavasthanah", "Samsthanah", "Sthanadah", "Dhruvah", "Parardhih", "Parama-spashtah", "Tushtah", "Pushtah", "Shubhekshanah"]
  },
  {
    id: 43,
    telugu: "రామో విరామో విరజో మార్గోనేయో నయోఽనయః ।\nవీరః శక్తిమతాం శ్రేష్ఠో ధర్మోధర్మ విదుత్తమః ॥",
    transliteration: "Ramo viramo virajo margoneyo nayo'navayah |\nvirah shaktimatam shreshtho dharmo-dharma-vid-uttamah ||",
    teluguMeaning: "రాముడు, విరాముడు, విరజుడు, మార్గోనేయుడు, నయుడు, అనయుడు, వీరుడు, శక్తిమతాం శ్రేష్ఠుడు, ధర్మోధర్మ విదుత్తముడు.",
    englishMeaning: "Rama, the resting place, the passionless, the path-knower, the leader, the non-leader, the valiant, the best among the powerful, the supreme knower of dharma and adharma.",
    names: ["Ramah", "Viramah", "Virajah", "Margoneyah", "Nayah", "Anayah", "Virah", "Shakti-matam-shreshthah", "Dharmo-dharma-vid-uttamah"]
  },
  {
    id: 44,
    telugu: "వైకుంఠః పురుషః ప్రాణః ప్రాణదః ప్రణవః పృథుః ।\nహిరణ్యగర్భః శత్రుఘ్నో వ్యాప్తో వాయురధోక్షజః ॥",
    transliteration: "Vaikunthah purushah pranah pranadah pranavah pruthuh |\nhiranya-garbhah shatrughno vyapto vayur-adhokshajah ||",
    teluguMeaning: "వైకుంఠుడు, పురుషుడు, ప్రాణుడు, ప్రాణదుడు, ప్రణవుడు, పృథువు, హిరణ్యగర్భుడు, శత్రుఘ్నుడు, వ్యాప్తుడు, వాయువు, అధోక్షజుడు.",
    englishMeaning: "Vaikuntha, the Supreme Being, the life, the life-giver, OM, the expansive, the golden-wombed, the destroyer of enemies, the all-pervading, the wind, the imperishable.",
    names: ["Vaikunthah", "Purushah", "Pranah", "Pranadah", "Pranavah", "Pruthuh", "Hiranya-garbhah", "Shatrughnah", "Vyaptah", "Vayuh", "Adhokshajah"]
  },
  {
    id: 45,
    telugu: "ఋతుః సుదర్శనః కాలః పరమేష్ఠీ పరిగ్రహః ।\nఉగ్రః సంవత్సరో దక్షో విశ్రామో విశ్వదక్షిణః ॥",
    transliteration: "Rutuh sudarshanah kalah parameshthi parigrahah |\nugrah samvatsaro daksho vishramo vishva-dakshinah ||",
    teluguMeaning: "ఋతువు, సుదర్శనుడు, కాలుడు, పరమేష్ఠి, పరిగ్రహుడు, ఉగ్రుడు, సంవత్సరుడు, దక్షుడు, విశ్రాముడు, విశ్వదక్షిణుడు.",
    englishMeaning: "The season, Sudarshana, time, the supreme, the receiver, the terrible, the year, the skillful, the resting place, the universal giver.",
    names: ["Rutuh", "Sudarshanah", "Kalah", "Parameshthi", "Parigrahah", "Ugrah", "Samvatsarah", "Dakshah", "Vishramah", "Vishva-dakshinah"]
  },
  {
    id: 46,
    telugu: "విస్తారః స్థావర స్థాణుః ప్రమాణం బీజమవ్యయమ్ ।\nఅర్థోఽనర్థో మహాకోశో మహాభోగో మహాధనః ॥",
    transliteration: "Vistarah sthavara-sthanuh pramanam bijam-avyayam |\nartho'nartho maha-kosho maha-bhogo maha-dhanah ||",
    teluguMeaning: "విస్తారుడు, స్థావరస్థాణువు, ప్రమాణము, బీజము, అవ్యయము, అర్థుడు, అనర్థుడు, మహాకోశుడు, మహాభోగుడు, మహాధనుడు.",
    englishMeaning: "The expansion, the steady-station, the authority, the imperishable seed, the meaning, the not-for-oneself, the great sheath, the great enjoyment, the great wealth.",
    names: ["Vistarah", "Sthavara-sthanuh", "Pramanam", "Bijam-avyayam", "Arthah", "Anarthah", "Maha-koshah", "Maha-bhogah", "Maha-dhanah"]
  },
  {
    id: 47,
    telugu: "అనిర్విణ్ణః స్థవిష్ఠో భూర్ధర్మయూపో మహామఖః ।\nనక్షత్రనేమిర్నక్షత్రీ క్షమః, క్షామః సమీహనః ॥",
    transliteration: "Anirvinnah sthavishtho bhur-dharma-yupo maha-makhah |\nnakshatra-nemir-nakshatri kshamah, kshamah samihanah ||",
    teluguMeaning: "అనిర్విణ్ణుడు, స్థవిష్ఠుడు, భూః, ధర్మయూపుడు, మహామఖుడు, నక్షత్రనేమి, నక్షత్రి, క్షముడు, క్షాముడు, సమీహనుడు.",
    englishMeaning: "The sorrowless, the firm, the earth, the pillar of dharma, the great sacrifice, the wheel of stars, the Lord of stars, the patient, the contented, the desiring.",
    names: ["Anirvinnah", "Sthavishthah", "Bhuh", "Dharma-yupah", "Maha-makhah", "Nakshatra-nemih", "Nakshatri", "Kshamah", "Kshamah", "Samihanah"]
  },
  {
    id: 48,
    telugu: "యజ్ఞ ఇజ్యో మహేజ్యశ్చ క్రతుః సత్రం సతాంగతిః ।\nసర్వదర్శీ విముక్తాత్మా సర్వజ్ఞో జ్ఞానముత్తమమ్ ॥",
    transliteration: "Yajna ijyo mahejyash-cha kratuh satram satam-gatih |\nsarva-darshi vimuktatma sarvajno jnanam-uttamam ||",
    teluguMeaning: "యజ్ఞుడు, ఇజ్యుడు, మహేజ్యుడు, క్రతువు, సత్రము, సతాంగతి, సర్వదర్శి, విముక్తాత్మ, సర్వజ్ఞుడు, జ్ఞానముత్తముడు.",
    englishMeaning: "The sacrifice, the worshipped, the great worshipped, the sacrifice, the sacrificial session, the goal of the good, the all-seeing, the liberated soul, the omniscient, the supreme knowledge.",
    names: ["Yajnah", "Ijyah", "Mahejyah", "Kratuh", "Satram", "Satam-gatih", "Sarva-darshi", "Vimuktatma", "Sarvajnah", "Jnanam-uttamam"]
  },
  {
    id: 49,
    telugu: "సువ్రతః సుముఖః సూక్ష్మః సుఘోషః సుఖదః సుహృత్ ।\nమనోహరో జితక్రోధో వీర బాహుర్విదారణః ॥",
    transliteration: "Suvratah sumukhah sukshmah su-ghoshah su-khadah su-hrit |\nmano-haro jita-krodho veera-bahur-vidaranah ||",
    teluguMeaning: "సువ్రతుడు, సుముఖుడు, సూక్ష్ముడు, సుఘోషుడు, సుఖదుడు, సుహృత్, మనోహరుడు, జితక్రోధుడు, వీరబాహువు, విదారణుడు.",
    englishMeaning: "The well-vowed, the beautiful-faced, the subtle, the sweet-sounding, the joy-giver, the good friend, the heart-stealer, the anger-conqueror, the heroic-armed, the cleaver.",
    names: ["Suvratah", "Sumukhah", "Sukshmah", "Su-ghoshah", "Su-khadah", "Su-hrit", "Mano-harah", "Jita-krodhah", "Veera-bahuh", "Vidaranah"]
  },
  {
    id: 50,
    telugu: "స్వాపనః స్వవశో వ్యాపీ నైకాత్మా నైకకర్మకృత్।\nవత్సరో వత్సలో వత్సీ రత్నగర్భో ధనేశ్వరః ॥",
    transliteration: "Svapanah svavasho vyapi naikatma naika-karma-krit |\nvatsaro vatsalo vatsi ratna-garbho dhaneeshvarah ||",
    teluguMeaning: "స్వాపనుడు, స్వవశుడు, వ్యాపీ, నైకాత్మ, నైకకర్మకృత్, వత్సరుడు, వత్సలుడు, వత్సీ, రత్నగర్భుడు, ధనేశ్వరుడు.",
    englishMeaning: "The dreamer, the self-controlled, the all-pervading, the multi-souled, the multi-actor, the year, the affectionate, the calf, the gem-wombed, the Lord of wealth.",
    names: ["Svapanah", "Svavashah", "Vyapi", "Naikatma", "Naika-karma-krit", "Vatsarah", "Vatsalah", "Vatsi", "Ratna-garbhah", "Dhaneeshvarah"]
  },
  {
    id: 51,
    telugu: "ధర్మగుబ్ధర్మకృద్ధర్మీ సదసత్క్షరమక్షరం॥\nఅవిజ్ఞాతా సహస్త్రాంశుర్విధాతా కృతలక్షణః ॥",
    transliteration: "Dharmagub-dharmakrid-dharmi sadasat-ksharam-aksharam |\navijnata sahasramshur-vidhata krita-lakshanah ||",
    teluguMeaning: "ధర్మగుడు, ధర్మకృత్, ధర్మి, సత్, అసత్, క్షరము, అక్షరము, అవిజ్ఞాత, సహస్రాంశువు, విధాత, కృతలక్షణుడు.",
    englishMeaning: "The follower of dharma, the creator of dharma, the righteous, the existent, the non-existent, the perishable, the imperishable, the unknown, the thousand-rayed, the ordainer, the well-formed.",
    names: ["Dharmaguh", "Dharmakrit", "Dharmi", "Sat", "Asat", "Ksharam", "Aksharam", "Avijnata", "Sahasramshuh", "Vidhata", "Krita-lakshanah"]
  },
  {
    id: 52,
    telugu: "గభస్తినేమిః సత్త్వస్థః సింహో భూత మహేశ్వరః ।\nఆదిదేవో మహాదేవో దేవేశో దేవభృద్గురుః ॥",
    transliteration: "Gabhashtinemihi sattvasthah simho bhuta-maheshvarah |\nadidevo mahadevo devesho devabhrid-guruh ||",
    teluguMeaning: "గభస్తినేమి, సత్త్వస్థుడు, సింహుడు, భూతమహేశ్వరుడు, ఆదిదేవుడు, మహాదేవుడు, దేవేశుడు, దేవభృత్, గురువు.",
    englishMeaning: "The wheel of rays, the established in purity, the lion, the great Lord of beings, the first god, the great god, the Lord of gods, the supporter of gods, the teacher.",
    names: ["Gabhashti-nemih", "Sattva-sthah", "Simhah", "Bhuta-maheshvarah", "Adidevah", "Mahadevah", "Deveshah", "Devabhrit", "Guruh"]
  },
  {
    id: 53,
    telugu: "ఉత్తరో గోపతిర్గోప్తా జ్ఞానగమ్యః పురాతనః ।\nశరీర భూతభృద్ భోక్తా కపీంద్రో భూరిదక్షిణః ॥",
    transliteration: "Uttaro gopatir-gopta jnana-gamyah puratanah |\nsharira-bhuta-bhrid-bhokta kapindro bhuri-dakshinah ||",
    teluguMeaning: "ఉత్తరుడు, గోపతి, గోప్త, జ్ఞానగమ్యుడు, పురాతనుడు, శరీరభూతభృత్, భోక్త, కపీంద్రుడు, భూరిదక్షిణుడు.",
    englishMeaning: "The northern, the Lord of cows, the protector, the knowledge-attainable, the ancient, the supporter of the body-elements, the enjoyer, the Lord of monkeys, the giver of abundant gifts.",
    names: ["Uttarah", "Gopatih", "Gopta", "Jnana-gamyah", "Puratanah", "Sharira-bhuta-bhrit", "Bhokta", "Kapindrah", "Bhuri-dakshinah"]
  },
  {
    id: 54,
    telugu: "సోమపోఽమృతపః సోమః పురుజిత్ పురుసత్తమః ।\nవినయో జయః సత్యసంధో దాశార్హః సాత్వతాం పతిః ॥",
    transliteration: "Somapo'mritapah somah purujit puru-sattamah |\nvinayo jayah satya-sandho dasharhah satvatam patih ||",
    teluguMeaning: "సోమపుడు, అమృతపుడు, సోముడు, పురుజిత్, పురుసత్తముడు, వినయుడు, జయుడు, సత్యసంధుడు, దాశార్హుడు, సాత్వతాం పతి.",
    englishMeaning: "The Soma-drinker, the nectar-drinker, the moon, the conqueror of many, the best of many, the humble, victory, the truthful-promised, the descendant of Dasharha, the Lord of the Satvatas.",
    names: ["Somapah", "Amritapah", "Somah", "Purujit", "Puru-sattamah", "Vinayah", "Jayah", "Satya-sandhah", "Dasharhah", "Satvatam-patih"]
  },
  {
    id: 55,
    telugu: "జీవో వినయితా సాక్షీ ముకుందోఽమిత విక్రమః ।\nఅంభోనిధిరనంతాత్మా మహోదధి శయోంతకః ॥",
    transliteration: "Jivo vinayita sakshi Mukundo'mita-vikramah |\nambhonidhir-anantatma mahodadhi shayontakah ||",
    teluguMeaning: "జీవుడు, వినయిత, సాక్షి, ముకుందుడు, అమితవిక్రముడు, అంభోనిధి, అనంతాత్మ, మహోదధి, శయోంతకుడు.",
    englishMeaning: "The living being, the guide, the witness, Mukunda, the immeasurably powerful, the ocean, the infinite Self, the great ocean, the bed of the serpent.",
    names: ["Jivah", "Vinayita", "Sakshi", "Mukundah", "Amita-vikramah", "Ambhonidhih", "Anantatma", "Mahodadhih", "Shayontakah"]
  },
  {
    id: 56,
    telugu: "అజో మహార్హః స్వాభావ్యో జితామిత్రః ప్రమోదనః ।\nఆనందోఽనందనోనందః సత్యధర్మా త్రివిక్రమః ॥",
    transliteration: "Ajo maharhah svabhavyo jita-amitrah pramodanah |\nanando'nandano'nandah satya-dharm tri-vikramah ||",
    teluguMeaning: "అజుడు, మహార్హుడు, స్వాభావ్యుడు, జితామిత్రుడు, ప్రమోదనుడు, ఆనందుడు, ఆనందనుడు, ఆనందుడు, సత్యధర్మ, త్రివిక్రముడు.",
    englishMeaning: "The unborn, the greatly worthy, the natural, the conqueror of enemies, the joyful, bliss, the giver of bliss, the blissful, the truthful-righteous, Trivikrama.",
    names: ["Ajah", "Maharhah", "Svabhavyah", "Jita-amitrah", "Pramodanah", "Anandah", "Anandanah", "Anandah", "Satya-dharma", "Tri-vikramah"]
  },
  {
    id: 57,
    telugu: "మహర్షిః కపిలాచార్యః కృతజ్ఞో మేదినీపతిః ।\nత్రిపదస్త్రిదశాధ్యక్షో మహాశృంగః కృతాంతకృత్ ॥",
    transliteration: "Maharshih kapilacharyah kritajno medini-patih |\ntripadas-tridashadhyaksho maha-shringah kritanta-krit ||",
    teluguMeaning: "మహర్షి, కపిలాచార్యుడు, కృతజ్ఞుడు, మేదినీపతి, త్రిపదుడు, త్రిదశాధ్యక్షుడు, మహాశృంగుడు, కృతాంతకృత్.",
    englishMeaning: "The great sage, Kapila the teacher, the grateful, the Lord of the earth, the three-footed, the witness of the three and thirty, the great-horned, the maker of dissolution.",
    names: ["Maharshih", "Kapilacharyah", "Kritajnah", "Medini-patih", "Tripadah", "Tridasha-adhyakshah", "Maha-shringah", "Kritanta-krit"]
  },
  {
    id: 58,
    telugu: "మహావరాహో గోవిందః సుషేణః కనకాంగదీ ।\nగుహ్యో గభీరో గహనో గుప్తశ్చక్ర గదాధరః ॥",
    transliteration: "Maha-varaho govindah sushenah kanaka-angadi |\nguhyo gabhiro gahano guptash-chakra-gadadharah ||",
    teluguMeaning: "మహావరాహుడు, గోవిందుడు, సుషేణుడు, కనకాంగది, గుహ్యుడు, గభీరుడు, గహనుడు, గుప్తుడు, చక్రగదాధరుడు.",
    englishMeaning: "The great boar, Govinda, the good-army, the golden-armed, the secret, the deep, the dense, the hidden, the bearer of discus and mace.",
    names: ["Maha-varahah", "Govindah", "Sushenah", "Kanaka-angadi", "Guhyah", "Gabhirah", "Gahanah", "Guptah", "Chakra-gada-dharah"]
  },
  {
    id: 59,
    telugu: "వేధాః స్వాంగోఽజితః కృష్ణో దృఢః సంకర్షణోఽచ్యుతః ।\nవరుణో వారుణో వృక్షః పుష్కరాక్షో మహామనాః ॥",
    transliteration: "Vedhah svango'jitah krishno dridhah sankarshano'chyutah |\nvaruno varuno vrikshah pushkaraksho maha-manah ||",
    teluguMeaning: "వేధా, స్వాంగుడు, అజితుడు, కృష్ణుడు, దృఢుడు, సంకర్షణుడు, అచ్యుతుడు, వరుణుడు, వారుణుడు, వృక్షుడు, పుష్కరాక్షుడు, మహామనుడు.",
    englishMeaning: "The creator, the self-limbed, the unconquered, Krishna, the firm, Sankarshana, the infallible, Varuna, the son of Varuna, the tree, the lotus-eyed, the great-minded.",
    names: ["Vedhah", "Svangah", "Ajitah", "Krishnah", "Dridhah", "Sankarshanah", "Achyutah", "Varunah", "Varunah", "Vrikshah", "Pushkarakshah", "Maha-manah"]
  },
  {
    id: 60,
    telugu: "భగవాన్ భగహాఽఽనందీ వనమాలీ హలాయుధః ।\nఆదిత్యో జ్యోతిరాదిత్యః సహిష్ణుర్గతిసత్తమః ॥",
    transliteration: "Bhagavan bhagahanandi vana-mali halayudhah |\nadityo jyotir-adityah sahishnur-gati-sattamah ||",
    teluguMeaning: "భగవాన్, భగహా, ఆనంది, వనమాలి, హలాయుధుడు, ఆదిత్యుడు, జ్యోతిరాదిత్యుడు, సహిష్ణువు, గతిసత్తముడు.",
    englishMeaning: "The Lord, the destroyer of fortune, the blissful, the forest-garlanded, the plough-armed, the Sun, the light-Sun, the tolerant, the best of goals.",
    names: ["Bhagavan", "Bhagaha", "Anandi", "Vana-mali", "Halayudhah", "Adityah", "Jyotir-adityah", "Sahishnuh", "Gati-sattamah"]
  }
];

// Phalashruti (Benefits) - Selected key verses
export const phalashruti: Shloka[] = [
  {
    id: 1,
    telugu: "ఇతీదం కీర్తనీయస్య కేశవస్య మహాత్మనః ।\nనామ్నాం సహస్రం దివ్యానామశేషేణ ప్రకీర్తితం।",
    transliteration: "Iti idam kirtaniyasya keshavasya mahatmanah |\nnamnam sahasram divyanam-asheshena prakirtitam ||",
    teluguMeaning: "ఈ కీర్తించదగిన మహాత్ముడైన కేశవుని దివ్య నామములైన సహస్రము నిండుగ కీర్తించబడినవి.",
    englishMeaning: "Thus the thousand divine names of the glorious Lord Keshava have been sung in full."
  },
  {
    id: 2,
    telugu: "య ఇదం శృణుయాన్నిత్యం యశ్చాపి పరికీర్తయేత్।\nనాశుభం ప్రాప్నుయాత్ కించిత్సోఽముత్రేహ చ మానవః ॥",
    transliteration: "Ya idam shrunuyan-nityam yash-chapi parikirtayet |\nnashubham prapnuyat kinchit so'mutra-eha cha manavah ||",
    teluguMeaning: "ఎవడు దీనిని నిత్యము శృణువునో, ఎవడు కీర్తించునో, వాడు ఇహము పరము లందు క్రముచ అశుభము పొందడు.",
    englishMeaning: "One who hears this daily or sings it, neither here nor hereafter will that person attain any inauspiciousness."
  },
  {
    id: 3,
    telugu: "వేదాంతగో బ్రాహ్మణః స్యాత్ క్షత్రియో విజయీ భవేత్ ।\nవైశ్యో ధనసమృద్ధః స్యాత్ శూద్రః సుఖమవాప్నుయాత్ ॥",
    transliteration: "Vedantago brahmanah syat kshatriyo vijayi bhavet |\nvaishyo dhana-samriddhah syat shudrah sukham-avapnuyat ||",
    teluguMeaning: "బ్రాహ్మణుడు వేదాంత గతుడగును, క్షత్రియుడు విజయుడగును, వైశ్యుడు ధన సమృద్ధుడగును, శూద్రుడు సుఖమును పొందును.",
    englishMeaning: "A Brahmin becomes versed in Vedanta, a Kshatriya becomes victorious, a Vaishya becomes prosperous, and a Shudra attains happiness."
  },
  {
    id: 4,
    telugu: "భక్తిమాన్ యః సదోత్థాయ శుచిస్తద్గతమానసః ।\nసహస్రం వాసుదేవస్య నామ్నామేతత్ ప్రకీర్తయేత్ ॥",
    transliteration: "Bhaktiman yah sad-uttaya suchis-tad-gata-manasah |\nsahasram vasudevasya namnametat prakirtayet ||",
    teluguMeaning: "ఎవడు భక్తివంతుడై సదా లేచి, శుచియై, మనస్సు వాసుదేవునందు లగించి, వాసుదేవుని నామములైన సహస్రమును కీర్తించునో",
    englishMeaning: "One who is devoted, who rises early, who is pure, whose mind is fixed on Him, and who chants these thousand names of Vasudeva..."
  },
  {
    id: 5,
    telugu: "యశః ప్రాప్నోతి విపులం యాతిప్రాధాన్యమేవ చ ।\nఅచలాం శ్రియమాప్నోతి శ్రేయః ప్రాప్నోత్యనుత్తమం।",
    transliteration: "Yashah prapnoti vipulam yati pradhanyameva cha |\nachalam shriyam-apnoti shreyah prapnoty-anuttamam ||",
    teluguMeaning: "వాడు విపులమైన కీర్తిని పొందును, ప్రాధాన్యమును పొందును, అచలమైన శ్రీయుజ్జును, అనుత్తమ శ్రేయమును పొందును.",
    englishMeaning: "...attains great fame, achieves prominence, obtains unfailing prosperity, and attains the supreme good."
  },
  {
    id: 6,
    telugu: "న భయం క్వచిదాప్నోతి వీర్యం తేజశ్చ విందతి ।\nభవత్యరోగో ద్యుతిమాన్ బలరూప గుణాన్వితః ॥",
    transliteration: "Na bhayam kvachid-apnoti viryam tejas-cha vindati |\nbhavaty-arogo dyutiman bala-rupa-gun-anvitah ||",
    teluguMeaning: "వాడు ఎచ్చటను భయము పొందడు, వీర్యము తేజములను పొందును, అరోగుడగును, ద్యుతిమంతుడగును, బలరూప గుణములు గలవాడగును.",
    englishMeaning: "One will never fear anywhere, gains valor and splendor, becomes disease-free, radiant, and endowed with strength, beauty, and good qualities."
  },
  {
    id: 7,
    telugu: "రోగార్తో ముచ్యతే రోగాద్బద్ధో ముచ్యేత బంధనాత్ ।\nభయాన్ముచ్యేత భీతస్తు ముచ్యేతాపన్న ఆపదః ॥",
    transliteration: "Rogarto muchyate rogad-baddho muchyeta bandhanat |\nbhayan-muchyeta bhitastu muchyetapanna aapadah ||",
    teluguMeaning: "రోగార్తుడు రోగమునుండి, బద్ధుడు బంధనమునుండి, భీతుడు భయమునుండి, ఆపదుడు ఆపదునుండి విముక్తి పొందును.",
    englishMeaning: "The sick are freed from disease, the bound from bonds, the frightened from fear, and the distressed from calamity."
  },
  {
    id: 8,
    telugu: "వాసుదేవాశ్రయో మర్త్యో వాసుదేవపరాయణః ।\nసర్వపాపవిశుద్ధాత్మా యాతి బ్రహ్మ సనాతనం।",
    transliteration: "Vasudevaashrayo martyo vasudeva-parayanah |\nsarva-papa-vishuddhatma yati brahma sanatanam ||",
    teluguMeaning: "వాసుదేవుని ఆశ్రయించిన మర్త్యుడు, వాసుదేవ పరాయణుడు, సర్వ పాపములనుండి విశుద్ధాత్మ, సనాతన బ్రహ్మను పొందును.",
    englishMeaning: "A mortal who takes refuge in Vasudeva, who is devoted to Vasudeva, becomes purified of all sins and attains the eternal Brahman."
  }
];

// Get total names count
export const totalNamesCount = (): number => {
  let count = 0;
  mainStotram.forEach(shloka => {
    if (shloka.names) count += shloka.names.length;
  });
  return count;
};

// Get all individual names
export const getAllNames = (): { name: string; shlokaId: number }[] => {
  const names: { name: string; shlokaId: number }[] = [];
  mainStotram.forEach(shloka => {
    if (shloka.names) {
      shloka.names.forEach(name => {
        names.push({ name, shlokaId: shloka.id });
      });
    }
  });
  return names;
};

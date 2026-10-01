const A1_QUESTIONS = [
  {
    question: "Wie heißt du?",
    options: ["Ich heiße Aswin.", "Ich bin aus Fußball.", "Ich wohne 18.", "Ich habe Deutsch."],
    answer: 0,
    category: "Introduction"
  },
  {
    question: "Wie alt bist du?",
    options: ["Ich bin 18 Jahre alt.", "Ich heiße 18.", "Ich habe 18 Jahre.", "Ich wohne 18."],
    answer: 0,
    category: "Introduction"
  },
  {
    question: "Woher kommst du?",
    options: ["Ich komme aus Indien.", "Ich wohne aus Indien.", "Ich bin kommen Indien.", "Ich habe Indien."],
    answer: 0,
    category: "Introduction"
  },
  {
    question: "Wo wohnst du?",
    options: ["Ich wohne in Wayanad.", "Ich komme in Wayanad.", "Ich bin Wayanad.", "Ich habe Wayanad."],
    answer: 0,
    category: "Introduction"
  },
  {
    question: "Was bedeutet „Hallo“?",
    options: ["Hello", "Goodbye", "Thanks", "Please"],
    answer: 0,
    category: "Vocabulary"
  },
  {
    question: "Was bedeutet „Danke“?",
    options: ["Please", "Thanks", "Goodbye", "Morning"],
    answer: 1,
    category: "Vocabulary"
  },
  {
    question: "Was ist der richtige Artikel: ___ Vater?",
    options: ["die", "das", "der", "den"],
    answer: 2,
    category: "Articles"
  },
  {
    question: "Was ist der richtige Artikel: ___ Mutter?",
    options: ["der", "die", "das", "den"],
    answer: 1,
    category: "Articles"
  },
  {
    question: "Was ist der richtige Artikel: ___ Kind?",
    options: ["der", "die", "das", "den"],
    answer: 2,
    category: "Articles"
  },
  {
    question: "Ich ___ Deutsch.",
    options: ["lerne", "lernen", "lernst", "lernt"],
    answer: 0,
    category: "Grammar"
  },
  {
    question: "Du ___ Fußball.",
    options: ["spiele", "spielst", "spielt", "spielen"],
    answer: 1,
    category: "Grammar"
  },
  {
    question: "Er ___ in Deutschland.",
    options: ["wohne", "wohnst", "wohnt", "wohnen"],
    answer: 2,
    category: "Grammar"
  },
  {
    question: "Wir ___ Deutsch.",
    options: ["lernt", "lerne", "lernen", "lernst"],
    answer: 2,
    category: "Grammar"
  },
  {
    question: "Ihr ___ Musik.",
    options: ["hört", "höre", "hörst", "hören"],
    answer: 0,
    category: "Grammar"
  },
  {
    question: "Sie ___ in Berlin.",
    options: ["wohne", "wohnst", "wohnt", "wohnen"],
    answer: 3,
    category: "Grammar"
  },
  {
    question: "Was bedeutet „Guten Morgen“?",
    options: ["Good night", "Good morning", "Good evening", "Goodbye"],
    answer: 1,
    category: "Vocabulary"
  },
  {
    question: "Was bedeutet „Gute Nacht“?",
    options: ["Good morning", "Good afternoon", "Good night", "Hello"],
    answer: 2,
    category: "Vocabulary"
  },
  {
    question: "Was bedeutet „Tschüss“?",
    options: ["Hello", "Goodbye", "Thanks", "Sorry"],
    answer: 1,
    category: "Vocabulary"
  },
  {
    question: "Wie sagt man 10 auf Deutsch?",
    options: ["zehn", "zwölf", "zehnzehn", "eins"],
    answer: 0,
    category: "Numbers"
  },
  {
    question: "Wie sagt man 18 auf Deutsch?",
    options: ["achtzehn", "achtzig", "siebzehn", "neunzehn"],
    answer: 0,
    category: "Numbers"
  },
  {
    question: "Wie sagt man 25 auf Deutsch?",
    options: ["fünfzehn", "fünfundzwanzig", "fünfunddreißig", "zweihundertfünf"],
    answer: 1,
    category: "Numbers"
  },
  {
    question: "Wie sagt man 40 auf Deutsch?",
    options: ["vierzehn", "vierzig", "vierundzwanzig", "vierhundert"],
    answer: 1,
    category: "Numbers"
  },
  {
    question: "Wie sagt man 100 auf Deutsch?",
    options: ["hundert", "einhundert", "beide sind möglich", "eintausend"],
    answer: 2,
    category: "Numbers"
  },
  {
    question: "Was ist „der Bruder“?",
    options: ["sister", "brother", "father", "uncle"],
    answer: 1,
    category: "Family"
  },
  {
    question: "Was ist „die Schwester“?",
    options: ["mother", "daughter", "sister", "aunt"],
    answer: 2,
    category: "Family"
  },
  {
    question: "Was ist „der Vater“?",
    options: ["father", "brother", "son", "grandfather"],
    answer: 0,
    category: "Family"
  },
  {
    question: "Was ist „die Mutter“?",
    options: ["daughter", "mother", "sister", "wife"],
    answer: 1,
    category: "Family"
  },
  {
    question: "Was bedeutet „Wasser“?",
    options: ["water", "milk", "bread", "coffee"],
    answer: 0,
    category: "Food"
  },
  {
    question: "Was bedeutet „Brot“?",
    options: ["rice", "bread", "meat", "apple"],
    answer: 1,
    category: "Food"
  },
  {
    question: "Was bedeutet „Apfel“?",
    options: ["orange", "banana", "apple", "potato"],
    answer: 2,
    category: "Food"
  },
  {
    question: "Ich ___ Kaffee.",
    options: ["trinke", "trinkst", "trinkt", "trinken"],
    answer: 0,
    category: "Grammar"
  },
  {
    question: "Du ___ morgens um sieben Uhr auf.",
    options: ["stehe", "stehst", "steht", "stehen"],
    answer: 1,
    category: "Daily Routine"
  },
  {
    question: "Ich ___ um zehn Uhr.",
    options: ["schlafe", "schläfst", "schlaft", "schlafen"],
    answer: 0,
    category: "Daily Routine"
  },
  {
    question: "Was bedeutet „Fußball spielen“?",
    options: ["to watch football", "to play football", "to buy football", "to teach football"],
    answer: 1,
    category: "Hobbies"
  },
  {
    question: "Was bedeutet „Musik hören“?",
    options: ["to make music", "to hear/listen to music", "to buy music", "to write music"],
    answer: 1,
    category: "Hobbies"
  },
  {
    question: "Ich ___ gern Fußball.",
    options: ["spiele", "spielst", "spielt", "spielen"],
    answer: 0,
    category: "Hobbies"
  },
  {
    question: "Meine Familie ___ fünf Personen.",
    options: ["haben", "hat", "hast", "habe"],
    answer: 1,
    category: "Family"
  },
  {
    question: "Ich habe ___ Bruder.",
    options: ["ein", "eine", "einen", "einem"],
    answer: 2,
    category: "Articles"
  },
  {
    question: "Ich habe ___ Schwester.",
    options: ["ein", "eine", "einen", "einem"],
    answer: 1,
    category: "Articles"
  },
  {
    question: "___ du Deutsch?",
    options: ["Sprichst", "Spreche", "Spricht", "Sprechen"],
    answer: 0,
    category: "Grammar"
  },
  {
    question: "___ Sie Englisch?",
    options: ["Sprichst", "Spreche", "Sprechen", "Spricht"],
    answer: 2,
    category: "Grammar"
  },
  {
    question: "Wie geht es dir?",
    options: ["Mir geht es gut.", "Ich heiße gut.", "Ich wohne gut.", "Ich habe gut."],
    answer: 0,
    category: "Everyday German"
  },
  {
    question: "Wie heißt du?",
    options: ["Ich bin 18.", "Ich heiße Aswin.", "Ich komme aus Indien.", "Ich wohne in Wayanad."],
    answer: 1,
    category: "Everyday German"
  },
  {
    question: "Was machst du?",
    options: ["Ich bin Student.", "Ich heiße Aswin.", "Ich komme aus Indien.", "Ich bin 18 Jahre."],
    answer: 0,
    category: "Everyday German"
  },
  {
    question: "Wie lange lernst du Deutsch?",
    options: ["Seit zwei Monaten.", "Um zwei Uhr.", "Zwei Personen.", "Zwei Euro."],
    answer: 0,
    category: "Everyday German"
  },
  {
    question: "Ich ___ müde.",
    options: ["bin", "bist", "ist", "sind"],
    answer: 0,
    category: "Grammar"
  },
  {
    question: "Du ___ nett.",
    options: ["bin", "bist", "ist", "sind"],
    answer: 1,
    category: "Grammar"
  },
  {
    question: "Wir ___ Freunde.",
    options: ["bin", "bist", "ist", "sind"],
    answer: 3,
    category: "Grammar"
  },
  {
    question: "Ihr ___ Studenten.",
    options: ["seid", "sind", "ist", "bist"],
    answer: 0,
    category: "Grammar"
  },
  {
    question: "Sie ___ Lehrer.",
    options: ["ist", "sind", "bist", "seid"],
    answer: 1,
    category: "Grammar"
  }
];

const sanskrit_1 = "OM VA DZRĀ PA NI HŪM: PHAT!";
const sanskrit_2 = "ओंम्वज्रपाणिहुंफट्";
const tib_1 = "OM CHAKNA DORJE HUNG: PHAT!";
const tib_2 = "ཨོ་ཕྱག་ན་རྡོ་རྗེ་ཧཱུྂ་ཕཊ།";

reps = Math.pow(10, 6); // 1,000,000 repititions
for (i=0; i<reps; i++) {
    console.log(i+1);
    console.log("\n", sanskrit_1, "\n\t\t", sanskrit_2, "\n\n", tib_1, "\n\t\t", tib_2, "\n");
}

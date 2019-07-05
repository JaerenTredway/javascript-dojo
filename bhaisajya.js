const mantra = `namo bhagavate bhaiśajyaguru vaidūryaprabharājāya\r
I bow - to divine - Medicine Buddha - Lapis Light Deity\n
tathāgatāya arhate samyaksambuddhāya\r
Once come/ once gone - conquered death - Perfectly Enlightened\n
tadyathā: oṃ\r
Like This: Sound\n
bhaiśajye bhaiśajye bhaiśajya-samudgate\r
Healing power - Healing power - Healing power! Up to the Highest Height\n
svāhā\r
I dedicate this prayer\n
ༀ་ན་མོ་བྷ་ག་ཝ་ཏེ། བྷཻ་ཥ་ཛྱེ་གུ་རུ་བཻ ་ཌཱུ རྱ་པྲ་བྷ་རཱ་ཛ་ཡ། ཏ་ཐཱ་ག་ཏཱ་ཡ། ཨརྷ་ཏེ་ སམྱཀྶཾ་བུདྡྷ་ཡ། ཏདྱ་ཐཱ།\r
ༀ་\r
བྷཻ་ཥ་ཛྱེ་བྷཻ་ཥ་ཛྱེ། མཧཱ་བྷཻ་ཥ་ཛྱེ [་བྷཻ་ཥ་ཛྱེ]། རཱ་ཛ་ས་ མུདྒ་ཏེ་སཧཱ།\n`

const reps = Math.pow(10, 6);

const medicine = function() {
    for (i=0; i<reps; i++) {
        console.log(i+1);
        console.log(mantra);
    }
}

medicine()

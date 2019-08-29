
const migstema = "Tsongkhapa, crown ornament of the scholars of the Land of the Snows,\nYou are Avalokiteshvara, the treasury of unobservable compassion,\nManjushri, the supreme stainless wisdom,\nAnd Vajrapani, the destroyer of the hosts of maras,\nO Losang Dragpa I request you, please grant your blessings.\n\n";

const tibetanMigstema = "MIG ME TSE WAI TER CHEN CHÄN RÄ ZIG\nDRI ME KHYEN PAI WANG PO JAM PÄL YANG\nDÜ PUNG MA LÜ JOM DZÄ SANG WAI DAG\nGANG CHÄN KHÄ WAI TSUG GYÄN TSONG KHA PA\nLO ZANG DRAG PAI ZHAB LA SÖL WA DEB\n\n";

const combinedMigstema =`MIG ME TSE WAI TER CHEN CHÄN RÄ ZIG\r
Avalokiteshvara, great treasure of unspecific compassion,\n
DRI ME KHYEN PAI WANG PO JAM PÄI YANG\r
Manjushri, master of pure wisdom,\n
DÜ PUNG MA LÜ JOM DZÄ SANG WAI DAG\r
Vajrapani, destroyer of the hosts of maras,\n
GANG CHÄN KHÄ WAI TSUG GYÄN TSONG KHA PA,\r
Je Tsongkhapa, crown ornament of the scholars of the Land of the Snows,\n
LO ZANG DRAG PA ZHAB LA SÖL WA DEB\r
O Losang Dragpa I bow to you, at your feet I pray.\n
༈ དམིགས་མེད་བརྩེ་བའི་གཏེར་ཆེན་སྤྱན་རས་གཟིགས། །
དྲི་མེད་མཁྱེན་པའི་དབང་པོ་འཇམ་དཔལ་དབྱངས། །
བདུད་དཔུང་མ་ལུས་འཇོམས་མཛད་གསང་བའི་བདག །
གངས་ཅན་མཁས་པའི་གཙུག་རྒྱན་ཙོང་ཁ་པ། །
བློ་བཟང་གྲགས་པའི་ཞབས་ལ་གསོལ་བ་འདེབས། །
`;

//const maxReps = (Math.pow(2,53)-1); maximum number Math can handle
const reps = ( (Math.pow(10, 6) ) ); //one million reps

function chant (mantra) {
    for (i = 0; i < reps; i++) {
        console.log(i+1);
        console.log(mantra)
    }
}

chant(combinedMigstema);

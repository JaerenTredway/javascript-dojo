
const migstema = "Tsongkhapa, crown ornament of the scholars of the Land of the Snows,\nYou are Avalokiteshvara, the treasury of unobservable compassion,\nManjushri, the supreme stainless wisdom,\nAnd Vajrapani, the destroyer of the hosts of maras,\nO Losang Dragpa I request you, please grant your blessings.\n\n";
//console.log(migstema);

const tibetanMigstema = "MIG ME TSE WAI TER CHEN CHÄN RÄ ZIG\nDRI ME KHYEN PAI WANG PO JAM PÄL YANG\nDÜ PUNG MA LÜ JOM DZÄ SANG WAI DAG\nGANG CHÄN KHÄ WAI TSUG GYÄN TSONG KHA PA\nLO ZANG DRAG PAI ZHAB LA SÖL WA DEB\n\n";
//console.log(tibetanMigstema);

//const maxReps = (Math.pow(2,53)-1);
const reps = ( (Math.pow(10, 6) ) ); //one million reps
//console.log(reps);

function chant (mantra, repetitions) {
    for (i = 0; i < repetitions; i++) {
        console.log(i+1);
        console.log(mantra)
    }
}

// chant(migstema, reps);
chant(tibetanMigstema, reps);
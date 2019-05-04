//function takes a list of HH:MM:SS race results, cleans the data, and produces the following statistics: range, mean, and median of the whole list

let raceResults = "02:15:59, 2:47:16, 02:17:20, 2:32:34, 2:17:17, 2:22:00, 2:31:41";

function stats(times) {
    times = times.split(',');

    //abort process if input is bogus:
    if ((times[0]) === '') {
        return '';
    };

    //clean the data and convert hours and minutes to seconds:
    for (i = 0; i < times.length; i++) {
        times[i] = times[i].replace(' ', '').split(':');
        for (j = 0; j < times[i].length; j++) {
            times[i][j] = parseInt(times[i][j]);
        }
        times[i][0] = times[i][0] * 3600;
        times[i][1] = times[i][1] * 60;
        times[i][2] = times[i][2] * 1;
    }

    //sum each race result into total number of seconds:
    for (a = 0; a < times.length; a++) {
        for (b = 0; b < times[a].length; b++) {
            times[a] = times[a].reduce((acc, cur) => {
                return acc + cur
            });
        }
    }

    //put the results in order from low to high, (numeric not lexicographical):
    times.sort(function (a, b) {
        return a - b;
    });

    //process statistics:
    let sum = 0;
    for (i = 0; i < times.length; i++) {
        sum = times.reduce((acc, cur) => {
            return acc + cur
        });
    }
    let range = times[times.length - 1] - times[0];
    let average = sum / times.length;
    let median = 0;
    if (times.length % 2 !== 0) {
        median = times[Math.floor(times.length / 2)];
    } else {
        median = (times[Math.floor(times.length / 2)] + times[Math.floor(times.length / 2) - 1]) / 2;
    }

    //build HH:MM:SS format for each statistic:
    function timeFormat(time) {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = Math.floor((time % 3600) % 60);

        hours < 10 ? (hours = `0${hours}`) : (hours = hours);
        minutes < 10 ? (minutes = `0${minutes}`) : (minutes = minutes);
        seconds < 10 ? (seconds = `0${seconds}`) : (seconds = seconds);

        return `${hours}:${minutes}:${seconds}`;
    }

    range = timeFormat(range);
    average = timeFormat(average);
    median = timeFormat(median);

    //output:
    return `Range: ${range} Average: ${average} Median: ${median}`;

} //end function 'stats'


stats(raceResults);
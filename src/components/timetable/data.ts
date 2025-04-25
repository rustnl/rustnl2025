export const main = "Cinema 12";
export const secondary = "Cinema 11";
export const tertiary = "Cinema 9";
export const quaternary = "Reception Area";

export const annotated_breaks = {
    "tuesday": {
        "0:00 - 8:30": "Registration",
        "8:30 - 9:30": "Registration",
        "11:00 - 11:40": "Break",
        "12:45 - 14:00": "Lunch",
        "15:50 - 16:20": "Break",
        "17:40 - 19:00": "Talks over",
    },
    "wednesday": {
        "0:00 - 8:30": "Registration",
        "8:30 - 9:30": "Registration",
        "11:00 - 11:40": "Break",
        "12:45 - 14:00": "Lunch",
        "15:50 - 16:20": "Break",
        "17:40 - 19:00": "Talks over",
    }
};
export const breaks = {
    "tuesday": Object.keys(annotated_breaks["tuesday"]),
    "wednesday": Object.keys(annotated_breaks["wednesday"])
};

export const default_height_spec = ``;

export function* timeGenerator(): Generator<[number, number, string]> {
    for (let h = 8; h < 19; h++) {
        for (let m = 0; m < 60; m += 5) {
            yield [h, m, `${h}_${pad(m, 2)}`]
        }
    }
}

export function lt(time1: [number, number], time2: [number, number]) {
    let res;
    if (time1[0] < time2[0]) {
        res = true;
    } else if (time1[0] == time2[0]) {
        res = time1[1] < time2[1];
    } else {
        res = false;
    }
    return res;
}

export function in_range(
    time: [number, number],
    range: [[number, number], [number, number]],
) {
    let [start, end] = range;
    return lt(start, time) && lt(time, end);
}

export function pad(num: number, size: number): string {
    let snum = num.toString();
    while (snum.length < size) snum = "0" + snum;
    return snum;
}



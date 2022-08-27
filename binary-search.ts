const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const MAX_POSITION = characters.length - 1;
const KEY = Array(5).fill(0).map(e => getOneCharacter()).join('');

function getOneCharacter() {
    const index = Math.floor(Math.random() * MAX_POSITION);
    return characters[index];
}

const arr1 = Array(1000000).fill(0).map((el, index) => {
    if (index === 766) return KEY;
    return Array(5).fill(0).map(e => getOneCharacter()).join('');
});

arr1.sort((a, b) => a.localeCompare(b, 'en'))

let tick = 0;

function findIndex(arr: Array<any>, value: any, fromIndex: number, toIndex: number): number {
    tick++;
    
    if (fromIndex > toIndex) return -1;

    if (fromIndex == toIndex) {
        return arr[fromIndex] == value ? fromIndex : -1;
    }

    const breakpointIndex = Math.floor((fromIndex + toIndex) / 2);
    const breakpointValue = arr[breakpointIndex];

    if (tick < 100) {
        console.log(tick, fromIndex, toIndex, breakpointIndex, breakpointValue);
    }


    const fromValue = arr[fromIndex];
    const toValue = arr[toIndex];

    if (value == breakpointValue) return breakpointIndex;
    else if (value == fromValue) return fromIndex;
    else if (value == toValue) return toIndex;
    else if ((value as string).localeCompare(breakpointValue) > 0) {
        return findIndex(arr, value, breakpointIndex, toIndex)
    } else {
        return findIndex(arr, value, fromIndex, breakpointIndex)
    }

}

const position = findIndex(arr1, KEY, 0, arr1.length - 1);
import deepEqual from 'deep-equal'

const indexOfObject = (array: Object[], item: Object): number => {
    for (let i = 0; i < array.length; i++) {
        if(deepEqual(array[i], item)) return i
    }
    return -1
}
export default indexOfObject
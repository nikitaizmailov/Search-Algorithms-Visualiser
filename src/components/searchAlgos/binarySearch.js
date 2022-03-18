function getBinarySearchAnimations(array, targetVal) {
    let animations = [];
    binarySearchHelper(array, targetVal, 0, array.length - 1, animations); 
    return animations;
}

function binarySearchHelper(array, target, left, right, animations) {
    while (left <= right) {
        // picking two numbers at left idx and right idx.
        animations.push([left, right]);

        // picking two numbers at left idx and right idx.
        animations.push([left, right]);

        const middle = Math.floor((left + right) / 2);
        
        // middle number picked at middle idx
        animations.push(middle);

        const potentialMatch = array[middle];
        if (target === potentialMatch) {
            return middle;
        } else if (target < potentialMatch) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

export {getBinarySearchAnimations};
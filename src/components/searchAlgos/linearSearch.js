function getLinearSearchAnimations(array, target) {
    let animations = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            animations.push(i);
            return animations;
        }
        animations.push(i);
        animations.push(i);
    }
    // This should never execute as the target value will always be in the array searched.
    return animations;
}

export {getLinearSearchAnimations}
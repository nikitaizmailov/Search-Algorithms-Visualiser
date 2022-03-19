// function getInterpolationSearchAnimations(array, targetVal) {
//     let moves = [];
//     interpolHelper(array, targetVal, moves); 
//     return moves;
// }

// function interpolHelper(arr, target, moves) {
//     let low = 0;
//     let high = arr.length - 1;
//     let position = -1;
//     let delta = -1;
//     while (low <= high && target >= arr[low] && target <= arr[high]) {
//         delta = (target - arr[low])/(arr[high] - arr[low]);
//         position = low + Math.floor((high - low) * delta);
//         moves.push(position);
//         moves.push(position);
//         if (arr[position] === target) {
//             moves.push(position);
//             return position;
//         }
//         if (arr[position] < target) {
//             low = position + 1;
//             moves.push(low);
//             moves.push(low);
//         } else {
//             high = position - 1;
//             moves.push(high);
//             moves.push(high);
//         }
//     }
//     return null;
// }


function getInterpolationSearchAnimations(arr, n, key){
    var front = 0, end = n-1, mid;
    let animations = [];
    while(front <= end){
        if(front === end){
            if(arr[front] === key){
                animations.push(front);
                return animations
            } else{
                return -1
            }
        }
        mid = front + Math.floor((key-arr[front])*(end-front)/(arr[end]-arr[front]));
        animations.push(mid);
        animations.push(mid);
        if(key === arr[mid]){
            animations.push(mid);
            return animations;
        } else if(key < arr[mid]){
            animations.push(mid);
            animations.push(mid);
            end = mid-1;
        } else{
            animations.push(mid);
            animations.push(mid);
            front = mid+1;
        }
    }
    return -1;
}

export {getInterpolationSearchAnimations};
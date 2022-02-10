function mergeSort(start, end) {
    if (start >= end) {
        return;
    }
    let middle = Math.floor((start + end) / 2);
    mergeSort(start, middle);
    mergeSort(middle + 1, end);
    merge(start, end);
}

function merge(start, end) {
    let i = start;
    let mid = Math.floor((start + end) / 2);
    let j = mid + 1;
    let e = end;
    let temp = []; //creating a temporary array to save later push back to final array

    while (i <= mid && j <= e) {
        if (barsHeight[i] <= barsHeight[j]) {
            animation(bars[i], barsHeight[i], c1);
            temp.push(barsHeight[i]);
            i++;
        } else {
            temp.push(barsHeight[j]);
            animation(bars[j], barsHeight[j], c2);
            j++;
        }
    }
    //if one part is completed but another part is left so putting that remaining part as it is.
    while (i <= mid) {
        animation(bars[i], barsHeight[i], c1);
        temp.push(barsHeight[i]);
        i++;
    }
    while (j <= e) {
        temp.push(barsHeight[j]);
        animation(bars[j], barsHeight[j], c2);
        j++;
    }

    //sorted region
    for (let i = 0; i < temp.length; i++) {
        barsHeight[start + i] = temp[i];
        animation(bars[start + i], barsHeight[start + i], sorted);
    }
}
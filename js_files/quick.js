function quickSort(start, end) {
    if (start > end) {
        return;
    }
    if (start == end) {
        animation(bars[start], barsHeight[start], sorted);
        return;
    }
    let pivot = barsHeight[start]; //making pivot as starting element
    let i = start;
    let j = end + 1; //as we pass parameters as (0,n-1)
    while (i < j) {
        do {
            animation(bars[i], barsHeight[i], c1);
            animation(bars[i], barsHeight[i], cm);
            i++;
        } while (barsHeight[i] <= pivot);
        do {
            j--;
            animation(bars[j], barsHeight[j], c2);
            animation(bars[j], barsHeight[j], cm);
        } while (barsHeight[j] > pivot);
        if (i < j) {
            [barsHeight[i], barsHeight[j]] = [barsHeight[j], barsHeight[i]];
        }
    }
    [barsHeight[start], barsHeight[j]] = [barsHeight[j], barsHeight[start]];
    animation(bars[j], barsHeight[j], sorted);
    quickSort(start, j - 1);   //recursion
    quickSort(j + 1, end);
}
function heapSort() {
    for (let i = 0; i < n; i++) {
        heapifyUp(i);
    }

    for (let i = 0; i < n - 1; i++) {
        let l = n - 1 - i;
        [barsHeight[0], barsHeight[l]] = [barsHeight[l], barsHeight[0]];

        animation(bars[l], barsHeight[l], sorted);

        heapifyDown(l);
    }
}

function heapifyUp(i) {
    let parent = Math.floor((i - 1) / 2);

    while (i > 0 && barsHeight[parent] < barsHeight[i]) {
        animation(bars[i], barsHeight[i], c1);
        animation(bars[parent], barsHeight[parent], c2);
        //swap
        [barsHeight[i], barsHeight[parent]] = [barsHeight[parent], barsHeight[i]];

        animation(bars[i], barsHeight[i], heapcol);
        animation(bars[parent], barsHeight[parent], heapcol);

        i = parent;
        parent = Math.floor((i - 1) / 2);
    }
    animation(bars[i], barsHeight[i], heapcol);
}

function heapifyDown(size) {
    let i = 0;
    while (2 * i + 1 < size) {
        let Child = 2 * i + 1;
        if (2 * i + 2 < size && barsHeight[2 * i + 2] >= barsHeight[Child]) {
            Child = 2 * i + 2;
        }
        animation(bars[i], barsHeight[i], c1);
        animation(bars[Child], barsHeight[Child], c2);

        animation(bars[i], barsHeight[i], heapcol);
        animation(bars[Child], barsHeight[Child], heapcol);

        if (barsHeight[i] >= barsHeight[Child]) {
            return;
        }

        [barsHeight[i], barsHeight[Child]] = [barsHeight[Child], barsHeight[i]];
        i = Child;
    }
}
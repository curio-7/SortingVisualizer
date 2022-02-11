function bubbleSort() {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            animation(bars[j], barsHeight[j], c1);
            animation(bars[j + 1], barsHeight[j + 1], c2);

            if (barsHeight[j] > barsHeight[j + 1]) {
                //swapping
                [barsHeight[j], barsHeight[j + 1]] = [barsHeight[j + 1], barsHeight[j]];

                //swapping the color and bars places
                animation(bars[j], barsHeight[j], c2);
                animation(bars[j + 1], barsHeight[j + 1], c1);
            }
            //if not swapping then already in order hence just change their color.
            animation(bars[j], barsHeight[j], cm);
            animation(bars[j + 1], barsHeight[j + 1], cm);
        }
        animation(bars[n - 1 - i], barsHeight[n - 1 - i], sorted);
    }
    //sorted region
    animation(bars[0], barsHeight[0], sorted);
}

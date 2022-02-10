function insertionSort() {
    for (let i = 0; i < n; i++) {
      let num = barsHeight[i];
      animation(bars[i], barsHeight[i], c2);
      let j = i - 1;
      for (j = i - 1; j >= 0 && barsHeight[j] > num; j--) {
        barsHeight[j + 1] = barsHeight[j];
        animation(bars[j], barsHeight[j], c1);
        animation(bars[j + 1], barsHeight[j + 1], c2);
        animation(bars[j + 1], barsHeight[j + 1], sorted);
        animation(bars[j], barsHeight[j], sorted);
      }
      barsHeight[j + 1] = num;
  
      animation(bars[i], barsHeight[i], c1);
      animation(bars[i], barsHeight[i], sorted);
      animation(bars[j + 1], barsHeight[j + 1], c2);
      animation(bars[j + 1], barsHeight[j + 1], sorted);
    }
  }
  
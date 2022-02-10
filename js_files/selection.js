function selectionSort() {
    for (let i = 0; i < n - 1; i++) {
      let mini = i;
  
      for (let j = n - 1; j > i; j--) {
        animation(bars[j], barsHeight[j], c1);
  
        if (barsHeight[j] < barsHeight[mini]) mini = j;
        animation(bars[j], barsHeight[j], cm);
      }
      //swap
      [barsHeight[i], barsHeight[mini]] = [barsHeight[mini], barsHeight[i]];
  
      animation(bars[i], barsHeight[i], sorted);
  
      if (mini != i) animation(bars[mini], barsHeight[mini], cm);
    }
    //sorted region
    animation(bars[n - 1], barsHeight[n - 1], sorted);
  }
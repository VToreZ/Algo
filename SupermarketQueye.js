function queueTime(customers, n) {
  let lengthQueue = customers.length;
  let timeQueue = new Array(n).fill(0);
  for (let i = 0; i < lengthQueue / n + 1; i++) {
    let nowQueue = customers.splice(0, n);
    for (let j = 0; j < nowQueue.length; j++) {
      timeQueue[timeQueue.indexOf(Math.min.apply(null, timeQueue))] += nowQueue[j];
    }
  }
  return Math.max.apply(null, timeQueue);
}
console.log("answer: " + queueTime([2, 2, 3, 3, 4, 4], 2));
//Comment

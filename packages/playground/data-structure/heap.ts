// 최소 힙
class Heap {
  heap: (number | null)[];

  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length;
  }
  swap(a: number, b: number) {
    if (!this.heap[a] || !this.heap[b]) return;

    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  add(value: number) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (1) {
      let parentNodeIndex = this.getParentNodeIndex(index);

      if (index <= 1) break;

      const nodeValue = this.heap[index];
      const parentNodeValue = this.heap[parentNodeIndex];
      if (!nodeValue || !parentNodeValue) return;

      if (nodeValue >= parentNodeValue) break;
      this.swap(index, parentNodeIndex);

      index = parentNodeIndex;
    }
  }

  shift() {
    const lastChild = this.heap.pop();
    if (!lastChild) return;

    this.heap[1] = lastChild;
    this.bubbleDown();
  }

  bubbleDown() {
    let index = 1;

    while (1) {
      let childNodeIndex = this.getLeftChildNodeIndex(index);

      if (childNodeIndex > this.size()) break;

      const nodeValue = this.heap[index];
      const childNodeValue = this.heap[childNodeIndex];

      if (!nodeValue || !childNodeValue) return;

      if (nodeValue <= childNodeValue) break;
      this.swap(index, childNodeIndex);

      index = childNodeIndex;
    }
  }

  getParentNodeIndex(index: number) {
    // 4라면 -> 2, 5라면 -> 2
    return Math.floor(index / 2);
  }
  getLeftChildNodeIndex(index: number) {
    // 3이라면 -> 6, 1이라면 -> 2
    return index * 2;
  }
  getRightChildNodeIndex(index: number) {
    return index * 2 + 1;
  }

  get getHeap() {
    return this.heap;
  }
}

const heap = new Heap();

heap.add(4);
console.log(heap.getHeap);
heap.add(2);
console.log(heap.getHeap);
heap.add(6);
console.log(heap.getHeap);
heap.add(1);
console.log(heap.getHeap);
heap.add(3);
console.log(heap.getHeap);

heap.shift();
console.log(heap.getHeap);
heap.shift();
console.log(heap.getHeap);
heap.shift();
console.log(heap.getHeap);

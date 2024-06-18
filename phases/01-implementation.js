class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    if (((this.count + 1) / this.capacity) > 0.7) {
      this.resize;
    }

    const idx = this.hashMod(key);

    if (!this.data[idx]) {
      this.data[idx] = new KeyValuePair(key, value);
      this.count++;
    } else {
      let curr = this.data[idx];
      let found = false;

      while (curr) {
        if (curr.key === key) {
          curr.value = value;
          found = true;
          break;
        }
        curr = curr.next;
      }

      if (!found) {
        const pair = new KeyValuePair(key, value)
        pair.next = this.data[idx];
        this.data[idx] = pair;
        this.count++;
      }
    }
  }


  read(key) {
    // Your code here
    const idx = this.hashMod(key);
    let value;
    let curr = this.data[idx];

    while (curr) {
      if (curr.key === key) {
        value = curr.value;
        break;
      }
      curr = curr.next;
    }
    return value;
  }


  resize() {
    // Your code here
    this.capacity = this.capacity * 2;
    this.count = 0;

    const oldData = this.data;
    this.data = new Array(this.capacity).fill(null);

    oldData.forEach(pair => {
      while (pair) {
        this.insert(pair.key, pair.value)
        pair = pair.next;
      }
    })

  }


  delete(key) {
    // Your code here
    const idx = this.hashMod(key);
    let prev = null;
    let curr = this.data[idx];
    let found = false;
    while (curr) {
      if(curr.key === key) {
        found = true;
        if(prev) {
          prev.next = curr.next;
        } else {
          this.data[idx] = curr.next;
        }
        this.count--;
      }
      prev = curr;
      curr = curr.next;
    }

    if (!found){
      return "Key not found"
    }
  }
}


module.exports = HashTable;

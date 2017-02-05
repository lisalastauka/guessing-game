class GuessingGame {
    constructor() {
        this.leftChild = null;
        this.rightChild = null;
        this.root = null;
    }

    setRange(min, max) {
        this.leftChild = min;
        this.rightChild = max;
        this.root = Math.round((max-min)/2)+min;

    }

    guess() {
        return this.root
    }

    lower() {
        let min = this.leftChild, max = this.root;
        this.setRange(min, max);
    }

    greater() {
        let min = this.root, max = this.rightChild;
        this.setRange(min, max);
    }
}

module.exports = GuessingGame;

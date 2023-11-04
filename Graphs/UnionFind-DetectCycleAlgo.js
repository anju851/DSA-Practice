class DisjSet {
	constructor(n) {
		this.rank = new Array(n);
		this.parent = new Array(n);
		this.n = n;
		this.makeSet();
	}

	makeSet() {
		for (let i = 0; i < this.n; i++) {
			this.parent[i] = i;
		}
	}

	find(x) {
		if (this.parent[x] !== x) {
			this.parent[x] = this.find(this.parent[x]);
		}
		return this.parent[x];
	}
	//for using size/rank method by inverse Ackermann function to reduce TC to O(1) and space-O(N)
	Union(x, y) {
		let xset = this.find(x);
		let yset = this.find(y);

		if (xset === yset) return;

		if (this.rank[xset] < this.rank[yset]) {
			this.parent[xset] = yset;
		} else if (this.rank[xset] > this.rank[yset]) {
			this.parent[yset] = xset;
		} else {
			this.parent[yset] = xset;
			this.rank[xset] = this.rank[xset] + 1;
		}
		console.log("parent: ", this.parent);
		console.log("rank: ", this.rank)
	}
	//time complexity - O(N)
	findRecursive(x){
		if(this.parent[x]===x) return x;
		return this.findRecursive(this.parent[x]);
	}
	//path compression - (logN)
	findRecursiveByPathCompression(x){
		if(this.parent[x]===x) return x;
		return this.parent[x] = this.findRecursive(this.parent[x]);
	}
	
	UnionAlternative(x,y){
		// let a = this.findRecursive(x);
		// let b = this.findRecursive(y);
		// if(a != b){
		// 	this.parent[b]=a;
		// }
		// console.log("parent: ", this.parent);

		let a = this.findRecursiveByPathCompression(x);
		let b = this.findRecursiveByPathCompression(y);
		if(a != b){
			this.parent[b]=a;
		}
		console.log("parent: ", this.parent);
	}
}

// usage example
let obj = new DisjSet(5);
obj.Union(0, 2);
obj.Union(4, 2);
obj.Union(3, 1);

if (obj.find(4) === obj.find(0)) {
console.log("Yes");
} else {
console.log("No");
}
if (obj.find(1) === obj.find(0)) {
console.log("Yes");
} else {
console.log("No");
}

// obj.UnionAlternative(0, 2);
// obj.UnionAlternative(4, 2);
// obj.UnionAlternative(3, 1);

// if (obj.findRecursive(4) === obj.findRecursive(0)) {
// console.log("Yes");
// } else {
// console.log("No");
// }
// if (obj.findRecursive(1) === obj.findRecursive(0)) {
// console.log("Yes");
// } else {
// console.log("No");
// }
let obj2 = new DisjSet(5);
obj2.UnionAlternative(0, 2);
obj2.UnionAlternative(4, 2);
obj2.UnionAlternative(3, 1);

if (obj2.findRecursiveByPathCompression(4) === obj2.findRecursiveByPathCompression(0)) {
console.log("Yes");
} else {
console.log("No");
}
if (obj2.findRecursiveByPathCompression(1) === obj2.findRecursiveByPathCompression(0)) {
console.log("Yes");
} else {
console.log("No");
}

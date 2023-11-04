//node of the tree
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
//Binary Search Tree
class BST{
    constructor(){
        this.root = null;
    }
    Insert(value){
        let newNode = new Node(value);
        if(this.root===null){
            this.root = newNode;
            return this;
        }
        var current=this.root;
        while(true){
            if(value===current.value) return undefined;
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode;
                    return this;
                }
                current=current.left;
            }else{
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current=current.right;
            }
        }
    }

    DFSPreOrdertraverse(){
        var data=[];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    
}

var Ptree = new BST();
Ptree.Insert(10);
Ptree.Insert(21);
Ptree.Insert(11);
// tree.Insert();
// tree.Insert();
// tree.Insert();
console.log(Ptree);
console.log("the value of the p tree root: ", Ptree.root.value);
var Qtree = new BST();
Qtree.Insert(10);
Qtree.Insert(11);
Qtree.Insert(21);
console.log("the value of the q tree root: ", Qtree.root.value);
console.log(Qtree);

function checkIfTwoBSTAreSimilar(Ptree,Qtree){
    let pData= Ptree.DFSPreOrdertraverse();
    let qData=Qtree.DFSPreOrdertraverse();

    var is_same=(pData.length == qData.length) && pData.every(function(element,index){
        return element === qData[index];
    } );
    return is_same;
}

//console.log(checkIfTwoBSTAreSimilar(Ptree,Qtree));
//console.log("*****"+ Ptree.root);
var root1 =Ptree.root;
var root2 =Qtree.root;
//alternate way -recursive
function isSimilar(pTreeRoot,qTreeRoot){
    //console.log("p tree root: "+pTreeRoot.value+ "q tree root: "+qTreeRoot.value);
    if(!pTreeRoot  && !qTreeRoot) return true;
    if(!pTreeRoot || !qTreeRoot || pTreeRoot.value !== qTreeRoot.value) return false;
    return isSimilar(pTreeRoot.left,qTreeRoot.left) && isSimilar(pTreeRoot.right,qTreeRoot.right) ;
}
console.log(isSimilar(root1,root2));

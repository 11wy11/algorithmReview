var oddEvenList =function(head){
    if (!head || !head.next) return head;
    let oddNode = head;
    let evenNode = head.next;

    while (evenNode && evenNode.next) {
        let node = evenNode.next;
        evenNode.next = node.next;
        evenNode = evenNode.next;

        let evenHead = oddNode.next;
        oddNode.next = node;
        oddNode = oddNode.next;
        oddNode.next = evenHead;
    }
   return head;
}

var checkInclusion = function(s1, s2) {
    // 填入代码
     return s2.indexOf(s1);
    // let res=false;
    // let s1Index=0;
    // for(let i=0;i<s2.length;i++){

    // }
};
var requireTree = { 
	"name" : "page.js"
	"require" : [
		{
			"name":"A.js"
			"require" : [
				{
					"name":"C.js",
					"require" : [
						{
							"name":"F.js"
						}
					]
				}
			]
		},
		{
			"name":"B.js"
			"require" : [
				{
					"name":"D.js",
					"require" : [
						{
							"name":"F.js"
						}
					]
				},
				{
					"name":"E.js",
					"require" : []
				}
			]
		},
	]
}

var genUrl = function(requireTree){
    var stack=[];
    if(!requireTree){
        return 'http://res.wx.qq.com/';
    }
    stack.push(requireTree.name);
    var _requireTree=function(requireTree,array){
        if(requireTree.require.length){
            var names=requireTree.require.map(item=>item.name);
            array=[array,...names];
            for(let i=0;i<requireTree.require;i++){
                _requireTree(requireTree[i].require,array);
            }
        }else{
            return array;
        }   
    }
    _requireTree(requireTree.require,stack);
    stack.reverse();
    var res=stack.join(',');
    res=res.substr(0,res.length-1);
    return 'http://res.wx.qq.com/'+res;
}

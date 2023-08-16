// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function mergeTwoLists(list1, list2) {
    var headNode = new ListNode();
    var currentNode = headNode;
    var currL1 = list1;
    var currL2 = list2;
    while (currL1 && currL2) {
        if (currL1.val < currL2.val) {
            currentNode.next = currL1;
            currL1 = currL1.next;
        }
        else {
            currentNode.next = currL2;
            currL2 = currL2.next;
        }
        currentNode = currentNode.next;
    }
    if (currL1)
        currentNode.next = currL1;
    if (currL2)
        currentNode.next = currL2;
    return headNode.next;
}

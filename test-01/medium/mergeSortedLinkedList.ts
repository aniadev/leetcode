// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const headNode = new ListNode()
  let currentNode = headNode
  let currL1 = list1
  let currL2 = list2
  while (currL1 && currL2) {
    if (currL1.val < currL2.val) {
      currentNode.next = currL1
      currL1 = currL1.next
    } else {
      currentNode.next = currL2
      currL2 = currL2.next
    }
    currentNode = currentNode.next
  }
  if (currL1) currentNode.next = currL1
  if (currL2) currentNode.next = currL2
  return headNode.next
}

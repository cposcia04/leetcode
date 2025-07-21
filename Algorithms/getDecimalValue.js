var getDecimalValue = function(head) {
    // Initialize a pointer to the current node, starting from the head of the list.
    let currentNode = head; // Renamed from 'current' for slightly more descriptive clarity

    // A string to build the binary representation of the number.
    let binaryString = ""; // Renamed from 'str' for much better clarity and specificity

    // Traverse the linked list until the end is reached (when currentNode becomes null).
    while (currentNode) {
        // Append the value (0 or 1) of the current node to the binary string.
        binaryString += currentNode.val;
        // Move the pointer to the next node in the list.
        currentNode = currentNode.next;
    }

    // Convert the binary string to its decimal integer equivalent.
    // 'parseInt(string, radix)' is the ideal function for this:
    // - 'binaryString' is the string to be parsed (e.g., "101").
    // - '2' is the 'radix' or base, indicating that the string should be interpreted as a binary number.
    let decimalValue = parseInt(binaryString, 2); // Renamed from 'res' for clearer intent

    // Return the calculated decimal value.
    return decimalValue;
};

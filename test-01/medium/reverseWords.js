function reverseWords(s) {
    var trimStr = s.trim().replace(/\s+/g, " ");
    return trimStr.split(" ").reverse().join(" ");
}

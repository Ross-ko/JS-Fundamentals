function test(data) {

    // ▪ [0-9]+ matches non-empty sequence of digits
    // ▪ [A-Z][a-z]* matches a capital + small letters

    // ▪ [nvj]+ matches any character that is either n, v or j
    //     node.js v0.12.2
    // ▪ [^abc] – matches any character that is not a, b or c
    //     Abraham John is 8 years old
    // ▪ [0-9] – character range: matches any digit from 0 to 9

    // ▪ \w – matches any word character (a-z, A-Z, 0-9, _)
    // ▪ \W – matches any non-word character (the opposite of \w)
    // ▪ \s – matches any white-space character
    // ▪ \S – matches any non-white-space character (opposite of \s)
    // ▪ \d – matches any decimal digit (0-9)
    // ▪ \D – matches any non-decimal character (the opposite of \d)

    // ▪ * – matches the previous element zero or more times +359885976002 a+b\+\d*
    // ▪ + – matches the previous element one or more times +359885976002 a+b\+\d+
    // ▪ ? – matches the previous element zero or one time +3 a+b\+\d?
    // ▪ {3} – matches the previous element exactly 3 times +359 a+b

    // ▪ (subexpression) – captures the matched subexpression as numbered group \d{2}-(\w{3})-\d{4} 22-Jan-2015
    // ▪ (?:subexpression) – defines a non-capturing group ^(?:Hi|hello),\s*(\w+)$ Hi, Peter
    // ▪ (?<name>subexpression) – defines a named capturing group (?<day>\d{2})-(?<month>\w{3})-
    //                                                                         ```(?<year>\d{4}) 22-Jan-2015


    







 }

test()
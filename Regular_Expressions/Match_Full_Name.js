function matchFullName(data) {
    
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = data.match(pattern);

    console.log(result.join(' '));
}

matchFullName('Rosen Ignatoff, ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan Ivanov');
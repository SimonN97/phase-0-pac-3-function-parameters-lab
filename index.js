function introduction(name) {
    console.log(name);
    return `Hi, my name is ${name}.`;
}
// console.log(introduction("Aki"));
introduction("Aki")

function introductionWithLanguage(name, language) {
    console.log(name, language)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Aki", "Ember.js")
introductionWithLanguage("Samip", "React")

function introductionWithLanguageOptional(name, language="JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptional("Gracie")
introductionWithLanguageOptional("Gracie", "Python")
//sanitize the sentence by removing any unappropriété caractere
const cleanSentence = (sentence) => {
    const uncleanCaracteres = [',','.',':','/','-','_','!','?',';','\’'];
    uncleanCaracteres.forEach( (caractere)  => {
        sentence = sentence.replaceAll(caractere , '');
    })

    return sentence;
};

//check if a word exit already as an object key in the words counted table
const checkIsExistKey = (tab, keyWord) => {

    for(let item of tab){
        const isPresente = Object.keys(item).includes(keyWord);
        if(isPresente){
            return true;
        };
    };

    return false

}; 

function counteWords(sentence){
    const newSentence = cleanSentence(sentence);
    const wordsArray = newSentence.toLowerCase().split(' ');
    let wordsCountedTab = [];

    wordsArray.forEach( word => {
        /*  
            insert new key word with his frequency 
            if he doesn't existe yet in the word counted tab
        */ 
        if(!checkIsExistKey(wordsCountedTab , word)){
            const counter = wordsArray.filter( (item) => item === word ).length;
            wordsCountedTab.push({
               [word] : counter 
            });
        };
    });

    //return a sorted table 
    return wordsCountedTab.sort( (prevItem , nextItem) => Object.values(nextItem)[0] - Object.values(prevItem)[0])
}

const text = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`

console.log(counteWords(text));










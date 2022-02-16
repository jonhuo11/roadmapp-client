import EmojiData from "../assets/emoji_data/emojifmt.json"
import EmojiKeywordsData from "../assets/emoji_data/emojifmtwords.json"
const Fuzzy = require("fuzzysort");

interface IEmojiQueryCb {
    (res: string[], err:any): void
}

// returns keywords matching a keyword query
// in order, 0 is most relevant
const GetMatchingKeywords = (qKeyword: string, max: number, cb:IEmojiQueryCb):void => {
    Fuzzy.goAsync(qKeyword, EmojiKeywordsData, {limit:max}).then((res: any) => {
        //console.log(res);
        res.sort((a:any, b:any) => {
            return a.score > b.score ? 1 : (a.score == b.score ? 0 : -1);
        });
        var o = [];
        for (var i = 0; i < res.length; i++) {
            o.push(res[i].target);
        }
        //console.log(o);
        cb(o.reverse(), null);

    }).catch((err:any) => {
        cb([], err);
    });
};

// returns emojis in order of relevance to query word
const SearchEmojis = (query: string, max: number, cb:IEmojiQueryCb):void => {
    GetMatchingKeywords(query, max, (res, err) => {
        if (err !== null) {
            // TODO error handling
            console.log(err);
            cb([], err);
        } else {
            var emojisOrdered:string[] = [];
            for (var i = 0; i < res.length; i++) {
                var key:string = res[i];
                var emArr:string[] = (EmojiData as any)[key];
                for (var j = 0; j < emArr.length; j++) {
                    // multiple keys can describe same emoji, so remove dupl
                    if (emojisOrdered.indexOf(emArr[j]) !== -1) {
                        continue;
                    }
                    emojisOrdered.push(emArr[j]);
                }
            }
            return cb(emojisOrdered, null);
        }
    });
};

const SerializeEmojiData = (raw: JSON)=> { // TODO wrote a python script for this but should do in js
    
    try {
    } catch (err) { // TODO handle error in loading
        console.log(err);
        
    }
};

export {SearchEmojis, SerializeEmojiData};
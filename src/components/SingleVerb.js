import { useParams, useHistory, NavLink, } from "react-router-dom"
import { useState } from "react"
import object from "./data"
import Helmet from "react-helmet"

const seulVerb = [
    { "result": "OK", "conjugated_forms": [["Infinitive", "to want"], ["Simple Past", "wanted"], ["Past Participle", "wanted"]], "conjugation_tables": { "conditional": [{ "heading": "conditional present", "forms": [["I", "would want"], ["you", "would want"], ["he/she/it", "would want"], ["we", "would want"], ["you", "would want"], ["they", "would want"]] }, { "heading": "conditional present progressive", "forms": [["I", "would be wanting"], ["you", "would be wanting"], ["he/she/it", "would be wanting"], ["we", "would be wanting"], ["you", "would be wanting"], ["they", "would be wanting"]] }, { "heading": "conditional perfect", "forms": [["I", "would have wanted"], ["you", "would have wanted"], ["he/she/it", "would have wanted"], ["we", "would have wanted"], ["you", "would have wanted"], ["they", "would have wanted"]] }, { "heading": "conditional perfect progressive", "forms": [["I", "would have been wanting"], ["you", "would have been wanting"], ["he/she/it", "would have been wanting"], ["we", "would have been wanting"], ["you", "would have been wanting"], ["they", "would have been wanting"]] }], "indicative": [{ "heading": "simple present", "forms": [["I", "want"], ["you", "want"], ["he/she/it", "wants"], ["we", "want"], ["you", "want"], ["they", "want"]] }, { "heading": "present progressive", "forms": [["I", "am wanting"], ["you", "are wanting"], ["he/she/it", "is wanting"], ["we", "are wanting"], ["you", "are wanting"], ["they", "are wanting"]] }, { "heading": "present perfect", "forms": [["I", "have wanted"], ["you", "have wanted"], ["he/she/it", "has wanted"], ["we", "have wanted"], ["you", "have wanted"], ["they", "have wanted"]] }, { "heading": "present perfect progressive", "forms": [["I", "have been wanting"], ["you", "have been wanting"], ["he/she/it", "has been wanting"], ["we", "have been wanting"], ["you", "have been wanting"], ["they", "have been wanting"]] }, { "heading": "simple past", "forms": [["I", "wanted"], ["you", "wanted"], ["he/she/it", "wanted"], ["we", "wanted"], ["you", "wanted"], ["they", "wanted"]] }, { "heading": "past progressive", "forms": [["I", "was wanting"], ["you", "were wanting"], ["he/she/it", "was wanting"], ["we", "were wanting"], ["you", "were wanting"], ["they", "were wanting"]] }, { "heading": "past perfect", "forms": [["I", "had wanted"], ["you", "had wanted"], ["he/she/it", "had wanted"], ["we", "had wanted"], ["you", "had wanted"], ["they", "had wanted"]] }, { "heading": "past perfect progressive", "forms": [["I", "had been wanting"], ["you", "had been wanting"], ["he/she/it", "had been wanting"], ["we", "had been wanting"], ["you", "had been wanting"], ["they", "had been wanting"]] }, { "heading": "simple future", "forms": [["I", "will want"], ["you", "will want"], ["he/she/it", "will want"], ["we", "will want"], ["you", "will want"], ["they", "will want"]] }, { "heading": "future progressive", "forms": [["I", "will be wanting"], ["you", "will be wanting"], ["he/she/it", "will be wanting"], ["we", "will be wanting"], ["you", "will be wanting"], ["they", "will be wanting"]] }, { "heading": "future perfect", "forms": [["I", "will have wanted"], ["you", "will have wanted"], ["he/she/it", "will have wanted"], ["we", "will have wanted"], ["you", "will have wanted"], ["they", "will have wanted"]] }, { "heading": "future perfect progressive", "forms": [["I", "will have been wanting"], ["you", "will have been wanting"], ["he/she/it", "will have been wanting"], ["we", "will have been wanting"], ["you", "will have been wanting"], ["they", "will have been wanting"]] }], "passive": [{ "heading": "passive simple present", "forms": [["I", "am wanted"], ["you", "are wanted"], ["he/she/it", "is wanted"], ["we", "are wanted"], ["you", "are wanted"], ["they", "are wanted"]] }, { "heading": "passive present progressive", "forms": [["I", "am being wanted"], ["you", "are being wanted"], ["he/she/it", "is being wanted"], ["we", "are being wanted"], ["you", "are being wanted"], ["they", "are being wanted"]] }, { "heading": "passive present perfect", "forms": [["I", "have been wanted"], ["you", "have been wanted"], ["he/she/it", "has been wanted"], ["we", "have been wanted"], ["you", "have been wanted"], ["they", "have been wanted"]] }, { "heading": "passive present perfect progressive", "forms": [["I", "have been being wanted"], ["you", "have been being wanted"], ["he/she/it", "has been being wanted"], ["we", "have been being wanted"], ["you", "have been being wanted"], ["they", "have been being wanted"]] }, { "heading": "passive simple past", "forms": [["I", "was wanted"], ["you", "were wanted"], ["he/she/it", "was wanted"], ["we", "were wanted"], ["you", "were wanted"], ["they", "were wanted"]] }, { "heading": "passive past progressive", "forms": [["I", "was being wanted"], ["you", "were being wanted"], ["he/she/it", "was being wanted"], ["we", "were being wanted"], ["you", "were being wanted"], ["they", "were being wanted"]] }, { "heading": "passive past perfect", "forms": [["I", "had been wanted"], ["you", "had been wanted"], ["he/she/it", "had been wanted"], ["we", "had been wanted"], ["you", "had been wanted"], ["they", "had been wanted"]] }, { "heading": "passive past perfect progressive", "forms": [["I", "had been being wanted"], ["you", "had been being wanted"], ["he/she/it", "had been being wanted"], ["we", "had been being wanted"], ["you", "had been being wanted"], ["they", "had been being wanted"]] }, { "heading": "passive simple future", "forms": [["I", "will be wanted"], ["you", "will be wanted"], ["he/she/it", "will be wanted"], ["we", "will be wanted"], ["you", "will be wanted"], ["they", "will be wanted"]] }, { "heading": "passive future progressive", "forms": [["I", "will be being wanted"], ["you", "will be being wanted"], ["he/she/it", "will be being wanted"], ["we", "will be being wanted"], ["you", "will be being wanted"], ["they", "will be being wanted"]] }, { "heading": "passive future perfect", "forms": [["I", "will have been wanted"], ["you", "will have been wanted"], ["he/she/it", "will have been wanted"], ["we", "will have been wanted"], ["you", "will have been wanted"], ["they", "will have been wanted"]] }, { "heading": "passive future perfect progressive", "forms": [["I", "will have been being wanted"], ["you", "will have been being wanted"], ["he/she/it", "will have been being wanted"], ["we", "will have been being wanted"], ["you", "will have been being wanted"], ["they", "will have been being wanted"]] }] }, "_id": "UB9qgcz9lubtGjiX" }
]


function SingleVerb() {
    const { singleVerb } = useParams()
    /* const [error, seterror] = useState("") */

    const verbSingleOne = singleVerb.split("-")[2].split(".")[0]
    console.log("voici ", verbSingleOne)
    const title = `Conjugation  ${verbSingleOne} | Conjugate verb ${verbSingleOne} | Simplicyto Conjugator English`

    /* const speakVerb =(a,b) => {
        const utterance = new SpeechSynthesisUtterance(a + b)
        utterance.rate = 1
        utterance.lang = "us-US"
        speechSynthesis.speak(utterance)
    } */


    let result5;
    let rechercheVerb;
    let error;


    rechercheVerb = object.filter(element => element.conjugated_forms[0][1].split(" ")[1] === verbSingleOne || element.conjugated_forms[1][1] === verbSingleOne || element.conjugated_forms[1][1] === verbSingleOne || element.conjugated_forms[2][1] === verbSingleOne)

    if (rechercheVerb.length === 0) {
        result5 = seulVerb
        error = `"${verbSingleOne}" does not exist so far`
    } else {
        result5 = rechercheVerb
    }









    const [inputValue, setinputValue] = useState(verbSingleOne)
    const [titre, settitre] = useState(result5[0].conjugated_forms[0][0] + " : ")
    const [valeurTitre, setvaleurTitre] = useState(result5[0].conjugated_forms[0][1])
    const [SimplePast1, setSimplePast1] = useState(result5[0].conjugated_forms[1][0] + " : ")
    const [SimplePastValue, setSimplePastValue] = useState(result5[0].conjugated_forms[1][1])
    const [PastParticipe, setPastParticipe] = useState(result5[0].conjugated_forms[2][0] + " : ")
    const [PastParticipeValue, setPastParticipeValue] = useState(result5[0].conjugated_forms[2][1])
    const [SimplePresent, setSimplePresent] = useState(result5[0].conjugation_tables.indicative[0].heading.toUpperCase())
    const [PresentI, setPresentI] = useState(result5[0].conjugation_tables.indicative[0].forms[0][0])
    const [PresentIRresult, setPresentIRresult] = useState(result5[0].conjugation_tables.indicative[0].forms[0][1])
    const [PresentYou, setPresentYou] = useState(result5[0].conjugation_tables.indicative[0].forms[1][0])
    const [PresentYouResult, setPresentYouResult] = useState(result5[0].conjugation_tables.indicative[0].forms[1][1])
    const [PresentHe, setPresentHe] = useState(result5[0].conjugation_tables.indicative[0].forms[2][0])
    const [PresentHeResult, setPresentHeResult] = useState(result5[0].conjugation_tables.indicative[0].forms[2][1])
    const [PresentWe, setPresentWe] = useState(result5[0].conjugation_tables.indicative[0].forms[3][0])
    const [PresentWeResult, setPresentWeResult] = useState(result5[0].conjugation_tables.indicative[0].forms[3][1])
    const [PresentYou1, setPresentYou1] = useState(result5[0].conjugation_tables.indicative[0].forms[4][0])
    const [PresentYou1Result, setPresentYou1Result] = useState(result5[0].conjugation_tables.indicative[0].forms[4][1])
    const [PresentThey, setPresentThey] = useState(result5[0].conjugation_tables.indicative[0].forms[5][0])
    const [PresentTheyResult, setPresentTheyResult] = useState(result5[0].conjugation_tables.indicative[0].forms[5][1])

    /* present progressive */
    const [PresentProgressive, setPresentProgressive] = useState(result5[0].conjugation_tables.indicative[1].heading.toUpperCase())
    const [PresentProgressiveI, setPresentProgressiveI] = useState(result5[0].conjugation_tables.indicative[1].forms[0][0])
    const [PresentProgressiveIRresult, setPresentProgressiveIRresult] = useState(result5[0].conjugation_tables.indicative[1].forms[0][1])
    const [PresentProgressiveYou, setPresentProgressiveYou] = useState(result5[0].conjugation_tables.indicative[1].forms[1][0])
    const [PresentProgressiveYouResult, setPresentProgressiveYouResult] = useState(result5[0].conjugation_tables.indicative[1].forms[1][1])
    const [PresentProgressiveHe, setPresentProgressiveHe] = useState(result5[0].conjugation_tables.indicative[1].forms[2][0])
    const [PresentProgressiveHeResult, setPresentProgressiveHeResult] = useState(result5[0].conjugation_tables.indicative[1].forms[2][1])
    const [PresentProgressiveWe, setPresentProgressiveWe] = useState(result5[0].conjugation_tables.indicative[1].forms[3][0])
    const [PresentProgressiveWeResult, setPresentProgressiveWeResult] = useState(result5[0].conjugation_tables.indicative[1].forms[3][1])
    const [PresentProgressiveYou1, setPresentProgressiveYou1] = useState(result5[0].conjugation_tables.indicative[1].forms[4][0])
    const [PresentProgressiveYou1Result, setPresentProgressiveYou1Result] = useState(result5[0].conjugation_tables.indicative[1].forms[4][1])
    const [PresentProgressiveThey, setPresentProgressiveThey] = useState(result5[0].conjugation_tables.indicative[1].forms[5][0])
    const [PresentProgressiveTheyResult, setPresentProgressiveTheyResult] = useState(result5[0].conjugation_tables.indicative[1].forms[5][1])



    /* present perfect */
    const [PresentPerfect, setPresentPerfect] = useState(result5[0].conjugation_tables.indicative[2].heading.toUpperCase())
    const [PresentPerfectI, setPresentPerfectI] = useState(result5[0].conjugation_tables.indicative[2].forms[0][0])
    const [PresentPerfectIRresult, setPresentPerfectIRresult] = useState(result5[0].conjugation_tables.indicative[2].forms[0][1])
    const [PresentPerfectYou, setPresentPerfectYou] = useState(result5[0].conjugation_tables.indicative[2].forms[1][0])
    const [PresentPerfectYouResult, setPresentPerfectYouResult] = useState(result5[0].conjugation_tables.indicative[2].forms[1][1])
    const [PresentPerfectHe, setPresentPerfectHe] = useState(result5[0].conjugation_tables.indicative[2].forms[2][0])
    const [PresentPerfectHeResult, setPresentPerfectHeResult] = useState(result5[0].conjugation_tables.indicative[2].forms[2][1])
    const [PresentPerfectWe, setPresentPerfectWe] = useState(result5[0].conjugation_tables.indicative[2].forms[3][0])
    const [PresentPerfectWeResult, setPresentPerfectWeResult] = useState(result5[0].conjugation_tables.indicative[2].forms[3][1])
    const [PresentPerfectYou1, setPresentPerfectYou1] = useState(result5[0].conjugation_tables.indicative[2].forms[4][0])
    const [PresentPerfectYou1Result, setPresentPerfectYou1Result] = useState(result5[0].conjugation_tables.indicative[2].forms[4][1])
    const [PresentPerfectThey, setPresentPerfectThey] = useState(result5[0].conjugation_tables.indicative[2].forms[5][0])
    const [PresentPerfectTheyResult, setPresentPerfectTheyResult] = useState(result5[0].conjugation_tables.indicative[2].forms[5][1])

    /* present perfect progressive */
    const [PresentPerfectProgressive, setPresentPerfectProgressive] = useState(result5[0].conjugation_tables.indicative[3].heading.toUpperCase())
    const [PresentPerfectProgressiveI, setPresentPerfectProgressiveI] = useState(result5[0].conjugation_tables.indicative[3].forms[0][0])
    const [PresentPerfectProgressiveIRresult, setPresentPerfectProgressiveIRresult] = useState(result5[0].conjugation_tables.indicative[3].forms[0][1])
    const [PresentPerfectProgressiveYou, setPresentPerfectProgressiveYou] = useState(result5[0].conjugation_tables.indicative[3].forms[1][0])
    const [PresentPerfectProgressiveYouResult, setPresentPerfectProgressiveYouResult] = useState(result5[0].conjugation_tables.indicative[3].forms[1][1])
    const [PresentPerfectProgressiveHe, setPresentPerfectProgressiveHe] = useState(result5[0].conjugation_tables.indicative[3].forms[2][0])
    const [PresentPerfectProgressiveHeResult, setPresentPerfectProgressiveHeResult] = useState(result5[0].conjugation_tables.indicative[3].forms[2][1])
    const [PresentPerfectProgressiveWe, setPresentPerfectProgressiveWe] = useState(result5[0].conjugation_tables.indicative[3].forms[3][0])
    const [PresentPerfectProgressiveWeResult, setPresentPerfectProgressiveWeResult] = useState(result5[0].conjugation_tables.indicative[3].forms[3][1])
    const [PresentPerfectProgressiveYou1, setPresentPerfectProgressiveYou1] = useState(result5[0].conjugation_tables.indicative[3].forms[4][0])
    const [PresentPerfectProgressiveYou1Result, setPresentPerfectProgressiveYou1Result] = useState(result5[0].conjugation_tables.indicative[3].forms[4][1])
    const [PresentPerfectProgressiveThey, setPresentPerfectProgressiveThey] = useState(result5[0].conjugation_tables.indicative[3].forms[5][0])
    const [PresentPerfectProgressiveTheyResult, setPresentPerfectProgressiveTheyResult] = useState(result5[0].conjugation_tables.indicative[3].forms[5][1])


    /* simple past */
    const [SimplePast, setSimplePast] = useState(result5[0].conjugation_tables.indicative[4].heading.toUpperCase())
    const [SimplePastI, setSimplePastI] = useState(result5[0].conjugation_tables.indicative[4].forms[0][0])
    const [SimplePastIRresult, setSimplePastIRresult] = useState(result5[0].conjugation_tables.indicative[4].forms[0][1])
    const [SimplePastYou, setSimplePastYou] = useState(result5[0].conjugation_tables.indicative[4].forms[1][0])
    const [SimplePastYouResult, setSimplePastYouResult] = useState(result5[0].conjugation_tables.indicative[4].forms[1][1])
    const [SimplePastHe, setSimplePastHe] = useState(result5[0].conjugation_tables.indicative[4].forms[2][0])
    const [SimplePastHeResult, setSimplePastHeResult] = useState(result5[0].conjugation_tables.indicative[4].forms[2][1])
    const [SimplePastWe, setSimplePastWe] = useState(result5[0].conjugation_tables.indicative[4].forms[3][0])
    const [SimplePastWeResult, setSimplePastWeResult] = useState(result5[0].conjugation_tables.indicative[4].forms[3][1])
    const [SimplePastYou1, setSimplePastYou1] = useState(result5[0].conjugation_tables.indicative[4].forms[4][0])
    const [SimplePastYou1Result, setSimplePastYou1Result] = useState(result5[0].conjugation_tables.indicative[4].forms[4][1])
    const [SimplePastThey, setSimplePastThey] = useState(result5[0].conjugation_tables.indicative[4].forms[5][0])
    const [SimplePastTheyResult, setSimplePastTheyResult] = useState(result5[0].conjugation_tables.indicative[4].forms[5][1])


    /*  past progressive */
    const [PastProgressive, setPastProgressive] = useState(result5[0].conjugation_tables.indicative[5].heading.toUpperCase())
    const [PastProgressiveI, setPastProgressiveI] = useState(result5[0].conjugation_tables.indicative[5].forms[0][0])
    const [PastProgressiveIRresult, setPastProgressiveIRresult] = useState(result5[0].conjugation_tables.indicative[5].forms[0][1])
    const [PastProgressiveYou, setPastProgressiveYou] = useState(result5[0].conjugation_tables.indicative[5].forms[1][0])
    const [PastProgressiveYouResult, setPastProgressiveYouResult] = useState(result5[0].conjugation_tables.indicative[5].forms[1][1])
    const [PastProgressiveHe, setPastProgressiveHe] = useState(result5[0].conjugation_tables.indicative[5].forms[2][0])
    const [PastProgressiveHeResult, setPastProgressiveHeResult] = useState(result5[0].conjugation_tables.indicative[5].forms[2][1])
    const [PastProgressiveWe, setPastProgressiveWe] = useState(result5[0].conjugation_tables.indicative[5].forms[3][0])
    const [PastProgressiveWeResult, setPastProgressiveWeResult] = useState(result5[0].conjugation_tables.indicative[5].forms[3][1])
    const [PastProgressiveYou1, setPastProgressiveYou1] = useState(result5[0].conjugation_tables.indicative[5].forms[3][1])
    const [PastProgressiveYou1Result, setPastProgressiveYou1Result] = useState(result5[0].conjugation_tables.indicative[5].forms[4][1])
    const [PastProgressiveThey, setPastProgressiveThey] = useState(result5[0].conjugation_tables.indicative[5].forms[5][0])
    const [PastProgressiveTheyResult, setPastProgressiveTheyResult] = useState(result5[0].conjugation_tables.indicative[5].forms[5][1])

    /*  past perfect */
    const [PastPerfect, setPastPerfect] = useState(result5[0].conjugation_tables.indicative[6].heading.toUpperCase())
    const [PastPerfectI, setPastPerfectI] = useState(result5[0].conjugation_tables.indicative[6].forms[0][0])
    const [PastPerfectIRresult, setPastPerfectIRresult] = useState(result5[0].conjugation_tables.indicative[6].forms[0][1])
    const [PastPerfectYou, setPastPerfectYou] = useState(result5[0].conjugation_tables.indicative[6].forms[1][0])
    const [PastPerfectYouResult, setPastPerfectYouResult] = useState(result5[0].conjugation_tables.indicative[6].forms[1][1])
    const [PastPerfectHe, setPastPerfectHe] = useState(result5[0].conjugation_tables.indicative[6].forms[2][0])
    const [PastPerfectHeResult, setPastPerfectHeResult] = useState(result5[0].conjugation_tables.indicative[6].forms[2][1])
    const [PastPerfectWe, setPastPerfectWe] = useState(result5[0].conjugation_tables.indicative[6].forms[3][0])
    const [PastPerfectWeResult, setPastPerfectWeResult] = useState(result5[0].conjugation_tables.indicative[6].forms[3][1])
    const [PastPerfectYou1, setPastPerfectYou1] = useState(result5[0].conjugation_tables.indicative[6].forms[4][0])
    const [PastPerfectYou1Result, setPastPerfectYou1Result] = useState(result5[0].conjugation_tables.indicative[6].forms[4][1])
    const [PastPerfectThey, setPastPerfectThey] = useState(result5[0].conjugation_tables.indicative[6].forms[5][0])
    const [PastPerfectTheyResult, setPastPerfectTheyResult] = useState(result5[0].conjugation_tables.indicative[6].forms[5][1])


    /*  past perfect progressive */
    const [PastPerfectProgressive, setPastPerfectProgressive] = useState(result5[0].conjugation_tables.indicative[7].heading.toUpperCase())
    const [PastPerfectProgressiveI, setPastPerfectProgressiveI] = useState(result5[0].conjugation_tables.indicative[7].forms[0][0])
    const [PastPerfectProgressiveIRresult, setPastPerfectProgressiveIRresult] = useState(result5[0].conjugation_tables.indicative[7].forms[0][1])
    const [PastPerfectProgressiveYou, setPastPerfectProgressiveYou] = useState(result5[0].conjugation_tables.indicative[7].forms[1][0])
    const [PastPerfectProgressiveYouResult, setPastPerfectProgressiveYouResult] = useState(result5[0].conjugation_tables.indicative[7].forms[1][1])
    const [PastPerfectProgressiveHe, setPastPerfectProgressiveHe] = useState(result5[0].conjugation_tables.indicative[7].forms[2][0])
    const [PastPerfectProgressiveHeResult, setPastPerfectProgressiveHeResult] = useState(result5[0].conjugation_tables.indicative[7].forms[2][1])
    const [PastPerfectProgressiveWe, setPastPerfectProgressiveWe] = useState(result5[0].conjugation_tables.indicative[7].forms[3][0])
    const [PastPerfectProgressiveWeResult, setPastPerfectProgressiveWeResult] = useState(result5[0].conjugation_tables.indicative[7].forms[3][1])
    const [PastPerfectProgressiveYou1, setPastPerfectProgressiveYou1] = useState(result5[0].conjugation_tables.indicative[7].forms[4][0])
    const [PastPerfectProgressiveYou1Result, setPastPerfectProgressiveYou1Result] = useState(result5[0].conjugation_tables.indicative[7].forms[4][1])
    const [PastPerfectProgressiveThey, setPastPerfectProgressiveThey] = useState(result5[0].conjugation_tables.indicative[7].forms[5][0])
    const [PastPerfectProgressiveTheyResult, setPastPerfectProgressiveTheyResult] = useState(result5[0].conjugation_tables.indicative[7].forms[5][1])


    /*  simple future */
    const [SimpleFuture, setSimpleFuture] = useState(result5[0].conjugation_tables.indicative[8].heading.toUpperCase())
    const [SimpleFutureI, setSimpleFutureI] = useState(result5[0].conjugation_tables.indicative[8].forms[0][0])
    const [SimpleFutureIRresult, setSimpleFutureIRresult] = useState(result5[0].conjugation_tables.indicative[8].forms[0][1])
    const [SimpleFutureYou, setSimpleFutureYou] = useState(result5[0].conjugation_tables.indicative[8].forms[1][0])
    const [SimpleFutureYouResult, setSimpleFutureYouResult] = useState(result5[0].conjugation_tables.indicative[8].forms[1][1])
    const [SimpleFutureHe, setSimpleFutureHe] = useState(result5[0].conjugation_tables.indicative[8].forms[2][0])
    const [SimpleFutureHeResult, setSimpleFutureHeResult] = useState(result5[0].conjugation_tables.indicative[8].forms[2][1])
    const [SimpleFutureWe, setSimpleFutureWe] = useState(result5[0].conjugation_tables.indicative[8].forms[3][0])
    const [SimpleFutureWeResult, setSimpleFutureWeResult] = useState(result5[0].conjugation_tables.indicative[8].forms[3][1])
    const [SimpleFutureYou1, setSimpleFutureYou1] = useState(result5[0].conjugation_tables.indicative[8].forms[4][0])
    const [SimpleFutureYou1Result, setSimpleFutureYou1Result] = useState(result5[0].conjugation_tables.indicative[8].forms[4][1])
    const [SimpleFutureThey, setSimpleFutureThey] = useState(result5[0].conjugation_tables.indicative[8].forms[5][0])
    const [SimpleFutureTheyResult, setSimpleFutureTheyResult] = useState(result5[0].conjugation_tables.indicative[8].forms[5][1])


    /*  future progressive */
    const [FuturProgressive, setFuturProgressive] = useState(result5[0].conjugation_tables.indicative[9].heading.toUpperCase())
    const [FuturProgressiveI, setFuturProgressiveI] = useState(result5[0].conjugation_tables.indicative[9].forms[0][0])
    const [FuturProgressiveIRresult, setFuturProgressiveIRresult] = useState(result5[0].conjugation_tables.indicative[9].forms[0][1])
    const [FuturProgressiveYou, setFuturProgressiveYou] = useState(result5[0].conjugation_tables.indicative[9].forms[1][0])
    const [FuturProgressiveYouResult, setFuturProgressiveYouResult] = useState(result5[0].conjugation_tables.indicative[9].forms[1][1])
    const [FuturProgressiveHe, setFuturProgressiveHe] = useState(result5[0].conjugation_tables.indicative[9].forms[2][0])
    const [FuturProgressiveHeResult, setFuturProgressiveHeResult] = useState(result5[0].conjugation_tables.indicative[9].forms[2][1])
    const [FuturProgressiveWe, setFuturProgressiveWe] = useState(result5[0].conjugation_tables.indicative[9].forms[3][0])
    const [FuturProgressiveWeResult, setFuturProgressiveWeResult] = useState(result5[0].conjugation_tables.indicative[9].forms[3][1])
    const [FuturProgressiveYou1, setFuturProgressiveYou1] = useState(result5[0].conjugation_tables.indicative[9].forms[4][0])
    const [FuturProgressiveYou1Result, setFuturProgressiveYou1Result] = useState(result5[0].conjugation_tables.indicative[9].forms[4][1])
    const [FuturProgressiveThey, setFuturProgressiveThey] = useState(result5[0].conjugation_tables.indicative[9].forms[5][0])
    const [FuturProgressiveTheyResult, setFuturProgressiveTheyResult] = useState(result5[0].conjugation_tables.indicative[9].forms[5][1])


    /*  future perfect */
    const [FuturePerfect, setFuturePerfect] = useState(result5[0].conjugation_tables.indicative[10].heading.toUpperCase())
    const [FuturePerfectI, setFuturePerfectI] = useState(result5[0].conjugation_tables.indicative[10].forms[0][0])
    const [FuturePerfectIRresult, setFuturePerfectIRresult] = useState(result5[0].conjugation_tables.indicative[10].forms[0][1])
    const [FuturePerfectYou, setFuturePerfectYou] = useState(result5[0].conjugation_tables.indicative[10].forms[1][0])
    const [FuturePerfectYouResult, setFuturePerfectYouResult] = useState(result5[0].conjugation_tables.indicative[10].forms[1][1])
    const [FuturePerfectHe, setFuturePerfectHe] = useState(result5[0].conjugation_tables.indicative[10].forms[2][0])
    const [FuturePerfectHeResult, setFuturePerfectHeResult] = useState(result5[0].conjugation_tables.indicative[10].forms[2][1])
    const [FuturePerfectWe, setFuturePerfectWe] = useState(result5[0].conjugation_tables.indicative[10].forms[3][0])
    const [FuturePerfectWeResult, setFuturePerfectWeResult] = useState(result5[0].conjugation_tables.indicative[10].forms[3][1])
    const [FuturePerfectYou1, setFuturePerfectYou1] = useState(result5[0].conjugation_tables.indicative[10].forms[4][0])
    const [FuturePerfectYou1Result, setFuturePerfectYou1Result] = useState(result5[0].conjugation_tables.indicative[10].forms[4][1])
    const [FuturePerfectThey, setFuturePerfectThey] = useState(result5[0].conjugation_tables.indicative[10].forms[5][0])
    const [FuturePerfectTheyResult, setFuturePerfectTheyResult] = useState(result5[0].conjugation_tables.indicative[10].forms[5][1])

    /*  future perfect progressive */
    const [FuturePerfectProgressive, setFuturePerfectProgressive] = useState(result5[0].conjugation_tables.indicative[11].heading.toUpperCase())
    const [FuturePerfectProgressiveI, setFuturePerfectProgressiveI] = useState(result5[0].conjugation_tables.indicative[11].forms[0][0])
    const [FuturePerfectProgressiveIRresult, setFuturePerfectProgressiveIRresult] = useState(result5[0].conjugation_tables.indicative[11].forms[0][1])
    const [FuturePerfectProgressiveYou, setFuturePerfectProgressiveYou] = useState(result5[0].conjugation_tables.indicative[11].forms[1][0])
    const [FuturePerfectProgressiveYouResult, setFuturePerfectProgressiveYouResult] = useState(result5[0].conjugation_tables.indicative[11].forms[1][1])
    const [FuturePerfectProgressiveHe, setFuturePerfectProgressiveHe] = useState(result5[0].conjugation_tables.indicative[11].forms[2][0])
    const [FuturePerfectProgressiveHeResult, setFuturePerfectProgressiveHeResult] = useState(result5[0].conjugation_tables.indicative[11].forms[2][1])
    const [FuturePerfectProgressiveWe, setFuturePerfectProgressiveWe] = useState(result5[0].conjugation_tables.indicative[11].forms[3][0])
    const [FuturePerfectProgressiveWeResult, setFuturePerfectProgressiveWeResult] = useState(result5[0].conjugation_tables.indicative[11].forms[3][1])
    const [FuturePerfectProgressiveYou1, setFuturePerfectProgressiveYou1] = useState(result5[0].conjugation_tables.indicative[11].forms[4][0])
    const [FuturePerfectProgressiveYou1Result, setFuturePerfectProgressiveYou1Result] = useState(result5[0].conjugation_tables.indicative[11].forms[4][1])
    const [FuturePerfectProgressiveThey, setFuturePerfectProgressiveThey] = useState(result5[0].conjugation_tables.indicative[11].forms[5][0])
    const [FuturePerfectProgressiveTheyResult, setFuturePerfectProgressiveTheyResult] = useState(result5[0].conjugation_tables.indicative[11].forms[5][1])




    /* passive de tout ---------------------------------------------------------------- */


    const [SimplePassivePresent, setSimplePassivePresent] = useState(result5[0].conjugation_tables.passive[0].heading.toUpperCase())
    const [PassivePresentI, setPassivePresentI] = useState(result5[0].conjugation_tables.passive[0].forms[0][0])
    const [PassivePresentIRresult, setPassivePresentIRresult] = useState(result5[0].conjugation_tables.passive[0].forms[0][1])
    const [PassivePresentYou, setPassivePresentYou] = useState(result5[0].conjugation_tables.passive[0].forms[1][0])
    const [PassivePresentYouResult, setPassivePresentYouResult] = useState(result5[0].conjugation_tables.passive[0].forms[1][1])
    const [PassivePresentHe, setPassivePresentHe] = useState(result5[0].conjugation_tables.passive[0].forms[2][0])
    const [PassivePresentHeResult, setPassivePresentHeResult] = useState(result5[0].conjugation_tables.passive[0].forms[2][1])
    const [PassivePresentWe, setPassivePresentWe] = useState(result5[0].conjugation_tables.passive[0].forms[3][0])
    const [PassivePresentWeResult, setPassivePresentWeResult] = useState(result5[0].conjugation_tables.passive[0].forms[3][1])
    const [PassivePresentYou1, setPassivePresentYou1] = useState(result5[0].conjugation_tables.passive[0].forms[4][0])
    const [PassivePresentYou1Result, setPassivePresentYou1Result] = useState(result5[0].conjugation_tables.passive[0].forms[4][1])
    const [PassivePresentThey, setPassivePresentThey] = useState(result5[0].conjugation_tables.passive[0].forms[5][0])
    const [PassivePresentTheyResult, setPassivePresentTheyResult] = useState(result5[0].conjugation_tables.passive[0].forms[5][1])

    /* present progressive */
    const [PassivePresentProgressive, setPassivePresentProgressive] = useState(result5[0].conjugation_tables.passive[1].heading.toUpperCase())
    const [PassivePresentProgressiveI, setPassivePresentProgressiveI] = useState(result5[0].conjugation_tables.passive[1].forms[0][0])
    const [PassivePresentProgressiveIRresult, setPassivePresentProgressiveIRresult] = useState(result5[0].conjugation_tables.passive[1].forms[0][1])
    const [PassivePresentProgressiveYou, setPassivePresentProgressiveYou] = useState(result5[0].conjugation_tables.passive[1].forms[1][0])
    const [PassivePresentProgressiveYouResult, setPassivePresentProgressiveYouResult] = useState(result5[0].conjugation_tables.passive[1].forms[1][1])
    const [PassivePresentProgressiveHe, setPassivePresentProgressiveHe] = useState(result5[0].conjugation_tables.passive[1].forms[2][0])
    const [PassivePresentProgressiveHeResult, setPassivePresentProgressiveHeResult] = useState(result5[0].conjugation_tables.passive[1].forms[2][1])
    const [PassivePresentProgressiveWe, setPassivePresentProgressiveWe] = useState(result5[0].conjugation_tables.passive[1].forms[3][0])
    const [PassivePresentProgressiveWeResult, setPassivePresentProgressiveWeResult] = useState(result5[0].conjugation_tables.passive[1].forms[3][1])
    const [PassivePresentProgressiveYou1, setPassivePresentProgressiveYou1] = useState(result5[0].conjugation_tables.passive[1].forms[4][0])
    const [PassivePresentProgressiveYou1Result, setPassivePresentProgressiveYou1Result] = useState(result5[0].conjugation_tables.passive[1].forms[4][1])
    const [PassivePresentProgressiveThey, setPassivePresentProgressiveThey] = useState(result5[0].conjugation_tables.passive[1].forms[5][0])
    const [PassivePresentProgressiveTheyResult, setPassivePresentProgressiveTheyResult] = useState(result5[0].conjugation_tables.passive[1].forms[5][1])



    /* Passivepresent perfect */
    const [PassivePresentPerfect, setPassivePresentPerfect] = useState(result5[0].conjugation_tables.passive[2].heading.toUpperCase())
    const [PassivePresentPerfectI, setPassivePresentPerfectI] = useState(result5[0].conjugation_tables.passive[2].forms[0][0])
    const [PassivePresentPerfectIRresult, setPassivePresentPerfectIRresult] = useState(result5[0].conjugation_tables.passive[2].forms[0][1])
    const [PassivePresentPerfectYou, setPassivePresentPerfectYou] = useState(result5[0].conjugation_tables.passive[2].forms[1][0])
    const [PassivePresentPerfectYouResult, setPassivePresentPerfectYouResult] = useState(result5[0].conjugation_tables.passive[2].forms[1][1])
    const [PassivePresentPerfectHe, setPassivePresentPerfectHe] = useState(result5[0].conjugation_tables.passive[2].forms[2][0])
    const [PassivePresentPerfectHeResult, setPassivePresentPerfectHeResult] = useState(result5[0].conjugation_tables.passive[2].forms[2][1])
    const [PassivePresentPerfectWe, setPassivePresentPerfectWe] = useState(result5[0].conjugation_tables.passive[2].forms[3][0])
    const [PassivePresentPerfectWeResult, setPassivePresentPerfectWeResult] = useState(result5[0].conjugation_tables.passive[2].forms[3][1])
    const [PassivePresentPerfectYou1, setPassivePresentPerfectYou1] = useState(result5[0].conjugation_tables.passive[2].forms[4][0])
    const [PassivePresentPerfectYou1Result, setPassivePresentPerfectYou1Result] = useState(result5[0].conjugation_tables.passive[2].forms[4][1])
    const [PassivePresentPerfectThey, setPassivePresentPerfectThey] = useState(result5[0].conjugation_tables.passive[2].forms[5][0])
    const [PassivePresentPerfectTheyResult, setPassivePresentPerfectTheyResult] = useState(result5[0].conjugation_tables.passive[2].forms[5][1])

    /* Passivepresent perfect progressive */
    const [PassivePresentPerfectProgressive, setPassivePresentPerfectProgressive] = useState(result5[0].conjugation_tables.passive[3].heading.toUpperCase())
    const [PassivePresentPerfectProgressiveI, setPassivePresentPerfectProgressiveI] = useState(result5[0].conjugation_tables.passive[3].forms[0][0])
    const [PassivePresentPerfectProgressiveIRresult, setPassivePresentPerfectProgressiveIRresult] = useState(result5[0].conjugation_tables.passive[3].forms[0][1])
    const [PassivePresentPerfectProgressiveYou, setPassivePresentPerfectProgressiveYou] = useState(result5[0].conjugation_tables.passive[3].forms[1][0])
    const [PassivePresentPerfectProgressiveYouResult, setPassivePresentPerfectProgressiveYouResult] = useState(result5[0].conjugation_tables.passive[3].forms[1][1])
    const [PassivePresentPerfectProgressiveHe, setPassivePresentPerfectProgressiveHe] = useState(result5[0].conjugation_tables.passive[3].forms[2][0])
    const [PassivePresentPerfectProgressiveHeResult, setPassivePresentPerfectProgressiveHeResult] = useState(result5[0].conjugation_tables.passive[3].forms[2][1])
    const [PassivePresentPerfectProgressiveWe, setPassivePresentPerfectProgressiveWe] = useState(result5[0].conjugation_tables.passive[3].forms[3][0])
    const [PassivePresentPerfectProgressiveWeResult, setPassivePresentPerfectProgressiveWeResult] = useState(result5[0].conjugation_tables.passive[3].forms[3][1])
    const [PassivePresentPerfectProgressiveYou1, setPassivePresentPerfectProgressiveYou1] = useState(result5[0].conjugation_tables.passive[3].forms[4][0])
    const [PassivePresentPerfectProgressiveYou1Result, setPassivePresentPerfectProgressiveYou1Result] = useState(result5[0].conjugation_tables.passive[3].forms[4][1])
    const [PassivePresentPerfectProgressiveThey, setPassivePresentPerfectProgressiveThey] = useState(result5[0].conjugation_tables.passive[3].forms[5][0])
    const [PassivePresentPerfectProgressiveTheyResult, setPassivePresentPerfectProgressiveTheyResult] = useState(result5[0].conjugation_tables.passive[3].forms[5][1])


    /* simple past */
    const [SimplePassivePast, setSimplePassivePast] = useState(result5[0].conjugation_tables.passive[4].heading.toUpperCase())
    const [SimplePassivePastI, setSimplePassivePastI] = useState(result5[0].conjugation_tables.passive[4].forms[0][0])
    const [SimplePassivePastIRresult, setSimplePassivePastIRresult] = useState(result5[0].conjugation_tables.passive[4].forms[0][1])
    const [SimplePassivePastYou, setSimplePassivePastYou] = useState(result5[0].conjugation_tables.passive[4].forms[1][0])
    const [SimplePassivePastYouResult, setSimplePassivePastYouResult] = useState(result5[0].conjugation_tables.passive[4].forms[1][1])
    const [SimplePassivePastHe, setSimplePassivePastHe] = useState(result5[0].conjugation_tables.passive[4].forms[2][0])
    const [SimplePassivePastHeResult, setSimplePassivePastHeResult] = useState(result5[0].conjugation_tables.passive[4].forms[2][1])
    const [SimplePassivePastWe, setSimplePassivePastWe] = useState(result5[0].conjugation_tables.passive[4].forms[3][0])
    const [SimplePassivePastWeResult, setSimplePassivePastWeResult] = useState(result5[0].conjugation_tables.passive[4].forms[3][1])
    const [SimplePassivePastYou1, setSimplePassivePastYou1] = useState(result5[0].conjugation_tables.passive[4].forms[4][0])
    const [SimplePassivePastYou1Result, setSimplePassivePastYou1Result] = useState(result5[0].conjugation_tables.passive[4].forms[4][1])
    const [SimplePassivePastThey, setSimplePassivePastThey] = useState(result5[0].conjugation_tables.passive[4].forms[5][0])
    const [SimplePassivePastTheyResult, setSimplePassivePastTheyResult] = useState(result5[0].conjugation_tables.passive[4].forms[5][1])


    /*  Passivepast progressive */
    const [PassivePastProgressive, setPassivePastProgressive] = useState(result5[0].conjugation_tables.passive[5].heading.toUpperCase())
    const [PassivePastProgressiveI, setPassivePastProgressiveI] = useState(result5[0].conjugation_tables.passive[5].forms[0][0])
    const [PassivePastProgressiveIRresult, setPassivePastProgressiveIRresult] = useState(result5[0].conjugation_tables.passive[5].forms[0][1])
    const [PassivePastProgressiveYou, setPassivePastProgressiveYou] = useState(result5[0].conjugation_tables.passive[5].forms[1][0])
    const [PassivePastProgressiveYouResult, setPassivePastProgressiveYouResult] = useState(result5[0].conjugation_tables.passive[5].forms[1][1])
    const [PassivePastProgressiveHe, setPassivePastProgressiveHe] = useState(result5[0].conjugation_tables.passive[5].forms[2][0])
    const [PassivePastProgressiveHeResult, setPassivePastProgressiveHeResult] = useState(result5[0].conjugation_tables.passive[5].forms[2][1])
    const [PassivePastProgressiveWe, setPassivePastProgressiveWe] = useState(result5[0].conjugation_tables.passive[5].forms[3][0])
    const [PassivePastProgressiveWeResult, setPassivePastProgressiveWeResult] = useState(result5[0].conjugation_tables.passive[5].forms[3][1])
    const [PassivePastProgressiveYou1, setPassivePastProgressiveYou1] = useState(result5[0].conjugation_tables.passive[5].forms[4][0])
    const [PassivePastProgressiveYou1Result, setPassivePastProgressiveYou1Result] = useState(result5[0].conjugation_tables.passive[5].forms[4][1])
    const [PassivePastProgressiveThey, setPassivePastProgressiveThey] = useState(result5[0].conjugation_tables.passive[5].forms[5][0])
    const [PassivePastProgressiveTheyResult, setPassivePastProgressiveTheyResult] = useState(result5[0].conjugation_tables.passive[5].forms[5][1])

    /*  Passivepast perfect */
    const [PassivePastPerfect, setPassivePastPerfect] = useState(result5[0].conjugation_tables.passive[6].heading.toUpperCase())
    const [PassivePastPerfectI, setPassivePastPerfectI] = useState(result5[0].conjugation_tables.passive[6].forms[0][0])
    const [PassivePastPerfectIRresult, setPassivePastPerfectIRresult] = useState(result5[0].conjugation_tables.passive[6].forms[0][1])
    const [PassivePastPerfectYou, setPassivePastPerfectYou] = useState(result5[0].conjugation_tables.passive[6].forms[1][0])
    const [PassivePastPerfectYouResult, setPassivePastPerfectYouResult] = useState(result5[0].conjugation_tables.passive[6].forms[1][1])
    const [PassivePastPerfectHe, setPassivePastPerfectHe] = useState(result5[0].conjugation_tables.passive[6].forms[2][0])
    const [PassivePastPerfectHeResult, setPassivePastPerfectHeResult] = useState(result5[0].conjugation_tables.passive[6].forms[2][1])
    const [PassivePastPerfectWe, setPassivePastPerfectWe] = useState(result5[0].conjugation_tables.passive[6].forms[3][0])
    const [PassivePastPerfectWeResult, setPassivePastPerfectWeResult] = useState(result5[0].conjugation_tables.passive[6].forms[3][1])
    const [PassivePastPerfectYou1, setPassivePastPerfectYou1] = useState(result5[0].conjugation_tables.passive[6].forms[4][0])
    const [PassivePastPerfectYou1Result, setPassivePastPerfectYou1Result] = useState(result5[0].conjugation_tables.passive[6].forms[4][1])
    const [PassivePastPerfectThey, setPassivePastPerfectThey] = useState(result5[0].conjugation_tables.passive[6].forms[5][0])
    const [PassivePastPerfectTheyResult, setPassivePastPerfectTheyResult] = useState(result5[0].conjugation_tables.passive[6].forms[5][1])


    /*  Passivepast perfect progressive */
    const [PassivePastPerfectProgressive, setPassivePastPerfectProgressive] = useState(result5[0].conjugation_tables.passive[7].heading.toUpperCase())
    const [PassivePastPerfectProgressiveI, setPassivePastPerfectProgressiveI] = useState(result5[0].conjugation_tables.passive[7].forms[0][0])
    const [PassivePastPerfectProgressiveIRresult, setPassivePastPerfectProgressiveIRresult] = useState(result5[0].conjugation_tables.passive[7].forms[0][1])
    const [PassivePastPerfectProgressiveYou, setPassivePastPerfectProgressiveYou] = useState(result5[0].conjugation_tables.passive[7].forms[1][0])
    const [PassivePastPerfectProgressiveYouResult, setPassivePastPerfectProgressiveYouResult] = useState(result5[0].conjugation_tables.passive[7].forms[1][1])
    const [PassivePastPerfectProgressiveHe, setPassivePastPerfectProgressiveHe] = useState(result5[0].conjugation_tables.passive[7].forms[2][0])
    const [PassivePastPerfectProgressiveHeResult, setPassivePastPerfectProgressiveHeResult] = useState(result5[0].conjugation_tables.passive[7].forms[2][1])
    const [PassivePastPerfectProgressiveWe, setPassivePastPerfectProgressiveWe] = useState(result5[0].conjugation_tables.passive[7].forms[3][0])
    const [PassivePastPerfectProgressiveWeResult, setPassivePastPerfectProgressiveWeResult] = useState(result5[0].conjugation_tables.passive[7].forms[3][1])
    const [PassivePastPerfectProgressiveYou1, setPassivePastPerfectProgressiveYou1] = useState(result5[0].conjugation_tables.passive[7].forms[4][0])
    const [PassivePastPerfectProgressiveYou1Result, setPassivePastPerfectProgressiveYou1Result] = useState(result5[0].conjugation_tables.passive[7].forms[4][1])
    const [PassivePastPerfectProgressiveThey, setPassivePastPerfectProgressiveThey] = useState(result5[0].conjugation_tables.passive[7].forms[5][0])
    const [PassivePastPerfectProgressiveTheyResult, setPassivePastPerfectProgressiveTheyResult] = useState(result5[0].conjugation_tables.passive[7].forms[5][1])


    /*  simple future */
    const [PassiveSimpleFuture, setPassiveSimpleFuture] = useState(result5[0].conjugation_tables.passive[8].heading.toUpperCase())
    const [PassiveSimpleFutureI, setPassiveSimpleFutureI] = useState(result5[0].conjugation_tables.passive[8].forms[0][0])
    const [PassiveSimpleFutureIRresult, setPassiveSimpleFutureIRresult] = useState(result5[0].conjugation_tables.passive[8].forms[0][1])
    const [PassiveSimpleFutureYou, setPassiveSimpleFutureYou] = useState(result5[0].conjugation_tables.passive[8].forms[1][0])
    const [PassiveSimpleFutureYouResult, setPassiveSimpleFutureYouResult] = useState(result5[0].conjugation_tables.passive[8].forms[1][1])
    const [PassiveSimpleFutureHe, setPassiveSimpleFutureHe] = useState(result5[0].conjugation_tables.passive[8].forms[2][0])
    const [PassiveSimpleFutureHeResult, setPassiveSimpleFutureHeResult] = useState(result5[0].conjugation_tables.passive[8].forms[2][1])
    const [PassiveSimpleFutureWe, setPassiveSimpleFutureWe] = useState(result5[0].conjugation_tables.passive[8].forms[3][0])
    const [PassiveSimpleFutureWeResult, setPassiveSimpleFutureWeResult] = useState(result5[0].conjugation_tables.passive[8].forms[3][1])
    const [PassiveSimpleFutureYou1, setPassiveSimpleFutureYou1] = useState(result5[0].conjugation_tables.passive[8].forms[4][0])
    const [PassiveSimpleFutureYou1Result, setPassiveSimpleFutureYou1Result] = useState(result5[0].conjugation_tables.passive[8].forms[4][1])
    const [PassiveSimpleFutureThey, setPassiveSimpleFutureThey] = useState(result5[0].conjugation_tables.passive[8].forms[5][0])
    const [PassiveSimpleFutureTheyResult, setPassiveSimpleFutureTheyResult] = useState(result5[0].conjugation_tables.passive[8].forms[5][1])


    /*  future progressive */
    const [PassiveFuturProgressive, setPassiveFuturProgressive] = useState(result5[0].conjugation_tables.passive[9].heading.toUpperCase())
    const [PassiveFuturProgressiveI, setPassiveFuturProgressiveI] = useState(result5[0].conjugation_tables.passive[9].forms[0][0])
    const [PassiveFuturProgressiveIRresult, setPassiveFuturProgressiveIRresult] = useState(result5[0].conjugation_tables.passive[9].forms[0][1])
    const [PassiveFuturProgressiveYou, setPassiveFuturProgressiveYou] = useState(result5[0].conjugation_tables.passive[9].forms[1][0])
    const [PassiveFuturProgressiveYouResult, setPassiveFuturProgressiveYouResult] = useState(result5[0].conjugation_tables.passive[9].forms[1][1])
    const [PassiveFuturProgressiveHe, setPassiveFuturProgressiveHe] = useState(result5[0].conjugation_tables.passive[9].forms[2][0])
    const [PassiveFuturProgressiveHeResult, setPassiveFuturProgressiveHeResult] = useState(result5[0].conjugation_tables.passive[9].forms[2][1])
    const [PassiveFuturProgressiveWe, setPassiveFuturProgressiveWe] = useState(result5[0].conjugation_tables.passive[9].forms[3][0])
    const [PassiveFuturProgressiveWeResult, setPassiveFuturProgressiveWeResult] = useState(result5[0].conjugation_tables.passive[9].forms[3][1])
    const [PassiveFuturProgressiveYou1, setPassiveFuturProgressiveYou1] = useState(result5[0].conjugation_tables.passive[9].forms[4][0])
    const [PassiveFuturProgressiveYou1Result, setPassiveFuturProgressiveYou1Result] = useState(result5[0].conjugation_tables.passive[9].forms[4][1])
    const [PassiveFuturProgressiveThey, setPassiveFuturProgressiveThey] = useState(result5[0].conjugation_tables.passive[9].forms[5][0])
    const [PassiveFuturProgressiveTheyResult, setPassiveFuturProgressiveTheyResult] = useState(result5[0].conjugation_tables.passive[9].forms[5][1])


    /*  future perfect */
    const [PassiveFuturePerfect, setPassiveFuturePerfect] = useState(result5[0].conjugation_tables.passive[10].heading.toUpperCase())
    const [PassiveFuturePerfectI, setPassiveFuturePerfectI] = useState(result5[0].conjugation_tables.passive[10].forms[0][0])
    const [PassiveFuturePerfectIRresult, setPassiveFuturePerfectIRresult] = useState(result5[0].conjugation_tables.passive[10].forms[0][1])
    const [PassiveFuturePerfectYou, setPassiveFuturePerfectYou] = useState(result5[0].conjugation_tables.passive[10].forms[1][0])
    const [PassiveFuturePerfectYouResult, setPassiveFuturePerfectYouResult] = useState(result5[0].conjugation_tables.passive[10].forms[1][1])
    const [PassiveFuturePerfectHe, setPassiveFuturePerfectHe] = useState(result5[0].conjugation_tables.passive[10].forms[2][0])
    const [PassiveFuturePerfectHeResult, setPassiveFuturePerfectHeResult] = useState(result5[0].conjugation_tables.passive[10].forms[2][1])
    const [PassiveFuturePerfectWe, setPassiveFuturePerfectWe] = useState(result5[0].conjugation_tables.passive[10].forms[3][0])
    const [PassiveFuturePerfectWeResult, setPassiveFuturePerfectWeResult] = useState(result5[0].conjugation_tables.passive[10].forms[3][1])
    const [PassiveFuturePerfectYou1, setPassiveFuturePerfectYou1] = useState(result5[0].conjugation_tables.passive[10].forms[4][0])
    const [PassiveFuturePerfectYou1Result, setPassiveFuturePerfectYou1Result] = useState(result5[0].conjugation_tables.passive[10].forms[4][1])
    const [PassiveFuturePerfectThey, setPassiveFuturePerfectThey] = useState(result5[0].conjugation_tables.passive[10].forms[5][0])
    const [PassiveFuturePerfectTheyResult, setPassiveFuturePerfectTheyResult] = useState(result5[0].conjugation_tables.passive[10].forms[5][1])

    /*  Passivefuture perfect progressive */
    const [PassiveFuturePerfectProgressive, setPassiveFuturePerfectProgressive] = useState(result5[0].conjugation_tables.passive[11].heading.toUpperCase())
    const [PassiveFuturePerfectProgressiveI, setPassiveFuturePerfectProgressiveI] = useState(result5[0].conjugation_tables.passive[11].forms[0][0])
    const [PassiveFuturePerfectProgressiveIRresult, setPassiveFuturePerfectProgressiveIRresult] = useState(result5[0].conjugation_tables.passive[11].forms[0][1])
    const [PassiveFuturePerfectProgressiveYou, setPassiveFuturePerfectProgressiveYou] = useState(result5[0].conjugation_tables.passive[11].forms[1][0])
    const [PassiveFuturePerfectProgressiveYouResult, setPassiveFuturePerfectProgressiveYouResult] = useState(result5[0].conjugation_tables.passive[11].forms[1][1])
    const [PassiveFuturePerfectProgressiveHe, setPassiveFuturePerfectProgressiveHe] = useState(result5[0].conjugation_tables.passive[11].forms[2][0])
    const [PassiveFuturePerfectProgressiveHeResult, setPassiveFuturePerfectProgressiveHeResult] = useState(result5[0].conjugation_tables.passive[11].forms[2][1])
    const [PassiveFuturePerfectProgressiveWe, setPassiveFuturePerfectProgressiveWe] = useState(result5[0].conjugation_tables.passive[11].forms[3][0])
    const [PassiveFuturePerfectProgressiveWeResult, setPassiveFuturePerfectProgressiveWeResult] = useState(result5[0].conjugation_tables.passive[11].forms[3][1])
    const [PassiveFuturePerfectProgressiveYou1, setPassiveFuturePerfectProgressiveYou1] = useState(result5[0].conjugation_tables.passive[11].forms[4][0])
    const [PassiveFuturePerfectProgressiveYou1Result, setPassiveFuturePerfectProgressiveYou1Result] = useState(result5[0].conjugation_tables.passive[11].forms[4][1])
    const [PassiveFuturePerfectProgressiveThey, setPassiveFuturePerfectProgressiveThey] = useState(result5[0].conjugation_tables.passive[11].forms[5][0])
    const [PassiveFuturePerfectProgressiveTheyResult, setPassiveFuturePerfectProgressiveTheyResult] = useState(result5[0].conjugation_tables.passive[11].forms[5][1])

    /*  passive simple present  */

    /* conditional  */

    /*  passive simple present  */

    const [SimpleConditionalPresent, setSimpleConditionalPresent] = useState(result5[0].conjugation_tables.conditional[0].heading.toUpperCase())
    const [ConditionalPresentI, setConditionalPresentI] = useState(result5[0].conjugation_tables.conditional[0].forms[0][0])
    const [ConditionalPresentIRresult, setConditionalPresentIRresult] = useState(result5[0].conjugation_tables.conditional[0].forms[0][1])
    const [ConditionalPresentYou, setConditionalPresentYou] = useState(result5[0].conjugation_tables.conditional[0].forms[1][0])
    const [ConditionalPresentYouResult, setConditionalPresentYouResult] = useState(result5[0].conjugation_tables.conditional[0].forms[1][1])
    const [ConditionalPresentHe, setConditionalPresentHe] = useState(result5[0].conjugation_tables.conditional[0].forms[2][0])
    const [ConditionalPresentHeResult, setConditionalPresentHeResult] = useState(result5[0].conjugation_tables.conditional[0].forms[2][1])
    const [ConditionalPresentWe, setConditionalPresentWe] = useState(result5[0].conjugation_tables.conditional[0].forms[3][0])
    const [ConditionalPresentWeResult, setConditionalPresentWeResult] = useState(result5[0].conjugation_tables.conditional[0].forms[3][1])
    const [ConditionalPresentYou1, setConditionalPresentYou1] = useState(result5[0].conjugation_tables.conditional[0].forms[4][0])
    const [ConditionalPresentYou1Result, setConditionalPresentYou1Result] = useState(result5[0].conjugation_tables.conditional[0].forms[4][1])
    const [ConditionalPresentThey, setConditionalPresentThey] = useState(result5[0].conjugation_tables.conditional[0].forms[5][0])
    const [ConditionalPresentTheyResult, setConditionalPresentTheyResult] = useState(result5[0].conjugation_tables.conditional[0].forms[5][1])

    /* Conditional  Conditionalpresent progressive */
    const [ConditionalPresentProgressive, setConditionalPresentProgressive] = useState(result5[0].conjugation_tables.conditional[1].heading.toUpperCase())
    const [ConditionalPresentProgressiveI, setConditionalPresentProgressiveI] = useState(result5[0].conjugation_tables.conditional[1].forms[0][0])
    const [ConditionalPresentProgressiveIRresult, setConditionalPresentProgressiveIRresult] = useState(result5[0].conjugation_tables.conditional[1].forms[0][1])
    const [ConditionalPresentProgressiveYou, setConditionalPresentProgressiveYou] = useState(result5[0].conjugation_tables.conditional[1].forms[1][0])
    const [ConditionalPresentProgressiveYouResult, setConditionalPresentProgressiveYouResult] = useState(result5[0].conjugation_tables.conditional[1].forms[1][1])
    const [ConditionalPresentProgressiveHe, setConditionalPresentProgressiveHe] = useState(result5[0].conjugation_tables.conditional[1].forms[2][0])
    const [ConditionalPresentProgressiveHeResult, setConditionalPresentProgressiveHeResult] = useState(result5[0].conjugation_tables.conditional[1].forms[2][1])
    const [ConditionalPresentProgressiveWe, setConditionalPresentProgressiveWe] = useState(result5[0].conjugation_tables.conditional[1].forms[3][0])
    const [ConditionalPresentProgressiveWeResult, setConditionalPresentProgressiveWeResult] = useState(result5[0].conjugation_tables.conditional[1].forms[3][1])
    const [ConditionalPresentProgressiveYou1, setConditionalPresentProgressiveYou1] = useState(result5[0].conjugation_tables.conditional[1].forms[4][0])
    const [ConditionalPresentProgressiveYou1Result, setConditionalPresentProgressiveYou1Result] = useState(result5[0].conjugation_tables.conditional[1].forms[4][1])
    const [ConditionalPresentProgressiveThey, setConditionalPresentProgressiveThey] = useState(result5[0].conjugation_tables.conditional[1].forms[5][0])
    const [ConditionalPresentProgressiveTheyResult, setConditionalPresentProgressiveTheyResult] = useState(result5[0].conjugation_tables.conditional[1].forms[5][1])



    /* Conditional  Conditionalpresent perfect */
    const [ConditionalPresentPerfect, setConditionalPresentPerfect] = useState(result5[0].conjugation_tables.conditional[2].heading.toUpperCase())
    const [ConditionalPresentPerfectI, setConditionalPresentPerfectI] = useState(result5[0].conjugation_tables.conditional[2].forms[0][0])
    const [ConditionalPresentPerfectIRresult, setConditionalPresentPerfectIRresult] = useState(result5[0].conjugation_tables.conditional[2].forms[0][1])
    const [ConditionalPresentPerfectYou, setConditionalPresentPerfectYou] = useState(result5[0].conjugation_tables.conditional[2].forms[1][0])
    const [ConditionalPresentPerfectYouResult, setConditionalPresentPerfectYouResult] = useState(result5[0].conjugation_tables.conditional[2].forms[1][1])
    const [ConditionalPresentPerfectHe, setConditionalPresentPerfectHe] = useState(result5[0].conjugation_tables.conditional[2].forms[2][0])
    const [ConditionalPresentPerfectHeResult, setConditionalPresentPerfectHeResult] = useState(result5[0].conjugation_tables.conditional[2].forms[2][1])
    const [ConditionalPresentPerfectWe, setConditionalPresentPerfectWe] = useState(result5[0].conjugation_tables.conditional[2].forms[3][0])
    const [ConditionalPresentPerfectWeResult, setConditionalPresentPerfectWeResult] = useState(result5[0].conjugation_tables.conditional[2].forms[3][1])
    const [ConditionalPresentPerfectYou1, setConditionalPresentPerfectYou1] = useState(result5[0].conjugation_tables.conditional[2].forms[4][0])
    const [ConditionalPresentPerfectYou1Result, setConditionalPresentPerfectYou1Result] = useState(result5[0].conjugation_tables.conditional[2].forms[4][1])
    const [ConditionalPresentPerfectThey, setConditionalPresentPerfectThey] = useState(result5[0].conjugation_tables.conditional[2].forms[5][0])
    const [ConditionalPresentPerfectTheyResult, setConditionalPresentPerfectTheyResult] = useState(result5[0].conjugation_tables.conditional[2].forms[5][1])

    /* Conditional  Conditionalpresent perfect progressive */
    const [ConditionalPresentPerfectProgressive, setConditionalPresentPerfectProgressive] = useState(result5[0].conjugation_tables.conditional[3].heading.toUpperCase())
    const [ConditionalPresentPerfectProgressiveI, setConditionalPresentPerfectProgressiveI] = useState(result5[0].conjugation_tables.conditional[3].forms[0][0])
    const [ConditionalPresentPerfectProgressiveIRresult, setConditionalPresentPerfectProgressiveIRresult] = useState(result5[0].conjugation_tables.conditional[3].forms[0][1])
    const [ConditionalPresentPerfectProgressiveYou, setConditionalPresentPerfectProgressiveYou] = useState(result5[0].conjugation_tables.conditional[3].forms[1][0])
    const [ConditionalPresentPerfectProgressiveYouResult, setConditionalPresentPerfectProgressiveYouResult] = useState(result5[0].conjugation_tables.conditional[3].forms[1][1])
    const [ConditionalPresentPerfectProgressiveHe, setConditionalPresentPerfectProgressiveHe] = useState(result5[0].conjugation_tables.conditional[3].forms[2][0])
    const [ConditionalPresentPerfectProgressiveHeResult, setConditionalPresentPerfectProgressiveHeResult] = useState(result5[0].conjugation_tables.conditional[3].forms[2][1])
    const [ConditionalPresentPerfectProgressiveWe, setConditionalPresentPerfectProgressiveWe] = useState(result5[0].conjugation_tables.conditional[3].forms[3][0])
    const [ConditionalPresentPerfectProgressiveWeResult, setConditionalPresentPerfectProgressiveWeResult] = useState(result5[0].conjugation_tables.conditional[3].forms[3][1])
    const [ConditionalPresentPerfectProgressiveYou1, setConditionalPresentPerfectProgressiveYou1] = useState(result5[0].conjugation_tables.conditional[3].forms[4][0])
    const [ConditionalPresentPerfectProgressiveYou1Result, setConditionalPresentPerfectProgressiveYou1Result] = useState(result5[0].conjugation_tables.conditional[3].forms[4][1])
    const [ConditionalPresentPerfectProgressiveThey, setConditionalPresentPerfectProgressiveThey] = useState(result5[0].conjugation_tables.conditional[3].forms[5][0])
    const [ConditionalPresentPerfectProgressiveTheyResult, setConditionalPresentPerfectProgressiveTheyResult] = useState(result5[0].conjugation_tables.conditional[3].forms[5][1])











    /* const [indicatif, setindicatif] = useState("") */
    const history = useHistory()
    /* console.log(rechercheLien) */
    /*  console.log(singleVerb) */
    /* console.log(dataVrai) */
    /*  let result1= object.filter(element => element.conjugated_forms[0][1].split(" ")[1]=== verbSingleOne.split(".")[0]||element.conjugated_forms[1][1]=== verbSingleOne.split(".")[0]||element.conjugated_forms[1][1]===verbSingleOne.split(".")[0]||element.conjugated_forms[2][1]===verbSingleOne.split(".")[0] )
     settitre(result1[0].conjugated_forms[0][0]+" : ")
          setvaleurTitre(result1[0].conjugated_forms[0][1])
          setSimplePast1(result1[0].conjugated_forms[1][0] +" : ")
          setSimplePastValue(result1[0].conjugated_forms[1][1]) */










    function seachVerb(e) {
        e.preventDefault()
        let result2 = object.filter(element => element.conjugated_forms[0][1].split(" ")[1] === inputValue || element.conjugated_forms[1][1] === inputValue || element.conjugated_forms[1][1] === inputValue || element.conjugated_forms[2][1] === inputValue)




        try {
            settitre(result2[0].conjugated_forms[0][0] + " : ")
            setvaleurTitre(result2[0].conjugated_forms[0][1])
            setSimplePast1(result2[0].conjugated_forms[1][0] + " : ")
            setSimplePastValue(result2[0].conjugated_forms[1][1])
            setPastParticipe(result2[0].conjugated_forms[2][0] + " : ")
            setPastParticipeValue(result2[0].conjugated_forms[2][1])
            setSimplePresent(result2[0].conjugation_tables.indicative[0].heading.toUpperCase())
            setPresentI(result2[0].conjugation_tables.indicative[0].forms[0][0])
            setPresentIRresult(result2[0].conjugation_tables.indicative[0].forms[0][1])
            setPresentYou(result2[0].conjugation_tables.indicative[0].forms[1][0])
            setPresentYouResult(result2[0].conjugation_tables.indicative[0].forms[1][1])
            setPresentHe(result2[0].conjugation_tables.indicative[0].forms[2][0])
            setPresentHeResult(result2[0].conjugation_tables.indicative[0].forms[2][1])
            setPresentWe(result2[0].conjugation_tables.indicative[0].forms[3][0])
            setPresentWeResult(result2[0].conjugation_tables.indicative[0].forms[3][1])
            setPresentYou1(result2[0].conjugation_tables.indicative[0].forms[4][0])
            setPresentYou1Result(result2[0].conjugation_tables.indicative[0].forms[4][1])
            setPresentThey(result2[0].conjugation_tables.indicative[0].forms[5][0])
            setPresentTheyResult(result2[0].conjugation_tables.indicative[0].forms[5][1])

            /* present progressive */
            setPresentProgressive(result2[0].conjugation_tables.indicative[1].heading.toUpperCase())
            setPresentProgressiveI(result2[0].conjugation_tables.indicative[1].forms[0][0])
            setPresentProgressiveIRresult(result2[0].conjugation_tables.indicative[1].forms[0][1])
            setPresentProgressiveYou(result2[0].conjugation_tables.indicative[1].forms[1][0])
            setPresentProgressiveYouResult(result2[0].conjugation_tables.indicative[1].forms[1][1])
            setPresentProgressiveHe(result2[0].conjugation_tables.indicative[1].forms[2][0])
            setPresentProgressiveHeResult(result2[0].conjugation_tables.indicative[1].forms[2][1])
            setPresentProgressiveWe(result2[0].conjugation_tables.indicative[1].forms[3][0])
            setPresentProgressiveWeResult(result2[0].conjugation_tables.indicative[1].forms[3][1])
            setPresentProgressiveYou1(result2[0].conjugation_tables.indicative[1].forms[4][0])
            setPresentProgressiveYou1Result(result2[0].conjugation_tables.indicative[1].forms[4][1])
            setPresentProgressiveThey(result2[0].conjugation_tables.indicative[1].forms[5][0])
            setPresentProgressiveTheyResult(result2[0].conjugation_tables.indicative[1].forms[5][1])

            /* present perfect */
            setPresentPerfect(result2[0].conjugation_tables.indicative[2].heading.toUpperCase())
            setPresentPerfectI(result2[0].conjugation_tables.indicative[2].forms[0][0])
            setPresentPerfectIRresult(result2[0].conjugation_tables.indicative[2].forms[0][1])
            setPresentPerfectYou(result2[0].conjugation_tables.indicative[2].forms[1][0])
            setPresentPerfectYouResult(result2[0].conjugation_tables.indicative[2].forms[1][1])
            setPresentPerfectHe(result2[0].conjugation_tables.indicative[2].forms[2][0])
            setPresentPerfectHeResult(result2[0].conjugation_tables.indicative[2].forms[2][1])
            setPresentPerfectWe(result2[0].conjugation_tables.indicative[2].forms[3][0])
            setPresentPerfectWeResult(result2[0].conjugation_tables.indicative[2].forms[3][1])
            setPresentPerfectYou1(result2[0].conjugation_tables.indicative[2].forms[4][0])
            setPresentPerfectYou1Result(result2[0].conjugation_tables.indicative[2].forms[4][1])
            setPresentPerfectThey(result2[0].conjugation_tables.indicative[2].forms[5][0])
            setPresentPerfectTheyResult(result2[0].conjugation_tables.indicative[2].forms[5][1])


            /* present perfect progressive */
            setPresentPerfectProgressive(result2[0].conjugation_tables.indicative[3].heading.toUpperCase())
            setPresentPerfectProgressiveI(result2[0].conjugation_tables.indicative[3].forms[0][0])
            setPresentPerfectProgressiveIRresult(result2[0].conjugation_tables.indicative[3].forms[0][1])
            setPresentPerfectProgressiveYou(result2[0].conjugation_tables.indicative[3].forms[1][0])
            setPresentPerfectProgressiveYouResult(result2[0].conjugation_tables.indicative[3].forms[1][1])
            setPresentPerfectProgressiveHe(result2[0].conjugation_tables.indicative[3].forms[2][0])
            setPresentPerfectProgressiveHeResult(result2[0].conjugation_tables.indicative[3].forms[2][1])
            setPresentPerfectProgressiveWe(result2[0].conjugation_tables.indicative[3].forms[3][0])
            setPresentPerfectProgressiveWeResult(result2[0].conjugation_tables.indicative[3].forms[3][1])
            setPresentPerfectProgressiveYou1(result2[0].conjugation_tables.indicative[3].forms[4][0])
            setPresentPerfectProgressiveYou1Result(result2[0].conjugation_tables.indicative[3].forms[4][1])
            setPresentPerfectProgressiveThey(result2[0].conjugation_tables.indicative[3].forms[5][0])
            setPresentPerfectProgressiveTheyResult(result2[0].conjugation_tables.indicative[3].forms[5][1])

            /* Simple past */
            setSimplePast(result2[0].conjugation_tables.indicative[4].heading.toUpperCase())
            setSimplePastI(result2[0].conjugation_tables.indicative[4].forms[0][0])
            setSimplePastIRresult(result2[0].conjugation_tables.indicative[4].forms[0][1])
            setSimplePastYou(result2[0].conjugation_tables.indicative[4].forms[1][0])
            setSimplePastYouResult(result2[0].conjugation_tables.indicative[4].forms[1][1])
            setSimplePastHe(result2[0].conjugation_tables.indicative[4].forms[2][0])
            setSimplePastHeResult(result2[0].conjugation_tables.indicative[4].forms[2][1])
            setSimplePastWe(result2[0].conjugation_tables.indicative[4].forms[3][0])
            setSimplePastWeResult(result2[0].conjugation_tables.indicative[4].forms[3][1])
            setSimplePastYou1(result2[0].conjugation_tables.indicative[4].forms[4][0])
            setSimplePastYou1Result(result2[0].conjugation_tables.indicative[4].forms[4][1])
            setSimplePastThey(result2[0].conjugation_tables.indicative[4].forms[5][0])
            setSimplePastTheyResult(result2[0].conjugation_tables.indicative[4].forms[5][1])


            /* past progressive */
            setPastProgressive(result2[0].conjugation_tables.indicative[5].heading.toUpperCase())
            setPastProgressiveI(result2[0].conjugation_tables.indicative[5].forms[0][0])
            setPastProgressiveIRresult(result2[0].conjugation_tables.indicative[5].forms[0][1])
            setPastProgressiveYou(result2[0].conjugation_tables.indicative[5].forms[1][0])
            setPastProgressiveYouResult(result2[0].conjugation_tables.indicative[5].forms[1][1])
            setPastProgressiveHe(result2[0].conjugation_tables.indicative[5].forms[2][0])
            setPastProgressiveHeResult(result2[0].conjugation_tables.indicative[5].forms[2][1])
            setPastProgressiveWe(result2[0].conjugation_tables.indicative[5].forms[3][0])
            setPastProgressiveWeResult(result2[0].conjugation_tables.indicative[5].forms[3][1])
            setPastProgressiveYou1(result2[0].conjugation_tables.indicative[5].forms[4][0])
            setPastProgressiveYou1Result(result2[0].conjugation_tables.indicative[5].forms[4][1])
            setPastProgressiveThey(result2[0].conjugation_tables.indicative[5].forms[5][0])
            setPastProgressiveTheyResult(result2[0].conjugation_tables.indicative[5].forms[5][1])

            /* past perfect */
            setPastPerfect(result2[0].conjugation_tables.indicative[6].heading.toUpperCase())
            setPastPerfectI(result2[0].conjugation_tables.indicative[6].forms[0][0])
            setPastPerfectIRresult(result2[0].conjugation_tables.indicative[6].forms[0][1])
            setPastPerfectYou(result2[0].conjugation_tables.indicative[6].forms[1][0])
            setPastPerfectYouResult(result2[0].conjugation_tables.indicative[6].forms[1][1])
            setPastPerfectHe(result2[0].conjugation_tables.indicative[6].forms[2][0])
            setPastPerfectHeResult(result2[0].conjugation_tables.indicative[6].forms[2][1])
            setPastPerfectWe(result2[0].conjugation_tables.indicative[6].forms[3][0])
            setPastPerfectWeResult(result2[0].conjugation_tables.indicative[6].forms[3][1])
            setPastPerfectYou1(result2[0].conjugation_tables.indicative[6].forms[4][0])
            setPastPerfectYou1Result(result2[0].conjugation_tables.indicative[6].forms[4][1])
            setPastPerfectThey(result2[0].conjugation_tables.indicative[6].forms[5][0])
            setPastPerfectTheyResult(result2[0].conjugation_tables.indicative[6].forms[5][1])


            /* past perfect progressive*/
            setPastPerfectProgressive(result2[0].conjugation_tables.indicative[7].heading.toUpperCase())
            setPastPerfectProgressiveI(result2[0].conjugation_tables.indicative[7].forms[0][0])
            setPastPerfectProgressiveIRresult(result2[0].conjugation_tables.indicative[7].forms[0][1])
            setPastPerfectProgressiveYou(result2[0].conjugation_tables.indicative[7].forms[1][0])
            setPastPerfectProgressiveYouResult(result2[0].conjugation_tables.indicative[7].forms[1][1])
            setPastPerfectProgressiveHe(result2[0].conjugation_tables.indicative[7].forms[2][0])
            setPastPerfectProgressiveHeResult(result2[0].conjugation_tables.indicative[7].forms[2][1])
            setPastPerfectProgressiveWe(result2[0].conjugation_tables.indicative[7].forms[3][0])
            setPastPerfectProgressiveWeResult(result2[0].conjugation_tables.indicative[7].forms[3][1])
            setPastPerfectProgressiveYou1(result2[0].conjugation_tables.indicative[7].forms[4][0])
            setPastPerfectProgressiveYou1Result(result2[0].conjugation_tables.indicative[7].forms[4][1])
            setPastPerfectProgressiveThey(result2[0].conjugation_tables.indicative[7].forms[5][0])
            setPastPerfectProgressiveTheyResult(result2[0].conjugation_tables.indicative[7].forms[5][1])

            /* simple future*/
            setSimpleFuture(result2[0].conjugation_tables.indicative[8].heading.toUpperCase())
            setSimpleFutureI(result2[0].conjugation_tables.indicative[8].forms[0][0])
            setSimpleFutureIRresult(result2[0].conjugation_tables.indicative[8].forms[0][1])
            setSimpleFutureYou(result2[0].conjugation_tables.indicative[8].forms[1][0])
            setSimpleFutureYouResult(result2[0].conjugation_tables.indicative[8].forms[1][1])
            setSimpleFutureHe(result2[0].conjugation_tables.indicative[8].forms[2][0])
            setSimpleFutureHeResult(result2[0].conjugation_tables.indicative[8].forms[2][1])
            setSimpleFutureWe(result2[0].conjugation_tables.indicative[8].forms[3][0])
            setSimpleFutureWeResult(result2[0].conjugation_tables.indicative[8].forms[3][1])
            setSimpleFutureYou1(result2[0].conjugation_tables.indicative[8].forms[4][0])
            setSimpleFutureYou1Result(result2[0].conjugation_tables.indicative[8].forms[4][1])
            setSimpleFutureThey(result2[0].conjugation_tables.indicative[8].forms[5][0])
            setSimpleFutureTheyResult(result2[0].conjugation_tables.indicative[8].forms[5][1])

            /* future progressive*/
            setFuturProgressive(result2[0].conjugation_tables.indicative[9].heading.toUpperCase())
            setFuturProgressiveI(result2[0].conjugation_tables.indicative[9].forms[0][0])
            setFuturProgressiveIRresult(result2[0].conjugation_tables.indicative[9].forms[0][1])
            setFuturProgressiveYou(result2[0].conjugation_tables.indicative[9].forms[1][0])
            setFuturProgressiveYouResult(result2[0].conjugation_tables.indicative[9].forms[1][1])
            setFuturProgressiveHe(result2[0].conjugation_tables.indicative[9].forms[2][0])
            setFuturProgressiveHeResult(result2[0].conjugation_tables.indicative[9].forms[2][1])
            setFuturProgressiveWe(result2[0].conjugation_tables.indicative[9].forms[3][0])
            setFuturProgressiveWeResult(result2[0].conjugation_tables.indicative[9].forms[3][1])
            setFuturProgressiveYou1(result2[0].conjugation_tables.indicative[9].forms[4][0])
            setFuturProgressiveYou1Result(result2[0].conjugation_tables.indicative[9].forms[4][1])
            setFuturProgressiveThey(result2[0].conjugation_tables.indicative[9].forms[5][0])
            setFuturProgressiveTheyResult(result2[0].conjugation_tables.indicative[9].forms[5][1])

            /* future perfect*/
            setFuturePerfect(result2[0].conjugation_tables.indicative[10].heading.toUpperCase())
            setFuturePerfectI(result2[0].conjugation_tables.indicative[10].forms[0][0])
            setFuturePerfectIRresult(result2[0].conjugation_tables.indicative[10].forms[0][1])
            setFuturePerfectYou(result2[0].conjugation_tables.indicative[10].forms[1][0])
            setFuturePerfectYouResult(result2[0].conjugation_tables.indicative[10].forms[1][1])
            setFuturePerfectHe(result2[0].conjugation_tables.indicative[10].forms[2][0])
            setFuturePerfectHeResult(result2[0].conjugation_tables.indicative[10].forms[2][1])
            setFuturePerfectWe(result2[0].conjugation_tables.indicative[10].forms[3][0])
            setFuturePerfectWeResult(result2[0].conjugation_tables.indicative[10].forms[3][1])
            setFuturePerfectYou1(result2[0].conjugation_tables.indicative[10].forms[4][0])
            setFuturePerfectYou1Result(result2[0].conjugation_tables.indicative[10].forms[4][1])
            setFuturePerfectThey(result2[0].conjugation_tables.indicative[10].forms[5][0])
            setFuturePerfectTheyResult(result2[0].conjugation_tables.indicative[10].forms[5][1])


            /* future perfect progressive*/
            setFuturePerfectProgressive(result2[0].conjugation_tables.indicative[11].heading.toUpperCase())
            setFuturePerfectProgressiveI(result2[0].conjugation_tables.indicative[11].forms[0][0])
            setFuturePerfectProgressiveIRresult(result2[0].conjugation_tables.indicative[11].forms[0][1])
            setFuturePerfectProgressiveYou(result2[0].conjugation_tables.indicative[11].forms[1][0])
            setFuturePerfectProgressiveYouResult(result2[0].conjugation_tables.indicative[11].forms[1][1])
            setFuturePerfectProgressiveHe(result2[0].conjugation_tables.indicative[11].forms[2][0])
            setFuturePerfectProgressiveHeResult(result2[0].conjugation_tables.indicative[11].forms[2][1])
            setFuturePerfectProgressiveWe(result2[0].conjugation_tables.indicative[11].forms[3][0])
            setFuturePerfectProgressiveWeResult(result2[0].conjugation_tables.indicative[11].forms[3][1])
            setFuturePerfectProgressiveYou1(result2[0].conjugation_tables.indicative[11].forms[4][0])
            setFuturePerfectProgressiveYou1Result(result2[0].conjugation_tables.indicative[11].forms[4][1])
            setFuturePerfectProgressiveThey(result2[0].conjugation_tables.indicative[11].forms[5][0])
            setFuturePerfectProgressiveTheyResult(result2[0].conjugation_tables.indicative[11].forms[5][1])

            /*  passive form  ------------------------------------------- */

            setSimplePassivePresent(result2[0].conjugation_tables.passive[0].heading.toUpperCase())
            setPassivePresentI(result2[0].conjugation_tables.passive[0].forms[0][0])
            setPassivePresentIRresult(result2[0].conjugation_tables.passive[0].forms[0][1])
            setPassivePresentYou(result2[0].conjugation_tables.passive[0].forms[1][0])
            setPassivePresentYouResult(result2[0].conjugation_tables.passive[0].forms[1][1])
            setPassivePresentHe(result2[0].conjugation_tables.passive[0].forms[2][0])
            setPassivePresentHeResult(result2[0].conjugation_tables.passive[0].forms[2][1])
            setPassivePresentWe(result2[0].conjugation_tables.passive[0].forms[3][0])
            setPassivePresentWeResult(result2[0].conjugation_tables.passive[0].forms[3][1])
            setPassivePresentYou1(result2[0].conjugation_tables.passive[0].forms[4][0])
            setPassivePresentYou1Result(result2[0].conjugation_tables.passive[0].forms[4][1])
            setPassivePresentThey(result2[0].conjugation_tables.passive[0].forms[5][0])
            setPassivePresentTheyResult(result2[0].conjugation_tables.passive[0].forms[5][1])

            /* present passive progressive */
            setPassivePresentProgressive(result2[0].conjugation_tables.passive[1].heading.toUpperCase())
            setPassivePresentProgressiveI(result2[0].conjugation_tables.passive[1].forms[0][0])
            setPassivePresentProgressiveIRresult(result2[0].conjugation_tables.passive[1].forms[0][1])
            setPassivePresentProgressiveYou(result2[0].conjugation_tables.passive[1].forms[1][0])
            setPassivePresentProgressiveYouResult(result2[0].conjugation_tables.passive[1].forms[1][1])
            setPassivePresentProgressiveHe(result2[0].conjugation_tables.passive[1].forms[2][0])
            setPassivePresentProgressiveHeResult(result2[0].conjugation_tables.passive[1].forms[2][1])
            setPassivePresentProgressiveWe(result2[0].conjugation_tables.passive[1].forms[3][0])
            setPassivePresentProgressiveWeResult(result2[0].conjugation_tables.passive[1].forms[3][1])
            setPassivePresentProgressiveYou1(result2[0].conjugation_tables.passive[1].forms[4][0])
            setPassivePresentProgressiveYou1Result(result2[0].conjugation_tables.passive[1].forms[4][1])
            setPassivePresentProgressiveThey(result2[0].conjugation_tables.passive[1].forms[5][0])
            setPassivePresentProgressiveTheyResult(result2[0].conjugation_tables.passive[1].forms[5][1])

            /* present passive perfect */
            setPassivePresentPerfect(result2[0].conjugation_tables.passive[2].heading.toUpperCase())
            setPassivePresentPerfectI(result2[0].conjugation_tables.passive[2].forms[0][0])
            setPassivePresentPerfectIRresult(result2[0].conjugation_tables.passive[2].forms[0][1])
            setPassivePresentPerfectYou(result2[0].conjugation_tables.passive[2].forms[1][0])
            setPassivePresentPerfectYouResult(result2[0].conjugation_tables.passive[2].forms[1][1])
            setPassivePresentPerfectHe(result2[0].conjugation_tables.passive[2].forms[2][0])
            setPassivePresentPerfectHeResult(result2[0].conjugation_tables.passive[2].forms[2][1])
            setPassivePresentPerfectWe(result2[0].conjugation_tables.passive[2].forms[3][0])
            setPassivePresentPerfectWeResult(result2[0].conjugation_tables.passive[2].forms[3][1])
            setPassivePresentPerfectYou1(result2[0].conjugation_tables.passive[2].forms[4][0])
            setPassivePresentPerfectYou1Result(result2[0].conjugation_tables.passive[2].forms[4][1])
            setPassivePresentPerfectThey(result2[0].conjugation_tables.passive[2].forms[5][0])
            setPassivePresentPerfectTheyResult(result2[0].conjugation_tables.passive[2].forms[5][1])


            /* present passive perfect progressive */
            setPassivePresentPerfectProgressive(result2[0].conjugation_tables.passive[3].heading.toUpperCase())
            setPassivePresentPerfectProgressiveI(result2[0].conjugation_tables.passive[3].forms[0][0])
            setPassivePresentPerfectProgressiveIRresult(result2[0].conjugation_tables.passive[3].forms[0][1])
            setPassivePresentPerfectProgressiveYou(result2[0].conjugation_tables.passive[3].forms[1][0])
            setPassivePresentPerfectProgressiveYouResult(result2[0].conjugation_tables.passive[3].forms[1][1])
            setPassivePresentPerfectProgressiveHe(result2[0].conjugation_tables.passive[3].forms[2][0])
            setPassivePresentPerfectProgressiveHeResult(result2[0].conjugation_tables.passive[3].forms[2][1])
            setPassivePresentPerfectProgressiveWe(result2[0].conjugation_tables.passive[3].forms[3][0])
            setPassivePresentPerfectProgressiveWeResult(result2[0].conjugation_tables.passive[3].forms[3][1])
            setPassivePresentPerfectProgressiveYou1(result2[0].conjugation_tables.passive[3].forms[4][0])
            setPassivePresentPerfectProgressiveYou1Result(result2[0].conjugation_tables.passive[3].forms[4][1])
            setPassivePresentPerfectProgressiveThey(result2[0].conjugation_tables.passive[3].forms[5][0])
            setPassivePresentPerfectProgressiveTheyResult(result2[0].conjugation_tables.passive[3].forms[5][1])

            /* Simple  passivepast */
            setSimplePassivePast(result2[0].conjugation_tables.passive[4].heading.toUpperCase())
            setSimplePassivePastI(result2[0].conjugation_tables.passive[4].forms[0][0])
            setSimplePassivePastIRresult(result2[0].conjugation_tables.passive[4].forms[0][1])
            setSimplePassivePastYou(result2[0].conjugation_tables.passive[4].forms[1][0])
            setSimplePassivePastYouResult(result2[0].conjugation_tables.passive[4].forms[1][1])
            setSimplePassivePastHe(result2[0].conjugation_tables.passive[4].forms[2][0])
            setSimplePassivePastHeResult(result2[0].conjugation_tables.passive[4].forms[2][1])
            setSimplePassivePastWe(result2[0].conjugation_tables.passive[4].forms[3][0])
            setSimplePassivePastWeResult(result2[0].conjugation_tables.passive[4].forms[3][1])
            setSimplePassivePastYou1(result2[0].conjugation_tables.passive[4].forms[4][0])
            setSimplePassivePastYou1Result(result2[0].conjugation_tables.passive[4].forms[4][1])
            setSimplePassivePastThey(result2[0].conjugation_tables.passive[4].forms[5][0])
            setSimplePassivePastTheyResult(result2[0].conjugation_tables.passive[4].forms[5][1])


            /* past passive progressive */
            setPassivePastProgressive(result2[0].conjugation_tables.passive[5].heading.toUpperCase())
            setPassivePastProgressiveI(result2[0].conjugation_tables.passive[5].forms[0][0])
            setPassivePastProgressiveIRresult(result2[0].conjugation_tables.passive[5].forms[0][1])
            setPassivePastProgressiveYou(result2[0].conjugation_tables.passive[5].forms[1][0])
            setPassivePastProgressiveYouResult(result2[0].conjugation_tables.passive[5].forms[1][1])
            setPassivePastProgressiveHe(result2[0].conjugation_tables.passive[5].forms[2][0])
            setPassivePastProgressiveHeResult(result2[0].conjugation_tables.passive[5].forms[2][1])
            setPassivePastProgressiveWe(result2[0].conjugation_tables.passive[5].forms[3][0])
            setPassivePastProgressiveWeResult(result2[0].conjugation_tables.passive[5].forms[3][1])
            setPassivePastProgressiveYou1(result2[0].conjugation_tables.passive[5].forms[4][0])
            setPassivePastProgressiveYou1Result(result2[0].conjugation_tables.passive[5].forms[4][1])
            setPassivePastProgressiveThey(result2[0].conjugation_tables.passive[5].forms[5][0])
            setPassivePastProgressiveTheyResult(result2[0].conjugation_tables.passive[5].forms[5][1])

            /* past passive perfect */
            setPassivePastPerfect(result2[0].conjugation_tables.passive[6].heading.toUpperCase())
            setPassivePastPerfectI(result2[0].conjugation_tables.passive[6].forms[0][0])
            setPassivePastPerfectIRresult(result2[0].conjugation_tables.passive[6].forms[0][1])
            setPassivePastPerfectYou(result2[0].conjugation_tables.passive[6].forms[1][0])
            setPassivePastPerfectYouResult(result2[0].conjugation_tables.passive[6].forms[1][1])
            setPassivePastPerfectHe(result2[0].conjugation_tables.passive[6].forms[2][0])
            setPassivePastPerfectHeResult(result2[0].conjugation_tables.passive[6].forms[2][1])
            setPassivePastPerfectWe(result2[0].conjugation_tables.passive[6].forms[3][0])
            setPassivePastPerfectWeResult(result2[0].conjugation_tables.passive[6].forms[3][1])
            setPassivePastPerfectYou1(result2[0].conjugation_tables.passive[6].forms[4][0])
            setPassivePastPerfectYou1Result(result2[0].conjugation_tables.passive[6].forms[4][1])
            setPassivePastPerfectThey(result2[0].conjugation_tables.passive[6].forms[5][0])
            setPassivePastPerfectTheyResult(result2[0].conjugation_tables.passive[6].forms[5][1])


            /* past  passiveperfect progressive*/
            setPassivePastPerfectProgressive(result2[0].conjugation_tables.passive[7].heading.toUpperCase())
            setPassivePastPerfectProgressiveI(result2[0].conjugation_tables.passive[7].forms[0][0])
            setPassivePastPerfectProgressiveIRresult(result2[0].conjugation_tables.passive[7].forms[0][1])
            setPassivePastPerfectProgressiveYou(result2[0].conjugation_tables.passive[7].forms[1][0])
            setPassivePastPerfectProgressiveYouResult(result2[0].conjugation_tables.passive[7].forms[1][1])
            setPassivePastPerfectProgressiveHe(result2[0].conjugation_tables.passive[7].forms[2][0])
            setPassivePastPerfectProgressiveHeResult(result2[0].conjugation_tables.passive[7].forms[2][1])
            setPassivePastPerfectProgressiveWe(result2[0].conjugation_tables.passive[7].forms[3][0])
            setPassivePastPerfectProgressiveWeResult(result2[0].conjugation_tables.passive[7].forms[3][1])
            setPassivePastPerfectProgressiveYou1(result2[0].conjugation_tables.passive[7].forms[4][0])
            setPassivePastPerfectProgressiveYou1Result(result2[0].conjugation_tables.passive[7].forms[4][1])
            setPassivePastPerfectProgressiveThey(result2[0].conjugation_tables.passive[7].forms[5][0])
            setPassivePastPerfectProgressiveTheyResult(result2[0].conjugation_tables.passive[7].forms[5][1])

            /* simple passive future*/
            setPassiveSimpleFuture(result2[0].conjugation_tables.passive[8].heading.toUpperCase())
            setPassiveSimpleFutureI(result2[0].conjugation_tables.passive[8].forms[0][0])
            setPassiveSimpleFutureIRresult(result2[0].conjugation_tables.passive[8].forms[0][1])
            setPassiveSimpleFutureYou(result2[0].conjugation_tables.passive[8].forms[1][0])
            setPassiveSimpleFutureYouResult(result2[0].conjugation_tables.passive[8].forms[1][1])
            setPassiveSimpleFutureHe(result2[0].conjugation_tables.passive[8].forms[2][0])
            setPassiveSimpleFutureHeResult(result2[0].conjugation_tables.passive[8].forms[2][1])
            setPassiveSimpleFutureWe(result2[0].conjugation_tables.passive[8].forms[3][0])
            setPassiveSimpleFutureWeResult(result2[0].conjugation_tables.passive[8].forms[3][1])
            setPassiveSimpleFutureYou1(result2[0].conjugation_tables.passive[8].forms[4][0])
            setPassiveSimpleFutureYou1Result(result2[0].conjugation_tables.passive[8].forms[4][1])
            setPassiveSimpleFutureThey(result2[0].conjugation_tables.passive[8].forms[5][0])
            setPassiveSimpleFutureTheyResult(result2[0].conjugation_tables.passive[8].forms[5][1])

            /* future passive progressive*/
            setPassiveFuturProgressive(result2[0].conjugation_tables.passive[9].heading.toUpperCase())
            setPassiveFuturProgressiveI(result2[0].conjugation_tables.passive[9].forms[0][0])
            setPassiveFuturProgressiveIRresult(result2[0].conjugation_tables.passive[9].forms[0][1])
            setPassiveFuturProgressiveYou(result2[0].conjugation_tables.passive[9].forms[1][0])
            setPassiveFuturProgressiveYouResult(result2[0].conjugation_tables.passive[9].forms[1][1])
            setPassiveFuturProgressiveHe(result2[0].conjugation_tables.passive[9].forms[2][0])
            setPassiveFuturProgressiveHeResult(result2[0].conjugation_tables.passive[9].forms[2][1])
            setPassiveFuturProgressiveWe(result2[0].conjugation_tables.passive[9].forms[3][0])
            setPassiveFuturProgressiveWeResult(result2[0].conjugation_tables.passive[9].forms[3][1])
            setPassiveFuturProgressiveYou1(result2[0].conjugation_tables.passive[9].forms[4][0])
            setPassiveFuturProgressiveYou1Result(result2[0].conjugation_tables.passive[9].forms[4][1])
            setPassiveFuturProgressiveThey(result2[0].conjugation_tables.passive[9].forms[5][0])
            setPassiveFuturProgressiveTheyResult(result2[0].conjugation_tables.passive[9].forms[5][1])

            /* future passive perfect*/
            setPassiveFuturePerfect(result2[0].conjugation_tables.passive[10].heading.toUpperCase())
            setPassiveFuturePerfectI(result2[0].conjugation_tables.passive[10].forms[0][0])
            setPassiveFuturePerfectIRresult(result2[0].conjugation_tables.passive[10].forms[0][1])
            setPassiveFuturePerfectYou(result2[0].conjugation_tables.passive[10].forms[1][0])
            setPassiveFuturePerfectYouResult(result2[0].conjugation_tables.passive[10].forms[1][1])
            setPassiveFuturePerfectHe(result2[0].conjugation_tables.passive[10].forms[2][0])
            setPassiveFuturePerfectHeResult(result2[0].conjugation_tables.passive[10].forms[2][1])
            setPassiveFuturePerfectWe(result2[0].conjugation_tables.passive[10].forms[3][0])
            setPassiveFuturePerfectWeResult(result2[0].conjugation_tables.passive[10].forms[3][1])
            setPassiveFuturePerfectYou1(result2[0].conjugation_tables.passive[10].forms[4][0])
            setPassiveFuturePerfectYou1Result(result2[0].conjugation_tables.passive[10].forms[4][1])
            setPassiveFuturePerfectThey(result2[0].conjugation_tables.passive[10].forms[5][0])
            setPassiveFuturePerfectTheyResult(result2[0].conjugation_tables.passive[10].forms[5][1])


            /* future passive perfect progressive*/
            setPassiveFuturePerfectProgressive(result2[0].conjugation_tables.passive[11].heading.toUpperCase())
            setPassiveFuturePerfectProgressiveI(result2[0].conjugation_tables.passive[11].forms[0][0])
            setPassiveFuturePerfectProgressiveIRresult(result2[0].conjugation_tables.passive[11].forms[0][1])
            setPassiveFuturePerfectProgressiveYou(result2[0].conjugation_tables.passive[11].forms[1][0])
            setPassiveFuturePerfectProgressiveYouResult(result2[0].conjugation_tables.passive[11].forms[1][1])
            setPassiveFuturePerfectProgressiveHe(result2[0].conjugation_tables.passive[11].forms[2][0])
            setPassiveFuturePerfectProgressiveHeResult(result2[0].conjugation_tables.passive[11].forms[2][1])
            setPassiveFuturePerfectProgressiveWe(result2[0].conjugation_tables.passive[11].forms[3][0])
            setPassiveFuturePerfectProgressiveWeResult(result2[0].conjugation_tables.passive[11].forms[3][1])
            setPassiveFuturePerfectProgressiveYou1(result2[0].conjugation_tables.passive[11].forms[4][0])
            setPassiveFuturePerfectProgressiveYou1Result(result2[0].conjugation_tables.passive[11].forms[4][1])
            setPassiveFuturePerfectProgressiveThey(result2[0].conjugation_tables.passive[11].forms[5][0])
            setPassiveFuturePerfectProgressiveTheyResult(result2[0].conjugation_tables.passive[11].forms[5][1])




            /*  condition form  ------------------------------------------- */

            setSimpleConditionalPresent(result2[0].conjugation_tables.conditional[0].heading.toUpperCase())
            setConditionalPresentI(result2[0].conjugation_tables.conditional[0].forms[0][0])
            setConditionalPresentIRresult(result2[0].conjugation_tables.conditional[0].forms[0][1])
            setConditionalPresentYou(result2[0].conjugation_tables.conditional[0].forms[1][0])
            setConditionalPresentYouResult(result2[0].conjugation_tables.conditional[0].forms[1][1])
            setConditionalPresentHe(result2[0].conjugation_tables.conditional[0].forms[2][0])
            setConditionalPresentHeResult(result2[0].conjugation_tables.conditional[0].forms[2][1])
            setConditionalPresentWe(result2[0].conjugation_tables.conditional[0].forms[3][0])
            setConditionalPresentWeResult(result2[0].conjugation_tables.conditional[0].forms[3][1])
            setConditionalPresentYou1(result2[0].conjugation_tables.conditional[0].forms[4][0])
            setConditionalPresentYou1Result(result2[0].conjugation_tables.conditional[0].forms[4][1])
            setConditionalPresentThey(result2[0].conjugation_tables.conditional[0].forms[5][0])
            setConditionalPresentTheyResult(result2[0].conjugation_tables.conditional[0].forms[5][1])

            /* present Conditional progressive */
            setConditionalPresentProgressive(result2[0].conjugation_tables.conditional[1].heading.toUpperCase())
            setConditionalPresentProgressiveI(result2[0].conjugation_tables.conditional[1].forms[0][0])
            setConditionalPresentProgressiveIRresult(result2[0].conjugation_tables.conditional[1].forms[0][1])
            setConditionalPresentProgressiveYou(result2[0].conjugation_tables.conditional[1].forms[1][0])
            setConditionalPresentProgressiveYouResult(result2[0].conjugation_tables.conditional[1].forms[1][1])
            setConditionalPresentProgressiveHe(result2[0].conjugation_tables.conditional[1].forms[2][0])
            setConditionalPresentProgressiveHeResult(result2[0].conjugation_tables.conditional[1].forms[2][1])
            setConditionalPresentProgressiveWe(result2[0].conjugation_tables.conditional[1].forms[3][0])
            setConditionalPresentProgressiveWeResult(result2[0].conjugation_tables.conditional[1].forms[3][1])
            setConditionalPresentProgressiveYou1(result2[0].conjugation_tables.conditional[1].forms[4][0])
            setConditionalPresentProgressiveYou1Result(result2[0].conjugation_tables.conditional[1].forms[4][1])
            setConditionalPresentProgressiveThey(result2[0].conjugation_tables.conditional[1].forms[5][0])
            setConditionalPresentProgressiveTheyResult(result2[0].conjugation_tables.conditional[1].forms[5][1])

            /* present Conditional perfect */
            setConditionalPresentPerfect(result2[0].conjugation_tables.conditional[2].heading.toUpperCase())
            setConditionalPresentPerfectI(result2[0].conjugation_tables.conditional[2].forms[0][0])
            setConditionalPresentPerfectIRresult(result2[0].conjugation_tables.conditional[2].forms[0][1])
            setConditionalPresentPerfectYou(result2[0].conjugation_tables.conditional[2].forms[1][0])
            setConditionalPresentPerfectYouResult(result2[0].conjugation_tables.conditional[2].forms[1][1])
            setConditionalPresentPerfectHe(result2[0].conjugation_tables.conditional[2].forms[2][0])
            setConditionalPresentPerfectHeResult(result2[0].conjugation_tables.conditional[2].forms[2][1])
            setConditionalPresentPerfectWe(result2[0].conjugation_tables.conditional[2].forms[3][0])
            setConditionalPresentPerfectWeResult(result2[0].conjugation_tables.conditional[2].forms[3][1])
            setConditionalPresentPerfectYou1(result2[0].conjugation_tables.conditional[2].forms[4][0])
            setConditionalPresentPerfectYou1Result(result2[0].conjugation_tables.conditional[2].forms[4][1])
            setConditionalPresentPerfectThey(result2[0].conjugation_tables.conditional[2].forms[5][0])
            setConditionalPresentPerfectTheyResult(result2[0].conjugation_tables.conditional[2].forms[5][1])


            /* present Conditional perfect progressive */
            setConditionalPresentPerfectProgressive(result2[0].conjugation_tables.conditional[3].heading.toUpperCase())
            setConditionalPresentPerfectProgressiveI(result2[0].conjugation_tables.conditional[3].forms[0][0])
            setConditionalPresentPerfectProgressiveIRresult(result2[0].conjugation_tables.conditional[3].forms[0][1])
            setConditionalPresentPerfectProgressiveYou(result2[0].conjugation_tables.conditional[3].forms[1][0])
            setConditionalPresentPerfectProgressiveYouResult(result2[0].conjugation_tables.conditional[3].forms[1][1])
            setConditionalPresentPerfectProgressiveHe(result2[0].conjugation_tables.conditional[3].forms[2][0])
            setConditionalPresentPerfectProgressiveHeResult(result2[0].conjugation_tables.conditional[3].forms[2][1])
            setConditionalPresentPerfectProgressiveWe(result2[0].conjugation_tables.conditional[3].forms[3][0])
            setConditionalPresentPerfectProgressiveWeResult(result2[0].conjugation_tables.conditional[3].forms[3][1])
            setConditionalPresentPerfectProgressiveYou1(result2[0].conjugation_tables.conditional[3].forms[4][0])
            setConditionalPresentPerfectProgressiveYou1Result(result2[0].conjugation_tables.conditional[3].forms[4][1])
            setConditionalPresentPerfectProgressiveThey(result2[0].conjugation_tables.conditional[3].forms[5][0])
            setConditionalPresentPerfectProgressiveTheyResult(result2[0].conjugation_tables.conditional[3].forms[5][1])




        } catch (e) {
            console.log(e.message)
        }

        history.push(`/conjugation/conjugation-verb-${inputValue}.html`)

    }


    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="container my-5">
                <form className="form-inline d-flex justify-content-center" onSubmit={seachVerb} >
                    <div className="form-group mb-2">
                        <input type="text" className="form-control " placeholder="Conjugation" value={inputValue} onChange={(e) => {
                            setinputValue(e.target.value)
                        }} />
                    </div>
                    <input type="submit" value="Conjugation" className="btn btn-info mb-2 ml-2" />
                </form>
                <h3 className="text-danger mr-5">{error}</h3>

            </div>

            <div className="row mt-3  " >

                <div className="col-sm-2 singlever-left bg-info ">
                    Mes publicites seront ici!
               </div>
                <div className="col-sm-8  pb-5">
                    {/* <p>{Infinitif }  <span className="text-danger">{InfinitifValeur}</span></p> */}
                    <p>{titre}  <span className="text-danger">{valeurTitre}</span></p>
                    <p>{SimplePast1}  <span className="text-danger">{SimplePastValue}</span></p>
                    <p>{PastParticipe}  <span className="text-danger">{PastParticipeValue}</span></p>

                    <h4 className="text-info">Indicative</h4>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{SimplePresent}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentI}-${PresentIRresult}`}> <span className="text-dark"> {PresentI} </span><span className="text-info">{PresentIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentI + PresentIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentYou}-${PresentYouResult}`}><span className="text-dark">{PresentYou}  </span><span className="text-info">{PresentYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentYou + PresentYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PresentHeResult}`}><span className="text-dark">{PresentHe} </span><span className="text-info">{PresentHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentHe + PresentHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentWe}-${PresentWeResult}`}><span className="text-dark">{PresentWe} </span><span className="text-info">{PresentWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentWe + PresentWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentYou1}-${PresentYou1Result}`}><span className="text-dark">{PresentYou1} </span><span className="text-info">{PresentYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentYou1 + PresentYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentThey}-${PresentTheyResult}`}><span className="text-dark">{PresentThey} </span><span className="text-info">{PresentTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentThey + PresentTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PresentProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentProgressiveI}-${PresentProgressiveIRresult}`}> <span className="text-dark"> {PresentProgressiveI} </span><span className="text-info">{PresentProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentProgressiveI + PresentProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentProgressiveYou}-${PresentProgressiveYouResult}`}><span className="text-dark">{PresentProgressiveYou}  </span><span className="text-info">{PresentProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentProgressiveYou + PresentProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PresentProgressiveHeResult}`}><span className="text-dark">{PresentProgressiveHe} </span><span className="text-info">{PresentProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentProgressiveHe + PresentProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentProgressiveWe}-${PresentProgressiveWeResult}`}><span className="text-dark">{PresentProgressiveWe} </span><span className="text-info">{PresentProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentProgressiveWe + PresentProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentProgressiveYou1}-${PresentProgressiveYou1Result}`}><span className="text-dark">{PresentProgressiveYou1} </span><span className="text-info">{PresentProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentProgressiveYou1 + PresentProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentProgressiveThey}-${PresentProgressiveTheyResult}`}><span className="text-dark">{PresentProgressiveThey} </span><span className="text-info">{PresentProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentProgressiveThey + PresentProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PresentPerfect}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectI}-${PresentPerfectIRresult}`}> <span className="text-dark"> {PresentPerfectI} </span><span className="text-info">{PresentPerfectIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectI + PresentPerfectIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectYou}-${PresentPerfectYouResult}`}><span className="text-dark">{PresentPerfectYou}  </span><span className="text-info">{PresentPerfectYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectYou + PresentPerfectYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PresentPerfectHeResult}`}><span className="text-dark">{PresentPerfectHe} </span><span className="text-info">{PresentPerfectHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectHe + PresentPerfectHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectWe}-${PresentPerfectWeResult}`}><span className="text-dark">{PresentPerfectWe} </span><span className="text-info">{PresentPerfectWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectWe + PresentPerfectWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectYou1}-${PresentPerfectYou1Result}`}><span className="text-dark">{PresentPerfectYou1} </span><span className="text-info">{PresentPerfectYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectYou1 + PresentPerfectYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectThey}-${PresentPerfectTheyResult}`}><span className="text-dark">{PresentPerfectThey} </span><span className="text-info">{PresentPerfectTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectThey + PresentPerfectTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PresentPerfectProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectProgressiveI}-${PresentPerfectProgressiveIRresult}`}> <span className="text-dark"> {PresentPerfectProgressiveI} </span><span className="text-info">{PresentPerfectProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectProgressiveI + PresentPerfectProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectProgressiveYou}-${PresentPerfectProgressiveYouResult}`}><span className="text-dark">{PresentPerfectProgressiveYou}  </span><span className="text-info">{PresentPerfectProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectProgressiveYou + PresentPerfectProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PresentPerfectProgressiveHeResult}`}><span className="text-dark">{PresentPerfectProgressiveHe} </span><span className="text-info">{PresentPerfectProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectProgressiveHe + PresentPerfectProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectProgressiveWe}-${PresentPerfectProgressiveWeResult}`}><span className="text-dark">{PresentPerfectProgressiveWe} </span><span className="text-info">{PresentPerfectProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectProgressiveWe + PresentPerfectProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectProgressiveYou1}-${PresentPerfectProgressiveYou1Result}`}><span className="text-dark">{PresentPerfectProgressiveYou1} </span><span className="text-info">{PresentPerfectProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectProgressiveYou1 + PresentPerfectProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PresentPerfectProgressiveThey}-${PresentPerfectProgressiveTheyResult}`}><span className="text-dark">{PresentPerfectProgressiveThey} </span><span className="text-info">{PresentPerfectProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PresentPerfectProgressiveThey + PresentPerfectProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{SimplePast}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePastI}-${SimplePastIRresult}`}> <span className="text-dark"> {SimplePastI} </span><span className="text-info">{SimplePastIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePastI + SimplePastIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePastYou}-${SimplePastYouResult}`}><span className="text-dark">{SimplePastYou}  </span><span className="text-info">{SimplePastYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePastYou + SimplePastYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${SimplePastHeResult}`}><span className="text-dark">{SimplePastHe} </span><span className="text-info">{SimplePastHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePastHe + SimplePastHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePastWe}-${SimplePastWeResult}`}><span className="text-dark">{SimplePastWe} </span><span className="text-info">{SimplePastWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePastWe + SimplePastWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePastYou1}-${SimplePastYou1Result}`}><span className="text-dark">{SimplePastYou1} </span><span className="text-info">{SimplePastYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePastYou1 + SimplePastYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePastThey}-${SimplePastTheyResult}`}><span className="text-dark">{SimplePastThey} </span><span className="text-info">{SimplePastTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePastThey + SimplePastTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>



                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PastProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PastProgressiveI}-${PastProgressiveIRresult}`}> <span className="text-dark"> {PastProgressiveI} </span><span className="text-info">{PastProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastProgressiveI + PastProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastProgressiveYou}-${PastProgressiveYouResult}`}><span className="text-dark">{PastProgressiveYou}  </span><span className="text-info">{PastProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastProgressiveYou + PastProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PastProgressiveHeResult}`}><span className="text-dark">{PastProgressiveHe} </span><span className="text-info">{PastProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastProgressiveHe + PastProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastProgressiveWe}-${PastProgressiveWeResult}`}><span className="text-dark">{PastProgressiveWe} </span><span className="text-info">{PastProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastProgressiveWe + PastProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastProgressiveYou1}-${PastProgressiveYou1Result}`}><span className="text-dark">{PastProgressiveYou1} </span><span className="text-info">{PastProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastProgressiveYou1 + PastProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastProgressiveThey}-${PastProgressiveTheyResult}`}><span className="text-dark">{PastProgressiveThey} </span><span className="text-info">{PastProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastProgressiveThey + PastProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* past perfect */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PastPerfect}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectI}-${PastPerfectIRresult}`}> <span className="text-dark"> {PastPerfectI} </span><span className="text-info">{PastPerfectIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectI + PastPerfectIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectYou}-${PastPerfectYouResult}`}><span className="text-dark">{PastPerfectYou}  </span><span className="text-info">{PastPerfectYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectYou + PastPerfectYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PastPerfectHeResult}`}><span className="text-dark">{PastPerfectHe} </span><span className="text-info">{PastPerfectHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectHe + PastPerfectHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectWe}-${PastPerfectWeResult}`}><span className="text-dark">{PastPerfectWe} </span><span className="text-info">{PastPerfectWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectWe + PastPerfectWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectYou1}-${PastPerfectYou1Result}`}><span className="text-dark">{PastPerfectYou1} </span><span className="text-info">{PastPerfectYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectYou1 + PastPerfectYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectThey}-${PastPerfectTheyResult}`}><span className="text-dark">{PastPerfectThey} </span><span className="text-info">{PastPerfectTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectThey + PastPerfectTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* past perfect progressive*/}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PastPerfectProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectProgressiveI}-${PastPerfectProgressiveIRresult}`}> <span className="text-dark"> {PastPerfectProgressiveI} </span><span className="text-info">{PastPerfectProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectProgressiveI + PastPerfectProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectProgressiveYou}-${PastPerfectProgressiveYouResult}`}><span className="text-dark">{PastPerfectProgressiveYou}  </span><span className="text-info">{PastPerfectProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectProgressiveYou + PastPerfectProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PastPerfectProgressiveHeResult}`}><span className="text-dark">{PastPerfectProgressiveHe} </span><span className="text-info">{PastPerfectProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectProgressiveHe + PastPerfectProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectProgressiveWe}-${PastPerfectProgressiveWeResult}`}><span className="text-dark">{PastPerfectProgressiveWe} </span><span className="text-info">{PastPerfectProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectProgressiveWe + PastPerfectProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectProgressiveYou1}-${PastPerfectProgressiveYou1Result}`}><span className="text-dark">{PastPerfectProgressiveYou1} </span><span className="text-info">{PastPerfectProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectProgressiveYou1 + PastPerfectProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PastPerfectProgressiveThey}-${PastPerfectProgressiveTheyResult}`}><span className="text-dark">{PastPerfectProgressiveThey} </span><span className="text-info">{PastPerfectProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PastPerfectProgressiveThey + PastPerfectProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* simple future */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{SimpleFuture}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${SimpleFutureI}-${SimpleFutureIRresult}`}> <span className="text-dark"> {SimpleFutureI} </span><span className="text-info">{SimpleFutureIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimpleFutureI + SimpleFutureIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimpleFutureYou}-${SimpleFutureYouResult}`}><span className="text-dark">{SimpleFutureYou}  </span><span className="text-info">{SimpleFutureYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimpleFutureYou + SimpleFutureYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${SimpleFutureHeResult}`}><span className="text-dark">{SimpleFutureHe} </span><span className="text-info">{SimpleFutureHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimpleFutureHe + SimpleFutureHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimpleFutureWe}-${SimpleFutureWeResult}`}><span className="text-dark">{SimpleFutureWe} </span><span className="text-info">{SimpleFutureWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimpleFutureWe + SimpleFutureWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimpleFutureYou1}-${SimpleFutureYou1Result}`}><span className="text-dark">{SimpleFutureYou1} </span><span className="text-info">{SimpleFutureYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimpleFutureYou1 + SimpleFutureYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimpleFutureThey}-${SimpleFutureTheyResult}`}><span className="text-dark">{SimpleFutureThey} </span><span className="text-info">{SimpleFutureTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimpleFutureThey + SimpleFutureTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* future progressive */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{FuturProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturProgressiveI}-${FuturProgressiveIRresult}`}> <span className="text-dark"> {FuturProgressiveI} </span><span className="text-info">{FuturProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturProgressiveI + FuturProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturProgressiveYou}-${FuturProgressiveYouResult}`}><span className="text-dark">{FuturProgressiveYou}  </span><span className="text-info">{FuturProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturProgressiveYou + FuturProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${FuturProgressiveHeResult}`}><span className="text-dark">{FuturProgressiveHe} </span><span className="text-info">{FuturProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturProgressiveHe + FuturProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturProgressiveWe}-${FuturProgressiveWeResult}`}><span className="text-dark">{FuturProgressiveWe} </span><span className="text-info">{FuturProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturProgressiveWe + FuturProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturProgressiveYou1}-${FuturProgressiveYou1Result}`}><span className="text-dark">{FuturProgressiveYou1} </span><span className="text-info">{FuturProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturProgressiveYou1 + FuturProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturProgressiveThey}-${FuturProgressiveTheyResult}`}><span className="text-dark">{FuturProgressiveThey} </span><span className="text-info">{FuturProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturProgressiveThey + FuturProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* future perfect */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{FuturePerfect}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectI}-${FuturePerfectIRresult}`}> <span className="text-dark"> {FuturePerfectI} </span><span className="text-info">{FuturePerfectIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectI + FuturePerfectIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectYou}-${FuturePerfectYouResult}`}><span className="text-dark">{FuturePerfectYou}  </span><span className="text-info">{FuturePerfectYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectYou + FuturePerfectYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${FuturePerfectHeResult}`}><span className="text-dark">{FuturePerfectHe} </span><span className="text-info">{FuturePerfectHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectHe + FuturePerfectHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectWe}-${FuturePerfectWeResult}`}><span className="text-dark">{FuturePerfectWe} </span><span className="text-info">{FuturePerfectWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectWe + FuturePerfectWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectYou1}-${FuturePerfectYou1Result}`}><span className="text-dark">{FuturePerfectYou1} </span><span className="text-info">{FuturePerfectYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectYou1 + FuturePerfectYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectThey}-${FuturePerfectTheyResult}`}><span className="text-dark">{FuturePerfectThey} </span><span className="text-info">{FuturePerfectTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectThey + FuturePerfectTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* future perfect progressive */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{FuturePerfectProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectProgressiveI}-${FuturePerfectProgressiveIRresult}`}> <span className="text-dark"> {FuturePerfectProgressiveI} </span><span className="text-info">{FuturePerfectProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectProgressiveI + FuturePerfectProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectProgressiveYou}-${FuturePerfectProgressiveYouResult}`}><span className="text-dark">{FuturePerfectProgressiveYou}  </span><span className="text-info">{FuturePerfectProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectProgressiveYou + FuturePerfectProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${FuturePerfectProgressiveHeResult}`}><span className="text-dark">{FuturePerfectProgressiveHe} </span><span className="text-info">{FuturePerfectProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectProgressiveHe + FuturePerfectProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectProgressiveWe}-${FuturePerfectProgressiveWeResult}`}><span className="text-dark">{FuturePerfectProgressiveWe} </span><span className="text-info">{FuturePerfectProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectProgressiveWe + FuturePerfectProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectProgressiveYou1}-${FuturePerfectProgressiveYou1Result}`}><span className="text-dark">{FuturePerfectProgressiveYou1} </span><span className="text-info">{FuturePerfectProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectProgressiveYou1 + FuturePerfectProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${FuturePerfectProgressiveThey}-${FuturePerfectProgressiveTheyResult}`}><span className="text-dark">{FuturePerfectProgressiveThey} </span><span className="text-info">{FuturePerfectProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(FuturePerfectProgressiveThey + FuturePerfectProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>






                    </div>

                    {/* passive form  */}
                    <h4 className="text-info">Passive</h4>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{SimplePassivePresent}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentI}-${PassivePresentIRresult}`}> <span className="text-dark"> {PassivePresentI} </span><span className="text-info">{PassivePresentIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentI + PassivePresentIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentYou}-${PassivePresentYouResult}`}><span className="text-dark">{PassivePresentYou}  </span><span className="text-info">{PassivePresentYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentYou + PassivePresentYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassivePresentHeResult}`}><span className="text-dark">{PassivePresentHe} </span><span className="text-info">{PassivePresentHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentHe + PassivePresentHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentWe}-${PassivePresentWeResult}`}><span className="text-dark">{PassivePresentWe} </span><span className="text-info">{PassivePresentWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentWe + PassivePresentWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentYou1}-${PassivePresentYou1Result}`}><span className="text-dark">{PassivePresentYou1} </span><span className="text-info">{PassivePresentYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentYou1 + PassivePresentYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentThey}-${PassivePresentTheyResult}`}><span className="text-dark">{PassivePresentThey} </span><span className="text-info">{PassivePresentTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentThey + PassivePresentTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassivePresentProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentProgressiveI}-${PassivePresentProgressiveIRresult}`}> <span className="text-dark"> {PassivePresentProgressiveI} </span><span className="text-info">{PassivePresentProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentProgressiveI + PassivePresentProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentProgressiveYou}-${PassivePresentProgressiveYouResult}`}><span className="text-dark">{PassivePresentProgressiveYou}  </span><span className="text-info">{PassivePresentProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentProgressiveYou + PassivePresentProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassivePresentProgressiveHeResult}`}><span className="text-dark">{PassivePresentProgressiveHe} </span><span className="text-info">{PassivePresentProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentProgressiveHe + PassivePresentProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentProgressiveWe}-${PassivePresentProgressiveWeResult}`}><span className="text-dark">{PassivePresentProgressiveWe} </span><span className="text-info">{PassivePresentProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentProgressiveWe + PassivePresentProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentProgressiveYou1}-${PassivePresentProgressiveYou1Result}`}><span className="text-dark">{PassivePresentProgressiveYou1} </span><span className="text-info">{PassivePresentProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentProgressiveYou1 + PassivePresentProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentProgressiveThey}-${PassivePresentProgressiveTheyResult}`}><span className="text-dark">{PassivePresentProgressiveThey} </span><span className="text-info">{PassivePresentProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentProgressiveThey + PassivePresentProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassivePresentPerfect}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectI}-${PassivePresentPerfectIRresult}`}> <span className="text-dark"> {PassivePresentPerfectI} </span><span className="text-info">{PassivePresentPerfectIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectI + PassivePresentPerfectIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectYou}-${PassivePresentPerfectYouResult}`}><span className="text-dark">{PassivePresentPerfectYou}  </span><span className="text-info">{PassivePresentPerfectYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectYou + PassivePresentPerfectYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassivePresentPerfectHeResult}`}><span className="text-dark">{PassivePresentPerfectHe} </span><span className="text-info">{PassivePresentPerfectHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectHe + PassivePresentPerfectHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectWe}-${PassivePresentPerfectWeResult}`}><span className="text-dark">{PassivePresentPerfectWe} </span><span className="text-info">{PassivePresentPerfectWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectWe + PassivePresentPerfectWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectYou1}-${PassivePresentPerfectYou1Result}`}><span className="text-dark">{PassivePresentPerfectYou1} </span><span className="text-info">{PassivePresentPerfectYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectYou1 + PassivePresentPerfectYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectThey}-${PassivePresentPerfectTheyResult}`}><span className="text-dark">{PassivePresentPerfectThey} </span><span className="text-info">{PassivePresentPerfectTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectThey + PassivePresentPerfectTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassivePresentPerfectProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectProgressiveI}-${PassivePresentPerfectProgressiveIRresult}`}> <span className="text-dark"> {PassivePresentPerfectProgressiveI} </span><span className="text-info">{PassivePresentPerfectProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectProgressiveI + PassivePresentPerfectProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectProgressiveYou}-${PassivePresentPerfectProgressiveYouResult}`}><span className="text-dark">{PassivePresentPerfectProgressiveYou}  </span><span className="text-info">{PassivePresentPerfectProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectProgressiveYou + PassivePresentPerfectProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassivePresentPerfectProgressiveHeResult}`}><span className="text-dark">{PassivePresentPerfectProgressiveHe} </span><span className="text-info">{PassivePresentPerfectProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectProgressiveHe + PassivePresentPerfectProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectProgressiveWe}-${PassivePresentPerfectProgressiveWeResult}`}><span className="text-dark">{PassivePresentPerfectProgressiveWe} </span><span className="text-info">{PassivePresentPerfectProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectProgressiveWe + PassivePresentPerfectProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectProgressiveYou1}-${PassivePresentPerfectProgressiveYou1Result}`}><span className="text-dark">{PassivePresentPerfectProgressiveYou1} </span><span className="text-info">{PassivePresentPerfectProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectProgressiveYou1 + PassivePresentPerfectProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePresentPerfectProgressiveThey}-${PassivePresentPerfectProgressiveTheyResult}`}><span className="text-dark">{PassivePresentPerfectProgressiveThey} </span><span className="text-info">{PassivePresentPerfectProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePresentPerfectProgressiveThey + PassivePresentPerfectProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{SimplePassivePast}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePassivePastI}-${SimplePassivePastIRresult}`}> <span className="text-dark"> {SimplePassivePastI} </span><span className="text-info">{SimplePassivePastIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePassivePastI + SimplePassivePastIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePassivePastYou}-${SimplePassivePastYouResult}`}><span className="text-dark">{SimplePassivePastYou}  </span><span className="text-info">{SimplePassivePastYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePassivePastYou + SimplePassivePastYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${SimplePassivePastHeResult}`}><span className="text-dark">{SimplePassivePastHe} </span><span className="text-info">{SimplePassivePastHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePassivePastHe + SimplePassivePastHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePassivePastWe}-${SimplePassivePastWeResult}`}><span className="text-dark">{SimplePassivePastWe} </span><span className="text-info">{SimplePassivePastWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePassivePastWe + SimplePassivePastWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePassivePastYou1}-${SimplePassivePastYou1Result}`}><span className="text-dark">{SimplePassivePastYou1} </span><span className="text-info">{SimplePassivePastYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePassivePastYou1 + SimplePassivePastYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${SimplePassivePastThey}-${SimplePassivePastTheyResult}`}><span className="text-dark">{SimplePassivePastThey} </span><span className="text-info">{SimplePassivePastTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(SimplePassivePastThey + SimplePassivePastTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>



                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassivePastProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastProgressiveI}-${PassivePastProgressiveIRresult}`}> <span className="text-dark"> {PassivePastProgressiveI} </span><span className="text-info">{PassivePastProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastProgressiveI + PassivePastProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastProgressiveYou}-${PassivePastProgressiveYouResult}`}><span className="text-dark">{PassivePastProgressiveYou}  </span><span className="text-info">{PassivePastProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastProgressiveYou + PassivePastProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassivePastProgressiveHeResult}`}><span className="text-dark">{PassivePastProgressiveHe} </span><span className="text-info">{PassivePastProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastProgressiveHe + PassivePastProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastProgressiveWe}-${PassivePastProgressiveWeResult}`}><span className="text-dark">{PassivePastProgressiveWe} </span><span className="text-info">{PassivePastProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastProgressiveWe + PassivePastProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastProgressiveYou1}-${PassivePastProgressiveYou1Result}`}><span className="text-dark">{PassivePastProgressiveYou1} </span><span className="text-info">{PassivePastProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastProgressiveYou1 + PassivePastProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastProgressiveThey}-${PassivePastProgressiveTheyResult}`}><span className="text-dark">{PassivePastProgressiveThey} </span><span className="text-info">{PassivePastProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastProgressiveThey + PassivePastProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* past perfect */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassivePastPerfect}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectI}-${PassivePastPerfectIRresult}`}> <span className="text-dark"> {PassivePastPerfectI} </span><span className="text-info">{PassivePastPerfectIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectI + PassivePastPerfectIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectYou}-${PassivePastPerfectYouResult}`}><span className="text-dark">{PassivePastPerfectYou}  </span><span className="text-info">{PassivePastPerfectYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectYou + PassivePastPerfectYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassivePastPerfectHeResult}`}><span className="text-dark">{PassivePastPerfectHe} </span><span className="text-info">{PassivePastPerfectHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectHe + PassivePastPerfectHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectWe}-${PassivePastPerfectWeResult}`}><span className="text-dark">{PassivePastPerfectWe} </span><span className="text-info">{PassivePastPerfectWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectWe + PassivePastPerfectWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectYou1}-${PassivePastPerfectYou1Result}`}><span className="text-dark">{PassivePastPerfectYou1} </span><span className="text-info">{PassivePastPerfectYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectYou1 + PassivePastPerfectYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectThey}-${PassivePastPerfectTheyResult}`}><span className="text-dark">{PassivePastPerfectThey} </span><span className="text-info">{PassivePastPerfectTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectThey + PassivePastPerfectTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* Passivepast perfect progressive*/}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassivePastPerfectProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectProgressiveI}-${PassivePastPerfectProgressiveIRresult}`}> <span className="text-dark"> {PassivePastPerfectProgressiveI} </span><span className="text-info">{PassivePastPerfectProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectProgressiveI + PassivePastPerfectProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectProgressiveYou}-${PassivePastPerfectProgressiveYouResult}`}><span className="text-dark">{PassivePastPerfectProgressiveYou}  </span><span className="text-info">{PassivePastPerfectProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectProgressiveYou + PassivePastPerfectProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassivePastPerfectProgressiveHeResult}`}><span className="text-dark">{PassivePastPerfectProgressiveHe} </span><span className="text-info">{PassivePastPerfectProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectProgressiveHe + PassivePastPerfectProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectProgressiveWe}-${PassivePastPerfectProgressiveWeResult}`}><span className="text-dark">{PassivePastPerfectProgressiveWe} </span><span className="text-info">{PassivePastPerfectProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectProgressiveWe + PassivePastPerfectProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectProgressiveYou1}-${PassivePastPerfectProgressiveYou1Result}`}><span className="text-dark">{PassivePastPerfectProgressiveYou1} </span><span className="text-info">{PassivePastPerfectProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectProgressiveYou1 + PassivePastPerfectProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassivePastPerfectProgressiveThey}-${PassivePastPerfectProgressiveTheyResult}`}><span className="text-dark">{PassivePastPerfectProgressiveThey} </span><span className="text-info">{PassivePastPerfectProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassivePastPerfectProgressiveThey + PassivePastPerfectProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* simple future */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassiveSimpleFuture}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveSimpleFutureI}-${PassiveSimpleFutureIRresult}`}> <span className="text-dark"> {PassiveSimpleFutureI} </span><span className="text-info">{PassiveSimpleFutureIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveSimpleFutureI + PassiveSimpleFutureIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveSimpleFutureYou}-${PassiveSimpleFutureYouResult}`}><span className="text-dark">{PassiveSimpleFutureYou}  </span><span className="text-info">{PassiveSimpleFutureYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveSimpleFutureYou + PassiveSimpleFutureYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassiveSimpleFutureHeResult}`}><span className="text-dark">{PassiveSimpleFutureHe} </span><span className="text-info">{PassiveSimpleFutureHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveSimpleFutureHe + PassiveSimpleFutureHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveSimpleFutureWe}-${PassiveSimpleFutureWeResult}`}><span className="text-dark">{PassiveSimpleFutureWe} </span><span className="text-info">{PassiveSimpleFutureWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveSimpleFutureWe + PassiveSimpleFutureWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveSimpleFutureYou1}-${PassiveSimpleFutureYou1Result}`}><span className="text-dark">{PassiveSimpleFutureYou1} </span><span className="text-info">{PassiveSimpleFutureYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveSimpleFutureYou1 + PassiveSimpleFutureYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveSimpleFutureThey}-${PassiveSimpleFutureTheyResult}`}><span className="text-dark">{PassiveSimpleFutureThey} </span><span className="text-info">{PassiveSimpleFutureTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveSimpleFutureThey + PassiveSimpleFutureTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* future progressive */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassiveFuturProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturProgressiveI}-${PassiveFuturProgressiveIRresult}`}> <span className="text-dark"> {PassiveFuturProgressiveI} </span><span className="text-info">{PassiveFuturProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturProgressiveI + PassiveFuturProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturProgressiveYou}-${PassiveFuturProgressiveYouResult}`}><span className="text-dark">{PassiveFuturProgressiveYou}  </span><span className="text-info">{PassiveFuturProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturProgressiveYou + PassiveFuturProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassiveFuturProgressiveHeResult}`}><span className="text-dark">{PassiveFuturProgressiveHe} </span><span className="text-info">{PassiveFuturProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturProgressiveHe + PassiveFuturProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturProgressiveWe}-${PassiveFuturProgressiveWeResult}`}><span className="text-dark">{PassiveFuturProgressiveWe} </span><span className="text-info">{PassiveFuturProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturProgressiveWe + PassiveFuturProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturProgressiveYou1}-${PassiveFuturProgressiveYou1Result}`}><span className="text-dark">{PassiveFuturProgressiveYou1} </span><span className="text-info">{PassiveFuturProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturProgressiveYou1 + PassiveFuturProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturProgressiveThey}-${PassiveFuturProgressiveTheyResult}`}><span className="text-dark">{PassiveFuturProgressiveThey} </span><span className="text-info">{PassiveFuturProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturProgressiveThey + PassiveFuturProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* future perfect */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassiveFuturePerfect}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectI}-${PassiveFuturePerfectIRresult}`}> <span className="text-dark"> {PassiveFuturePerfectI} </span><span className="text-info">{PassiveFuturePerfectIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectI + PassiveFuturePerfectIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectYou}-${PassiveFuturePerfectYouResult}`}><span className="text-dark">{PassiveFuturePerfectYou}  </span><span className="text-info">{PassiveFuturePerfectYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectYou + PassiveFuturePerfectYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassiveFuturePerfectHeResult}`}><span className="text-dark">{PassiveFuturePerfectHe} </span><span className="text-info">{PassiveFuturePerfectHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectHe + PassiveFuturePerfectHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectWe}-${PassiveFuturePerfectWeResult}`}><span className="text-dark">{PassiveFuturePerfectWe} </span><span className="text-info">{PassiveFuturePerfectWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectWe + PassiveFuturePerfectWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectYou1}-${PassiveFuturePerfectYou1Result}`}><span className="text-dark">{PassiveFuturePerfectYou1} </span><span className="text-info">{PassiveFuturePerfectYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectYou1 + PassiveFuturePerfectYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectThey}-${PassiveFuturePerfectTheyResult}`}><span className="text-dark">{PassiveFuturePerfectThey} </span><span className="text-info">{PassiveFuturePerfectTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectThey + PassiveFuturePerfectTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        {/* Passivefuture perfect progressive */}

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{PassiveFuturePerfectProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectProgressiveI}-${PassiveFuturePerfectProgressiveIRresult}`}> <span className="text-dark"> {PassiveFuturePerfectProgressiveI} </span><span className="text-info">{PassiveFuturePerfectProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectProgressiveI + PassiveFuturePerfectProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectProgressiveYou}-${PassiveFuturePerfectProgressiveYouResult}`}><span className="text-dark">{PassiveFuturePerfectProgressiveYou}  </span><span className="text-info">{PassiveFuturePerfectProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectProgressiveYou + PassiveFuturePerfectProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${PassiveFuturePerfectProgressiveHeResult}`}><span className="text-dark">{PassiveFuturePerfectProgressiveHe} </span><span className="text-info">{PassiveFuturePerfectProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectProgressiveHe + PassiveFuturePerfectProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectProgressiveWe}-${PassiveFuturePerfectProgressiveWeResult}`}><span className="text-dark">{PassiveFuturePerfectProgressiveWe} </span><span className="text-info">{PassiveFuturePerfectProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectProgressiveWe + PassiveFuturePerfectProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectProgressiveYou1}-${PassiveFuturePerfectProgressiveYou1Result}`}><span className="text-dark">{PassiveFuturePerfectProgressiveYou1} </span><span className="text-info">{PassiveFuturePerfectProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectProgressiveYou1 + PassiveFuturePerfectProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${PassiveFuturePerfectProgressiveThey}-${PassiveFuturePerfectProgressiveTheyResult}`}><span className="text-dark">{PassiveFuturePerfectProgressiveThey} </span><span className="text-info">{PassiveFuturePerfectProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(PassiveFuturePerfectProgressiveThey + PassiveFuturePerfectProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>






                    </div>

                    {/* conditional ----------------------------------------------------------- */}


                    {/* passive form  */}
                    <h4 className="text-info">Conditional</h4>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{SimpleConditionalPresent}</p>
                                {/*  <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><span>{ConditionalPresentI} </span><span className="text-info">{ConditionalPresentIRresult}</span> </li>
                                    <li className="list-group-item"><span>{ConditionalPresentYou} </span><span className="text-info">{ConditionalPresentYouResult}</span> </li>
                                    <li className="list-group-item"><span>{ConditionalPresentHe} </span><span className="text-info">{ConditionalPresentHeResult}</span> </li>
                                    <li className="list-group-item"><span>{ConditionalPresentWe} </span><span className="text-info">{ConditionalPresentWeResult}</span> </li>
                                    <li className="list-group-item"><span>{ConditionalPresentYou1} </span><span className="text-info">{ConditionalPresentYou1Result}</span> </li>
                                    <li className="list-group-item"><span>{ConditionalPresentThey} </span><span className="text-info">{ConditionalPresentTheyResult}</span> </li>
                                </ul> */}
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentI}-${ConditionalPresentIRresult}`}> <span className="text-dark"> {ConditionalPresentI} </span><span className="text-info">{ConditionalPresentIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentI + ConditionalPresentIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentYou}-${ConditionalPresentYouResult}`}><span className="text-dark">{ConditionalPresentYou}  </span><span className="text-info">{ConditionalPresentYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentYou + ConditionalPresentYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${ConditionalPresentHeResult}`}><span className="text-dark">{ConditionalPresentHe} </span><span className="text-info">{ConditionalPresentHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentHe + ConditionalPresentHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentWe}-${ConditionalPresentWeResult}`}><span className="text-dark">{ConditionalPresentWe} </span><span className="text-info">{ConditionalPresentWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentWe + ConditionalPresentWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentYou1}-${ConditionalPresentYou1Result}`}><span className="text-dark">{ConditionalPresentYou1} </span><span className="text-info">{ConditionalPresentYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentYou1 + ConditionalPresentYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentThey}-${ConditionalPresentTheyResult}`}><span className="text-dark">{ConditionalPresentThey} </span><span className="text-info">{ConditionalPresentTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentThey + ConditionalPresentTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{ConditionalPresentProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentProgressiveI}-${ConditionalPresentProgressiveIRresult}`}> <span className="text-dark"> {ConditionalPresentProgressiveI} </span><span className="text-info">{ConditionalPresentProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentProgressiveI + ConditionalPresentProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentProgressiveYou}-${ConditionalPresentProgressiveYouResult}`}><span className="text-dark">{ConditionalPresentProgressiveYou}  </span><span className="text-info">{ConditionalPresentProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentProgressiveYou + ConditionalPresentProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${ConditionalPresentProgressiveHeResult}`}><span className="text-dark">{ConditionalPresentProgressiveHe} </span><span className="text-info">{ConditionalPresentProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentProgressiveHe + ConditionalPresentProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentProgressiveWe}-${ConditionalPresentProgressiveWeResult}`}><span className="text-dark">{ConditionalPresentProgressiveWe} </span><span className="text-info">{ConditionalPresentProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentProgressiveWe + ConditionalPresentProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentProgressiveYou1}-${ConditionalPresentProgressiveYou1Result}`}><span className="text-dark">{ConditionalPresentProgressiveYou1} </span><span className="text-info">{ConditionalPresentProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentProgressiveYou1 + ConditionalPresentProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentProgressiveThey}-${ConditionalPresentProgressiveTheyResult}`}><span className="text-dark">{ConditionalPresentProgressiveThey} </span><span className="text-info">{ConditionalPresentProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentProgressiveThey + ConditionalPresentProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{ConditionalPresentPerfect}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectI}-${ConditionalPresentPerfectIRresult}`}> <span className="text-dark"> {ConditionalPresentPerfectI} </span><span className="text-info">{ConditionalPresentPerfectIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectI + ConditionalPresentPerfectIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectYou}-${ConditionalPresentPerfectYouResult}`}><span className="text-dark">{ConditionalPresentPerfectYou}  </span><span className="text-info">{ConditionalPresentPerfectYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectYou + ConditionalPresentPerfectYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${ConditionalPresentPerfectYouResult}`}><span className="text-dark">{ConditionalPresentPerfectYou} </span><span className="text-info">{ConditionalPresentPerfectYouResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectYou + ConditionalPresentPerfectYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectWe}-${ConditionalPresentPerfectWeResult}`}><span className="text-dark">{ConditionalPresentPerfectWe} </span><span className="text-info">{ConditionalPresentPerfectWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectWe + ConditionalPresentPerfectWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectYou1}-${ConditionalPresentPerfectYou1Result}`}><span className="text-dark">{ConditionalPresentPerfectYou1} </span><span className="text-info">{ConditionalPresentPerfectYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectYou1 + ConditionalPresentPerfectYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectThey}-${ConditionalPresentPerfectTheyResult}`}><span className="text-dark">{ConditionalPresentPerfectThey} </span><span className="text-info">{ConditionalPresentPerfectTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectThey + ConditionalPresentPerfectTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm">
                            <div className="card m singleverb-card ml-5 mt-5">
                                <p className="text-center text-danger pt-3">{ConditionalPresentPerfectProgressive}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectProgressiveI}-${ConditionalPresentPerfectProgressiveIRresult}`}> <span className="text-dark"> {ConditionalPresentPerfectProgressiveI} </span><span className="text-info">{ConditionalPresentPerfectProgressiveIRresult} </span></NavLink>  <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectProgressiveI + ConditionalPresentPerfectProgressiveIRresult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i> </li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectProgressiveYou}-${ConditionalPresentPerfectProgressiveYouResult}`}><span className="text-dark">{ConditionalPresentPerfectProgressiveYou}  </span><span className="text-info">{ConditionalPresentPerfectProgressiveYouResult}</span> </NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectProgressiveYou + ConditionalPresentPerfectProgressiveYouResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/he-${ConditionalPresentPerfectProgressiveHeResult}`}><span className="text-dark">{ConditionalPresentPerfectProgressiveHe} </span><span className="text-info">{ConditionalPresentPerfectProgressiveHeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectProgressiveHe + ConditionalPresentPerfectProgressiveHeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectProgressiveWe}-${ConditionalPresentPerfectProgressiveWeResult}`}><span className="text-dark">{ConditionalPresentPerfectProgressiveWe} </span><span className="text-info">{ConditionalPresentPerfectProgressiveWeResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectProgressiveWe + ConditionalPresentPerfectProgressiveWeResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectProgressiveYou1}-${ConditionalPresentPerfectProgressiveYou1Result}`}><span className="text-dark">{ConditionalPresentPerfectProgressiveYou1} </span><span className="text-info">{ConditionalPresentPerfectProgressiveYou1Result}</span></NavLink><i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectProgressiveYou1 + ConditionalPresentPerfectProgressiveYou1Result)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                    <li className="list-group-item"><NavLink to={`/translate/${ConditionalPresentPerfectProgressiveThey}-${ConditionalPresentPerfectProgressiveTheyResult}`}><span className="text-dark">{ConditionalPresentPerfectProgressiveThey} </span><span className="text-info">{ConditionalPresentPerfectProgressiveTheyResult}</span></NavLink> <i className="fa fa-volume-up ml-4  text-danger" onClick={() => {
                                        const utterance = new SpeechSynthesisUtterance(ConditionalPresentPerfectProgressiveThey + ConditionalPresentPerfectProgressiveTheyResult)
                                        utterance.rate = .9
                                        utterance.lang = "us-US"
                                        speechSynthesis.speak(utterance)
                                    }}> </i></li>
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>

                <div className="col-sm-2 singlever-right bg-info ">
                    Mes publicites seront ici!
               </div>

            </div>



        </div>
    )
}

export default SingleVerb

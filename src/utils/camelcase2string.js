
export default function Camel2String(text) {
    var result = text.replace( /([A-Z])/g, " $1" );
    var finalResult = result.charAt(0).toUpperCase().trim() + result.slice(1);
    return finalResult;
}
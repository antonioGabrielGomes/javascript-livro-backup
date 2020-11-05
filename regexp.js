var expReg1 = new RegExp('abc')
var expReg2 = /abc/


//console.log(/abc/.test("abcde"))
//console.log(/abc/.test("1234"))


//console.log(/[0123456789]/.test("ano 1992"))

//console.log(/[0-9]/.test("ano 1992"))

/**

\d  caracteres numéricos
\w  caracteres alfanuméricos ('letras')
\s  espaços em branco (espaço, tabs, quebras de linha e similares)
\D  caracteres que não são digitos
\W  caracteres não alfanuméricos
\S  caracteres que não representam espaços
.   são todos os caracteres, exceto espaços

 */


//var dataHora = /\d\d\/\d\d\/\d\d\d\d \d\d:\d\d/;
//console.log( dataHora.test("30/01/2003 15:20") )
//console.log( dataHora.test("30/jan/2003 15:20") )


var naoBinario = /[^01]/
//console.log(naoBinario.test("01101"))

//console.log(naoBinario.test("01201"))


//console.log(/'\d+'/.test("'123'"))
//console.log(/'\d+'/.test("''"))

//console.log(/'\d*'/.test("'123'"))
//console.log(/'\d*'/.test("''"))


var neighbor = /neighbou?r/
//console.log(neighbor.test('neighbour'))
//console.log(neighbor.test('neighbor'))


var dataHora = /\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{2}/;
//console.log( dataHora.test("30/1/2003 8:45") );


var cartoonCrying = /boo+(hoo+)+/i
//console.log( cartoonCrying.test("Boohoooohoohooo") )

var match = /\d+/.exec('one two 100')

//console.log(match)

//console.log("one two 100".match(/\d+/))


var textoCitado = /'([^']*)'/
//console.log(textoCitado.exec("'ela disse adeus'"))

//console.log(/bad(ly)?/.exec("bad"))
//console.log(/(\d)+/.exec("123"))

function buscaData(string) {
    var dateTime = /(\d{1,2})\/(\d{1,2})\/(\d{4})/
    var match = dateTime.exec(string)
    //console.log(match)
    return new Date(Number(match[3]), Number(match[2]), Number(match[1]))
}

//console.log(buscaData('21/1/2014'))
//console.log(buscaData("100/1/30000"))

//console.log(/cat/.test("concatenate"))
//console.log(/\bcat\b/.test("concatenate"))


var contagemAnimal = /\b\d+ (porco|vaca|galinha)s?\b/
//console.log( contagemAnimal.test("15 porcos")  )
//console.log( contagemAnimal.test("15 porcosgalinhas") )


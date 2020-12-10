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
    let dateTime = /(\d{1,2})\/(\d{1,2})\/(\d{4})/
    let match = dateTime.exec(string)
    return new Date(Number(match[3]), Number(match[2]), Number(match[1]))
}

//console.log( buscaData("21/1/2014") )

//console.log(/cat/.test("concatenate"))
//console.log(/\bcat\b/.test("concatenate"))


var contagemAnimal = /\b\d+ (porco|vaca|galinha)s?\b/
//console.log( contagemAnimal.test("15 porcos")  )
//console.log( contagemAnimal.test("15 porcosgalinhas") )


var retroceder = /\b([01]+b|\d+|[\da-f]h)\b/
//console.log(retroceder.test("103"))

//console.log("papa".replace("p", "m"))
//console.log("Borobudur".replace(/[ou]/, "a"))
//console.log("Borobudur".replace(/[ou]/g, "a"))

//console.log("Hopper, Grace\nMcCarthy, John\nRitchie, Dennis".replace(/([\w ]+), ([\w ]+)/g, "$2 $1"))

var s = "the cia and fbi"
/*
console.log(s.replace(/\b(fbi|cia)\b/g, (str) => {
    return str.toUpperCase()
}))
*/

var stock = "1 lemon, 2 cabbages, and 101 eggs"
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1
    if (amount == 1) 
        unit = unit.slice(0, unit.length - 1)
    else if (amount == 0)
        amount = "no"
    return amount + " " + unit
}
//console.log(stock.replace(/(\d+) (\w+)/g, minusOne))


function stripComments(code){
    return code.replace(/\/\/.*|\/\*[\w\W]*?\*\//g, "")
}

//console.log(stripComments("1 + /* 2 */3"))
//console.log(stripComments("x = 10;// ten!"))
//console.log(stripComments("1 /* a */+/* b */ 1"))


var name = "dea+hl[]rd";
var text = "This dea+hl[]rd guy is quite annoying.";
var escaped = name.replace(/[^\w\s]/g, "\\$&");
var regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
//console.log(text.replace(regexp, "_$1_"));



var pattern = /y/g
pattern.lastIndex = 3
var match = pattern.exec('xyzzy')
//console.log(match.index)

//console.log(pattern.lastIndex)

//console.log("Banana".match(/an/g));

var input = "A text with 3 numbers in it... 42 and 88.";
var re = /\b(\d+)\b/g
var match 
/*
while (match = re.exec(input)) {
    console.log("Found ", match[1], "at", match.index)
}
*/







// programa para executar arquivo .ini
function parseINI(texto) {
    var categorias = [];
    function novaCategoria(nome) {
      var categ = {nome: nome, fields: []};
      categorias.push(categ);
      return categ;
    }
    var categoriaAtual = novaCategoria("TOP");
  
    texto.split(/\r?\n/).forEach(function(linha) {
      var encontrados;
      if (/^\s*(;.*)?$/.test(linha))
        return;
      else if (encontrados = linha.encontrados(/^\[(.*)\]$/))
        categoriaAtual = novaCategoria(encontrados[1]);
      else if (encontrados = linha.encontrados(/^(\w+)=(.*)$/))
        categoriaAtual.fields.push({nome: encontrados[1],
                                     value: encontrados[2]});
      else
        throw new Error("Linha '" + linha + "' is invalid.");
    });
  
    return categorias;
  }


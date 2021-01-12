function testaIgualdadeCodificar(resultEsperado, resultObtido) {
  if (resultObtido === resultEsperado) {
    console.log('Xuxu beleza');
  }
  else{
    console.log('Deu pau, '+'o resultado eperado era: '+ resultEsperado + '. Porém o resutado obtido foi: ' + resultObtido);
  }
}

testaIgualdadeCodificar("bcdefghijklmnopqrstuvwxyza", cipherEncode("abcdefghijklmnopqrstuvwxyz",1));
testaIgualdadeCodificar("zabcdefghijklmnopqrstuvwxy", cipherEncode("abcdefghijklmnopqrstuvwxyz",25));
testaIgualdadeCodificar("zabcdefghijklmnopqrstuvwxy", cipherEncode("abcdefghijklmnopqrstuvwxyz",-1));
testaIgualdadeCodificar("bcdefghijklmnopqrstuvwxyza", cipherEncode("abcdefghijklmnopqrstuvwxyz",-25));
testaIgualdadeCodificar("àcdeêghiíklmnoõqrstuüwxyza", cipherEncode("àbcdêfghíjklmnõpqrstüvwxyz",1));
testaIgualdadeCodificar("Rl Gkhbph 123!", cipherEncode("Oi Dheyme 123!",3));
testaIgualdadeCodificar("ÀCDEÊGHIÍKLMNOÕQLSTUÜWXYZA", cipherEncode("ÀBCDÊFGHÍJKLMNÕPKRSTÜVWXYZ",1));


function testaIgualdadeDecodificar(resultEsperado, resultObtido) {
   if (resultObtido === resultEsperado) {
     console.log('Xuxu beleza');
   }
   else{
     console.log('Deu pau, '+'o resultado eperado era: '+ resultEsperado + '. Porém o resutado obtido foi: ' + resultObtido);
   }
}

testaIgualdadeDecodificar("abcdefghijklmnopqrstuvwxyz", cipherDecode("bcdefghijklmnopqrstuvwxyza",1));

testaIgualdadeDecodificar("abcdefghijklmnopqrstuvwxyz", cipherDecode("zabcdefghijklmnopqrstuvwxy",25));
testaIgualdadeDecodificar("abcdefghijklmnopqrstuvwxyz", cipherDecode("zabcdefghijklmnopqrstuvwxy",-1));
testaIgualdadeDecodificar("abcdefghijklmnopqrstuvwxyz", cipherDecode("bcdefghijklmnopqrstuvwxyza",-25));
testaIgualdadeDecodificar("àbcdêfghíjklmnõpqrstüvwxyz", cipherDecode("àcdeêghiíklmnoõqrstuüwxyza",1));
testaIgualdadeDecodificar("Oi Dheyme 123!", cipherDecode("Rl Gkhbph 123!",3));
testaIgualdadeDecodificar("ÀBCDÊFGHÍJKLMNÕPKRSTÜVWXYZ", cipherDecode("ÀCDEÊGHIÍKLMNOÕQLSTUÜWXYZA",1));
// Convert the given number into a roman numeral.

function convertToRoman(num) {
    let str="", nombre="";
    let cantidad=0;
  
    function  romanCalculations_function(numero,string,quantity,name){
      for(let i=0;quantity<=numero;i++){
        string= string + name;
        numero= numero-quantity;
      }
      return [numero, string];
    }
    function romanConverter(quantity,name){
      [num,str,cantidad,nombre] = romanCalculations_function(num,str,quantity,name);
    }
    
    romanConverter(1000,"M");
    romanConverter(900,"CM");
    romanConverter(500,"D");
    romanConverter(400,"CD");
    romanConverter(100,"C");
    romanConverter(90,"XC");
    romanConverter(50,"L");
    romanConverter(40,"XL");
    romanConverter(10,"X");
    romanConverter(9,"IX");
    romanConverter(5,"V");
    romanConverter(4,"IV");
    romanConverter(1,"I");
  
    return str;
  }
  
  console.log(convertToRoman(4));
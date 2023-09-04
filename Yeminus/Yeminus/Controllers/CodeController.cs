using Microsoft.AspNetCore.Mvc;
using Yeminus.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Yeminus.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CodeController : ControllerBase
    {

        // POST api/<CodeController>
        [Route("encode")]
        [HttpPost]
        public IActionResult Code([FromBody] Code code)
        {
            try
            {
                int letraASCII;
                string fraseEncriptada = "";
                foreach (char c in code.frase)
                {
                    //convertir char to ascii
                    letraASCII = (int)c;
                    int i = 0;

                    //condicion para saber si es un espacio vacio
                    if (letraASCII == 32)
                    {
                        //añadir espacio vacio
                        fraseEncriptada = fraseEncriptada + " ";
                    }
                    else
                    {
                        //se suma 1 hasta que se hayan sumado la cantidad de veces dadas en la key
                        while (i < code.clave)
                        {
                            //se valida si el caracter es z o Z, evitando que el siguiente caracter sea un simbolo se iguala al primer caracter del abecedario, osea a o A
                            if (letraASCII == 90)
                            {
                                letraASCII = 65;
                            }
                            else if (letraASCII == 122)
                            {
                                letraASCII = 97;
                            }
                            else
                            {
                                letraASCII = letraASCII + 1;
                            }
                            i++;
                        }
                        //ascii to string y añadir caracter encriptado de la frase
                        fraseEncriptada = fraseEncriptada + (char)letraASCII;
                    }
                }
                return Ok(fraseEncriptada);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<CodeController>
        [Route("decode")]
        [HttpPost]
        public IActionResult Encode([FromBody] string frase, int key)
        {
            try
            {
                int letraASCII;
                string fraseEncriptada = "";
                foreach (char c in frase)
                {
                    //convertir char to ascii
                    letraASCII = (int)c;
                    int i = 0;

                    //condicion para saber si es un espacio vacio
                    if (letraASCII == 32)
                    {
                        //añadir espacio vacio
                        fraseEncriptada = fraseEncriptada + " ";
                    }
                    else
                    {
                        //se suma 1 hasta que se hayan sumado la cantidad de veces dadas en la key
                        while (i < key)
                        {
                            //se valida si el caracter es z o Z, evitando que el siguiente caracter sea un simbolo se iguala al primer caracter del abecedario, osea a o A
                            if (letraASCII == 65)
                            {
                                letraASCII = 90;
                            }
                            else if (letraASCII == 97)
                            {
                                letraASCII = 122;
                            }
                            else
                            {
                                letraASCII = letraASCII - 1;
                            }
                            i++;
                        }
                        //ascii to string y añadir caracter encriptado de la frase
                        fraseEncriptada = fraseEncriptada + (char)letraASCII;
                    }
                }
                return Ok(fraseEncriptada);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

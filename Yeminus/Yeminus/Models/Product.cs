using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace Yeminus.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        public string? Descripcion { get; set; }

        [Required]
        public int Precio { get; set;  }

        [Required]
        public string? Imagen { get; set; }
        
        [Required]
        public Boolean ProductoParaLaVenta { get; set; }
        
        [Required]
        public int PorcentajeIva { get; set; }

    }
}

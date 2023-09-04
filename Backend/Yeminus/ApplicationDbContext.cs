using Microsoft.EntityFrameworkCore;
using Yeminus.Models;

namespace Yeminus
{
    public class ApplicationDbContext: DbContext
    {

        public DbSet<Product> Product { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {
            
        }
    }
}

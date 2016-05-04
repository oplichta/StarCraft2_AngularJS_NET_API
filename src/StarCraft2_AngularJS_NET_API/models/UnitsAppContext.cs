using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace StarCraft2_AngularJS_NET_API.models
{
    public class UnitsAppContext:DbContext
    {
        public DbSet<Unit> Units { get; set; }
    }
}

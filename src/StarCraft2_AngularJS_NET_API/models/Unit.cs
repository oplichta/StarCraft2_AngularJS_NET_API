using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StarCraft2_AngularJS_NET_API.models
{
    public class Unit
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Race { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using StarCraft2_AngularJS_NET_API.models;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace StarCraft2_AngularJS_NET_API.api
{
    [Route("api/[controller]")]
    public class UnitsController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Unit> Get()
        {
            return new List<Unit>
            {
                new Unit {Id=1, Name= "Zergling", Description= "Fast moving unit, fighting in large amounts with enemy", Race="Zerg" },
                new Unit {Id=2, Name= "Roach", Description= "Unit that produces toxic acid and have good armor", Race="Zerg" },
                new Unit {Id=3, Name= "Marine", Description= "Basic terran units with gauss rifles", Race="Terran" },
                new Unit {Id=4, Name= "Medivac", Description= "Airship to transport terran units ", Race="Terran" },
                new Unit {Id=5, Name= "Zelot", Description= "Basic protoss army warrior with psonic blades", Race="Protoss" },
                new Unit {Id=6, Name= "Adept", Description= "Fast moving unit, made to harass oponent base", Race="Protoss" },
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

using MCR_Adjudication.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MCR_Adjudication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordsController : ControllerBase
    {
        private readonly MassRegTestContext db;
        public RecordsController(MassRegTestContext db)
        {
            this.db = db;
        }
        public IActionResult Index()
        {
            List<ChildDetail> records = db.ChildDetails.Where(r => r.RecStatus == 2).Take(10).ToList();
            List<PossibleDuplicate> possibleDuplicates = db.PossibleDuplicates.Take(10).ToList();

            RecordDuplicate recordduplicates = new RecordDuplicate();

            recordduplicates.Records = records;
            recordduplicates.PossibleDuplicates = possibleDuplicates;

            return Ok(recordduplicates);
        }
    }
}

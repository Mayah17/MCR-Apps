namespace MCR_Adjudication.Models
{
    public class RecordDuplicate
    {
        public List<ChildDetail> Records { get; set; }
        public List<PossibleDuplicate> PossibleDuplicates { get; set; }
    }
}

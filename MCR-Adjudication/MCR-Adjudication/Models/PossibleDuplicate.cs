using System;
using System.Collections.Generic;

namespace MCR_Adjudication.Models
{
    public partial class PossibleDuplicate
    {
        public long Id { get; set; }
        public string RegistrationId { get; set; } = null!;
        public string? PersonId { get; set; }
        public string Firstname { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Othernames { get; set; } = null!;
        public string Sex { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public string NationalId { get; set; } = null!;
        public string BirthDistrict { get; set; } = null!;
        public string BirthVillage { get; set; } = null!;
        public string BirthTa { get; set; } = null!;
        public bool ParentsAreMarried { get; set; }
        public DateTime? DateOfMarriage { get; set; }
        public string MotherPin { get; set; } = null!;
        public string MotherFirstname { get; set; } = null!;
        public string MotherOthernames { get; set; } = null!;
        public string MotherSurname { get; set; } = null!;
        public string MotherNationality { get; set; } = null!;
        public string FatherPin { get; set; } = null!;
        public string FatherFirstname { get; set; } = null!;
        public string FatherOthernames { get; set; } = null!;
        public string FatherSurname { get; set; } = null!;
        public string FatherNationality { get; set; } = null!;
        public string InformantNationality { get; set; } = null!;
        public string InformantFirstname { get; set; } = null!;
        public string InformantOthernames { get; set; } = null!;
        public string InformantSurname { get; set; } = null!;
        public string RelationshipToChild { get; set; } = null!;
        public string InformantDistrict { get; set; } = null!;
        public string InformantTa { get; set; } = null!;
        public string InformantVillage { get; set; } = null!;
        public string PostalAddress { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public DateTime DateInformantSigned { get; set; }
        public string PlaceOfRegistrationDistrict { get; set; } = null!;
        public string PlaceOfRegistrationTa { get; set; } = null!;
        public string PlaceOfRegistrationVillage { get; set; } = null!;
        public string BirthEntryNumber { get; set; } = null!;
        public string BirthRegistrationNumber { get; set; } = null!;
        public string SimilarityScore { get; set; } = null!;
    }
}

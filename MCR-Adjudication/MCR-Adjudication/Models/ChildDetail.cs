using System;
using System.Collections.Generic;

namespace MCR_Adjudication.Models
{
    public partial class ChildDetail
    {
        public long Id { get; set; }
        public string RegistrationId { get; set; } = null!;
        public string Firstname { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Othernames { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public string BirthTa { get; set; } = null!;
        public string BirthVillage { get; set; } = null!;
        public string BirthDistrict { get; set; } = null!;
        public int TypeOfBirth { get; set; }
        public string MotherPin { get; set; } = null!;
        public string MotherSurname { get; set; } = null!;
        public string MotherFirstname { get; set; } = null!;
        public string MotherOthernames { get; set; } = null!;
        public string MotherNationality { get; set; } = null!;
        public string FatherPin { get; set; } = null!;
        public string FatherSurname { get; set; } = null!;
        public string FatherFirstname { get; set; } = null!;
        public string FatherOthernames { get; set; } = null!;
        public string FatherNationality { get; set; } = null!;
        public string InformantPin { get; set; } = null!;
        public string InformantSurname { get; set; } = null!;
        public string InformantFirstname { get; set; } = null!;
        public string InformantOthernames { get; set; } = null!;
        public string PostalAddress { get; set; } = null!;
        public string InformantDistrict { get; set; } = null!;
        public string InformantTa { get; set; } = null!;
        public string InformantVillage { get; set; } = null!;
        public string CohortNumber { get; set; } = null!;
        public string PlaceOfRegistrationId { get; set; } = null!;
        public DateTime DateOfRegistration { get; set; }
        public string RelationshipToChild { get; set; } = null!;
        public string InformantNationality { get; set; } = null!;
        public string Category { get; set; } = null!;
        public bool Uploaded { get; set; }
        public bool ParentAreMarried { get; set; }
        public DateTime DateOfMarriage { get; set; }
        public string ChildSex { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string EditMachine { get; set; } = null!;
        public string EditUser { get; set; } = null!;
        public string UniqueKitId { get; set; } = null!;
        public bool FormSignedByVillageHead { get; set; }
        public bool ParentsAreMarried { get; set; }
        public DateTime TimeOfUpload { get; set; }
        public bool RounderDurress { get; set; }
        public bool ChildIsInSchool { get; set; }
        public string? TypeOfSchool { get; set; }
        public int? Downloaded { get; set; }
        public string? SchoolName { get; set; }
        public string? SchoolZone { get; set; }
        public string? RegistrationDistrict { get; set; }
        public string? TeacherName { get; set; }
        public int? RecStatus { get; set; }
        public string? Ben { get; set; }
        public string? Brn { get; set; }
        public string? Pin { get; set; }
    }
}

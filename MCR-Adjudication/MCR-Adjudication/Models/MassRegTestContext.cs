using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MCR_Adjudication.Models
{
    public partial class MassRegTestContext : DbContext
    {
        public MassRegTestContext()
        {
        }

        public MassRegTestContext(DbContextOptions<MassRegTestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ChildDetail> ChildDetails { get; set; } = null!;
        public virtual DbSet<PossibleDuplicate> PossibleDuplicates { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=MassRegTest;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChildDetail>(entity =>
            {
                entity.ToTable("ChildDetail");

                entity.HasIndex(e => e.Id, "IX_ChildDetail")
                    .IsUnique();

                entity.Property(e => e.Ben)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ben");

                entity.Property(e => e.BirthDistrict)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BirthTa)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("BirthTA");

                entity.Property(e => e.BirthVillage)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Brn)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("brn");

                entity.Property(e => e.Category)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ChildSex)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CohortNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfBirth).HasColumnType("datetime");

                entity.Property(e => e.DateOfMarriage).HasColumnType("date");

                entity.Property(e => e.DateOfRegistration).HasColumnType("datetime");

                entity.Property(e => e.EditMachine)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EditUser)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FatherFirstname)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FatherNationality)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FatherOthernames)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FatherPin)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.FatherSurname)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Firstname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantDistrict)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantFirstname)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.InformantNationality)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantOthernames)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.InformantPin)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.InformantSurname)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.InformantTa)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("InformantTA");

                entity.Property(e => e.InformantVillage)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MotherFirstname)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MotherNationality)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MotherOthernames)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.MotherPin)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.MotherSurname)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Othernames)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Pin)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("pin");

                entity.Property(e => e.PlaceOfRegistrationId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.RegistrationDistrict)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.RegistrationId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RelationshipToChild)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RounderDurress).HasColumnName("ROUnderDurress");

                entity.Property(e => e.SchoolName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SchoolZone)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TeacherName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TimeOfUpload).HasColumnType("datetime");

                entity.Property(e => e.TypeOfSchool)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UniqueKitId)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PossibleDuplicate>(entity =>
            {
                entity.ToTable("PossibleDuplicate");

                entity.HasIndex(e => e.Id, "IXPD_ChildDetail")
                    .IsUnique();

                entity.Property(e => e.BirthDistrict)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BirthEntryNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BirthRegistrationNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BirthTa)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BirthVillage)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DateInformantSigned).HasColumnType("date");

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.DateOfMarriage).HasColumnType("date");

                entity.Property(e => e.FatherFirstname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FatherNationality)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FatherOthernames)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FatherPin)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.FatherSurname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Firstname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantDistrict)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantFirstname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantNationality)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantOthernames)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantSurname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantTa)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InformantVillage)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MotherFirstname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MotherNationality)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MotherOthernames)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MotherPin)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.MotherSurname)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.NationalId)
                    .HasMaxLength(8)
                    .IsUnicode(false);

                entity.Property(e => e.Othernames)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PersonId)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PlaceOfRegistrationDistrict)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PlaceOfRegistrationTa)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PlaceOfRegistrationVillage)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RegistrationId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RelationshipToChild)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Sex)
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.SimilarityScore)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

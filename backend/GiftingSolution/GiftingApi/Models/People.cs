

using System.ComponentModel.DataAnnotations;

public record PersonItemResponse(string Id, string FirstName, string LastName);

public record PersonResponse(List<PersonItemResponse> Data);

public record PersonCreateRequest : IValidatableObject
{
    [Required, MaxLength(100)]
    public string FirstName { get; set; } = string.Empty;
    [Required, MaxLength(100)]
    public string LastName { get; set; } = string.Empty;

    public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
    {
        if(FirstName.Trim().ToUpperInvariant() == "DARTH" && LastName.Trim().ToUpperInvariant() == "VADER")
        {
            yield return new ValidationResult("We have a strict no Sith policy", new string[] { nameof(FirstName), nameof(LastName) });
        }
    }
}
namespace GiftingApi.Domain;

public interface ICatalogPeople
{
    Task<PersonItemResponse> AddPersonAsync(PersonCreateRequest request);
    Task<PersonResponse> GetPeopleAsync();
}
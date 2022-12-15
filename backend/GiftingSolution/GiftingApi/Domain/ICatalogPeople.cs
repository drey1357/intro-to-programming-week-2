namespace GiftingApi.Domain;

public interface ICatalogPeople
{
    Task<PersonItemResponse> AddPersonAsync(PersonCreateRequest request);
    Task<PersonResponse> GetPeopleAsync(CancellationToken token);
    Task<PersonItemResponse> GetPersonByIdAsync(int id);
    Task<PersonResponse> GetPersopnByIdAsync(int id);
}
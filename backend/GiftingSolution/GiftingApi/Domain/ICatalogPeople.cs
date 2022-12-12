namespace GiftingApi.Domain;

public interface ICatalogPeople
{
    Task<PersonResponse> GetPeopleAsync();
}
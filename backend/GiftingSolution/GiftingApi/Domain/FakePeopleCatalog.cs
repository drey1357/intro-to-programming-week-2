namespace GiftingApi.Domain;

public class FakePeopleCatalog : ICatalogPeople
{
    public Task<PersonResponse> GetPeopleAsync()
    {
        // SLIME!
        var people = new List<PersonItemResponse>()  {
            new PersonItemResponse("1", "Bill", "Hulley"),
            new PersonItemResponse("2", "Sarah", "Iozzi")
        };
        return Task.FromResult(new PersonResponse(people));
    }
}
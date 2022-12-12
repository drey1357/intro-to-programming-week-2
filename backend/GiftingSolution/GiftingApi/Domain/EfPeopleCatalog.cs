using GiftingApi.Adapters;
using Microsoft.EntityFrameworkCore;

namespace GiftingApi.Domain;

public class EfPeopleCatalog : ICatalogPeople
{
    private readonly GiftingDataContext _context;

    public EfPeopleCatalog(GiftingDataContext context)
    {
        _context = context;
    }

    public async Task<PersonResponse> GetPeopleAsync()
    {
        var data = await _context.People
            .Where(prop => prop.UnFriended == false)
            .Select(prop => new PersonItemResponse(prop.Id.ToString(), prop.FirstName, prop.LastName))
            .ToListAsync();

        return new PersonResponse(data);
    }
}

using GiftingApi.Adapters;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace GiftingApi.Domain;

public class EfPeopleCatalog : ICatalogPeople
{
    private readonly GiftingDataContext _context;

    public EfPeopleCatalog(GiftingDataContext context)
    {
        _context = context;
    }

    public async Task<PersonItemResponse> AddPersonAsync(PersonCreateRequest request)
    {
        // copy the data from the request into a new PersonEntity, providing any additional daa we need, and add that
        // "mapping" (PersonCreateRequest -> PersonEntity)
        var personToAdd = new PersonEntity
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            CreatedAt = DateTime.UtcNow,
            UnFriended = false
        };
        // DataContext is an implementation of two patterns:
        // one is a "repository pattern"
        // the other is a unit of work pattern

        _context.People.Add(personToAdd);

        await _context.SaveChangesAsync();
        // the person being added into the database will have an id assigned after the changes are saved

        return new PersonItemResponse(personToAdd.Id.ToString(), personToAdd.FirstName, personToAdd.LastName);
    }


    public async Task<PersonResponse> GetPeopleAsync(CancellationToken token)
    {
        // Select Id, FirstName, LastName from People where Unfriended = 0
        var data = await GetPeopleThatAreStillFriends().
        Select(p => new PersonItemResponse(p.Id.ToString(), p.FirstName, p.LastName)).ToListAsync(token);
        return new PersonResponse(data!);
    }

    public async Task<PersonItemResponse> GetPersonByIdAsync(int id)
    {
        return await GetPeopleThatAreStillFriends()
            .Where(p => p.Id == id)
            .Select(p => new PersonItemResponse(p.Id.ToString(), p.FirstName, p.LastName))
            .SingleOrDefaultAsync();
    }

    public Task<PersonResponse> GetPersopnByIdAsync(int id)
    {
        throw new NotImplementedException();
    }

    private IQueryable<PersonEntity> GetPeopleThatAreStillFriends()
    {
        return _context.People.Where(p => p.UnFriended == false).OrderBy(p => p.LastName).ThenBy(p => p.FirstName);
    }


}

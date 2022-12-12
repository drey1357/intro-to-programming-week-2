

namespace GiftingApi.Controllers;

public class PeopleController : ControllerBase
{
    private readonly ICatalogPeople _personCatalog;
    public PeopleController(ICatalogPeople personCatalog)
    {
        _personCatalog = personCatalog;
    }


    // GET /people
    [HttpGet("/people")]
    public async Task<ActionResult<PersonResponse>> GetAllPeople()
    {
        
        PersonResponse response = await _personCatalog.GetPeopleAsync();
        return Ok(response);
    }
}
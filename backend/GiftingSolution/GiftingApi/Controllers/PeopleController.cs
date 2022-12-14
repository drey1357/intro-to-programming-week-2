

namespace GiftingApi.Controllers;

[ApiController]
public class PeopleController : ControllerBase
{
    private readonly ICatalogPeople _personCatalog;
    private readonly ILogger<PeopleController> _logger;
    public PeopleController(ICatalogPeople personCatalog, ILogger<PeopleController> logger)
    {
        _personCatalog = personCatalog;
        _logger = logger;
    }

    [HttpGet("/people/{id:int}")]
    public async Task<ActionResult<PersonItemResponse>> GetPersonById(int id)
    {
        PersonItemResponse? response = await _personCatalog.GetPersonByIdAsync(id);
        if (response is null)
        {
            return NotFound();
        }
        else
        {
            return Ok(response);
        }
    }

    [HttpPost("/people")]
    public async Task<ActionResult<PersonItemResponse>> AddPerson([FromBody] PersonCreateRequest request)
    {
        // validate the request
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        // if it is valid -- do the work (add to our database)
        // if it is NOT valid, you send a 400 (bad request)
        // if it is good, return a 201 (created)
        // it is also good to send a location header
        // and a copy of the new thing you created

        PersonItemResponse response = await _personCatalog.AddPersonAsync(request);
        return StatusCode(201, response);
    }

    // GET /people
    [HttpGet("/people")]
    public async Task<ActionResult<PersonResponse>> GetAllPeople(CancellationToken token)
    {
        try
        {
            await Task.Delay(3000);
            PersonResponse response = await _personCatalog.GetPeopleAsync(token);
            _logger.LogInformation($"Got {response.Data.Count} people from the database");
            return Ok(response);
        }
        catch (TaskCanceledException)
        {

            _logger.LogInformation("Fine. They hung up; no reason to send a response");
            return BadRequest();
        }
    }
}
using GiftingApi.Adapters;
using GiftingApi.Models;

namespace GiftingApi.Controllers;

public class StatusController : ControllerBase
{

    private readonly OnCallLookupApiAdapter _api;

    public StatusController(OnCallLookupApiAdapter api)
    {
        _api = api;
    }

    [HttpGet("/status")]
    public async Task<ActionResult> GetApiStatus()
    {
        var dev = await _api.GetOnCallDeveloperAsync();
        var response = new StatusResponse(
            "All Good!", DateTime.Now, dev!);
        return Ok();
    }
}


public record StatusResponse(string Status, DateTime LastChecked, OnCallDeveloperResponse OnCallDeveloper);
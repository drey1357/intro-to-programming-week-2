using GiftingApi.Models;

namespace GiftingApi.Adapters;

public class OnCallLookupApiAdapter
{
    private readonly HttpClient _client;
    public OnCallLookupApiAdapter(HttpClient client)
    {
        _client = client;
    }

    public async Task<OnCallDeveloperResponse?> GetOnCallDeveloperAsync()
    {
        var response = await _client.GetAsync("/developer");

        response.EnsureSuccessStatusCode();

        var dev = await response.Content.ReadFromJsonAsync<OnCallDeveloperResponse>();

        return dev;
    }
}

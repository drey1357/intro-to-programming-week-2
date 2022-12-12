

public record PersonItemResponse(string Id, string FirstName, string LastName);

public record PersonResponse(List<PersonItemResponse> Data);


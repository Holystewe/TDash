namespace TDash.Api.Contracts;

public sealed record CurrentUserResponse(string Name, IReadOnlyCollection<string> Roles);
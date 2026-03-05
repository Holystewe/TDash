using System.Security.Claims;
using TDash.Api.Contracts;

namespace TDash.Api.Services;

public sealed class UserProfileService : IUserProfileService
{
    public CurrentUserResponse BuildCurrentUser(ClaimsPrincipal user)
    {
        var name = ResolveName(user);
        var roles = ResolveRoles(user);

        return new CurrentUserResponse(name, roles);
    }

    private static string ResolveName(ClaimsPrincipal user)
    {
        return user.Identity?.Name
            ?? user.FindFirst("name")?.Value
            ?? user.FindFirst(ClaimTypes.Name)?.Value
            ?? "unknown";
    }

    private static IReadOnlyCollection<string> ResolveRoles(ClaimsPrincipal user)
    {
        return user.Claims
            .Where(claim => claim.Type is "roles" or ClaimTypes.Role)
            .Select(claim => claim.Value)
            .Distinct(StringComparer.OrdinalIgnoreCase)
            .ToArray();
    }
}
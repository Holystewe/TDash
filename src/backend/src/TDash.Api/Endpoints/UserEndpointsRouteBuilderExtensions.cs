using System.Security.Claims;
using TDash.Api.Services;

namespace TDash.Api.Endpoints;

public static class UserEndpointsRouteBuilderExtensions
{
    public static IEndpointRouteBuilder MapUserEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet(
                "/me",
                (ClaimsPrincipal user, IUserProfileService userProfileService) =>
                    Results.Ok(userProfileService.BuildCurrentUser(user))
            )
            .RequireAuthorization();

        return app;
    }
}
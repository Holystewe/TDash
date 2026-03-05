using TDash.Api.Auth;

namespace TDash.Api.Endpoints;

public static class SystemEndpointsRouteBuilderExtensions
{
    public static IEndpointRouteBuilder MapSystemEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapHealthChecks("/health");

        app.MapGet("/admin/ping", () => Results.Ok(new { area = "admin", ok = true }))
            .RequireAuthorization(AuthorizationPolicies.AdminOnly);

        app.MapGet("/store/ping", () => Results.Ok(new { area = "store", ok = true }))
            .RequireAuthorization(AuthorizationPolicies.StoreOrAdmin);

        return app;
    }
}
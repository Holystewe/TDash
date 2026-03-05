using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace TDash.Api.Auth;

public static class AuthServiceCollectionExtensions
{
    public static IServiceCollection AddAuthWithPolicies(this IServiceCollection services, IConfiguration configuration)
    {
        services
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options => ConfigureJwt(options, configuration));

        services.AddAuthorization(options =>
        {
            options.AddPolicy(AuthorizationPolicies.AdminOnly, policy => policy.RequireRole(RoleNames.Admin));
            options.AddPolicy(
                AuthorizationPolicies.StoreOrAdmin,
                policy => policy.RequireRole(RoleNames.Store, RoleNames.Admin)
            );
        });

        return services;
    }

    private static void ConfigureJwt(JwtBearerOptions options, IConfiguration configuration)
    {
        var azureAd = configuration.GetSection(AzureAdOptions.SectionName).Get<AzureAdOptions>();

        if (azureAd is null || !azureAd.Enabled)
        {
            options.Events = new JwtBearerEvents
            {
                OnMessageReceived = context =>
                {
                    context.NoResult();
                    return Task.CompletedTask;
                }
            };

            return;
        }

        options.Authority = $"https://login.microsoftonline.com/{azureAd.TenantId}/v2.0";
        options.Audience = azureAd.ClientId;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            RoleClaimType = "roles",
            NameClaimType = "name"
        };
    }
}
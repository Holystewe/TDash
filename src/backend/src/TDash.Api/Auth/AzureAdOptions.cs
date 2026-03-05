namespace TDash.Api.Auth;

public sealed class AzureAdOptions
{
    public const string SectionName = "Authentication:AzureAd";

    public bool Enabled { get; init; }

    public string TenantId { get; init; } = string.Empty;

    public string ClientId { get; init; } = string.Empty;
}

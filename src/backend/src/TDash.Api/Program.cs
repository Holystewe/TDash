using TDash.Api.Auth;
using TDash.Api.Endpoints;
using TDash.Api.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddHealthChecks();
builder.Services.AddAuthWithPolicies(builder.Configuration);
builder.Services.AddScoped<IUserProfileService, UserProfileService>();

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

app.MapSystemEndpoints();
app.MapUserEndpoints();

app.Run();

public partial class Program;

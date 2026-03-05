using System.Security.Claims;
using TDash.Api.Contracts;

namespace TDash.Api.Services;

public interface IUserProfileService
{
    CurrentUserResponse BuildCurrentUser(ClaimsPrincipal user);
}
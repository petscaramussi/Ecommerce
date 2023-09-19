using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaumsPrincipalExtensions
    {
        public static string RertrieveEmailFromPrincipal(this ClaimsPrincipal user)
        {
            return user.FindFirstValue(ClaimTypes.Email);
        }
    }
}
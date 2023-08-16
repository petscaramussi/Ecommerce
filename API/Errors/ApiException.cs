namespace API.Errors
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string message = null, string details = null) : base(statusCode, message)
        {
            Detailts = details;
        }

        public string Detailts { get; set; }
    }
}
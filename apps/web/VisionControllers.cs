using Microsoft.AspNetCore.Mvc;
using System.Collections.Concurrent;

namespace VisitorMap.Api.Controllers
{
    [ApiController]
    [Route("api")]
    public class VisitorController : ControllerBase
    {
        private static readonly ConcurrentBag<Visitor> _visitors = new();
        private readonly HttpClient _httpClient = new HttpClient();

        [HttpPost("visit")]
        public async Task<IActionResult> RegisterVisit()
        {
            try {
                // Backend üzerinden IP sorgusu yaparak tarayıcı engellerini (CORS/429) aşıyoruz
                var geo = await _httpClient.GetFromJsonAsync<GeoResponse>("http://ip-api.com/json/");
                
                if (geo != null && geo.Status == "success") {
                    if (!_visitors.Any(v => v.City == geo.City)) {
                        _visitors.Add(new Visitor {
                            Id = Guid.NewGuid().ToString(),
                            Lat = geo.Lat, Lng = geo.Lon,
                            City = geo.City, Color = "#00ff88"
                        });
                    }
                }
                return Ok();
            } catch { return BadRequest(); }
        }

        [HttpGet("visitors")]
        public IActionResult GetVisitors() => Ok(_visitors);
    }

    public class Visitor { public string Id { get; set; } public double Lat { get; set; } public double Lng { get; set; } public string City { get; set; } public string Color { get; set; } }
    public class GeoResponse { public string Status { get; set; } public double Lat { get; set; } public double Lon { get; set; } public string City { get; set; } }
}
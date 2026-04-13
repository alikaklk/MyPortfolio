using Microsoft.AspNetCore.Mvc;
using System.Collections.Concurrent;

[ApiController]
[Route("api")]
public class VisitorController : ControllerBase
{
    // Ziyaretçileri benzersiz (Unique) tutmak için Dictionary kullanıyoruz.
    // Key: IP Adresi, Value: Ziyaretçi Bilgileri
    private static readonly ConcurrentDictionary<string, Visitor> _visitorArchive = new();
    private readonly HttpClient _httpClient;

    public VisitorController(IHttpClientFactory httpClientFactory)
    {
        _httpClient = httpClientFactory.CreateClient();
    }

    [HttpPost("visit")]
    public async Task<IActionResult> RegisterVisit()
    {
        // İstek atan kişinin IP adresini alıyoruz
        string userIp = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "unknown";

        // Eğer bu IP daha önce kaydedilmediyse işlemleri yap
        if (!_visitorArchive.ContainsKey(userIp))
        {
            try {
                var geo = await _httpClient.GetFromJsonAsync<GeoResponse>("http://ip-api.com/json/");
                
                if (geo != null && geo.Status == "success") {
                    var newVisitor = new Visitor {
                        Id = Guid.NewGuid().ToString(),
                        Lat = geo.Lat,
                        Lng = geo.Lon,
                        City = geo.City,
                        Color = GetRandomSiberColor()
                    };

                    _visitorArchive.TryAdd(userIp, newVisitor);
                    Console.WriteLine($"✨ Yeni Lokasyon Arşive Eklendi: {geo.City} (IP: {userIp})");
                }
            } catch { /* Hata yönetimi */ }
        }
        
        return Ok();
    }

    [HttpGet("visitors")]
    public IActionResult GetVisitors() => Ok(_visitorArchive.Values);

    private string GetRandomSiberColor() {
        string[] colors = { "#00ff88", "#ff0055", "#00e5ff", "#ff9100", "#ffffff" };
        return colors[new Random().Next(colors.Length)];
    }
}

public class Visitor { public string Id { get; set; } public double Lat { get; set; } public double Lng { get; set; } public string City { get; set; } public string Color { get; set; } }
public class GeoResponse { public string Status { get; set; } public double Lat { get; set; } public double Lon { get; set; } public string City { get; set; } }
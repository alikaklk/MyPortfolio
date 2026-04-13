var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddCors(options => {
    options.AddDefaultPolicy(p => p.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();
app.UseCors(); // Mutlaka MapControllers'dan önce gelmeli
app.MapControllers();
app.Run();

app.Run("http://0.0.0.0:5287");
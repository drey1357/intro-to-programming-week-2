using GiftingApi.Adapters;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Setting up our services
builder.Services.AddTransient<ICatalogPeople, EfPeopleCatalog>();  // if someone asks for an ICatalogPeople, use the EfPeopleCatalog class
builder.Services.AddDbContext<GiftingDataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("gifts"));
});


// example of cross origin resource sharing (CORS)
builder.Services.AddCors(builder =>
{
    builder.AddDefaultPolicy(pol =>
    {   // "promiscuous mode"
        pol.AllowAnyHeader();
        pol.AllowAnyOrigin();
        pol.AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();


app.MapControllers();

app.Run();

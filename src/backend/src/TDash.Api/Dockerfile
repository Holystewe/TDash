FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY Directory.Build.props ./
COPY TDash.slnx ./
COPY src/TDash.Api/TDash.Api.csproj src/TDash.Api/
COPY src/TDash.Application/TDash.Application.csproj src/TDash.Application/
COPY src/TDash.Domain/TDash.Domain.csproj src/TDash.Domain/
COPY src/TDash.Infrastructure/TDash.Infrastructure.csproj src/TDash.Infrastructure/

RUN dotnet restore src/TDash.Api/TDash.Api.csproj

COPY src/ src/
RUN dotnet publish src/TDash.Api/TDash.Api.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS runtime
WORKDIR /app
COPY --from=build /app/publish ./

ENV ASPNETCORE_URLS=http://0.0.0.0:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "TDash.Api.dll"]

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Dank/Dank.csproj", "Dank/"]
RUN dotnet restore "Dank/Dank.csproj"
COPY . .
WORKDIR "/src/Dank"
RUN dotnet build "Dank.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Dank.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Dank.dll"]

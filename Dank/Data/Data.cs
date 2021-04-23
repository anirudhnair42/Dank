using System.Collections.Generic;
using Dank.Data.Models;

namespace Dank.Data
{
    public static class Data
    {
        public static List<Portofolio> Portofolios => allPorts;

        private static List<Portofolio> allPorts = new List<Portofolio>()
        {
            new Portofolio()
            {
                iD = 1,
                Name = "BTC",
                Address = "3240u08fw029430hr203804",
                TokenBal = 45.3444,
                USDBal = 800.22
            },
            new Portofolio()
            {
                iD = 2,
                Name = "ETH",
                Address = "3240u08fw029430hs23djf322r203804",
                TokenBal = 45.3444,
                USDBal = 800.22
            }
        };
    }
}
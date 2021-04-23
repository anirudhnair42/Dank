using System.Collections.Generic;
using System.Linq;
using Dank.Data.Models;

namespace Dank.Data.Services
{
    public class PortfolioService: IPortfolioService
    {
        public List<Portofolio> GetPortfolioBalances() => Data.Portofolios.ToList();

        public Portofolio getBalbyId(int iD) => Data.Portofolios.FirstOrDefault(n => n.iD == iD);

        public void updateBal(int id, Portofolio portofolio)
        {
            var oldAsset = Data.Portofolios.FirstOrDefault(n => n.iD == id);

            if (oldAsset != null)
            {
                oldAsset.TokenBal = portofolio.TokenBal;
                oldAsset.USDBal = portofolio.USDBal;
            }
        }

        public void deleteBal(int id)
        {
            var asset = Data.Portofolios.FirstOrDefault(n => n.iD == id);
            if (asset != null)
            {
                Data.Portofolios.Remove(asset);
            }
        }

        public void AddBal(Portofolio portofolio)
        {
            Data.Portofolios.Add(portofolio);
        }
    }
}
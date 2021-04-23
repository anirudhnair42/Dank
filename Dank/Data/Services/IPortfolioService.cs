using System.Collections.Generic;
using Dank.Data.Models;

namespace Dank.Data.Services
{
    public interface IPortfolioService
    {
        List<Portofolio> GetPortfolioBalances();

        Portofolio getBalbyId(int iD);

        void updateBal(int id, Portofolio portofolio);

        void deleteBal(int id);

        void AddBal(Portofolio portofolio);

    }
}
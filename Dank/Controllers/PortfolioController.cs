using Dank.Data.Models;
using Dank.Data.Services;
using Microsoft.AspNetCore.Mvc;

namespace Dank.Controllers
{
    [Route("api/[controller]")]
    public class PortfolioController: Controller
    {
        private IPortfolioService _service;
        
        public PortfolioController(IPortfolioService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetAsset()
        {
            var allAssets = _service.GetPortfolioBalances();
            return Ok(allAssets);
        }

        [HttpGet("SingleAsset/{id}")]
        public IActionResult GetAssetByID(int iD)
        {
            var asset = _service.getBalbyId(iD);
            return Ok(asset);
        }

        [HttpPost("AddAsset")]
        public IActionResult AddAsset([FromBody] Portofolio asset)
        {
            if (asset != null)
            {
                _service.AddBal(asset);
            }

            return Ok();
        }

        [HttpPut("UpdateAsset/{id}")]
        public IActionResult UpdateAsset(int iD, [FromBody]Portofolio asset)
        {
            _service.updateBal(iD, asset);
            return Ok(asset);
        }

        [HttpDelete("DeleteAsset/{id}")]
        public IActionResult DeleteAsset(int iD)
        {
            _service.deleteBal(iD);
            return Ok();
        }
    }
    
}
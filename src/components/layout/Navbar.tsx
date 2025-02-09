export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/5 backdrop-blur-[0.5px] py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-qr-green font-bold text-xl uppercase tracking-wide
          animate-[glow_2s_infinite_alternate]">
          QRCode Coin
        </div>
        <div className="flex gap-6">
          <a
            href="https://jup.ag/swap/USDC-SOL"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button text-white hover:text-qr-green uppercase text-sm tracking-wide"
          >
            Buy on Jupiter
          </a>
          <a
            href="https://dexscreener.com/solana"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-button text-white hover:text-qr-green uppercase text-sm tracking-wide"
          >
            Chart
          </a>
        </div>
      </div>
    </nav>
  )
}
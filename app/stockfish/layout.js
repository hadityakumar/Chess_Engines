
export const metadata = {
  title: "StockFish Chess Engine",
  description: "StockFish Integrated chess engine.",
};


export default function StockfishLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }
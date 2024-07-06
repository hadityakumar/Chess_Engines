
export const metadata = {
  title: "Random AI",
  description: "A simple chess engine that makes random moves.",
};


export default function RandomLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }
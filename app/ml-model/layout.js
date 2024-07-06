
export const metadata = {
  title: "Trained ML Model",
  description: "A simple chess engine that makes random moves.",
};


export default function ModelLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }
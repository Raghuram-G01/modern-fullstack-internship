import Navbar from "./components/Navbar";
// import UsersPage from "./csr/page";
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        {/* <h1>Hello from root layout</h1> */}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

// home work create a todo app in next js
// crud operation create search updare edit delete complete or not
// Missing <html> and <body> tags in the root layout?

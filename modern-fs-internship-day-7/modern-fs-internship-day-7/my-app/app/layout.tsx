import Navbar from "./components/Navbar";
import SearchFoodItems from "./components/Search";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
// import UsersPage from "./csr/page";
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <SearchFoodItems />
        <Filter />
        <Sort />
        {/* <Navbar /> */}
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

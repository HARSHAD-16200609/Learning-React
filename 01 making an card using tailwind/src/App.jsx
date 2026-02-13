import "./App.css";
import {Button} from "@/components/ui/button.tsx"
import Card from "./components/Card";
function App() {
  return (
    <>
        <Button variant="outline">Click me </Button>
      <h1 className="text-red-600 border-2 rounded-4xl p-4 text-xs mt-4">
        
        This is my First Card with @Tailwind CSS
      </h1>
      <div className="flex gap-3 justify-center">
        <Card
          title="Ichigo"
          imgadress="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/06/Ichigo-2-e1560873933660.jpg"
        />

        <Card
          title="Naruto"
          imgadress="https://getwallpapers.com/wallpaper/full/7/a/9/1322228-naruto-uzumaki-wallpaper-2048x1501-windows-10.jpg"
        />

        <Card
          title="Luffy"
          imgadress="https://tse4.mm.bing.net/th/id/OIP.sNnzmAowpLuLnfEuk-NReAHaEK?pid=Api&P=0&h=180"
        />
        <Card
          title="Goku"
          imgadress="https://tse3.mm.bing.net/th/id/OIP.GRg94jpgShjt_WoH4OdaaQHaHa?pid=Api&P=0&h=180"
        />
      </div>
    </>
  );
}

export default App;

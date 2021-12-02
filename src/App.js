import Button from "./components/Button";
import Input from "./components/Input";
import Title from "./components/Title";


const App = () => {
  const Baixar = () => {
    const canvas = document.getElementById('canvas')
    const pngUrl = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  return(
    <main>
      <Title>Gerador de QRCODE</Title>
      <Input placeholder='Insira o Link para Gerar o QRCODE'/>
      <Button onClick={Baixar}>Baixar</Button>
    </main>
  )
}


export default App;

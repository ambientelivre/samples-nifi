//Esse script é usado para adicionar ao log da tabela um erro associado a ela
var flowFile = session.get();
var File = Java.type("java.io.RandomAccessFile");
if (flowFile != null) {

  var tabela = flowFile.getAttribute("tabela_erro");
    teste = tabela.search(',')
  if (tabela !== '' && tabela !== '[]' && teste==-1) {
    tabela = tabela.replaceAll('"', '')
    tabela =tabela.replace('[', '')
    tabela = tabela.replace(']', '')
    tabela.replace(',', '')


    var bulletinMessage = flowFile.getAttribute("bulletinMessage");

          /// write to file
    var filePath = "C:/Users/Marcos/Desktop/Trabalho/opt/Nifi-bank-nda-008_fisico/Logs de erros/" + tabela + ".txt";
    flowFile = session.putAttribute(flowFile, "filePath", filePath);
    var file = new File(filePath, "rws");
    file.seek(file.length());
    file.write("\n".getBytes());

    file.write("ERRO\n".getBytes());
    file.write("bulletinMessage: ".getBytes());

    file.write(bulletinMessage.getBytes());
    file.write("\n".getBytes());


    file.close();
    }

  // Finish by transferring the FlowFile to an output relationship
  session.transfer(flowFile, REL_SUCCESS);
}
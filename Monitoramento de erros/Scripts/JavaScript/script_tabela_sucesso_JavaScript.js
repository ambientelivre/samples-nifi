//Esse script é usado para gerar um log das tabelas que finalizaram o fluxo com sucesso
var File = Java.type("java.io.RandomAccessFile");
if (flowFile != null) {

    var sucesso = flowFile.getAttribute("sucesso");

    /// write to file
    var filePath = "C:/Users/Marcos/Desktop/Trabalho/opt/Nifi-bank-nda-008_fisico/Logs de erros/tabelas_finalizadas.txt";
    flowFile = session.putAttribute(flowFile, "filePath", filePath);
     var file = new File(filePath, "rws");
     file.seek(file.length());
        file.write(sucesso.getBytes());
        file.write("\n".getBytes());
        
        file.close();
    // Finish by transferring the FlowFile to an output relationship
    session.transfer(flowFile, REL_SUCCESS);
}
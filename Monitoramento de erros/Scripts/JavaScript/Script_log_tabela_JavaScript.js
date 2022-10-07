//Esse script é usado para gerar um log em tempo real do fluxo de dados de cada tabela pelo Nifi
var flowFile = session.get();
var File = Java.type("java.io.RandomAccessFile");
if (flowFile != null) {
    var tabela = flowFile.getAttribute("tabela_flow_file");
    var componentId = flowFile.getAttribute("componentId");
    var componentName = flowFile.getAttribute("componentName");
    var processGroupName = flowFile.getAttribute("processGroupName");
    var timestampMillis = flowFile.getAttribute("timestampMillis");
    var previousAttributes = flowFile.getAttribute("previousAttributes.uuid");

    /// write to file
    var filePath = "C:/Users/Marcos/Desktop/Trabalho/opt/Nifi-bank-nda-008_fisico/Logs de erros/"+tabela+".txt";
    flowFile = session.putAttribute(flowFile, "filePath", filePath);
     var file = new File(filePath, "rws");
     file.seek(file.length());
        file.write("componentId: ".getBytes());
        file.write(componentId.getBytes());
        file.write("\n".getBytes());

        file.write("componentName: ".getBytes());
        file.write(componentName.getBytes());
        file.write("\n".getBytes());

        file.write("processGroupName: ".getBytes());
        file.write(processGroupName.getBytes());
        file.write("\n".getBytes());

        file.write("timestampMillis: ".getBytes());
        file.write(timestampMillis.getBytes());
        file.write("\n".getBytes());  
        
        file.write("UUID: ".getBytes());
        file.write(previousAttributes.getBytes());
        file.write("\n".getBytes());
        file.write("----------------------------------------".getBytes());
        file.write("\n".getBytes());

        
        file.close();
    // Finish by transferring the FlowFile to an output relationship
    session.transfer(flowFile, REL_SUCCESS);
}
def flowFile = session.get();
if (flowFile != null) {

    // Capturando um atributo
    def name = flowFile.getAttribute("filename")
    def message = "o nome do arquivo é " + name

    // criando um atributo simples
    flowFile = session.putAttribute(flowFile, "message", message)
	
	// Criando multiplos atributos
    flowFile = session.putAllAttributes(flowFile, [
            "attribute.one": "true",
            "attribute.two": "2"
    ])

    session.transfer(flowFile, REL_SUCCESS)
}

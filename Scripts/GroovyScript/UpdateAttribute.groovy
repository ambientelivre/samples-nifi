def flowFile = session.get();
if (flowFile != null) {

    // Get attributes
    def name = flowFile.getAttribute("filename")
   
	//Alterando a extensão do atributo filename
	def newname = name.replace(".csv", ".txt")
	flowFile = session.putAttribute(flowFile, "filename", newname)
    
    session.transfer(flowFile, REL_SUCCESS)
}

function FileFunctions() {

    this.download = function({ fileName = 'default.txt', fileType = 'text/plain', fileData = '' } = {}) {
      file = new File([fileData], fileName, {
          type: fileType,
      })
      const link = document.createElement('a')
      const url = URL.createObjectURL(file)
    
      link.href = url
      link.download = file.name
      document.body.appendChild(link)
      link.click()
    
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    }

}

export { FileFunctions }

const padrao = document.querySelector("#dz").querySelector("span").cloneNode(true)

function dropHandler(ev) {
    console.log('File(s) dropped');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    const dataTransfer = new DataTransfer();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
          document.querySelector("#dz").querySelector("span").innerHTML = file.name
          dataTransfer.items.add(file);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
        
        document.querySelector("#dz").querySelector("span").innerHTML = file.name
        dataTransfer.items.add(file);
      });
    }

    document.querySelector("#inpFile").files = dataTransfer.files
    document.querySelector("#dz").classList.toggle("drop-zone-over")
    document.querySelector("#dz").classList.toggle("drop-zone-full")
  }

  function dragEnterHandler(ev) {
    console.log('File(s) in drop zone');
    document.querySelector("#dz").classList.toggle("drop-zone-over")
  }

  function dragLeaveHandler(ev) {
    document.querySelector("#dz").classList.toggle("drop-zone-over")
  }

  function dragOverHandler(ev) {
    ev.preventDefault();
  }

  function inpChange(e) {
    document.querySelector("#dz").querySelector("span").innerHTML = e.files[0].name
    document.querySelector("#dz").classList.toggle("drop-zone-full")
  }
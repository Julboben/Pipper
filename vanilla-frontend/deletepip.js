// Delete Pip with Parameter
async function deletePip(selectedPipId) {
    // Gets selectedPipId Param from Button

    const rawResponse = await fetch(localHost, {
       method: 'DELETE',
       body: JSON.stringify({ idpip: selectedPipId })
    });
    console.log(rawResponse);
    const content = await rawResponse.json();
    console.log(content);
 }
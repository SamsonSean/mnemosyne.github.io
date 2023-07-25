async function FetchOwners(){
    try {
      const tokenn = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwMjAxMTIwMzExMTE1MjMiLCJuYW1lIjpbIlNFQU4uRU5DT0RFUiIsIlNFQU4uRU5DT0RFUiJdLCJVc2VybmFtZSI6InNlYW4uZW5jb2RlciIsInJvbGUiOiJFTkNPREVSIiwiQ29udHJvbF9BcmVhIjoiMDM0OTAxMDAwIiwibmJmIjoxNjkwMjY1NzM1LCJleHAiOjE3MjE4ODgxMzUsImlhdCI6MTY5MDI2NTczNSwiaXNzIjoiaHR0cHM6Ly9yYWZtZXNkZXYucGhpbG1lY2guZ292LnBoIn0.MmZkB0hyXTtaPjbPJKQUefdxoyC9vWA-ltDJghVr814'
      fetch('https://rafmesdev.philmech.gov.ph/netapi/Owners', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${tokenn}`
        }
      })
        .then((response) => {
          if (!response.ok) {
            alert("Bad Request")
          } else if (response.status === 401) {
            alert("Error fetching");
          }
          return response.json();
        })
        .then((json) => {
          var arr = json;
        
          console.log(arr)
        })
        .catch(error => {
          alert(error);
        })
        
    } catch (error) {
      alert(error);
    }
  }

  FetchOwners();
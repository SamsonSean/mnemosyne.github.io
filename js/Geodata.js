async function FetchOwners(){
    try {
      fetch('https://localhost:7172/api/Home/Heroes', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${tokenn}`
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
          
          LoadAbemisData(arr);
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

function loadData() {

    fetch('https://rafmesdev.philmech.gov.ph/netapi/meme',
        {
            method: "GET",
        })
        .then(response => {
            if (!response.ok) {
                throw new error("Can't fetch data");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });;
}

// function LoadAbemisData(data) {
//     $('#abemis-table').DataTable().destroy();
//     $('#abemis-table').DataTable({
//         "data": data,
//         "lengthChange": false,
//         'searching': false,
//         'paging': false,
//         "columns": [
//             { "data": "machine_name" },
//             { "data": "brand" },
//             { "data": "serial_number" },

//             {
//                 "data": "id",
//                 "render": function (data, type, row, meta) {
//                     return '<a href="/owners.machines-add.asp?u=' + OwnerId + '&r=' + encodeURIComponent(data) + '" class="btn btn-success">Register</a>';
//                 }
//             }
//         ]
//     });
// }

loadData();
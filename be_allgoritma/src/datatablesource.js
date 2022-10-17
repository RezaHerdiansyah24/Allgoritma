export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "namefeature",
    headerName: "Name Feature",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Easy Installation",
    description: "Lorem Ipsum has been the industry's",
  },
  {
    id: 2,
    username: "Multi Platform Chat App",
    description: "Lorem Ipsum has been the industry's",
  },
  {
    id: 3,
    username: "Secure Backup & Recovery",
    description: "Many desktop publishing packages",
  },
  {
    id: 4,
    username: "Easy File Sharing",
    description: "Lorem Ipsum has been the industry's",
  },
  {
    id: 5,
    username: "Easy Installation",
    description: "Lorem Ipsum has been the industry's",
  },
  {
    id: 6,
    username: "Multi Platform Chat App",
    description: "Lorem Ipsum has been the industry's",
  },
  {
    id: 7,
    username: "Secure Backup & Recovery",
    description: "Many desktop publishing packages",
  },
  {
    id: 8,
    username: "Easy File Sharing",
    description: "Lorem Ipsum has been the industry's",
  },
];

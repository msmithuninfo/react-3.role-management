export default function getRolePermissionsData() {
    return [
      {
        id: 1,
        name: "Admin",
        permissions: [
          {
            id: 9,
            name: "view_product"
          },
          {
            id: 10,
            name: "add_product"
          }
        ]
      },
      {
        id: 2,
        name: "Super Admin",
        permissions: [
          {
            id: 1,
            name: "create_product"
          },
          {
            id: 2,
            name: "edit_product"
          },
          {
            id: 3,
            name: "view_product"
          },
          {
            id: 4,
            name: "delete_product"
          }
        ]
      },
      {
        id: 3,
        name: "Cashier",
        permissions: [
          {
            id: 5,
            name: "create_account"
          },
          {
            id: 6,
            name: "edit_account"
          },
          {
            id: 7,
            name: "view_account"
          },
          {
            id: 8,
            name: "delete_account"
          }
        ]
      }
    ];
  }
  
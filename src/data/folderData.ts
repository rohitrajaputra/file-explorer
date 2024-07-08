export type explorerType = {
  id: number;
  name: string;
  isFolder: boolean;
  items: explorerType[];
};

const explorer: explorerType = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "public neste 1",
          isFolder: true,
          items: [
            {
              id: 4,
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: 5,
              name: "hello.html",
              isFolder: true,
              items: [],
            },
          ],
        },
        {
          id: 6,
          name: "public nested file 2",
          isFolder: true,
          items: [],
        },
      ],
    },
    {
      id: 7,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 8,
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: 9,
          name: "index.js",
          isFolder: false,
          items: [],
        },
        {
          id: 10,
          name: "styles.css",
          isFolder: false,
          items: [],
        },
      ],
    },
  ],
};

export default explorer;

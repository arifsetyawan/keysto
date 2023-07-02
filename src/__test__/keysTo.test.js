const keysTo = require("../keysTo");

describe("keysTo", function () {
  it("camel to snake case on complex input", function () {
    let targetObj = {
      name: "Arif",
      livingAddress: "Pondok Karya Agung",
      itemOnHand: {
        weapon: "sword",
        armor: "chainmail",
      },
      itemOnBag: [
        {
          itemName: "potion",
          itemQty: 1,
        },
        {
          itemName: "antidote",
          itemQty: 4,
        },
      ],
    };
    let newObj = keysTo.setKey(targetObj).toSnakeCase();
    console.log(newObj);
  });

  it("camel to snake case on input array", function () {
    let targetObj = [
      {
        itemName: "potion",
        itemQty: 1,
        sub: [
          {
            currentScore: 50,
            metaData: [
              { id: "1", levelDungeon: "medium"},
              { id: "2", levelDungeon: "medium"}
            ],
            tags: ["beta", "alpha"]
          },
          {
            currentScore: 25,
            metaData: [
              { id: "1", levelDungeon: "hard"},
              { id: "2", levelDungeon: "medium"}
            ],
            tags: ["chime", "yolo"]
          },
        ]
      },
      {
        itemName: "antidote",
        itemQty: 4,
        sub: [
          {
            currentScore: 50,
            metaData: [
              { id: "1", levelDungeon: "low"},
              { id: "2", levelDungeon: "medium"}
            ],
            tags: ["beta", "omega"]
          },
          {
            currentScore: 25,
            metaData: [
              { id: "1", levelDungeon: "low"},
              { id: "2", levelDungeon: "hard"}
            ],
            tags: ["kiku", "yolo"]
          },
        ]
      },
    ];

    let newObj = keysTo.setKey(targetObj).toSnakeCase();
    console.log(JSON.stringify(newObj));
  });

  it("snake to camel case on complex input", function () {
    let targetObj = {
      name: "Arif",
      living_address: "Pondok Karya Agung",
      item_on_hand: {
        weapon: "sword",
        armor: "chainmail",
      },
      item_on_bag: [
        {
          item_name: "potion",
          item_qty: 1,
        },
        {
          item_name: "antidote",
          item_qty: 4,
        },
      ],
    };
    let newObj = keysTo.setKey(targetObj).toCamelCase();
    console.log(newObj);
  });

  it("snake to camel case on input array", function () {
    let targetObj = [
      {
        item_name: "potion",
        item_qty: 1,
      },
      {
        item_name: "antidote",
        item_qty: 4,
      },
    ];
    let newObj = keysTo.setKey(targetObj).toCamelCase();
    console.log(newObj);
  });

  it("mix to camel case on complex input", function () {
    let targetObj = {
      name: "Arif",
      living_address: "Pondok Karya Agung",
      itemOnHand: {
        weapon: "sword",
        armor: "chainmail",
      },
      item_on_bag: [
        {
          itemName: "potion",
          itemQty: 1,
        },
        {
          item_name: "antidote",
          item_qty: 4,
        },
      ],
    };
    let newObj = keysTo.setKey(targetObj).toCamelCase();
    console.log(newObj);
  });

  it("empty Obj", function () {
    let targetObj = {};
    let newObj = keysTo.setKey(targetObj).toCamelCase();
  });

  it("empty Array", function () {
    let targetObj = [];
    let newObj = keysTo.setKey(targetObj).toCamelCase();
  });

  it("no params", function () {
    let newObj = keysTo.setKey().toCamelCase();
  });
});

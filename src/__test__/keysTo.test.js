const keysTo = require("../keysTo");

describe('keysTo', function () {
  it('camel to snake case on complex input', function () {
    let targetObj = {
      name: "Arif",
      livingAddress: "Pondok Karya Agung",
      itemOnHand: {
        weapon: "sword",
        armor: "chainmail"
      },
      itemOnBag: [
        {
          itemName: "potion",
          itemQty: 1
        },
        {
          itemName: "antidote",
          itemQty: 4
        }
      ]
    }
    let newObj = keysTo.setKey(targetObj).toSnakeCase();
    console.log(newObj);
  });

  it('camel to snake case on input array', function () {
    let targetObj = [
        {
          itemName: "potion",
          itemQty: 1
        },
        {
          itemName: "antidote",
          itemQty: 4
        }
      ];
    let newObj = keysTo.setKey(targetObj).toSnakeCase();
    console.log(newObj);
  });

  it('snake to camel case on complex input', function () {
    let targetObj = {
      name: "Arif",
      living_address: "Pondok Karya Agung",
      item_on_hand: {
        weapon: "sword",
        armor: "chainmail"
      },
      item_on_bag: [
        {
          item_name: "potion",
          item_qty: 1
        },
        {
          item_name: "antidote",
          item_qty: 4
        }
      ]
    }
    let newObj = keysTo.setKey(targetObj).toCamelCase();
    console.log(newObj);
  });

  it('snake to camel case on input array', function () {
    let targetObj = [
      {
        item_name: "potion",
        item_qty: 1
      },
      {
        item_name: "antidote",
        item_qty: 4
      }
    ];
    let newObj = keysTo.setKey(targetObj).toCamelCase();
    console.log(newObj);
  });

  it('mix to camel case on complex input', function () {
    let targetObj = {
      name: "Arif",
      living_address: "Pondok Karya Agung",
      itemOnHand: {
        weapon: "sword",
        armor: "chainmail"
      },
      item_on_bag: [
        {
          itemName: "potion",
          itemQty: 1
        },
        {
          item_name: "antidote",
          item_qty: 4
        }
      ]
    }
    let newObj = keysTo.setKey(targetObj).toCamelCase();
    console.log(newObj);
  });

  it('empty Obj', function () {
    let targetObj = {};
    let newObj = keysTo.setKey(targetObj).toCamelCase();
  });

  it('empty Array', function () {
    let targetObj = [];
    let newObj = keysTo.setKey(targetObj).toCamelCase();
  });

  it('no params', function () {
    let newObj = keysTo.setKey().toCamelCase();
  });

});

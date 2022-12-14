export default {
    name: "dish",
    title: "Dish",
    type: "document",
    fields: [
      {
        name: "dishName",
        title: "Dish Name",
        type: "string",
        validation: (Rule) => Rule.required().max(20),
      },
  
      {
        name: "price",
        title: "Price of Dish in pkr",
        type: "number",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
      },
  
      {
        name: "shortDescription",
        title: "Short Description",
        type: "string",
        validation: (Rule) => Rule.required().max(200),
      },
    ],
  };
  
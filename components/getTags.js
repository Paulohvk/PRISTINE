export default function getTags(item) {
    var dataType = "";
    switch (item.topics[3].slice(-1)) {
        case "1":
          dataType = "Temperature";
          break;
        case "2":
          dataType = "Humidity";
          break;
        case "3":
          dataType = "Temp and Humidity";
          break;
        case "4":
          dataType = "Pressure";
          break;
        case "5":
          dataType = "Test Data";
          break;
        default:
          dataType = "Any";
          break;
      }
      return dataType;
};
type Message = typeof import("./messages/en.json");
type PTMessage = typeof import("./messages/pt.json");

declare interface IntlMessages extends Message, PTMessage {}

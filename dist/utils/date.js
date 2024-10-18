"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBusinessDays = addBusinessDays;
const dayjs_1 = __importDefault(require("dayjs"));
function addBusinessDays(days) {
    let currentDate = (0, dayjs_1.default)();
    let businessDaysAdded = 0;
    while (businessDaysAdded < days) {
        if (currentDate.day() !== 0 && currentDate.day() !== 6) {
            businessDaysAdded++;
        }
        currentDate = currentDate.add(1, 'day');
    }
    return currentDate.toDate();
}
//# sourceMappingURL=date.js.map
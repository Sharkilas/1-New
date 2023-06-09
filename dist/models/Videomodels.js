"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualityCheck = exports.dbavailableResolutions = void 0;
exports.dbavailableResolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];
//export const dbavailableResolutions: Array<string> = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];
const qualityCheck = (arr, arr2) => {
    return arr.every((res) => arr2.includes(res));
};
exports.qualityCheck = qualityCheck;

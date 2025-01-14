"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EOASignature = void 0;
const ethers_1 = require("ethers");
const EOASignature = (signer) => (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.op.signature = yield signer.signMessage(ethers_1.ethers.utils.arrayify(ctx.getUserOpHash()));
    console.log("================================");
    console.log(yield ctx.getUserOpHash());
    console.log(yield signer.signMessage((ctx.getUserOpHash())));
    console.log(yield signer.signMessage(ethers_1.ethers.utils.arrayify(ctx.getUserOpHash())));
    console.log("================================");
});
exports.EOASignature = EOASignature;

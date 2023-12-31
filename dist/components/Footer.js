"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
const React = __importStar(require("react"));
const PlasmicFooter_1 = require("./plasmic/pro_pro/PlasmicFooter");
const axios_1 = __importDefault(require("axios"));
function Footer_(props, ref) {
    const [email, setEmail] = React.useState("");
    const [stage, setStage] = React.useState("beforeSubmit");
    // Use PlasmicFooter to render this component as it was
    // designed in Plasmic, by activating the appropriate variants,
    // attaching the appropriate event handlers, etc.  You
    // can also install whatever React hooks you need here to manage state or
    // fetch data.
    //
    // Props you can pass into PlasmicFooter are:
    // 1. Variants you want to activate,
    // 2. Contents for slots you want to fill,
    // 3. Overrides for any named node in the component to attach behavior and data,
    // 4. Props to set on the root node.
    //
    // By default, we are just piping all FooterProps here, but feel free
    // to do whatever works for you.
    return (React.createElement(PlasmicFooter_1.PlasmicFooter, Object.assign({ root: { ref, style: { background: "black" } } }, props, { newsletterForm: {
            stage: stage,
            emailInput: {
                className: "outline-none",
                style: {
                    backgroundColor: "transparent",
                    border: "0px transparent",
                    color: "white",
                    width: "100%",
                    fontSize: "1.25rem",
                    padding: "0.5rem",
                },
                // className: "border-none focus:ring-0 text-white",
                type: "email",
                required: true,
            },
            submitButton: { style: { border: "0px !important" } },
            onChange: (e) => setEmail(e.target.value),
            sendNewsLetter: (e) => __awaiter(this, void 0, void 0, function* () {
                const form = document.getElementById("newsletter-form");
                e.preventDefault();
                if (!form.checkValidity()) {
                    var tmpSubmit = document.createElement("button");
                    form.appendChild(tmpSubmit);
                    tmpSubmit.click();
                    form.removeChild(tmpSubmit);
                }
                else {
                    sendEmail(email, setStage);
                    setEmail("");
                }
            }),
        } })));
}
const Footer = React.forwardRef(Footer_);
exports.default = Footer;
function sendEmail(email, setStage) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield axios_1.default.post("/api/sendConformationMail", {
                email: email,
            });
            setStage("afterSubmit");
        }
        catch (error) {
            setStage("failedSubmit");
        }
    });
}

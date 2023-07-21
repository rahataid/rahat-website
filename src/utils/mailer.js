const { SMTP_USER, SMTP_PASS } = require("@config");
const nodemailer = require("nodemailer");

async function contactForm(payload) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        if (payload.isDemo === "Yes") {
            const mailOptions1 = {
                from: "Rahat - Aid Token Distribution",
                to: "mani@rumsan.net",
                subject: "Rahat Website - Request for Demo",
                html: `
                <h2>Full Name:</h2>${payload.contactName}<br/>
                <h2>Phone:</h2>${payload.contactPhone}<br/>
                <h2>Email:</h2>${payload.contactEmail}<br/>
                <h2>Message:</h2>${payload.contactMessage}<br/>`,
            };
            const mailOptions2 = {
                from: "Rahat - Aid Token Distribution",
                to: `${payload.contactEmail.trim()}`,
                subject: "Rahat Website - Request for Demo",
                html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="x-apple-disable-message-reformatting">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <title></title>
                    
                        <style type="text/css">
                            table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; } #u_content_text_9 a { text-decoration: none; } @media (max-width: 480px) { #u_content_text_14 .v-text-align { text-align: center !important; } }
                @media only screen and (min-width: 620px) {
                    .u-row {
                        width: 600px !important;
                    }
                    .u-row .u-col {
                        vertical-align: top;
                    }
                
                    .u-row .u-col-50 {
                        width: 300px !important;
                    }
                
                    .u-row .u-col-100 {
                        width: 600px !important;
                    }
                
                }
                
                @media (max-width: 620px) {
                    .u-row-container {
                        max-width: 100% !important;
                        padding-left: 0px !important;
                        padding-right: 0px !important;
                    }
                    .u-row .u-col {
                        min-width: 320px !important;
                        max-width: 100% !important;
                        display: block !important;
                    }
                    .u-row {
                        width: calc(100% - 40px) !important;
                    }
                    .u-col {
                        width: 100% !important;
                    }
                    .u-col > div {
                        margin: 0 auto;
                    }
                }
                body {
                    margin: 0;
                    padding: 0;
                }
                
                table,
                tr,
                td {
                    vertical-align: top;
                    border-collapse: collapse;
                }
                
                p {
                    margin: 0;
                }
                
                .ie-container table,
                .mso-container table {
                    table-layout: fixed;
                }
                
                * {
                    line-height: inherit;
                }
                
                a[x-apple-data-detectors='true'] {
                    color: inherit !important;
                    text-decoration: none !important;
                }
                
                
                @media (max-width: 480px) {
                    .hide-mobile {
                        max-height: 0px;
                        overflow: hidden;
                        display: none !important;
                    }
                
                    @media only screen and (max-width: 767px) {
                        .mobile-version{
                            margin-top: -120px;
                        }
                
                        .mobile-view {
                            margin-top: -60px;
                        }
                
                        .mobile-view2{
                            margin-top: -95px;
                        }
                
                        .view-mobile {
                            margin-top: 35px;
                        }
                
                        .mobile-subhead {
                            margin-top: -60px;
                        }
                
                        .mobile-text {
                            margin-top: -100px;
                        }
                    
                    }
                }
                        </style>
                    
                    
                
                <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css">
                
                </head>
                
                <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
                    
                    <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr style="vertical-align: top">
                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 10px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img align="center" border="0" src="https://assets.rumsan.com/rumsan-group/rahat-new-logo-color.png" alt="Raahat Logo" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 38%;max-width: 220.4px;" width="220.4"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">      
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <h1 class="v-text-align" style="margin: 0px; color: #231f20 ; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Cabin',sans-serif;">
                        <strong>Demo Documentation</strong>
                    </h1>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Hi ${payload.contactName
                    .split(" ")
                    .shift()},</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Thanks for your Interest in Rahat! We’re excited to have the opportunity to show you how we are working on revolutionizing relief distribution  &ndash;Please go through the steps to set up the <strong>Rahat: Agency app. </strong> </p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1f7;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px;"><strong>Step: 1</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 19.6px;">Open your browser from your <strong>MOBILE PHONE</strong> and Type <a href="https://rumsanwallet.com/">rumsanwallet.com</a></span></p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1f7;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #c2e2db;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:5px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #c2e2db;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table class="hide-mobile" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 10px 0px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img align="center" border="0" src="https://assets.rumsan.com/rumsan-group/rumsanwallet-homepage-template.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 56%;max-width: 162.4px;" width="162.4"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align mobile-version" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 2</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Click on Restore Wallet from seed phrase(mnemonic) </p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1f7;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table class="hide-mobile" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 10px 0px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img align="center" border="0" src="https://assets.rumsan.com/rumsan-group/passcode-1-template.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 68%;max-width: 197.2px;" width="197.2"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align " style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p class="mobile-view" style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 3</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%; text-align: left;">Type this 6-digit passcode to lock your wallet: &nbsp;<strong>123456</strong></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #c2e2db;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table class="hide-mobile" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 10px 0px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img align="center" border="0" src="https://assets.rumsan.com/rumsan-group/mnemonics-template.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 56%;max-width: 162.4px;" width="162.4"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">&nbsp;</p>
                <p class="mobile-view2" style="font-size: 16px; line-height: 140%;"><span style="font-size: 18px; line-height: 25.2px;"><strong>Step: 4</strong></span></p>
                <p style="font-size: 16px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Now, type these 12-word mnemonics to restore the wallet: ( 1 in each box) </p>
                <p style="font-size: 16px; line-height: 140%;"><br /><strong>smoke&nbsp;</strong> | <strong>anchor</strong> | <strong>nasty</strong> |&nbsp; <strong>volume </strong> |<strong> obscure&nbsp;</strong>| <strong>bean&nbsp;</strong> | <strong>raw</strong> |&nbsp; <strong>effort&nbsp;</strong> | <strong>stand</strong> | <strong>width&nbsp;</strong> | <strong>sunny &nbsp;</strong>| <strong>album&nbsp;</strong></p>
                <p style="font-size: 16px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1f7;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 5</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 19.6px;">After entering all the 12-word mnemonics, submit the form.</span></p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #c2e2db;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 6</strong></span></p>
                <p style="font-size: 16px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Now you are logged in to the rumsan wallet.&nbsp; Rumsan wallet is used as passwordless signup to the agency app.</p>
                <p style="font-size: 16px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1f7;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:24px 10px 25px 11px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img align="center" border="0" src="https://assets.rumsan.com/rumsan-group/admin-template.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 279px;" width="279"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 7</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Now, open the web browser on <strong>Your PC</strong>. Type <a rel="noopener" href="https://agency-stage.rahatapp.com" target="_blank">https://agency-stage.rahatapp.com</a> in the URL.</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="background-color: #c2e2db;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 8</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 19.6px;">Once again open the Rumsan wallet on your smartphone. (the phone that you used to restore rumsan wallet previously)</span></p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1f7;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table class="hide-mobile" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 24px 0px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img align="center" border="0" src="https://assets.rumsan.com/rumsan-group/lock-template.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 56%;max-width: 162.4px;" width="162.4"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align mobile-version" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 9</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Now, Unlock rumsan wallet.</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #c2e2db;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table class="hide-mobile" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 23px 0px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img class="view-mobile" align="center" border="0" src="https://assets.rumsan.com/rumsan-group/passcode-2-template.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 68%;max-width: 197.2px;" width="197.2"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p class="mobile-subhead" style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 10</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%; text-align: left;">Type this 6 digit passcode: <strong>123456</strong></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1f7;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table class="hide-mobile" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 24px 0px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                        
                            <img class="view-mobile" align="center" border="0" src="https://assets.rumsan.com/rumsan-group/wallet-template.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 56%;max-width: 162.4px;" width="162.4"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align mobile-version" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 11</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Click on the Scanner icon to Scan the QR code. </p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #c2e2db;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table class="hide-mobile" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 23px 0px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img class="view-mobile" align="center" border="0" src="https://assets.rumsan.com/rumsan-group/scan-qr-code-template.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 68%;max-width: 197.2px;" width="197.2"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align mobile-text" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 12</strong></span></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%; text-align: left;">Now, Scan the QR code of the Agency app. </p>
                <p style="font-size: 16px; line-height: 140%; text-align: left; font-style: italic;">* It might take some time to scan the QR code. Please have patience. </p>
                <p style="font-size: 16px; line-height: 140%; text-align: left;"><strong>Tips:</strong>You can refresh the agency app and rumsan wallet and try again.</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #c2e2db;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img align="center" border="0" src="https://assets.rumsan.com/rumsan-group/confirm-template.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 143px;" width="143"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                <div class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            
                            <img align="center" border="0" src="https://assets.rumsan.com/rumsan-group/success-template-1.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 154px;" width="154"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #dff1f7;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 24px 0px;font-family:'Lato',sans-serif;" align="left">
                                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                            <div class="v-text-align" style="color: #236fa1; line-height: 140%; text-align: left; word-wrap: break-word;">
                                <p style="font-size: 14px; line-height: 140%; margin-top: 50px;"><span style="font-size: 24px; line-height: 25.2px;"><strong>Step: 13</strong></span></p>
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 19.6px;">After completing this process, You will be logged in to the Agency app. </span></p>
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                            <img align="center" border="0" src="https://assets.rumsan.com/rumsan-group/dashboard-template.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 590px;" width="590"/>
                            
                        </td>
                    </tr>
                </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="line-height: 140%; text-align: left; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Also, if you want to schedule an online demo session with us to set up your account, </p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Please let us know your availability or your preferred date and time. </p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">You can view the <a href="https://drive.google.com/file/d/1aNeclouCJZz_Y65LzjAgskdCBTiYRZmP/view">User manual Instruction document</a> to know more functionalities of the Rahat Agency app.</p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">If you have any questions, you can send us an email at <a href="team@rahat.io"> team@rahat.io</a></p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                <p style="font-size: 16px; line-height: 140%;">Regards,</p>
                <p style="font-size: 16px; line-height: 140%;">Nishu Bade Shrestha,</p>
                <p style="font-size: 16px; line-height: 140%;">Business Analyst,</p>
                <p style="font-size: 16px; line-height: 140%;">Rahat<p>
                <p style="font-size: 14px; line-height: 140%;">&nbsp;</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #05559a;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                 <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:2px 0px 4px;font-family:'Lato',sans-serif;" align="left">
                                
                    <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                        <tbody>
                            <tr style="vertical-align: top">
                                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <span>&#160;</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                
                
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                    <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #2b7ec1;">
                        <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="width: 100% !important;">
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                    
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:35px 10px 10px;font-family:'Lato',sans-serif;" align="left">
                                
                <div align="center">
                    <div style="display: table;">
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
                            <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                <a href="https://github.com/esatya" title="github" target="_blank">
                                    <img src="https://assets.rumsan.com/rumsan-group/github-footer-template.png" alt="github" title="github" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                </a>
                            </td></tr>
                        </tbody></table>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
                            <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                <a href="https://discord.com/invite/p2kxaP2m8t" title="discord" target="_blank">
                                    <img src="https://assets.rumsan.com/rumsan-group/discord-footer-template.png" alt="discord" title="discord" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                </a>
                            </td></tr>
                        </tbody></table>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
                            <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                <a href="https://www.linkedin.com/company/esatya/" title="LinkedIn" target="_blank">
                                    <img src="https://assets.rumsan.com/hamro-lifebank/website/images/linkedin-transparent-logo.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                </a>
                            </td></tr>
                        </tbody></table>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
                            <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                <a href="https://twitter.com/rahataid" title="Twitter" target="_blank">
                                    <img src="https://assets.rumsan.com/rumsan-group/new-consumer-footer-twitter.png" alt="Twitter" title="Twitter" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                </a>
                            </td></tr>
                        </tbody></table>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
                            <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                <a href="https://esatya.medium.com/" title="Medium" target="_blank">
                                    <img src="https://assets.rumsan.com/rumsan-group/medium-logo.png" alt="Medium" title="Medium" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                </a>
                            </td></tr>
                        </tbody></table>
                    </div>
                </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;">+977 9801109681</p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table id="u_content_text_9" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;"><strong><a rel="noopener" href="https://rahat.io/" target="_blank"><span style="font-size: 14px; line-height: 19.6px;"><span style="font-size: 16px; line-height: 22.4px; color: #ecf0f1;">rahat.io</span></span></a></strong></p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table id="u_content_text_14" style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                    <tbody>
                        <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 30px 20px;font-family:'Lato',sans-serif;" align="left">
                                
                    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="font-size: 14px; line-height: 140%;"><span style="font-size: 12px; line-height: 16.8px;">Copyright &copy; 2021 Rahat</span></p>
                    </div>
                
                            </td>
                        </tr>
                    </tbody>
                </table>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                </body>
                
                </html>
                `,
            };
            await transporter.sendMail(mailOptions1);
            await transporter.sendMail(mailOptions2);
        } else {
            const mailOptions = {
                from: "Rahat - Aid Token Distribution",
                to: "mani@rumsan.net",
                subject: "Rahat Website - Contact Form",
                html: `<h2> Get In Touch - Contact Form</h2><br/>
                <h2>Full Name:</h2>${payload.contactName}<br/>
                <h2>Phone:</h2>${payload.contactPhone}<br/>
                <h2>Email:</h2>${payload.contactEmail}<br/>
                <h2>Message:</h2>${payload.contactMessage}<br/>`,
            };
            await transporter.sendMail(mailOptions);
        }
        return "<p>Your Application Has Been Succesfully Sent!</p>";
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

module.exports = { contactForm };


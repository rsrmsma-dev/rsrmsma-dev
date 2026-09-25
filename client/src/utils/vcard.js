// Generates and downloads a standard .vcf contact file so anyone viewing
// the portfolio can save Rovic's details straight to their phone/desktop
// contacts app in one tap — no backend required.

export const CONTACT = {
    firstName: "Rovic Steve",
    lastName: "Real",
    fullName: "Rovic Steve Real",
    org: "MSMA Solutions Department",
    title: "IT Associate / Developer",
    email: "rovic.steve@gmail.com",
    github: "https://github.com/rsrmsma-dev",
    location: "Cebu City, Philippines",
};

export function downloadVCard() {
    const lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${CONTACT.lastName};${CONTACT.firstName};;;`,
        `FN:${CONTACT.fullName}`,
        `ORG:${CONTACT.org}`,
        `TITLE:${CONTACT.title}`,
        `EMAIL;TYPE=INTERNET,PREF:${CONTACT.email}`,
        `URL:${CONTACT.github}`,
        `ADR;TYPE=WORK:;;${CONTACT.location.split(",")[0]};;;Philippines`,
        "END:VCARD",
    ];

    const blob = new Blob([lines.join("\r\n")], {
        type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "rovic-steve-real.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

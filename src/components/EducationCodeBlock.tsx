import React from "react";

const education = {
    university: "University of Nebraska - Lincoln",
    degree: "BSc in Computer Science",
    minor: "Mathematics and Business",
    graduation: "May 2027",
    honors: [
        "University Honors Program",
        "Dean's List",
        "Global Laureate Tuition Scholarship",
    ],
    gpa: 4.0,
    languages: ["English", "Portuguese"],
};

export default function EducationCodeBlock() {
    return (
        <pre className="rounded-xl bg-neutral-950/90 dark:bg-neutral-900/80 text-xs sm:text-sm p-6 font-mono overflow-x-auto border border-neutral-800 shadow-lg max-w-xl w-full select-text">
            <code>
                <span className="text-purple-400">{`{
`}</span>
                <span className="text-green-400"> "university"</span>
                <span className="text-white">: </span>
                <span className="text-blue-400">"{education.university}"</span>
                <span className="text-white">,</span>
                <br />
                <span className="text-green-400"> "degree"</span>
                <span className="text-white">: </span>
                <span className="text-blue-400">"{education.degree}"</span>
                <span className="text-white">,</span>
                <br />
                <span className="text-green-400"> "minor"</span>
                <span className="text-white">: </span>
                <span className="text-blue-400">"{education.minor}"</span>
                <span className="text-white">,</span>
                <br />
                <span className="text-green-400"> "graduation"</span>
                <span className="text-white">: </span>
                <span className="text-blue-400">"{education.graduation}"</span>
                <span className="text-white">,</span>
                <br />
                <span className="text-green-400"> "honors"</span>
                <span className="text-white">: [</span>
                <br />
                {education.honors.map((h, i) => (
                    <span key={h} className="block pl-8 text-blue-400">
                        "{h}"{i < education.honors.length - 1 ? "," : ""}
                    </span>
                ))}
                <span className="text-white"> ],</span>
                <br />
                <span className="text-green-400"> "gpa"</span>
                <span className="text-white">: </span>
                <span className="text-yellow-400">{education.gpa}</span>
                <span className="text-white">,</span>
                <br />
                <span className="text-green-400"> "languages"</span>
                <span className="text-white">: [</span>
                {education.languages.map((l, i) => (
                    <span key={l} className="text-blue-400">
                        "{l}"{i < education.languages.length - 1 ? ", " : ""}
                    </span>
                ))}
                <span className="text-white">]</span>
                <br />
                <span className="text-purple-400">{`}`}</span>
            </code>
        </pre>
    );
}

const diplomas = [
    {
        name: "Information Technology",
        id: "information-technology",
        modules: [
            {
                name: "UI/UX Design for Apps",
                code: "C218",
                id: "c218",
                desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interface (UI) in this module.",
                lecturer: {
                    name: "Azhar Kamar",
                    position: "Lecturer"
                },
            },
            {
                name: "Mobile App Development",
                code: "C346",
                id: "c346",
                desc: "In this module, students will learn the basics of creating Android Applications.",
                lecturer: {
                    name: "Derek",
                    position: "Lecturer"
                },
            },
        ],
    },
    {
        name: "Financial Technology",
        id: "financial-technology",
        modules: [
            {
                name: "Software Application Development",
                code: "C237",
                id: "c237",
                desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
                lecturer: {
                    name: "Hannah Lim",
                    position: "Lecturer"
                },
            },
            {
                name: "Payment Technologies",
                code: "C372",
                id: "c372",
                desc: "This module introduces students to the different payment technologies and systems.",
                lecturer: {
                    name: "Magdalene Lim",
                    position: "Senior Lecturer"
                },
            },
        ],
    },
];

export function getModule({ moduleId, dipId }) {
    return diplomas
        .find(({ id }) => id === dipId)
        .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(dipId) {
    return diplomas.find(({ id }) => id === dipId);
}

export function getDiplomas() {
    return diplomas.map(({ name, id }) => ({ name, id }));
}
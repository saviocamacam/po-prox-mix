export class POFakeDb {
    public static enteringSteps = [
        {
            title: "Informar quantidade de matérias-primas",
            content:
                "<h1>Quantas matérias-primas você utiliza e quanto tem disponível no período?</h1>"
        },
        {
            title: "Informar quantidade de produtos",
            content: "<h1>O que você produz e quanto recebe de lucro?</h1>"
        },
        {
            title: "Informar gasto de matéria-prima por produto",
            content:
                "<h1>Quanto é gasto de matéria prima para cada produto?</h1>"
        }
    ];
    public static transportSteps = [
        {
            title: "Informar quantidade de matérias-primas",
            content:
                "<h1>Quantas matérias-primas você utiliza e quanto tem disponível no período?</h1>"
        },
        {
            title: "Informar quantidade de produtos",
            content: "<h1>O que você produz e quanto recebe de lucro?</h1>"
        },
        {
            title: "Informar gasto de matéria-prima por produto",
            content:
                "<h1>Quanto é gasto de matéria prima para cada produto?</h1>"
        }
    ];
    public static designationSteps = [
        {
            title: "Informar método de entrada",
            content:
                "<h1>Quantas matérias-primas você utiliza e quanto tem disponível no período?</h1>"
        },
        {
            title: "Entrada de dados",
            content: "<h1>Selecione o arquivo</h1>"
        },
        {
            title: "Resultado",
            content:
                "<h1>Quanto é gasto de matéria prima para cada produto?</h1>"
        }
    ];

    public static entering = [
        {
            id: "15459251a6d6b397565",
            title: "Entrada para Problema de Mix de Produção",
            slug: "entering-data",
            description:
                "Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            category: "web",
            length: 30,
            totalSteps: POFakeDb.enteringSteps.length,
            updated: "Jun 28, 2017",
            steps: POFakeDb.enteringSteps
        },
        {
            id: "15459251a6d6b397566",
            title: "Entrada para Problema de Transporte",
            slug: "transport-data",
            description:
                "Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            category: "web",
            length: 30,
            totalSteps: POFakeDb.transportSteps.length,
            updated: "Jun 28, 2017",
            steps: POFakeDb.transportSteps
        },
        {
            id: "15459251a6d6b397567",
            title: "Entrada para Problema de Designação",
            slug: "designation-data",
            description:
                "Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            category: "web",
            length: 30,
            totalSteps: POFakeDb.designationSteps.length,
            updated: "Jun 28, 2017",
            steps: POFakeDb.designationSteps
        }
    ];
}

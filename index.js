import fs from 'fs';
const chalk = require('chalk');

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}


// função assincrona com async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro)
    }
}

// função assincrona com then

function pegaArquivo1(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}

// função sincrona

function pegaArquivo2(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
            if (erro) {
                trataErro(erro);
            }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');